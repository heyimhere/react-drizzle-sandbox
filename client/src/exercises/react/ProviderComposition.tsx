import ExercisePage from '../../components/ExercisePage'

export default function ProviderComposition() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Provider Composition"
      difficulty="Intermediate"
      description="Real apps stack three or four contexts at the root: theme, auth, toast, i18n. Nesting them inline turns the tree into a Christmas tree. A composeProviders helper flattens that into a single readable wrapper, and a small custom hook gives you typed access without ever exporting the raw context."
      whatToBuild="Build three contexts — ThemeContext (light/dark), AuthContext ({user, login, logout}), ToastContext (push/dismiss). Compose them with a single <AppProviders> component that accepts an array of providers and reduces them. Inside a demo screen, use one hook from each context to toggle theme, log in, and push a toast."
      keyConcepts={['createContext', 'Provider composition', 'reduce', 'custom hook gates', 'context typing']}
      workspaceFile="client/src/exercises/react/ProviderComposition.tsx"
      hints={[
        'Helper: function composeProviders(providers) { return ({ children }) => providers.reduceRight((acc, P) => <P>{acc}</P>, children) }. reduceRight wraps from the inside out so the first array entry is the outermost provider.',
        'For each context, export a custom hook that throws if used outside its provider: const ctx = useContext(ThemeContext); if (!ctx) throw new Error("useTheme must be inside ThemeProvider"); return ctx. This way consumers never have to remember the non-null assertion.',
        'Type the context value with a non-null default of null and a discriminator inside the hook. Avoids the "context might be undefined" annoyance in every consumer.',
        'Toasts are a great practice context because the value includes a function (push) and the state (queue) — exercise both readable and callable consumers.',
      ]}
    />
  )
}
