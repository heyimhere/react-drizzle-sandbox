export default function Home() {
  return (
    <div className="exercise">
      <h1>Practice Sandbox</h1>
      <p className="exercise-desc">
        Pick an exercise from the sidebar. Each one is a blank workspace — replace the placeholder with
        working code to drill the concept. Come back and redo them from scratch to build muscle memory.
      </p>
      <div className="exercise-goals">
        <h3>How to use</h3>
        <ul>
          <li>Work through React tiers 1 → 5 in order the first time</li>
          <li>For Drizzle: add tables to <code>server/src/db/schema.ts</code>, then run <code>npm run db:generate && npm run db:migrate</code></li>
          <li>Redo exercises cold (no looking) to lock in patterns</li>
          <li>Build the full-stack Todo exercise to connect client + server</li>
        </ul>
      </div>
    </div>
  )
}
