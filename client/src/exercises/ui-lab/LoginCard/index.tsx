import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function LoginCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Login Card"
      difficulty="Beginner"
      description="A classic centered login. Logomark, two fields, primary CTA, secondary 'continue with GitHub'. Drill: vertical rhythm, dim helper text, hierarchy between primary and secondary actions."
      scratchFile="client/src/exercises/ui-lab/LoginCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
