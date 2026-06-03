import ExercisePage from '../../components/ExercisePage'

export default function TypeLevelTests() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 7 — Advanced']}
      title="Type-Level Tests"
      difficulty="Advanced"
      description="A type-level test is a chunk of code that compiles only if a type equality holds. The standard helpers are Equal<A, B> (true when A and B are mutually assignable in a precise way) and Expect<T extends true ? true : false>. No runtime — type errors are the test failures. Essential when you ship a non-trivial generic helper and want to lock the behavior."
      whatToBuild="Write type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false. Write type Expect<T extends true> = T. Then write test assertions for the helpers you built earlier: Expect<Equal<MyReturnType<() => string>, string>>, Expect<Equal<First<[1, 2, 3]>, 1>>. Confirm changing the helper produces a compile error on the assertion."
      keyConcepts={['type-level testing', 'Equal helper', 'Expect helper', 'compile-time assertions', 'no-runtime tests']}
      workspaceFile="client/src/exercises/typescript/TypeLevelTests.tsx"
      hints={[
        'The Equal helper trick relies on TypeScript treating two generic function signatures as identical only when their bodies are identical. It correctly distinguishes any from unknown, true from boolean, etc.',
        'Expect<T extends true> = T constrains T — passing false fails compilation. This is your assertion.',
        'A test file collects assertions: type _tests = [Expect<...>, Expect<...>, ...]. One file per helper, conventionally next to the source.',
        'These tests stay in the codebase as living documentation: every reader sees what the type is supposed to be. Pair with regular unit tests for runtime behavior.',
      ]}
    />
  )
}
