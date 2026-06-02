import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function ChatLayoutPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 3 — Layouts']}
      title="Chat Layout"
      difficulty="Advanced"
      description="Messaging app shell. Left: conversation list with unread badges. Right: message thread with bubbles, timestamps, and a composer pinned to the bottom. Drill: scroll containment, bubble tails, sender vs. receiver styling, sticky composer."
      scratchFile="client/src/exercises/ui-lab/ChatLayout/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
