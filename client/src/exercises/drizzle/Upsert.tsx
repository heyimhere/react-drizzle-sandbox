import ExercisePage from '../../components/ExercisePage'

export default function Upsert() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Upsert"
      difficulty="Intermediate"
      description="Upserts collapse a check-then-insert-or-update into a single statement. Postgres calls this ON CONFLICT — Drizzle exposes .onConflictDoUpdate({ target, set }) and .onConflictDoNothing(). The target column must have a UNIQUE constraint for the conflict resolution to fire."
      whatToBuild="Add a POST /users/upsert route. It accepts { name, email }. If a row with that email exists, update its name. If not, insert a new one. Return the row either way with a flag created: boolean. Bonus: use excluded.name in the SET clause so the update reuses the incoming payload."
      keyConcepts={['onConflictDoUpdate', 'onConflictDoNothing', 'excluded.* in SQL', 'unique constraint targets', 'returning() distinguishing created vs updated']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'const [row] = await db.insert(users).values({ name, email }).onConflictDoUpdate({ target: users.email, set: { name } }).returning(). target must be unique; users.email already has .unique().',
        'To use the incoming payload in SET, use sql template with excluded: set: { name: sql`excluded.name` }. Lets you skip naming the value twice.',
        'Detect created vs updated by RETURNING xmax. xmax = 0 means a fresh insert; non-zero means an update. const [row] = await db.execute(sql`... returning *, (xmax = 0) as created`).',
        'onConflictDoNothing is the idempotent insert. Returns nothing on conflict — perfect for "ensure this exists" seeds.',
      ]}
    />
  )
}
