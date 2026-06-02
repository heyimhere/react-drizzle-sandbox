import { useState } from 'react'

const BG = '#0a0907'
const SURFACE = '#13110d'
const LINE = '#26221a'
const GOLD = '#d4a843'
const TEXT = '#ddd0b3'
const MUTED = '#807660'

export default function Example() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div
      className="w-full max-w-[340px] p-8 flex flex-col gap-6"
      style={{
        background: BG,
        border: `1px solid ${GOLD}`,
        boxShadow: `0 30px 60px -30px rgba(0,0,0,0.8), inset 0 0 80px rgba(212, 168, 67, 0.03)`,
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <div
          className="text-3xl"
          style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 500, color: GOLD, letterSpacing: 6 }}
        >
          ATLAS
        </div>
        <div
          className="text-[10px] tracking-[0.4em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: MUTED }}
        >
          · est. mmxxv ·
        </div>
        <h2
          className="m-0 mt-3"
          style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT, fontSize: 22, fontStyle: 'italic', fontWeight: 400 }}
        >
          Welcome back.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <Input label="Email"    type="email"    value={email}    onChange={setEmail}    />
        <Input label="Password" type="password" value={password} onChange={setPassword} />
      </div>

      <button
        type="button"
        className="w-full py-3 text-xs tracking-[0.3em] uppercase transition-colors"
        style={{
          background: 'transparent',
          border: `1px solid ${GOLD}`,
          color: GOLD,
          fontFamily: '"JetBrains Mono", monospace',
        }}
      >
        Continue
      </button>

      <div className="flex items-center gap-3 text-[10px] tracking-widest uppercase" style={{ color: MUTED, fontFamily: '"JetBrains Mono", monospace' }}>
        <div className="flex-1 h-px" style={{ background: LINE }} />
        or
        <div className="flex-1 h-px" style={{ background: LINE }} />
      </div>

      <button
        type="button"
        className="w-full py-2.5 text-xs flex items-center justify-center gap-2"
        style={{ background: SURFACE, border: `1px solid ${LINE}`, color: TEXT, fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 14 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.5 3.8 1.1.1-.9.5-1.5.9-1.8-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2 0-.4-.6-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" /></svg>
        Continue with GitHub
      </button>
    </div>
  )
}

function Input({ label, type, value, onChange }: { label: string; type: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[9px] tracking-[0.32em] uppercase"
        style={{ fontFamily: '"JetBrains Mono", monospace', color: MUTED }}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="py-2 outline-none text-base bg-transparent"
        style={{
          borderBottom: `1px solid ${LINE}`,
          color: TEXT,
          fontFamily: '"Cormorant Garamond", serif',
        }}
      />
    </label>
  )
}
