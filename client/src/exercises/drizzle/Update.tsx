import ExercisePage from '../../components/ExercisePage'

export default function Update() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Update"
      difficulty="Beginner"
      description="db.update() builds an UPDATE statement. You chain .set() with the columns to change, .where() to target specific rows, and .returning() to get the updated rows back. Always include a .where() clause — without it, every row in the table is updated."
      whatToBuild="Write three PATCH routes: PATCH /posts/:id/publish (set published = true), PATCH /posts/:id (update title and/or content from the request body — only fields present in the body), and PATCH /users/:id (update name and email). All use .returning() and return 404 when the row does not exist."
      keyConcepts={['db.update', '.set()', '.where()', '.returning()', 'partial update', 'eq']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Basic update: const [post] = await db.update(posts).set({ published: true }).where(eq(posts.id, id)).returning(). If the array is empty, no row matched — return 404.',
        'Partial update from request body: const updates = Object.fromEntries(Object.entries(req.body).filter(([k]) => ["title", "content"].includes(k))). Pass updates to .set(). This prevents callers from overwriting fields they should not touch.',
        'You can update multiple rows at once with a broader .where() clause — for example, mark all posts by a user as unpublished: .where(eq(posts.authorId, userId)). The .returning() array will have all updated rows.',
        'Unlike INSERT, UPDATE does not have a built-in "upsert" in standard Drizzle. For upsert behavior, use db.insert().values(...).onConflictDoUpdate({ target: table.id, set: { ... } }).',
      ]}
    />
  )
}
