import ExercisePage from '../../components/ExercisePage'

export default function TypedContext() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Typed Context"
      difficulty="Beginner"
      description="Context typed as Value | undefined forces every consumer to check for undefined, which is noisy and easy to forget. The two clean patterns are (a) provide a sane default value at createContext(), or (b) wrap useContext in a custom hook that throws when used outside the provider, giving consumers a non-nullable value."
      whatToBuild="A ThemeContext exposing { mode: 'light' | 'dark'; toggle(): void }. Use the throw-on-missing-provider pattern. Build <ThemeProvider> with useState, and a useTheme() hook that returns a guaranteed non-null value. Show a consumer that calls useTheme without any optional chaining or null checks."
      keyConcepts={['createContext', 'useContext', 'custom hook gate', 'non-null context value', 'display name for devtools']}
      workspaceFile="client/src/exercises/typescript/TypedContext.tsx"
      hints={[
        'const ThemeContext = createContext<ThemeValue | null>(null). The default is null because the provider is the source of truth — consuming outside should be a bug.',
        'export function useTheme() { const ctx = useContext(ThemeContext); if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>"); return ctx }. Consumers now get ThemeValue, never null.',
        'Set ThemeContext.displayName = "ThemeContext" so React DevTools labels it. Worth the one line — many providers in the tree become hard to tell apart.',
        'Memoize the provider value: const value = useMemo(() => ({ mode, toggle }), [mode]). Without it, every parent render hands consumers a new object and re-renders them all.',
      ]}
    />
  )
}
