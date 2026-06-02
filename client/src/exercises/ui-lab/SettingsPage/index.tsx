import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function SettingsPagePage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Settings Page"
      difficulty="Intermediate"
      description="A two-pane settings screen — left nav of sections, right pane of grouped controls. Drill: nav highlight, sticky section headers, grouped rows with descriptive helpers."
      scratchFile="client/src/exercises/ui-lab/SettingsPage/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
