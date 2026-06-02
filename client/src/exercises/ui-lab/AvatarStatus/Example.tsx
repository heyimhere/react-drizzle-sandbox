type Status = 'online' | 'idle' | 'busy' | 'offline'

const people: { name: string; initials: string; status: Status; color: string; role: string }[] = [
  { name: 'Ana Ortiz',  initials: 'AO', status: 'online',  color: '#ffafcc', role: 'designer'   },
  { name: 'Lior Cohen', initials: 'LC', status: 'idle',    color: '#a0e7e5', role: 'engineer'   },
  { name: 'Maya Park',  initials: 'MP', status: 'busy',    color: '#fdfd96', role: 'pm'         },
  { name: 'Jonas Vey',  initials: 'JV', status: 'offline', color: '#cdb4db', role: 'researcher' },
]

const statusColor: Record<Status, string> = {
  online:  '#3ddc84',
  idle:    '#ffd166',
  busy:    '#ef476f',
  offline: '#b0b5be',
}

const SURFACE = '#fff5fa'

export default function Example() {
  return (
    <div
      className="w-full max-w-[340px] p-6 flex flex-col gap-4"
      style={{
        background: SURFACE,
        border: '2px solid #2a1a2f',
        borderRadius: 28,
        boxShadow: '6px 6px 0 #2a1a2f, 0 30px 60px -30px rgba(255, 100, 200, 0.5)',
      }}
    >
      <div className="flex items-center justify-between">
        <h2
          className="m-0"
          style={{ fontFamily: '"Bricolage Grotesque", system-ui, sans-serif', fontWeight: 700, color: '#2a1a2f', fontSize: 20, letterSpacing: -0.5 }}
        >
          ✿ Online now
        </h2>
        <span
          className="text-xs font-bold px-2 py-0.5"
          style={{ background: '#2a1a2f', color: '#fff', borderRadius: 9999, fontFamily: '"Bricolage Grotesque", sans-serif' }}
        >
          {people.filter(p => p.status === 'online').length}/{people.length}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {people.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 p-2.5"
            style={{ background: '#fff', border: '1.5px solid #2a1a2f', borderRadius: 20 }}
          >
            <div className="relative shrink-0">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 42, height: 42,
                  background: p.color,
                  border: '1.5px solid #2a1a2f',
                  borderRadius: '50% 50% 50% 12px',
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontWeight: 700,
                  color: '#2a1a2f',
                  fontSize: 14,
                }}
              >
                {p.initials}
              </div>
              <span
                className="absolute bottom-0 right-0 rounded-full"
                style={{
                  width: 14, height: 14,
                  background: statusColor[p.status],
                  boxShadow: '0 0 0 2.5px ' + SURFACE,
                  border: '1px solid #2a1a2f',
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm leading-none"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, color: '#2a1a2f' }}
              >
                {p.name}
              </div>
              <div
                className="text-[11px] mt-1"
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif', color: '#9583a0' }}
              >
                {p.role} · <span className="capitalize">{p.status}</span>
              </div>
            </div>
            <span
              className="text-[10px] px-2 py-0.5"
              style={{
                background: statusColor[p.status] + '33',
                color: '#2a1a2f',
                border: `1px solid ${statusColor[p.status]}`,
                borderRadius: 9999,
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontWeight: 700,
              }}
            >
              {p.status === 'online' ? '●' : p.status === 'idle' ? '◐' : p.status === 'busy' ? '◯' : '·'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
