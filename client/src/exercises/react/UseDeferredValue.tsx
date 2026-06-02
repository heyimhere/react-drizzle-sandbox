import ExercisePage from '../../components/ExercisePage'

export default function UseDeferredValue() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useDeferredValue"
      difficulty="Intermediate"
      description="useDeferredValue is the leaf-side dual of useTransition. Instead of marking the setter call as non-urgent, you accept a value and React gives you a deferred copy that lags behind during heavy renders. Perfect for children that don't own the update — you just want to throttle the rendering work."
      whatToBuild="A color-picker input and a SlowSwatch child that re-renders 1,000 child swatches whenever the color changes. Without deferral, dragging the color picker stutters. Wrap the value with useDeferredValue and pass the deferred copy to SlowSwatch. The picker stays smooth; the swatch grid catches up."
      keyConcepts={['useDeferredValue', 'concurrent rendering', 'memo', 'leaf-driven throttling', 'tear vs lag']}
      workspaceFile="client/src/exercises/react/UseDeferredValue.tsx"
      hints={[
        'const [color, setColor] = useState("#3b82f6"); const deferredColor = useDeferredValue(color). Render the picker with color and pass deferredColor to the heavy child.',
        'Wrap the heavy child in React.memo so it only re-renders when its props (deferredColor) change. Without memo, useDeferredValue does nothing visible.',
        'Detect lag with const isStale = color !== deferredColor and dim the swatch grid slightly while updating — gives the user a subtle hint that the UI is catching up.',
        'useDeferredValue vs useTransition: use deferredValue when the slow rendering happens in a child you do not control the setter for; use transition when you do own the setState call.',
      ]}
    />
  )
}
