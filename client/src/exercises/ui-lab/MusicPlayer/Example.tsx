import { useEffect, useRef, useState } from 'react'

const DURATION = 218

function fmt(n: number) {
  const m = Math.floor(n / 60)
  const s = Math.floor(n % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

const INK = '#0a0a0a'
const PAPER = '#f1ebe1'
const RED = '#d72638'
const BLUE = '#0b3f9a'

export default function Example() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(64)
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!playing) return
    let last = performance.now()
    const tick = (t: number) => {
      const dt = (t - last) / 1000
      last = t
      setProgress((p) => {
        const next = p + dt
        if (next >= DURATION) { setPlaying(false); return DURATION }
        return next
      })
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [playing])

  const pct = (progress / DURATION) * 100

  return (
    <div
      className="w-full max-w-[340px] p-5 flex flex-col gap-4"
      style={{ background: PAPER, border: `2.5px solid ${INK}`, boxShadow: `10px 10px 0 ${INK}` }}
    >
      <div className="flex items-baseline justify-between" style={{ borderBottom: `2px solid ${INK}`, paddingBottom: 6 }}>
        <span
          className="text-[11px] tracking-[0.32em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: INK }}
        >
          № 07 / A-side
        </span>
        <span
          className="text-[11px] tabular-nums"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: INK }}
        >
          33⅓
        </span>
      </div>

      <div
        className="relative aspect-square flex items-center justify-center overflow-hidden"
        style={{ background: RED, border: `2.5px solid ${INK}` }}
      >
        <div
          className="absolute"
          style={{
            width: '120%', height: '120%',
            background: `repeating-radial-gradient(circle at 50% 50%, ${INK} 0 2px, transparent 2px 14px)`,
            opacity: 0.15,
          }}
        />
        <h2
          className="relative text-center"
          style={{
            fontFamily: '"Anton", sans-serif',
            color: PAPER,
            fontSize: 54,
            lineHeight: 0.82,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          Midnight<br />Bloom
        </h2>
        <span
          className="absolute bottom-3 left-3 text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: PAPER }}
        >
          aurora vey
        </span>
        <span
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center text-xs font-bold"
          style={{ background: PAPER, color: INK, borderRadius: 9999, fontFamily: '"Anton", sans-serif' }}
        >
          ●
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="h-2 relative" style={{ background: PAPER, border: `1.5px solid ${INK}` }}>
          <div
            className="absolute top-0 bottom-0 left-0"
            style={{ width: `${pct}%`, background: INK }}
          />
        </div>
        <div className="flex justify-between text-[10px] tabular-nums" style={{ fontFamily: '"JetBrains Mono", monospace', color: INK }}>
          <span>{fmt(progress)}</span>
          <span>-{fmt(DURATION - progress)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <CtrlBtn label="◀◀" />
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="text-2xl font-black flex items-center justify-center"
          style={{
            width: 56, height: 56,
            background: BLUE,
            color: PAPER,
            border: `2.5px solid ${INK}`,
            fontFamily: '"Anton", sans-serif',
            boxShadow: `4px 4px 0 ${INK}`,
          }}
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <CtrlBtn label="▶▶" />
      </div>
    </div>
  )
}

function CtrlBtn({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="w-11 h-11 flex items-center justify-center"
      style={{
        background: PAPER,
        color: INK,
        border: `2.5px solid ${INK}`,
        fontFamily: '"Anton", sans-serif',
        fontSize: 12,
      }}
    >
      {label}
    </button>
  )
}
