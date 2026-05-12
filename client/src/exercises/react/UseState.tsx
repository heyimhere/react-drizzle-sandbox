import ExercisePage from '../../components/ExercisePage'

export default function UseState() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useState"
      difficulty="Beginner"
      description="useState gives a component its own memory. Each call returns a snapshot of the current value and a setter that schedules a re-render with the new value. State is never mutated directly — you always replace it."
      whatToBuild="A user profile editor with four controlled inputs: name, email, bio (with a live character counter below the textarea), and a password field with a show/hide toggle button. Add a Reset button that restores all fields to their initial values. Use a single state object for all fields."
      keyConcepts={['useState', 'functional update', 'controlled input', 'state snapshot', 'lazy initializer']}
      workspaceFile="client/src/exercises/react/UseState.tsx"
      hints={[
        'Use a single state object for all fields and update individual fields with the spread pattern: setState(prev => ({ ...prev, [e.target.name]: e.target.value })). Wire all inputs to the same handler using the name attribute.',
        'Derive the character counter from state.bio.length directly in JSX — no extra state needed. Values you can compute from existing state should live in render, not in useState.',
        'The show/hide toggle is a separate boolean state: const [showPwd, setShowPwd] = useState(false). Use it to flip the input type attribute: type={showPwd ? "text" : "password"}.',
        'For Reset, store the initial values in a constant outside the component (so it never changes). The reset button calls setState(INITIAL_STATE). If you used a lazy initializer, call the same factory function again.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
