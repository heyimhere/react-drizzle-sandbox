export default function Example() {
  const features = [
    'Unlimited projects',
    'Priority email support',
    'Custom domains + SSL',
    '20 GB asset storage',
    'Team collaboration',
  ]

  return (
    <div
      className="relative w-full max-w-[320px] p-8 flex flex-col gap-6"
      style={{
        background: '#f3ebd9',
        border: '1.5px solid #1a1612',
        boxShadow: '14px 14px 0 #b8451e',
      }}
    >
      <span
        className="absolute -top-3 left-6 px-2 py-0.5 text-[10px] tracking-[0.24em] uppercase"
        style={{
          background: '#1a1612',
          color: '#f3ebd9',
          fontFamily: '"JetBrains Mono", monospace',
        }}
      >
        Editor's pick
      </span>

      <header>
        <p
          className="text-[10px] tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#b8451e' }}
        >
          Tier 02 · Pro
        </p>
        <h2
          className="m-0 text-5xl"
          style={{
            fontFamily: '"Instrument Serif", serif',
            color: '#1a1612',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          For devs<br />who <em style={{ color: '#b8451e' }}>ship</em>.
        </h2>
      </header>

      <div className="flex items-baseline gap-2">
        <span
          className="text-6xl tabular-nums"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#1a1612', lineHeight: 1 }}
        >
          $24
        </span>
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#5a4e3a' }}
        >
          per month
        </span>
      </div>

      <div className="h-px w-full" style={{ background: '#1a1612' }} />

      <ul className="flex flex-col gap-2">
        {features.map((f, i) => (
          <li
            key={f}
            className="flex items-baseline gap-3 text-sm"
            style={{ fontFamily: '"Fraunces", serif', color: '#1a1612' }}
          >
            <span
              className="text-[10px] tabular-nums shrink-0 mt-0.5"
              style={{ fontFamily: '"JetBrains Mono", monospace', color: '#b8451e' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="w-full py-3 text-sm tracking-[0.18em] uppercase transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
        style={{
          background: '#1a1612',
          color: '#f3ebd9',
          border: 'none',
          fontFamily: '"JetBrains Mono", monospace',
          fontWeight: 700,
        }}
      >
        Start free trial →
      </button>
    </div>
  )
}
