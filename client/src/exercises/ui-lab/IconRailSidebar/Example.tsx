import { useState } from 'react'
import { motion } from 'motion/react'

/**
 * Aesthetic: pastel-faithful — soft cream rounded rail floating on a peach
 * gradient. Active icon gets a black pill (animates between positions),
 * theme toggle at bottom switches sun ↔ moon.
 */

type NavKey = 'home' | 'chart' | 'calendar' | 'folder' | 'message' | 'settings'

export default function Example() {
  const [active, setActive] = useState<NavKey>('home')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div
      className="w-full max-w-[420px] flex items-center justify-center p-10 rounded-3xl"
      style={{
        background: 'linear-gradient(160deg, #ffe4e6 0%, #f5e8ff 70%, #fce7f3 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      <nav
        className="flex flex-col items-center justify-between py-3 rounded-3xl"
        style={{
          width: 56,
          minHeight: 380,
          background: 'rgba(255, 255, 255, 0.85)',
          boxShadow:
            'inset 0 0 0 1px rgba(255,255,255,0.9), 0 12px 30px -10px rgba(80, 30, 60, 0.18)',
        }}
      >
        <div className="flex flex-col gap-1 items-center">
          {NAV_ITEMS.map((it) => (
            <IconButton
              key={it.key}
              active={active === it.key}
              onClick={() => setActive(it.key)}
              dot={it.dot}
              layoutGroup="rail-active"
            >
              {it.icon}
            </IconButton>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-center pt-3">
          <IconButton
            active={theme === 'light'}
            onClick={() => setTheme('light')}
            layoutGroup="rail-theme"
          >
            <SunIcon />
          </IconButton>
          <IconButton
            active={theme === 'dark'}
            onClick={() => setTheme('dark')}
            layoutGroup="rail-theme"
          >
            <MoonIcon />
          </IconButton>
        </div>
      </nav>
    </div>
  )
}

function IconButton({
  children, active, onClick, dot, layoutGroup,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
  dot?: boolean
  layoutGroup: string
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="relative flex items-center justify-center rounded-full cursor-pointer"
      style={{ width: 36, height: 36, color: active ? '#fafafa' : '#3a2a30', zIndex: 1 }}
    >
      {active && (
        <motion.span
          layoutId={layoutGroup}
          className="absolute inset-0 rounded-full"
          style={{
            background: '#0a0a0a',
            boxShadow: '0 4px 10px -2px rgba(0,0,0,0.3)',
            zIndex: -1,
          }}
          transition={{ type: 'spring', stiffness: 360, damping: 30 }}
        />
      )}
      <span className="relative">{children}</span>
      {dot && (
        <span
          className="absolute"
          style={{
            top: 6, right: 6,
            width: 7, height: 7,
            background: '#ef4444',
            borderRadius: '50%',
            border: '1.5px solid #fafafa',
          }}
        />
      )}
    </motion.button>
  )
}

const NAV_ITEMS: { key: NavKey; icon: React.ReactNode; dot?: boolean }[] = [
  { key: 'home',     icon: <HomeIcon /> },
  { key: 'chart',    icon: <ChartIcon /> },
  { key: 'calendar', icon: <CalendarIcon /> },
  { key: 'folder',   icon: <FolderIcon /> },
  { key: 'message',  icon: <MessageIcon />, dot: true },
  { key: 'settings', icon: <SettingsIcon /> },
]

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" />
    </svg>
  )
}
function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2v10h10" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    </svg>
  )
}
function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  )
}
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
