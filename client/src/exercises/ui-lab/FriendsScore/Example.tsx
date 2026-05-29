import { motion } from 'motion/react'
import { useState } from 'react'

/**
 * Aesthetic: pastel-faithful — white card on pastel gradient, real
 * pravatar.cc avatars, thick black progress bars that animate from 0
 * to their value on mount, bold percentages alongside.
 */

type Friend = { name: string; avatar: number; score: number }

const FRIENDS: Friend[] = [
  { name: 'Sophia Bennett',     avatar: 47, score: 57 },
  { name: 'Jack Brown',         avatar: 12, score: 42 },
  { name: 'Charlotte Anderson', avatar: 44, score: 84 },
]

const PERIODS = ['Last Week', 'Last Month', 'All Time'] as const

export default function Example() {
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>('Last Week')
  const [open, setOpen] = useState(false)

  return (
    <div
      className="w-full max-w-[400px] p-7 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #fce7f3 0%, #f5e8ff 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      <div
        className="p-5 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.85)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.9), 0 10px 24px -10px rgba(80, 30, 60, 0.18)',
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="m-0 text-lg"
              style={{
                fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
                color: '#1f1014',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              Friends Score
            </h3>
            <p className="text-[11px] m-0 mt-0.5" style={{ color: '#7a6c75' }}>
              See how you rank among friends
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold cursor-pointer"
              style={{
                background: 'rgba(255,255,255,0.9)',
                color: '#1f1014',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {period}
              <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: 'inline-block' }}>
                <ChevronIcon />
              </motion.span>
            </button>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-1 rounded-xl overflow-hidden z-10"
                style={{
                  background: '#fafafa',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 8px 20px -8px rgba(0,0,0,0.2)',
                  minWidth: 110,
                }}
              >
                {PERIODS.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setPeriod(p); setOpen(false) }}
                    className="block w-full text-left px-3 py-1.5 text-[11px] cursor-pointer"
                    style={{
                      background: p === period ? '#f5f5f5' : 'transparent',
                      color: '#1f1014',
                      fontWeight: p === period ? 600 : 400,
                    }}
                  >
                    {p}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {FRIENDS.map((f, i) => (
            <Row key={f.name} friend={f} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Row({ friend, index }: { friend: Friend; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.08 }}
      className="flex items-center gap-3"
    >
      <img
        src={`https://i.pravatar.cc/80?img=${friend.avatar}`}
        alt={friend.name}
        className="rounded-full shrink-0"
        style={{ width: 38, height: 38, objectFit: 'cover', background: '#e5e7eb' }}
      />
      <div className="flex-1 min-w-0">
        <p
          className="m-0 text-[12.5px] font-semibold mb-1.5 truncate"
          style={{ color: '#1f1014' }}
        >
          {friend.name}
        </p>
        <div
          className="relative h-1.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.08)' }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${friend.score}%` }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.9, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: '#0a0a0a' }}
          />
        </div>
      </div>
      <span
        className="text-xl font-bold shrink-0 tabular-nums"
        style={{
          color: '#1f1014',
          fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
          fontWeight: 400,
          minWidth: 48,
          textAlign: 'right',
          letterSpacing: '-0.02em',
        }}
      >
        {friend.score}%
      </span>
    </motion.div>
  )
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
