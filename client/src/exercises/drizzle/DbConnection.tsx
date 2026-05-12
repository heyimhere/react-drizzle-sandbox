import ExercisePage from '../../components/ExercisePage'

export default function DbConnection() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="DB connection"
      difficulty="Beginner"
      description="Drizzle ORM wraps a database driver — it does not manage connections itself. For PostgreSQL you create a pg.Pool (which manages a pool of connections) and pass it to drizzle(). The returned db object is what you use for all queries."
      whatToBuild="In server/src/db/index.ts: create a pg.Pool with the DATABASE_URL env var, pass it to drizzle() along with the schema object, and export the result as db. Then write a /health endpoint in index.ts that runs a simple SELECT 1 query through db to prove the connection works. Hit it from the browser."
      keyConcepts={['Pool', 'drizzle()', 'schema param', 'DATABASE_URL', 'connection pool', 'env var']}
      workspaceFile="server/src/db/index.ts"
      hints={[
        'import { Pool } from "pg"; const pool = new Pool({ connectionString: process.env.DATABASE_URL }); export const db = drizzle(pool, { schema }). The schema param enables the db.query.<table> relational API.',
        'pg.Pool manages a pool of connections (default max: 10). Connections are borrowed per-query and returned automatically. You rarely need to interact with the pool directly.',
        'The DATABASE_URL format is: postgres://user:password@host:port/database. dotenv/config at the top of index.ts loads .env before the Pool is created — import order matters.',
        'Verify the connection works: await db.execute(sql`SELECT 1`). If this throws, check that postgres is running (pg_isready), that the DATABASE_URL is correct, and that the user has CONNECT privilege on the database.',
      ]}
    />
  )
}
