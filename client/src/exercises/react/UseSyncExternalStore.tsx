import ExercisePage from '../../components/ExercisePage'

export default function UseSyncExternalStore() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useSyncExternalStore"
      difficulty="Advanced"
      description="useSyncExternalStore subscribes a component to a store that lives outside React — window.matchMedia, localStorage, a Redux-like external store. It guarantees tear-free reads under concurrent rendering and gives you a stable snapshot per render."
      whatToBuild="Two small hooks. useMediaQuery(query) subscribes to window.matchMedia(query) and returns the boolean. useLocalStorage(key, fallback) reads from localStorage and updates across tabs via the 'storage' event. Demo a page that toggles layout at (max-width: 640px) and displays/edits a stored name."
      keyConcepts={['useSyncExternalStore', 'subscribe / unsubscribe', 'getSnapshot', 'getServerSnapshot', 'tear-free reads']}
      workspaceFile="client/src/exercises/react/UseSyncExternalStore.tsx"
      hints={[
        'Signature: useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?). subscribe(onChange) attaches a listener and returns an unsubscribe. getSnapshot returns the current value synchronously.',
        'For matchMedia: const mql = matchMedia(query). subscribe = (cb) => { mql.addEventListener("change", cb); return () => mql.removeEventListener("change", cb) }. getSnapshot = () => mql.matches.',
        'getSnapshot MUST return a referentially stable value when nothing changed. If you return a fresh object every call ({ value }), React tears infinitely. Return a primitive, or memoize the object outside the function.',
        'For localStorage cross-tab sync: subscribe to window.addEventListener("storage", ...) AND emit a custom event yourself on writes so same-tab updates also notify. Use JSON.stringify/parse around the fallback.',
      ]}
    />
  )
}
