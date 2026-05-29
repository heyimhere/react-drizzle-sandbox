import type { ReactNode } from 'react'

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

interface UILabLayoutProps {
  breadcrumb: [string, string]
  title: string
  description: string
  difficulty: Difficulty
  scratchFile: string
  example: ReactNode
  scratch: ReactNode
}

const difficultyStyles: Record<Difficulty, string> = {
  Beginner:     'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  Intermediate: 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  Advanced:     'bg-red-500/15 text-red-400 border border-red-500/25',
}

export default function UILabLayout({
  breadcrumb, title, description, difficulty, scratchFile, example, scratch,
}: UILabLayoutProps) {
  return (
    <div className="flex flex-col gap-7">
      <header>
        <p
          className="text-[11px] font-bold tracking-[0.14em] uppercase mb-1"
          style={{ color: 'var(--accent)', fontFamily: 'var(--mono)' }}
        >
          {breadcrumb.join(' · ')}
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold m-0" style={{ color: 'var(--text-h)' }}>
            {title}
          </h1>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyStyles[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <p className="mt-2 text-sm max-w-2xl" style={{ color: 'var(--text)' }}>
          {description}
        </p>
        <p className="mt-3 text-xs flex items-center gap-2 flex-wrap" style={{ color: 'var(--text)' }}>
          <span>Rebuild in</span>
          <code
            className="text-[11px]"
            style={{ color: 'var(--text-h)', background: 'var(--code-bg)' }}
          >
            {scratchFile}
          </code>
        </p>
      </header>

      <div className="grid gap-4 ui-lab-grid">
        <Panel label="Example" tone="reference">{example}</Panel>
        <Panel label="Scratch" tone="canvas">{scratch}</Panel>
      </div>

      <style>{`
        .ui-lab-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 1180px) {
          .ui-lab-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}

function Panel({
  label, tone, children,
}: { label: string; tone: 'reference' | 'canvas'; children: ReactNode }) {
  const labelStyle =
    tone === 'reference'
      ? { background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }
      : { background: 'var(--bg)', color: 'var(--text)', border: '1px solid var(--border)' }

  return (
    <div
      className="relative rounded-xl overflow-hidden"
      style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
    >
      <div
        className="absolute top-3 right-3 z-10 text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-1 rounded"
        style={{ ...labelStyle, fontFamily: 'var(--mono)' }}
      >
        {label}
      </div>
      <div
        className="flex items-center justify-center"
        style={{ minHeight: '460px', padding: '2.25rem 1.25rem 1.25rem' }}
      >
        {children}
      </div>
    </div>
  )
}
