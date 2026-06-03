import ExercisePage from '../../components/ExercisePage'

export default function StrictFlagsTour() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 7 — Advanced']}
      title="strict Flags Tour"
      difficulty="Advanced"
      description="strict: true is a meta-flag that turns on noImplicitAny, strictNullChecks, strictFunctionTypes, strictBindCallApply, strictPropertyInitialization, alwaysStrict, useUnknownInCatchVariables, and noImplicitThis. Beyond strict: noUncheckedIndexedAccess makes arr[i] potentially undefined. exactOptionalPropertyTypes distinguishes 'missing key' from 'explicit undefined'. Knowing what each gives you tells you what to enable."
      whatToBuild="Read the client tsconfig.app.json. List which strict flags are off (today: most of them). For each flag, write a small example showing a bug it catches: an unchecked array index, an implicit any in a callback, a maybe-null DOM ref. Then propose the minimal commit to flip strict on and predict the kinds of errors the existing exercises would surface."
      keyConcepts={['strict', 'noImplicitAny', 'strictNullChecks', 'noUncheckedIndexedAccess', 'exactOptionalPropertyTypes', 'useUnknownInCatchVariables']}
      workspaceFile="client/tsconfig.app.json"
      workspaceFiles={['client/src/exercises/typescript/StrictFlagsTour.tsx']}
      hints={[
        'strictNullChecks is the single most impactful flag — turns null and undefined into distinct types. Without it, every variable can be null and the type system lies about it.',
        'noUncheckedIndexedAccess: arr[i] is T | undefined. The right default for new code; can be loud on existing code that index-accesses tuples often.',
        'exactOptionalPropertyTypes: { x?: string } stops accepting { x: undefined }. Matters for libraries that distinguish "omit" from "explicit undefined" (e.g., zod, JSON serialization).',
        'useUnknownInCatchVariables: catch (e) gives e: unknown. Forces you to narrow before reading e.message. Pairs perfectly with the assertion functions exercise.',
      ]}
    />
  )
}
