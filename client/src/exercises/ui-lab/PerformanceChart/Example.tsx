import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Aesthetic: pastel-faithful — soft cream surface, three smooth wave lines
 * (lavender / rose / pink) with gradient area fills, a "+24%" callout
 * floating over a peak. Switching tabs (Week / Month / Year) morphs the
 * SVG `d` attribute via motion.
 *
 * Hand-rolled: Catmull-Rom-to-cubic-bezier smoothing. No chart library.
 */

const SERIES = ['Theory', 'Practice', 'Lexicon'] as const
type SeriesKey = (typeof SERIES)[number]

const COLORS: Record<SeriesKey, { stroke: string; gradFrom: string; gradTo: string }> = {
  Theory:   { stroke: '#a78bfa', gradFrom: 'rgba(167, 139, 250, 0.4)',  gradTo: 'rgba(167, 139, 250, 0)' },
  Practice: { stroke: '#fb7185', gradFrom: 'rgba(251, 113, 133, 0.45)', gradTo: 'rgba(251, 113, 133, 0)' },
  Lexicon:  { stroke: '#f9a8d4', gradFrom: 'rgba(249, 168, 212, 0.5)',  gradTo: 'rgba(249, 168, 212, 0)' },
}

type Period = 'Week' | 'Month' | 'Year'

const DATA: Record<Period, Record<SeriesKey, number[]>> = {
  Week:  {
    Theory:   [40, 55, 48, 65, 52, 70, 68, 75],
    Practice: [30, 35, 60, 50, 75, 40, 55, 62],
    Lexicon:  [20, 28, 35, 30, 45, 55, 50, 65],
  },
  Month: {
    Theory:   [55, 48, 62, 50, 72, 60, 70, 82],
    Practice: [35, 50, 75, 60, 85, 45, 65, 78],
    Lexicon:  [22, 30, 42, 38, 55, 50, 65, 80],
  },
  Year:  {
    Theory:   [40, 50, 60, 55, 70, 75, 78, 90],
    Practice: [50, 55, 70, 60, 65, 75, 80, 85],
    Lexicon:  [25, 35, 40, 50, 55, 65, 75, 88],
  },
}

const X_LABELS: Record<Period, string[]> = {
  Week:  ['M', 'T', 'W', 'T', 'F', 'S', 'S', '·'],
  Month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  Year:  ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
}

// Chart geometry
const W = 380
const H = 180
const PAD = { top: 30, right: 18, bottom: 28, left: 18 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom

function toPoints(values: number[]): [number, number][] {
  return values.map((v, i) => [
    PAD.left + (i * plotW) / (values.length - 1),
    PAD.top + plotH - (v / 100) * plotH,
  ])
}

function smoothPath(pts: [number, number][]): string {
  if (pts.length === 0) return ''
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 2] ?? pts[i - 1]
    const p1 = pts[i - 1]
    const p2 = pts[i]
    const p3 = pts[i + 1] ?? pts[i]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`
  }
  return d
}

function areaPath(line: string, pts: [number, number][]): string {
  if (pts.length === 0) return ''
  const baseY = PAD.top + plotH
  const lastX = pts[pts.length - 1][0]
  const firstX = pts[0][0]
  return `${line} L ${lastX.toFixed(2)} ${baseY} L ${firstX.toFixed(2)} ${baseY} Z`
}

export default function Example() {
  const [period, setPeriod] = useState<Period>('Month')

  // Peak callout sits over Practice's max in the current dataset
  const practicePts = toPoints(DATA[period].Practice)
  const peak = practicePts.reduce(
    (best, p) => (p[1] < best[1] ? p : best),
    practicePts[0],
  )

  return (
    <div
      className="w-full max-w-[440px] p-5 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #fff1f2 0%, #fce7f3 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      <div
        className="p-4 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.92)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.9), 0 12px 28px -12px rgba(80, 30, 60, 0.18)',
        }}
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3
              className="m-0 text-base"
              style={{
                fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
                color: '#1f1014',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              Performance Chart
            </h3>
            <p className="text-[10.5px] m-0 mt-0.5" style={{ color: '#7a6c75' }}>
              Track results and watch your progress rise.
            </p>
          </div>
          <PeriodTabs value={period} onChange={setPeriod} />
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 mt-2 mb-1">
          {SERIES.map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <span
                className="rounded-full"
                style={{ width: 7, height: 7, background: COLORS[s].stroke }}
              />
              <span className="text-[10.5px]" style={{ color: '#5f4f57' }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}>
            <defs>
              {SERIES.map((s) => (
                <linearGradient key={s} id={`grad-${s}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS[s].gradFrom} />
                  <stop offset="100%" stopColor={COLORS[s].gradTo} />
                </linearGradient>
              ))}
            </defs>

            {SERIES.map((s) => {
              const pts = toPoints(DATA[period][s])
              const line = smoothPath(pts)
              const area = areaPath(line, pts)
              return (
                <g key={s}>
                  <motion.path
                    animate={{ d: area }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    fill={`url(#grad-${s})`}
                    initial={false}
                  />
                  <motion.path
                    animate={{ d: line }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    fill="none"
                    stroke={COLORS[s].stroke}
                    strokeWidth={1.8}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={false}
                  />
                </g>
              )
            })}
          </svg>

          {/* +24% callout — positioned over the Practice peak */}
          <motion.div
            key={period}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute px-2.5 py-1.5 rounded-xl pointer-events-none"
            style={{
              left: `${(peak[0] / W) * 100}%`,
              top: `${(peak[1] / H) * 100}%`,
              transform: 'translate(-50%, -120%)',
              background: 'linear-gradient(135deg, #ffe4e6, #fce7f3)',
              boxShadow: '0 4px 14px -4px rgba(80, 30, 60, 0.25)',
            }}
          >
            <div
              className="text-base leading-none font-bold"
              style={{
                fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
                color: '#1f1014',
                fontWeight: 400,
              }}
            >
              +24%
            </div>
            <div className="text-[8.5px] mt-0.5" style={{ color: '#5f4f57' }}>
              Recent: 23 lessons
            </div>
          </motion.div>

          {/* Month axis */}
          <div className="flex justify-between px-1 mt-1">
            {X_LABELS[period].map((l) => (
              <span key={l} className="text-[9.5px]" style={{ color: '#9a8c95' }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PeriodTabs({ value, onChange }: { value: Period; onChange: (p: Period) => void }) {
  return (
    <div
      className="inline-flex items-center p-0.5 rounded-full"
      style={{
        background: 'rgba(0,0,0,0.04)',
      }}
    >
      {(['Week', 'Month', 'Year'] as const).map((p) => {
        const active = value === p
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className="relative px-2.5 py-1 rounded-full text-[10.5px] font-semibold cursor-pointer"
            style={{ color: active ? '#fafafa' : '#3a2a30', zIndex: 1 }}
          >
            {active && (
              <motion.span
                layoutId="chart-period-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: '#0a0a0a', zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{p}</span>
          </button>
        )
      })}
    </div>
  )
}
