import ExercisePage from '../../components/ExercisePage'

export default function CustomHooksTyping() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 5 — TypeScript × React']}
      title="Typing custom hooks"
      difficulty="Intermediate"
      description="Custom hooks that return arrays or complex objects need extra care to get right types at the call site. Tuple return types, generics, and discriminated union returns let TypeScript tell callers exactly what they are getting and enforce correct usage."
      whatToBuild="Three hooks with increasing type complexity. useToggle() returns a const tuple [boolean, () => void] — prove TypeScript knows the exact index types. useLocalStorage<T>(key, initial) is generic and infers T from the initial value. useFetch<T>(url) returns a discriminated union: { status: 'loading' } | { status: 'ok'; data: T } | { status: 'error'; error: Error } — callers must narrow before accessing data."
      keyConcepts={['as const', 'tuple return', 'generic hook', 'discriminated union return', 'type narrowing', 'ReturnType']}
      workspaceFile="client/src/exercises/react/CustomHooksTyping.tsx"
      hints={[
        'Without as const, return [on, toggle] is typed as (boolean | (() => void))[]. With as const: return [on, toggle] as const — TypeScript knows index 0 is boolean and index 1 is () => void. Alternatively, annotate the return type explicitly: ): [boolean, () => void].',
        'Explicit return type annotation is clearer than as const for public APIs: function useToggle(): [boolean, () => void]. The return type appears in IntelliSense documentation without callers needing to infer it.',
        'For useFetch<T>, the discriminated union forces callers to narrow before accessing data: if (result.status === "ok") { use(result.data) }. TypeScript will not let you access result.data without narrowing — no optional chaining needed.',
        'ReturnType<typeof useToggle> extracts the hook\'s return type without repeating it: type ToggleState = ReturnType<typeof useToggle>. Use this when you need to type a variable that stores the hook\'s result, like const toggle: ToggleState = useToggle().',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
