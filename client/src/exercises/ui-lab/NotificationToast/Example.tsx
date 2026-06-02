import { useState } from 'react'

type Variant = 'success' | 'info' | 'error'
type Toast = { id: number; variant: Variant; title: string; body: string }

const VARIANTS: Record<Variant, { fg: string; bg: string; icon: string }> = {
  success: { fg: '#0d3520', bg: '#a7f3d0', icon: '✓' },
  info:    { fg: '#172554', bg: '#bfdbfe', icon: 'i' },
  error:   { fg: '#3f0d0d', bg: '#fecaca', icon: '!' },
}

const INK = '#0a0a0a'
const PAPER = '#fff7c2'

let id = 0

export default function Example() {
  const [toasts, setToasts] = useState<Toast[]>([
    { id: ++id, variant: 'success', title: 'Saved',  body: 'Your changes are synced.' },
    { id: ++id, variant: 'info',    title: 'v1.4.0', body: 'Refresh to load.' },
  ])

  function dismiss(toastId: number) { setToasts((prev) => prev.filter((t) => t.id !== toastId)) }
  function push(variant: Variant) {
    const titles: Record<Variant, [string, string]> = {
      success: ['All set',      'Deployment finished in 12s.'],
      info:    ['Heads up',     'Two collaborators joined.'],
      error:   ['Build failed', 'Check the logs for details.'],
    }
    const [title, body] = titles[variant]
    setToasts((prev) => [...prev, { id: ++id, variant, title, body }])
  }

  return (
    <div
      className="w-full max-w-[380px] p-5 flex flex-col gap-4 relative"
      style={{ background: PAPER, border: `2.5px solid ${INK}`, minHeight: 360 }}
    >
      <h2
        className="m-0"
        style={{ fontFamily: '"Anton", sans-serif', fontSize: 32, lineHeight: 0.9, letterSpacing: 1, color: INK, textTransform: 'uppercase' }}
      >
        Alerts!<br />
        <span style={{ color: '#ff007f' }}>Push 'em.</span>
      </h2>

      <div className="flex gap-2 flex-wrap">
        {(['success', 'info', 'error'] as Variant[]).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => push(v)}
            className="px-3 py-1 uppercase font-bold text-xs"
            style={{
              background: VARIANTS[v].bg,
              color: INK,
              border: `2px solid ${INK}`,
              fontFamily: '"Bricolage Grotesque", sans-serif',
              boxShadow: `3px 3px 0 ${INK}`,
            }}
          >
            push {v}
          </button>
        ))}
      </div>

      <div className="absolute bottom-3 right-3 left-3 flex flex-col gap-2.5">
        {toasts.map((t) => {
          const v = VARIANTS[t.variant]
          return (
            <div
              key={t.id}
              className="flex items-stretch gap-0 overflow-hidden"
              style={{
                background: v.bg,
                color: v.fg,
                border: `2.5px solid ${INK}`,
                boxShadow: `4px 4px 0 ${INK}`,
                animation: 'lab-toast-pop 220ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <div
                className="flex items-center justify-center text-xl font-black px-3"
                style={{ background: v.fg, color: v.bg, fontFamily: '"Anton", sans-serif', borderRight: `2.5px solid ${INK}`, minWidth: 38 }}
              >
                {v.icon}
              </div>
              <div className="flex-1 px-3 py-2">
                <div className="text-xs font-bold uppercase tracking-wide" style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>{t.title}</div>
                <div className="text-xs mt-0.5" style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}>{t.body}</div>
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                className="px-3 hover:bg-black/10 text-sm font-bold"
                style={{ borderLeft: `2.5px solid ${INK}`, fontFamily: '"Bricolage Grotesque", sans-serif' }}
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes lab-toast-pop {
          0%   { opacity: 0; transform: translate(8px, 8px); }
          100% { opacity: 1; transform: translate(0, 0); }
        }
      `}</style>
    </div>
  )
}
