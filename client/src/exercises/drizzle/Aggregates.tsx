import ExercisePage from '../../components/ExercisePage'

export default function Aggregates() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Aggregates"
      difficulty="Intermediate"
      description="Aggregate functions like count, sum, and avg reduce a set of rows into a single value. In Drizzle you express them using the sql template tag with a typed generic. groupBy lets you aggregate per-group instead of across the entire table."
      whatToBuild="Write three GET routes. GET /stats returns total users, total posts, and total published posts in a single query. GET /users/:id/stats returns post count, total views, and average views per post for that user. GET /posts/by-author returns each author's name alongside their post count, sorted by most posts first."
      keyConcepts={['sql tag', 'count', 'sum', 'avg', 'groupBy', 'having']}
      workspaceFile="server/src/routes/stats.ts"
      hints={[
        'Use the sql tag for aggregate expressions: sql<number>`count(*)` for all rows, sql<number>`count(${posts.id})` for non-null values. The generic parameter types the column in the result object.',
        'Single-query stats: db.select({ userCount: sql<number>`count(distinct ${users.id})`, postCount: sql<number>`count(${posts.id})` }).from(users).leftJoin(posts, ...). One round-trip for all stats.',
        'Group by author: .groupBy(users.id, users.name). Every non-aggregate column in the select must appear in groupBy — Postgres enforces this. Order the result with .orderBy(desc(sql`count(${posts.id})`)).',
        'having() filters on aggregated values — like where() but runs after groupBy. Filter for authors with more than 5 posts: .having(gt(sql<number>`count(${posts.id})`, 5)). Import having is not needed — chain it directly.',
      ]}
    />
  )
}
