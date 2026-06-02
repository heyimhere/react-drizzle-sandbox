import { useState } from 'react'

export default function Example() {
  const [volume, setVolume] = useState(64)
  const [brightness, setBrightness] = useState(40)
  const [warmth, setWarmth] = useState(78)

  return (
    <div
      className="w-full max-w-[360px] p-7 flex flex-col gap-7"
      style={{
        background: '#f5efe1',
        border: '1px solid #d8cfb5',
        boxShadow: '0 30px 60px -30px rgba(26, 22, 18, 0.25), inset 0 1px 0 rgba(255,255,255,0.5)',
      }}
    >
      <div>
        <p
          className="text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#7a5a2e' }}
        >
          Control deck
        </p>
        <h2
          className="m-0 text-2xl"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#1a1612', lineHeight: 1 }}
        >
          Fine adjustments
        </h2>
      </div>
      <Slider label="Volume"     value={volume}     onChange={setVolume}     suffix="%" />
      <Slider label="Brightness" value={brightness} onChange={setBrightness} suffix="%" />
      <Slider label="Warmth"     value={warmth}     onChange={setWarmth}     suffix="K" />
    </div>
  )
}

function Slider({ label, value, onChange, suffix }: { label: string; value: number; onChange: (v: number) => void; suffix: string }) {
  return (
    <label className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <span
          className="text-[11px] tracking-[0.22em] uppercase"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#5a4e3a' }}
        >
          {label}
        </span>
        <span
          className="text-2xl tabular-nums"
          style={{ fontFamily: '"Instrument Serif", serif', color: '#1a1612', lineHeight: 1 }}
        >
          {value}<span className="text-xs" style={{ color: '#7a5a2e', marginLeft: 2 }}>{suffix}</span>
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute left-0 right-0 h-px" style={{ background: '#1a1612' }} />
        <div className="absolute left-0 right-0 flex justify-between pointer-events-none">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i} style={{ width: 1, height: i % 5 === 0 ? 10 : 5, background: '#1a1612', marginTop: i % 5 === 0 ? -3 : 0 }} />
          ))}
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"
          aria-label={label}
        />
        <span
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: `calc(${value}% - 9px)`,
            top: 'calc(50% - 9px)',
            width: 18,
            height: 18,
            background: '#b8451e',
            borderRadius: 9999,
            boxShadow: '0 2px 0 #1a1612',
            transition: 'left 80ms linear',
          }}
        />
      </div>
      <style>{`
        input[type=range]::-webkit-slider-thumb { appearance: none; width: 22px; height: 22px; opacity: 0; }
        input[type=range]::-moz-range-thumb { width: 22px; height: 22px; opacity: 0; border: none; }
      `}</style>
    </label>
  )
}
