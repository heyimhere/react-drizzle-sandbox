import ExercisePage from '../../components/ExercisePage'

export default function AssertionFunctions() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="Assertion Functions"
      difficulty="Intermediate"
      description="Assertion functions are like type guards in reverse: instead of returning a boolean, they throw if the input does not match. The signature asserts x is T means 'after this returns normally, treat x as T'. Useful for invariants you want to enforce up-front: 'this must be defined', 'this must be an Error'. Node's assert module already works this way."
      whatToBuild="Write assertDefined<T>(x: T | null | undefined, msg?: string): asserts x is T that throws if x is null/undefined. Use it on a DOM lookup: const el = document.getElementById('root'); assertDefined(el); el.appendChild(...) — no '!' or optional chaining needed afterward. Then write assertIsError(x: unknown): asserts x is Error for catch blocks."
      keyConcepts={['assertion signatures', 'asserts x is T', 'invariants', 'never-returning narrowers', 'catch block typing']}
      workspaceFile="client/src/exercises/typescript/AssertionFunctions.tsx"
      hints={[
        'Signature: function assertDefined<T>(x: T | null | undefined): asserts x is T. No return type — asserts replaces it. You must throw, not return false.',
        'For catch (e), e is unknown by default with useUnknownInCatchVariables. Use assertIsError(e) then e.message is accessible.',
        'Compare to type guards: an isUser predicate lets you branch (if true do A, else do B). An assertUser asserts always — failure throws. Use guards for branching, asserts for invariants.',
        'Once you use an assert function, the narrowed type sticks for the rest of the scope. Combine multiple asserts at the top of a function for very clean bodies.',
      ]}
    />
  )
}
