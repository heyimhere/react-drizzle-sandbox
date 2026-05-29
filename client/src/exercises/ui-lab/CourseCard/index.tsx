import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function CourseCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 2 — Cards & Forms']}
      title="Course Card"
      difficulty="Beginner"
      description="Three pastel course cards in distinct rose-lavender, lavender-blue and peach-pink gradients. Bell top-right, calendar date pill bottom-left, black Join Now button bottom-right. Stagger-in on mount, lift on hover."
      scratchFile="client/src/exercises/ui-lab/CourseCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
