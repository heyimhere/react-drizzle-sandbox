import ExercisePage from '../../components/ExercisePage'

export default function SharedDtoTypes() {
  return (
    <ExercisePage
      breadcrumb={['TypeScript', 'Tier 6 — TS × Backend']}
      title="Shared DTOs (Client ↔ Server)"
      difficulty="Intermediate"
      description="When the same shape flows from server endpoint to client fetch result, hand-typing it on both ends invites drift. A shared types file — imported by both — keeps them locked together. Even better, derive the shape from the server's Drizzle row type and have the client import that. One change, both sides update."
      whatToBuild="Create shared/types.ts at the repo root. Export type User and type CreateUserInput. From the client, write fetcher<T>(url: string): Promise<T> and call it as fetcher<User>('/users/1'). From the server, type the response with the same User type. Confirm renaming a User field in shared/types.ts breaks both client and server compilation until both are fixed."
      keyConcepts={['shared types folder', 'cross-package imports', 'client fetcher typing', 'response/request DTOs', 'compile-time coupling']}
      workspaceFile="shared/types.ts"
      workspaceFiles={['client/src/exercises/typescript/SharedDtoTypes.tsx', 'server/src/typescript/typed-handlers.ts']}
      hints={[
        'Keep the shared file dependency-free: no React imports, no Express imports. Pure data shapes. The whole point is broad importability.',
        'For monorepos with strict boundaries: a separate package or a tsconfig path alias. For this sandbox: a top-level shared/ folder both client and server reference via relative path.',
        'If a shape is server-internal (e.g., includes a hashed password), keep it server-only. Shared/ is the contract surface — only put what crosses the boundary.',
        'Once shared, prefer deriving response types from server-side schemas: type UserResponse = Pick<DbUser, "id" | "name">. Manual DTO copies drift fastest.',
      ]}
    />
  )
}
