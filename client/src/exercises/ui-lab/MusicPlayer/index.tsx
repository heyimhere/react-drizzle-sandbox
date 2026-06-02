import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function MusicPlayerPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Music Player"
      difficulty="Advanced"
      description="A 'now playing' card with album art, track meta, scrubber, and transport controls. Drill: gradient pulled from the artwork, tabular time display, big primary play button with secondary skip buttons."
      scratchFile="client/src/exercises/ui-lab/MusicPlayer/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
