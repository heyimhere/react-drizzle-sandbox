import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function GiphySearchPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="GIF Search"
      difficulty="Advanced"
      description="Debounced search, masonry grid, lazy-loaded thumbnails. Uses tenor's no-key demo endpoint when available, falls back to a placeholder gallery. Drill: debounce, race-safe fetch, image lazy-loading, varied-height grid."
      scratchFile="client/src/exercises/ui-lab/GiphySearch/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
