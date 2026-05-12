import ExercisePage from '../../components/ExercisePage'

export default function PreparedStatements() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="Prepared statements"
      difficulty="Advanced"
      description="A prepared statement sends the query plan to Postgres once and reuses it for every execution. Postgres skips the parse and plan phase on subsequent calls — a meaningful win for queries that run thousands of times per second."
      whatToBuild="Prepare three statements: a user lookup by id, a post search by title pattern, and a bulk post insert. Execute each statement with different parameters and measure the difference (using console.time) between the first cold execution and a warm re-execution."
      keyConcepts={['prepare', 'sql.placeholder', 'execute', 'query reuse', 'pg driver', 'performance']}
      workspaceFile="server/src/db/prepared.ts"
      hints={[
        'Prepare a select: import { placeholder } from "drizzle-orm". const getUserById = db.select().from(users).where(eq(users.id, placeholder("id"))).prepare("get_user_by_id"). Execute: await getUserById.execute({ id: 42 }).',
        'The string passed to prepare() is the statement name in Postgres. Choose a unique name — duplicate names in the same session will throw. Prefix with your app name to avoid conflicts: "sandbox_get_user_by_id".',
        'Prepared statements are connection-scoped in pg. The Pool may use a different connection on each request, requiring re-preparation. This is a known pg driver limitation — consider pg-native or pgBouncer in session mode for long-lived connections.',
        'Benchmark: console.time("cold"); await getUserById.execute({ id: 1 }); console.timeEnd("cold"). console.time("warm"); await getUserById.execute({ id: 2 }); console.timeEnd("warm"). The warm call should be measurably faster.',
      ]}
    />
  )
}
