import ExercisePage from '../../components/ExercisePage'

export default function EventTypes() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 5 — TypeScript × React']}
      title="Event types"
      difficulty="Beginner"
      description="React wraps native browser events in SyntheticEvent objects with a consistent API across browsers. TypeScript's React types give you a generic SyntheticEvent<Element, Event> with specific subtypes for each event kind and element combination."
      whatToBuild="A form with five different input types: a text input, a select dropdown, a checkbox, a file input, and a textarea with a Ctrl+Enter keyboard shortcut to submit. Write every handler as an extracted named function with an explicit type annotation — no inference. Log the parsed values to the console on submit."
      keyConcepts={['ChangeEvent', 'FormEvent', 'MouseEvent', 'KeyboardEvent', 'HTMLInputElement', 'HTMLSelectElement']}
      workspaceFile="client/src/exercises/react/EventTypes.tsx"
      hints={[
        'Extracted handler signatures: const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {} and const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {}. The generic is always the element type the event fires on.',
        'Form submit: const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); ... }. Without e.preventDefault() the page reloads on submit — a classic bug.',
        'Keyboard shortcut: const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === "Enter" && e.ctrlKey) handleSubmit() }. Use e.key (string) instead of e.keyCode (deprecated number).',
        'Rule of thumb: inline handlers get type inference from TypeScript automatically — you never need to annotate them. Only add explicit annotations when the handler is extracted into a named function or used as a callback elsewhere.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
