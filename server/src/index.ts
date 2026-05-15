import 'dotenv/config'
import express from 'express'
import todosRouter from './routes/todos'
import usersRouter from './routes/users'
import postsRouter from './routes/posts'
import transactionsRouter from './routes/transactions'
import statsRouter from './routes/stats'
import scratchRouter from './routes/scratch'
import { errorHandler } from './middleware/errorHandler'

export const app = express()
const PORT = process.env['PORT'] ?? 3001

app.use(express.json())

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (_req.method === 'OPTIONS') {
    res.sendStatus(204)
    return
  }
  next()
})

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/todos', todosRouter)
app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/transactions', transactionsRouter)
app.use('/stats', statsRouter)
app.use('/scratch', scratchRouter)

// Must be registered after all routes — Express identifies error handlers by the 4-argument signature
app.use(errorHandler)

// Guard prevents the server from binding a port when supertest imports this module during tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
