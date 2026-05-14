import { Router } from 'express'
// import { db } from '../db'
// import { users, posts } from '../db/schema'
// import { count, sql } from 'drizzle-orm'

const router = Router()

// GET /stats
// Exercise: Aggregates (E2E Dashboard)
//
// Step 1 — total user count:
//   const [{ userCount }] = await db.select({ userCount: count() }).from(users)
//
// Step 2 — total post count:
//   const [{ postCount }] = await db.select({ postCount: count() }).from(posts)
//
// Step 3 — posts per user (left join to include users with 0 posts):
//   const postsPerUser = await db
//     .select({ userId: users.id, name: users.name, count: sql<number>`count(${posts.id})` })
//     .from(users)
//     .leftJoin(posts, eq(posts.userId, users.id))
//     .groupBy(users.id, users.name)
//     .orderBy(desc(sql`count(${posts.id})`))
//
// Note: count() and sql<number>`` return a string at runtime from the Postgres driver.
// Coerce with Number(): Number(row.count)
//
// Return shape: { userCount: number, postCount: number, postsPerUser: Array<{userId, name, count}> }
router.get('/', async (_req, res) => {
  // TODO: implement aggregate queries
  res.json({ userCount: 0, postCount: 0, postsPerUser: [] })
})

export default router
