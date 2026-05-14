import { Router } from 'express'
// import { db } from '../db'
// import { posts, users } from '../db/schema'
// import { eq, count, desc, ilike, and, sql } from 'drizzle-orm'

const router = Router()

// GET /posts?q=&page=&limit=
// Exercise: Pagination + Search (E2E Posts Search)
//
// 1. Parse query params: q (string), page (number, default 1), limit (number, default 10)
// 2. Build optional WHERE condition:
//      const condition = q ? ilike(posts.title, `%${q}%`) : undefined
// 3. Count total matching rows (for pagination math):
//      const [{ total }] = await db.select({ total: count() }).from(posts).where(condition)
// 4. Fetch page of data:
//      const data = await db.select().from(posts)
//        .where(condition)
//        .orderBy(desc(posts.createdAt))
//        .limit(limit)
//        .offset((page - 1) * limit)
// 5. Return: { data, total: Number(total), page, pages: Math.ceil(Number(total) / limit) }
//
// Drizzle concepts: ilike, count(), and(), limit, offset, orderBy, dynamic WHERE
router.get('/', async (_req, res) => {
  // TODO: implement search + pagination
  res.json({ data: [], total: 0, page: 1, pages: 0 })
})

// GET /posts/with-authors
// Exercise: Joins (E2E Posts with Authors)
//
// Inner join — only posts that have a valid author row:
//   const rows = await db
//     .select({ post: posts, author: { name: users.name, email: users.email } })
//     .from(posts)
//     .innerJoin(users, eq(posts.userId, users.id))
//     .orderBy(desc(posts.createdAt))
//
// Note: column is posts.userId (not posts.authorId — ignore hints in the Joins exercise that say authorId)
// Each row shape: { post: { id, userId, title, body, createdAt }, author: { name, email } }
router.get('/with-authors', async (_req, res) => {
  // TODO: return posts joined with their author using innerJoin
  res.json([])
})

// GET /posts/search?q=
// Exercise: Advanced Search — Prepared Statements + SQL Tag (E2E)
//
// Use the sql template tag for the ILIKE pattern and prepare the statement:
//   import { placeholder } from 'drizzle-orm'
//
//   const searchPosts = db
//     .select({ id: posts.id, title: posts.title, body: posts.body,
//               userId: posts.userId, createdAt: posts.createdAt,
//               authorName: users.name })
//     .from(posts)
//     .innerJoin(users, eq(posts.userId, users.id))
//     .where(ilike(posts.title, sql`${'%' + placeholder('q') + '%'}`)  // or use sql`` directly
//     .prepare('search_posts_by_title')
//
// Then execute: await searchPosts.execute({ q: req.query.q })
//
// Returns: Array<{ id, title, body, userId, createdAt, authorName }>
router.get('/search', async (_req, res) => {
  // TODO: implement as a prepared statement using sql template tag
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
  // TODO: create a post (body: { title, body, userId })
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
