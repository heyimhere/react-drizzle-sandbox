import { Router } from 'express'
import { eq } from 'drizzle-orm';
import { db } from '../db'
import { scratchItems } from '../db/schema';

const router = Router()

// Scratch around down here — wipe and rewrite freely.

router.get('/', async (_req, res) => {
  try {
    const rows = await db.select().from(scratchItems);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post('/', async (req, res) => {
  try {
    const { label } = req.body as { label?: string };
    if (!label || label.trim() === '') {
      res.status(400).json({ error: 'label is required' });
      return;
    }
    const [created] = await db.insert(scratchItems).values({ label: label.trim() }).returning();
    res.status(201).json(created)
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
