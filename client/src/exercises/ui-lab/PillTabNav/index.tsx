import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function PillTabNavPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Pill Tab Nav"
      difficulty="Beginner"
      description="Segmented control with an animated black pill that slides between tab positions on click. Drills motion's layoutId trick — no JS position math needed."
      scratchFile="client/src/exercises/ui-lab/PillTabNav/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
