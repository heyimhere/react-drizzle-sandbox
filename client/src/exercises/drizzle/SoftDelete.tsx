import ExercisePage from '../../components/ExercisePage'

export default function SoftDelete() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Soft Delete"
      difficulty="Intermediate"
      description="Soft delete keeps the row but stamps a deletedAt timestamp. Every read filters WHERE deleted_at IS NULL. The trade-off: data is recoverable and audits stay sane, at the cost of touching every query and breaking unique constraints unless you adjust them."
      whatToBuild="Add deletedAt: timestamp('deleted_at') to the todos table. Rewrite DELETE /todos/:id to set deletedAt = NOW() instead of removing the row. Adjust GET /todos and GET /todos/:id to filter isNull(todos.deletedAt). Add a POST /todos/:id/restore route that clears deletedAt."
      keyConcepts={['isNull / isNotNull', 'partial unique index', 'auditable history', 'cascade delete interactions', 'helper query builder']}
      workspaceFile="server/src/routes/todos.ts"
      hints={[
        'Schema: deletedAt: timestamp("deleted_at"). Optional column — null means "live", a timestamp means "soft-deleted at that moment".',
        'Filter at read: await db.select().from(todos).where(isNull(todos.deletedAt)). Centralize by wrapping db.select() in a helper that always adds this condition.',
        'For unique constraints (e.g. email), switch to a partial unique index: uniqueIndex("users_email_unique").on(t.email).where(sql`deleted_at IS NULL`). Lets a soft-deleted row free up the email for re-registration.',
        'Restore: await db.update(todos).set({ deletedAt: null }).where(eq(todos.id, id)).returning(). Simple opposite of the delete.',
      ]}
    />
  )
}
