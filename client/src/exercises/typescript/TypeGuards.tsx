import ExercisePage from '../../components/ExercisePage'

export default function TypeGuards() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="User-Defined Type Guards"
      difficulty="Intermediate"
      description="A user-defined type guard is a function returning x is T. TypeScript treats the return true branch as narrowing the input to T. Type guards let you encapsulate complex shape checks behind a named function and reuse them across an app — the right pattern for validating untyped JSON, narrowing DOM nodes, or distinguishing rich object shapes."
      whatToBuild="Write three guards. (1) isString(x: unknown): x is string. (2) isUser(x: unknown): x is { id: number; name: string } that checks shape at runtime. (3) isHTMLInputElement(el: Element): el is HTMLInputElement using instanceof. Then write a function that filters a mixed array down to one type: arr.filter(isUser) returns User[] without any further annotation."
      keyConcepts={['type predicates', 'x is T', 'unknown narrowing', 'shape validation', 'filter narrowing']}
      workspaceFile="client/src/exercises/typescript/TypeGuards.tsx"
      hints={[
        'Signature shape: function isUser(x: unknown): x is User. The body returns boolean — TypeScript trusts you to return true exactly when the runtime check matches the type.',
        'Common pattern for object guards: typeof x === "object" && x !== null && "id" in x && typeof (x as { id: unknown }).id === "number". The (x as { id: unknown }) cast lets you access keys after the in check.',
        'arr.filter(isUser) returns User[] because filter knows the predicate narrows. The same with .find(isUser): User | undefined.',
        'For nested validation, compose guards: isUser checks id and name; isUserWithPosts also checks posts.every(isPost). Each guard is a building block.',
      ]}
    />
  )
}
