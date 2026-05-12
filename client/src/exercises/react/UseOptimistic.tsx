import ExercisePage from '../../components/ExercisePage'

export default function UseOptimistic() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 3 — React 19']}
      title="useOptimistic"
      difficulty="Advanced"
      description="useOptimistic lets you show an optimistic (predicted) UI state while an async action is in-flight. The optimistic state is applied immediately and automatically reverted if the action fails — giving you instant feedback with correct rollback."
      whatToBuild="A todo list connected to the Express server (GET /todos, POST /todos, DELETE /todos/:id). Adding a todo instantly appends it to the list with a 'Saving...' badge and reduced opacity. Deleting a todo instantly removes it from view. Both roll back automatically if the server returns an error, and you show an error toast on failure."
      keyConcepts={['useOptimistic', 'optimistic update', 'rollback', 'startTransition', 'pending state']}
      workspaceFile="client/src/exercises/react/UseOptimistic.tsx"
      hints={[
        'const [optimisticTodos, addOptimistic] = useOptimistic(todos, (state, newTodo) => [...state, newTodo]). optimisticTodos is what you render. todos is the server-confirmed list — React reverts to it when the transition settles.',
        'Wrap your mutation in startTransition: startTransition(async () => { addOptimistic(tempTodo); await postTodo(data); await refetch(); }). The optimistic state persists for the entire duration of the transition.',
        'If the server errors, the transition throws and React automatically reverts optimisticTodos back to todos. Catch the throw with a try/catch inside startTransition to show a toast instead of an unhandled rejection.',
        'Tag optimistic items with a temporary id and a pending flag: { ...data, id: crypto.randomUUID(), pending: true }. Use pending to apply styles: className={item.pending ? "opacity-50" : ""} and the Saving badge.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
