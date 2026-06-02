import ExercisePage from '../../components/ExercisePage'

export default function CascadeBehaviors() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Cascade Behaviors"
      difficulty="Intermediate"
      description="onDelete controls what happens to child rows when the parent is deleted. cascade removes them. set null orphans them with NULL FK. restrict refuses the parent delete if children exist. Each has a use case — cascade for ownership, set null for soft references, restrict for required parents."
      whatToBuild="Build an isolated parents/children pair with three versions of the same table — childrenCascade, childrenSetNull, childrenRestrict — each with a different onDelete. Add a UI with three columns showing the behavior live: delete a parent, see whether its children vanish, orphan, or block."
      keyConcepts={["onDelete: 'cascade'", "onDelete: 'set null'", "onDelete: 'restrict'", 'referential integrity', 'database errors at the Drizzle layer']}
      workspaceFile="server/src/routes/cascade.ts"
      workspaceFiles={['client/src/exercises/e2e/CascadeBehaviors.tsx', 'server/src/db/schema.ts']}
      hints={[
        'set null requires the child FK column to be nullable. childParentId: integer("parent_id").references(() => parents.id, { onDelete: "set null" }) — drop the .notNull() or the constraint contradicts itself.',
        'restrict turns the parent delete into a runtime error from Postgres (foreign_key_violation). Catch it in the route and return a 409 with the message "Has dependent rows".',
        'cascade silently deletes children — fine for ownership, dangerous for analytics. If you care about audits, prefer set null and keep the soft-orphan rows for reporting.',
        'Test live: insert 1 parent + 3 children for each variant, DELETE the parent, then SELECT the children. cascade row count goes to 0; set null orphans 3 rows; restrict throws.',
      ]}
    />
  )
}
