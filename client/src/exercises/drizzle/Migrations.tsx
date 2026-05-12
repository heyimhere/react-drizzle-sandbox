import ExercisePage from '../../components/ExercisePage'

export default function Migrations() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="Migrations"
      difficulty="Beginner"
      description="Drizzle Kit compares your schema.ts against the previously generated snapshot and produces a SQL migration file for the diff. You run that SQL against the database with db:migrate. Each migration is a permanent record of how the schema evolved."
      whatToBuild="Starting from the users and posts schema: run db:generate and inspect the output SQL. Then add a bio column (text, nullable) to users and a viewCount column (integer, default 0) to posts. Run db:generate again and see a second migration file with only the ALTER TABLE statements. Then run db:migrate and verify both tables in psql with \\d users and \\d posts."
      keyConcepts={['drizzle-kit', 'generate', 'migrate', 'migration file', 'schema snapshot', 'ALTER TABLE']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Run npm run db:generate from the server directory. Drizzle Kit reads drizzle.config.ts to find your schema and output directory. It writes a .sql file and a _journal.json snapshot to server/drizzle/.',
        'The second run after adding columns produces only the diff — two ALTER TABLE ADD COLUMN statements, not a full DROP+CREATE. Drizzle tracks what it already generated via the snapshot.',
        'Run npm run db:migrate to apply pending migrations. Drizzle records which migrations have run in a __drizzle_migrations table in your database — it will not re-run already-applied migrations.',
        'If you make a mistake, do not delete migration files. Create a new migration that undoes the change (DROP COLUMN, etc.). Deleting migration files breaks the snapshot and confuses future generates.',
      ]}
    />
  )
}
