import ExercisePage from '../../components/ExercisePage'

export default function Enums() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 1 — Setup']}
      title="Enums"
      difficulty="Beginner"
      description="pgEnum lets you constrain a column to a fixed set of string values at the database level. Drizzle generates a typed union so application code sees status: 'draft' | 'published' | 'archived' — invalid values fail TypeScript and Postgres."
      whatToBuild="Add a postStatus pgEnum with values draft, published, archived. Add a status column to the posts table using that enum, defaulting to draft. Regenerate the migration with npm run db:generate, inspect the SQL (CREATE TYPE post_status …), and migrate."
      keyConcepts={['pgEnum', "varchar('status', { enum: […] })", 'enum default values', 'generated SQL CREATE TYPE', 'TS union types from $inferSelect']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Define the enum: export const postStatus = pgEnum("post_status", ["draft", "published", "archived"]). The first arg is the Postgres type name (snake_case).',
        'Use in a table: status: postStatus("status").notNull().default("draft"). Drizzle infers the column TS type from the enum tuple.',
        'Inspect the generated migration before applying. Expect a CREATE TYPE post_status AS ENUM (…) followed by ALTER TABLE posts ADD COLUMN status post_status.',
        'Alternative without a separate type: text("status", { enum: ["draft", "published", "archived"] }).default("draft"). Same TS type, no CREATE TYPE — useful for short lists you do not need to share across tables.',
      ]}
    />
  )
}
