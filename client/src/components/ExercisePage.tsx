import { useState } from 'react'

interface ExercisePageProps {
  breadcrumb: string[]
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  description: string
  whatToBuild: string
  keyConcepts: string[]
  workspaceFile: string
  hints: string[]
  children?: React.ReactNode
}

const difficultyStyles: Record<ExercisePageProps['difficulty'], string> = {
  Beginner:     'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  Intermediate: 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  Advanced:     'bg-red-500/15 text-red-400 border border-red-500/25',
}

function HintsSection({ hints }: { hints: string[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setOpen(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3 mb-1">
        <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
          Hints ({hints.length})
        </h3>
      </div>
      <p className="text-xs mb-3" style={{ color: 'var(--text)' }}>
        Reveal one at a time. Try without hints first.
      </p>
      <div className="flex flex-col gap-2">
        {hints.map((hint, i) => (
          <div
            key={i}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: 'var(--border)', background: 'var(--code-bg)' }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
              style={{ color: 'var(--text-h)' }}
            >
              <span className="text-sm font-medium">
                <span className="font-mono mr-2" style={{ color: 'var(--accent)' }}>#{i + 1}</span>
                {open.has(i) ? hint.split('.')[0] + '...' : `Click to reveal hint ${i + 1}`}
              </span>
              <span
                className="text-xs transition-transform duration-200"
                style={{
                  color: 'var(--accent)',
                  transform: open.has(i) ? 'rotate(180deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                }}
              >
                ▼
              </span>
            </button>
            {open.has(i) && (
              <div
                className="px-4 pb-4 pt-1 text-sm leading-relaxed border-t"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
              >
                {hint}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ExercisePage({
  breadcrumb,
  title,
  difficulty,
  description,
  whatToBuild,
  keyConcepts,
  workspaceFile,
  hints,
  children,
}: ExercisePageProps) {
  return (
    <div className="max-w-3xl">
      {/* Breadcrumb */}
      <p className="text-xs tracking-wide mb-3" style={{ color: 'var(--text)' }}>
        {breadcrumb.join(' / ')}
      </p>

      {/* Title + badge */}
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-3xl font-bold tracking-tight m-0" style={{ color: 'var(--text-h)' }}>
          {title}
        </h1>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyStyles[difficulty]}`}>
          {difficulty}
        </span>
      </div>

      {/* Description */}
      <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text)' }}>
        {description}
      </p>

      {/* What to build */}
      <div className="mb-6">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          What to build
        </h3>
        <div
          className="rounded-lg p-4 text-sm leading-relaxed"
          style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--text-h)' }}
        >
          {whatToBuild}
        </div>
      </div>

      {/* Key concepts */}
      <div className="mb-6">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          Key concepts
        </h3>
        <div className="flex flex-wrap gap-2">
          {keyConcepts.map(concept => (
            <code
              key={concept}
              className="text-xs px-2 py-1 rounded"
              style={{ background: 'var(--code-bg)', color: 'var(--text-h)', fontFamily: 'var(--mono)' }}
            >
              {concept}
            </code>
          ))}
        </div>
      </div>

      {/* Workspace file */}
      <div className="mb-8">
        <h3 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
          Workspace file
        </h3>
        <div
          className="flex items-center gap-3 rounded-lg px-4 py-3"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
        >
          <span className="text-xs" style={{ color: 'var(--text)' }}>Open in your editor:</span>
          <code className="text-xs" style={{ color: 'var(--text-h)', fontFamily: 'var(--mono)', background: 'transparent', padding: 0 }}>
            {workspaceFile}
          </code>
        </div>
      </div>

      {/* Hints */}
      <HintsSection hints={hints} />

      {/* Divider + workspace */}
      {children && (
        <>
          <hr className="my-6" style={{ borderColor: 'var(--border)' }} />
          <div>{children}</div>
        </>
      )}
    </div>
  )
}
