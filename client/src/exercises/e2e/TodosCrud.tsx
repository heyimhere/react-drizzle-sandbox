import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type Todo = { id: number; title: string; done: boolean; createdAt: string }

function TodosApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [input, setInput] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function loadTodos() {
    try {
      const res = await fetch(`${API}/todos`)
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      setTodos(await res.json())
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { void loadTodos() }, [])

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch(`${API}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input.trim() }),
      })
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      setInput('')
      await loadTodos()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to add todo')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleToggle(todo: Todo) {
    try {
      const res = await fetch(`${API}/todos/${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !todo.done }),
      })
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      const updated: Todo = await res.json()
      setTodos(prev => prev.map(t => t.id === updated.id ? updated : t))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update todo')
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`${API}/todos/${id}`, { method: 'DELETE' })
      if (res.status !== 204) throw new Error(`${res.status} ${res.statusText}`)
      setTodos(prev => prev.filter(t => t.id !== id))
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to delete todo')
    }
  }

  const done = todos.filter(t => t.done).length

  return (
    <div className="max-w-md flex flex-col gap-4">
      {error && (
        <div
          className="flex items-center justify-between px-4 py-3 rounded-lg text-sm"
          style={{ background: 'var(--red-bg, #450a0a)', border: '1px solid #dc2626', color: '#fca5a5' }}
        >
          <span>{error}</span>
          <button onClick={() => setError(null)} style={{ cursor: 'pointer', color: '#fca5a5' }}>✕</button>
        </div>
      )}

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New todo…"
          disabled={submitting}
          className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <button
          type="submit"
          disabled={submitting || !input.trim()}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white disabled:opacity-50"
          style={{ background: 'var(--accent)', cursor: 'pointer' }}
        >
          {submitting ? '…' : 'Add'}
        </button>
      </form>

      {loading ? (
        <div className="text-sm py-6 text-center" style={{ color: 'var(--text)' }}>Loading…</div>
      ) : todos.length === 0 ? (
        <div className="text-sm py-6 text-center" style={{ color: 'var(--text)' }}>No todos yet — add one above!</div>
      ) : (
        <>
          <p className="text-xs" style={{ color: 'var(--text)' }}>{done} / {todos.length} done</p>
          <ul className="flex flex-col gap-2">
            {todos.map(todo => (
              <li
                key={todo.id}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggle(todo)}
                  style={{ cursor: 'pointer', accentColor: 'var(--accent)' }}
                />
                <span
                  className="flex-1 text-sm"
                  style={{
                    color: todo.done ? 'var(--text)' : 'var(--text-h)',
                    textDecoration: todo.done ? 'line-through' : 'none',
                    opacity: todo.done ? 0.5 : 1,
                  }}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-xs px-2 py-1 rounded opacity-40 hover:opacity-100 transition-opacity"
                  style={{ color: '#f87171', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default function TodosCrud() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Todos — Full CRUD"
      difficulty="Beginner"
      description="This is the entry point for end-to-end practice. The server route is already fully implemented — your job is to read the code on both sides and understand exactly how a React component talks to an Express route that runs a Drizzle query. Every other exercise follows this same pattern, but with a skeleton route for you to fill in."
      whatToBuild="Study how this exercise works end-to-end: (1) the React component fetches GET /todos on mount; (2) the form POSTs to /todos; (3) the checkbox PATCHes /todos/:id; (4) the delete button calls DELETE /todos/:id. Then open server/src/routes/todos.ts and read the Drizzle queries. Understand the shape of data flowing in both directions before moving to Exercise 2."
      keyConcepts={['fetch', 'useEffect', 'useState', 'async/await', 'loadTodos()', 're-fetch on mutation']}
      workspaceFile="server/src/routes/todos.ts"
      workspaceFiles={['client/src/exercises/e2e/TodosCrud.tsx']}
      hints={[
        'The route is already done — run both servers (cd client && npm run dev / cd server && npm run dev) and this UI will show real todos immediately. Add a few and watch the database update.',
        'Notice the re-fetch pattern: handleAdd, handleToggle, and handleDelete all call loadTodos() after a successful mutation instead of manually patching the local state array. This keeps the UI in sync with the database truth.',
        'handleToggle is the exception — it uses a .map() optimistic update instead of re-fetching. Try changing it to call loadTodos() and notice the difference in responsiveness.',
        'Open Drizzle Studio (cd server && npm run db:studio) while you use this UI. Watch the todos table update in real time as you add, check, and delete items.',
      ]}
    >
      <TodosApp />
    </ExercisePage>
  )
}
