import ExercisePage from '../../components/ExercisePage'

export default function TypedExpressHandlers() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="Typed Express Handlers"
      difficulty="Intermediate"
      description="Express's Request type is generic: Request<Params, ResBody, ReqBody, Query>. Passing typed generics gives you autocomplete on req.params, req.body, and req.query — and forces res.json(body) to match the declared response body. The fastest way to stop casting req.body as { ... } in every handler."
      whatToBuild="In server/src/typescript/typed-handlers.ts, write three typed handlers. GET /typed/users/:id — params { id: string }, response { id: number; name: string }. POST /typed/users — body { name: string; email: string }, response same as GET. GET /typed/search — query { q?: string; page?: string }, response { results: string[] }. Confirm req.body.name and res.json({ id, ... }) are checked against the declared shapes."
      keyConcepts={['Request<Params, ResBody, ReqBody, Query>', 'RequestHandler', 'res.json typing', 'route param strings', 'query is always strings']}
      workspaceFile="server/src/typescript/typed-handlers.ts"
      hints={[
        'Generic order is fixed: Request<Params, ResBody, ReqBody, Query>. Skip with object: Request<{}, MyRes, MyBody>. The middle (ResBody) matters because it constrains res.json().',
        'All route params are strings — Express does not parse :id to a number. Convert manually with Number(req.params.id) and validate.',
        'Query strings are also strings (or string[]). page?: string, not page?: number. Coerce + validate at the boundary.',
        'RequestHandler<P, ResBody, ReqBody, Query> is the equivalent type for the whole handler function. Use either pattern — same result.',
      ]}
    />
  )
}
