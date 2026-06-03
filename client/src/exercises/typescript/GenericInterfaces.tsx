import ExercisePage from '../../components/ExercisePage'

export default function GenericInterfaces() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 3 — Generics']}
      title="Generic Interfaces & Classes"
      difficulty="Intermediate"
      description="Generic interfaces and classes parameterize a shape over a type. ApiResponse<T> = { data: T; meta: Meta }. Box<T> with methods get(): T and set(v: T): void. Generic factories return objects whose methods preserve the type param. This is how libraries like Drizzle and React Query give you complete inference end-to-end."
      whatToBuild="Define interface ApiResponse<T> { data: T; meta: { count: number } }. Write a class Box<T> with constructor(initial: T), get(), set(v: T). Write a factory makeStore<T>(initial: T) returning { get: () => T; set: (v: T) => void; subscribe: (fn: (v: T) => void) => () => void }. Confirm a Box<User> exposes .get(): User and .set(v: User)."
      keyConcepts={['generic interface', 'generic class', 'parametric factories', 'subscribe pattern', 'closure-captured generic']}
      workspaceFile="client/src/exercises/typescript/GenericInterfaces.tsx"
      hints={[
        'Generic on the interface: interface Repo<T> { findById(id: string): Promise<T | null> }. The T param is shared across every method signature.',
        'Generic on the method but not the class: class Db { query<T>(sql: string): Promise<T[]> }. Each call can pick its own T.',
        'Generic factories preserve types via closure: function makeStore<T>(initial: T) { let value = initial; return { get: () => value, set: (v: T) => { value = v } } }. The returned object methods still know T.',
        'Static-side generics are awkward — classes do not allow generic statics. If you need a generic-on-the-instance factory pattern, prefer plain functions over classes.',
      ]}
    />
  )
}
