import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './exercises/Home'

// React exercises
import UseState from './exercises/react/UseState'
import UseEffect from './exercises/react/UseEffect'
import UseRef from './exercises/react/UseRef'
import UseMemoCallback from './exercises/react/UseMemoCallback'
import ContextUseContext from './exercises/react/ContextUseContext'
import CustomHooks from './exercises/react/CustomHooks'
import CompoundComponents from './exercises/react/CompoundComponents'
import RenderProps from './exercises/react/RenderProps'
import ControlledInputs from './exercises/react/ControlledInputs'
import UseHook from './exercises/react/UseHook'
import UseOptimistic from './exercises/react/UseOptimistic'
import FormActions from './exercises/react/FormActions'
import ReactMemo from './exercises/react/ReactMemo'
import LazySuspense from './exercises/react/LazySuspense'
import ErrorBoundaries from './exercises/react/ErrorBoundaries'
import TypescriptProps from './exercises/react/TypescriptProps'
import EventTypes from './exercises/react/EventTypes'
import CustomHooksTyping from './exercises/react/CustomHooksTyping'

// Drizzle exercises
import SchemaDefinition from './exercises/drizzle/SchemaDefinition'
import Migrations from './exercises/drizzle/Migrations'
import DbConnection from './exercises/drizzle/DbConnection'
import Insert from './exercises/drizzle/Insert'
import Select from './exercises/drizzle/Select'
import Update from './exercises/drizzle/Update'
import Delete from './exercises/drizzle/Delete'
import WhereClauses from './exercises/drizzle/WhereClauses'
import Joins from './exercises/drizzle/Joins'
import RelationsApi from './exercises/drizzle/RelationsApi'
import Pagination from './exercises/drizzle/Pagination'
import Aggregates from './exercises/drizzle/Aggregates'
import Transactions from './exercises/drizzle/Transactions'
import PreparedStatements from './exercises/drizzle/PreparedStatements'
import SqlTag from './exercises/drizzle/SqlTag'
import TypeInference from './exercises/drizzle/TypeInference'

const nav = [
  {
    group: 'React',
    tiers: [
      {
        label: 'Tier 1 — Core Hooks',
        items: [
          { path: 'use-state', label: 'useState' },
          { path: 'use-effect', label: 'useEffect' },
          { path: 'use-ref', label: 'useRef' },
          { path: 'use-memo-callback', label: 'useMemo / useCallback' },
        ],
      },
      {
        label: 'Tier 2 — Composition',
        items: [
          { path: 'context', label: 'Context + useContext' },
          { path: 'custom-hooks', label: 'Custom hooks' },
          { path: 'compound-components', label: 'Compound components' },
          { path: 'render-props', label: 'Render props' },
          { path: 'controlled-inputs', label: 'Controlled vs uncontrolled' },
        ],
      },
      {
        label: 'Tier 3 — React 19',
        items: [
          { path: 'use-hook', label: 'use()' },
          { path: 'use-optimistic', label: 'useOptimistic' },
          { path: 'form-actions', label: 'useFormStatus / useActionState' },
        ],
      },
      {
        label: 'Tier 4 — Performance',
        items: [
          { path: 'react-memo', label: 'React.memo' },
          { path: 'lazy-suspense', label: 'lazy + Suspense' },
          { path: 'error-boundaries', label: 'Error boundaries' },
        ],
      },
      {
        label: 'Tier 5 — TypeScript × React',
        items: [
          { path: 'typescript-props', label: 'Typing props' },
          { path: 'event-types', label: 'Event types' },
          { path: 'custom-hooks-typing', label: 'Typing custom hooks' },
        ],
      },
    ],
  },
  {
    group: 'Drizzle',
    tiers: [
      {
        label: 'Tier 1 — Setup',
        items: [
          { path: 'schema-definition', label: 'Schema definition' },
          { path: 'migrations', label: 'Migrations' },
          { path: 'db-connection', label: 'DB connection' },
        ],
      },
      {
        label: 'Tier 2 — CRUD',
        items: [
          { path: 'insert', label: 'Insert' },
          { path: 'select', label: 'Select' },
          { path: 'update', label: 'Update' },
          { path: 'delete', label: 'Delete' },
        ],
      },
      {
        label: 'Tier 3 — Query Power',
        items: [
          { path: 'where-clauses', label: 'Where clauses' },
          { path: 'joins', label: 'Joins' },
          { path: 'relations-api', label: 'Relations API' },
          { path: 'pagination', label: 'Ordering + Pagination' },
          { path: 'aggregates', label: 'Aggregates' },
        ],
      },
      {
        label: 'Tier 4 — Advanced',
        items: [
          { path: 'transactions', label: 'Transactions' },
          { path: 'prepared-statements', label: 'Prepared statements' },
          { path: 'sql-tag', label: 'sql template tag' },
          { path: 'type-inference', label: 'Type inference' },
        ],
      },
    ],
  },
]

