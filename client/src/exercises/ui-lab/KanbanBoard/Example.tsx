/**
 * Aesthetic: warm paper feel — cream surface, soft pastel column tints,
 * editorial serif headings, hand-organized vibe. Deliberately not the
 * cool-navy palette of the dashboard so the page set has variety.
 */
export default function Example() {
  return (
    <div
      className="w-full max-w-[460px] p-4 rounded-xl"
      style={{
        background: '#f6f1e6',
        border: '1px solid #d8cfb8',
        fontFamily: '"Inter", system-ui, sans-serif',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.4), 0 30px 60px -30px rgba(80, 65, 30, 0.25)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3
          className="text-base m-0"
          style={{ fontFamily: '"Playfair Display", "Lora", Georgia, serif', color: '#2a2418', fontWeight: 700 }}
        >
          launch checklist
        </h3>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: '#2a2418', color: '#f6f1e6' }}>
          {COLUMNS.reduce((a, c) => a + c.cards.length, 0)} cards
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {COLUMNS.map((col) => (
          <Column key={col.label} {...col} />
        ))}
      </div>
    </div>
  )
}

function Column({ label, accent, cards }: typeof COLUMNS[number]) {
  return (
    <div
      className="rounded-lg p-2 flex flex-col gap-2"
      style={{
        background: `color-mix(in srgb, ${accent} 18%, #f6f1e6)`,
        border: `1px solid color-mix(in srgb, ${accent} 35%, transparent)`,
      }}
    >
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: accent }}>
          {label}
        </span>
        <span className="text-[10px]" style={{ color: '#7a6d55' }}>
          {cards.length}
        </span>
      </div>
      {cards.map((c) => (
        <Card key={c.title} card={c} accent={accent} />
      ))}
    </div>
  )
}

function Card({ card, accent }: { card: typeof COLUMNS[number]['cards'][number]; accent: string }) {
  return (
    <div
      className="rounded-md p-2 cursor-grab"
      style={{
        background: '#fffdf6',
        border: '1px solid #e5dcc4',
        boxShadow: '0 1px 0 #e5dcc4, 0 4px 8px -4px rgba(80, 65, 30, 0.2)',
      }}
    >
      {card.tag && (
        <span
          className="inline-block text-[8.5px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm mb-1.5"
          style={{ background: `${accent}22`, color: accent }}
        >
          {card.tag}
        </span>
      )}
      <p className="text-[11.5px] font-semibold m-0 leading-snug" style={{ color: '#2a2418' }}>
        {card.title}
      </p>
      <div className="flex items-center justify-between mt-1.5">
        <div className="flex -space-x-1">
          {card.who.map((w, i) => (
            <span
              key={i}
              className="rounded-full flex items-center justify-center text-[8px] font-bold"
              style={{
                width: 16, height: 16,
                background: AVATAR_COLORS[i % AVATAR_COLORS.length],
                color: '#fffdf6',
                border: '1.5px solid #fffdf6',
              }}
            >
              {w}
            </span>
          ))}
        </div>
        {card.due && (
          <span className="text-[9px]" style={{ color: '#7a6d55' }}>
            {card.due}
          </span>
        )}
      </div>
    </div>
  )
}

const AVATAR_COLORS = ['#c2410c', '#0f766e', '#7c3aed', '#be185d', '#1d4ed8']

const COLUMNS = [
  {
    label: 'To Do',
    accent: '#b45309',
    cards: [
      { title: 'Write landing copy',     tag: 'copy',     who: ['R'],         due: 'Jun 2' },
      { title: 'Pick launch playlist',   tag: 'fun',      who: ['R', 'M'],    due: 'Jun 3' },
      { title: 'Buy domain',             tag: undefined,  who: ['M'],         due: undefined },
    ],
  },
  {
    label: 'Doing',
    accent: '#1d4ed8',
    cards: [
      { title: 'Build hero animation',   tag: 'design',   who: ['R'],         due: 'today' },
      { title: 'Wire payment form',      tag: 'eng',      who: ['M', 'A'],    due: undefined },
    ],
  },
  {
    label: 'Done',
    accent: '#15803d',
    cards: [
      { title: 'Set up analytics',       tag: 'eng',      who: ['A'],         due: undefined },
      { title: 'Brand guide v1',         tag: 'design',   who: ['R', 'M'],    due: undefined },
      { title: 'Pick a name',            tag: 'fun',      who: ['R', 'M', 'A'], due: undefined },
    ],
  },
] as const
