export default function LazySuspense() {
  return (
    <div className="exercise">
      <h1>lazy + Suspense</h1>
      <p className="exercise-meta">Tier 4 — Performance</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Code-split a heavy component: <code>const Heavy = lazy(() =&gt; import('./Heavy'))</code></li>
          <li>Wrap it: <code>&lt;Suspense fallback=&#123;&lt;Spinner /&gt;&#125;&gt;&lt;Heavy /&gt;&lt;/Suspense&gt;</code></li>
          <li>Verify in Network tab that the chunk loads on demand, not on initial load</li>
          <li>Nested Suspense: outer boundary shows coarse fallback, inner shows fine-grained fallback</li>
          <li>Understand: Suspense also catches data-fetching suspensions (<code>use(promise)</code>)</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
