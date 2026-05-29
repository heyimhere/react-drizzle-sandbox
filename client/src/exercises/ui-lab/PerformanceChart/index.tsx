import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function PerformanceChartPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Performance Chart"
      difficulty="Advanced"
      description="Hand-rolled SVG with three smooth wave lines (Theory / Practice / Lexicon) and gradient area fills below each. Tab switcher (Week / Month / Year) morphs the SVG path `d` attribute via motion. Floating +24% callout pinned to the Practice peak."
      scratchFile="client/src/exercises/ui-lab/PerformanceChart/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
