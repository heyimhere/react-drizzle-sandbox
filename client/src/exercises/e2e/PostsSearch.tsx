import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'
const LIMIT = 5

type Post = { id: number; title: string; body: string; userId: number; createdAt: string }
type PagedResult = { data: Post[]; total: number; page: number; pages: number }

function PostsSearchApp() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [page, setPage] = useState(1)
  const [result, setResult] = useState<PagedResult>({ data: [], total: 0, page: 1, pages: 0 })
  const [loading, setLoading] = useState(false)

  // Debounce query, reset to page 1 on new search
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedQuery(query)
      setPage(1)
    }, 300)
    return () => clearTimeout(t)
  }, [query])

  // Fetch on debounced query or page change
  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: String(LIMIT) })
    if (debouncedQuery) params.set('q', debouncedQuery)
    fetch(`${API}/posts?${params.toString()}`)
      .then(r => r.json())
      .then((data: PagedResult) => setResult(data))
      .finally(() => setLoading(false))
  }, [debouncedQuery, page])

  return (
    <div className="max-w-lg flex flex-col gap-4">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search posts by title…"
        className="w-full px-3 py-2 rounded-lg text-sm outline-none"
        style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
      />

      <div className="relative min-h-[120px]">
        {loading && (
          <div
            className="absolute inset-0 rounded-lg flex items-center justify-center text-sm"
            style={{ background: 'var(--bg)', opacity: 0.7, color: 'var(--text)' }}
          >
            Searching…
          </div>
        )}

        {!loading && result.data.length === 0 ? (
          <div className="text-sm py-8 text-center" style={{ color: 'var(--text)' }}>
            {debouncedQuery
              ? `No posts match "${debouncedQuery}"`
              : 'Implement GET /posts with query param support to see results here.'}
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {result.data.map(post => (
              <li
                key={post.id}
                className="rounded-lg px-4 py-3"
                style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
              >
                <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{post.title}</p>
                {post.body && (
                  <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>
                    {post.body.length > 80 ? post.body.slice(0, 80) + '…' : post.body}
                  </p>
                )}
                <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text)' }}>
        <span>Page {result.page} of {result.pages || 0} · {result.total} result{result.total !== 1 ? 's' : ''}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage(p => p - 1)}
            disabled={page <= 1 || loading}
            className="px-3 py-1.5 rounded disabled:opacity-40"
            style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
          >
            ← Prev
          </button>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page >= result.pages || loading}
            className="px-3 py-1.5 rounded disabled:opacity-40"
            style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PostsSearch() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Posts Search — WHERE + Pagination"
      difficulty="Intermediate"
      description="Add search and pagination to a list endpoint. The route must read query params (q, page, limit), apply an optional ILIKE filter, fetch a page of results, count total matching rows, and return an envelope — not just an array. This is the most common list endpoint pattern in production apps."
      whatToBuild="Implement GET /posts in server/src/routes/posts.ts to handle three query params: q (ILIKE search on title), page (default 1), limit (default 10). Return { data, total, page, pages }. The total must be the full count of matching rows (before pagination) so the UI can render 'Page N of M'. Add items via Exercise 3 (Posts) first."
      keyConcepts={['ilike()', 'and()', 'count()', 'limit()', 'offset()', 'orderBy()', 'URLSearchParams', 'debounce']}
      workspaceFile="server/src/routes/posts.ts"
      workspaceFiles={['client/src/exercises/e2e/PostsSearch.tsx']}
      hints={[
        'Parse params: const q = req.query.q as string | undefined; const page = Number(req.query.page) || 1; const limit = Number(req.query.limit) || 10.',
        'Optional WHERE: const condition = q ? ilike(posts.title, `%${q}%`) : undefined. Then .where(condition) — Drizzle ignores undefined, so no condition is applied when q is absent.',
        'Count total matching rows with a separate query: const [{ total }] = await db.select({ total: count() }).from(posts).where(condition). This gives you the number without fetching all rows.',
        'Paginate: .orderBy(desc(posts.createdAt)).limit(limit).offset((page - 1) * limit). Return { data, total: Number(total), page, pages: Math.ceil(Number(total) / limit) }.',
      ]}
    >
      <PostsSearchApp />
    </ExercisePage>
  )
}
