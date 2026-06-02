import ExercisePage from '../../components/ExercisePage'

export default function DefaultsTimestamps() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="Defaults + Timestamps"
      difficulty="Beginner"
      description="Default values let the database fill in fields the client should not have to think about — createdAt, updatedAt, status, ids. Drizzle exposes .defaultNow() for timestamps and $onUpdate() for app-side auto-update on writes."
      whatToBuild="Add an updatedAt column to the posts table with two behaviors: defaultNow() on insert and $onUpdate(() => new Date()) so it ticks forward on every update. Then verify by POSTing a row and PATCHing it — the updatedAt should change while createdAt does not."
      keyConcepts={['.defaultNow()', '.default(value)', '$onUpdate()', 'database vs application defaults', 'sql template default']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()). The .$onUpdate hook only fires when you go through Drizzle update — direct SQL bypasses it.',
        'For computed defaults, use sql template: id: text("id").primaryKey().default(sql`gen_random_uuid()`). Postgres evaluates the expression on insert if id is omitted.',
        'Difference between .default(new Date()) and .defaultNow(): the first captures one timestamp at module load time and reuses it forever (bug!), the second emits NOW() in the SQL.',
        'After changing the schema, regenerate: npm run db:generate. Drizzle Kit emits an ALTER TABLE adding the column with the default — existing rows get NOW() as their backfill.',
      ]}
    />
  )
}
