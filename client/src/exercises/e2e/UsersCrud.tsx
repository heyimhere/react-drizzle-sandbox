import { useState, useEffect, useCallback } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type User = { id: number; name: string; email: string; createdAt: string }

function UsersApp() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')
  const [editEmail, setEditEmail] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const loadUsers = useCallback(async () => {
    try {
      const res = await fetch(`${API}/users`)
      if (!res.ok) throw new Error(`${res.status}`)
      setUsers(await res.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load users')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { void loadUsers() }, [loadUsers])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`${API}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput.trim(), email: emailInput.trim() }),
      })
      if (!res.ok) {
        const data = await res.json() as { error?: string }
        throw new Error(data.error ?? `${res.status}`)
      }
      setNameInput('')
      setEmailInput('')
      await loadUsers()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create user')
    } finally {
      setSubmitting(false)
    }
  }

  function startEdit(user: User) {
    setEditingId(user.id)
    setEditName(user.name)
    setEditEmail(user.email)
  }

  async function handleSaveEdit(id: number) {
    setError(null)
    try {
      const res = await fetch(`${API}/users/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editName.trim(), email: editEmail.trim() }),
      })
      if (!res.ok) {
        const data = await res.json() as { error?: string }
        throw new Error(data.error ?? `${res.status}`)
      }
      setEditingId(null)
      await loadUsers()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update user')
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`${API}/users/${id}`, { method: 'DELETE' })
      if (res.status !== 204) throw new Error(`${res.status}`)
      setDeleteConfirm(null)
      await loadUsers()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete user')
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
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>Add user</p>
        <div className="flex gap-2">
          <input
            value={nameInput}
            onChange={e => setNameInput(e.target.value)}
            placeholder="Name"
            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
          />
          <input
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
            placeholder="Email"
            type="email"
            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
          />
          <button
            type="submit"
            disabled={submitting || !nameInput.trim() || !emailInput.trim()}
            className="px-4 py-2 rounded-lg text-sm font-medium text-white disabled:opacity-50"
            style={{ background: 'var(--accent)', cursor: 'pointer' }}
          >
            Add
          </button>
        </div>
      </form>

      {loading ? (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>Loading…</div>
      ) : users.length === 0 ? (
        <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>No users yet — implement GET /users and POST /users first.</div>
      ) : (
        <ul className="flex flex-col gap-2">
          {users.map(user => (
            <li
              key={user.id}
              className="rounded-lg px-4 py-3 flex flex-col gap-2"
              style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
            >
              {editingId === user.id ? (
                <div className="flex flex-col gap-2">
                  <input
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    className="px-3 py-1.5 rounded text-sm outline-none"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
                  />
                  <input
                    value={editEmail}
                    onChange={e => setEditEmail(e.target.value)}
                    className="px-3 py-1.5 rounded text-sm outline-none"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSaveEdit(user.id)}
                      className="px-3 py-1 rounded text-xs font-medium text-white"
                      style={{ background: 'var(--accent)', cursor: 'pointer' }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-3 py-1 rounded text-xs"
                      style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : deleteConfirm === user.id ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm flex-1" style={{ color: '#fca5a5' }}>Delete {user.name}?</span>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-3 py-1 rounded text-xs font-medium"
                    style={{ background: '#dc2626', color: 'white', cursor: 'pointer' }}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="px-3 py-1 rounded text-xs"
                    style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-sm font-medium" style={{ color: 'var(--text-h)' }}>{user.name}</p>
                    <p className="text-xs" style={{ color: 'var(--text)' }}>{user.email}</p>
                    <p className="text-xs" style={{ color: 'var(--text)' }}>
                      Joined {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => startEdit(user)}
                    className="text-xs px-2 py-1 rounded"
                    style={{ border: '1px solid var(--border)', color: 'var(--text)', cursor: 'pointer' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(user.id)}
                    className="text-xs px-2 py-1 rounded"
                    style={{ color: '#f87171', border: '1px solid #dc262640', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function UsersCrud() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Users — CRUD + Constraints"
      difficulty="Beginner"
      description="Implement full CRUD for the users table. The React UI is provided — your job is server/src/routes/users.ts. When you implement each route correctly, the UI responds: the list populates, users appear after creation, edits persist, deletes remove the row. Pay special attention to the unique email constraint — when you try to create two users with the same email, Postgres throws an error that travels through Express 5's error handler and arrives in the UI as a readable message."
      whatToBuild="Implement all 5 routes in server/src/routes/users.ts: GET / (select all), POST / (insert + returning()), PATCH /:id (update + where + returning()), DELETE /:id (delete + where + 204). For each write route, use .returning() so you can see the inserted/updated row. Handle 404 on PATCH and DELETE when the row doesn't exist."
      keyConcepts={['db.select', 'db.insert', 'db.update', 'db.delete', '.returning()', 'eq()', 'unique constraint error']}
      workspaceFile="server/src/routes/users.ts"
      workspaceFiles={['client/src/exercises/e2e/UsersCrud.tsx']}
      hints={[
        'Select all: const rows = await db.select().from(users). The return type is automatically inferred as (typeof users.$inferSelect)[].',
        'Insert: const [created] = await db.insert(users).values({ name, email }).returning(). Destructure the first element — .returning() always returns an array even for single inserts.',
        'Update: const [updated] = await db.update(users).set({ name, email }).where(eq(users.id, Number(req.params.id))).returning(). If updated is undefined, send 404.',
        'Unique constraint: when a duplicate email is inserted, Postgres throws. Express 5 catches the async error and passes it to errorHandler.ts, which sends { error: err.message }. The React component reads data.error and shows it in the red banner.',
      ]}
    >
      <UsersApp />
    </ExercisePage>
  )
}
