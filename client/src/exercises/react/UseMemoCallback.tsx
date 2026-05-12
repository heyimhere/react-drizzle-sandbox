import ExercisePage from '../../components/ExercisePage'

export default function UseMemoCallback() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useMemo / useCallback"
      difficulty="Intermediate"
      description="useMemo caches a computed value between renders. useCallback caches a function reference. Both only recompute when their dependencies change, making them useful for skipping expensive work and stabilizing references passed to memoized children."
      whatToBuild="A filterable product list with 500 generated items. The user can search by name and sort by price or name. Memoize the filtered and sorted list with useMemo. Wrap a ProductCard child in React.memo and pass a stable onFavorite handler via useCallback. Add a visible render counter to ProductCard to prove it stops re-rendering when the parent input changes."
      keyConcepts={['useMemo', 'useCallback', 'React.memo', 'referential equality', 'dependency array', 'derived state']}
      workspaceFile="client/src/exercises/react/UseMemoCallback.tsx"
      hints={[
        'Put filter and sort inside useMemo: useMemo(() => items.filter(i => i.name.includes(search)).sort(...), [items, search, sortKey]). It only recomputes when those three deps change — not on every parent render.',
        'Without useCallback, the onFavorite prop is a new arrow function on every parent render. React.memo sees it as a new prop and re-renders anyway. Wrap it: useCallback((id) => setFavorites(prev => [...prev, id]), []).',
        'Add a module-level counter outside the component: let productCardRenders = 0. Increment and display it inside ProductCard. You will see it explode before memoization and flatten after.',
        'Object and array props also break memo because {} !== {} across renders. If you pass a config object as a prop, memoize it too with useMemo. The same rule applies to any reference type.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
