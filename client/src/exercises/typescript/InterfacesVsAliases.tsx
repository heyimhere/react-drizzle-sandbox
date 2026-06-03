import ExercisePage from '../../components/ExercisePage'

export default function InterfacesVsAliases() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Interfaces vs Type Aliases"
      difficulty="Beginner"
      description="interface and type alias overlap heavily for object shapes — but interfaces can be reopened (declaration merging) and extended without a union/intersection. Type aliases can name unions, primitives, tuples, conditionals — anything. Modern guidance: use type by default, switch to interface only when you need merging or are exposing a public API."
      whatToBuild="Write the same User shape twice — once as interface User and once as type User2. Extend each: interface Admin extends User adds role; type Admin2 = User2 & { role: string }. Demonstrate declaration merging: declare interface Window twice with different properties and confirm both merge. Show one thing type can do that interface cannot (a union or tuple alias)."
      keyConcepts={['interface', 'type alias', 'extends', 'intersection (&)', 'declaration merging']}
      workspaceFile="client/src/exercises/typescript/InterfacesVsAliases.tsx"
      hints={[
        'When to pick interface: object shapes that may be extended by third parties (library types, global Window augmentation, Express.Request), or when you want better error messages on extension chains.',
        'When to pick type: unions (type Status = "ok" | "err"), tuples, mapped types, conditional types, primitives — anywhere interface cannot reach.',
        'Declaration merging is a feature, not a bug, when augmenting libraries. interface Window { myAnalytics: Analytics } merges with the lib.dom.d.ts Window. With type alias you would get a duplicate identifier error.',
        'Performance footnote: very large intersection chains can be slower to type-check than the equivalent interface extends chain. Almost never matters in practice — pick by intent.',
      ]}
    />
  )
}
