// Workspace file for: TypeScript / Tier 6 — Drizzle $infer types & InferSelectModel helpers
//
// Goal: derive TS types directly from the Drizzle schema, then use them
// to type repo helpers without hand-written interfaces.
//
// Steps:
//   1. import { users, posts } from '../db/schema'
//   2. type User    = typeof users.$inferSelect
//      type NewUser = typeof users.$inferInsert
//   3. import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
//      Confirm InferSelectModel<typeof users> matches User.
//   4. Write a generic repo helper `repo<T extends PgTable>(table: T)`
//      that exposes typed findAll / insertOne.

export {}
