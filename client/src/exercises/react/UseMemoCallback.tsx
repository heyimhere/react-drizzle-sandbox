export default function UseMemoCallback() {
  return (
    <div className="exercise">
      <h1>useMemo / useCallback</h1>
      <p className="exercise-meta">Tier 1 — Core Hooks</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li><code>useMemo</code>: cache an expensive filter/sort over a large list</li>
          <li><code>useCallback</code>: stable handler reference passed to a memoized child</li>
          <li>Pair with <code>React.memo</code> — verify child skips re-render</li>
          <li>Understand: both only help when the computation or referential equality <em>actually matters</em></li>
          <li>Anti-pattern: wrapping everything in useMemo/useCallback without profiling</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
