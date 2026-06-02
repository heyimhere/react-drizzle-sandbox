import ExercisePage from '../../components/ExercisePage'

export default function ConditionalUpdate() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Conditional Update"
      difficulty="Advanced"
      description="A conditional update changes a row only when a guard predicate matches in the same SQL statement — no SELECT-then-UPDATE race. Common shapes: optimistic concurrency (where version = ?), state machines (where status = 'pending'), and partial increments."
      whatToBuild="Add PATCH /todos/:id/complete that sets done = true only if the row is currently done = false. Return the updated row from .returning() — an empty array means the row was already complete (or did not exist). Add PATCH /todos/:id/version that performs optimistic locking against a version column."
      keyConcepts={['compound where', 'optimistic concurrency', 'returning() as a signal', 'rowCount', 'state transitions']}
      workspaceFile="server/src/routes/todos.ts"
      hints={[
        'const updated = await db.update(todos).set({ done: true }).where(and(eq(todos.id, id), eq(todos.done, false))).returning(). updated.length === 0 means either the id was missing or already complete — return a 409 to distinguish if you care.',
        'Optimistic concurrency: add a version: integer().notNull().default(0) column. Update WHERE id = ? AND version = clientVersion, SET version = version + 1, …other fields. Empty .returning() = conflict, retry with fresh data.',
        'Increment a counter atomically: db.update(table).set({ count: sql`count + 1` }).where(eq(table.id, id)). Use the column reference in sql so it reads "set count = count + 1" — no read-modify-write race.',
        'State machine pattern: only allow transitions valid in your spec. .where(and(eq(order.id, id), inArray(order.status, ["pending", "confirmed"]))). Empty returning means the order was in an unexpected state.',
      ]}
    />
  )
}
