import { motion } from 'motion/react'

/**
 * Aesthetic: deep navy gradient, cyan accents, soft glass cards with
 * stagger-in motion. Mirrors the "Check your email" screen.
 */
export default function Example() {
  return (
    <div
      className="w-full max-w-[400px] p-6 rounded-2xl"
      style={{
        background: 'linear-gradient(160deg, #0c1b2e, #07111c)',
        fontFamily: '"Inter", system-ui, sans-serif',
        border: '1px solid rgba(56, 189, 248, 0.08)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-base font-bold m-0 mb-5"
        style={{ color: '#22d3ee', textShadow: '0 0 24px rgba(34, 211, 238, 0.4)' }}
      >
        Ruunt Hora
      </motion.h2>

      <div
        className="p-5 rounded-xl"
        style={{
          background: 'linear-gradient(165deg, rgba(20, 38, 56, 0.55), rgba(11, 22, 35, 0.55))',
          border: '1px solid rgba(56, 189, 248, 0.12)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, type: 'spring', stiffness: 220, damping: 18 }}
          className="mx-auto flex items-center justify-center rounded-2xl mb-4"
          style={{
            width: 56, height: 56,
            background: 'linear-gradient(140deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.05))',
            border: '1px solid rgba(34, 211, 238, 0.5)',
          }}
        >
          <MailIcon />
        </motion.div>

        <h3 className="text-center text-xl font-bold m-0 mb-1.5" style={{ color: '#e6f1f4' }}>
          Check your email
        </h3>
        <p className="text-center text-xs mb-5" style={{ color: '#7a99b1' }}>
          A magic link has been sent to your inbox
        </p>

        <div className="flex flex-col gap-2.5">
          <Feature
            i={0}
            icon={<SparklesIcon color="#22d3ee" />}
            title="One-click sign in"
            body="Click the link in your email to instantly access your account"
            tint="#22d3ee"
          />
          <Feature
            i={1}
            icon={<ClockIcon color="#fbbf24" />}
            title="Link expires in 15 minutes"
            body="For security, the link will expire shortly after being sent"
            tint="#fbbf24"
          />
          <Feature
            i={2}
            icon={<ShieldIcon color="#34d399" />}
            title="Secure &amp; passwordless"
            body="No password needed — magic links keep your account safe"
            tint="#34d399"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 mt-3 px-3 py-2 rounded-md text-[11px]"
          style={{
            background: 'rgba(251, 191, 36, 0.06)',
            border: '1px solid rgba(251, 191, 36, 0.25)',
            color: '#fcd34d',
          }}
        >
          <span>⚠</span> Don't see it? Check your spam folder
        </motion.div>
      </div>

      <p className="text-center mt-4 text-xs" style={{ color: '#7a99b1' }}>
        ← Return to sign in
      </p>
      <p className="text-center mt-1 text-[11px]" style={{ color: '#516a7d' }}>
        Need help? <span style={{ color: '#22d3ee' }}>Contact support</span>
      </p>
    </div>
  )
}

function Feature({
  i, icon, title, body, tint,
}: { i: number; icon: React.ReactNode; title: string; body: string; tint: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + i * 0.08 }}
      className="flex gap-3 p-3 rounded-lg"
      style={{
        background: `linear-gradient(135deg, ${tint}10, transparent)`,
        border: `1px solid ${tint}22`,
      }}
    >
      <div className="shrink-0">{icon}</div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[12px] font-semibold" style={{ color: '#e6f1f4' }}>{title}</span>
        <span className="text-[10.5px] leading-snug" style={{ color: '#7a99b1' }}>{body}</span>
      </div>
    </motion.div>
  )
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}
function SparklesIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M5.5 5.5l2 2M16.5 16.5l2 2M3 12h3M18 12h3M5.5 18.5l2-2M16.5 7.5l2-2" />
    </svg>
  )
}
function ClockIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}
function ShieldIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  )
}
