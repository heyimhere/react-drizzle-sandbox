export default function ControlledInputs() {
  return (
    <div className="exercise">
      <h1>Controlled vs uncontrolled inputs</h1>
      <p className="exercise-meta">Tier 2 — Composition</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Controlled: text input bound to state via <code>value</code> + <code>onChange</code></li>
          <li>Controlled: multi-field form — one state object, one handler using <code>name</code> attribute</li>
          <li>Uncontrolled: read value on submit via <code>useRef</code> or <code>FormData</code></li>
          <li>File input: always uncontrolled — read <code>e.target.files</code> in onChange</li>
          <li>Understand: mixing controlled + uncontrolled on the same input throws a React warning</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
