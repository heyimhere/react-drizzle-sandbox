import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function MagicLinkScreenPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Magic Link Screen"
      difficulty="Intermediate"
      description="Auth confirmation screen — deep navy gradient, glass card, rounded mail icon, three colored feature rows, warning banner. Stagger-in motion on the feature list."
      scratchFile="client/src/exercises/ui-lab/MagicLinkScreen/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
