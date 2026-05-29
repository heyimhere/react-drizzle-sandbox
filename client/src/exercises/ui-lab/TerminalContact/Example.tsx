import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

/**
 * Aesthetic: full terminal vibe — macOS window chrome, line numbers,
 * monospace code-style fields, green glow accent. Mirrors the contact.sh
 * screenshot, compacted for the canvas width.
 */
export default function Example() {
  return (
    <div
      className="w-full max-w-[400px] flex flex-col items-center gap-5"
      style={{ background: 'transparent', fontFamily: '"JetBrains Mono", ui-monospace, monospace' }}
    >
      <div className="text-center">
        <p className="text-xs mb-2" style={{ color: '#4ade80' }}>
          // contact.sh
        </p>
        <h2 className="text-2xl font-bold m-0 leading-tight" style={{ color: '#f5f5f4' }}>
          Send a{' '}
          <span
            style={{
              color: '#4ade80',
              textShadow: '0 0 18px rgba(74, 222, 128, 0.7)',
            }}
          >
            Message
          </span>
        </h2>
        <div className="flex gap-1.5 justify-center mt-3 flex-wrap">
          {['open to work', 'quick reply', 'no spam'].map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded"
              style={{
                color: '#4ade80',
                border: '1px solid rgba(74, 222, 128, 0.35)',
                background: 'rgba(74, 222, 128, 0.05)',
              }}
            >
              [ {t} ]
            </span>
          ))}
        </div>
      </div>

      <TerminalWindow tab="send_message.sh">
        <Line n={1} text={<><Comment>{`// fill in the fields below`}</Comment></>} />
        <Line n={2} text={<><K>const</K> <V>contact</V> = {'{'}</>} />
        <Line n={3} text={<Field label="name" placeholder="your name" />} />
        <Line n={4} text={<Field label="email" placeholder="you@example.com" />} />
        <Line n={5} text={<><Pad>message:</Pad> <Caret /></>} />
        <Line n={6} text={<>{'}'};</>} />
      </TerminalWindow>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-md cursor-pointer text-sm font-semibold"
        style={{
          background: 'linear-gradient(180deg, #4ade80, #22c55e)',
          color: '#052e16',
          boxShadow: '0 12px 28px -10px rgba(74, 222, 128, 0.5)',
        }}
      >
        <span>$ run send_message.sh</span>
        <span>→</span>
      </motion.button>
    </div>
  )
}

function TerminalWindow({ tab, children }: { tab: string; children: React.ReactNode }) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden"
      style={{ background: '#0a0a0a', border: '1px solid #1f1f1f' }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2 border-b"
        style={{ borderColor: '#1f1f1f', background: '#070707' }}
      >
        <div className="flex gap-1.5">
          <Dot color="#ff5f57" />
          <Dot color="#febc2e" />
          <Dot color="#28c840" />
        </div>
        <span className="text-[11px] ml-2 px-2 py-0.5 rounded" style={{ color: '#e5e5e5', background: '#1a1a1a' }}>
          {tab}
        </span>
      </div>
      <div className="py-2.5 text-[12px]" style={{ borderLeft: '2px solid rgba(74,222,128,0.4)' }}>
        {children}
      </div>
    </div>
  )
}

function Dot({ color }: { color: string }) {
  return <span style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
}

function Line({ n, text }: { n: number; text: React.ReactNode }) {
  return (
    <div className="flex gap-3 px-3 py-0.5">
      <span style={{ color: '#3a3a3a', minWidth: 16, textAlign: 'right' }}>{n}</span>
      <span style={{ color: '#e5e5e5' }}>{text}</span>
    </div>
  )
}

function K({ children }: { children: React.ReactNode }) { return <span style={{ color: '#c084fc' }}>{children}</span> }
function V({ children }: { children: React.ReactNode }) { return <span style={{ color: '#7dd3fc' }}>{children}</span> }
function Comment({ children }: { children: React.ReactNode }) { return <span style={{ color: '#525252' }}>{children}</span> }
function Pad({ children }: { children: React.ReactNode }) { return <span style={{ color: '#fbbf24' }}>{children}</span> }

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <>
      <Pad>{label}:</Pad>{' '}
      <span style={{ color: '#4ade80' }}>'</span>
      <span style={{ color: '#525252' }}>{placeholder}</span>
      <span style={{ color: '#4ade80' }}>'</span>,
    </>
  )
}

function Caret() {
  const [on, setOn] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530)
    return () => clearInterval(id)
  }, [])
  return (
    <span
      style={{
        display: 'inline-block',
        width: 7, height: 13,
        background: on ? '#4ade80' : 'transparent',
        verticalAlign: 'text-bottom',
        boxShadow: on ? '0 0 6px #4ade80' : 'none',
      }}
    />
  )
}
