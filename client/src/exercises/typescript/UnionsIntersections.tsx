import ExercisePage from '../../components/ExercisePage'

export default function UnionsIntersections() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="Unions & Intersections"
      difficulty="Beginner"
      description="| (union) means either: A | B is 'either an A or a B'. & (intersection) means both: A & B has every property of both. Unions of object types are restrictive (you can only access common properties), intersections are permissive (you have access to all). Generic types distribute over unions — sometimes you want this, sometimes you do not."
      whatToBuild="Define type Cat = { meow: () => void; whiskers: number } and Dog = { bark: () => void; tail: number }. Construct values of Cat | Dog and Cat & Dog. Show what you can call on each. Then write a generic Box<T> = { value: T } and show that Box<Cat | Dog> is different from Box<Cat> | Box<Dog> — distribution gotcha."
      keyConcepts={['union types', 'intersection types', 'common properties', 'distributive conditionals', 'never as identity']}
      workspaceFile="client/src/exercises/typescript/UnionsIntersections.tsx"
      hints={[
        'Union of objects allows only common properties: (Cat | Dog).whiskers is an error because Dog has no whiskers. You must narrow first.',
        'Intersection of incompatible primitives is never: string & number = never. TypeScript collapses impossible intersections automatically.',
        'Distribution: type ToArray<T> = T extends any ? T[] : never; ToArray<string | number> = string[] | number[], not (string | number)[]. To stop distribution, wrap in a tuple: [T] extends [any] ? [T][] : never.',
        'Use & to extend a type without inheritance: type AdminUser = User & { role: "admin" }. Cleaner than creating an Admin interface that extends User when you do not need a named type.',
      ]}
    />
  )
}
