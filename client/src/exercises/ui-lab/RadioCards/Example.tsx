import { useState } from 'react'

const plans = [
  { id: 'hobby', name: 'Hobby',  helper: 'For tinkerers',     price: 0,  perks: '1 seat · public repos' },
  { id: 'pro',   name: 'Pro',    helper: 'For working devs',  price: 12, perks: 'Unlimited · private' },
  { id: 'team',  name: 'Team',   helper: 'Shared workspace',  price: 32, perks: 'Up to 5 seats · audit' },
]

export default function Example() {
  const [selected, setSelected] = useState('pro')

  return (
    <div
      className="w-full max-w-[360px] p-7 flex flex-col gap-5"
      style={{
        background: '#f5efe1',
        color: '#1a1612',
        fontFamily: '"Fraunces", Georgia, serif',
        border: '1px solid #d8cfb5',
        boxShadow: '12px 12px 0 #1a1612',
      }}
    >
      <div>
        <p
          className="text-[10px] tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: '"JetBrains Mono", monospace', color: '#7a5a2e' }}
        >
          № 03 · Membership
        </p>
        <h2
          className="m-0 text-3xl"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          Choose a <em style={{ color: '#b8451e' }}>volume</em>.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {plans.map((p) => {
          const active = selected === p.id
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              className="text-left transition-all outline-none p-4"
              style={{
                background: active ? '#1a1612' : 'transparent',
                color: active ? '#f5efe1' : '#1a1612',
                border: '1px solid #1a1612',
                cursor: 'pointer',
              }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div
                    className="text-xl"
                    style={{
                      fontFamily: '"Instrument Serif", serif',
                      fontStyle: active ? 'italic' : 'normal',
                      lineHeight: 1,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="text-[11px] mt-1 tracking-wide"
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      color: active ? '#c4b189' : '#7a5a2e',
                    }}
                  >
                    {p.perks}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div
                    className="text-2xl tabular-nums"
                    style={{ fontFamily: '"Instrument Serif", serif', lineHeight: 1 }}
                  >
                    ${p.price}
                  </div>
                  <div className="text-[10px] mt-1 tracking-[0.2em] uppercase" style={{ color: active ? '#c4b189' : '#7a5a2e' }}>
                    / month
                  </div>
                </div>
              </div>
              <div className="text-xs mt-2 italic" style={{ fontFamily: '"Fraunces", serif', color: active ? '#e6d8b3' : '#5a4e3a' }}>
                {p.helper}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
