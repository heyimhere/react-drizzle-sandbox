import ExercisePage from '../../components/ExercisePage'

export default function MappedTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="Mapped Types"
      difficulty="Advanced"
      description="A mapped type iterates over the keys of an object type and emits a new property for each. type Foo<T> = { [K in keyof T]: ... }. The + and - modifiers add or remove optional/readonly. Mapped types are the engine behind Partial, Required, Readonly — and behind every transform like 'make all string fields nullable' or 'deep readonly'."
      whatToBuild="Write your own type MyPartial<T> = { [K in keyof T]?: T[K] }. Write MyReadonly<T> using readonly. Write Mutable<T> using -readonly to strip readonly modifiers. Write Nullable<T> = { [K in keyof T]: T[K] | null }. Then write a deeper variant DeepReadonly<T> that recurses through nested objects."
      keyConcepts={['mapped types', 'keyof iteration', 'modifier add (+)', 'modifier remove (-)', 'deep mapped types']}
      workspaceFile="client/src/exercises/typescript/MappedTypes.tsx"
      hints={[
        'Skeleton: type Foo<T> = { [K in keyof T]: T[K] }. K iterates over the keys of T. T[K] is the original value type at that key.',
        'Modifiers: + adds, - removes. + is the default if you write nothing. To strip optional: { [K in keyof T]-?: T[K] } (this is exactly Required<T>).',
        'Recursive DeepReadonly: type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }. The extends object branch catches nested objects but also arrays and functions — refine as needed.',
        'Mapped types preserve only object property types. They do not iterate over union members — for that you need a distributive conditional type.',
      ]}
    />
  )
}
