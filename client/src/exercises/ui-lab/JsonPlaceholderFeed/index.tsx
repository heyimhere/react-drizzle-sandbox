import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function JsonPlaceholderFeedPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="JSONPlaceholder Feed"
      difficulty="Intermediate"
      description="Brutalist editorial take on a fetched feed — bone-white surface, heavy black borders, oversized red post numbers. Real fetch with user-filter chips that re-trigger the request."
      scratchFile="client/src/exercises/ui-lab/JsonPlaceholderFeed/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
