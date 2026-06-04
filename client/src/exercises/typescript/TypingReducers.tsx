import ExercisePage from '../../components/ExercisePage'

export default function TypingReducers() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Typing useReducer"
      difficulty="Intermediate"
      description="useReducer in TypeScript is where discriminated unions, exhaustive switches, and generic narrowing all meet. A typed Action union with literal type fields gives you autocomplete in dispatch(), forces the reducer to handle every variant, and prevents typos in action names — without any boilerplate beyond the union itself."
      whatToBuild="Write a typed reducer for a counter with reset. type Action = { type: 'inc' } | { type: 'dec' } | { type: 'reset'; to: number }. Write reducer(state: number, action: Action): number with a switch on action.type. Add an exhaustive default that uses assertNever. Then build a useReducer call site and confirm dispatch({ type: 'reset', to: 5 }) requires the to field but dispatch({ type: 'inc' }) does not."
      keyConcepts={['useReducer', 'discriminated Action union', 'dispatch typing', 'exhaustive switch', 'assertNever']}
      workspaceFile="client/src/exercises/typescript/TypingReducers.tsx"
      hints={[
        'Action union with literal type field is the standard shape. Each variant carries the data its handler needs — no shared payload key, no any.',
        'useReducer<typeof reducer> infers state and action types from the reducer signature. No need to write the generic args explicitly.',
        'For complex apps, group reducers by slice: each slice has its own Action union, its own reducer, then compose with combineReducers-style helpers (or just multiple useReducer calls).',
        'Avoid string-only action types (action.type: string). The whole point of the discriminated union is that "type" is a literal — typos become compile errors instead of runtime no-ops.',
      ]}
    />
  )
}
