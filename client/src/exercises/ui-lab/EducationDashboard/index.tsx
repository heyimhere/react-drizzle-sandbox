import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function EducationDashboardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Education Dashboard"
      difficulty="Advanced"
      description="Full pastel dashboard composition — top pill nav, slim icon rail, greeting headline, mini wavy chart, friends-score column, course card. Compressed to fit the canvas; demonstrates composition rather than 1:1 pixel fidelity."
      scratchFile="client/src/exercises/ui-lab/EducationDashboard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
