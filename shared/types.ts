// Workspace file for: TypeScript / Tier 6 — Shared DTOs and Branded IDs
//
// Shared shapes imported by both client and server. Keep this file
// dependency-free — no React, no Express, no Drizzle imports.
//
// Patterns to practice here:
//   1. Plain DTO:
//        export type User = { id: UserId; name: string; email: string }
//        export type CreateUserInput = Pick<User, 'name' | 'email'>
//
//   2. Branded IDs (nominal types via phantom fields):
//        export type UserId = number & { readonly __brand: 'UserId' }
//        export type PostId = number & { readonly __brand: 'PostId' }
//        export const asUserId = (n: number) => n as UserId
//        export const asPostId = (n: number) => n as PostId
//      Now getUser(asPostId(1)) is a compile error.

export {}
