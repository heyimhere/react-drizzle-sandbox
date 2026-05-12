import ExercisePage from '../../components/ExercisePage'

export default function FormActions() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useFormStatus / useActionState"
      difficulty="Advanced"
      description="useActionState manages the state returned by a form action — replacing manual useState + fetch patterns for form submissions. useFormStatus reads the pending state of the nearest parent form action, letting child components disable themselves during submission."
      whatToBuild="A contact form with name, email, and message fields. Wire the form using useActionState — the action posts to the Express server and returns { ok: boolean, error?: string }. Extract the submit button into a SubmitButton component that calls useFormStatus to disable itself while the form is pending. Display the success or error result from state."
      keyConcepts={['useActionState', 'useFormStatus', 'form action', 'pending', 'async action']}
      workspaceFile="client/src/exercises/react/FormActions.tsx"
      hints={[
        'const [state, dispatch, isPending] = useActionState(myAction, null). The action receives (prevState, formData) — read fields with formData.get("name"). Whatever you return becomes the next state.',
        'useFormStatus() must be called in a component that is a child of the <form> element — not in the form component itself. Extract <SubmitButton /> and call useFormStatus() inside it to access { pending }.',
        'Wire the form: <form action={dispatch}>. This is the native HTML form action API — it works for progressive enhancement (the action fires even without JavaScript in environments that support it).',
        'To reset the form after success, return a fresh initial state from the action and conditionally render a success message based on state?.ok. You cannot call setState inside an action — the returned value is the only way to update state.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
