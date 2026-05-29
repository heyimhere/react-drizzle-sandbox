import type { ReactNode } from 'react'

interface ScratchPlaceholderProps {
  message: ReactNode
}

/**
 * Reset state for every UI Lab Scratch.tsx — delete your code and
 * return `<ScratchPlaceholder message="..." />` to get back here.
 * Pass any ReactNode as `message` (string is fine; JSX with <code> etc.
 * works too).
 */
export default function ScratchPlaceholder({ message }: ScratchPlaceholderProps) {
  return (
    <div className="text-center text-sm" style={{ color: 'var(--text)' }}>
      <p className="font-mono text-xs tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
        your turn
      </p>
      <p>{message}</p>
    </div>
  )
}
