export default function ContextUseContext() {
  return (
    <div className="exercise">
      <h1>Context + useContext</h1>
      <p className="exercise-meta">Tier 2 — Composition</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Theme toggle: create a ThemeContext, provide it at root, consume in a deeply nested component</li>
          <li>Auth mock: provide a fake user object, show different UI based on auth state</li>
          <li>Understand: every consumer re-renders when context value changes — split contexts by change frequency</li>
          <li>Pattern: expose context via a custom hook (<code>useTheme()</code>) instead of raw <code>useContext</code></li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
