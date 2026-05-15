import { pgTable, serial, text, boolean, timestamp, integer, index } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// --- scratch --------------- 
// Used by: scratch e2e workflow
export const scratchItems = pgTable('scratch_items', {
  id: serial('id').primaryKey(),
  label: text('label').notNull(),
  done: boolean('done').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow(),
})

// ── todos ─────────────────────────────────────────────────────────────────────
// Used by: Insert, Select, Update, Delete, Transactions (Tier 2) exercises
export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  done: boolean('done').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// ── users ─────────────────────────────────────────────────────────────────────
// Used by: WhereClauses, Joins, RelationsApi, TypeInference, PreparedStatements
// Demonstrates: unique constraint
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// ── posts ─────────────────────────────────────────────────────────────────────
// Used by: Joins, Pagination, Aggregates, RelationsApi, Transactions, SqlTag
// Demonstrates: foreign key + cascade delete, compound indexes
export const posts = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    title: text('title').notNull(),
    body: text('body').notNull().default(''),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (t) => [
    index('posts_user_id_idx').on(t.userId),       // speeds up JOIN and FK lookups
    index('posts_created_at_idx').on(t.createdAt), // speeds up ORDER BY / pagination
  ],
)

// ── relations (Drizzle Relations API) ─────────────────────────────────────────
// Used by: RelationsApi exercise — db.query.users.findMany({ with: { posts: true } })
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}))

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, { fields: [posts.userId], references: [users.id] }),
}))
