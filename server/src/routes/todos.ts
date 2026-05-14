import { Router } from 'express'
import { eq } from 'drizzle-orm'
import { db } from '../db'
import { todos } from '../db/schema'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const rows = await db.select().from(todos)
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.post('/', async (req, res) => {
  try {
    const { title } = req.body as { title?: string }
    if (!title || title.trim() === '') {
      res.status(400).json({ error: 'title is required' })
      return
    }
    const [created] = await db.insert(todos).values({ title: title.trim() }).returning()
    res.status(201).json(created)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params['id'])
    const body = req.body as Partial<{ title: string; done: boolean }>
    const [updated] = await db.update(todos).set(body).where(eq(todos.id, id)).returning()
    if (!updated) {
      res.status(404).json({ error: 'Not found' })
      return
    }
    res.json(updated)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params['id'])
    const [deleted] = await db.delete(todos).where(eq(todos.id, id)).returning()
    if (!deleted) {
      res.status(404).json({ error: 'Not found' })
      return
    }
    res.sendStatus(204)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
