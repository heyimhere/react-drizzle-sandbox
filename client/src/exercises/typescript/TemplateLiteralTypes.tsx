import ExercisePage from '../../components/ExercisePage'

export default function TemplateLiteralTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 4 — Utility & Mapped Types']}
      title="Template Literal Types"
      difficulty="Advanced"
      description="Template literal types compose string literals at the type level: `${'get' | 'set'}${'X' | 'Y'}` yields 'getX' | 'getY' | 'setX' | 'setY'. Combined with infer in conditional types, you can parse strings — extract route params, derive event names, validate string shapes. The basis behind libraries like tRPC and React Router's typed paths."
      whatToBuild="Write type Method = 'get' | 'post'. Build type Endpoint = `${Uppercase<Method>} /${string}` so 'GET /users' is valid but 'PATCH /x' is not. Then write type RouteParams<S extends string> that extracts ':id' and ':slug' from '/users/:id/posts/:slug' into { id: string; slug: string }. Use infer inside a recursive conditional type."
      keyConcepts={['template literal types', 'string concatenation in types', 'infer in templates', 'recursive type parsing', 'route param extraction']}
      workspaceFile="client/src/exercises/typescript/TemplateLiteralTypes.tsx"
      hints={[
        '`${A}-${B}` literal type produces the cross product of A and B. With unions of literals, the result can be huge — keep type-level computations bounded.',
        'Extract pattern: type Param<S> = S extends `:${infer P}` ? P : never. infer P captures whatever fills the placeholder.',
        'Recursive parser: type Params<S> = S extends `${string}:${infer P}/${infer Rest}` ? { [K in P | keyof Params<`/${Rest}`>]: string } : S extends `${string}:${infer P}` ? { [K in P]: string } : {}.',
        'TypeScript caps recursion depth (currently 1000). Pathologically nested templates can hit the limit. If you need deeper recursion, reformulate iteratively using tuple accumulators.',
      ]}
    />
  )
}
