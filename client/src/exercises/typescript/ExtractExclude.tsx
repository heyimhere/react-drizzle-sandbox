import ExercisePage from '../../components/ExercisePage'

export default function ExtractExclude() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="Extract, Exclude, NonNullable"
      difficulty="Intermediate"
      description="Extract<T, U> filters a union to members assignable to U. Exclude<T, U> filters the opposite direction. NonNullable<T> is the special case of Exclude<T, null | undefined>. The pattern behind every 'filter event types', 'narrow this discriminated union', or 'drop the loading state' helper type."
      whatToBuild="Given type Event = { kind: 'click'; x: number } | { kind: 'submit'; data: FormData } | { kind: 'load' }, derive type ClickOrSubmit = Extract<Event, { kind: 'click' | 'submit' }> and type WithoutLoad = Exclude<Event, { kind: 'load' }>. Use NonNullable on string | null | undefined to get string. Write a function onlyDefined<T>(arr: (T | null | undefined)[]): NonNullable<T>[] that filters out null/undefined."
      keyConcepts={['Extract', 'Exclude', 'NonNullable', 'distributive conditionals', 'union filtering']}
      workspaceFile="client/src/exercises/typescript/ExtractExclude.tsx"
      hints={[
        'Extract<T, U> distributes: Extract<"a" | "b" | "c", "a" | "b"> = "a" | "b". The matching members are kept.',
        'Exclude<T, U> drops the assignable ones: Exclude<"a" | "b" | "c", "a"> = "b" | "c". Useful for removing a single variant from a discriminated union.',
        'NonNullable<T> = Exclude<T, null | undefined>. A common helper despite being one Exclude call away.',
        'For object unions, the U parameter is a shape predicate: Extract<Event, { kind: "click" }> matches anything assignable to { kind: "click" }. Discriminator-key + literal value is the typical shape.',
      ]}
    />
  )
}
