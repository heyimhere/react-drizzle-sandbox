import ExercisePage from '../../components/ExercisePage'

export default function GroupByHaving() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Group By + Having"
      difficulty="Intermediate"
      description="GROUP BY collapses rows into buckets, then aggregates within each. HAVING filters those buckets — the post-aggregation version of WHERE. The classic shape: 'show me users with at least 5 posts'. Pre-aggregate filters belong in WHERE; post-aggregate filters belong in HAVING."
      whatToBuild="Add GET /users/prolific that returns users with at least 5 posts. Group posts by userId, count, having count >= 5. Join users for the name. Bonus: GET /posts/by-day returns post counts grouped by date_trunc('day', createdAt), ordered chronologically."
      keyConcepts={['groupBy', 'having', 'count()', 'date_trunc', 'aggregate vs row filters']}
      workspaceFile="server/src/routes/stats.ts"
      hints={[
        'await db.select({ userId: posts.userId, total: count() }).from(posts).groupBy(posts.userId).having(sql`count(*) >= 5`). HAVING accepts a sql expression because aggregate references rarely have a clean builder form.',
        'Join after grouping: select user fields plus aggregates. .innerJoin(users, eq(users.id, posts.userId)).groupBy(users.id, users.name). Every non-aggregated select field must appear in GROUP BY.',
        'Time buckets: groupBy(sql`date_trunc(\'day\', ${posts.createdAt})`). Select that same expression as the bucket label. Cast the value to text on the way out for predictable JSON.',
        'WHERE vs HAVING: filter individual rows in WHERE, filter the resulting groups in HAVING. WHERE published = true (per-row) THEN GROUP BY user_id THEN HAVING count(*) >= 5 (per-group).',
      ]}
    />
  )
}
