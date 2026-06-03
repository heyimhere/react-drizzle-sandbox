import ExercisePage from '../../components/ExercisePage'

export default function PolymorphicAsProp() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Polymorphic Components (as prop)"
      difficulty="Advanced"
      description="A polymorphic component takes an as prop that decides the rendered element: <Box as='a' href='/x' /> vs <Box as='button' onClick={...} />. The right type lets the rest of the props match whichever element you picked — href works for anchor, onClick for button, refused if it does not match. The pattern behind Chakra, Radix's Slot, MUI's Box, and every modern design system."
      whatToBuild="Build <Box as={C}> where C defaults to 'div'. Props should be the native HTML attribute set of C plus an optional className. <Box as='a' href='/x' /> should accept href; <Box href='/x' /> (default div) should reject href. Bonus: support component types too — <Box as={Link} to='/x' /> should accept to from a Link component."
      keyConcepts={['as prop', 'ElementType', 'ComponentPropsWithoutRef', 'polymorphic component pattern', 'default generic']}
      workspaceFile="client/src/exercises/typescript/PolymorphicAsProp.tsx"
      hints={[
        'Skeleton: function Box<C extends React.ElementType = "div">(props: { as?: C } & React.ComponentPropsWithoutRef<C>) { const Comp = props.as ?? "div"; return <Comp {...props} /> }.',
        'ComponentPropsWithoutRef<C> works for both DOM strings and component types. ComponentProps<C> includes ref; usually you want the without-ref version unless you are also forwardRef-ing.',
        'For the ref version, see React 19s ref-as-prop (no forwardRef needed). The polymorphic + ref combo is tricky pre-19; in React 19 it is just another prop.',
        'Avoid as in your prop type accidentally colliding with the type assertion as. Both are valid identifiers in JS but TypeScript only sees as as the prop name in JSX position.',
      ]}
    />
  )
}
