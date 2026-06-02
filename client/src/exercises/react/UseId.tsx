import ExercisePage from '../../components/ExercisePage'

export default function UseId() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useId"
      difficulty="Beginner"
      description="useId returns a stable unique identifier per component instance, safe for SSR. It's not for keys — it's for connecting a <label htmlFor> to its <input id>, or aria-describedby to a help text node, when you can't hand-author unique ids because the component might render twice on one page."
      whatToBuild="A reusable <Field label helpText error> component that renders a labeled input with an associated help text and optional error. Use useId to generate ids for the input, the help text, and the error. Wire htmlFor, aria-describedby, and aria-invalid correctly. Render two Fields on the page to prove ids are unique per instance."
      keyConcepts={['useId', 'aria-describedby', 'aria-invalid', 'htmlFor', 'SSR-safe ids']}
      workspaceFile="client/src/exercises/react/UseId.tsx"
      hints={[
        'const id = useId(). React returns something like ":r0:". Treat it as opaque — never parse it. Compose derived ids with concatenation: const helpId = `${id}-help`, errorId = `${id}-error`.',
        'Label: <label htmlFor={id}>. Input: <input id={id} aria-describedby={`${helpId}${error ? " " + errorId : ""}`} aria-invalid={!!error}>. aria-describedby accepts a space-separated list.',
        'Do not use useId for list keys. Keys must be stable per item across renders; useId is stable per component instance. They solve different problems.',
        'Render two Fields side by side and inspect the DOM — both should have unique ids without you passing anything different. That is the whole point.',
      ]}
    />
  )
}
