import type { ErrorRequestHandler } from 'express'

// Must have 4 parameters so Express recognizes it as an error handler.
// Express 5 automatically catches rejected promises from async route handlers
// and passes the error here — no need for try/catch in every route.
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: err instanceof Error ? err.message : 'Internal server error' })
}
