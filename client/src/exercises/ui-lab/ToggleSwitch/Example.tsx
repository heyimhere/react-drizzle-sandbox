import { useState } from 'react'

const SURFACE = '#0a0c08'
const PANEL = '#101410'
const LINE = '#1d2a1d'
const TEXT = '#cfe7c4'
const MUTED = '#6a7e6a'
const LED = '#7cff7e'

export default function Example() {
  const [pumpA, setPumpA] = useState(true)
  const [pumpB, setPumpB] = useState(false)
  const [autoCycle, setAutoCycle] = useState(true)
  const [override, setOverride] = useState(false)

  return (
    <div
      className="w-full max-w-[340px] p-5 flex flex-col gap-1"
      style={{
        background: SURFACE,
        border: `1px solid ${LINE}`,
        fontFamily: '"JetBrains Mono", monospace',
        boxShadow: 'inset 0 0 0 4px #050706, inset 0 0 60px rgba(124, 255, 126, 0.04)',
      }}
    >
      <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: `1px dashed ${LINE}` }}>
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: LED }}>
          CTRL · v2.4
        </span>
        <span className="text-[10px] tracking-widest uppercase flex items-center gap-1.5" style={{ color: MUTED }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: LED, boxShadow: `0 0 6px ${LED}` }} />
          live
        </span>
      </div>

      <Row id="01" label="PUMP A"     value={pumpA}     onChange={setPumpA} />
      <Row id="02" label="PUMP B"     value={pumpB}     onChange={setPumpB} />
      <Row id="03" label="AUTO CYCLE" value={autoCycle} onChange={setAutoCycle} />
      <Row id="04" label="OVERRIDE"   value={override}  onChange={setOverride} danger />

      <p className="text-[9px] mt-3 tracking-widest" style={{ color: MUTED }}>
        ┌─ status ──────────────────────────┐
        <br />
        │ system nominal · {[pumpA, pumpB, autoCycle, override].filter(Boolean).length}/4 active{'   '}│
        <br />
        └───────────────────────────────────┘
      </p>
    </div>
  )
}

function Row({ id, label, value, onChange, danger }: { id: string; label: string; value: boolean; onChange: (v: boolean) => void; danger?: boolean }) {
  return (
    <label
      className="flex items-center justify-between gap-3 py-2"
      style={{ background: PANEL, borderBottom: `1px solid ${LINE}`, paddingLeft: 12, paddingRight: 10, cursor: 'pointer' }}
    >
      <div className="flex items-center gap-3">
        <span className="text-[10px]" style={{ color: MUTED }}>{id}</span>
        <span className="text-xs tracking-[0.18em]" style={{ color: TEXT }}>{label}</span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className="relative cursor-pointer outline-none focus-visible:ring-1"
        style={{
          width: 56, height: 22,
          background: value ? (danger ? '#3a0d10' : '#0e2a10') : '#1a1f1a',
          border: `1px solid ${value ? (danger ? '#ff4f5a' : LED) : LINE}`,
        }}
      >
        <span
          className="absolute top-[2px] flex items-center justify-center transition-transform duration-150"
          style={{
            left: 2,
            width: 16, height: 16,
            background: value ? (danger ? '#ff4f5a' : LED) : '#3a4a3a',
            transform: value ? 'translateX(32px)' : 'translateX(0)',
            boxShadow: value ? `0 0 8px ${danger ? '#ff4f5a' : LED}` : 'none',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 9,
            color: '#050706',
            fontWeight: 700,
          }}
        >
          {value ? '1' : '0'}
        </span>
      </button>
    </label>
  )
}
