import ExercisePage from '../../components/ExercisePage'

export default function LazySuspense() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="lazy + Suspense"
      difficulty="Intermediate"
      description="lazy() code-splits a component into a separate bundle chunk that only downloads when the component first renders. Suspense wraps it and shows a fallback UI while the chunk is loading — giving you on-demand loading with a clean loading state."
      whatToBuild="Three sub-pages — Dashboard, Reports, and Settings — each in their own file. Code-split all three with lazy(() => import('./Dashboard')). Wrap the routes in a single <Suspense fallback={<PageSkeleton />}>. Verify in the Network tab that each chunk only loads on first visit. After npm run build, inspect dist/assets/ to see the separate chunk files."
      keyConcepts={['lazy', 'Suspense', 'code splitting', 'dynamic import', 'loading boundary', 'Vite chunks']}
      workspaceFile="client/src/exercises/react/LazySuspense.tsx"
      hints={[
        'Declare lazy components at module scope — outside any function or component: const Dashboard = lazy(() => import("./pages/Dashboard")). Inside a component, a new import() promise is created every render and Suspense never sees the same promise resolve.',
        'The Suspense fallback only renders while the chunk is being downloaded — typically the first visit to that route. Subsequent visits use the cached chunk and skip the fallback entirely.',
        'After npm run build, look in dist/assets/. Each lazy() import produces a separate hash-named .js file. You can see exactly how big each route bundle is and what is being code-split.',
        'Nest Suspense boundaries for fine-grained loading states: a coarse fallback at the route level (page skeleton) and a tighter one inside the page around a specific slow widget (spinner). The nearest ancestor catches the suspension.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
