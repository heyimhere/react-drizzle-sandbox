import { useState } from 'react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function buildMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev = new Date(year, month, 0).getDate()
  const cells: { day: number; inMonth: boolean; date: Date }[] = []
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, inMonth: false, date: new Date(year, month - 1, daysInPrev - i) })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, inMonth: true, date: new Date(year, month, d) })
  while (cells.length % 7 !== 0) {
    const idx = cells.length - daysInMonth - firstDay + 1
    cells.push({ day: idx, inMonth: false, date: new Date(year, month + 1, idx) })
  }
  return cells
}

export default function Example() {
  const today = new Date()
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selected, setSelected] = useState(today)
  const cells = buildMonth(cursor.getFullYear(), cursor.getMonth())
  const eventDays = new Set([3, 8, 14, 22, 27])

  return (
    <div
      className="w-full max-w-[380px] p-7 flex flex-col gap-5"
      style={{
        background: '#ece6d6',
        border: '1.5px solid #1a1814',
        boxShadow: '10px 10px 0 #b00020',
      }}
    >
      <header className="flex items-end justify-between" style={{ borderBottom: '2px solid #1a1814', paddingBottom: 12 }}>
        <div>
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-1"
            style={{ fontFamily: '"JetBrains Mono", monospace', color: '#6e655c' }}
          >
            Almanac · {cursor.getFullYear()}
          </p>
          <h2
            className="m-0"
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 34,
              lineHeight: 0.9,
              color: '#1a1814',
            }}
          >
            {MONTH_NAMES[cursor.getMonth()]}
          </h2>
        </div>
        <div className="flex gap-1">
          <NavBtn label="‹" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))} />
          <NavBtn label="›" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))} />
        </div>
      </header>

      <div className="grid grid-cols-7 gap-px" style={{ background: '#1a1814', border: '1px solid #1a1814' }}>
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="text-[10px] text-center py-1.5 tracking-widest uppercase"
            style={{ background: '#dcd3b8', fontFamily: '"JetBrains Mono", monospace', color: '#1a1814' }}
          >
            {d.slice(0, 1)}
          </div>
        ))}
        {cells.map((c, i) => {
          const isToday = c.inMonth && c.date.toDateString() === today.toDateString()
          const isSelected = c.inMonth && c.date.toDateString() === selected.toDateString()
          const hasEvent = c.inMonth && eventDays.has(c.day)
          return (
            <button
              key={i}
              type="button"
              onClick={() => c.inMonth && setSelected(c.date)}
              className="relative aspect-square flex flex-col items-center justify-center"
              style={{
                fontFamily: '"Fraunces", serif',
                fontSize: 14,
                background: isSelected ? '#1a1814' : isToday ? '#ffd86b' : '#ece6d6',
                color: isSelected ? '#ece6d6' : !c.inMonth ? '#a99e7e' : '#1a1814',
                fontStyle: isSelected ? 'italic' : 'normal',
                cursor: c.inMonth ? 'pointer' : 'default',
              }}
            >
              {c.day}
              {hasEvent && (
                <span
                  className="absolute bottom-1"
                  style={{ width: 4, height: 4, background: isSelected ? '#ffd86b' : '#b00020', borderRadius: 9999 }}
                />
              )}
            </button>
          )
        })}
      </div>

      <p
        className="text-[10px] italic mt-1"
        style={{ fontFamily: '"Fraunces", serif', color: '#6e655c' }}
      >
        Selected: {selected.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </p>
    </div>
  )
}

function NavBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-7 h-7 flex items-center justify-center text-lg leading-none"
      style={{
        background: '#ece6d6',
        border: '1.5px solid #1a1814',
        color: '#1a1814',
        fontFamily: '"Instrument Serif", serif',
      }}
    >
      {label}
    </button>
  )
}
