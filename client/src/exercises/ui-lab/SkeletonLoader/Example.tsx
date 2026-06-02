export default function Example() {
  return (
    <div
      className="w-full max-w-[360px] p-6 flex flex-col gap-4"
      style={{
        background: '#ece6d6',
        border: '1.5px solid #1a1814',
        boxShadow: '8px 8px 0 #1a1814',
      }}
    >
      <div className="flex items-baseline justify-between" style={{ borderBottom: '2px solid #1a1814', paddingBottom: 8 }}>
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6e655c' }}
        >
          The Daily Dispatch
        </p>
        <p
          className="text-[10px] tracking-widest uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6e655c' }}
        >
          loading…
        </p>
      </div>

      <h2
        className="m-0"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: 22,
          lineHeight: 1.05,
          color: '#1a1814',
        }}
      >
        While we set the press,<br />
        please <em>hold</em>.
      </h2>

      {[0, 1, 2, 3].map((i) => (
        <article key={i} className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Shimmer style={{ width: 48, height: 48 }} />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <Shimmer style={{ height: 12, width: `${85 - i * 10}%` }} />
            <Shimmer style={{ height: 8, width: '100%' }} />
            <Shimmer style={{ height: 8, width: `${55 + i * 8}%` }} />
          </div>
        </article>
      ))}

      <style>{`
        @keyframes lab-newsprint-shimmer {
          0%   { background-position: -240px 0; }
          100% { background-position: 240px 0; }
        }
      `}</style>
    </div>
  )
}

function Shimmer({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        background: 'repeating-linear-gradient(90deg, #d4cbb0 0 6px, #c9bf9c 6px 12px), linear-gradient(90deg, transparent, rgba(26, 24, 20, 0.15), transparent)',
        backgroundSize: '12px 100%, 240px 100%',
        backgroundRepeat: 'repeat, no-repeat',
        animation: 'lab-newsprint-shimmer 1.6s linear infinite',
        border: '1px solid #1a1814',
      }}
    />
  )
}