export default function App() {
  return (
    <div className="sandbox-layout">
      <nav className="sidebar">
        <NavLink to="/" className="sidebar-brand">
          practice sandbox
        </NavLink>
        {nav.map((section) => (
          <div key={section.group} className="sidebar-section">
            <div className="sidebar-group-label">{section.group}</div>
            {section.tiers.map((tier) => (
              <div key={tier.label} className="sidebar-tier">
                <div className="sidebar-tier-label">{tier.label}</div>
                {tier.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={`/exercises/${section.group.toLowerCase()}/${item.path}`}
                    className={({ isActive }) =>
                      'sidebar-link' + (isActive ? ' active' : '')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <main className="exercise-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* React */}
          <Route path="/exercises/react/use-state" element={<UseState />} />
          <Route path="/exercises/react/use-effect" element={<UseEffect />} />
          <Route path="/exercises/react/use-ref" element={<UseRef />} />
          <Route path="/exercises/react/use-memo-callback" element={<UseMemoCallback />} />
          <Route path="/exercises/react/context" element={<ContextUseContext />} />
          <Route path="/exercises/react/custom-hooks" element={<CustomHooks />} />
          <Route path="/exercises/react/compound-components" element={<CompoundComponents />} />
          <Route path="/exercises/react/render-props" element={<RenderProps />} />
          <Route path="/exercises/react/controlled-inputs" element={<ControlledInputs />} />
          <Route path="/exercises/react/use-hook" element={<UseHook />} />
          <Route path="/exercises/react/use-optimistic" element={<UseOptimistic />} />
          <Route path="/exercises/react/form-actions" element={<FormActions />} />
          <Route path="/exercises/react/react-memo" element={<ReactMemo />} />
          <Route path="/exercises/react/lazy-suspense" element={<LazySuspense />} />
          <Route path="/exercises/react/error-boundaries" element={<ErrorBoundaries />} />
          <Route path="/exercises/react/typescript-props" element={<TypescriptProps />} />
          <Route path="/exercises/react/event-types" element={<EventTypes />} />
          <Route path="/exercises/react/custom-hooks-typing" element={<CustomHooksTyping />} />

          {/* Drizzle */}
          <Route path="/exercises/drizzle/schema-definition" element={<SchemaDefinition />} />
          <Route path="/exercises/drizzle/migrations" element={<Migrations />} />
          <Route path="/exercises/drizzle/db-connection" element={<DbConnection />} />
          <Route path="/exercises/drizzle/insert" element={<Insert />} />
          <Route path="/exercises/drizzle/select" element={<Select />} />
          <Route path="/exercises/drizzle/update" element={<Update />} />
          <Route path="/exercises/drizzle/delete" element={<Delete />} />
          <Route path="/exercises/drizzle/where-clauses" element={<WhereClauses />} />
          <Route path="/exercises/drizzle/joins" element={<Joins />} />
          <Route path="/exercises/drizzle/relations-api" element={<RelationsApi />} />
          <Route path="/exercises/drizzle/pagination" element={<Pagination />} />
          <Route path="/exercises/drizzle/aggregates" element={<Aggregates />} />
          <Route path="/exercises/drizzle/transactions" element={<Transactions />} />
          <Route path="/exercises/drizzle/prepared-statements" element={<PreparedStatements />} />
          <Route path="/exercises/drizzle/sql-tag" element={<SqlTag />} />
          <Route path="/exercises/drizzle/type-inference" element={<TypeInference />} />
        </Routes>
      </main>
    </div>
  )
}
