import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function FriendsScorePage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Friends Score"
      difficulty="Intermediate"
      description="Pastel ranking card — real pravatar.cc avatars, period dropdown with chevron rotation, thick black progress bars that animate from 0 to their value on mount, bold serif percentages."
      scratchFile="client/src/exercises/ui-lab/FriendsScore/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
