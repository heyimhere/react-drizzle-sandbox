import { useState, useEffect } from 'react'
import ExercisePage from '../../components/ExercisePage'

const API = 'http://localhost:3001'

type PostsPerUser = { userId: number; name: string; count: number }
type Stats = { userCount: number; postCount: number; postsPerUser: PostsPerUser[] }

function DashboardApp() {
  const [stats, setStats] = useState<Stats>({ userCount: 0, postCount: 0, postsPerUser: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API}/stats`)
      .then(r => {
        if (!r.ok) throw new Error(`${r.status}`)
        return r.json()
      })
      .then((data: Stats) => setStats(data))
      .catch(e => setError(e instanceof Error ? e.message : 'Failed to load stats'))
      .finally(() => setLoading(false))
  }, [])

  const avg = stats.userCount > 0
    ? (stats.postCount / stats.userCount).toFixed(1)
    : '—'

  const maxCount = Math.max(...stats.postsPerUser.map(u => u.count), 1)

  if (loading) {
    return <div className="text-sm py-8 text-center" style={{ color: 'var(--text)' }}>Loading…</div>
  }

  return (
    <div className="max-w-lg flex flex-col gap-6">
      {error && (
        <div className="px-4 py-3 rounded-lg text-sm" style={{ background: '#450a0a', border: '1px solid #dc2626', color: '#fca5a5' }}>
          {error}
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Users', value: stats.userCount },
          { label: 'Total Posts', value: stats.postCount },
          { label: 'Avg Posts / User', value: avg },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg px-4 py-4 flex flex-col gap-1"
            style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
          >
            <span className="text-2xl font-bold tabular-nums" style={{ color: 'var(--accent)' }}>{value}</span>
            <span className="text-xs" style={{ color: 'var(--text)' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Posts per user */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
          Posts per user
        </p>
        {stats.postsPerUser.length === 0 ? (
          <div className="text-sm py-4 text-center" style={{ color: 'var(--text)' }}>
            No data yet — implement GET /stats, then add some users and posts.
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {stats.postsPerUser.map(u => (
              <li key={u.userId} className="flex items-center gap-3">
                <span className="text-sm w-32 truncate" style={{ color: 'var(--text-h)' }}>{u.name}</span>
                <div className="flex-1 rounded-full h-2 overflow-hidden" style={{ background: 'var(--border)' }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${(u.count / maxCount) * 100}%`, background: 'var(--accent)' }}
                  />
                </div>
                <span className="text-xs tabular-nums w-6 text-right" style={{ color: 'var(--text)' }}>{u.count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Stats Dashboard — Aggregates"
      difficulty="Intermediate"
      description="Aggregate queries reduce a table to a summary — count of rows, sum of values, grouped totals. Drizzle's count() helper generates COUNT(*) with full type safety, and the sql template tag lets you write typed aggregate expressions. This exercise builds a dashboard that shows real counts from your database."
      whatToBuild="Implement GET /stats in server/src/routes/stats.ts. Return { userCount, postCount, postsPerUser: [{userId, name, count}] }. Use db.select({ userCount: count() }).from(users) for counts. For postsPerUser, do a LEFT JOIN so users with 0 posts are included, use count(posts.id) grouped by userId, and join users to get names."
      keyConcepts={['count()', 'sql<number>', 'groupBy()', 'leftJoin', 'aggregate queries', 'Number() coercion']}
      workspaceFile="server/src/routes/stats.ts"
      workspaceFiles={['client/src/exercises/e2e/Dashboard.tsx']}
      hints={[
        'User count: const [{ userCount }] = await db.select({ userCount: count() }).from(users). count() returns sql<number> but Postgres delivers it as a string — coerce with Number(userCount).',
        'Posts per user with LEFT JOIN (includes users with 0 posts): db.select({ userId: users.id, name: users.name, count: sql<number>`count(${posts.id})` }).from(users).leftJoin(posts, eq(posts.userId, users.id)).groupBy(users.id, users.name)',
        'Sort by count descending: .orderBy(desc(sql`count(${posts.id})`)) — or sort in JavaScript with .sort((a, b) => b.count - a.count) after coercing count to Number.',
        'You need to import count and sql from drizzle-orm. The sql<number> generic annotation types the computed column in TypeScript, but the runtime value is still a string from pg — always wrap in Number().',
      ]}
    >
      <DashboardApp />
    </ExercisePage>
  )
}
