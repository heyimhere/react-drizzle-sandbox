import ExercisePage from '../../components/ExercisePage'

export default function AndOrGroups() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="AND / OR Groups"
      difficulty="Intermediate"
      description="Real filter UIs combine ANDs of ORs of ANDs. Drizzle's and() / or() take any number of conditions and nest cleanly. Building a conditions array conditionally — push when a filter is active, omit when not — keeps the query builder readable."
      whatToBuild="Add GET /posts with query params q (search), authorId (one or many), publishedAfter, hasBody. Combine them: ((title ILIKE q OR body ILIKE q) AND authorId IN (…) AND createdAt > publishedAfter AND body != ''). Skip any predicate whose param is missing. Test by varying the URL."
      keyConcepts={['and()', 'or()', 'conditions array', 'inArray', 'ilike', 'conditional predicates']}
      workspaceFile="server/src/routes/posts.ts"
      hints={[
        'Build conditions conditionally: const conds = []; if (q) conds.push(or(ilike(posts.title, `%${q}%`), ilike(posts.body, `%${q}%`))); if (authorIds.length) conds.push(inArray(posts.userId, authorIds)). Apply with .where(and(...conds)) — and() with zero args is a no-op.',
        'Nest freely: and(or(a, b), or(c, d)). Drizzle wraps each with parentheses in the generated SQL. Read your generated SQL in dev — it is the fastest debug.',
        'inArray(column, []) matches nothing — guard with if (ids.length) before pushing. Otherwise an empty list silently empties your results.',
        'For "field is set", use isNotNull(column) or for "not empty string", ne(column, ""). Both translate cleanly: IS NOT NULL and != \'\'.',
      ]}
    />
  )
}
