import ExercisePage from '../../components/ExercisePage'

export default function SchemaDefinition() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="Schema definition"
      difficulty="Beginner"
      description="In Drizzle ORM, your schema is TypeScript — not a config file or a DSL. You define tables using pgTable() and column helper functions imported from drizzle-orm/pg-core. The TypeScript types for your rows are automatically inferred from the schema."
      whatToBuild="Define a users table (id serial PK, name text not-null, email text unique not-null, createdAt timestamp default now) and a posts table (id serial PK, title text not-null, content text nullable, published boolean default false, authorId integer FK to users.id, createdAt timestamp default now). Run db:generate and inspect the SQL output."
      keyConcepts={['pgTable', 'serial', 'text', 'boolean', 'timestamp', 'integer', 'references', 'notNull']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Import column types from drizzle-orm/pg-core: import { pgTable, serial, text, boolean, timestamp, integer } from "drizzle-orm/pg-core". Each function maps to a SQL column type.',
        'Nullable columns are nullable by default — just omit .notNull(). Non-null: text("title").notNull(). Primary key: serial("id").primaryKey(). Unique: text("email").unique().',
        'Foreign key: authorId: integer("author_id").references(() => users.id). The arrow function avoids a circular reference — Drizzle resolves it lazily when generating the schema.',
        'After saving the file, run npm run db:generate in the server directory. Open the generated file in server/drizzle/ and read the raw SQL — this is exactly what db:migrate will execute. Inspect it every time to build intuition.',
      ]}
    />
  )
}
