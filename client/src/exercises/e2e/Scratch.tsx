import { useState, useEffect } from 'react';
type ScratchItem = { id: number; label: string; done: boolean };
const API = 'http://localhost:3001'

function Items() {
  const [items, setItems] = useState<ScratchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function loadItems() {
    try {
      setLoading(true);
      const res = await fetch(`${API}/scratch`);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      setItems(await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void loadItems() }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/scratch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label: input.trim() }),
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      setInput('');
      await loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add items');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggle(item: ScratchItem) {
    try {
      const res = await fetch(`${API}/scratch/${item.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: !item.done }),
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const updated: ScratchItem = await res.json();
      setItems(prev => prev.map(t => t.id === updated.id ? updated : t));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`${API}/scratch/${id}`, { method: 'DELETE' });
      if (res.status !== 204) throw new Error(`${res.status} ${res.statusText}`);
      setItems(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
    }
  }

  const done = items.filter(t => t.done).length;

  return (
    <div className="max-w-md flex flex-col gap-4">
      {error && (
        <div className="flex items-center justify-between px-4 py-3 rounded-lg text-sm"
          style={{ background: 'var(--red-bg, #450a0a)', border: '1px solid #dc2626', color: '#fca5a5' }}
        >
          <span>{error}</span>
          <button onClick={() => setError(null)} style={{ cursor: 'pointer', color: '#fca5a5' }}>x</button>
        </div>
      )}

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="New Item"
          className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
          style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', color: 'var(--text-h)' }}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{ background: 'var(--accent)', cursor: 'pointer' }}
        >
          {loading ? '...' : 'Add Item'}
        </button>
      </form>

      {loading ? (
        <div className="text-sm py-6 text-center" style={{ color: 'var(--text)' }}>Loading...</div>
      ) : items.length === 0 ? (
        <div className="text-sm py-6 text-center" style={{ color: 'var(--text)' }}>No Items yet - add one!</div>
      ) : (
        <>
          <p className="text-xs" style={{ color: 'var(--text)' }}>{done} / {items.length} done</p>
          <ul className="flex flex-col gap-2">
            {items.map(item => (
              <li
                key={item.id}
                className="flex items-center gap-3 px-4 py-3 rounded-lg"
                style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
              >
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => handleToggle(item)}
                  style={{ cursor: 'pointer', accentColor: 'var(--accent)' }}
                />
                <span
                  className="flex-1 text-sm"
                  style={{
                    color: item.done ? 'var(--text)' : 'var(--text-h)',
                    textDecoration: item.done ? 'line-through' : 'none',
                    opacity: item.done ? 0.5 : 1,
                  }}
                >
                  {item.label}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-xs px-2 py-1 roudned opacity-40 hover:opacity-100 transition-opacity"
                  style={{ color: '#f87171', cursor: 'pointer' }}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default function Scratch() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: 'var(--accent)' }}>
          End to End · Scratch
        </p>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text-h)' }}>
          Scratchpad
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>
          Free space — build whatever, wipe it whenever. Route: <code>server/src/routes/scratch.ts</code>
        </p>
      </div>

      {/* Your code goes here — API base is {API}/scratch */}
      <Items />
    </div>
  )
}
