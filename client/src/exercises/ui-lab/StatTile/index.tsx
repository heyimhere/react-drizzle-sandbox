import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function StatTilePage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Stat Tile"
      difficulty="Beginner"
      description="A 2x2 grid of stat tiles for a dashboard hero. Each shows a label, big number, a delta chip, and a tiny sparkline. Drill: tabular-nums, color-coded deltas, inline SVG sparkline."
      scratchFile="client/src/exercises/ui-lab/StatTile/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
