import ExercisePage from '../../components/ExercisePage'

export default function Delete() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Delete"
      difficulty="Beginner"
      description="db.delete() builds a DELETE statement. Like UPDATE, always pair it with .where() — a bare delete removes every row. .returning() gives you the deleted rows, useful for confirming what was removed."
      whatToBuild="Write three DELETE routes: DELETE /posts/:id (hard delete by id, return the deleted post), DELETE /users/:id (delete user and all their posts — you must delete posts first due to the FK constraint), and implement a soft delete pattern on posts by adding a deletedAt timestamp column and filtering it out of GET /posts."
      keyConcepts={['db.delete', '.where()', '.returning()', 'soft delete', 'FK constraint', 'cascade']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Hard delete: const [deleted] = await db.delete(posts).where(eq(posts.id, id)).returning(). If the returned array is empty, no row matched — return 404.',
        'FK order matters: delete posts before users. If the FK was defined with .references(() => users.id, { onDelete: "cascade" }), Postgres handles it automatically. Without cascade, you must delete children manually first.',
        'Soft delete pattern: add deletedAt: timestamp("deleted_at") to the posts schema. On DELETE, set it: db.update(posts).set({ deletedAt: new Date() }).where(eq(posts.id, id)). Filter it out on reads: .where(isNull(posts.deletedAt)).',
        'Cascade in the schema definition: integer("author_id").references(() => users.id, { onDelete: "cascade" }). Run db:generate to see the ON DELETE CASCADE clause added to the SQL. Then a single user delete removes all their posts.',
      ]}
    />
  )
}
