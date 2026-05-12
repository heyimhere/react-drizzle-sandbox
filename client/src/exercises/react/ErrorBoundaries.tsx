import ExercisePage from '../../components/ExercisePage'

export default function ErrorBoundaries() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="Error boundaries"
      difficulty="Intermediate"
      description="Error boundaries are class components that catch JavaScript errors during render, in lifecycle methods, and in constructors of the whole tree below them. They let you show a fallback UI instead of crashing the entire app."
      whatToBuild="Write a class-based ErrorBoundary from scratch using getDerivedStateFromError and componentDidCatch. Wrap a Bomb component that throws on a button click. The fallback UI shows the error message and a Retry button. The parent tracks a retryKey integer — incrementing it and passing it as the key prop on ErrorBoundary resets the boundary."
      keyConcepts={['componentDidCatch', 'getDerivedStateFromError', 'error boundary', 'retry pattern', 'key reset']}
      workspaceFile="client/src/exercises/react/ErrorBoundaries.tsx"
      hints={[
        'getDerivedStateFromError(error) is a static method — return { hasError: true, error } to swap the fallback UI in. componentDidCatch(error, info) is an instance method — this is where you would log to Sentry or Datadog using info.componentStack.',
        'The Retry pattern: the parent holds const [retryKey, setRetryKey] = useState(0) and renders <ErrorBoundary key={retryKey}>. The Retry button calls setRetryKey(k => k + 1). Changing the key unmounts and remounts the boundary, resetting hasError to false.',
        'Error boundaries only catch errors that happen during render, in lifecycle methods, and in constructors. They do NOT catch: errors inside event handlers (use try/catch there), async errors, or errors outside the React tree.',
        'In development with Vite, React shows its own error overlay before the boundary catches it. This is intentional — press Escape or click X to dismiss the overlay and see your boundary\'s fallback UI underneath.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
