import ExercisePage from '../../components/ExercisePage'

export default function LiteralTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Literal Types"
      difficulty="Beginner"
      description="A literal type is a single specific value used as a type: 'get', 42, true. Unions of literals replace most use cases for string enums. let widens (let mode = 'on' is string), const narrows (const mode = 'on' is 'on'). as const recursively narrows objects and arrays."
      whatToBuild="Define type HttpMethod = 'get' | 'post' | 'put' | 'delete'. Write a function fetch(url: string, method: HttpMethod) and confirm fetch(url, 'patch') errors. Show widening: let x = 'on' (string) vs const x = 'on' ('on'). Use as const on { kind: 'success', payload: { id: 1 } } and check the resulting type. Then write a function whose return value is narrowed by an as const tuple."
      keyConcepts={['literal types', 'union of literals', 'widening vs narrowing', 'as const', 'const assertions']}
      workspaceFile="client/src/exercises/typescript/LiteralTypes.tsx"
      hints={[
        'Widening happens at let bindings, mutable object props, and function returns: function fn() { return "ok" } returns string. To return the literal: function fn(): "ok" { return "ok" } or use as const.',
        'as const on a nested object: const cfg = { mode: "dark", sizes: [1, 2, 3] } as const. mode is "dark", sizes is readonly [1, 2, 3]. Deep readonly + deep narrowed literals.',
        'Object property types widen unless narrowed: { kind: "ok" } in an object literal is inferred as string. Add as const, or annotate the destination type.',
        'Prefer literal unions over string enums: easier to JSON-serialize, no runtime cost, tree-shakeable, easier to extend. Numeric or const enums still have a niche, but string enums are usually a worse trade.',
      ]}
    />
  )
}
