import { useEffect, useState } from 'react'

type Coin = {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
}

const URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd' +
  '&ids=bitcoin,ethereum,solana,cardano,polkadot' +
  '&order=market_cap_desc&per_page=5&page=1'

const BG = '#070a05'
const LINE = '#1a2618'
const AMBER = '#ffb347'
const GREEN = '#6ee07a'
const RED = '#ff5e6c'
const MUTED = '#587058'

export default function Example() {
  const [coins, setCoins] = useState<Coin[]>([])
  const [err, setErr] = useState<string | null>(null)
  const [updated, setUpdated] = useState<Date | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()
    function load() {
      fetch(URL, { signal: ctrl.signal })
        .then((r) => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
        .then((data) => { setCoins(data); setUpdated(new Date()); setErr(null) })
        .catch((e) => { if (e.name !== 'AbortError') setErr(e.message) })
    }
    load()
    const t = setInterval(load, 30_000)
    return () => { clearInterval(t); ctrl.abort() }
  }, [])

  return (
    <div
      className="w-full max-w-[360px] p-4"
      style={{
        background: BG,
        border: `1px solid ${LINE}`,
        fontFamily: '"JetBrains Mono", monospace',
        boxShadow: 'inset 0 0 80px rgba(110, 224, 122, 0.04)',
      }}
    >
      <div className="flex items-center justify-between mb-3 pb-2" style={{ borderBottom: `1px dashed ${LINE}` }}>
        <span className="text-[10px] tracking-[0.3em]" style={{ color: AMBER }}>
          $ MARKETS --watch
        </span>
        <span className="text-[10px] tracking-widest flex items-center gap-1.5" style={{ color: MUTED }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
          {updated?.toLocaleTimeString('en-US', { hour12: false }) ?? '--:--:--'}
        </span>
      </div>

      <div className="grid grid-cols-12 text-[9px] tracking-widest mb-1 pb-1" style={{ color: MUTED, borderBottom: `1px solid ${LINE}` }}>
        <span className="col-span-1">#</span>
        <span className="col-span-5">SYMBOL</span>
        <span className="col-span-3 text-right">LAST</span>
        <span className="col-span-3 text-right">24H</span>
      </div>

      {err && <p className="text-xs my-2" style={{ color: RED }}>$ ERR: {err}</p>}

      {coins.length === 0 && !err && (
        <p className="text-[10px] my-3 tracking-widest" style={{ color: MUTED }}>
          $ loading market data<span className="animate-pulse">_</span>
        </p>
      )}

      <div className="flex flex-col">
        {coins.map((c, i) => {
          const up = c.price_change_percentage_24h >= 0
          return (
            <div
              key={c.id}
              className="grid grid-cols-12 items-center py-1.5 text-xs"
              style={{ borderBottom: `1px dotted ${LINE}` }}
            >
              <span className="col-span-1 text-[10px]" style={{ color: MUTED }}>{String(i + 1).padStart(2, '0')}</span>
              <span className="col-span-5 tracking-widest" style={{ color: AMBER }}>
                {c.symbol.toUpperCase()}
              </span>
              <span className="col-span-3 text-right tabular-nums" style={{ color: '#d8dac4' }}>
                {c.current_price < 1 ? c.current_price.toFixed(3) : Math.round(c.current_price).toLocaleString()}
              </span>
              <span className="col-span-3 text-right tabular-nums" style={{ color: up ? GREEN : RED }}>
                {up ? '+' : ''}{c.price_change_percentage_24h.toFixed(2)}
              </span>
            </div>
          )
        })}
      </div>

      <p className="text-[9px] mt-3 tracking-widest" style={{ color: MUTED }}>
        $ press CTRL+C to quit · auto-refresh 30s
      </p>
    </div>
  )
}
