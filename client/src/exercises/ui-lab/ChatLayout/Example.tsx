import { useState } from 'react'

type Message = { id: number; from: 'me' | 'them'; text: string; time: string }

const initial: Message[] = [
  { id: 1, from: 'them', text: 'is the landing ready for review?', time: '10:14' },
  { id: 2, from: 'me',   text: 'fixing the hero spacing now ✨',   time: '10:15' },
  { id: 3, from: 'them', text: 'no rush 💕',                       time: '10:15' },
  { id: 4, from: 'me',   text: 'pushing in ~5',                    time: '10:16' },
]

const convos = [
  { name: 'Ana',    preview: 'no rush 💕',     unread: 0, color: '#ffafcc' },
  { name: 'Design', preview: 'v3 review',      unread: 3, color: '#a0e7e5' },
  { name: 'Lior',   preview: 'sent brief',     unread: 1, color: '#fdfd96' },
  { name: 'Maya',   preview: 'thanks!',        unread: 0, color: '#cdb4db' },
]

const BG = '#fef3f9'
const INK = '#2a1a2f'

export default function Example() {
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState(initial)

  function send() {
    if (!draft.trim()) return
    setMessages((m) => [...m, { id: Date.now(), from: 'me', text: draft.trim(), time: '10:17' }])
    setDraft('')
  }

  return (
    <div
      className="w-full max-w-[460px] grid overflow-hidden"
      style={{
        background: BG,
        border: `2px solid ${INK}`,
        borderRadius: 28,
        gridTemplateColumns: '130px 1fr',
        height: 430,
        boxShadow: `8px 8px 0 ${INK}`,
      }}
    >
      <aside className="flex flex-col" style={{ background: '#fff5fa', borderRight: `2px solid ${INK}` }}>
        <p
          className="text-[10px] tracking-widest uppercase p-3 pb-2"
          style={{ fontFamily: '"Bricolage Grotesque", sans-serif', color: '#9583a0', fontWeight: 700 }}
        >
          ✿ chats
        </p>
        <div className="flex-1 overflow-y-auto px-2 pb-2 flex flex-col gap-1.5">
          {convos.map((c, i) => (
            <button
              key={c.name}
              type="button"
              className="w-full text-left flex items-center gap-2 px-2 py-2"
              style={{
                background: i === 0 ? '#fff' : 'transparent',
                border: `1.5px solid ${i === 0 ? INK : 'transparent'}`,
                borderRadius: 14,
              }}
            >
              <div
                className="flex items-center justify-center text-[10px] font-bold"
                style={{
                  width: 28, height: 28,
                  background: c.color,
                  border: `1.5px solid ${INK}`,
                  borderRadius: '50% 50% 50% 10px',
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  color: INK,
                }}
              >
                {c.name.slice(0, 1)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs truncate" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 600, color: INK }}>{c.name}</div>
                <div className="text-[10px] truncate" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', color: '#9583a0' }}>{c.preview}</div>
              </div>
              {c.unread > 0 && (
                <span
                  className="text-[9px] font-bold w-4 h-4 flex items-center justify-center"
                  style={{ background: '#ff5db1', color: '#fff', borderRadius: 9999, fontFamily: '"Bricolage Grotesque", sans-serif' }}
                >
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </aside>

      <section className="flex flex-col">
        <header className="px-4 py-3 flex items-center gap-2.5" style={{ borderBottom: `2px solid ${INK}`, background: '#fff' }}>
          <div
            className="flex items-center justify-center text-[10px] font-bold"
            style={{ width: 28, height: 28, background: '#ffafcc', border: `1.5px solid ${INK}`, borderRadius: '50% 50% 50% 10px', fontFamily: '"Bricolage Grotesque", sans-serif', color: INK }}
          >
            A
          </div>
          <div className="flex-1">
            <div className="text-xs" style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 700, color: INK }}>Ana</div>
            <div className="text-[10px]" style={{ color: '#3ddc84', fontFamily: '"Bricolage Grotesque", sans-serif' }}>● online</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[75%] px-3 py-2 text-xs"
                style={{
                  background: m.from === 'me' ? '#ff5db1' : '#fff',
                  color: m.from === 'me' ? '#fff' : INK,
                  border: `1.5px solid ${INK}`,
                  borderRadius: m.from === 'me' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontWeight: 500,
                }}
              >
                {m.text}
                <div className="text-[9px] mt-0.5 opacity-70">{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); send() }}
          className="flex items-center gap-2 p-3"
          style={{ borderTop: `2px solid ${INK}`, background: '#fff' }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="say something nice"
            className="flex-1 px-3 py-2 text-xs outline-none"
            style={{ background: '#fff5fa', border: `1.5px solid ${INK}`, borderRadius: 14, color: INK, fontFamily: '"Bricolage Grotesque", sans-serif' }}
          />
          <button
            type="submit"
            className="px-3 py-2 text-xs font-bold"
            style={{ background: '#ff5db1', color: '#fff', border: `1.5px solid ${INK}`, borderRadius: 14, fontFamily: '"Bricolage Grotesque", sans-serif' }}
          >
            send →
          </button>
        </form>
      </section>
    </div>
  )
}
