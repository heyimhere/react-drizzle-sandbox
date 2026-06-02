import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function SkeletonLoaderPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 1 — Atoms']}
      title="Skeleton Loader"
      difficulty="Beginner"
      description="A list of skeleton rows shimmering while content loads. Drill: shimmer animation via a moving linear-gradient, layout that mirrors the eventual content shape."
      scratchFile="client/src/exercises/ui-lab/SkeletonLoader/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
