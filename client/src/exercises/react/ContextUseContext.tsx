import ExercisePage from '../../components/ExercisePage'

export default function ContextUseContext() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Context + useContext"
      difficulty="Intermediate"
      description="Context lets you pass data through the component tree without threading props through every level. The Provider supplies a value; any descendant can consume it with useContext. Every consumer re-renders when the context value changes."
      whatToBuild="A theme system supporting light, dark, and system modes. Create a ThemeContext and ThemeProvider that reads and persists the preference to localStorage. Expose the context through a useTheme() custom hook that throws if used outside the Provider. Build a ThemeToggle button nested 3 levels deep that switches the theme without any props."
      keyConcepts={['createContext', 'useContext', 'Provider', 'custom hook', 'localStorage', 'type-safe context']}
      workspaceFile="client/src/exercises/react/ContextUseContext.tsx"
      hints={[
        'Create context with a null default: const ThemeContext = createContext<ThemeContextType | null>(null). In useTheme(), throw if the value is null — this catches components that forget to wrap with the Provider.',
        'Memoize the Provider value: const value = useMemo(() => ({ theme, setTheme }), [theme]). Without this, every re-render of the Provider\'s parent creates a new object, causing all consumers to re-render even if theme has not changed.',
        'For "system" mode, check window.matchMedia("(prefers-color-scheme: dark)").matches for the initial value. Listen for OS changes with .addEventListener("change", handler) and clean up with removeEventListener.',
        'Apply the resolved theme to the document: useEffect(() => { document.documentElement.setAttribute("data-theme", resolvedTheme) }, [resolvedTheme]). This lets you style with CSS [data-theme="dark"] selectors instead of inline styles.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
