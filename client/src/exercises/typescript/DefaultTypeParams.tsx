import ExercisePage from '../../components/ExercisePage'

export default function DefaultTypeParams() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 3 — Generics']}
      title="Default Type Parameters"
      difficulty="Intermediate"
      description="Type parameters can have defaults: function fn<T = string>(x?: T). When callers do not specify and inference cannot pick one (e.g., the param is optional and missing), TypeScript falls back to the default. Common in React hook signatures, Express handler generics, and event emitter typing."
      whatToBuild="Write makeBag<T = string>(initial: T[] = []): T[]. Show makeBag() defaults to string[]. Show makeBag<number>() gives number[]. Show makeBag([1, 2]) infers number[] (inference wins over default). Then re-create the standard React.useState<T>(initial?: T) signature with a default — initial state is undefined unless caller provides T."
      keyConcepts={['default type params', 'inference vs default', 'optional generics', 'API ergonomics']}
      workspaceFile="client/src/exercises/typescript/DefaultTypeParams.tsx"
      hints={[
        'Syntax: <T = DefaultType>. Defaults must come at the end, just like default function params.',
        'Inference always beats the default. Defaults only kick in when there is no information to infer from — usually when the relevant parameter is optional and omitted.',
        'A default with a constraint: <T extends object = {}>. Common in higher-order components and event emitter generics.',
        'Be careful of defaults that hide bugs. Express Request defaults all four generics to common shapes (Params, Body, Query, ResBody) — handy, but means typos in your route handler may silently use the wrong default.',
      ]}
    />
  )
}
