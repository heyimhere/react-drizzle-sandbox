import ExercisePage from '../../components/ExercisePage'

export default function VirtualizedTable() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 4 — Performance']}
      title="Virtualized Table"
      difficulty="Advanced"
      description="A data table with 50k rows kills any naïve render. Virtualization mounts only the visible rows and reserves layout space with a tall spacer. With sticky headers, fixed row height, and an overscan buffer, you get smooth 60fps scroll over arbitrarily large datasets — no library required."
      whatToBuild="A 50,000-row table with columns: id, name, email, joined. Fixed row height (40px). Sticky header. Visible rows only mount based on scrollTop. Add an overscan of 5 rows above/below the viewport so fast scroll never shows blank space. Selecting a row highlights it persistently across scroll."
      keyConcepts={['windowing', 'overscan', 'sticky thead', 'translateY', 'useRef for scroll container', 'Set<id> for selection']}
      workspaceFile="client/src/exercises/react/VirtualizedTable.tsx"
      hints={[
        'Generate rows once at module scope. Track scrollTop with state via onScroll on the container, throttling with requestAnimationFrame if you feel jank: const raf = useRef(); onScroll = e => { if (raf.current) return; raf.current = requestAnimationFrame(() => { setScrollTop(...); raf.current = null }) }.',
        'Math: const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN); const endIndex = Math.min(rows.length, startIndex + Math.ceil(VIEWPORT / ROW_HEIGHT) + 2 * OVERSCAN).',
        'Layout: a parent overflow-y-auto with fixed height. A child div with height = rows.length * ROW_HEIGHT acts as a spacer for the scrollbar. Render the visible slice absolutely positioned at top = index * ROW_HEIGHT.',
        'Sticky header: <thead style={{ position: "sticky", top: 0 }}>. Selection: useState(new Set<number>()) and toggle on row click. Build the highlight from selected.has(row.id), not row props, so memoizing rows still works.',
      ]}
    />
  )
}
