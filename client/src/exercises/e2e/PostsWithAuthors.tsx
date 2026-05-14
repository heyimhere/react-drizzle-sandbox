import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type User = { id: number; name: string; email: string }
type PostWithAuthor = {
  post: { id: number; title: string; body: string; userId: number; createdAt: string }
  author: { name: string; email: string }
}

function PostsApp() {
  const [posts, setPosts] = useState<PostWithAuthor[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [titleInput, setTitle] = useState('')
  const [bodyInput, setBody] = useState('')
  const [authorId, setAuthorId] = useState<number | ''>('')
  const [submitting, setSubmitting] = useState(false)

  async function loadPosts() {
    const res = await fetch(`${API}/posts/with-authors`)
    if (!res.ok) throw new Error(`${res.status}`)
    return res.json() as Promise<PostWithAuthor[]>
  }

  async function loadUsers() {
    const res = await fetch(`${API}/users`)
    if (!res.ok) throw new Error(`${res.status}`)
    return res.json() as Promise<User[]>
  }

  useEffect(() => {
    Promise.all([loadPosts(), loadUsers()])
      .then(([p, u]) => { setPosts(p); setUsers(u) })
      .catch(e => setError(e instanceof Error ? e.message : 'Failed to load'))
      .finally(() => setLoading(false))
  }, [])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    if (!authorId) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${API}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: titleInput.trim(), body: bodyInput.trim(), userId: authorId }),
      })
      if (!res.ok) {
        const data = await res.json() as { error?: string }
        throw new Error(data.error ?? `${res.status}`)
      }
      setTitle('')
      setBody('')
      setAuthorId('')
      setPosts(await loadPosts())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create post')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-lg flex flex-col gap-5">
      {error && (
        <div
          className="flex items-center justify-between px-4 py-3 rounded-lg text-sm"
          style={{ background: '#450a0a', border: '1px solid #dc2626', color: '#fca5a5' }}
        >
          <span>{error}</span>
          <button onClick={() => setError(null)} style={{ cursor: 'pointer' }}>✕</button>
        </div>
      )}

      <form onSubmit={handleCreate} className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Create post</p>
        <input
          value={titleInput}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <textarea
          value={bodyInput}
          onChange={e => setBody(e.target.value)}
          placeholder="Body (optional)"
          rows={2}
          className="px-3 py-2 rounded-lg text-sm outline-none resize-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <div className="flex gap-2">
          <select
            value={authorId}
            onChange={e => setAuthorId(e.target.value ? Number(e.target.value) : '')}
            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: authorId ? 'var(--text-h)' : 'var(--text)' }}
          >
            <option value="">Select author…</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
          <button
            type="submit"
            disabled={submitting || !titleInput.trim() || !authorId}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white disabled:opacity-50"
            style={{ background: 'var(--accent)', cursor: 'pointer' }}
          >
            Post
          </button>
        </div>
        {users.length === 0 && !loading && (
          <p className="text-xs" style={{ color: 'var(--text)' }}>
            No users yet — implement GET /users and POST /users (Exercise 2) first.
          </p>
        )}
      </form>

      {loading ? (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>Loading…</div>
      ) : posts.length === 0 ? (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>
          No posts yet — implement GET /posts/with-authors and POST /posts first.
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {posts.map(({ post, author }) => (
            <li
              key={post.id}
              className="rounded-lg px-4 py-3"
              style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
            >
              <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{post.title}</p>
              {post.body && (
                <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>
                  {post.body.length > 100 ? post.body.slice(0, 100) + '…' : post.body}
                </p>
              )}
              <p className="text-xs mt-2" style={{ color: 'var(--accent)' }}>
                by {author.name} · {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function PostsWithAuthors() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Posts + Authors — JOIN"
      difficulty="Intermediate"
      description="Join two tables at the database level and render the combined result in React. GET /posts/with-authors returns posts with the author's name embedded — that shape comes from Drizzle's namespaced select, not from two separate fetches. POST /posts inserts a post with a userId foreign key, which means the author must exist first."
      whatToBuild="Implement GET /posts/with-authors using an innerJoin and POST /posts to insert a post with a userId FK. The GET route must return an array of { post: {...}, author: { name, email } } objects. The React component sends the author dropdown's selected id as userId. Complete Exercise 2 (Users) first — you need existing users to populate the author dropdown."
      keyConcepts={['innerJoin', 'eq()', 'namespaced select', 'FK insert', 'Promise.all', 'dependent fetch']}
      workspaceFile="server/src/routes/posts.ts"
      workspaceFiles={['client/src/exercises/e2e/PostsWithAuthors.tsx']}
      hints={[
        'Inner join: db.select({ post: posts, author: { name: users.name, email: users.email } }).from(posts).innerJoin(users, eq(posts.userId, users.id)). The namespaced select object gives each row the shape { post: {...}, author: {...} } — no column name collisions.',
        'The column linking posts to users is posts.userId (not posts.authorId — that column does not exist). The join condition is eq(posts.userId, users.id).',
        'POST /posts body shape: { title, body, userId }. Insert: db.insert(posts).values({ title, body, userId }).returning(). If userId references a non-existent user, Postgres throws a FK violation — catch it and return 400.',
        'React fires two fetches in parallel on mount: Promise.all([fetch(/posts/with-authors), fetch(/users)]). This ensures the author dropdown is populated at the same time as the post list.',
      ]}
    >
      <PostsApp />
    </ExercisePage>
  )
}
