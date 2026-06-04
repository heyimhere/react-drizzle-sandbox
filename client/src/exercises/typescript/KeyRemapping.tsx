import ExercisePage from '../../components/ExercisePage'

export default function KeyRemapping() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="Key Remapping (as clauses)"
      difficulty="Advanced"
      description="Inside a mapped type, the as clause lets you rename or filter keys: { [K in keyof T as NewName]: T[K] }. Combine with template literal types to derive getter names (id → getId), with conditional types to drop keys (never key removes them), and with capitalization helpers (Capitalize) to convert casing."
      whatToBuild="Write type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] } so Getters<{ id: number; name: string }> is { getId(): number; getName(): string }. Write type OnlyStrings<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K] } that drops non-string keys. Show the filter at work on a mixed object type."
      keyConcepts={['as clause', 'key remapping', 'template literal in keys', 'Capitalize', 'filter keys with never']}
      workspaceFile="client/src/exercises/typescript/KeyRemapping.tsx"
      hints={[
        'as `prefix${Capitalize<string & K>}` requires the string & K intersection because K is keyof T (string | number | symbol). The intersection narrows to the string portion.',
        'Filter pattern: as T[K] extends Cond ? K : never. The never branch causes that property to be omitted from the result. Common for stripping methods, dropping nullables, or keeping only string-valued keys.',
        'Capitalize is built-in, alongside Uppercase, Lowercase, Uncapitalize. Combine: Lowercase<K> for case-insensitive key normalization.',
        'Key remapping is powerful but read-heavy. Add a comment showing one or two example expansions when you write a non-trivial mapped type — it pays for itself on the first re-read.',
      ]}
    />
  )
}
