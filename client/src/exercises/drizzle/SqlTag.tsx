import ExercisePage from '../../components/ExercisePage'

export default function SqlTag() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="sql template tag"
      difficulty="Advanced"
      description="The sql template tag is Drizzle's escape hatch for raw SQL. It safely parameterizes interpolated values, preventing injection. It also lets you use database functions and expressions that Drizzle's query builder does not expose directly."
      whatToBuild="Write four uses of the sql tag: a full-text search query using PostgreSQL's to_tsvector/to_tsquery, a window function (ROW_NUMBER() OVER (ORDER BY created_at)), a raw WHERE clause mixed with Drizzle's builder, and a typed computed column using sql<MyType>`expression`."
      keyConcepts={['sql', 'type parameter', 'sql.raw', 'parameterized query', 'escape', 'db.execute']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Values interpolated into the sql tag are automatically parameterized: sql`WHERE name = ${userInput}` generates WHERE name = $1 with userInput passed as a bound parameter — no injection risk.',
        'sql.raw() skips parameterization — use only for SQL keywords or identifiers you fully control: sql`ORDER BY ${sql.raw(sortColumn)} DESC`. Never use sql.raw() with user input.',
        'Typed computed column: sql<number>`count(*)` tells TypeScript the aggregate returns a number. Without the generic, the type is SQL<unknown> and you lose type safety on the result.',
        'Full-text search: db.select().from(posts).where(sql`to_tsvector("english", ${posts.content}) @@ to_tsquery("english", ${query})`). This uses Postgres\'s built-in FTS — much faster than LIKE on large tables.',
      ]}
    />
  )
}
