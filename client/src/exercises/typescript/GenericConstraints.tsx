import ExercisePage from '../../components/ExercisePage'

export default function GenericConstraints() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 3 — Generics']}
      title="Generic Constraints"
      difficulty="Intermediate"
      description="T extends U restricts what types can be passed for T. Constraints let you use properties of U inside the function body while keeping the call-site type precise. keyof T as a constraint is the foundation of every type-safe property accessor — pluck, get, set, omit."
      whatToBuild="Write longest<T extends { length: number }>(a: T, b: T): T that returns whichever has greater length. Confirm it accepts string, T[], and any object with a length number. Write getProp<T, K extends keyof T>(obj: T, key: K): T[K]. Add a default to setProp<T, K extends keyof T, V extends T[K]>(obj: T, key: K, val: V): T. Show inference still works at the call site — no explicit type args needed."
      keyConcepts={['T extends U', 'constraint upper bound', 'keyof constraints', 'T[K] indexed access', 'inference with constraints']}
      workspaceFile="client/src/exercises/typescript/GenericConstraints.tsx"
      hints={[
        'A constraint widens what you can do inside the function (you can use a.length) but narrows what callers can pass (must have length). Without the constraint, accessing a.length is a type error.',
        'extends keyof T constrains the key parameter to the actual keys of the object. getProp({ id: 1 }, "id") returns number. getProp({ id: 1 }, "name") errors at compile time.',
        'V extends T[K] makes the value depend on the key. setProp({ id: 1 }, "id", "string") errors because "string" is not assignable to number.',
        'Multiple constraints: T extends Animal & Named is allowed. T extends Animal, Named (comma-separated) is not — that is class-extends syntax.',
      ]}
    />
  )
}
