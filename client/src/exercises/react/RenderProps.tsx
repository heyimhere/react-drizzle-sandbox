import ExercisePage from '../../components/ExercisePage'

export default function RenderProps() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Render props"
      difficulty="Intermediate"
      description="A render prop is a prop whose value is a function that returns JSX. The component calls the function with its internal state, letting the caller decide what to render while the component handles the logic. It is inversion of control applied to React."
      whatToBuild="Build a Toggle component using a render prop: <Toggle render={(on, toggle) => <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>} />. Then build a MousePosition component using children as a function: <MousePosition>{({x, y}) => <p>{x}, {y}</p>}</MousePosition>. Finally, convert Toggle into a useToggle() hook and compare how much JSX nesting disappears."
      keyConcepts={['render prop', 'children as function', 'inversion of control', 'hook vs HOC', 'reusability']}
      workspaceFile="client/src/exercises/react/RenderProps.tsx"
      hints={[
        'The pattern inverts control: the component owns the logic (when and what state changes), the caller owns the UI (what to render with that state). The render function is just the output slot.',
        'For MousePosition, attach a mousemove listener to window inside a useEffect and store {x, y} in state. The render function is typeof children === "function" — call children({ x, y }) in the return.',
        'The hook version is the same logic without the JSX wrapper: function useToggle(initial = false) { const [on, setOn] = useState(initial); return [on, () => setOn(o => !o)] as const }. No extra component layer needed.',
        'Render props still appear in popular libraries: Formik Field, Downshift, react-table v7, React Spring. Recognizing the pattern in third-party source code and docs is the real payoff here.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
