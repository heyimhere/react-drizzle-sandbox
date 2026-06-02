type Stat = { label: string; value: string; delta: number; spark: number[] }

const stats: Stat[] = [
  { label: 'ACTIVE USERS', value: '12,408', delta:  8.4, spark: [4, 6, 5, 8, 7, 9, 11] },
  { label: 'REVENUE USD',  value: '48.2K',  delta:  4.1, spark: [3, 5, 4, 6, 7, 6, 8] },
  { label: 'CONVERSION',   value: '3.81%',  delta: -1.6, spark: [9, 7, 8, 5, 6, 4, 3] },
  { label: 'AVG SESSION',  value: '4:12',   delta:  2.7, spark: [2, 3, 4, 4, 5, 5, 6] },
]

const BG = '#0a0c10'
const PANEL = '#0e1116'
const LINE = '#1f2733'
const AMBER = '#ffb347'
const GREEN = '#6ee07a'
const RED = '#ff6b76'
const MUTED = '#5a6675'

export default function Example() {
  return (
    <div
      className="w-full max-w-[380px] p-4"
      style={{ background: BG, border: `1px solid ${LINE}`, fontFamily: '"JetBrains Mono", monospace' }}
    >
      <div className="flex items-center justify-between text-[10px] tracking-widest uppercase mb-3" style={{ color: AMBER }}>
        <span>TERM · ACME-OPS · 06:42:11</span>
        <span style={{ color: MUTED }}>F1=help</span>
      </div>
      <div className="grid grid-cols-2 gap-px" style={{ background: LINE, border: `1px solid ${LINE}` }}>
        {stats.map((s) => (
          <Tile key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}

function Tile({ label, value, delta, spark }: Stat) {
  const positive = delta >= 0
  const color = positive ? GREEN : RED
  return (
    <div className="p-3 flex flex-col gap-2" style={{ background: PANEL }}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] tracking-[0.2em]" style={{ color: MUTED }}>{label}</span>
        <span className="text-[9px] tabular-nums" style={{ color }}>
          {positive ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}
        </span>
      </div>
      <div className="text-2xl tabular-nums" style={{ color: AMBER, letterSpacing: -0.5 }}>
        {value}
      </div>
      <Sparkline points={spark} color={color} />
    </div>
  )
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 120
  const h = 22
  const step = w / (points.length - 1)
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - ((p - min) / range) * h}`).join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-5">
      <defs>
        <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M 6 0 L 0 0 0 6" fill="none" stroke="#1f2733" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width={w} height={h} fill="url(#grid)" opacity="0.7" />
      <path d={path} fill="none" stroke={color} strokeWidth="1.25" strokeLinecap="square" strokeLinejoin="miter" />
      {points.map((p, i) => (
        <rect
          key={i}
          x={i * step - 1}
          y={h - ((p - min) / range) * h - 1}
          width={2}
          height={2}
          fill={color}
        />
      ))}
    </svg>
  )
}
