import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Aesthetic: brutalist editorial — bone-white surface, heavy black borders
 * and offset shadows, oversized chunky display type. Deliberate contrast
 * to all the dark/glass examples in the set.
 */

type Post = { userId: number; id: number; title: string; body: string }

const USERS = [1, 2, 3, 4] as const
type UserId = typeof USERS[number]

export default function Example() {
  const [user, setUser] = useState<UserId>(1)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<Post[]>
      })
      .then((p) => { if (!cancelled) setPosts(p.slice(0, 4)) })
      .catch((e) => { if (!cancelled) setError(e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [user])

  return (
    <div
      className="w-full max-w-[400px] p-4"
      style={{
        background: '#f4ede0',
        border: '2px solid #0a0a0a',
        boxShadow: '6px 6px 0 #0a0a0a',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-3 pb-2" style={{ borderBottom: '2px solid #0a0a0a' }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold m-0" style={{ color: '#0a0a0a', fontFamily: '"JetBrains Mono", monospace' }}>
            GET /posts
          </p>
          <h3
            className="m-0 text-xl font-black leading-none"
            style={{
              color: '#0a0a0a',
              fontFamily: '"Archivo Black", "Inter", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            FEED.json
          </h3>
        </div>
        <span className="text-[10px] font-bold uppercase" style={{ color: '#0a0a0a' }}>
          [{loading ? '...' : posts.length}]
        </span>
      </div>

      {/* User filter chips */}
      <div className="flex gap-1.5 mb-3">
        {USERS.map((u) => (
          <button
            key={u}
            onClick={() => setUser(u)}
            className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider cursor-pointer"
            style={{
              background: user === u ? '#0a0a0a' : 'transparent',
              color:      user === u ? '#f4ede0' : '#0a0a0a',
              border: '1.5px solid #0a0a0a',
            }}
          >
            user/{u}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5" style={{ minHeight: 280 }}>
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="err"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-3 text-xs font-bold"
              style={{ background: '#fb2929', color: '#f4ede0', border: '2px solid #0a0a0a' }}
            >
              ⚠ FAILED: {error}
            </motion.div>
          ) : loading ? (
            <SkelList key="loading" />
          ) : (
            posts.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ x: 2 }}
                className="p-2.5 cursor-pointer"
                style={{
                  background: '#fffdf6',
                  border: '1.5px solid #0a0a0a',
                  boxShadow: '3px 3px 0 #0a0a0a',
                }}
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className="font-black text-2xl leading-none shrink-0"
                    style={{
                      color: '#fb2929',
                      fontFamily: '"Archivo Black", "Inter", sans-serif',
                      WebkitTextStroke: '0.5px #0a0a0a',
                    }}
                  >
                    {String(p.id).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className="m-0 text-xs font-bold leading-tight mb-0.5 truncate"
                      style={{ color: '#0a0a0a' }}
                    >
                      {p.title}
                    </p>
                    <p className="m-0 text-[10.5px] leading-snug" style={{ color: '#3a3a3a' }}>
                      {p.body.slice(0, 80)}…
                    </p>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SkelList() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-2.5">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="p-2.5" style={{ border: '1.5px solid #0a0a0a', background: '#fffdf6' }}>
          <div className="flex gap-2.5 items-center">
            <div className="jp-skel h-7 w-7" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="jp-skel h-3" style={{ width: '70%' }} />
              <div className="jp-skel h-2.5" style={{ width: '95%' }} />
            </div>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes jpShim { 0%,100% { opacity: 0.5 } 50% { opacity: 1 } }
        .jp-skel { background: #d8d2c1; animation: jpShim 1.1s ease-in-out infinite; }
      `}</style>
    </motion.div>
  )
}
