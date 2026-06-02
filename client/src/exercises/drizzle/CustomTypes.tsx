import ExercisePage from '../../components/ExercisePage'

export default function CustomTypes() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="Custom Types"
      difficulty="Advanced"
      description="customType<>() lets you define a column whose Postgres type is exotic (citext, ltree, vector) or whose TS representation differs from the wire format. You write fromDriver / toDriver to convert and dataType to emit the right CREATE TABLE syntax."
      whatToBuild="Define a citext custom type (case-insensitive text). Use it for the users.email column so SELECT … WHERE email = 'Foo@x.io' matches 'foo@x.io'. Add CREATE EXTENSION IF NOT EXISTS citext to a migration step. Bonus: a custom type that serializes a Date as an ISO string."
      keyConcepts={['customType<>()', 'dataType', 'fromDriver / toDriver', 'CREATE EXTENSION', 'wire vs runtime types']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'export const citext = customType<{ data: string }>({ dataType() { return "citext" } }). The data generic is the TS type; dataType returns the SQL type string used in CREATE TABLE.',
        'Use it: email: citext("email").notNull().unique(). Drizzle emits "email" citext NOT NULL UNIQUE. Equality and ILIKE on citext are automatically case-insensitive.',
        'Extension first: in a hand-written migration (or a one-shot init script), CREATE EXTENSION IF NOT EXISTS citext;. The type does not exist until the extension is enabled.',
        'For wire ≠ runtime, use fromDriver and toDriver: customType<{ data: Date; driverData: string }>({ dataType() { return "text" }, toDriver(v) { return v.toISOString() }, fromDriver(v) { return new Date(v) } }).',
      ]}
    />
  )
}
