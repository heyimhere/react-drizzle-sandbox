import { Router } from 'express'
import { db } from '../db'

const router = Router()

// Scratch around down here — wipe and rewrite freely.

router.get('/', async (_req, res) => {
  try {
    const result = await db.execute('SELECT 1 + 1 AS answer')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
