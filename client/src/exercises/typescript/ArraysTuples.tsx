import ExercisePage from '../../components/ExercisePage'

export default function ArraysTuples() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Arrays & Tuples"
      difficulty="Beginner"
      description="Arrays are homogeneous and resizable: string[] holds any number of strings. Tuples are fixed-length, heterogeneous, and positional: [string, number] holds exactly one string then one number. as const turns a literal array into a readonly tuple of literal types — the foundation behind useState-style hook returns."
      whatToBuild="Declare three values: a string[], a tuple [string, number, boolean], and a readonly tuple using as const. Write a function that returns [value, setter] as a typed tuple — first by explicit annotation, then by as const. Then write a function that takes a tuple ['get' | 'post', string] and proves TypeScript knows index 0 is the method literal."
      keyConcepts={['T[]', 'Array<T>', 'tuple types', 'readonly tuples', 'as const', 'positional types']}
      workspaceFile="client/src/exercises/typescript/ArraysTuples.tsx"
      hints={[
        'Tuple vs array: const pair: [string, number] = ["age", 30]. Length is fixed and each position has its own type. pair[2] is a type error.',
        'as const widens nothing: const tuple = ["age", 30] as const gives readonly ["age", 30] — both element types are the literal values, not string and number.',
        'Tuple return from a hook: return [count, setCount] as const. The caller destructures with full type info. Without as const, the inferred type is (number | ((n: number) => void))[].',
        'readonly T[] vs T[]: readonly prevents .push() and assignment at the type level. Use readonly arrays for function parameters when you do not intend to mutate — the caller can pass either kind.',
      ]}
    />
  )
}
