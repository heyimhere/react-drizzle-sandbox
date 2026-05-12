import ExercisePage from '../../components/ExercisePage'

export default function Pagination() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Ordering + Pagination"
      difficulty="Intermediate"
      description="Reliable pagination requires a consistent sort order. Offset-based pagination is simple but slow on large tables. Cursor-based pagination scales better by using the last seen id or timestamp as the starting point for the next page."
      whatToBuild="Write a GET /posts route that supports both styles. Offset mode: accepts page and pageSize query params, returns the data plus total count and hasNextPage. Cursor mode: accepts cursor (last seen id) and limit, returns the next page of results. Both are sorted by createdAt descending with id as a tiebreaker."
      keyConcepts={['orderBy', 'asc', 'desc', 'limit', 'offset', 'cursor pagination']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Offset: import { asc, desc } from "drizzle-orm". .orderBy(desc(posts.createdAt), asc(posts.id)).limit(pageSize).offset(page * pageSize). The compound sort (createdAt + id) ensures a stable order when two rows have the same timestamp.',
        'Total count for offset pagination: const [{ count }] = await db.select({ count: sql<number>`count(*)` }).from(posts). Run this as a second query (or a subquery) to populate the total field in the response.',
        'Cursor: .where(lt(posts.id, cursor)).orderBy(desc(posts.id)).limit(limit + 1). Fetch one extra row — if it exists, there is a next page. Return the extra row\'s id as the next cursor value, but omit it from the data.',
        'Cursor pagination is faster on large tables because it uses an index seek instead of an offset skip. Postgres must scan and discard all rows before the offset — cursor jumps directly to the right position.',
      ]}
    />
  )
}
