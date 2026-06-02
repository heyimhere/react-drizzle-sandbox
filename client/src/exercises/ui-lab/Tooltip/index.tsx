import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function TooltipPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Tooltip"
      difficulty="Intermediate"
      description="A pill tooltip with a tiny arrow, fading in on hover or focus, positioned above the trigger. Drill: hover delay, smooth fade/slide, accessible (aria-describedby + focus-visible)."
      scratchFile="client/src/exercises/ui-lab/Tooltip/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
