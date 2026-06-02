import ExercisePage from '../../components/ExercisePage'

export default function RouteCodeSplit() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="Route-level Code Splitting"
      difficulty="Beginner"
      description="React.lazy + Suspense turns any component import into a code-split chunk. At the route layer, this is the biggest win in your bundle budget: the user only downloads the page they navigate to. The dev tool to watch: the Network panel — chunks should arrive on demand."
      whatToBuild="A small app with three routes: Home, Settings, Reports. Each route's component lives in its own file and is imported via React.lazy(). Wrap the <Routes> in <Suspense fallback={<Skeleton />}>. Bonus: prefetch a route on hover by calling the lazy component's preloader."
      keyConcepts={['React.lazy', 'Suspense', 'fallback', 'dynamic import', 'route-level chunks', 'prefetch on hover']}
      workspaceFile="client/src/exercises/react/RouteCodeSplit.tsx"
      hints={[
        'const Reports = lazy(() => import("./Reports")). The path must be statically analyzable for the bundler to emit a chunk — no template strings, no variables.',
        'One Suspense boundary above the route switch is enough for a basic split. Place smaller boundaries inside pages when they each load their own slow widgets, so a single slow widget does not blank the page.',
        'Prefetch on hover: const prefetch = () => import("./Reports"). Attach to onMouseEnter on the nav link. The browser starts downloading the chunk before the user clicks — the route appears instantly.',
        'Build with vite build and inspect dist/assets — each lazy import should produce its own JS chunk with a hash. If everything ends up in one chunk, you probably have a synchronous import somewhere defeating the split.',
      ]}
    />
  )
}
