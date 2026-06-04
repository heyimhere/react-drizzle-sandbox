import ExercisePage from '../../components/ExercisePage'

export default function BuiltInUtilities() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="Built-in Utility Types"
      difficulty="Intermediate"
      description="Partial<T>, Required<T>, Readonly<T>, Pick<T, K>, Omit<T, K>, Record<K, V> — six utility types you reach for daily. Partial makes every field optional (PATCH bodies), Pick selects a subset (smaller DTOs), Omit removes fields (PUT bodies without id), Record builds dictionary types (status maps, lookup tables)."
      whatToBuild="Given type User = { id: number; name: string; email: string; bio?: string }, derive: type PatchUser = Partial<Omit<User, 'id'>>; type PublicUser = Pick<User, 'id' | 'name'>; type FullUser = Required<User>; type UserMap = Record<number, User>. Write a function update(id: number, patch: PatchUser) that PATCHes a user, and a function indexById(users: User[]): Record<number, User>."
      keyConcepts={['Partial', 'Required', 'Readonly', 'Pick', 'Omit', 'Record']}
      workspaceFile="client/src/exercises/typescript/BuiltInUtilities.tsx"
      hints={[
        'Partial<T> sets every field to optional. Required<T> reverses it. Both are shallow — nested objects keep their original modifiers.',
        'Pick<T, K> keeps only K from T. Omit<T, K> drops K. Compose freely: Partial<Pick<User, "name" | "email">>.',
        'Record<K, V> builds an object type with K-typed keys and V-typed values. Common K choices: string, number, a union of literal strings.',
        'Pick + Omit + Partial cover ~80% of DTO derivation. Reach for them before writing a new interface manually — your types stay in sync with the source automatically.',
      ]}
    />
  )
}
