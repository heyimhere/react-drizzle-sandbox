import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/**
 * Aesthetic: warm graphite slab with three vivid buttons each demonstrating
 * a distinct interaction — magnetic pull, shine sweep, and morph-on-click.
 */
export default function Example() {
  return (
    <div
      className="w-full max-w-[340px] flex flex-col gap-8 p-8 rounded-3xl"
      style={{
        background: 'radial-gradient(ellipse at top, #2a2520 0%, #15120f 70%)',
        border: '1px solid #2e2a25',
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
      }}
    >
      <Row label="magnetic pull">
        <MagneticButton />
      </Row>
      <Row label="shine on hover">
        <ShineButton />
      </Row>
      <Row label="morph on click">
        <MorphButton />
      </Row>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <span
        className="text-[10px] tracking-[0.22em] uppercase"
        style={{ color: '#7a6d5f', fontFamily: '"JetBrains Mono", monospace' }}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }
  function onLeave() { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="px-7 py-3 rounded-full font-bold text-sm cursor-pointer"
      // eslint-disable-next-line react/forbid-dom-props
      whileTap={{ scale: 0.95 }}
    >
      <span
        style={{
          display: 'inline-block',
          background: 'linear-gradient(180deg, #ffb454, #ff7a18)',
          color: '#1a1108',
          padding: '0.7rem 1.6rem',
          borderRadius: '999px',
          boxShadow: '0 12px 32px -8px rgba(255, 138, 24, 0.55)',
        }}
      >
        Catch me →
      </span>
    </motion.button>
  )
}

function ShineButton() {
  return (
    <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative overflow-hidden px-7 py-3 rounded-lg font-semibold text-sm cursor-pointer"
      style={{
        background: '#1a1814',
        color: '#fbd38d',
        border: '1px solid #3d3429',
      }}
    >
      <span className="relative z-10">Get early access</span>
      <motion.span
        variants={{ rest: { x: '-110%' }, hover: { x: '110%' } }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(110deg, transparent 35%, rgba(251, 211, 141, 0.35) 50%, transparent 65%)',
        }}
      />
    </motion.button>
  )
}

function MorphButton() {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  function go() {
    if (state !== 'idle') return
    setState('loading')
    setTimeout(() => setState('done'), 1400)
    setTimeout(() => setState('idle'), 2800)
  }

  const label =
    state === 'idle' ? 'Submit' : state === 'loading' ? '' : 'Sent!'
  const bg =
    state === 'done' ? '#22c55e' : '#e85d3a'

  return (
    <motion.button
      onClick={go}
      animate={{
        width: state === 'loading' ? 48 : 140,
        borderRadius: state === 'loading' ? 999 : 8,
        backgroundColor: bg,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="h-11 flex items-center justify-center text-sm font-semibold cursor-pointer overflow-hidden"
      style={{ color: '#1a1108' }}
    >
      {state === 'loading' ? (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
          style={{
            width: 18, height: 18, borderRadius: '50%',
            border: '2px solid rgba(26,17,8,0.3)', borderTopColor: '#1a1108',
          }}
        />
      ) : (
        label
      )}
    </motion.button>
  )
}
