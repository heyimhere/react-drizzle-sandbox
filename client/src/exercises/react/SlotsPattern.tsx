import ExercisePage from '../../components/ExercisePage'

export default function SlotsPattern() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Slots Pattern"
      difficulty="Intermediate"
      description="Slots let a parent component define named regions and consumers fill them in any order. It's the children-as-config idea: instead of accepting header/body/footer props as elements, you walk children and pluck the ones tagged for each slot. The result is composable, readable JSX with no prop drilling."
      whatToBuild="A <Card> component with Card.Header, Card.Media, Card.Body, Card.Actions sub-components. The parent renders a fixed shell with placeholders for each slot and fills them from children. Slot order in the consumer should NOT affect render order — Card always renders Header → Media → Body → Actions."
      keyConcepts={['compound components', 'Children.toArray', 'sub-components as identity', 'slot extraction', 'attached statics']}
      workspaceFile="client/src/exercises/react/SlotsPattern.tsx"
      hints={[
        'Define empty marker components: function Header({ children }) { return <>{children}</> }. Attach them as statics: Card.Header = Header. Their identity is what you match against.',
        'In Card, walk children with Children.toArray(children) and filter: const header = arr.find(c => isValidElement(c) && c.type === Header). Same for media, body, actions.',
        'Render the shell with the resolved slots: <div>{header}<div>{media}</div>...</div>. Order in the consumer becomes irrelevant — Card decides layout.',
        'Bonus: warn in dev if an unknown child type slips through. const known = new Set([Header, Media, Body, Actions]); if (!known.has(child.type)) console.warn("Unknown Card child").',
      ]}
    />
  )
}
