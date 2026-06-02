import ExercisePage from '../../components/ExercisePage'

export default function CommentsThreaded() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Threaded Comments"
      difficulty="Advanced"
      description="Threaded comments use a self-referential foreign key — every comment optionally points at a parent. Rendering becomes a tree walk; querying becomes either a single SELECT followed by client-side nesting, or a recursive CTE for deep loads. Both are good drills."
      whatToBuild="Implement POST /posts/:id/comments accepting { body, parentId? }, GET /posts/:id/comments returning a nested tree, and DELETE /comments/:id (cascade-deletes children). On the client, render a depth-indented comment list with a reply button that opens an inline composer. Limit visible depth to 3, show a 'see more' for deeper levels."
      keyConcepts={['self-referential FK', 'recursive CTE', 'tree building from flat rows', 'cascade delete', 'depth limiting in UI']}
      workspaceFile="server/src/routes/comments.ts"
      workspaceFiles={['client/src/exercises/e2e/CommentsThreaded.tsx', 'server/src/db/schema.ts']}
      hints={[
        'Schema: comments table with parentId: integer("parent_id").references(() => comments.id, { onDelete: "cascade" }) — typed as a forward-reference because the table refers to itself.',
        'Flat fetch + client tree: GET /posts/:id/comments returns the rows ordered by createdAt. On the client, build a Map<id, children[]>, then walk roots (parentId === null) recursively. O(n) instead of N+1 queries.',
        'For deep trees, recursive CTE: WITH RECURSIVE t AS (SELECT * FROM comments WHERE post_id = $1 AND parent_id IS NULL UNION ALL SELECT c.* FROM comments c JOIN t ON c.parent_id = t.id) SELECT * FROM t. Drizzle exposes via sql template.',
        'Cap reply depth in UI to keep the layout sane. After depth N, render "view more replies" that expands inline instead of indenting further.',
      ]}
    />
  )
}
