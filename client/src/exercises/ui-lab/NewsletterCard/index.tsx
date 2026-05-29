import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function NewsletterCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Newsletter Card"
      difficulty="Beginner"
      description="Deep-navy glass card with a teal accent gradient — the kind you'd drop into a sidebar or modal. Drill: glass-morphism, gradient icon tile, focused input border, motion entry."
      scratchFile="client/src/exercises/ui-lab/NewsletterCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
