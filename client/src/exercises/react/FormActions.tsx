export default function FormActions() {
  return (
    <div className="exercise">
      <h1>useFormStatus / useActionState</h1>
      <p className="exercise-meta">Tier 3 — React 19</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li><code>useActionState(action, initialState)</code> — wraps an async action, gives you <code>[state, dispatch, isPending]</code></li>
          <li><code>useFormStatus()</code> — inside a form's child component, reads <code>&#123; pending &#125;</code> from the parent form action</li>
          <li>Build a submit button that disables itself while the form is pending</li>
          <li>Understand: these work with React's native form actions (<code>&lt;form action=&#123;myAction&#125;&gt;</code>), not just event handlers</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
