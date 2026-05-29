import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function StyledInputPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Styled Input"
      difficulty="Beginner"
      description="Drill input states across a stacked field group — placeholder, focused (with glow ring), error, disabled, and with a leading icon. Aesthetic focus: refined dark surface, sharp focus rings, mono helper text."
      scratchFile="client/src/exercises/ui-lab/StyledInput/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
