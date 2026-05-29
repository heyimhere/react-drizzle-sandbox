import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Aesthetic: dark slate panel with a subtle dotted grid backdrop and a
 * sharp emerald accent. Drills real fetch — loading skeleton, error state,
 * success layout with stats.
 */

type GhUser = {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  location: string | null
  blog: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
}

export default function Example() {
  const [query, setQuery] = useState('raysilverstech')
  const [user, setUser] = useState<GhUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)
    fetch(`https://api.github.com/users/${query}`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status === 404 ? 'No such user.' : `Error ${r.status}`)
        return r.json() as Promise<GhUser>
      })
      .then((u) => { if (!cancelled) setUser(u) })
      .catch((e) => { if (!cancelled) { setError(e.message); setUser(null) } })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [query])

  return (
    <div
      className="w-full max-w-[380px] p-5 rounded-xl"
      style={{
        background: '#0c1117',
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(56, 211, 159, 0.06) 1px, transparent 0)',
        backgroundSize: '14px 14px',
        border: '1px solid #20272f',
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8)',
      }}
    >
      <SearchBar
        onSubmit={(v) => v.trim() && setQuery(v.trim())}
        loading={loading}
      />

      <div className="mt-4">
        <AnimatePresence mode="wait">
          {error ? (
            <ErrorPanel key="err" message={error} />
          ) : loading ? (
            <Skeleton key="loading" />
          ) : user ? (
            <UserCard key={user.login} user={user} />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

function SearchBar({ onSubmit, loading }: { onSubmit: (v: string) => void; loading: boolean }) {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit(value) }}
      className="flex gap-2 items-center"
    >
      <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md" style={{ background: '#161b22', border: '1px solid #20272f' }}>
        <span style={{ color: '#34d399' }}>$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="gh user lookup..."
          className="flex-1 bg-transparent outline-none text-[12px]"
          style={{ color: '#e6e9ef' }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-3 py-2 rounded-md text-[11px] font-bold uppercase tracking-wider cursor-pointer disabled:opacity-50"
        style={{ background: '#34d399', color: '#062926' }}
      >
        Fetch
      </button>
    </form>
  )
}

function UserCard({ user }: { user: GhUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-start gap-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="rounded-lg"
          style={{ width: 56, height: 56, border: '1px solid #20272f' }}
        />
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm font-bold truncate" style={{ color: '#e6e9ef', fontFamily: 'system-ui, sans-serif' }}>
            {user.name ?? user.login}
          </span>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-xs truncate"
            style={{ color: '#34d399' }}
          >
            @{user.login}
          </a>
          {user.bio && (
            <p className="text-[11px] mt-1 leading-snug" style={{ color: '#8b949e', fontFamily: 'system-ui, sans-serif' }}>
              {user.bio}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1.5 mt-4">
        <Stat label="repos"     value={user.public_repos} />
        <Stat label="followers" value={user.followers} />
        <Stat label="following" value={user.following} />
      </div>

      <div className="flex flex-col gap-1 mt-3 text-[10.5px]" style={{ color: '#8b949e' }}>
        {user.location && <Meta icon="📍" text={user.location} />}
        {user.blog &&     <Meta icon="🔗" text={user.blog} />}
      </div>
    </motion.div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center px-1 py-2 rounded" style={{ background: '#161b22', border: '1px solid #20272f' }}>
      <div className="text-base font-bold" style={{ color: '#34d399' }}>
        {value.toLocaleString()}
      </div>
      <div className="text-[9px] uppercase tracking-widest" style={{ color: '#6b7280' }}>{label}</div>
    </div>
  )
}

function Meta({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5 truncate">
      <span>{icon}</span>
      <span className="truncate">{text}</span>
    </div>
  )
}

function Skeleton() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="flex items-start gap-3">
        <div className="gh-skel rounded-lg shrink-0" style={{ width: 56, height: 56 }} />
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="gh-skel h-3 rounded" style={{ width: '50%' }} />
          <div className="gh-skel h-2.5 rounded" style={{ width: '30%' }} />
          <div className="gh-skel h-2.5 rounded mt-1" style={{ width: '90%' }} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="gh-skel h-12 rounded" />
        ))}
      </div>
      <style>{`
        @keyframes ghShimmer { 0%,100% { opacity: 0.5 } 50% { opacity: 1 } }
        .gh-skel { background: #161b22; animation: ghShimmer 1.2s ease-in-out infinite; }
      `}</style>
    </motion.div>
  )
}

function ErrorPanel({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="p-3 rounded-md text-xs"
      style={{
        background: 'rgba(248, 113, 113, 0.08)',
        border: '1px solid rgba(248, 113, 113, 0.3)',
        color: '#fca5a5',
      }}
    >
      <span style={{ color: '#f87171' }}>×</span> {message}
    </motion.div>
  )
}
