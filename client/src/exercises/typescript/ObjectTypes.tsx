import ExercisePage from '../../components/ExercisePage'

export default function ObjectTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Object Types"
      difficulty="Beginner"
      description="Object types describe records of named fields. Each property can be required, optional (?), readonly, or both. Index signatures let you describe records with arbitrary keys ({ [key: string]: number }). Excess property checks fire at literal assignment but not at variable assignment — a common TypeScript gotcha."
      whatToBuild="Define a User type with: id (readonly number), name (string), email (string), bio (optional string), and an arbitrary tags index signature [key: string]: boolean. Write a function that takes a User and returns a new one with bio defaulted. Demonstrate the excess-property gotcha: literal { id, name, email, extra: 1 } errors, but assigning that literal to a variable first then passing it does not."
      keyConcepts={['object types', 'optional props (?)', 'readonly modifier', 'index signatures', 'excess property checks']}
      workspaceFile="client/src/exercises/typescript/ObjectTypes.tsx"
      hints={[
        'Optional vs union with undefined: bio?: string allows the key to be missing. bio: string | undefined requires the key but allows undefined as the value. With exactOptionalPropertyTypes on, the difference matters at assignment.',
        'readonly is shallow: readonly user.posts still lets you push to the array. Use readonly Post[] for true immutability.',
        'Index signature + known keys: { id: number; [key: string]: string | number } — the index sig type must include the known key types as a union. Otherwise TypeScript errors at the declaration.',
        'Excess property checks only fire on object literals: fn({ id: 1, extra: 2 }) errors. const x = { id: 1, extra: 2 }; fn(x) succeeds. To opt in to strict checks, annotate x with the exact type.',
      ]}
    />
  )
}
