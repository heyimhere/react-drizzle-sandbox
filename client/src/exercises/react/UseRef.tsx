export default function UseRef() {
  return (
    <div className="exercise">
      <h1>useRef</h1>
      <p className="exercise-meta">Tier 1 — Core Hooks</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>DOM access: auto-focus an input on mount</li>
          <li>DOM access: programmatically scroll a container to the bottom</li>
          <li>Mutable value: store a previous state value without triggering re-render</li>
          <li>Mutable value: track how many times a component has rendered</li>
          <li>Understand: changing <code>ref.current</code> never causes a re-render</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
