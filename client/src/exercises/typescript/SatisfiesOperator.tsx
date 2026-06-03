import ExercisePage from '../../components/ExercisePage'

export default function SatisfiesOperator() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 7 — Advanced']}
      title="satisfies Operator"
      difficulty="Advanced"
      description="satisfies type-checks that a value matches a constraint, without widening the value to that constraint. const palette = { red: '#f00', blue: '#00f' } satisfies Record<string, string> — palette stays the literal-typed object, but you get the error if you forget a hex code. The right tool for typed config blocks where you want both 'matches contract' and 'preserves exact literals'."
      whatToBuild="Define type Palette = Record<'primary' | 'danger' | 'success', `#${string}`>. Without satisfies, const colors: Palette = {...} works but colors.primary is `#${string}`. With satisfies: const colors = {...} satisfies Palette gives a more specific type ('#3b82f6'). Show three forms side by side: annotation, satisfies, and as — and explain which preserves what."
      keyConcepts={['satisfies', 'preserves literal types', 'as vs satisfies vs annotation', 'config typing']}
      workspaceFile="client/src/exercises/typescript/SatisfiesOperator.tsx"
      hints={[
        'satisfies validates without widening. as overrides without validating. : Annotation widens to the annotation. Pick by which property you need.',
        'Common use: typed config objects, enum-replacement maps, route registries. const routes = { home: "/", about: "/about" } satisfies Record<string, string> — but you still get the literal keys.',
        'Combine with as const: const x = { foo: 1 } as const satisfies { foo: number }. as const narrows first, satisfies validates the narrowed type against the contract.',
        'satisfies is TypeScript 4.9+. Older codebases simulate it with a helper: const satisfies = <T>(t: T) => t; satisfies<Palette>({...}) — same idea, less ergonomic.',
      ]}
    />
  )
}
