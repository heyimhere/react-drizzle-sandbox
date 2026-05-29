import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Aesthetic: pastel-faithful — compressed reproduction of the education
 * dashboard. Top pill nav, slim icon rail on left, greeting headline,
 * mini wavy chart, friends row + course card below. Self-contained:
 * doesn't import from the standalone clones in the UI Lab.
 */

const NAV = ['Dashboard', 'Speaking', 'Progress', 'Courses'] as const

export default function Example() {
  const [tab, setTab] = useState<(typeof NAV)[number]>('Dashboard')

  return (
    <div
      className="w-full max-w-[480px] rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffe4e6 0%, #fce7f3 50%, #ede9fe 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        padding: 10,
      }}
    >
      <div
        className="rounded-2xl p-3"
        style={{
          background: 'rgba(255,255,255,0.55)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.85), 0 16px 36px -16px rgba(80, 30, 60, 0.18)',
        }}
      >
        <TopBar tab={tab} setTab={setTab} />

        <div className="flex gap-2.5 mt-3">
          <IconRail />

          <div className="flex-1 min-w-0 flex flex-col gap-2.5">
            <h2
              className="m-0"
              style={{
                fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
                color: '#1f1014',
                fontWeight: 400,
                fontSize: 22,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Good morning, Ethan
            </h2>

            <MiniChart />

            <div className="flex gap-2.5">
              <MiniFriends />
              <MiniCourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Top bar ─────────────────────────────────────────────────────────────

function TopBar({
  tab, setTab,
}: { tab: (typeof NAV)[number]; setTab: (n: (typeof NAV)[number]) => void }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div
        className="flex items-center justify-center rounded-lg shrink-0"
        style={{ width: 28, height: 28, background: '#0a0a0a' }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6M12 17v6M4.2 4.2l4.3 4.3M15.5 15.5l4.3 4.3M1 12h6M17 12h6M4.2 19.8l4.3-4.3M15.5 8.5l4.3-4.3" />
        </svg>
      </div>

      <div
        className="inline-flex items-center gap-0.5 p-0.5 rounded-full"
        style={{ background: 'rgba(255,255,255,0.85)' }}
      >
        {NAV.map((n) => {
          const active = tab === n
          return (
            <button
              key={n}
              onClick={() => setTab(n)}
              className="relative px-2.5 py-1 rounded-full text-[10.5px] font-semibold cursor-pointer"
              style={{ color: active ? '#fafafa' : '#1f1014', zIndex: 1 }}
            >
              {active && (
                <motion.span
                  layoutId="dash-topnav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: '#0a0a0a', zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{n}</span>
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <ChromeBtn><SearchIcon /></ChromeBtn>
        <ChromeBtn>
          <BellIcon />
          <span
            className="absolute"
            style={{
              top: 4, right: 4, width: 6, height: 6,
              background: '#ef4444', borderRadius: '50%',
              border: '1.5px solid #fafafa',
            }}
          />
        </ChromeBtn>
        <img
          src="https://i.pravatar.cc/80?img=68"
          alt="Ethan"
          className="rounded-full"
          style={{
            width: 28, height: 28, objectFit: 'cover',
            border: '2px solid #fafafa',
            background: '#e5e7eb',
          }}
        />
      </div>
    </div>
  )
}

function ChromeBtn({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="relative flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: 28, height: 28,
        background: 'rgba(255,255,255,0.85)',
      }}
    >
      {children}
    </button>
  )
}

// ─── Icon rail ────────────────────────────────────────────────────────────

const RAIL = [
  { key: 'home',     icon: <span style={{ fontSize: 11 }}>⌂</span>, active: true },
  { key: 'chart',    icon: <span style={{ fontSize: 11 }}>◷</span> },
  { key: 'calendar', icon: <span style={{ fontSize: 11 }}>▦</span> },
  { key: 'folder',   icon: <span style={{ fontSize: 11 }}>▤</span> },
  { key: 'message',  icon: <span style={{ fontSize: 11 }}>✉</span> },
] as const

function IconRail() {
  return (
    <div
      className="flex flex-col items-center justify-between py-2 rounded-2xl shrink-0"
      style={{
        width: 32,
        background: 'rgba(255,255,255,0.7)',
      }}
    >
      <div className="flex flex-col gap-1">
        {RAIL.map((r) => (
          <div
            key={r.key}
            className="flex items-center justify-center rounded-full"
            style={{
              width: 24, height: 24,
              background: 'active' in r && r.active ? '#0a0a0a' : 'transparent',
              color: 'active' in r && r.active ? '#fafafa' : '#3a2a30',
            }}
          >
            {r.icon}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 24, height: 24, background: '#0a0a0a', color: '#fafafa' }}
        >
          <span style={{ fontSize: 11 }}>☀</span>
        </div>
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 24, height: 24, color: '#3a2a30' }}
        >
          <span style={{ fontSize: 11 }}>☾</span>
        </div>
      </div>
    </div>
  )
}

// ─── Mini chart ──────────────────────────────────────────────────────────

function MiniChart() {
  const W = 320, H = 90
  const PAD = { top: 8, right: 4, bottom: 4, left: 4 }
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom

  const series: { color: string; grad: string; values: number[] }[] = [
    { color: '#a78bfa', grad: 'rgba(167,139,250,0.4)', values: [55, 48, 62, 50, 72, 60, 70, 82] },
    { color: '#fb7185', grad: 'rgba(251,113,133,0.4)', values: [35, 50, 75, 60, 85, 45, 65, 78] },
    { color: '#f9a8d4', grad: 'rgba(249,168,212,0.4)', values: [22, 30, 42, 38, 55, 50, 65, 80] },
  ]

  function pts(vs: number[]): [number, number][] {
    return vs.map((v, i) => [
      PAD.left + (i * plotW) / (vs.length - 1),
      PAD.top + plotH - (v / 100) * plotH,
    ])
  }
  function smooth(ps: [number, number][]) {
    let d = `M ${ps[0][0]} ${ps[0][1]}`
    for (let i = 1; i < ps.length; i++) {
      const p0 = ps[i - 2] ?? ps[i - 1]
      const p1 = ps[i - 1]
      const p2 = ps[i]
      const p3 = ps[i + 1] ?? ps[i]
      const cp1x = p1[0] + (p2[0] - p0[0]) / 6
      const cp1y = p1[1] + (p2[1] - p0[1]) / 6
      const cp2x = p2[0] - (p3[0] - p1[0]) / 6
      const cp2y = p2[1] - (p3[1] - p1[1]) / 6
      d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`
    }
    return d
  }

  return (
    <div
      className="p-2.5 rounded-2xl"
      style={{ background: 'rgba(255,255,255,0.85)' }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10.5px] font-semibold" style={{ color: '#3a2a30' }}>
          Performance
        </span>
        <div className="flex gap-1">
          {(['W', 'M', 'Y'] as const).map((p, i) => (
            <span
              key={p}
              className="px-1.5 py-0.5 rounded-full text-[8.5px] font-bold"
              style={{
                background: i === 1 ? '#0a0a0a' : 'transparent',
                color: i === 1 ? '#fafafa' : '#3a2a30',
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
        <defs>
          {series.map((s, i) => (
            <linearGradient key={i} id={`mini-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.grad} />
              <stop offset="100%" stopColor={s.grad.replace(/[\d.]+\)$/, '0)')} />
            </linearGradient>
          ))}
        </defs>
        {series.map((s, i) => {
          const p = pts(s.values)
          const line = smooth(p)
          const baseY = PAD.top + plotH
          const area = `${line} L ${p[p.length - 1][0]} ${baseY} L ${p[0][0]} ${baseY} Z`
          return (
            <g key={i}>
              <path d={area} fill={`url(#mini-grad-${i})`} />
              <path d={line} fill="none" stroke={s.color} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Mini friends ─────────────────────────────────────────────────────────

const MINI_FRIENDS = [
  { name: 'Sophia',    avatar: 47, score: 57 },
  { name: 'Jack',      avatar: 12, score: 42 },
  { name: 'Charlotte', avatar: 44, score: 84 },
]

function MiniFriends() {
  return (
    <div
      className="flex-1 min-w-0 p-2.5 rounded-2xl"
      style={{ background: 'rgba(255,255,255,0.85)' }}
    >
      <div className="text-[10.5px] font-semibold mb-1.5" style={{ color: '#3a2a30' }}>
        Friends Score
      </div>
      <div className="flex flex-col gap-1.5">
        {MINI_FRIENDS.map((f, i) => (
          <div key={f.name} className="flex items-center gap-1.5">
            <img
              src={`https://i.pravatar.cc/40?img=${f.avatar}`}
              alt={f.name}
              className="rounded-full shrink-0"
              style={{ width: 18, height: 18, objectFit: 'cover', background: '#e5e7eb' }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-[9.5px] truncate" style={{ color: '#1f1014' }}>{f.name}</div>
              <div className="relative h-1 rounded-full overflow-hidden mt-0.5" style={{ background: 'rgba(0,0,0,0.08)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${f.score}%` }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
                  className="absolute inset-y-0 left-0"
                  style={{ background: '#0a0a0a' }}
                />
              </div>
            </div>
            <span
              className="text-[11px] font-bold tabular-nums"
              style={{
                color: '#1f1014',
                fontFamily: '"DM Serif Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              {f.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Mini course card ─────────────────────────────────────────────────────

function MiniCourseCard() {
  return (
    <div
      className="shrink-0 p-2.5 rounded-2xl flex flex-col justify-between"
      style={{
        width: 130,
        background: 'linear-gradient(135deg, #fce7f3 0%, #ede9fe 100%)',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6)',
      }}
    >
      <div>
        <h5
          className="m-0 leading-tight"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            color: '#1f1014',
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: '-0.01em',
          }}
        >
          Expand Your Vocabulary
        </h5>
        <p className="text-[9px] m-0 mt-0.5" style={{ color: '#5f4f57' }}>
          Learn new words
        </p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span
          className="text-[8.5px] font-semibold px-1.5 py-0.5 rounded-full"
          style={{ background: 'rgba(255,255,255,0.7)', color: '#3a2a30' }}
        >
          Nov 22
        </span>
        <span
          className="text-[9px] font-semibold px-2 py-1 rounded-full"
          style={{ background: '#0a0a0a', color: '#fafafa' }}
        >
          Join →
        </span>
      </div>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f1014" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
    </svg>
  )
}
function BellIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f1014" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  )
}
