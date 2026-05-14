import { Router } from 'express'
// import { db } from '../db'
// import { users, posts } from '../db/schema'

const router = Router()

// POST /transactions/user-with-post
// Exercise: Transactions — db.transaction(async (tx) => {
//   const [user] = await tx.insert(users).values(...).returning()
//   const [post] = await tx.insert(posts).values({ userId: user.id, ... }).returning()
//   return { user, post }
// })
// If any step throws, the transaction is automatically rolled back.
router.post('/user-with-post', async (_req, res) => {
  // TODO: insert a user and their first post inside a single transaction
  res.status(201).json({})
})

export default router
