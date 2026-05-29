import { motion } from 'motion/react'
import { useState } from 'react'

/**
 * Aesthetic: deep navy glass card, soft teal accent, clean typography.
 * Mirrors the "Stay in the loop" card screenshot.
 */
export default function Example() {
  const [email, setEmail] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-[360px] p-6 rounded-2xl"
      style={{
        background: 'linear-gradient(165deg, rgba(20, 38, 56, 0.7), rgba(11, 22, 35, 0.85))',
        border: '1px solid rgba(56, 178, 172, 0.18)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 30px 70px -30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      <div className="flex items-start gap-3.5 mb-4">
        <div
          className="flex items-center justify-center rounded-xl shrink-0"
          style={{
            width: 44, height: 44,
            background: 'linear-gradient(135deg, #14b8a6, #0d8a82)',
            boxShadow: '0 6px 18px -6px rgba(20, 184, 166, 0.6)',
          }}
        >
          <MailIcon />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold m-0" style={{ color: '#e6f1f4' }}>
            Stay in the loop
          </h3>
          <p className="text-xs mt-0.5" style={{ color: '#7d9aaf' }}>
            Get updates on new features &amp; events
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-stretch">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-3.5 rounded-lg text-sm outline-none transition-colors"
          style={{
            height: 44,
            background: 'rgba(13, 28, 42, 0.7)',
            border: '1px solid rgba(56, 178, 172, 0.2)',
            color: '#e6f1f4',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(56, 178, 172, 0.5)')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(56, 178, 172, 0.2)')}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          className="rounded-lg cursor-pointer flex items-center justify-center shrink-0"
          style={{
            width: 44,
            height: 44,
            background: 'linear-gradient(135deg, #14b8a6, #0d8a82)',
            color: '#062926',
            boxShadow: '0 6px 14px -4px rgba(20, 184, 166, 0.5)',
          }}
        >
          <SendIcon />
        </motion.button>
      </div>

      <div className="flex items-center gap-1.5 mt-3" style={{ color: '#5e7d92' }}>
        <ClockIcon />
        <span className="text-xs">Newsletter coming soon</span>
      </div>
    </motion.div>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#062926" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}
