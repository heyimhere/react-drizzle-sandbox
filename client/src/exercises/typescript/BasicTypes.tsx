import ExercisePage from '../../components/ExercisePage'

export default function BasicTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Basic Types"
      difficulty="Beginner"
      description="TypeScript's primitive types form the foundation. string, number, boolean are obvious — but null, undefined, any, unknown, and never each have a precise role. Knowing when to reach for unknown over any is the single biggest jump from 'using TypeScript' to 'using it correctly'."
      whatToBuild="Write five typed values: a string, a number, a boolean, an unknown-typed JSON parse result, and a never-returning function (throws or infinite loop). Then prove that unknown forces narrowing — write a function that takes unknown and returns string, narrowing with typeof. Compare it to the same function with any (no narrowing required, no safety)."
      keyConcepts={['string', 'number', 'boolean', 'null', 'undefined', 'any', 'unknown', 'never']}
      workspaceFile="client/src/exercises/typescript/BasicTypes.tsx"
      hints={[
        'unknown vs any: any disables type checking — you can call .foo() on it. unknown forces you to narrow before use. Default to unknown for values coming from JSON.parse, fetch responses, or user input.',
        'never is the type of values that never exist — a function that throws, an infinite loop, or the impossible branch of an exhaustive check. function fail(): never { throw new Error() }.',
        'null vs undefined: with strictNullChecks on, they are distinct types. A variable typed string cannot hold null. Use string | null explicitly when null is a valid value.',
        'Avoid any unless absolutely necessary. If you need to escape the type system, prefer unknown + a runtime check, or a type assertion (as) with a comment explaining why.',
      ]}
    />
  )
}
