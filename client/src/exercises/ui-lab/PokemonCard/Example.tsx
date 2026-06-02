import { useEffect, useState } from 'react'

type Poke = {
  id: number
  name: string
  sprites: { other: { 'official-artwork': { front_default: string } } }
  types: { type: { name: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
}

const TYPE_COLORS: Record<string, string> = {
  fire: '#fb7185', water: '#7dd3fc', grass: '#3ddc84', electric: '#fcd34d',
  psychic: '#f0abfc', dark: '#475569', ice: '#a5f3fc', poison: '#a78bfa',
  fighting: '#f97316', rock: '#a8a29e', ground: '#d6c66f', bug: '#84cc16',
  ghost: '#8b5cf6', dragon: '#6366f1', steel: '#94a3b8', fairy: '#f9a8d4',
  flying: '#bae6fd', normal: '#e7e5e4',
}

const PAPER = '#f1ebe1'
const INK = '#0a0a0a'

export default function Example() {
  const [id, setId] = useState(133)
  const [data, setData] = useState<Poke | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    const ctrl = new AbortController()
    setData(null); setErr(null)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { signal: ctrl.signal })
      .then((r) => r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`)))
      .then(setData)
      .catch((e) => { if (e.name !== 'AbortError') setErr(e.message) })
    return () => ctrl.abort()
  }, [id])

  const accent = data ? (TYPE_COLORS[data.types[0].type.name] ?? '#7dd3fc') : '#7dd3fc'

  return (
    <div
      className="w-full max-w-[320px] flex flex-col"
      style={{ background: PAPER, border: `2.5px solid ${INK}`, boxShadow: `8px 8px 0 ${INK}` }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ background: accent, borderBottom: `2.5px solid ${INK}`, height: 200 }}
      >
        <div
          className="absolute"
          style={{
            width: '100%', height: '100%',
            background: `repeating-linear-gradient(45deg, transparent 0 10px, ${INK}11 10px 11px)`,
          }}
        />
        {data && (
          <img
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.name}
            className="relative w-36 h-36 object-contain"
            style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.4))' }}
          />
        )}
        <span
          className="absolute top-3 left-3 text-2xl tabular-nums"
          style={{ fontFamily: '"Anton", sans-serif', color: INK, lineHeight: 1 }}
        >
          №{String(id).padStart(3, '0')}
        </span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {err && <p className="text-xs" style={{ color: '#b00020', fontFamily: '"JetBrains Mono", monospace' }}>ERR {err}</p>}
        {data && (
          <>
            <div className="flex items-end justify-between gap-2">
              <h2
                className="capitalize m-0"
                style={{
                  fontFamily: '"Anton", sans-serif',
                  fontSize: 38,
                  lineHeight: 0.85,
                  color: INK,
                  letterSpacing: 0.5,
                }}
              >
                {data.name}
              </h2>
              <div className="flex gap-1 flex-wrap justify-end">
                {data.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="text-[10px] px-1.5 py-0.5 uppercase font-bold tracking-widest"
                    style={{
                      background: TYPE_COLORS[t.type.name] ?? PAPER,
                      color: INK,
                      border: `1.5px solid ${INK}`,
                      fontFamily: '"Bricolage Grotesque", sans-serif',
                    }}
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {data.stats.slice(0, 4).map((s) => (
                <div key={s.stat.name}>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: '"JetBrains Mono", monospace', color: INK }}>
                    <span>{s.stat.name.replace('-', ' ')}</span>
                    <span className="tabular-nums">{s.base_stat}</span>
                  </div>
                  <div className="h-2.5" style={{ background: PAPER, border: `1.5px solid ${INK}` }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (s.base_stat / 180) * 100)}%`, background: INK }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2" style={{ borderTop: `1.5px solid ${INK}` }}>
              <button
                type="button"
                onClick={() => setId((i) => Math.max(1, i - 1))}
                className="flex-1 py-2 text-xs uppercase font-bold tracking-widest"
                style={{ background: PAPER, color: INK, border: `1.5px solid ${INK}`, fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                ◀ Prev
              </button>
              <button
                type="button"
                onClick={() => setId((i) => i + 1)}
                className="flex-1 py-2 text-xs uppercase font-bold tracking-widest"
                style={{ background: INK, color: PAPER, border: `1.5px solid ${INK}`, fontFamily: '"Bricolage Grotesque", sans-serif' }}
              >
                Next ▶
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
