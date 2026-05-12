import ExercisePage from '../../components/ExercisePage'

export default function Insert() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Insert"
      difficulty="Beginner"
      description="db.insert() builds an INSERT statement. You pass the table, then chain .values() with one object or an array of objects. .returning() tells Postgres to return the inserted rows — including generated ids and default values — instead of just a row count."
      whatToBuild="Write a POST /users route that inserts a single user from the request body and returns the created row. Write a POST /users/seed route that bulk-inserts 5 users in one statement. Write a POST /posts route that inserts a post with an authorId FK. All three routes use .returning() and respond with the inserted data."
      keyConcepts={['db.insert', '.values()', '.returning()', 'bulk insert', 'type inference', '$inferInsert']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'Single insert: const [user] = await db.insert(users).values({ name, email }).returning(). Destructure the first element — .returning() always returns an array even for single-row inserts.',
        'Bulk insert: await db.insert(users).values([{ name: "A" }, { name: "B" }, ...]).returning(). One round-trip to the database for all rows. Much faster than looping individual inserts.',
        'Use $inferInsert for the request body type: type NewUser = typeof users.$inferInsert. This gives you the TypeScript type for a valid insert payload — generated columns like id and createdAt are optional.',
        'Foreign key inserts must reference an existing parent row. If the authorId does not exist in users, Postgres will throw a foreign key violation. Handle it in a try/catch and return a 400 response.',
      ]}
    />
  )
}
