export default function UseOptimistic() {
  return (
    <div className="exercise">
      <h1>useOptimistic</h1>
      <p className="exercise-meta">Tier 3 — React 19</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Todo list: optimistically add an item before the server responds</li>
          <li>Delete: instantly remove from UI, revert if the DELETE request fails</li>
          <li><code>const [optimisticItems, addOptimistic] = useOptimistic(items, (state, newItem) =&gt; [...state, newItem])</code></li>
          <li>Understand: optimistic state is temporary — once the action settles, React reverts to the source-of-truth state</li>
          <li>Best combined with a form action or <code>startTransition</code></li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
