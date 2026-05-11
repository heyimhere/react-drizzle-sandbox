export default function UseEffect() {
  return (
    <div className="exercise">
      <h1>useEffect</h1>
      <p className="exercise-meta">Tier 1 — Core Hooks</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Fetch data on mount — handle loading and error states</li>
          <li>Cleanup: interval that ticks and clears on unmount</li>
          <li>Cleanup: event listener attached in effect, removed on cleanup</li>
          <li>Dependency array — trigger effect only when a specific value changes</li>
          <li>Understand: StrictMode double-invokes effects in dev — write idempotent cleanups</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
