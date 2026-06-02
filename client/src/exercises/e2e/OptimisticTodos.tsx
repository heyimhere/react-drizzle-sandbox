import ExercisePage from '../../components/ExercisePage'

export default function OptimisticTodos() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Optimistic Todos"
      difficulty="Intermediate"
      description="Optimistic UI updates the screen immediately based on what the user did, then reconciles with the server's actual response. React 19's useOptimistic gives you a clean state machine: optimisticState for rendering, addOptimistic for the speculative update, and the real setState for the confirmed value."
      whatToBuild="Layer on the existing /todos backend. The user can add, toggle, and delete a todo with no perceived latency — the UI updates instantly via useOptimistic. If the server rejects (simulate a random 500), the optimistic row should roll back and surface an error toast. Confirmed rows look identical to optimistic ones."
      keyConcepts={['useOptimistic', 'startTransition wrapping the action', 'reconciliation', 'rollback on error', 'optimistic flag for styling']}
      workspaceFile="client/src/exercises/e2e/OptimisticTodos.tsx"
      workspaceFiles={['server/src/routes/todos.ts']}
      hints={[
        'const [optimistic, addOptimistic] = useOptimistic(todos, (state, action: { type: "add", item } | { type: "toggle", id } | { type: "delete", id }) => { switch (action.type) { case "add": return [...state, { ...action.item, optimistic: true }]; ... } }). Reducer returns the speculative state.',
        'On submit, wrap the action in startTransition: startTransition(async () => { addOptimistic({ type: "add", item }); const saved = await fetch(...); setTodos(prev => [...prev, saved]) }). useOptimistic auto-discards its state once the transition completes.',
        'For rollback on error, do not setTodos. The optimistic state is dropped when the transition completes, so the UI naturally reverts to the pre-optimistic real list. Push a toast for the user.',
        'Style optimistic rows subtly — opacity 0.7 and a tiny "pending" dot. Once the real state updates, the optimistic flag disappears and the row solidifies.',
      ]}
    />
  )
}
