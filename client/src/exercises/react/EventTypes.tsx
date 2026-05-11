export default function EventTypes() {
  return (
    <div className="exercise">
      <h1>Event types</h1>
      <p className="exercise-meta">Tier 5 — TypeScript × React</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li><code>React.ChangeEvent&lt;HTMLInputElement&gt;</code> — text input onChange</li>
          <li><code>React.ChangeEvent&lt;HTMLSelectElement&gt;</code> — select onChange</li>
          <li><code>React.FormEvent&lt;HTMLFormElement&gt;</code> — form onSubmit with <code>e.preventDefault()</code></li>
          <li><code>React.MouseEvent&lt;HTMLButtonElement&gt;</code> — button onClick</li>
          <li><code>React.KeyboardEvent&lt;HTMLInputElement&gt;</code> — onKeyDown, check <code>e.key</code></li>
          <li>Shortcut: let TypeScript infer the type from an inline handler — only annotate extracted handlers</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
