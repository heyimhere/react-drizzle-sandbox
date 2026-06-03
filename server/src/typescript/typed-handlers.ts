// Workspace file for: TypeScript / Tier 6 — Typed Express Handlers
//
// Goal: write three typed Express handlers using
//   Request<Params, ResBody, ReqBody, Query>
// so req.params, req.body, req.query, and res.json() are all type-checked.
//
// Routes to implement:
//   GET  /typed/users/:id   params { id: string }     response { id: number; name: string }
//   POST /typed/users       body   { name; email }    response same as GET
//   GET  /typed/search      query  { q?; page? }      response { results: string[] }
//
// To wire up: add `app.use('/typed', typedRouter)` in server/src/index.ts.

import { Router } from 'express'

export const typedRouter = Router()

// Implement the three handlers below.
