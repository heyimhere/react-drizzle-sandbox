import ExercisePage from '../../components/ExercisePage'

export default function GenericComponents() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Generic Components"
      difficulty="Advanced"
      description="A generic component lets TypeScript infer the item type from the data prop and propagate it to the render function. <List items={users} renderItem={u => u.name} /> knows u is a User without any annotation at the call site. This is the typing pattern behind every well-typed table, combobox, and select."
      whatToBuild="<List<T>> with props { items: T[]; getKey: (item: T) => string | number; renderItem: (item: T, index: number) => ReactNode; empty?: ReactNode }. Render an empty state when items is empty. Type inference must work from a single call site: <List items={users} getKey={u => u.id} renderItem={u => <Row name={u.name} />} /> — no <List<User>> needed."
      keyConcepts={['generic function components', 'type inference at call site', 'render prop typing', 'arrow function syntax limits in TSX', 'forwardRef + generics']}
      workspaceFile="client/src/exercises/typescript/GenericComponents.tsx"
      hints={[
        'function declaration form works cleanly: export function List<T>(props: { items: T[]; ... }) { ... }. Arrow form in .tsx hits the JSX parser ambiguity — use <T,> with a trailing comma if you must: const List = <T,>(props: ...) => ....',
        'TypeScript infers T from the items prop. If renderItem comes first, inference can fail — keep items as the first prop, or call sites will need <List<User> ...>.',
        'For forwardRef + generics, the helper is cast: const List = forwardRef(Inner) as <T>(props: ListProps<T> & { ref?: Ref<HTMLDivElement> }) => ReactElement. forwardRef drops the generic and the assertion brings it back.',
        'Avoid using JSX.Element as a return type for the inner function — use ReactNode. JSX.Element forces a single element and breaks fragments.',
      ]}
    />
  )
}
