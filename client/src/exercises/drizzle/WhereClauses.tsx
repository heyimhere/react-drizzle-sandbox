import ExercisePage from '../../components/ExercisePage'

export default function WhereClauses() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Where clauses"
      difficulty="Intermediate"
      description="Drizzle's where helpers generate parameterized SQL — no string interpolation, no injection risk. They compose cleanly with and() and or() to build arbitrarily complex conditions. All values are passed as prepared statement parameters."
      whatToBuild="Write a GET /posts/search route that accepts query params: q (text search on title), minViews (integer), published (boolean), authorIds (comma-separated list), and combine them all into a single .where() call using and() and or(). Handle the case where no params are provided (return all posts)."
      keyConcepts={['eq', 'ne', 'gt', 'lt', 'like', 'ilike', 'inArray', 'and', 'or', 'isNull']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Import helpers: import { eq, ne, gt, lt, like, ilike, inArray, isNull, and, or } from "drizzle-orm". Compose them: .where(and(eq(posts.published, true), gt(posts.viewCount, 100))).',
        'Case-insensitive text search: ilike(posts.title, `%${q}%`). like() is case-sensitive. Always use ilike() for user-facing text search on Postgres.',
        'inArray for a list of ids: inArray(posts.authorId, authorIds.map(Number)). This generates WHERE author_id IN ($1, $2, $3) — a single parameterized query, not multiple round-trips.',
        'Build the conditions array dynamically: const conditions = []. Push to it only when the param exists. Then .where(and(...conditions)). Pass undefined to and() — Drizzle ignores undefined entries — to avoid AND with no conditions.',
      ]}
    />
  )
}
