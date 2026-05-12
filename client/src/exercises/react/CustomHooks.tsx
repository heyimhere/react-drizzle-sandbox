import ExercisePage from '../../components/ExercisePage'

export default function CustomHooks() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Custom hooks"
      difficulty="Intermediate"
      description="Custom hooks are plain functions whose names start with 'use' and that call other hooks inside. They let you extract stateful logic out of components so it can be shared and tested independently — without changing the component tree at all."
      whatToBuild="Build four hooks: useFetch<T>(url) returning { data, loading, error }, useLocalStorage<T>(key, initial) synced to localStorage, useDebounce<T>(value, delay) that delays a value update, and useInterval(callback, delay) that avoids stale closures. Then compose them: a search input debounced 400ms feeds into useFetch and the last results are cached in useLocalStorage."
      keyConcepts={['custom hook', 'useRef', 'stale closure', 'AbortController', 'generic hook', 'lazy initializer']}
      workspaceFile="client/src/exercises/react/CustomHooks.tsx"
      hints={[
        'useInterval must use a ref to dodge the stale closure trap: const savedCb = useRef(callback); useEffect(() => { savedCb.current = callback }, [callback]). The interval always calls savedCb.current, which always holds the latest version of the callback.',
        'useFetch should reset loading to true and clear error when the URL changes, not just on mount. Abort on cleanup: const ctrl = new AbortController(); fetch(url, { signal: ctrl.signal }); return () => ctrl.abort().',
        'useLocalStorage reads from storage on init using the lazy initializer pattern: useState(() => { try { return JSON.parse(localStorage.getItem(key) ?? "null") ?? initial } catch { return initial } }). Write back in a useEffect whenever the value changes.',
        'Wire all four together: the input value goes through useDebounce(400ms) → the stable value becomes the URL query → useFetch fetches → on success, store results with useLocalStorage so the last results show on cold start.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
