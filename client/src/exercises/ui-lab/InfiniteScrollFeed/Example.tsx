import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

/**
 * Aesthetic: editorial / magazine — bold serif headlines on a dark surface,
 * mono category tags, alternating subtle stripe between articles, shimmer
 * loader at the bottom that triggers when scrolled into view.
 *
 * Functional bit: real IntersectionObserver-driven append, but the data
 * is a local seed cycled forever — this is muscle-memory practice for
 * the *pattern*, not real pagination.
 */

const SEED = [
  { cat: 'field notes', title: 'Why your CSS grid keeps collapsing at 1024px', who: 'M. Tilford', read: '4 min' },
  { cat: 'essay',       title: 'The case for sub-pixel typography on modern displays', who: 'A. Vance',  read: '11 min' },
  { cat: 'review',      title: 'Linear vs Height: a year with two opinionated PMs',     who: 'R. Silvers', read: '7 min' },
  { cat: 'log',         title: 'I rewrote my portfolio in WebGL and nobody noticed',    who: 'J. Park',    read: '6 min' },
  { cat: 'essay',       title: 'On naming things: a forty-year-old problem',            who: 'D. Whitman', read: '9 min' },
  { cat: 'field notes', title: 'The quiet renaissance of CRT-style displays',           who: 'S. Okafor',  read: '5 min' },
]

export default function Example() {
  const [items, setItems] = useState(() => SEED.map((s, i) => ({ ...s, id: i })))
  const sentinel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sentinel.current) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setItems((prev) => [
              ...prev,
              ...SEED.map((s, i) => ({ ...s, id: prev.length + i })),
            ])
          }, 650)
        }
      },
      { root: sentinel.current.parentElement, rootMargin: '40px' },
    )
    io.observe(sentinel.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className="w-full max-w-[420px] rounded-xl overflow-hidden"
      style={{
        background: '#0e0d10',
        border: '1px solid #1f1d22',
        fontFamily: '"Inter", system-ui, sans-serif',
        boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)',
      }}
    >
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderBottom: '1px solid #1f1d22', background: '#0a090c' }}
      >
        <span
          className="text-base font-bold"
          style={{
            fontFamily: '"Playfair Display", "Lora", Georgia, serif',
            color: '#f4f1e8',
            letterSpacing: '-0.02em',
          }}
        >
          The Drift
        </span>
        <span className="text-[10px] uppercase tracking-widest" style={{ color: '#6b6571', fontFamily: '"JetBrains Mono", monospace' }}>
          № 042
        </span>
      </div>

      <div
        className="overflow-y-auto"
        style={{ maxHeight: 360, scrollbarWidth: 'thin', scrollbarColor: '#2a262f transparent' }}
      >
        {items.map((it, i) => (
          <motion.article
            key={it.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: (i % SEED.length) * 0.03 }}
            className="px-5 py-3.5"
            style={{
              background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
              borderBottom: '1px solid #16151a',
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.18em] mb-1 font-bold"
              style={{ color: '#a78bfa', fontFamily: '"JetBrains Mono", monospace' }}
            >
              {it.cat}
            </p>
            <h3
              className="text-sm leading-snug m-0 mb-1.5"
              style={{
                fontFamily: '"Playfair Display", "Lora", Georgia, serif',
                color: '#f4f1e8',
                fontWeight: 700,
                letterSpacing: '-0.01em',
              }}
            >
              {it.title}
            </h3>
            <div className="flex items-center justify-between text-[11px]" style={{ color: '#6b6571' }}>
              <span>{it.who}</span>
              <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>{it.read} →</span>
            </div>
          </motion.article>
        ))}

        <div ref={sentinel} className="px-5 py-4 flex items-center gap-2 justify-center">
          <span
            className="inline-block rounded-full"
            style={{
              width: 6, height: 6, background: '#a78bfa',
              animation: 'pulseDot 1.2s ease-in-out infinite',
            }}
          />
          <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: '#6b6571', fontFamily: '"JetBrains Mono", monospace' }}>
            loading more
          </span>
          <style>{`
            @keyframes pulseDot {
              0%, 100% { opacity: 0.3; transform: scale(0.9); }
              50%      { opacity: 1;   transform: scale(1.1); }
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}
