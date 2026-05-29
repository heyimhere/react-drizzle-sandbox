import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function InfiniteScrollFeedPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Infinite Scroll Feed"
      difficulty="Intermediate"
      description="Magazine-aesthetic feed inside a scrollable surface. New items append via IntersectionObserver as you reach the bottom — the pattern, not real pagination. Editorial serif headlines, mono category tags."
      scratchFile="client/src/exercises/ui-lab/InfiniteScrollFeed/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
