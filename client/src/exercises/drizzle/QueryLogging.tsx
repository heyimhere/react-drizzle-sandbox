import ExercisePage from '../../components/ExercisePage'

export default function QueryLogging() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="Query Logging"
      difficulty="Beginner"
      description="Drizzle's drizzle({ logger: true }) prints every generated SQL statement and its params. For production, swap in a custom logger that ships to your observability stack — pino, Logtail, Datadog. Watching the SQL is the fastest way to learn how the query builder maps to the database."
      whatToBuild="Wire a logger into the existing db connection. Start with logger: true to see SQL in the console. Then build a custom logger object with logQuery(query, params) that times the query (Date.now before and after) and warns when a single statement exceeds 100ms."
      keyConcepts={['drizzle({ logger })', 'DefaultLogger', 'custom Logger interface', 'query timing', 'slow query alerts']}
      workspaceFile="server/src/db/index.ts"
      hints={[
        'Quickest version: drizzle(pool, { schema, logger: true }). Every statement prints to stdout — useful in dev, noisy in tests.',
        'Custom logger: { logQuery(query: string, params: unknown[]) { console.log("[SQL]", query, params) } }. Implement Logger from drizzle-orm/logger for typing.',
        'Time queries by wrapping the pool, not drizzle: const pool = new Pool(...); pool.on("query", ...) is not available — instead, override pool.query with a wrapper that captures before/after and emits a metric. Drizzle goes through pool.query.',
        'For prod, ship to JSON: { logQuery(query, params) { logger.info({ query, params }, "sql") } }. Sample with a Math.random < 0.05 to avoid flooding when traffic is high.',
      ]}
    />
  )
}
