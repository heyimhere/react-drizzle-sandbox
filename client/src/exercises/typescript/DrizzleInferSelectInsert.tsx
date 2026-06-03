import ExercisePage from '../../components/ExercisePage'

export default function DrizzleInferSelectInsert() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="Drizzle $inferSelect / $inferInsert"
      difficulty="Intermediate"
      description="Drizzle generates a TypeScript type for every table directly from your schema. typeof users.$inferSelect is the type returned by .select(). typeof users.$inferInsert is the type accepted by .insert().values() — generated columns and defaulted columns become optional. One source of truth: change the schema, every dependent type follows."
      whatToBuild="In server/src/typescript/drizzle-inference.ts, derive: type User = typeof users.$inferSelect (with id, name, email, createdAt). type NewUser = typeof users.$inferInsert (id and createdAt optional). Type a function indexById(rows: User[]): Record<number, User>. Then write a function makeUser(input: NewUser): NewUser that adds a default email if omitted, and prove TypeScript catches a missing required column."
      keyConcepts={['$inferSelect', '$inferInsert', 'derived row types', 'default-optional columns', 'schema as source of truth']}
      workspaceFile="server/src/typescript/drizzle-inference.ts"
      hints={[
        'On a pgTable, the inferred types live on the table object: typeof myTable.$inferSelect and typeof myTable.$inferInsert. Use typeof because the table is a value.',
        '$inferInsert respects column defaults. id (serial) is optional, createdAt (defaultNow) is optional, NOT NULL columns without defaults are required.',
        'For partial selects: type UserSummary = Pick<typeof users.$inferSelect, "id" | "name">. Compose with built-in utilities for endpoint-specific shapes.',
        'Migration-safe: when you add a column to schema.ts, every type derived from $inferSelect updates automatically. Hand-written interfaces drift; inferred ones do not.',
      ]}
    />
  )
}
