import ExercisePage from '../../components/ExercisePage'

export default function ConditionalTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 7 — Advanced']}
      title="Conditional Types & infer"
      difficulty="Advanced"
      description="A conditional type chooses between two types based on assignability: T extends U ? X : Y. infer introduces a type variable inside the extends clause that captures part of T — that's how ReturnType, Parameters, and Awaited are built. Conditional types distribute over unions by default; wrap in a tuple to stop distribution."
      whatToBuild="Write type MyReturnType<F> = F extends (...args: any[]) => infer R ? R : never. Write type Unbox<T> = T extends (infer U)[] ? U : T (Unbox<string[]> = string, Unbox<number> = number). Write type First<T extends readonly any[]> = T extends readonly [infer F, ...any[]] ? F : never. Demonstrate distribution: type IsString<T> = T extends string ? true : false; IsString<string | number> = boolean."
      keyConcepts={['conditional types', 'infer keyword', 'extends in type position', 'distributive conditionals', 'tuple-wrap to stop distribution']}
      workspaceFile="client/src/exercises/typescript/ConditionalTypes.tsx"
      hints={[
        'infer R inside extends captures whatever fits there. F extends (...args: any[]) => infer R ? R : never — R is the function return type.',
        'Distribution: when T is a naked union, T extends U ? X : Y applies to each member separately, then unions the results. T extends string ? true : false on string | number is true | false = boolean.',
        'Stop distribution with [T] extends [U] (single-element tuple). Useful when you want IsString<string | number> to be false, not boolean.',
        'Conditional + recursion + template literals = a complete computation engine. Powerful but read-heavy. Always include a comment with two or three example expansions.',
      ]}
    />
  )
}
