import ExercisePage from '../../components/ExercisePage'

export default function Joins() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Joins"
      difficulty="Intermediate"
      description="Drizzle's join API lets you write SQL JOINs with full type safety. The joined columns are merged into the result type. You control which columns are selected and how the result is shaped — Drizzle does not hide the SQL."
      whatToBuild="Write two GET routes. GET /posts/with-author returns all posts with their author's name and email joined in (inner join — only posts that have a valid author). GET /users/with-posts returns all users and their post count using a left join (users with no posts return 0). Both routes shape the response into a clean object, not a flat merged row."
      keyConcepts={['innerJoin', 'leftJoin', 'join condition', 'column disambiguation', 'eq']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Inner join: const rows = await db.select({ post: posts, author: { name: users.name, email: users.email } }).from(posts).innerJoin(users, eq(posts.authorId, users.id)). Each row is { post: {...}, author: {...} }.',
        'Left join: all users are returned even if they have no posts. Posts columns on unmatched rows are null. Use db.select({ user: users, post: posts }).from(users).leftJoin(posts, eq(posts.authorId, users.id)).',
        'For post count, use the sql tag: db.select({ user: users, postCount: sql<number>`count(${posts.id})` }).from(users).leftJoin(posts, ...).groupBy(users.id). The sql<number> type annotation types the computed column.',
        'Column disambiguation: when both tables have a column named id, the select object { post: posts, user: users } namespaces them. Without the object shape, id from both tables would conflict in the result.',
      ]}
    />
  )
}
