// Workspace file for: TypeScript / Tier 6 — Zod-Validated Bodies
//
// Goal: define a runtime+type schema with zod, derive its TS type via
// z.infer, then validate Express request bodies at the boundary.
//
// Steps:
//   1. import { z } from 'zod'
//   2. const CreateUserBody = z.object({
//        name:  z.string().min(1),
//        email: z.string().email(),
//        bio:   z.string().optional(),
//      })
//   3. type CreateUserBody = z.infer<typeof CreateUserBody>
//   4. In a route handler: const r = CreateUserBody.safeParse(req.body)
//      if (!r.success) res.status(400).json({ errors: r.error.issues })
//      else use r.data (fully typed).

export {}
