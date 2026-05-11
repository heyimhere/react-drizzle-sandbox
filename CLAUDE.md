# react-drizzle-sandbox

Personal practice sandbox for building React and Drizzle ORM muscle memory.

## Purpose

Come here to drill React patterns and Drizzle ORM concepts in isolation, outside of production pressure. Work through exercises tier by tier, from fundamentals to advanced patterns.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, TypeScript 6, Vite 8, Tailwind CSS 4 |
| Backend | Express 5, TypeScript 6, Drizzle ORM 0.45, PostgreSQL |

## Running the project

```bash
# Client (http://localhost:5173)
cd client && npm run dev

# Server (http://localhost:3001)
cd server && npm run dev       # nodemon with hot reload
cd server && npm start         # one-shot

# Drizzle
cd server && npm run db:generate   # generate migrations from schema changes
cd server && npm run db:migrate    # run pending migrations
cd server && npm run db:studio     # open Drizzle Studio in browser
```

## Server setup (first time)

```bash
cp server/.env.example server/.env
# Edit server/.env — set DATABASE_URL to your local Postgres connection string
cd server && npm install
```

## Repo layout

```
/
├── client/                     React app (Vite + React Router)
│   └── src/
│       ├── main.tsx            Entry point — BrowserRouter lives here
│       ├── App.tsx             Sidebar nav + exercise Routes
│       └── exercises/
│           ├── Home.tsx        Landing page
│           └── react/          One file per React exercise (replace placeholder code)
└── server/                     Express + Drizzle
    ├── drizzle.config.ts       Drizzle Kit config
    ├── drizzle/                Generated migration files
    └── src/
        ├── index.ts            Express entry point — register route files here
        └── db/
            ├── index.ts        Drizzle connection — exports `db`
            └── schema.ts       Table definitions — add new tables here
```

## Conventions

- Each React exercise lives in `client/src/exercises/react/<ExerciseName>.tsx` — replace the placeholder with actual working code
- Drizzle practice happens server-side: add tables to `server/src/db/schema.ts`, create route files for each CRUD exercise
- Run `db:generate` → `db:migrate` any time you add or change a table in schema.ts
- Keep exercises self-contained — avoid building shared state between them

## React curriculum

**Tier 1 — Core Hooks:** useState · useEffect · useRef · useMemo/useCallback

**Tier 2 — Composition:** Context+useContext · Custom hooks · Compound components · Render props · Controlled vs uncontrolled inputs

**Tier 3 — React 19:** use() · useOptimistic · useFormStatus/useActionState

**Tier 4 — Performance:** React.memo · lazy+Suspense · Error boundaries

**Tier 5 — TypeScript × React:** Typing props · Event types · Typing custom hooks

## Drizzle curriculum

**Tier 1 — Setup:** Schema definition · drizzle.config.ts · Migrations · DB connection

**Tier 2 — CRUD:** insert · select · update · delete · returning()

**Tier 3 — Query power:** where clauses · joins · relations API · orderBy/limit/offset · aggregates

**Tier 4 — Advanced:** Transactions · Prepared statements · sql template tag · Type inference ($inferSelect/$inferInsert)
