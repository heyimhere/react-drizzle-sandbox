import ExercisePage from '../../components/ExercisePage'

export default function ConstTypeParams() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 3 — Generics']}
      title="const Type Parameters"
      difficulty="Advanced"
      description="The const modifier on a type parameter tells TypeScript not to widen literals during inference. Without it, fn(['a', 'b']) infers T as string[]. With <const T>, the same call infers ['a', 'b'] — a readonly tuple of literals. Game-changing for API design where you want the caller's exact values preserved without forcing them to write as const everywhere."
      whatToBuild="Write defineRoutes<const T extends readonly string[]>(routes: T): T. Show defineRoutes(['/home', '/about']) returns the readonly tuple ['/home', '/about'], not string[]. Then write pick<T, const K extends readonly (keyof T)[]>(obj: T, keys: K) and confirm the returned shape uses the exact key literals. Compare with the same functions without const."
      keyConcepts={['const modifier on generics', 'inference literal preservation', 'TypeScript 5.0+', 'readonly tuples', 'caller-side as const']}
      workspaceFile="client/src/exercises/typescript/ConstTypeParams.tsx"
      hints={[
        'Syntax: <const T> or <const T extends ...>. Works for any inferred generic — function, method, class.',
        'Without const: pick(user, ["id", "name"]) infers K as string[]. With const: K is readonly ["id", "name"] — the exact key literals.',
        'Useful for declaring options arrays, route definitions, event names — anywhere callers pass a literal array you want to remember.',
        'No effect on values manually annotated wider — defineRoutes(routes as string[]) still gets string[]. const only changes inference, not assignment.',
      ]}
    />
  )
}
