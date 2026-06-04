import ExercisePage from '../../components/ExercisePage'

export default function FunctionTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 1 — Fundamentals']}
      title="Function Types"
      difficulty="Beginner"
      description="Functions can be typed inline, with type aliases, with interfaces, or as call signatures. Optional and default parameters change the inferred type. Overloads let one function present multiple signatures to callers. void as a return means callers should ignore the return value (not that the function returns undefined)."
      whatToBuild="Declare a function add three ways: inline parameters, a type alias (type Add = (a: number, b: number) => number), and a call signature on an interface. Write a greet function with optional name (?), default greeting, and rest tags. Write overloads for parseValue: (s: string) => number and (s: number) => string. Show why void return type is permissive: forEach callback returns ignored."
      keyConcepts={['function types', 'optional params', 'default params', 'rest params', 'overloads', 'void vs undefined']}
      workspaceFile="client/src/exercises/typescript/FunctionTypes.tsx"
      hints={[
        'Function overloads: declare multiple signatures, then the implementation with a wider parameter type. The implementation signature is not visible to callers. function fn(x: string): number; function fn(x: number): string; function fn(x: string | number) { ... }.',
        'void return is special: a callback typed () => void can be implemented by () => number — the return value is just ignored. This is why arr.forEach(item => bag.push(item)) compiles even though push returns a number.',
        'Optional params must come after required ones. Use default params (greeting: string = "hi") for both — defaults make the param optional automatically.',
        'Rest parameters are typed as arrays: (...tags: string[]). At the call site each rest arg is separate. Use tuples for typed rest: function fn(...args: [string, number, boolean]).',
      ]}
    />
  )
}
