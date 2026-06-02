import ExercisePage from '../../components/ExercisePage'

export default function DiscriminatedProps() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 5 — TypeScript × React']}
      title="Discriminated Prop Unions"
      difficulty="Intermediate"
      description="When a component has variants with mutually exclusive prop sets, an optional-prop interface lies to you — every variant claims to accept every prop. A discriminated union keyed on variant lets TypeScript enforce the correct combination at the call site, with autocomplete that adjusts as you change the variant."
      whatToBuild={`A <Banner> with three variants. variant="info" requires { message }. variant="error" requires { message, onRetry }. variant="success" requires { message, autoDismissMs }. TypeScript should refuse <Banner variant="info" onRetry={fn} /> and require onRetry when variant="error". The component renders the right markup per variant.`}
      keyConcepts={['discriminated unions', 'narrowing with switch', 'exhaustive checks', 'never type', 'props by variant']}
      workspaceFile="client/src/exercises/react/DiscriminatedProps.tsx"
      hints={[
        'type BannerProps = | { variant: "info"; message: string } | { variant: "error"; message: string; onRetry: () => void } | { variant: "success"; message: string; autoDismissMs: number }. The variant tag is the discriminator.',
        'Narrow with switch (props.variant). Inside each case, TypeScript knows which extra fields exist. Add a default that assigns to const _exhaustive: never = props — compilation breaks when you add a new variant.',
        'You cannot destructure { variant, ...rest } before narrowing — TS loses the discriminator. Switch first, destructure inside each case.',
        'Default props are awkward with unions. Prefer requiring every prop explicitly; use sensible component-internal defaults (e.g. autoDismissMs ?? 4000) inside the success case.',
      ]}
    />
  )
}
