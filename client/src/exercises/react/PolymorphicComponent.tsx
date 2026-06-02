import ExercisePage from '../../components/ExercisePage'

export default function PolymorphicComponent() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Polymorphic Component"
      difficulty="Advanced"
      description={`A polymorphic component decides its rendered element at the call site via an as prop. <Box as="a" href="..." /> becomes an anchor; <Box as="button" /> becomes a button — and the props are typed against whichever element you chose. The pattern shows up in every modern UI library (Chakra, Radix, MUI).`}
      whatToBuild={`Build <Text as={...}> that renders any HTML element. The default is <p>. When as is "a", href becomes required. When as is "button", onClick is allowed. TypeScript should reject href on a <p> and allow it on an <a>. Bonus: support a forwarded ref typed against the chosen element.`}
      keyConcepts={['as prop', 'generic components', 'ComponentPropsWithoutRef', 'ElementType', 'forwardRef']}
      workspaceFile="client/src/exercises/react/PolymorphicComponent.tsx"
      hints={[
        'Signature: function Text<T extends ElementType = "p">(props: { as?: T; children?: ReactNode } & ComponentPropsWithoutRef<T>). The intersection gives you the native props of whatever element T resolves to.',
        'Render the element with const Tag = (as ?? "p") as ElementType; return <Tag {...rest}>{children}</Tag>. TypeScript treats Tag as a generic JSX tag and accepts the spread props.',
        'For ref forwarding, use ComponentPropsWithRef<T> instead and forwardRef with a type assertion: const Text = forwardRef(Render) as <T extends ElementType = "p">(props: ...) => ReactElement. forwardRef erases the generic — the cast restores it.',
        'Strip "as" from the rest before spreading. Otherwise React warns "Unknown prop as on a button element" at runtime.',
      ]}
    />
  )
}
