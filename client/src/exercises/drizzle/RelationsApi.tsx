import ExercisePage from '../../components/ExercisePage'

export default function RelationsApi() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 3 — Query Power']}
      title="Relations API"
      difficulty="Intermediate"
      description="Drizzle's relations API is a higher-level abstraction over joins. You declare the relationships once in relations() definitions, then use db.query.<table>.findMany({ with: {} }) to eagerly load related records without writing explicit join conditions every time."
      whatToBuild="Define usersRelations (one user has many posts) and postsRelations (one post belongs to one user) in schema.ts. Then write three routes using the query API: GET /users with all their posts included, GET /posts with their author included, and GET /users/:id with posts filtered to only published ones."
      keyConcepts={['relations', 'one', 'many', 'db.query', 'findMany', 'findFirst', 'eager loading']}
      workspaceFile="server/src/db/schema.ts"
      hints={[
        'Define relations in schema.ts after the table definitions: export const usersRelations = relations(users, ({ many }) => ({ posts: many(posts) })). Export them — they must be included in the schema object passed to drizzle().',
        'Query with relations: await db.query.users.findMany({ with: { posts: true } }). Drizzle generates the SQL joins automatically. The return type has posts: Post[] nested inside each user object.',
        'Filtered eager loading: with: { posts: { where: eq(posts.published, true) } }. You can also add limit and orderBy inside the with clause for the related records.',
        'The relational API requires the schema param in drizzle(pool, { schema }) — this is already set up in db/index.ts. Without it, db.query is undefined at runtime.',
      ]}
    />
  )
}
