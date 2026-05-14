import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type User = { id: number; name: string; email: string; createdAt: string }
type Post = { id: number; title: string; body: string; createdAt: string }
type UserWithPosts = { user: User | null; posts: Post[] }

function UserPostsApp() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedId, setSelectedId] = useState<number | ''>('')
  const [data, setData] = useState<UserWithPosts>({ user: null, posts: [] })
  const [loading, setLoading] = useState(false)
  const [usersLoading, setUsersLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/users`)
      .then(r => r.json())
      .then((rows: User[]) => setUsers(rows))
      .finally(() => setUsersLoading(false))
  }, [])

  async function handleSelect(id: number | '') {
    setSelectedId(id)
    if (!id) { setData({ user: null, posts: [] }); return }
    setLoading(true)
    fetch(`${API}/users/${id}/posts`)
      .then(r => r.json())
      .then((d: UserWithPosts) => setData(d))
      .finally(() => setLoading(false))
  }

  return (
    <div className="max-w-lg flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
          Select a user
        </label>
        <select
          value={selectedId}
          onChange={e => handleSelect(e.target.value ? Number(e.target.value) : '')}
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: selectedId ? 'var(--text-h)' : 'var(--text)' }}
        >
          <option value="">
            {usersLoading ? 'Loading users…' : users.length === 0 ? 'No users — implement GET /users first' : 'Choose a user…'}
          </option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>

      {loading && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>Loading…</div>
      )}

      {!loading && !selectedId && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>Select a user to see their posts.</div>
      )}

      {!loading && selectedId && data.user && (
        <>
          <div
            className="rounded-lg px-4 py-3 flex flex-col gap-1"
            style={{ background: 'var(--code-bg)', border: '1px solid var(--accent-border, var(--border))' }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--text-h)' }}>{data.user.name}</p>
            <p className="text-xs" style={{ color: 'var(--text)' }}>{data.user.email}</p>
            <p className="text-xs" style={{ color: 'var(--text)' }}>
              Member since {new Date(data.user.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>
              Posts ({data.posts.length})
            </p>
            {data.posts.length === 0 ? (
              <div className="text-sm py-3 text-center" style={{ color: 'var(--text)' }}>
                This user has no posts yet.
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {data.posts.map(post => (
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
                    <p className="text-xs mt-1" style={{ color: 'var(--text)' }}>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <p className="text-xs p-3 rounded-lg" style={{ background: 'var(--accent-bg)', color: 'var(--text)', border: '1px solid var(--accent-border, var(--border))' }}>
            This route uses <code style={{ fontFamily: 'var(--mono)' }}>db.query.users.findFirst({'{'} with: {'{'} posts: true {'}'} {'}'})</code> — the Relations API. Compare with Exercise 3 which uses an explicit <code style={{ fontFamily: 'var(--mono)' }}>innerJoin</code>: the Relations API returns nested objects; joins return flat merged rows.
          </p>
        </>
      )}

      {!loading && selectedId && !data.user && (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>
          User not found — implement GET /users/:id/posts in users.ts.
        </div>
      )}
    </div>
  )
}

export default function UserPosts() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="User Posts — Relations API"
      difficulty="Intermediate"
      description="Drizzle has two ways to load related data: explicit joins (db.select().innerJoin()) and the Relations API (db.query). The Relations API uses the relations() config in schema.ts to know how tables connect, then returns nested JavaScript objects — no column aliasing, no flat-row reshaping. This exercise uses db.query to load a user with all their posts in one call."
      whatToBuild="Implement GET /users/:id/posts in server/src/routes/users.ts. Use db.query.users.findFirst({ where: eq(users.id, id), with: { posts: true } }). The result is a user object with a posts array already nested inside — destructure and reshape it into { user, posts } for the response."
      keyConcepts={['db.query', 'findFirst', 'with: { posts: true }', 'relations()', 'nested vs flat results']}
      workspaceFile="server/src/routes/users.ts"
      workspaceFiles={['client/src/exercises/e2e/UserPosts.tsx']}
      hints={[
        'db.query requires you to import schema into the drizzle connection. Check server/src/db/index.ts — it already passes { schema } to drizzle(), so db.query is available.',
        'const result = await db.query.users.findFirst({ where: eq(users.id, Number(req.params.id)), with: { posts: true } }). result is undefined if not found, or { id, name, email, createdAt, posts: [...] }.',
        'Reshape the result: const { posts, ...user } = result. Return res.json({ user, posts }). This matches what the React component expects.',
        'Compare with Exercise 3: the innerJoin returns Array<{ post, author }> — flat rows you reshape. db.query returns a single nested object. Neither is universally better — joins give you full SQL control, db.query gives you simpler code for simple relations.',
      ]}
    >
      <UserPostsApp />
    </ExercisePage>
  )
}
