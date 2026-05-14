import request from 'supertest'
import { app } from '../index'

// vi.mock is hoisted before imports by Vitest, so `mockResolvedData` declared
// here is still captured in the factory closure after hoisting.
let mockResolvedData: unknown = []

vi.mock('../db', () => {
  const makeChain = () => ({
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
    returning: vi.fn().mockImplementation(() => Promise.resolve(mockResolvedData)),
    // Makes the chain itself awaitable for calls without .returning()
    then: (resolve: (v: unknown) => void, reject?: (e: unknown) => void) =>
      Promise.resolve(mockResolvedData).then(resolve, reject),
  })
  return {
    db: {
      select: vi.fn().mockImplementation(makeChain),
      insert: vi.fn().mockImplementation(makeChain),
      update: vi.fn().mockImplementation(makeChain),
      delete: vi.fn().mockImplementation(makeChain),
    },
  }
})

const todo = { id: 1, title: 'Buy milk', done: false, createdAt: new Date().toISOString() }

beforeEach(() => {
  mockResolvedData = []
})

describe('GET /todos', () => {
  it('returns an empty array when there are no todos', async () => {
    const res = await request(app).get('/todos')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('returns the list of todos from the database', async () => {
    mockResolvedData = [todo]
    const res = await request(app).get('/todos')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toMatchObject({ title: 'Buy milk' })
  })
})

describe('POST /todos', () => {
  it('creates a todo and returns 201 with the created row', async () => {
    mockResolvedData = [todo]
    const res = await request(app).post('/todos').send({ title: 'Buy milk' })
    expect(res.status).toBe(201)
    expect(res.body).toMatchObject({ title: 'Buy milk' })
  })

  it('returns 400 when title is missing', async () => {
    const res = await request(app).post('/todos').send({})
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('error')
  })
})

describe('PATCH /todos/:id', () => {
  it('returns the updated todo on success', async () => {
    mockResolvedData = [{ ...todo, done: true }]
    const res = await request(app).patch('/todos/1').send({ done: true })
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({ done: true })
  })

  it('returns 404 when the todo does not exist', async () => {
    mockResolvedData = []
    const res = await request(app).patch('/todos/999').send({ done: true })
    expect(res.status).toBe(404)
  })
})

describe('DELETE /todos/:id', () => {
  it('returns 204 on successful deletion', async () => {
    mockResolvedData = [todo]
    const res = await request(app).delete('/todos/1')
    expect(res.status).toBe(204)
  })

  it('returns 404 when the todo does not exist', async () => {
    mockResolvedData = []
    const res = await request(app).delete('/todos/999')
    expect(res.status).toBe(404)
  })
})
