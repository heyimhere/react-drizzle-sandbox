import { Router } from 'express'
import { eq, desc, count, sql } from 'drizzle-orm';
import { db } from '../db'
import { scratchItems, scratchLog } from '../db/schema';

type CreatedItem = { id: number; label: string; done: boolean; createdAt: string };

const router = Router()

// ─── Prepared statements ─────────────────────────────────────────────────────
// Postgres parses and plans each prepared statement ONCE per connection, then
// reuses the plan for every .execute(). Saves planning cost on hot paths.
//
// Limitation: the query *shape* is fixed at .prepare() time. Only placeholder
// values can vary. Conditional WHERE clauses → one prepared statement per shape.
//
// sql.placeholder('name') marks a runtime param; supply it at .execute({ name }).
// Each .prepare() needs a unique name within the connection.

const itemsAll = db
  .select().from(scratchItems)
  .orderBy(desc(scratchItems.createdAt))
  .limit(sql.placeholder('limit'))
  .offset(sql.placeholder('offset'))
  .prepare('scratch_items_all');

const itemsDone = db
  .select().from(scratchItems)
  .where(eq(scratchItems.done, true))
  .orderBy(desc(scratchItems.createdAt))
  .limit(sql.placeholder('limit'))
  .offset(sql.placeholder('offset'))
  .prepare('scratch_items_done');

const itemsPending = db
  .select().from(scratchItems)
  .where(eq(scratchItems.done, false))
  .orderBy(desc(scratchItems.createdAt))
  .limit(sql.placeholder('limit'))
  .offset(sql.placeholder('offset'))
  .prepare('scratch_items_pending');

const countAll = db
  .select({ value: count() })
  .from(scratchItems)
  .prepare('scratch_count_all');

const countDone = db
  .select({ value: count() })
  .from(scratchItems)
  .where(eq(scratchItems.done, true))
  .prepare('scratch_count_done');

const countPending = db
  .select({ value: count() })
  .from(scratchItems)
  .where(eq(scratchItems.done, false))
  .prepare('scratch_count_pending');

// Group by filter — clean lookup at request time, no branching mess.
const queries = {
  all:     { items: itemsAll,     count: countAll     },
  done:    { items: itemsDone,    count: countDone    },
  pending: { items: itemsPending, count: countPending },
} as const;

// ─── Routes ──────────────────────────────────────────────────────────────────

router.get('/', async (req, res) => {
  try {
    const { done, limit, offset } = req.query;

    const filterKey = done === 'true' ? 'done' : done === 'false' ? 'pending' : 'all';
    const { items: itemsQuery, count: countQuery } = queries[filterKey];

    const limitNum  = Math.min(Math.max(Number(limit)  || 20, 1), 100);
    const offsetNum = Math.max(Number(offset) || 0, 0);

    const [rows, totalRows] = await Promise.all([
      itemsQuery.execute({ limit: limitNum, offset: offsetNum }),
      countQuery.execute(),
    ]);

    const total = totalRows[0]?.value ?? 0;
    res.json({ rows, total });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// ─── POST: transaction wrapping sql-tag insert + log insert ──────────────────
// db.transaction(fn) gives us a `tx` handle that's atomic — either every
// write inside commits, or NONE of them do. If the callback throws (or rejects),
// Drizzle automatically issues a ROLLBACK.
//
// Use case: creating an item and writing an audit log row must be consistent.
// If the log insert fails (FK violation, disk full, etc.), we don't want a
// silent orphan item with no audit trail.
//
// Notice we mix both Drizzle styles inside the tx:
//   - tx.execute(sql`...`)  → raw SQL (Block 4 pattern, kept here)
//   - tx.insert(table)...   → query builder
// Both go through the same transaction context.

router.post('/', async (req, res) => {
  try {
    const { label } = req.body as { label?: string };
    if (!label || label.trim() === '') {
      res.status(400).json({ error: 'label is required' });
      return;
    }
    const trimmed = label.trim();

    const created = await db.transaction(async (tx) => {
      // 1. Insert the scratch item (raw SQL, returns with aliased camelCase)
      const itemResult = await tx.execute(sql`
        INSERT INTO scratch_items (label)
        VALUES (${trimmed})
        RETURNING id, label, done, created_at AS "createdAt"
      `);
      const item = itemResult.rows[0] as CreatedItem | undefined;
      if (!item) throw new Error('Insert returned no row');

      // 2. Write the audit log entry. If this throws, the item insert
      //    above is rolled back — no orphan rows.
      await tx.insert(scratchLog).values({
        scratchItemId: item.id,
        event: 'created',
      });

      return item;
    });

    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params['id']);
    const body = req.body as Partial<{ label: string, done: boolean }>
    const [updated] = await db.update(scratchItems).set(body).where(eq(scratchItems.id, id)).returning();
    if (!updated) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params['id']);
    const [deleted] = await db.delete(scratchItems).where(eq(scratchItems.id, id)).returning();
    if (!deleted) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

export default router
