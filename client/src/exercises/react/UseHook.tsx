export default function UseHook() {
  return (
    <div className="exercise">
      <h1>use()</h1>
      <p className="exercise-meta">Tier 3 — React 19</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Read a Context with <code>use(MyContext)</code> instead of <code>useContext</code> — note: can be called conditionally</li>
          <li>Pass a Promise to <code>use(promise)</code> inside a Suspense boundary — component suspends until resolved</li>
          <li>Wrap the Suspense consumer in an error boundary to catch rejected promises</li>
          <li>Understand: <code>use()</code> is the only hook that can be called inside conditionals and loops</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
