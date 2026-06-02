import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function ToggleSwitchPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Toggle Switch"
      difficulty="Beginner"
      description="Rebuild an iOS-style toggle with a sliding thumb, on/off color states, and a focus ring. Drill: precise pill geometry, springy thumb motion, and accessible label binding."
      scratchFile="client/src/exercises/ui-lab/ToggleSwitch/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
