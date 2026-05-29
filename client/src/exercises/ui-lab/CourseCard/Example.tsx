import { motion } from 'motion/react'

/**
 * Aesthetic: pastel-faithful — three stacked course cards in distinct
 * pastel gradients (rose-lavender, lavender-blue, peach-pink). Bell in
 * top-right, calendar date pill, black "Join Now" pill button.
 */

type Course = {
  title: string
  subtitle: string
  date: string
  bg: string
}

const COURSES: Course[] = [
  {
    title: 'Expand Your\nEnglish Vocabulary',
    subtitle: 'Learn new useful words',
    date: 'Nov 22, 2024',
    bg: 'linear-gradient(135deg, #fce7f3 0%, #ede9fe 100%)',
  },
  {
    title: 'Build Strong\nGrammar Skills',
    subtitle: 'Clear rules with examples',
    date: 'Nov 12, 2024',
    bg: 'linear-gradient(135deg, #ede9fe 0%, #dbeafe 100%)',
  },
  {
    title: 'Master Everyday\nConversations',
    subtitle: 'Practice real-life dialogues',
    date: 'Nov 30, 2024',
    bg: 'linear-gradient(135deg, #ffe4e6 0%, #fce7f3 100%)',
  },
]

export default function Example() {
  return (
    <div
      className="w-full max-w-[340px] flex flex-col gap-3 p-6 rounded-3xl"
      style={{
        background: 'linear-gradient(160deg, #fafafa 0%, #f5f5f5 100%)',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
      }}
    >
      <div className="flex items-end justify-between mb-1">
        <div>
          <h3
            className="text-base m-0"
            style={{
              fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
              color: '#1f1014',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            Select a course
          </h3>
          <p className="text-[11px] m-0" style={{ color: '#7a6c75' }}>
            Start learning today.
          </p>
        </div>
        <ExpandIcon />
      </div>

      {COURSES.map((c, i) => (
        <Card key={c.title} course={c} index={i} />
      ))}
    </div>
  )
}

function Card({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      whileHover={{ y: -3 }}
      className="relative p-4 rounded-2xl cursor-pointer"
      style={{
        background: course.bg,
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.6), 0 10px 20px -10px rgba(80, 30, 60, 0.18)',
      }}
    >
      <button
        className="absolute flex items-center justify-center rounded-full cursor-pointer"
        style={{
          top: 10, right: 10, width: 26, height: 26,
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.9)',
        }}
      >
        <BellIcon />
      </button>

      <h4
        className="m-0 text-[15px] leading-tight whitespace-pre-line"
        style={{
          fontFamily: '"DM Serif Display", "Bricolage Grotesque", Georgia, serif',
          color: '#1f1014',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          paddingRight: 28,
        }}
      >
        {course.title}
      </h4>
      <p className="text-[11px] mt-1 mb-3" style={{ color: '#5f4f57' }}>
        {course.subtitle}
      </p>

      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
          style={{
            background: 'rgba(255,255,255,0.7)',
            color: '#3a2a30',
          }}
        >
          <CalendarIcon /> {course.date}
        </span>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold cursor-pointer"
          style={{
            background: '#0a0a0a',
            color: '#fafafa',
            boxShadow: '0 4px 10px -3px rgba(0,0,0,0.3)',
          }}
        >
          Join Now <span style={{ fontSize: 13, lineHeight: 1 }}>→</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

function ExpandIcon() {
  return (
    <button
      className="flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: 28, height: 28,
        background: 'rgba(255,255,255,0.9)',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1f1014" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
      </svg>
    </button>
  )
}

function BellIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3a2a30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21a2 2 0 0 0 4 0" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}
