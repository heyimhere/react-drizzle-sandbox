import ExercisePage from '../../components/ExercisePage'

export default function BrandedIds() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="Branded IDs (Nominal Types)"
      difficulty="Advanced"
      description="TypeScript is structural — number and number are the same type, even if one is a UserId and the other is a PostId. A brand (a fake unique field via intersection) makes them nominally distinct without runtime cost. getUser(postId) becomes a compile error. The single highest-leverage TS pattern for any app with multiple ID-typed integers."
      whatToBuild="In shared/types.ts, define type UserId = number & { __brand: 'UserId' } and type PostId = number & { __brand: 'PostId' }. Write constructors asUserId(n: number): UserId and asPostId(n: number): PostId using a cast. Use them in function signatures: getUser(id: UserId) and getPost(id: PostId). Confirm getUser(asPostId(1)) is a type error but getUser(asUserId(1)) compiles."
      keyConcepts={['branded types', 'nominal vs structural typing', 'phantom fields', 'safe ID handling', 'zero-runtime cost']}
      workspaceFile="shared/types.ts"
      workspaceFiles={['client/src/exercises/typescript/BrandedIds.tsx']}
      hints={[
        'The brand field exists only at the type level. It is purely a marker that prevents implicit assignment from number to UserId. No runtime overhead.',
        'Use a constructor function (asUserId) to enter the branded type — never inline the cast at every call site, or you lose the discipline that makes branding valuable.',
        'For database round-trips, the row type from Drizzle has number for ids. Brand them at the boundary: const user = { ...row, id: asUserId(row.id) }. Once branded, the rest of the app benefits.',
        'Symbol-based brands ({ [brand]: "UserId" }) are slightly more robust against accidental collision but harder to read. String literal brands are the practical default.',
      ]}
    />
  )
}
