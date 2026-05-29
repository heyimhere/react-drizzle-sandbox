import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function KanbanBoardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Kanban Board"
      difficulty="Intermediate"
      description="Three-column kanban with a warm paper aesthetic — cream surface, pastel column tints, mini cards with tag chips, avatar stacks and due dates. No drag-and-drop — pure visual fidelity, the interview-favorite layout."
      scratchFile="client/src/exercises/ui-lab/KanbanBoard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
