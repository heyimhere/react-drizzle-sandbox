import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Aesthetic: pastel-faithful — soft cream container, the active tab is
 * a solid black pill that slides between positions using motion's
 * `layoutId` trick. No JS-driven position math required.
 */

const TABS = ['Dashboard', 'Speaking', 'Progress', 'Courses'] as const

export default function Example() {
  const [active, setActive] = useState<(typeof TABS)[number]>('Dashboard')

  return (
    <div
      className="w-full max-w-[420px] flex items-center justify-center p-8 rounded-3xl"
      style={{
        background: 'linear-gradient(135deg, #fce7f3 0%, #f5e8ff 50%, #ffe4e6 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      <div
        className="inline-flex items-center gap-1 p-1 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.9), 0 4px 14px -4px rgba(80, 30, 60, 0.12)',
        }}
      >
        {TABS.map((t) => {
          const isActive = active === t
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className="relative px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors"
              style={{
                color: isActive ? '#fafafa' : '#1f1014',
                zIndex: 1,
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="pill-tab-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: '#0a0a0a',
                    boxShadow: '0 6px 14px -4px rgba(0,0,0,0.35)',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
