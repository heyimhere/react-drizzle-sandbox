import { Router } from 'express'
// import { db } from '../db'
// import { users } from '../db/schema'
// import { eq, ilike } from 'drizzle-orm'

const router = Router()

// GET /users
// Exercise: Select — db.select().from(users)
// Exercise: WhereClauses — add .where(eq(users.id, id)) or .where(ilike(users.name, `%${q}%`))
router.get('/', async (_req, res) => {
  // TODO: return all users
  res.json([])
})

// GET /users/:id
// Exercise: Select — db.select().from(users).where(eq(users.id, id))
// Exercise: TypeInference — type the return as typeof users.$inferSelect
router.get('/:id', async (_req, res) => {
  // TODO: return one user by id, 404 if not found
  res.json(null)
})

// POST /users
// Exercise: Insert — db.insert(users).values(body).returning()
router.post('/', async (_req, res) => {
  // TODO: insert a user, return 201 + created row
  res.status(201).json({})
})

// PATCH /users/:id
// Exercise: Update — db.update(users).set(body).where(eq(users.id, id)).returning()
router.patch('/:id', async (_req, res) => {
  // TODO: partial update, 404 if not found
  res.json({})
})

// DELETE /users/:id
// Exercise: Delete — db.delete(users).where(eq(users.id, id)).returning()
router.delete('/:id', async (_req, res) => {
  // TODO: delete and return 204, 404 if not found
  res.sendStatus(204)
})

// GET /users/:id/posts
// Exercise: RelationsAPI (E2E User Posts)
//
// Use the Drizzle Relations API (db.query) instead of a raw join:
//   const result = await db.query.users.findFirst({
//     where: eq(users.id, Number(req.params.id)),
//     with: { posts: true },
//   })
//   if (!result) return res.status(404).json({ error: 'Not found' })
//   const { posts, ...user } = result
//   res.json({ user, posts })
//
// Compare this with the explicit innerJoin in GET /posts/with-authors —
// the Relations API returns nested objects; joins return flat merged rows.
router.get('/:id/posts', async (_req, res) => {
  // TODO: use db.query.users.findFirst({ with: { posts: true } })
  res.json({ user: null, posts: [] })
})

export default router
