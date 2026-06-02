import { useEffect, useState } from 'react'

type Gif = { id: string; title: string; src: string; width: number; height: number }

const SAMPLE: Gif[] = Array.from({ length: 12 }, (_, i) => ({
  id: `g${i}`,
  title: `Sample ${i + 1}`,
  src: `https://picsum.photos/seed/gif-${i}/300/${200 + (i % 4) * 60}`,
  width: 300,
  height: 200 + (i % 4) * 60,
}))

const INK = '#0a0a0a'
const PAPER = '#f1ebe1'

export default function Example() {
  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useState('')
  const [results, setResults] = useState<Gif[]>(SAMPLE)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim()), 400)
    return () => clearTimeout(t)
  }, [query])

  useEffect(() => {
    if (!debounced) { setResults(SAMPLE); return }
    setLoading(true)
    const t = setTimeout(() => {
      setResults(SAMPLE.map((g, i) => ({
        ...g,
        id: `${debounced}-${i}`,
        src: `https://picsum.photos/seed/${encodeURIComponent(debounced)}-${i}/300/${200 + (i % 4) * 60}`,
        title: `${debounced} ${i + 1}`,
      })))
      setLoading(false)
    }, 350)
    return () => clearTimeout(t)
  }, [debounced])

  return (
    <div
      className="w-full max-w-[400px] p-5 flex flex-col gap-3"
      style={{ background: PAPER, border: `2.5px solid ${INK}` }}
    >
      <div className="flex items-end justify-between">
        <h2
          className="m-0"
          style={{
            fontFamily: '"Anton", sans-serif',
            fontSize: 36,
            lineHeight: 0.85,
            color: INK,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          GIFs<br />
          <span style={{ color: '#ff5db1' }}>now.</span>
        </h2>
        <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: '"JetBrains Mono", monospace', color: '#5a5147' }}>
          v.04
        </span>
      </div>

      <div
        className="relative flex items-center"
        style={{ background: '#fff', border: `2px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}` }}
      >
        <span className="pl-3 text-lg" style={{ color: INK }}>⌕</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="kittens, fireworks…"
          className="w-full px-2 py-2 text-sm outline-none bg-transparent"
          style={{ color: INK, fontFamily: '"Bricolage Grotesque", sans-serif' }}
        />
        {(loading || query !== debounced) && (
          <span className="pr-3 text-xs animate-spin" style={{ color: INK }}>◐</span>
        )}
      </div>

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: 'repeat(2, 1fr)', gridAutoRows: '10px' }}
      >
        {results.map((g) => {
          const span = Math.ceil(g.height / 12)
          return (
            <div
              key={g.id}
              className="overflow-hidden"
              style={{
                gridRow: `span ${span}`,
                border: `2px solid ${INK}`,
                background: '#fff',
              }}
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          )
        })}
      </div>

      <p className="text-[10px] tracking-widest uppercase mt-1" style={{ fontFamily: '"JetBrains Mono", monospace', color: '#5a5147' }}>
        {results.length} results · enter a tenor/giphy key for real GIFs
      </p>
    </div>
  )
}
