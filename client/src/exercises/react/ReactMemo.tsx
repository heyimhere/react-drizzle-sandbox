import ExercisePage from '../../components/ExercisePage'

export default function ReactMemo() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="React.memo"
      difficulty="Intermediate"
      description="React.memo wraps a component so it only re-renders when its props change (shallow comparison). It is a performance optimization, not a correctness guarantee — misuse adds overhead without benefit. Always profile first."
      whatToBuild="A parent component with a text input (its own state) and a list of 200 Row items. Without memo, every keystroke re-renders all 200 rows. Add a visible render counter to Row. Then wrap Row in React.memo and pass a stable onSelect handler via useCallback. Watch the Profiler go quiet and the counter stop climbing."
      keyConcepts={['React.memo', 'useCallback', 'referential equality', 'React Profiler', 'custom comparator']}
      workspaceFile="client/src/exercises/react/ReactMemo.tsx"
      hints={[
        'Add a render counter to Row: const renders = useRef(0); renders.current++ and display renders.current inside the component. You will see it increment on every parent keystroke before optimization, and stop after.',
        'The inline arrow prop onClick={() => onSelect(item.id)} creates a new function reference on every parent render. React.memo sees it as a changed prop and re-renders anyway. Pass a stable handler via useCallback with the right dependencies.',
        'Custom comparator: React.memo(Row, (prev, next) => prev.item.id === next.item.id && prev.item.name === next.item.name). Only re-renders when those two fields change. Use this when you need to ignore certain prop changes.',
        'Open React DevTools and switch to the Profiler tab. Click Record, type in the input, stop recording. Gray = skipped (memo worked). Colored = re-rendered. The flame chart shows exactly which components ran and why.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
