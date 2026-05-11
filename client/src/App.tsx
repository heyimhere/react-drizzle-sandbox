import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './exercises/Home'
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
import DrizzleNotes from './exercises/DrizzleNotes'

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
        label: 'Reference guide',
        items: [{ path: 'drizzle', label: 'Drizzle curriculum' }],
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
          <Route path="/exercises/drizzle/drizzle" element={<DrizzleNotes />} />
        </Routes>
      </main>
    </div>
  )
}
