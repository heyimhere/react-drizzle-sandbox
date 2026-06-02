import ExercisePage from '../../components/ExercisePage'

export default function JsonColumns() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="JSON Columns"
      difficulty="Intermediate"
      description="Postgres jsonb stores typed JSON with binary representation and GIN index support — fast lookup by key, partial updates. Drizzle's jsonb() column accepts a generic shape so reads come back as a typed object instead of unknown."
      whatToBuild="Add a metadata: jsonb<{ source: string; ip: string; userAgent?: string }> column to the posts table. Write GET /posts/by-source/:source that filters using the JSON path operator — WHERE metadata->>'source' = ?. Add an index for the path you query."
      keyConcepts={['jsonb()', 'jsonb<T>() generic', '->> vs ->', 'GIN indexes', 'jsonb_set for partial update']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Type the column generic: metadata: jsonb("metadata").$type<{ source: string; ip: string; userAgent?: string }>(). Drizzle infers the read/write type from the .$type<>() annotation.',
        'Filter by path: .where(sql`${posts.metadata}->>\'source\' = ${source}`). ->> returns text, -> returns jsonb. For numeric comparisons cast: (metadata->>\'priority\')::int > 5.',
        'Index a JSON path you query often: CREATE INDEX posts_metadata_source ON posts ((metadata->>\'source\')). Drizzle exposes this via index().on(sql`(${posts.metadata}->>\'source\')`).',
        'Partial update without round-trip: db.update(posts).set({ metadata: sql`jsonb_set(${posts.metadata}, \'{source}\', \'"api"\')` }). Keeps other keys intact.',
      ]}
    />
  )
}
