# react-drizzle-sandbox

A personal practice sandbox for building React and Drizzle ORM muscle memory. Exercises are organized into tiers, from fundamentals to advanced patterns, with a full-stack scratchpad for free-form experimentation.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS 4 |
| Backend | Express 5, TypeScript, Drizzle ORM, PostgreSQL |

## Getting started

### Prerequisites

- Node.js 20+
- A local PostgreSQL instance

### Setup

```bash
# Install server dependencies and configure environment
cd server
cp .env.example .env
# Edit .env and set DATABASE_URL to your local Postgres connection string
npm install

# Run migrations to create the database tables
npm run db:migrate

# Install client dependencies
cd ../client
npm install
```

### Running

```bash
# Client — http://localhost:5173
cd client && npm run dev

# Server — http://localhost:3001
cd server && npm run dev
```

### Drizzle commands

```bash
cd server

npm run db:generate   # generate a new migration after schema changes
npm run db:migrate    # apply pending migrations
npm run db:studio     # open Drizzle Studio in the browser
```

## Project layout

```
/
├── client/                       React app (Vite + React Router)
│   └── src/
│       ├── main.tsx              Entry point
│       ├── App.tsx               Sidebar nav + exercise routes
│       └── exercises/
│           ├── Home.tsx
│           ├── react/            One file per React exercise
│           ├── drizzle/          Drizzle concept exercises (read-only UI)
│           └── e2e/              Full-stack exercises — React + Express + Drizzle
└── server/                       Express + Drizzle
    ├── drizzle.config.ts
    ├── drizzle/                  Generated migration files
    └── src/
        ├── index.ts              Express entry — route registration
        └── db/
            ├── index.ts          Drizzle connection, exports `db`
            └── schema.ts         All table definitions
```

## Curriculum

### React

| Tier | Topics |
|---|---|
| 1 — Core Hooks | useState · useEffect · useRef · useMemo / useCallback |
| 2 — Composition | Context · Custom hooks · Compound components · Render props · Controlled inputs |
| 3 — React 19 | use() · useOptimistic · useFormStatus / useActionState |
| 4 — Performance | React.memo · lazy + Suspense · Error boundaries |
| 5 — TypeScript × React | Typing props · Event types · Typing custom hooks |

### Drizzle ORM

| Tier | Topics |
|---|---|
| 1 — Setup | Schema definition · drizzle.config.ts · Migrations · DB connection |
| 2 — CRUD | insert · select · update · delete · returning() |
| 3 — Query Power | where clauses · joins · relations API · orderBy / pagination · aggregates |
| 4 — Advanced | Transactions · Prepared statements · sql template tag · Type inference |

### End to End

Full-stack exercises that wire a React component to an Express route running a Drizzle query against a real Postgres database. Includes a free-form scratchpad (`e2e/Scratch`) for experimenting outside of the structured exercises.

## Database schema

Four tables are included out of the box:

- **todos** — basic task list, used by Tier 2 CRUD exercises
- **users** — accounts with a unique email constraint
- **posts** — belongs to a user via foreign key with cascade delete, includes compound indexes
- **scratch_items** — throwaway table for the e2e scratchpad, wipe and reuse freely

## Conventions

- Each React exercise is a single file in `client/src/exercises/react/` — replace the placeholder with working code
- Drizzle exercises live server-side: add tables to `schema.ts`, create route files for each concept
- Always run `db:generate` → `db:migrate` after any schema change
- Keep exercises self-contained — no shared state between them
- The scratchpad files (`routes/scratch.ts` and `exercises/e2e/Scratch.tsx`) are free to wipe and rewrite at any time
