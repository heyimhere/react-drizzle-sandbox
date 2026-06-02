import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function RangeSliderPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Range Slider"
      difficulty="Intermediate"
      description="A custom range with a filled track segment, a glowing thumb, and a live value bubble that follows the thumb. Drill: styling input[type=range] cross-browser, computing the fill % from the value, tracking thumb position for the bubble."
      scratchFile="client/src/exercises/ui-lab/RangeSlider/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
