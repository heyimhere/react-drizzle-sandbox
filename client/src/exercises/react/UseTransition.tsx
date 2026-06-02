import ExercisePage from '../../components/ExercisePage'

export default function UseTransition() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useTransition"
      difficulty="Intermediate"
      description="useTransition marks state updates as non-urgent so React can keep the UI responsive during expensive renders. The input stays snappy while the filtered list catches up in the background, and you get an isPending flag to show a subtle indicator without blocking interaction."
      whatToBuild="A search input over 5,000 generated items. Without useTransition, fast typing janks because every keystroke filters the whole list synchronously. With useTransition, the input updates immediately and the filtered list updates as a transition. Show 'Updating…' near the input while isPending is true."
      keyConcepts={['useTransition', 'startTransition', 'isPending', 'urgent vs non-urgent updates', 'concurrent rendering']}
      workspaceFile="client/src/exercises/react/UseTransition.tsx"
      hints={[
        'Two states: const [input, setInput] = useState("") for the urgent input value, and const [query, setQuery] = useState("") for the transitioned filter value. The list filters on query, not input.',
        'In onChange: setInput(value) runs urgently and updates the input on the next paint. startTransition(() => setQuery(value)) defers the filter update so React can yield to user input.',
        'Render the pending indicator with {isPending && <span>Updating…</span>}. Useful when the transition takes long enough for the user to notice — try sleeping the filter with a busy loop to feel the effect.',
        'Generate items outside the component so they survive renders. Filter with .filter() inside the render — React will tear and resume the work cooperatively.',
      ]}
    />
  )
}
