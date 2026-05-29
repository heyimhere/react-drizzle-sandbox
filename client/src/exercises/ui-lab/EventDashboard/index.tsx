import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function EventDashboardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Event Dashboard"
      difficulty="Advanced"
      description="Compact dashboard layout — top nav, welcome hero with gradient, 2×2 category card grid with one active state, tab row, and an empty state. Mirrors your Ruunt Hora event browser, compressed for the canvas."
      scratchFile="client/src/exercises/ui-lab/EventDashboard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
