import ExercisePage from '../../components/ExercisePage'

export default function NeverExhaustive() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="never & Exhaustive Checks"
      difficulty="Intermediate"
      description="never is the empty type — no value inhabits it. Inside an exhaustive switch, the default branch is unreachable, so the discriminant has type never. Assigning anything else to never fails, so this is how you force the compiler to remind you when a new union member appears. The standard helper is assertNever — a one-line function that turns missing cases into compile errors."
      whatToBuild="Implement function assertNever(x: never): never { throw new Error('Unhandled: ' + JSON.stringify(x)) }. Use it in a switch over Status = 'idle' | 'ok' | 'fail' to handle all cases. Then add a fourth variant Status = ... | 'pending' and observe the new compile error pointing at the default branch. Fix the error by adding the case."
      keyConcepts={['never type', 'assertNever helper', 'exhaustive switch', 'compile-time exhaustiveness', 'unreachable branches']}
      workspaceFile="client/src/exercises/typescript/NeverExhaustive.tsx"
      hints={[
        'assertNever signature: function assertNever(x: never): never. The :never return signals to callers that this throws.',
        'In a switch default, the narrowed type of the discriminant is exactly the cases you have not handled. If you handled everything, it is never; if you missed one, it is that one literal.',
        'Object discriminants work too: switch (event.type) where event is a discriminated union. The same exhaustiveness pattern applies — default: assertNever(event).',
        'Some teams use the const assignment idiom instead: const _exhaustive: never = value. Functionally equivalent — pick one and stay consistent.',
      ]}
    />
  )
}
