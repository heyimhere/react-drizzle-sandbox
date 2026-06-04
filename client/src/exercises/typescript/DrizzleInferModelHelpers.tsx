import ExercisePage from '../../components/ExercisePage'

export default function DrizzleInferModelHelpers() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="InferSelectModel / InferInsertModel"
      difficulty="Intermediate"
      description="InferSelectModel<typeof users> and InferInsertModel<typeof users> are the helper-function form of $inferSelect/$inferInsert — identical results, slightly different ergonomics. Useful when you want a generic helper: function repo<T extends Table>(t: T) { type Row = InferSelectModel<T> }. Drizzle also provides Subquery type helpers for typed subqueries."
      whatToBuild="In server/src/typescript/drizzle-inference.ts (continue the file from the previous exercise), import InferSelectModel and InferInsertModel from drizzle-orm. Define type Post = InferSelectModel<typeof posts> and confirm equivalence with $inferSelect. Then write a generic repo helper repo<T extends PgTable>(table: T) returning a typed findAll/insertOne API where row types are inferred from T."
      keyConcepts={['InferSelectModel', 'InferInsertModel', 'PgTable generic constraint', 'reusable repo helpers', 'subquery types']}
      workspaceFile="server/src/typescript/drizzle-inference.ts"
      hints={[
        'Import from drizzle-orm: import type { InferSelectModel, InferInsertModel } from "drizzle-orm".',
        'InferSelectModel<typeof users> === typeof users.$inferSelect. Use the helper when writing generic code over an arbitrary table; the typeof form is shorter for one-offs.',
        'Generic over PgTable: import { PgTable } from "drizzle-orm/pg-core". repo<T extends PgTable>(t: T) lets you build typed repositories that mirror the table shape.',
        'For typed joins, see Drizzle Subquery types: typeof sq.id, typeof sq.name — the subquery exposes a typed alias. Worth a separate drill if you do a lot of join logic.',
      ]}
    />
  )
}
