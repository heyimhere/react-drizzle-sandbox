import { useState, useEffect } from 'react';

type ScratchItem = { id: number; label: string; done: boolean };
type Filter = 'all' | 'done' | 'pending';

const API = 'http://localhost:3001';
const PAGE_SIZE = 5;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all',     label: 'ALL' },
  { key: 'done',    label: 'DONE' },
  { key: 'pending', label: 'PENDING' },
];

const EMPTY_MSG: Record<Filter, string> = {
  all:     'No items yet — add one above.',
  done:    'Nothing marked done yet.',
  pending: 'All caught up — nothing pending!',
};

function Items() {
  const [items,   setItems]   = useState<ScratchItem[]>([]);
  const [total,   setTotal]   = useState(0);
  const [page,    setPage]    = useState(0);
  const [loading, setLoading] = useState(true);
  const [input,   setInput]   = useState('');
  const [error,   setError]   = useState<string | null>(null);
  const [filter,  setFilter]  = useState<Filter>('all');

  // ─── Block 2 + 3: filter + pagination drive the query string ──────────────
  async function loadItems() {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filter === 'done')    params.set('done', 'true');
      if (filter === 'pending') params.set('done', 'false');
      params.set('limit',  String(PAGE_SIZE));
      params.set('offset', String(page * PAGE_SIZE));

      const res = await fetch(`${API}/scratch?${params}`);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const { rows, total } = await res.json() as { rows: ScratchItem[]; total: number };
      setItems(rows);
      setTotal(total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
    } finally {
      setLoading(false);
    }
  }

  // Re-fetch when filter or page changes.
  useEffect(() => { void loadItems(); }, [filter, page]);

  // Changing filter resets to page 0 — otherwise you might be on page 4
  // of a 1-page result set and see nothing.
  function changeFilter(f: Filter) {
    if (f === filter) return;
    setFilter(f);
    setPage(0);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
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
      // Jump back to page 0 — new item is newest, lives on page 0.
      // If page was already 0, the useEffect won't re-fire, so call loadItems manually.
      if (page === 0) await loadItems();
      else setPage(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
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
      // With pagination + filtering, always reload. A toggle can push an item
      // out of view (filter mismatch) and counts can shift across pages.
      await loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update item');
    }
  }

  async function handleDelete(id: number) {
    try {
      const res = await fetch(`${API}/scratch/${id}`, { method: 'DELETE' });
      if (res.status !== 204) throw new Error(`${res.status} ${res.statusText}`);
      // If we just deleted the last item on the current page, step back a page.
      if (items.length === 1 && page > 0) setPage(page - 1);
      else await loadItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
    }
  }

  // ─── Pagination math ──────────────────────────────────────────────────────
  const totalPages = Math.max(Math.ceil(total / PAGE_SIZE), 1);
  const rangeStart = total === 0 ? 0 : page * PAGE_SIZE + 1;
  const rangeEnd   = Math.min((page + 1) * PAGE_SIZE, total);
  const canPrev    = page > 0;
  const canNext    = page < totalPages - 1;

  return (
    <>
      <style>{`
        @keyframes itemIn {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scratch-item { animation: itemIn 0.16s ease both; }

        .page-btn {
          background: var(--code-bg); border: 1px solid var(--border);
          color: var(--text-h); cursor: pointer; padding: 0.35rem 0.7rem;
          border-radius: 6px; font-family: monospace; font-size: 0.75rem;
          font-weight: 600; transition: all 0.15s ease;
        }
        .page-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem', maxWidth: '28rem' }}>

        {/* ── Error banner ───────────────────────────────────────────── */}
        {error && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.65rem 1rem', borderRadius: '8px', fontSize: '0.8125rem',
            background: '#450a0a', border: '1px solid #dc2626', color: '#fca5a5',
          }}>
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fca5a5', fontSize: '1.1rem', lineHeight: 1, padding: '0 0.2rem' }}
            >×</button>
          </div>
        )}

        {/* ── Add form ───────────────────────────────────────────────── */}
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="New item..."
            style={{
              flex: 1, padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.875rem',
              background: 'var(--code-bg)', border: '1px solid var(--border)',
              color: 'var(--text-h)', outline: 'none', fontFamily: 'inherit',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 600,
              background: 'var(--accent)', color: '#fff', border: 'none',
              cursor: loading ? 'default' : 'pointer', opacity: loading ? 0.6 : 1,
              transition: 'opacity 0.15s', fontFamily: 'inherit',
            }}
          >{loading ? '···' : 'Add'}</button>
        </form>

        {/* ── Filter tabs ────────────────────────────────────────────── */}
        <div style={{
          display: 'inline-flex', gap: '2px', padding: '3px',
          background: 'var(--code-bg)', border: '1px solid var(--border)',
          borderRadius: '8px', alignSelf: 'flex-start',
        }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => changeFilter(f.key)}
              style={{
                padding: '0.275rem 0.8rem', borderRadius: '5px',
                fontSize: '0.6875rem', fontFamily: 'monospace',
                letterSpacing: '0.09em', fontWeight: 700,
                cursor: 'pointer', border: 'none', transition: 'all 0.15s ease',
                background: filter === f.key ? 'var(--accent)' : 'transparent',
                color:      filter === f.key ? '#fff'          : 'var(--text)',
              }}
            >{f.label}</button>
          ))}
        </div>

        {/* ── List ───────────────────────────────────────────────────── */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', fontSize: '0.875rem', color: 'var(--text)', fontFamily: 'monospace' }}>
            loading...
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', fontSize: '0.875rem', color: 'var(--text)' }}>
            {EMPTY_MSG[filter]}
          </div>
        ) : (
          <>
            {/* Range indicator: "1–5 of 23" */}
            <p style={{ fontSize: '0.75rem', color: 'var(--text)', fontFamily: 'monospace', margin: 0 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{rangeStart}–{rangeEnd}</span>
              {' of '}{total}
            </p>

            <ul key={`${filter}-${page}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {items.map((item, i) => (
                <li
                  key={item.id}
                  className="scratch-item"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.7rem 1rem', borderRadius: '8px',
                    background: 'var(--code-bg)', border: '1px solid var(--border)',
                    animationDelay: `${i * 0.04}s`,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => handleToggle(item)}
                    style={{ cursor: 'pointer', accentColor: 'var(--accent)', flexShrink: 0 }}
                  />
                  <span style={{
                    flex: 1, fontSize: '0.875rem',
                    color: item.done ? 'var(--text)' : 'var(--text-h)',
                    textDecoration: item.done ? 'line-through' : 'none',
                    opacity: item.done ? 0.45 : 1,
                    transition: 'all 0.2s ease',
                  }}>
                    {item.label}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.3')}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#f87171', fontSize: '1.1rem', lineHeight: 1,
                      opacity: 0.3, transition: 'opacity 0.15s', padding: '0 0.2rem',
                    }}
                  >×</button>
                </li>
              ))}
            </ul>

            {/* ── Pagination controls ────────────────────────────────── */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                <button
                  className="page-btn"
                  onClick={() => setPage(p => p - 1)}
                  disabled={!canPrev}
                >← prev</button>

                <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontFamily: 'monospace' }}>
                  page <span style={{ color: 'var(--text-h)', fontWeight: 600 }}>{page + 1}</span> of {totalPages}
                </span>

                <button
                  className="page-btn"
                  onClick={() => setPage(p => p + 1)}
                  disabled={!canNext}
                >next →</button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default function Scratch() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'monospace', margin: '0 0 0.25rem' }}>
          End to End · Scratch
        </p>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-h)', margin: 0 }}>
          Scratchpad
        </h1>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text)', margin: '0.5rem 0 0' }}>
          Free space — build whatever, wipe it whenever. Route: <code>server/src/routes/scratch.ts</code>
        </p>
      </div>
      <Items />
    </div>
  );
}
