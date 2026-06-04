import ExercisePage from '../../components/ExercisePage'

export default function ForwardRefTyped() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 5 — TypeScript × React']}
      title="Typed forwardRef + useImperativeHandle"
      difficulty="Intermediate"
      description="forwardRef forwards a ref from a parent down to a DOM node or to an imperative handle. The typing is fiddly: generic args go ref-type-first, then props. useImperativeHandle lets you expose a custom API (focus, scrollToTop) instead of the raw DOM node, hiding implementation details behind a typed object."
      whatToBuild="A <FancyInput> that wraps an <input> with styling. Forward a ref so callers can call ref.current.focus(). Then upgrade it: useImperativeHandle to expose { focus(), clear(), select() }. Type the handle so the parent gets autocomplete. Drive it from a parent component with three buttons."
      keyConcepts={['forwardRef', 'useImperativeHandle', 'Ref<T>', 'ComponentPropsWithoutRef', 'imperative API design']}
      workspaceFile="client/src/exercises/typescript/ForwardRefTyped.tsx"
      hints={[
        'forwardRef<HandleType, PropsType>((props, ref) => ...). The first generic is the ref type — what ref.current resolves to from the parent. For the basic case, that is HTMLInputElement.',
        'Define an imperative handle type: type FancyInputHandle = { focus: () => void; clear: () => void; select: () => void }. The parent declares useRef<FancyInputHandle>(null). The child forwardRef<FancyInputHandle, Props>.',
        'Inside the component, useImperativeHandle(ref, () => ({ focus() { innerRef.current?.focus() }, clear() { setValue("") }, select() { innerRef.current?.select() } }), []). Wrap the inner DOM ref in your own useRef so you can still touch the element.',
        'Spread the rest of props into the input: type Props = ComponentPropsWithoutRef<"input"> & { label?: string }. Native input props (placeholder, onChange) keep working unchanged.',
      ]}
    />
  )
}
