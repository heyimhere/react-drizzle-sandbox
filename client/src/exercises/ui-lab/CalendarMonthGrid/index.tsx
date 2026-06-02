import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function CalendarMonthGridPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Calendar — Month Grid"
      difficulty="Intermediate"
      description="A standard month-view calendar grid with weekday header, days from the previous month dimmed, an accent on today, and dot indicators for days with events. Drill: date math without a library, 7-col grid, today highlight."
      scratchFile="client/src/exercises/ui-lab/CalendarMonthGrid/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
