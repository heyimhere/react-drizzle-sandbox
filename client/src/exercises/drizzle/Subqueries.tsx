import ExercisePage from '../../components/ExercisePage'

export default function Subqueries() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Subqueries"
      difficulty="Advanced"
      description="Subqueries let one SELECT participate inside another — as a derived table, as a filter via IN/EXISTS, or as a scalar value. Drizzle exposes them via .as('alias') and supports them in .from(), .where(), and select fields. Power tool for top-N-per-group, exclusion sets, and computed columns."
      whatToBuild="Add GET /users/with-recent-post that returns each user along with the title and date of their most recent post (or null). Use a subquery that selects max(createdAt) per user, then join to posts to find the matching title. Bonus: GET /posts/popular that returns posts whose authorId is in the top 10 users by post count."
      keyConcepts={['.as(alias)', 'derived tables', 'inArray + subquery', 'sql.placeholder', 'EXISTS / NOT EXISTS']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'Derived table: const latest = db.select({ userId: posts.userId, latestAt: max(posts.createdAt).as("latest_at") }).from(posts).groupBy(posts.userId).as("latest"). Then join: .leftJoin(latest, eq(latest.userId, users.id)).',
        'IN subquery: const topUsers = db.select({ id: users.id }).from(users).orderBy(desc(...)).limit(10). Then: .where(inArray(posts.userId, topUsers)). Drizzle inlines it as IN (SELECT id FROM users …).',
        'EXISTS: .where(exists(db.select().from(posts).where(eq(posts.userId, users.id)))). Returns users who have at least one post. NOT EXISTS for the inverse.',
        'sql template version when builders get awkward: sql`(SELECT MAX(created_at) FROM posts WHERE user_id = ${users.id})`. Useful inside a select{ ... } object as a scalar.',
      ]}
    />
  )
}
