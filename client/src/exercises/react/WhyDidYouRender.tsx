import ExercisePage from '../../components/ExercisePage'

export default function WhyDidYouRender() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="Why Did You Render?"
      difficulty="Intermediate"
      description="Before you reach for memo, find out what is actually re-rendering and why. A small useWhyDidYouUpdate hook compares the previous props object against the current one and logs which keys changed. It teaches you to look at identity, not value — most surprises are about new objects with the same shape."
      whatToBuild="A custom hook useWhyDidYouUpdate(name, props) that, on every render, diffs props against the previous render and console.logs the changed keys. Demo it with a child that receives onClick (inline) and config={{ size: 4 }} (inline) — both change every render until you stabilize them with useCallback and useMemo."
      keyConcepts={['useRef for previous values', 'useEffect for post-render work', 'shallow diff', 'identity vs value', 'render debugging']}
      workspaceFile="client/src/exercises/react/WhyDidYouRender.tsx"
      hints={[
        'function useWhyDidYouUpdate(name, props) { const prev = useRef(); useEffect(() => { if (prev.current) { const changed = {}; Object.keys({ ...prev.current, ...props }).forEach(k => { if (prev.current[k] !== props[k]) changed[k] = { from: prev.current[k], to: props[k] } }); if (Object.keys(changed).length) console.log("[why]", name, changed) } prev.current = props }) }.',
        'Use Object.is (or ===) for the comparison — that mirrors what memo and dependency arrays do. Deep equality would hide the very problems you want to find.',
        'Wire it inside the child you suspect: useWhyDidYouUpdate("Child", { onClick, config }). Trigger re-renders from the parent and read the console.',
        'Disable in production: if (process.env.NODE_ENV !== "development") return. The hook still runs but skips the work. Keeps the helper invisible in shipped builds.',
      ]}
    />
  )
}
