import { useEffect, useState } from 'react'

type Forecast = {
  current: { temperature_2m: number; weather_code: number; wind_speed_10m: number }
  daily: { time: string[]; temperature_2m_max: number[]; temperature_2m_min: number[]; weather_code: number[] }
}

const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.006' +
  '&current=temperature_2m,weather_code,wind_speed_10m' +
  '&daily=temperature_2m_max,temperature_2m_min,weather_code' +
  '&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto'

function codeToGlyph(code: number): string {
  if (code === 0) return '☉'
  if (code <= 3) return '◐'
  if (code <= 48) return '≋'
  if (code <= 67) return '☂'
  if (code <= 77) return '❄'
  if (code <= 82) return '☂'
  if (code <= 99) return '⚡'
  return '·'
}

const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const BG = '#0a0907'
const LINE = '#26221a'
const GOLD = '#d4a843'
const TEXT = '#ddd0b3'
const MUTED = '#807660'

export default function Example() {
  const [data, setData] = useState<Forecast | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(URL, { signal: ctrl.signal })
      .then((r) => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
      .then(setData)
      .catch((e) => { if (e.name !== 'AbortError') setErr(e.message) })
    return () => ctrl.abort()
  }, [])

  return (
    <div
      className="w-full max-w-[340px] p-7 flex flex-col gap-5"
      style={{ background: BG, border: `1px solid ${LINE}`, boxShadow: 'inset 0 1px 0 rgba(212, 168, 67, 0.04)' }}
    >
      <header className="text-center">
        <p
          className="text-[10px] tracking-[0.42em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: GOLD }}
        >
          — Almanac —
        </p>
        <h2
          className="mt-1 m-0"
          style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT, fontWeight: 500, fontSize: 28, fontStyle: 'italic' }}
        >
          New York
        </h2>
      </header>

      {err && <p className="text-xs text-center" style={{ color: '#e89274', fontFamily: '"Fraunces", serif' }}>{err}</p>}

      {!data && !err && (
        <div className="flex items-center justify-center py-8 text-2xl" style={{ color: MUTED }}>·</div>
      )}

      {data && (
        <>
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="text-6xl" style={{ color: GOLD, lineHeight: 1 }}>
              {codeToGlyph(data.current.weather_code)}
            </div>
            <div className="flex flex-col items-start">
              <div className="text-6xl tabular-nums" style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT, fontWeight: 400, lineHeight: 1 }}>
                {Math.round(data.current.temperature_2m)}°
              </div>
              <div className="text-[10px] tracking-[0.24em] uppercase mt-1" style={{ fontFamily: '"JetBrains Mono", monospace', color: MUTED }}>
                wind {Math.round(data.current.wind_speed_10m)} mph
              </div>
            </div>
          </div>

          <div className="h-px" style={{ background: LINE }} />

          <div className="grid grid-cols-7 gap-0.5">
            {data.daily.time.slice(0, 7).map((iso, i) => {
              const d = new Date(iso)
              return (
                <div
                  key={iso}
                  className="flex flex-col items-center gap-1.5 py-2"
                  style={{
                    background: i === 0 ? '#13110d' : 'transparent',
                    border: i === 0 ? `1px solid ${GOLD}33` : 'none',
                  }}
                >
                  <span className="text-[9px] tracking-widest uppercase" style={{ fontFamily: '"JetBrains Mono", monospace', color: i === 0 ? GOLD : MUTED }}>
                    {DAY[d.getDay()]}
                  </span>
                  <span className="text-base" style={{ color: GOLD }}>
                    {codeToGlyph(data.daily.weather_code[i])}
                  </span>
                  <span className="text-xs tabular-nums" style={{ fontFamily: '"Cormorant Garamond", serif', color: TEXT }}>
                    {Math.round(data.daily.temperature_2m_max[i])}
                  </span>
                  <span className="text-[10px] tabular-nums italic" style={{ fontFamily: '"Cormorant Garamond", serif', color: MUTED }}>
                    {Math.round(data.daily.temperature_2m_min[i])}
                  </span>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
