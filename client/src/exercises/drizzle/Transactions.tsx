import ExercisePage from '../../components/ExercisePage'

export default function Transactions() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="Transactions"
      difficulty="Advanced"
      description="A transaction groups multiple database operations into a single atomic unit — either all succeed or all are rolled back. Drizzle wraps the transaction in db.transaction() and passes a tx object that behaves like db but within the transaction scope."
      whatToBuild="Write a POST /users/register route that creates a user and their first post in a single transaction. Write a DELETE /users/:id/with-data route that deletes posts then the user atomically. Test rollback by deliberately throwing an error after the first insert and verify neither row was committed."
      keyConcepts={['db.transaction', 'tx', 'rollback', 'atomic', 'ACID', 'error handling']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'Wrap operations in db.transaction(async (tx) => { const [user] = await tx.insert(users)...; const [post] = await tx.insert(posts)...; return { user, post }; }). Use tx everywhere inside — not db.',
        'To trigger a rollback, throw any error inside the transaction callback. Drizzle catches it, calls ROLLBACK, and re-throws so you can handle it in a try/catch around the transaction call.',
        'Test rollback manually: throw new Error("deliberate") after the first insert. Check in psql that no user was inserted despite the first statement succeeding — the whole transaction was rolled back.',
        'Savepoints: not directly supported in Drizzle\'s API, but you can run sql`SAVEPOINT name` via tx.execute(). Useful for partial rollbacks within a large transaction — roll back to the savepoint without aborting everything.',
      ]}
    />
  )
}
