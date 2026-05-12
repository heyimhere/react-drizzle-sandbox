import ExercisePage from '../../components/ExercisePage'

export default function Select() {
  return (
    <ExercisePage
      breadcrumb={['Drizzle', 'Tier 2 — CRUD']}
      title="Select"
      difficulty="Beginner"
      description="db.select() builds a SELECT statement. By default it selects all columns. You can project specific columns by passing an object to select(). Chain .from(), .where(), and other clauses to build the query. The result is always a typed array."
      whatToBuild="Write four GET routes: GET /users (all users), GET /users/:id (one user by id, 404 if not found), GET /users?published=true (filtered), and GET /users/names (only id and name columns — no email). All routes return typed JSON responses."
      keyConcepts={['db.select', '.from()', '.where()', 'column projection', 'eq', '$inferSelect']}
      workspaceFile="server/src/routes/users.ts"
      hints={[
        'All rows: const users = await db.select().from(usersTable). The return type is (typeof usersTable.$inferSelect)[] — fully typed with no casting needed.',
        'Specific columns: await db.select({ id: usersTable.id, name: usersTable.name }).from(usersTable). The return type is { id: number; name: string }[] — only the projected fields.',
        'Filter: import { eq } from "drizzle-orm"; await db.select().from(users).where(eq(users.id, Number(req.params.id))). The eq() helper generates a parameterized WHERE clause — no string interpolation.',
        'For 404 handling: const [user] = await db.select().from(users).where(eq(users.id, id)). If user is undefined, return res.status(404).json({ error: "Not found" }). Destructuring gives undefined when the array is empty.',
      ]}
    />
  )
}
