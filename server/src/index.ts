import 'dotenv/config'
import express from 'express'

const app = express()
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

// Register exercise routers here, e.g.:
// import todosRouter from './routes/todos.js'
// app.use('/todos', todosRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
