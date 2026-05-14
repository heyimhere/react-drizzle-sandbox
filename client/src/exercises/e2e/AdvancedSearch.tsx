import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type SearchPost = {
  id: number
  title: string
  body: string
  userId: number
  createdAt: string
  authorName: string
}

function AdvancedSearchApp() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [results, setResults] = useState<SearchPost[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300)
    return () => clearTimeout(t)
  }, [query])

  useEffect(() => {
    if (!debouncedQuery) { setResults([]); return }
    setLoading(true)
    fetch(`${API}/posts/search?q=${encodeURIComponent(debouncedQuery)}`)
      .then(r => r.json())
      .then((data: SearchPost[]) => setResults(data))
      .finally(() => setLoading(false))
  }, [debouncedQuery])

  return (
    <div className="max-w-lg flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search post titles…"
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <p className="text-xs" style={{ color: 'var(--text)' }}>
          This route uses a Drizzle <code style={{ fontFamily: 'var(--mono)' }}>prepared statement</code> with the{' '}
          <code style={{ fontFamily: 'var(--mono)' }}>sql``</code> tag for ILIKE matching — the query plan is compiled once and reused.
        </p>
      </div>

      {loading && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>Searching…</div>
      )}

      {!loading && !debouncedQuery && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>
          Type to search posts by title.
        </div>
      )}

      {!loading && debouncedQuery && results.length === 0 && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>
          No posts match &ldquo;{debouncedQuery}&rdquo; — implement GET /posts/search first.
        </div>
      )}

      {!loading && results.length > 0 && (
        <ul className="flex flex-col gap-2">
          {results.map(post => (
            <li
              key={post.id}
              className="rounded-lg px-4 py-3"
              style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{post.title}</p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full shrink-0"
                  style={{ background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent-border, var(--border))' }}
                >
                  prepared
                </span>
              </div>
              {post.body && (
                <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>
                  {post.body.length > 100 ? post.body.slice(0, 100) + '…' : post.body}
                </p>
              )}
              <p className="text-xs mt-2" style={{ color: 'var(--accent)' }}>
                by {post.authorName} · {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function AdvancedSearch() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Advanced Search — Prepared Statements"
      difficulty="Advanced"
      description="Prepared statements compile a query plan once and reuse it for every execution — useful for queries that run frequently with different parameters. The sql template tag lets you write typed raw SQL inline with Drizzle's query builder, which you need here for the ILIKE pattern. This exercise combines both: a prepared statement that uses the sql tag."
      whatToBuild="Implement GET /posts/search?q= in server/src/routes/posts.ts as a prepared statement. Use ilike() or the sql template tag for the ILIKE filter, innerJoin users to get authorName, and .prepare('search_posts') to compile it. Call .execute({ q }) per request. Results should include authorName from the join."
      keyConcepts={['sql``', 'ilike()', 'placeholder()', '.prepare()', '.execute()', 'innerJoin', 'performance']}
      workspaceFile="server/src/routes/posts.ts"
      workspaceFiles={['client/src/exercises/e2e/AdvancedSearch.tsx']}
      hints={[
        'Basic approach with ilike(): import { ilike, placeholder } from "drizzle-orm". Then: const q = req.query.q as string. Use .where(ilike(posts.title, `%${q}%`)) — this is parameterized, safe from injection.',
        'Prepared statement: define outside the route handler (module-level) so it is compiled once: const searchPosts = db.select({...}).from(posts).innerJoin(...).where(ilike(posts.title, placeholder("q"))).prepare("search_posts"). In the handler: const rows = await searchPosts.execute({ q: `%${req.query.q}%` }).',
        'The authorName field comes from the join: db.select({ id: posts.id, title: posts.title, body: posts.body, userId: posts.userId, createdAt: posts.createdAt, authorName: users.name }).from(posts).innerJoin(users, eq(posts.userId, users.id))',
        'A module-level prepared statement runs at server startup. If the database is not connected when the module loads, it will throw. For a sandbox this is fine — but in production you would initialize prepared statements lazily or in a startup hook.',
      ]}
    >
      <AdvancedSearchApp />
    </ExercisePage>
  )
}
