import ExercisePage from '../../components/ExercisePage'

export default function TypeInference() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 4 — Advanced']}
      title="Type inference"
      difficulty="Advanced"
      description="Drizzle infers TypeScript types directly from your schema — no separate type definitions needed. $inferSelect gives you the full row type (what you get back from SELECT). $inferInsert gives you the insert payload type (what you pass to INSERT), with generated columns made optional."
      whatToBuild="Create a types.ts file that exports User, NewUser, Post, and NewPost using $inferSelect and $inferInsert. Use these types in your Express route handlers to type req.body on inserts, type the response JSON on selects, and create a typed createUser helper function that enforces the NewUser shape at the call site."
      keyConcepts={['$inferSelect', '$inferInsert', 'typeof table', 'Express handler typing', 'Pick', 'Omit']}
      workspaceFile="server/src/db/types.ts"
      hints={[
        'Export types from your schema: export type User = typeof users.$inferSelect and export type NewUser = typeof users.$inferInsert. $inferInsert makes columns with defaults (id, createdAt) optional in the type.',
        'Type Express request body: const body = req.body as NewUser. For stricter validation, use a library like zod: const body = NewUserSchema.parse(req.body) where NewUserSchema is derived from the Drizzle schema.',
        'Type the response: res.json(user satisfies User). The satisfies keyword checks the type without widening — a compile-time assertion that user matches User without changing its inferred type.',
        'Compose with Pick and Omit: type PublicUser = Omit<User, "password">. type PostSummary = Pick<Post, "id" | "title" | "createdAt">. These work because $inferSelect produces a plain TypeScript interface — no Drizzle magic needed.',
      ]}
    />
  )
}
