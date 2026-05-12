import ExercisePage from '../../components/ExercisePage'

export default function TypescriptProps() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 5 — TypeScript × React']}
      title="Typing props"
      difficulty="Intermediate"
      description="TypeScript and React have a rich set of built-in utility types for components. Knowing the right tool — discriminated unions, generics, ComponentPropsWithoutRef — makes your component APIs expressive and catches misuse at the call site."
      whatToBuild="Four typed components. A Button with discriminated variant props (primary renders text, icon renders a ReactNode icon — each variant has exclusive props). A generic List<T> component that renders any array with a custom renderItem function. A Card that extends all native div props using ComponentPropsWithoutRef. A Stack layout using PropsWithChildren."
      keyConcepts={['discriminated union', 'generic component', 'ComponentPropsWithoutRef', 'PropsWithChildren', 'ReactNode']}
      workspaceFile="client/src/exercises/react/TypescriptProps.tsx"
      hints={[
        'Prefer bare functions over FC: function Button(props: ButtonProps) {}. React.FC adds implicit children (pre-React 18) and hides the return type. Bare functions are more explicit and behave the same in React 18+.',
        'Discriminated union on variant: type ButtonProps = { variant: "primary"; label: string } | { variant: "icon"; icon: ReactNode }. TypeScript narrows inside if (props.variant === "icon") — accessing icon outside that branch is a type error.',
        'Generic component with type inference: function List<T>({ items, renderItem }: { items: T[]; renderItem: (item: T, index: number) => ReactNode }) {}. TypeScript infers T from the items array at the call site — callers never need to write List<Product>.',
        'ComponentPropsWithoutRef<"div"> gives you every attribute a native <div> accepts (onClick, className, aria-*, data-*, style, etc.) minus ref. Spread the rest of props onto the element and merge className: className={`my-styles ${props.className ?? ""}`}.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
