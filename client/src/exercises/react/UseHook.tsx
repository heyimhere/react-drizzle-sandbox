import ExercisePage from '../../components/ExercisePage'

export default function UseHook() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="use()"
      difficulty="Advanced"
      description="use() is a new React 19 hook that reads the value of a resource — either a Context or a Promise. Unlike all other hooks it can be called inside conditionals and loops. When passed a Promise, the component suspends until the Promise resolves."
      whatToBuild="Two demos. First: a Settings panel that reads a context conditionally using use(MyContext) inside an if-branch — prove it does not break the rules. Second: a UserCard component that accepts a Promise<User> prop, calls use(promise) to suspend, and is wrapped in a Suspense boundary with a skeleton fallback and an error boundary for rejected promises."
      keyConcepts={['use()', 'Suspense', 'ErrorBoundary', 'promise', 'conditional hook', 'concurrent features']}
      workspaceFile="client/src/exercises/react/UseHook.tsx"
      hints={[
        'use() is the only hook that can be called conditionally — it is not subject to the rules-of-hooks call-order constraint. if (condition) { const value = use(MyContext) } is valid React 19 code.',
        'Create the promise outside the component — at module scope, in a useRef, or in parent state. If you create it inside render, a new promise is created on every render and the component suspends forever because React never sees the same promise resolve.',
        'Wrap the suspending component correctly: <ErrorBoundary fallback={<Error />}><Suspense fallback={<Skeleton />}><UserCard promise={p} /></Suspense></ErrorBoundary>. ErrorBoundary must be the outer wrapper — it catches rejections that bubble past Suspense.',
        'To simulate a slow fetch in development: const delay = (ms: number) => new Promise(r => setTimeout(r, ms)). Compose with your fetch: const p = delay(1500).then(() => fetchUser(id)). You will see the Suspense fallback for 1.5s.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
