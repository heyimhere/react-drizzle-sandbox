import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function RadioCardsPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Radio Cards"
      difficulty="Beginner"
      description="Big card-style radios — each option a tappable tile with title, helper line, price tag, and a selected ring. Drill: state-driven border / glow, single-selection, no native input visible."
      scratchFile="client/src/exercises/ui-lab/RadioCards/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
