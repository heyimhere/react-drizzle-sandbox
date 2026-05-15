const API = 'http://localhost:3001'

export default function Scratch() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--accent)' }}>
          End to End · Scratch
        </p>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-h)' }}>
          Scratchpad
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
          Free space — build whatever, wipe it whenever. Route: <code>server/src/routes/scratch.ts</code>
        </p>
      </div>

      {/* Your code goes here — API base is {API}/scratch */}
    </div>
  )
}
