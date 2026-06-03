import ExercisePage from '../../components/ExercisePage'

export default function GenericFunctions() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 3 — Generics']}
      title="Generic Functions"
      difficulty="Intermediate"
      description="A generic function takes a type parameter so callers determine the type — usually through inference at the call site. identity<T>(x: T): T is the prototypical example. Generics let one function serve every type without losing precision: arr.map((x: T) => U) preserves input type through to the output array."
      whatToBuild="Write identity<T>(x: T): T. Write pair<A, B>(a: A, b: B): [A, B] and prove inference: pair(1, 'hi') gives [number, string]. Write first<T>(arr: T[]): T | undefined. Write a function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][]. Show explicit type args: identity<string>('hi') — usually not needed since TypeScript infers."
      keyConcepts={['type parameters <T>', 'inference at call site', 'multiple type params', 'explicit type arguments', 'pluck pattern']}
      workspaceFile="client/src/exercises/typescript/GenericFunctions.tsx"
      hints={[
        'Conventionally T is the first generic, K for keys, V for values, A/B/C for unrelated params. Use longer names when meaning is non-obvious: Item, Result, Acc.',
        'Inference picks the narrowest sensible type. identity("hi") returns string, not "hi". To preserve the literal, use const type params (next exercise) or call as identity<"hi">("hi").',
        'pluck<T, K extends keyof T>(arr, key) returns T[K][]. T[K] is the indexed access type — the type of the value at key K of T. This is one of the most generally useful patterns in real-world TS.',
        'Avoid stuffing generics where they do nothing. function fn<T>(x: T): void where T is only used once is just function fn(x: unknown). Generics earn their keep when the same type appears in multiple positions.',
      ]}
    />
  )
}
