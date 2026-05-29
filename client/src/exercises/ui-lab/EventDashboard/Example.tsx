import { motion } from 'motion/react'

/**
 * Aesthetic: navy gradient dashboard, cyan brand, glass cards, soft glows.
 * Compacted version of the Ruunt Hora events dashboard.
 */
export default function Example() {
  return (
    <div
      className="w-full max-w-[460px] rounded-xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #0b1a2c 0%, #07111d 100%)',
        border: '1px solid rgba(56, 189, 248, 0.08)',
        fontFamily: '"Inter", system-ui, sans-serif',
        boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)',
      }}
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: 'rgba(56, 189, 248, 0.06)' }}>
        <span className="text-sm font-bold" style={{ color: '#22d3ee' }}>Ruunt Hora</span>
        <div className="flex items-center gap-1.5 text-[11px] flex-1 mx-3 max-w-[200px]">
          <div className="flex-1 flex items-center gap-1 px-2 py-1 rounded" style={{ background: 'rgba(20, 38, 56, 0.5)' }}>
            <SearchIcon />
            <span style={{ color: '#5a7589' }}>Search...</span>
          </div>
          <div className="px-2 py-1 rounded flex items-center gap-1" style={{ background: '#22d3ee', color: '#062926' }}>
            <SearchIcon dark />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center rounded-full" style={{ width: 16, height: 16, background: '#f97316', color: '#fff', fontSize: 10, fontWeight: 700 }}>+</span>
          <span className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #6366f1, #22d3ee)' }} />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(99, 102, 241, 0.06))',
            border: '1px solid rgba(56, 189, 248, 0.15)',
          }}
        >
          <p className="text-[10px] tracking-widest uppercase font-bold flex items-center gap-1 mb-1" style={{ color: '#22d3ee' }}>
            <SparkIcon /> Welcome Back
          </p>
          <h2 className="text-2xl font-extrabold m-0" style={{ color: '#f0f9ff' }}>Ray_Ray</h2>
          <p className="text-xs mt-0.5 italic" style={{ color: '#7a99b1' }}>Dare to explore!</p>
          <div className="inline-flex items-center gap-1 text-[11px] mt-2 px-2 py-0.5 rounded-full" style={{ background: 'rgba(20, 38, 56, 0.6)', color: '#bae6fd' }}>
            <PinIcon /> Austin
          </div>
        </motion.div>

        {/* Category grid 2x2 */}
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05 }}
              whileHover={{ y: -2 }}
              className="p-2.5 rounded-lg cursor-pointer"
              style={{
                background: c.active
                  ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(34, 211, 238, 0.04))'
                  : 'rgba(20, 38, 56, 0.4)',
                border: `1px solid ${c.active ? 'rgba(34, 211, 238, 0.5)' : 'rgba(56, 189, 248, 0.08)'}`,
              }}
            >
              <div
                className="flex items-center justify-center rounded mb-1.5"
                style={{
                  width: 26, height: 26,
                  background: c.active ? 'rgba(34, 211, 238, 0.2)' : 'rgba(56, 189, 248, 0.06)',
                  color: c.active ? '#22d3ee' : '#7a99b1',
                }}
              >
                {c.icon}
              </div>
              <p className="text-[11px] font-semibold m-0" style={{ color: c.active ? '#22d3ee' : '#e6f1f4' }}>{c.label}</p>
              <p className="text-[9.5px] mt-0.5 leading-tight" style={{ color: '#5a7589' }}>{c.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tab row */}
        <div className="flex gap-1.5 mt-1">
          {['All Events', 'RSVP', 'Upcoming'].map((t, i) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded font-semibold"
              style={
                i === 0
                  ? { background: '#22d3ee', color: '#062926' }
                  : { background: 'rgba(20, 38, 56, 0.6)', color: '#7a99b1' }
              }
            >
              {t}
            </span>
          ))}
        </div>

        {/* Empty state */}
        <div className="py-5 flex flex-col items-center gap-1.5">
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: 36, height: 36,
              background: 'rgba(20, 38, 56, 0.6)',
              color: '#7a99b1',
            }}
          >
            <CalendarIcon />
          </div>
          <p className="text-xs font-semibold m-0" style={{ color: '#e6f1f4' }}>No events yet</p>
          <p className="text-[10px] m-0 text-center max-w-[220px] leading-tight" style={{ color: '#5a7589' }}>
            No hosted events in Austin yet. Check calendar events or become a host!
          </p>
        </div>
      </div>
    </div>
  )
}

const CATEGORIES = [
  { label: 'Browse', sub: 'Events near you',     icon: <GridIcon />,     active: true },
  { label: 'Nearby', sub: 'No locations yet',    icon: <MapIcon />,      active: false },
  { label: 'Top Hosts', sub: 'Popular hosts',    icon: <CrownIcon />,    active: false },
  { label: 'Calendar', sub: 'Community events',  icon: <CalendarIcon />, active: false },
]

function SearchIcon({ dark }: { dark?: boolean } = {}) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={dark ? '#062926' : '#5a7589'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}
function SparkIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M5.5 5.5l2 2M16.5 16.5l2 2M3 12h3M18 12h3M5.5 18.5l2-2M16.5 7.5l2-2" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}
function MapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" /><path d="M9 3v15M15 6v15" />
    </svg>
  )
}
function CrownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 8 4 8h12l4-8-6 4-4-8-4 8-6-4Z" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
