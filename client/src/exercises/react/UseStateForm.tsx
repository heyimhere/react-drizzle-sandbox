import ExercisePage from '../../components/ExercisePage'

export default function UseStateForm() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 1 — Core Hooks']}
      title="useState — Multi-step Form"
      difficulty="Beginner"
      description="Multi-step wizards make great useState drills: each step owns its own field, but the form has a single shared state object and a current-step index. The trick is updating one field without losing the others, and deriving 'can advance' from the data instead of tracking it separately."
      whatToBuild="A 3-step signup wizard. Step 1: name + email. Step 2: password + confirm. Step 3: review and submit. Use a single state object for all fields and a separate state for the current step index. Disable the Next button until the current step's fields are valid. On submit, log the full object and reset to step 1."
      keyConcepts={['useState', 'object spread', 'derived state', 'controlled inputs', 'step navigation']}
      workspaceFile="client/src/exercises/react/UseStateForm.tsx"
      hints={[
        'One state object: const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" }). Update with setForm(prev => ({ ...prev, [field]: value })) so other fields survive.',
        'Track the step separately: const [step, setStep] = useState(0). Derive validity per step instead of storing it: const canAdvance = step === 0 ? form.name && form.email.includes("@") : step === 1 ? form.password.length >= 8 && form.password === form.confirm : true.',
        'Reuse one onChange handler: function handleChange(e) { setForm(prev => ({ ...prev, [e.target.name]: e.target.value })) }. Give each input a name attribute matching its key.',
        'On submit, console.log(form), then setForm to the initial object and setStep(0). Avoid two useStates per field — they pile up and make resetting tedious.',
      ]}
    />
  )
}
