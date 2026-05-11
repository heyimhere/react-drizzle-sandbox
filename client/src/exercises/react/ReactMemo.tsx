export default function ReactMemo() {
  return (
    <div className="exercise">
      <h1>React.memo</h1>
      <p className="exercise-meta">Tier 4 — Performance</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Wrap a child in <code>React.memo</code> — use React DevTools Profiler to confirm it skips renders</li>
          <li>Break memoization by passing a new object/function prop on every parent render — observe it re-renders</li>
          <li>Fix it with <code>useMemo</code>/<code>useCallback</code> on the prop — confirm skip resumes</li>
          <li>Custom comparator: <code>React.memo(Component, (prev, next) =&gt; prev.id === next.id)</code></li>
          <li>Understand: <code>memo</code> is a performance hint, not a guarantee — only use after profiling</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
