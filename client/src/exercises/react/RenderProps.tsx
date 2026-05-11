export default function RenderProps() {
  return (
    <div className="exercise">
      <h1>Render props</h1>
      <p className="exercise-meta">Tier 2 — Composition</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Build a <code>&lt;Toggle render=&#123;(on, toggle) =&gt; ...&#125; /&gt;</code> component</li>
          <li>Build a <code>&lt;MouseTracker&gt;&#123;(&#123; x, y &#125;) =&gt; ...&#125;&lt;/MouseTracker&gt;</code> (children-as-function variant)</li>
          <li>Convert one of them to a custom hook — notice how much simpler the hook version is</li>
          <li>Understand: render props still appear in third-party libs (react-final-form, Downshift) — know how to read them</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
