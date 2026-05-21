import { useEffect, useState } from 'react'
import ExercisePage from '../../components/ExercisePage'

type GithubUser = {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  followers: number
  html_url: string
}

type SearchState =
  | { status: 'loading' }
  | { status: 'success'; user: GithubUser; query: string }
  | { status: 'notfound'; query: string }
  | { status: 'error'; query: string }

function GithubUserCard() {
  const [username, setUsername] = useState('')
  const [search, setSearch] = useState<SearchState>({ status: 'loading' })

  const trimmed = username.trim()

  useEffect(() => {
    if (trimmed === '') return

    const controller = new AbortController()

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        })

        if (res.status === 404) {
          setSearch({ status: 'notfound', query: trimmed })
          return
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const user = (await res.json()) as GithubUser
        setSearch({ status: 'success', user, query: trimmed })
      } catch (err) {
        // AbortError fires when the next keystroke cancels this request — not a real failure.
        if (err instanceof Error && err.name === 'AbortError') return
        setSearch({ status: 'error', query: trimmed })
      }
    }, 500)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [trimmed])

  // Derive the visible state. A stored result is only valid for its own query —
  // if the input has changed since, treat it as loading.
  const view: 'idle' | 'loading' | 'success' | 'notfound' | 'error' =
    trimmed === ''
      ? 'idle'
      : 'query' in search && search.query === trimmed
        ? search.status
        : 'loading'

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="gh-username"
          className="text-sm font-medium"
          style={{ color: 'var(--text-h)' }}
        >
          GitHub username
        </label>
        <input
          id="gh-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. gaearon"
          autoComplete="off"
          spellCheck={false}
          className="px-3 py-2 rounded-lg text-sm outline-none focus:ring-2"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border)',
            color: 'var(--text-h)',
          }}
        />
      </div>

      <div
        className="rounded-xl p-4 min-h-[6rem] flex items-center"
        style={{ background: 'var(--code-bg)', border: '1px solid var(--border)' }}
      >
        {view === 'idle' && (
          <p className="text-sm" style={{ color: 'var(--text)' }}>
            Type a GitHub username to look them up.
          </p>
        )}

        {view === 'loading' && (
          <div className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded-full animate-spin"
              style={{ border: '2px solid var(--border)', borderTopColor: 'var(--accent)' }}
              role="status"
              aria-label="Loading"
            />
            <span className="text-sm" style={{ color: 'var(--text)' }}>
              Searching…
            </span>
          </div>
        )}

        {view === 'notfound' && (
          <p className="text-sm" style={{ color: 'var(--text)' }}>
            No user named <code>{trimmed}</code>.
          </p>
        )}

        {view === 'error' && (
          <p className="text-sm" style={{ color: 'var(--text)' }}>
            Something went wrong. Try again.
          </p>
        )}

        {view === 'success' && search.status === 'success' && (
          <div className="flex gap-4 items-start w-full">
            <img
              src={search.user.avatar_url}
              alt={`${search.user.login}'s avatar`}
              width={56}
              height={56}
              className="rounded-full"
              style={{ border: '1px solid var(--border)' }}
            />
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-base font-semibold" style={{ color: 'var(--text-h)' }}>
                  {search.user.name ?? search.user.login}
                </span>
                <a
                  href={search.user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs"
                  style={{ color: 'var(--accent)' }}
                >
                  @{search.user.login}
                </a>
              </div>
              {search.user.bio && (
                <p className="text-sm leading-snug" style={{ color: 'var(--text)' }}>
                  {search.user.bio}
                </p>
              )}
              <p className="text-xs" style={{ color: 'var(--text)' }}>
                {search.user.followers.toLocaleString()} followers
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function UseEffect() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useEffect"
      difficulty="Beginner"
      description="useEffect lets you synchronize a component with an external system — a server, a timer, the DOM. It runs after render and accepts a cleanup function that runs before the next effect or on unmount. The dependency array controls when it re-runs."
      whatToBuild="A GitHub user profile card. The user types a username into an input (debounced 500ms). While they type, a previous request in-flight is cancelled. When the debounce settles, fetch from the GitHub API and display the user's avatar, name, bio, and follower count. Show a spinner while loading and a 'User not found' message on a 404."
      keyConcepts={['useEffect', 'AbortController', 'cleanup', 'dependency array', 'async fetch', 'AbortError']}
      workspaceFile="client/src/exercises/react/UseEffect.tsx"
      hints={[
        'Create an AbortController inside the effect, pass its signal to fetch(), and return () => controller.abort() as cleanup. When the username changes, React runs cleanup before the next effect — cancelling the previous request automatically.',
        'Wrap the fetch in try/catch. If error.name === "AbortError", ignore it — that is an intentional cancellation, not a real error. Only set the error state for genuine failures like a 404.',
        'Implement debouncing inside the effect with a timeout: const t = setTimeout(doFetch, 500). Return () => clearTimeout(t) as cleanup alongside the abort. Both cleanups run on each re-render.',
        'The dependency array should be [username]. An empty [] runs only on mount. Omitting the array runs on every render. Never put the fetch function itself in the array — define it inside the effect where it has access to the current username.',
      ]}
    >
      <GithubUserCard />
    </ExercisePage>
  )
}
