// Add table definitions here as you work through Drizzle exercises.
// Example to get started:
//
import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id:        serial('id').primaryKey(),
  title:     text('title').notNull(),
  done:      boolean('done').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export {}

