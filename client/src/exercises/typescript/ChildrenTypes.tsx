import ExercisePage from '../../components/ExercisePage'

export default function ChildrenTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Children Types"
      difficulty="Beginner"
      description="React.ReactNode is the widest and right choice for children most of the time — covers strings, numbers, elements, arrays, fragments, null. React.ReactElement is narrower: only JSX elements. JSX.Element is even narrower (and legacy-ish). React.PropsWithChildren<P> adds children: ReactNode to P automatically. Picking the right one prevents 'children invalid' errors and keeps APIs flexible."
      whatToBuild="Build three components. <Title>: children: ReactNode (accepts any renderable). <SingleChild>: children: ReactElement (rejects arrays and strings). <List> using PropsWithChildren<{ orientation: 'h' | 'v' }>. Show what each accepts and rejects. Add a render-prop variant: type Props = { children: (open: boolean) => ReactNode } and use it."
      keyConcepts={['ReactNode', 'ReactElement', 'PropsWithChildren', 'JSX.Element', 'render-prop children']}
      workspaceFile="client/src/exercises/typescript/ChildrenTypes.tsx"
      hints={[
        'Default to children: React.ReactNode unless you have a reason. Anything else either rejects valid JSX or surprises users.',
        'children: ReactElement is for components that re-render or clone their child (React.cloneElement). The prop type means TypeScript will refuse strings/numbers/arrays.',
        'PropsWithChildren is just type PropsWithChildren<P = unknown> = P & { children?: ReactNode }. Equivalent to writing it yourself; some codebases prefer the explicit form.',
        'Render prop children: children is a function. Useful for headless components — the consumer controls the markup, your component controls state.',
      ]}
    />
  )
}
