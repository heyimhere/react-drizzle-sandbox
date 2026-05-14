import { useState } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type CreatedResult = {
  user: { id: number; name: string; email: string; createdAt: string }
  post: { id: number; userId: number; title: string; body: string; createdAt: string }
}

function NewUserWithPostApp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [result, setResult] = useState<CreatedResult | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${API}/transactions/user-with-post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), title: title.trim(), body: body.trim() }),
      })
      const data = await res.json() as Partial<CreatedResult> & { error?: string }
      if (!res.ok) throw new Error(data.error ?? `${res.status}`)
      if (data.user && data.post) {
        setResult(data as CreatedResult)
        setName(''); setEmail(''); setTitle(''); setBody('')
      } else {
        setError('Route stub not yet implemented — open server/src/routes/transactions.ts')
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Request failed')
    } finally {
      setSubmitting(false)
    }
  }

  if (result) {
    return (
      <div className="max-w-md flex flex-col gap-4">
        <div className="rounded-lg px-4 py-4" style={{ background: 'var(--code-bg)', border: '1px solid #22c55e40' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#22c55e' }}>User created</p>
          <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{result.user.name}</p>
          <p className="text-xs" style={{ color: 'var(--text)' }}>{result.user.email}</p>
          <p className="text-xs" style={{ color: 'var(--text)' }}>id: {result.user.id}</p>
        </div>
        <div className="rounded-lg px-4 py-4" style={{ background: 'var(--code-bg)', border: '1px solid #22c55e40' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#22c55e' }}>Post created</p>
          <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{result.post.title}</p>
          {result.post.body && <p className="text-xs" style={{ color: 'var(--text)' }}>{result.post.body}</p>}
          <p className="text-xs" style={{ color: 'var(--text)' }}>id: {result.post.id} · userId: {result.post.userId}</p>
        </div>
        <p className="text-xs" style={{ color: 'var(--text)' }}>
          Both rows were inserted in a single transaction. If either insert had failed, neither row would exist.
        </p>
        <button
          onClick={() => setResult(null)}
          className="px-4 py-2 rounded-lg text-sm font-medium self-start"
          style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
        >
          Create another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-5">
      {error && (
        <div
          className="flex items-center justify-between px-4 py-3 rounded-lg text-sm"
          style={{ background: '#450a0a', border: '1px solid #dc2626', color: '#fca5a5' }}
        >
          <span>{error}</span>
          <button type="button" onClick={() => setError(null)} style={{ cursor: 'pointer' }}>✕</button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>User info</p>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          required
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>First post</p>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post title"
          required
          className="px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Post body (optional)"
          rows={3}
          className="px-3 py-2 rounded-lg text-sm outline-none resize-none"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="px-4 py-2 rounded-lg text-sm font-medium text-white disabled:opacity-50 self-start"
        style={{ background: 'var(--accent)', cursor: 'pointer' }}
      >
        {submitting ? 'Creating…' : 'Create User + Post'}
      </button>
    </form>
  )
}

export default function NewUserWithPost() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="New User + Post — Transaction"
      difficulty="Advanced"
      description="A transaction groups multiple database operations into a single atomic unit — all succeed or all are rolled back. Without a transaction, if the user insert succeeded but the post insert failed (e.g. due to a validation error), you would have a dangling user with no first post. db.transaction() prevents this: either both rows exist, or neither does."
      whatToBuild="Implement POST /transactions/user-with-post in server/src/routes/transactions.ts. Wrap two inserts in db.transaction(async (tx) => { ... }). Use tx.insert() (not db.insert()) inside the callback. Return { user, post } on success. Throw an error inside the transaction to verify rollback: check that neither row was inserted."
      keyConcepts={['db.transaction()', 'tx (transaction client)', 'ACID', 'rollback', 'atomicity']}
      workspaceFile="server/src/routes/transactions.ts"
      workspaceFiles={['client/src/exercises/e2e/NewUserWithPost.tsx']}
      hints={[
        'const result = await db.transaction(async (tx) => { const [user] = await tx.insert(users).values({ name, email }).returning(); const [post] = await tx.insert(posts).values({ userId: user.id, title, body }).returning(); return { user, post }; });',
        'Inside the transaction callback, always use tx, not db. tx is a transaction-scoped client that knows about the open transaction. Using db inside the callback would run outside the transaction.',
        'To test rollback: add throw new Error("deliberate") between the two inserts. Submit the form — you should get an error and neither the user nor the post should appear in the database.',
        'db.transaction() re-throws any error thrown inside the callback after rolling back. Wrap the whole thing in try/catch in the route handler and return 500 with the error message.',
      ]}
    >
      <NewUserWithPostApp />
    </ExercisePage>
  )
}
