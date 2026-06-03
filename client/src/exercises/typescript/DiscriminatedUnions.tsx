import ExercisePage from '../../components/ExercisePage'

export default function DiscriminatedUnions() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="Discriminated Unions"
      difficulty="Intermediate"
      description="A discriminated union (tagged union) is a union where every member has a shared literal field — the discriminator — that uniquely identifies the variant. switch on the discriminator and TypeScript narrows to that variant inside each case. The single most useful pattern in TypeScript for modeling state machines, API results, and event handlers."
      whatToBuild="Model an API request lifecycle: type Result<T> = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: Error }. Write a render function that switches on result.status and returns a string per case. TypeScript should refuse to let you access result.data in the loading branch. Add an exhaustiveness check that breaks compilation when you add a new variant."
      keyConcepts={['discriminated unions', 'tagged unions', 'state machines', 'switch narrowing', 'exhaustive checks']}
      workspaceFile="client/src/exercises/typescript/DiscriminatedUnions.tsx"
      hints={[
        'The discriminator must be a literal type — not just any string. { status: string } is not a discriminator; { status: "ok" } is. Use as const if needed to narrow.',
        'switch (result.status) narrows. case "success": result.data is typed. case "error": result.error is typed. case "loading": neither exists in the type — accessing fails.',
        'Exhaustiveness: in the switch default, write const _: never = result. If you add a new variant later, result is no longer narrowable to never and the assignment errors. The compiler reminds you to add a case.',
        'Discriminators do not have to be string. Numbers, booleans, even null can discriminate as long as they are literal in each variant.',
      ]}
    />
  )
}
