export default function CustomHooksTyping() {
  return (
    <div className="exercise">
      <h1>Typing custom hooks</h1>
      <p className="exercise-meta">Tier 5 — TypeScript × React</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Return tuple: <code>function useToggle(): [boolean, () =&gt; void]</code> — use <code>as const</code> on the return array</li>
          <li>Generic hook: <code>function useLocalStorage&lt;T&gt;(key: string, initial: T): [T, (v: T) =&gt; void]</code></li>
          <li>Discriminated return: <code>type Result&lt;T&gt; = &#123; status: 'loading' &#125; | &#123; status: 'ok'; data: T &#125; | &#123; status: 'error'; error: Error &#125;</code></li>
          <li>Understand: TypeScript widens tuple returns to arrays unless you annotate or use <code>as const</code></li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
