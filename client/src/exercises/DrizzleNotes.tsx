export default function DrizzleNotes() {
  return (
    <div className="exercise">
      <h1>Drizzle ORM</h1>
      <p className="exercise-meta">Practice happens in <code>server/src/</code> — these are your reference points</p>

      <div className="exercise-goals">
        <h3>Tier 1 — Setup</h3>
        <ul>
          <li>Define a table with <code>pgTable</code> — use serial, text, boolean, timestamp, uuid column types</li>
          <li>Configure <code>drizzle.config.ts</code> with your dialect, schema path, and migrations dir</li>
          <li>Run <code>db:generate</code> and inspect the generated SQL — understand what changed</li>
          <li>Run <code>db:migrate</code> and verify the table exists in psql</li>
          <li>Set up the <code>Pool</code> + <code>drizzle(pool, &#123; schema &#125;)</code> connection in <code>db/index.ts</code></li>
        </ul>
      </div>

      <div className="exercise-goals">
        <h3>Tier 2 — CRUD</h3>
        <ul>
          <li><code>db.insert(table).values(&#123;...&#125;).returning()</code> — single and bulk insert</li>
          <li><code>db.select().from(table)</code> — all rows, specific columns, filtered rows</li>
          <li><code>db.update(table).set(&#123;...&#125;).where(...).returning()</code></li>
          <li><code>db.delete(table).where(...).returning()</code></li>
        </ul>
      </div>

      <div className="exercise-goals">
        <h3>Tier 3 — Query power</h3>
        <ul>
          <li>where helpers: <code>eq, ne, gt, lt, like, ilike, inArray, isNull, and, or, not</code></li>
          <li>Manual joins: <code>.innerJoin(other, eq(table.id, other.tableId))</code></li>
          <li>Relations API: define <code>relations()</code> then use <code>db.query.table.findMany(&#123; with: &#123;...&#125; &#125;)</code></li>
          <li>Pagination: <code>.orderBy(asc(table.createdAt)).limit(20).offset(page * 20)</code></li>
          <li>Aggregates via <code>sql</code> tag: <code>sql&lt;number&gt;`count(*)`</code></li>
        </ul>
      </div>

      <div className="exercise-goals">
        <h3>Tier 4 — Advanced</h3>
        <ul>
          <li>Transactions: <code>db.transaction(async (tx) =&gt; &#123; await tx.insert(...); &#125;)</code> — throw inside to rollback</li>
          <li>Prepared statements: <code>const q = db.select().where(eq(table.id, sql.placeholder('id'))).prepare('name')</code></li>
          <li>Raw SQL escape hatch: <code>sql&lt;T&gt;`select * from ...`</code></li>
          <li>Type inference: <code>typeof table.$inferSelect</code> and <code>typeof table.$inferInsert</code> in Express handlers</li>
        </ul>
      </div>
    </div>
  )
}
