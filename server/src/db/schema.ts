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

// Audit log for scratchItems — written from inside the POST transaction.
// onDelete: 'cascade' so log rows vanish when the parent item is deleted
// (otherwise we'd leak dangling references).
export const scratchLog = pgTable('scratch_log', {
  id: serial('id').primaryKey(),
  scratchItemId: integer('scratch_item_id').notNull().references(() => scratchItems.id, { onDelete: 'cascade' }),
  event: text('event').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
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

// ── comments ──────────────────────────────────────────────────────────────────
// Used by: E2E CommentsThreaded exercise
// Demonstrates: self-referential foreign key for parent/child threading
export const comments = pgTable(
  'comments',
  {
    id: serial('id').primaryKey(),
    postId: integer('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
    parentId: integer('parent_id'),
    body: text('body').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (t) => [
    index('comments_post_id_idx').on(t.postId),
    index('comments_parent_id_idx').on(t.parentId),
  ],
)

// ── tags + post_tags (many-to-many) ───────────────────────────────────────────
// Used by: E2E TagsManyToMany exercise
export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
})

export const postTags = pgTable(
  'post_tags',
  {
    postId: integer('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
    tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
  },
  (t) => [
    index('post_tags_post_id_idx').on(t.postId),
    index('post_tags_tag_id_idx').on(t.tagId),
  ],
)

// ── relations (Drizzle Relations API) ─────────────────────────────────────────
// Used by: RelationsApi exercise — db.query.users.findMany({ with: { posts: true } })
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}))

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, { fields: [posts.userId], references: [users.id] }),
  comments: many(comments),
  postTags: many(postTags),
}))

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, { fields: [comments.postId], references: [posts.id] }),
}))

export const tagsRelations = relations(tags, ({ many }) => ({
  postTags: many(postTags),
}))

export const postTagsRelations = relations(postTags, ({ one }) => ({
  post: one(posts, { fields: [postTags.postId], references: [posts.id] }),
  tag: one(tags, { fields: [postTags.tagId], references: [tags.id] }),
}))
