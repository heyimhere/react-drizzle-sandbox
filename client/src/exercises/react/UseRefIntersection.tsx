import ExercisePage from '../../components/ExercisePage'

export default function UseRefIntersection() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useRef — Intersection Observer"
      difficulty="Intermediate"
      description="useRef hands you a stable mutable reference that survives across renders without triggering them. Combined with IntersectionObserver, it gives you a clean way to fire effects when a DOM node enters or leaves the viewport — the building block for lazy images, infinite scroll, and reveal animations."
      whatToBuild="A long page with 20 cards. As each card scrolls into view, fade it in and stamp the time it became visible. Attach a single IntersectionObserver in useEffect, observe each card via a ref callback, and toggle a 'visible' state per card. Cards that scroll out should NOT re-trigger — first-seen only."
      keyConcepts={['useRef', 'IntersectionObserver', 'ref callback', 'useEffect cleanup', 'Map for per-element state']}
      workspaceFile="client/src/exercises/react/UseRefIntersection.tsx"
      hints={[
        'Use useRef<Map<Element, number>>(new Map()) to map each card DOM node back to its index. Inside the IntersectionObserver callback, look up the index by entry.target and call setVisible(prev => new Set(prev).add(index)).',
        'Ref callback for each card: (el) => { if (el) refMap.current.set(el, i); else refMap.current.delete(el) }. The callback runs once on mount with el = node and again with null on unmount.',
        'Create the observer inside useEffect with { threshold: 0.3 } so cards fire when ~30% visible. observer.observe(node) for each ref, and return () => observer.disconnect() as cleanup.',
        'Once a card is in the visible set, never remove it — that gives the "first-seen only" behavior. Use new Set(prev).add(idx) to keep React happy with referential changes.',
      ]}
    />
  )
}
