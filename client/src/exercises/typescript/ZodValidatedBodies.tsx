import ExercisePage from '../../components/ExercisePage'

export default function ZodValidatedBodies() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="Zod-Validated Bodies"
      difficulty="Intermediate"
      description="Zod gives you a runtime schema and a TypeScript type from one source. const Body = z.object({ name: z.string().min(1), email: z.string().email() }); type Body = z.infer<typeof Body>. Parse req.body with Body.parse() — it throws on invalid input and narrows the result. The boundary between untrusted HTTP and your typed handler."
      whatToBuild="In server/src/typescript/zod-schemas.ts, define a CreateUserBody schema (name min 1, email format, optional bio). Derive its type with z.infer. Write a typed POST handler that calls CreateUserBody.parse(req.body) inside a try/catch and returns 400 on ZodError. Confirm the result of parse() is fully typed — no req.body as ... cast anywhere."
      keyConcepts={['z.object', 'z.infer', 'parse vs safeParse', 'runtime + type at one source', 'boundary validation']}
      workspaceFile="server/src/typescript/zod-schemas.ts"
      hints={[
        'z.infer<typeof Schema> turns a schema into a TS type. The type matches what parse() returns — refined, transformed, defaulted, exactly the runtime shape.',
        'Use safeParse to avoid try/catch: const r = Schema.safeParse(req.body); if (!r.success) return res.status(400).json({ errors: r.error.issues }).',
        'Combine with Drizzle: build your insert from the parsed result. type CreateUserBody = z.infer<typeof CreateUserBody> and your db.insert(users).values(parsed) is fully typed end-to-end.',
        'Be intentional about which fields are required: many API mistakes happen because clients omit optional fields the server treated as required. Encode the contract in the schema, not in your head.',
      ]}
    />
  )
}
