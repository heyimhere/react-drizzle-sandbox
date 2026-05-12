import ExercisePage from '../../components/ExercisePage'

export default function ControlledInputs() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Controlled vs uncontrolled"
      difficulty="Beginner"
      description="A controlled input is driven entirely by React state — value and onChange are both required. An uncontrolled input manages its own value in the DOM; you read it when you need it. Knowing which to use (and when mixing is a mistake) is fundamental to working with forms."
      whatToBuild="A registration form with controlled text, email, password, and country select inputs, a controlled checkbox for terms acceptance, and an uncontrolled file input for an avatar upload. On submit, use FormData to read the file and merge it with the controlled field values into a single payload object. Log it to the console."
      keyConcepts={['controlled input', 'uncontrolled input', 'FormData', 'onChange', 'value', 'defaultValue', 'e.target.files']}
      workspaceFile="client/src/exercises/react/ControlledInputs.tsx"
      hints={[
        'Controlled: every input has value={state.field} and onChange={e => setState(prev => ({...prev, field: e.target.value}))}. React owns the DOM value — you can validate and transform on every keystroke.',
        'File inputs cannot be controlled. Setting value on a file input throws. Use a ref (useRef<HTMLInputElement>(null)) and read ref.current?.files?.[0] in the submit handler, or read e.target.files in an onChange.',
        'new FormData(e.currentTarget) in the submit handler captures all named inputs, including uncontrolled ones, automatically. The controlled fields are in your state — merge both into the final payload.',
        'Never switch the same input between controlled and uncontrolled at runtime. Having value={undefined} initially and value={someValue} later triggers a React warning. Always initialize state to a string (""), not undefined or null.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
