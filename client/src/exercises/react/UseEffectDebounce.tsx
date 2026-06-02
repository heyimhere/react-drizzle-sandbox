import ExercisePage from '../../components/ExercisePage'

export default function UseEffectDebounce() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useEffect — Debounced Search"
      difficulty="Intermediate"
      description="Debouncing collapses many rapid events into one delayed action. Inside useEffect, a setTimeout + cleanup pair is the canonical pattern: each keystroke schedules a new timer and the cleanup cancels the previous one, so the search only fires once typing pauses."
      whatToBuild="A search input that filters a static list of ~50 fruits. The filter only runs 400ms after the user stops typing. Show a 'Debouncing…' indicator while a timer is pending. Use useEffect with a setTimeout and clearTimeout cleanup. Bonus: count how many filters actually fire vs. how many keystrokes were typed."
      keyConcepts={['useEffect cleanup', 'setTimeout', 'clearTimeout', 'debouncing', 'derived state']}
      workspaceFile="client/src/exercises/react/UseEffectDebounce.tsx"
      hints={[
        'useState for input value and a separate "debounced" value. useEffect watches the input value, sets a 400ms timer that calls setDebounced(input), and returns () => clearTimeout(t) for cleanup.',
        'The cleanup runs before the next effect — that is what cancels the in-flight timer when a new keystroke arrives. No extra ref or state needed to track the timer ID across renders.',
        'Derive the filtered list from the debounced value, not the live value: const filtered = fruits.filter(f => f.includes(debounced)). The list only re-filters once typing settles.',
        'For the "Debouncing…" indicator, render it when input !== debounced. As soon as the timer fires and debounced catches up, the indicator hides on its own.',
      ]}
    />
  )
}
