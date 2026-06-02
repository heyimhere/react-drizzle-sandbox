import ExercisePage from '../../components/ExercisePage'

export default function Indexes() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="Indexes"
      difficulty="Intermediate"
      description="Indexes turn linear scans into logarithmic lookups. Add them on columns you filter, sort, or join by. Drizzle exposes index() and uniqueIndex() inside the second argument of pgTable so the migration tool generates CREATE INDEX statements alongside the table."
      whatToBuild="Add three indexes to the existing schema: a single-column index on posts.created_at (already present — verify it), a composite index on (userId, createdAt) for per-user pagination, and a unique index on users.email (the .unique() does this — confirm the generated SQL). Run db:generate and inspect the migration."
      keyConcepts={['index()', 'uniqueIndex()', 'composite indexes', 'WHERE/ORDER BY usage', 'EXPLAIN ANALYZE']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Add indexes in the second arg of pgTable as a callback: (t) => [index("posts_user_created_idx").on(t.userId, t.createdAt)]. The first column in a composite is the most selective filter.',
        'Unique index from .unique() on a column: drizzle generates a UNIQUE constraint, which Postgres backs with a unique index automatically. uniqueIndex() in the table args is the manual form when you need a name.',
        'Run psql and EXPLAIN ANALYZE SELECT * FROM posts WHERE user_id = 1 ORDER BY created_at DESC LIMIT 10. Look for "Index Scan" — if you see "Seq Scan" your index is not being used.',
        'Drop redundant single-column indexes if you have a composite that starts with the same column. A composite (a, b) covers WHERE a = ? but a single-column (a) is dead weight.',
      ]}
    />
  )
}
