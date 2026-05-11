export default function CompoundComponents() {
  return (
    <div className="exercise">
      <h1>Compound components</h1>
      <p className="exercise-meta">Tier 2 — Composition</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Build a <code>&lt;Tabs&gt;</code> component: <code>&lt;Tabs.List&gt;</code>, <code>&lt;Tabs.Tab&gt;</code>, <code>&lt;Tabs.Panel&gt;</code></li>
          <li>Siblings share state implicitly via Context — no prop drilling through the tree</li>
          <li>Consumer usage looks like: <code>&lt;Tabs defaultTab="a"&gt;&lt;Tabs.List&gt;...&lt;/Tabs.List&gt;&lt;Tabs.Panel id="a"&gt;...&lt;/Tabs.Panel&gt;&lt;/Tabs&gt;</code></li>
          <li>Understand: the parent owns state, sub-components read/write via context</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
