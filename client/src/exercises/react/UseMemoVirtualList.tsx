import ExercisePage from '../../components/ExercisePage'

export default function UseMemoVirtualList() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useMemo — Virtualized List"
      difficulty="Advanced"
      description="Rendering 10,000 rows is fine for the DOM as long as you only mount the visible ~20. Windowing computes which slice to show from scrollTop, item height, and viewport height. useMemo is the right hook to keep that math stable across unrelated re-renders."
      whatToBuild="A scrollable container with a fixed height (e.g. 480px) showing 10,000 generated rows of 36px each. Track scrollTop in state. Compute startIndex, endIndex, and the visible slice with useMemo so they only recalculate when scrollTop or the list changes. Use a tall inner spacer div so the scrollbar reflects the full 10k height."
      keyConcepts={['useMemo', 'windowing', 'scrollTop', 'absolute positioning', 'transform: translateY']}
      workspaceFile="client/src/exercises/react/UseMemoVirtualList.tsx"
      hints={[
        'Generate items once outside the component: const items = Array.from({ length: 10000 }, (_, i) => ({ id: i, label: `Row ${i}` })). Otherwise you regenerate 10k objects on every render.',
        'Math: startIndex = Math.floor(scrollTop / ROW_HEIGHT); endIndex = Math.min(items.length, startIndex + Math.ceil(VIEWPORT_HEIGHT / ROW_HEIGHT) + 1). Add a small overscan buffer (e.g. +3) to avoid blank gaps during fast scroll.',
        'Wrap the slice in useMemo([items, scrollTop]): const visible = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]). Skip the memo if it does not feel needed — measure first.',
        'Layout: outer div with overflow auto and fixed height. Inner div with height = items.length * ROW_HEIGHT to preserve scrollbar. Position each visible row absolutely at top: index * ROW_HEIGHT, or use transform: translateY for cheaper GPU compositing.',
      ]}
    />
  )
}
