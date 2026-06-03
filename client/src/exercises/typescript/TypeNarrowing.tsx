import ExercisePage from '../../components/ExercisePage'

export default function TypeNarrowing() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 2 — Unions & Narrowing']}
      title="Type Narrowing"
      difficulty="Beginner"
      description="Narrowing is how TypeScript moves from a union type to one of its members based on runtime checks. typeof, instanceof, the in operator, equality checks, truthiness, and Array.isArray each narrow in different ways. Mastering narrowing is the difference between writing safe TypeScript and fighting it."
      whatToBuild="Write five narrowing functions. (1) format(x: string | number) using typeof. (2) handle(err: Error | string) using instanceof Error. (3) read(input: HTMLInputElement | HTMLSelectElement) using 'value' in input (both have it — try a discriminator instead). (4) firstOrEmpty(x: string | string[]) using Array.isArray. (5) describe(x: 'ok' | 'fail' | null) using equality narrowing in switch."
      keyConcepts={['typeof narrowing', 'instanceof narrowing', 'in operator', 'truthiness narrowing', 'equality narrowing', 'Array.isArray']}
      workspaceFile="client/src/exercises/typescript/TypeNarrowing.tsx"
      hints={[
        'typeof returns one of seven strings: "string" | "number" | "boolean" | "undefined" | "object" | "function" | "symbol" | "bigint". null is "object" — narrow with === null instead.',
        'in operator narrows by property existence: if ("bark" in animal) { animal.bark() }. Works on any object union with non-overlapping keys.',
        'Truthiness is risky for number | undefined: a real value of 0 is falsy. Use typeof x === "number" or x !== undefined explicitly instead of if (x).',
        'Assignment narrowing: let x: string | null = null; x = "hi"; — after assignment, x is narrowed to string. Useful in setup blocks.',
      ]}
    />
  )
}
