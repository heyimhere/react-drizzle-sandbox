import { Router } from 'express'
// import { db } from '../db'
// import { posts, users } from '../db/schema'
// import { eq, count, desc, sql } from 'drizzle-orm'

const router = Router()

// GET /posts
// Exercise: Pagination — add ?page=1&limit=10, use .limit().offset()
// Exercise: Aggregates — db.select({ count: count() }).from(posts)
// Exercise: OrderBy    — .orderBy(desc(posts.createdAt))
router.get('/', async (_req, res) => {
  // TODO: return paginated posts
  res.json([])
})

// GET /posts/with-authors
// Exercise: Joins — db.select().from(posts).innerJoin(users, eq(posts.userId, users.id))
// Exercise: RelationsApi — db.query.posts.findMany({ with: { author: true } })
router.get('/with-authors', async (_req, res) => {
  // TODO: return posts joined with their author
  res.json([])
})

// GET /posts/:id
// Exercise: PreparedStatements — db.select().from(posts).where(eq(posts.id, sql.placeholder('id'))).prepare('get_post')
router.get('/:id', async (_req, res) => {
  // TODO: return one post by id
  res.json(null)
})

// POST /posts
// Exercise: Insert — db.insert(posts).values(body).returning()
// Exercise: Transactions — wrap user creation + first post in db.transaction(async (tx) => { ... })
router.post('/', async (_req, res) => {
  // TODO: create a post
  res.status(201).json({})
})

// PATCH /posts/:id
// Exercise: Update — db.update(posts).set(body).where(eq(posts.id, id)).returning()
// Exercise: SqlTag  — filter with sql`lower(${posts.title}) like ${'%' + q + '%'}`
router.patch('/:id', async (_req, res) => {
  // TODO: update a post
  res.json({})
})

// DELETE /posts/:id
router.delete('/:id', async (_req, res) => {
  // TODO: delete a post
  res.sendStatus(204)
})

export default router
