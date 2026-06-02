import ExercisePage from '../../components/ExercisePage'

export default function BulkInsert() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Bulk Insert"
      difficulty="Intermediate"
      description="Inserting one row per request is fine for app traffic but a disaster for seeding or imports. A single INSERT with thousands of rows roundtrips once and runs orders of magnitude faster than a loop. Drizzle accepts an array to .values() and returns all inserted rows via .returning()."
      whatToBuild="Add a POST /users/seed route that bulk-inserts 1,000 users with generated names like 'User 1', 'User 2', … in one statement. Chunk in batches of 200 to avoid hitting Postgres' parameter limit. Return the total count, not the rows. Verify with COUNT(*) before and after."
      keyConcepts={['array .values()', 'batching', "Postgres' 65535 parameter limit", 'returning() vs counting', 'sql.placeholder for prepared bulk']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'const batchSize = 200; for (let i = 0; i < total; i += batchSize) { const chunk = Array.from({ length: Math.min(batchSize, total - i) }, (_, j) => ({ name: `User ${i + j + 1}`, email: `u${i + j + 1}@x.io` })); await db.insert(users).values(chunk) }.',
        'Skip .returning() when you do not need the rows — it forces Postgres to ship every inserted row back, doubling network. For pure counts, await the insert and use rowCount or your own counter.',
        'Postgres caps parameters at 65535 per statement. With 5 columns per row, that limits a single insert to ~13k rows. 200-row chunks are comfortable.',
        'For seeds, wrap in a transaction: db.transaction(async (tx) => { for (… ) await tx.insert(users).values(chunk) }). If one chunk fails halfway, the whole seed rolls back — much easier than partial cleanup.',
      ]}
    />
  )
}
