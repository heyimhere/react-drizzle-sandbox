import { useId, useRef, useState } from 'react'

const BG = '#0a0907'
const SURFACE = '#13110d'
const LINE = '#26221a'
const GOLD = '#d4a843'
const TEXT = '#ddd0b3'
const MUTED = '#807660'

export default function Example() {
  return (
    <div
      className="w-full max-w-[360px] p-10 flex flex-col items-center gap-10"
      style={{ background: BG, border: `1px solid ${LINE}`, boxShadow: 'inset 0 1px 0 rgba(212, 168, 67, 0.05)' }}
    >
      <p
        className="text-[10px] tracking-[0.3em] uppercase"
        style={{ fontFamily: '"JetBrains Mono", monospace', color: GOLD }}
      >
        — Suite 04 —
      </p>

      <div className="flex items-center gap-5">
        <Tip text="Copy permalink">
          <IconButton><CopyIcon /></IconButton>
        </Tip>
        <Tip text="Share with team">
          <IconButton><ShareIcon /></IconButton>
        </Tip>
        <Tip text="Archive forever">
          <IconButton danger><TrashIcon /></IconButton>
        </Tip>
      </div>

      <p className="text-xs italic" style={{ fontFamily: '"Fraunces", serif', color: MUTED }}>
        Hover, or tab through with the keyboard.
      </p>
    </div>
  )
}

function Tip({ text, children }: { text: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const timer = useRef<number | undefined>(undefined)

  function show() { timer.current = window.setTimeout(() => setOpen(true), 180) }
  function hide() { if (timer.current) clearTimeout(timer.current); setOpen(false) }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={open ? id : undefined}
    >
      {children}
      <span
        role="tooltip"
        id={id}
        className="absolute left-1/2 bottom-full mb-3 px-3 py-1.5 whitespace-nowrap pointer-events-none transition-all duration-200"
        style={{
          background: BG,
          color: GOLD,
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 13,
          letterSpacing: 0.2,
          border: `1px solid ${GOLD}`,
          transform: `translate(-50%, ${open ? '0' : '6px'})`,
          opacity: open ? 1 : 0,
        }}
      >
        {text}
        <span
          className="absolute left-1/2 top-full"
          style={{
            transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `7px solid ${GOLD}`,
          }}
        />
        <span
          className="absolute left-1/2 top-full"
          style={{
            transform: 'translate(-50%, -1.5px)',
            width: 0, height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: `6px solid ${BG}`,
          }}
        />
      </span>
    </span>
  )
}

function IconButton({ children, danger }: { children: React.ReactNode; danger?: boolean }) {
  return (
    <button
      type="button"
      className="w-11 h-11 flex items-center justify-center transition-colors outline-none focus-visible:ring-1"
      style={{
        background: SURFACE,
        border: `1px solid ${danger ? '#5a2f1a' : LINE}`,
        color: danger ? '#e89274' : TEXT,
      }}
    >
      {children}
    </button>
  )
}

function CopyIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="1" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg> }
function ShareIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.59 13.51 6.83 3.98" /><path d="m15.41 6.51-6.82 3.98" /></svg> }
function TrashIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg> }
