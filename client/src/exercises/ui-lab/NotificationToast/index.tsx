import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function NotificationToastPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Notification Toast"
      difficulty="Intermediate"
      description="A toast stack that slides in from the bottom-right with auto-dismiss. Drill: stacking layout, enter/exit animation, click-to-dismiss, success/info/error variants."
      scratchFile="client/src/exercises/ui-lab/NotificationToast/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
