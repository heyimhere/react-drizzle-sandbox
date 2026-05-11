export default function ErrorBoundaries() {
  return (
    <div className="exercise">
      <h1>Error boundaries</h1>
      <p className="exercise-meta">Tier 4 — Performance</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Write a class-based error boundary from scratch using <code>componentDidCatch</code> and <code>getDerivedStateFromError</code></li>
          <li>Use it to catch a deliberately thrown error in a child component</li>
          <li>Add a "retry" button that resets the boundary by toggling a key</li>
          <li>Understand: error boundaries only catch render-time errors — not async errors, not event handlers</li>
          <li>Shortcut: install <code>react-error-boundary</code> and use its <code>&lt;ErrorBoundary&gt;</code> + <code>useErrorBoundary()</code></li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
