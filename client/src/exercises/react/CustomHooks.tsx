export default function CustomHooks() {
  return (
    <div className="exercise">
      <h1>Custom hooks</h1>
      <p className="exercise-meta">Tier 2 — Composition</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li><code>useFetch(url)</code> — returns <code>&#123; data, loading, error &#125;</code>, aborts on unmount</li>
          <li><code>useLocalStorage(key, initial)</code> — synced state that persists across page reloads</li>
          <li><code>useDebounce(value, delay)</code> — debounced search input</li>
          <li><code>useInterval(callback, delay)</code> — safe setInterval that respects stale closures</li>
          <li>Rule: extract any logic that uses other hooks into a custom hook — keeps components thin</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
