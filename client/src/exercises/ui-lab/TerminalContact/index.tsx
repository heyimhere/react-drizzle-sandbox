import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function TerminalContactPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Terminal Contact"
      difficulty="Intermediate"
      description="Shell-script aesthetic — macOS window chrome, line numbers, syntax-colored fields, blinking caret, and a green run-button as the submit. Same vibe as your contact.sh hero."
      scratchFile="client/src/exercises/ui-lab/TerminalContact/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
