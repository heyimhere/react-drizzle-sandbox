import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function IconRailSidebarPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Icon Rail Sidebar"
      difficulty="Intermediate"
      description="Vertical icon column with six nav icons, a notification dot, and a sun/moon theme toggle at the bottom. Same motion layoutId trick as the pill nav but applied to a stacked column."
      scratchFile="client/src/exercises/ui-lab/IconRailSidebar/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
