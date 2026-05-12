import ExercisePage from '../../components/ExercisePage'

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
      {/* Your code goes here */}
    </ExercisePage>
  )
}
