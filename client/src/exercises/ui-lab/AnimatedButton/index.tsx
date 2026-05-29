import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function AnimatedButtonPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Animated Button"
      difficulty="Beginner"
      description="Three buttons, three micro-interactions: a magnetic pull that follows the cursor, a shine sweep on hover, and a click-to-morph submit that collapses into a spinner. Built with the motion library."
      scratchFile="client/src/exercises/ui-lab/AnimatedButton/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
