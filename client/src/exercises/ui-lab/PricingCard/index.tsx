import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function PricingCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Pricing Card"
      difficulty="Intermediate"
      description="A pricing card with a 'Most popular' ribbon, large headline price, a feature checklist, and a big CTA. Drill: tasteful typographic hierarchy, ribbon positioned over the top edge, accent border that lifts the chosen plan."
      scratchFile="client/src/exercises/ui-lab/PricingCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
