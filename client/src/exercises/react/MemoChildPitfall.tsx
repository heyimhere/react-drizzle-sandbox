import ExercisePage from '../../components/ExercisePage'

export default function MemoChildPitfall() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="React.memo Pitfalls"
      difficulty="Intermediate"
      description="React.memo skips a re-render when props are shallowly equal. The trap: a parent that passes new objects, new arrays, or new inline functions on every render breaks shallow equality — and your memoized child re-renders anyway. The fix is upstream, with useMemo and useCallback at the props boundary."
      whatToBuild="A parent that re-renders every second (forced by a tick state). Inside, render three children: <Plain>, <Memoized> with an inline {x: 1} object prop, and <Memoized> with a useMemo-stabilized prop. Log render counts. Show that the second still re-renders despite memo, and the third does not."
      keyConcepts={['React.memo', 'shallow equality', 'reference identity', 'useMemo', 'useCallback', 'render counters with useRef']}
      workspaceFile="client/src/exercises/react/MemoChildPitfall.tsx"
      hints={[
        'Track render counts with useRef(0). In the child, increment on every render and display the count — refs do not trigger re-renders themselves, so the count is honest.',
        'Inline objects fail shallow equality every render. <Memo data={{ a: 1 }} /> creates a fresh object each time. <Memo data={useMemo(() => ({ a: 1 }), [])} /> stabilizes the reference.',
        'Same trap with arrays and inline functions. Wrap callbacks in useCallback(fn, [deps]) before passing to memoized children, or extract pure functions outside the component entirely.',
        'memo accepts a custom equality function as the second arg: memo(Comp, (prev, next) => prev.id === next.id). Useful when shallow equality is too strict — but reach for it last, after upstream fixes.',
      ]}
    />
  )
}
