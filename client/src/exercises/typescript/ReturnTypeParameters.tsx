import ExercisePage from '../../components/ExercisePage'

export default function ReturnTypeParameters() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="ReturnType, Parameters, Awaited"
      difficulty="Intermediate"
      description="ReturnType<typeof fn> pulls a function's return type without writing it twice. Parameters<typeof fn> grabs the parameter tuple. Awaited<T> unwraps Promises — Awaited<Promise<User>> is User, Awaited<User> is User (idempotent). The three are how you stay DRY between a function's signature and downstream types that depend on it."
      whatToBuild="Given function getUser(id: number): Promise<{ id: number; name: string }>, derive type User = Awaited<ReturnType<typeof getUser>> and type GetUserArgs = Parameters<typeof getUser>. Write a function callLater<F extends (...args: any[]) => any>(fn: F, args: Parameters<F>): Promise<Awaited<ReturnType<F>>> that defers a call. Confirm it preserves types end-to-end."
      keyConcepts={['ReturnType', 'Parameters', 'Awaited', 'ConstructorParameters', 'typeof on functions']}
      workspaceFile="client/src/exercises/typescript/ReturnTypeParameters.tsx"
      hints={[
        'typeof in a type position grabs the type of a value: type Fn = typeof someFunction. Combine with ReturnType: type R = ReturnType<typeof someFunction>.',
        'Parameters<F> returns a tuple type. The tuple keeps optional and rest parameters intact, so it round-trips perfectly into rest spreads.',
        'Awaited<T> unwraps as many promise layers as needed: Awaited<Promise<Promise<string>>> = string. Pre-Awaited code used T extends Promise<infer U> manually.',
        'ConstructorParameters<typeof SomeClass> for classes. Same idea — useful for typed factories and dependency injection.',
      ]}
    />
  )
}
