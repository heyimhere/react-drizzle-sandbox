import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function AvatarStatusPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Avatar + Status Dot"
      difficulty="Beginner"
      description="A row of avatars with status dots (online / idle / busy / offline), each pinned to the bottom-right with a ring matching the surface color so it cuts cleanly out of the circle."
      scratchFile="client/src/exercises/ui-lab/AvatarStatus/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
