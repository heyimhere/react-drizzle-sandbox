export default function UseState() {
  return (
    <div className="exercise">
      <h1>useState</h1>
      <p className="exercise-meta">Tier 1 — Core Hooks</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Counter with increment / decrement / reset</li>
          <li>Boolean toggle (show/hide, on/off)</li>
          <li>Multi-field form object — update one field without clobbering others</li>
          <li>Lazy initializer — <code>useState(() =&gt; expensiveCompute())</code></li>
          <li>Understand: state updates are asynchronous snapshots, not mutations</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
