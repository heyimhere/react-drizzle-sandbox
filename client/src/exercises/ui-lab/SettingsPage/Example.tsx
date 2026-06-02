import { useState } from 'react'

const sections = ['Profile', 'Account', 'Notifications', 'Security', 'Billing']

const BG = '#0a0907'
const SURFACE = '#13110d'
const SIDE = '#080705'
const LINE = '#26221a'
const GOLD = '#d4a843'
const TEXT = '#ddd0b3'
const MUTED = '#807660'

export default function Example() {
  const [active, setActive] = useState('Notifications')
  const [emailDigest, setEmailDigest] = useState(true)
  const [push, setPush] = useState(false)
  const [marketing, setMarketing] = useState(false)

  return (
    <div
      className="w-full max-w-[440px] grid"
      style={{
        background: BG,
        border: `1px solid ${LINE}`,
        gridTemplateColumns: '130px 1fr',
        minHeight: 380,
      }}
    >
      <nav className="flex flex-col gap-px py-5 px-3" style={{ background: SIDE, borderRight: `1px solid ${LINE}` }}>
        <p
          className="text-[9px] tracking-[0.32em] uppercase mb-4 px-1"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: MUTED }}
        >
          — Index —
        </p>
        {sections.map((s, i) => {
          const isActive = s === active
          return (
            <button
              key={s}
              type="button"
              onClick={() => setActive(s)}
              className="text-left px-2 py-1.5 flex items-baseline gap-2 transition-colors"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 16,
                fontStyle: isActive ? 'italic' : 'normal',
                background: 'transparent',
                color: isActive ? GOLD : TEXT,
                cursor: 'pointer',
              }}
            >
              <span className="text-[9px] tabular-nums" style={{ color: MUTED, fontFamily: '"JetBrains Mono", monospace' }}>
                0{i + 1}.
              </span>
              {s}
            </button>
          )
        })}
      </nav>

      <div className="p-6 flex flex-col gap-5" style={{ background: SURFACE }}>
        <div>
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-1"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: GOLD }}
          >
            Section · 03
          </p>
          <h2
            className="m-0 text-3xl"
            style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT, fontWeight: 500, lineHeight: 1 }}
          >
            {active}
          </h2>
          <p
            className="text-sm mt-2 italic"
            style={{ fontFamily: '"Fraunces", serif', color: MUTED }}
          >
            How and when we'll reach you.
          </p>
        </div>

        <Row title="Email digest"       helper="Weekly recap, Friday afternoon." value={emailDigest} onChange={setEmailDigest} />
        <Row title="Push notifications" helper="Real-time, this device only."     value={push}        onChange={setPush} />
        <Row title="Marketing"          helper="Occasional product letters."      value={marketing}   onChange={setMarketing} />
      </div>
    </div>
  )
}

function Row({ title, helper, value, onChange }: { title: string; helper: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3" style={{ borderTop: `1px solid ${LINE}` }}>
      <div className="min-w-0">
        <div
          className="text-base"
          style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT, fontWeight: 500 }}
        >
          {title}
        </div>
        <div
          className="text-xs italic mt-0.5"
          style={{ fontFamily: '"Fraunces", serif', color: MUTED }}
        >
          {helper}
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className="relative shrink-0 transition-colors"
        style={{
          width: 44, height: 20,
          background: value ? GOLD : '#1a160e',
          border: `1px solid ${value ? GOLD : LINE}`,
        }}
      >
        <span
          className="absolute top-[1px] transition-transform duration-150"
          style={{
            left: 1,
            width: 16, height: 16,
            background: value ? '#0a0907' : '#3a3328',
            transform: value ? 'translateX(24px)' : 'translateX(0)',
          }}
        />
      </button>
    </div>
  )
}
