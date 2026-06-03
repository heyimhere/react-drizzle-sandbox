import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './exercises/Home'

// React exercises
import Scratch from './exercises/react/Scratch'
import UseState from './exercises/react/UseState'
import UseEffect from './exercises/react/UseEffect'
import UseRef from './exercises/react/UseRef'
import UseMemoCallback from './exercises/react/UseMemoCallback'
import UseStateForm from './exercises/react/UseStateForm'
import UseEffectDebounce from './exercises/react/UseEffectDebounce'
import UseRefIntersection from './exercises/react/UseRefIntersection'
import UseMemoVirtualList from './exercises/react/UseMemoVirtualList'
import ContextUseContext from './exercises/react/ContextUseContext'
import CustomHooks from './exercises/react/CustomHooks'
import CompoundComponents from './exercises/react/CompoundComponents'
import RenderProps from './exercises/react/RenderProps'
import ControlledInputs from './exercises/react/ControlledInputs'
import ProviderComposition from './exercises/react/ProviderComposition'
import PolymorphicComponent from './exercises/react/PolymorphicComponent'
import SlotsPattern from './exercises/react/SlotsPattern'
import UseHook from './exercises/react/UseHook'
import UseOptimistic from './exercises/react/UseOptimistic'
import FormActions from './exercises/react/FormActions'
import UseTransition from './exercises/react/UseTransition'
import UseDeferredValue from './exercises/react/UseDeferredValue'
import UseId from './exercises/react/UseId'
import UseSyncExternalStore from './exercises/react/UseSyncExternalStore'
import ReactMemo from './exercises/react/ReactMemo'
import LazySuspense from './exercises/react/LazySuspense'
import ErrorBoundaries from './exercises/react/ErrorBoundaries'
import MemoChildPitfall from './exercises/react/MemoChildPitfall'
import VirtualizedTable from './exercises/react/VirtualizedTable'
import RouteCodeSplit from './exercises/react/RouteCodeSplit'
import WhyDidYouRender from './exercises/react/WhyDidYouRender'
// E2E exercises
import E2EScratch       from './exercises/e2e/Scratch'
import TodosCrud        from './exercises/e2e/TodosCrud'
import UsersCrud        from './exercises/e2e/UsersCrud'
import PostsWithAuthors from './exercises/e2e/PostsWithAuthors'
import PostsSearch      from './exercises/e2e/PostsSearch'
import Dashboard        from './exercises/e2e/Dashboard'
import UserPosts        from './exercises/e2e/UserPosts'
import NewUserWithPost  from './exercises/e2e/NewUserWithPost'
import AdvancedSearch   from './exercises/e2e/AdvancedSearch'
import CommentsThreaded from './exercises/e2e/CommentsThreaded'
import TagsManyToMany   from './exercises/e2e/TagsManyToMany'
import CascadeBehaviors from './exercises/e2e/CascadeBehaviors'
import OptimisticTodos  from './exercises/e2e/OptimisticTodos'

// Component showcase
import ButtonShowcase      from './exercises/components/Button'
import NavbarShowcase      from './exercises/components/Navbar'
import FormShowcase        from './exercises/components/Form'
import FooterShowcase      from './exercises/components/Footer'
import AnimatedLayoutShowcase from './exercises/components/AnimatedLayout'
import ModalShowcase       from './exercises/components/Modal'
import ToastShowcase       from './exercises/components/Toast'
import DropdownShowcase    from './exercises/components/Dropdown'
import TabsShowcase        from './exercises/components/Tabs'
import AccordionShowcase   from './exercises/components/Accordion'

// UI Lab — clone-to-rebuild aesthetic practice
import StyledInputPage         from './exercises/ui-lab/StyledInput'
import AnimatedButtonPage      from './exercises/ui-lab/AnimatedButton'
import NewsletterCardPage      from './exercises/ui-lab/NewsletterCard'
import TerminalContactPage     from './exercises/ui-lab/TerminalContact'
import MagicLinkScreenPage     from './exercises/ui-lab/MagicLinkScreen'
import EventDashboardPage      from './exercises/ui-lab/EventDashboard'
import KanbanBoardPage         from './exercises/ui-lab/KanbanBoard'
import InfiniteScrollFeedPage  from './exercises/ui-lab/InfiniteScrollFeed'
import GithubUserCardPage      from './exercises/ui-lab/GithubUserCard'
import JsonPlaceholderFeedPage from './exercises/ui-lab/JsonPlaceholderFeed'
import PillTabNavPage          from './exercises/ui-lab/PillTabNav'
import IconRailSidebarPage     from './exercises/ui-lab/IconRailSidebar'
import CourseCardPage          from './exercises/ui-lab/CourseCard'
import FriendsScorePage        from './exercises/ui-lab/FriendsScore'
import PerformanceChartPage    from './exercises/ui-lab/PerformanceChart'
import EducationDashboardPage  from './exercises/ui-lab/EducationDashboard'
import ToggleSwitchPage        from './exercises/ui-lab/ToggleSwitch'
import RadioCardsPage          from './exercises/ui-lab/RadioCards'
import SkeletonLoaderPage      from './exercises/ui-lab/SkeletonLoader'
import AvatarStatusPage        from './exercises/ui-lab/AvatarStatus'
import TooltipPage             from './exercises/ui-lab/Tooltip'
import RangeSliderPage         from './exercises/ui-lab/RangeSlider'
import PricingCardPage         from './exercises/ui-lab/PricingCard'
import LoginCardPage           from './exercises/ui-lab/LoginCard'
import StatTilePage            from './exercises/ui-lab/StatTile'
import NotificationToastPage   from './exercises/ui-lab/NotificationToast'
import SettingsPagePage        from './exercises/ui-lab/SettingsPage'
import ChatLayoutPage          from './exercises/ui-lab/ChatLayout'
import MusicPlayerPage         from './exercises/ui-lab/MusicPlayer'
import CalendarMonthGridPage   from './exercises/ui-lab/CalendarMonthGrid'
import WeatherWidgetPage       from './exercises/ui-lab/WeatherWidget'
import PokemonCardPage         from './exercises/ui-lab/PokemonCard'
import CryptoTickerPage        from './exercises/ui-lab/CryptoTicker'
import GiphySearchPage         from './exercises/ui-lab/GiphySearch'

// Drizzle exercises
import SchemaDefinition from './exercises/drizzle/SchemaDefinition'
import Migrations from './exercises/drizzle/Migrations'
import DbConnection from './exercises/drizzle/DbConnection'
import Enums from './exercises/drizzle/Enums'
import Indexes from './exercises/drizzle/Indexes'
import DefaultsTimestamps from './exercises/drizzle/DefaultsTimestamps'
import Insert from './exercises/drizzle/Insert'
import Select from './exercises/drizzle/Select'
import Update from './exercises/drizzle/Update'
import Delete from './exercises/drizzle/Delete'
import BulkInsert from './exercises/drizzle/BulkInsert'
import Upsert from './exercises/drizzle/Upsert'
import SoftDelete from './exercises/drizzle/SoftDelete'
import ConditionalUpdate from './exercises/drizzle/ConditionalUpdate'
import WhereClauses from './exercises/drizzle/WhereClauses'
import Joins from './exercises/drizzle/Joins'
import RelationsApi from './exercises/drizzle/RelationsApi'
import Pagination from './exercises/drizzle/Pagination'
import Aggregates from './exercises/drizzle/Aggregates'
import AndOrGroups from './exercises/drizzle/AndOrGroups'
import Subqueries from './exercises/drizzle/Subqueries'
import GroupByHaving from './exercises/drizzle/GroupByHaving'
import Transactions from './exercises/drizzle/Transactions'
import PreparedStatements from './exercises/drizzle/PreparedStatements'
import SqlTag from './exercises/drizzle/SqlTag'
import TypeInference from './exercises/drizzle/TypeInference'
import JsonColumns from './exercises/drizzle/JsonColumns'
import CustomTypes from './exercises/drizzle/CustomTypes'
import QueryLogging from './exercises/drizzle/QueryLogging'

// TypeScript exercises
import BasicTypes from './exercises/typescript/BasicTypes'
import ArraysTuples from './exercises/typescript/ArraysTuples'
import ObjectTypes from './exercises/typescript/ObjectTypes'
import InterfacesVsAliases from './exercises/typescript/InterfacesVsAliases'
import FunctionTypes from './exercises/typescript/FunctionTypes'
import LiteralTypes from './exercises/typescript/LiteralTypes'
import UnionsIntersections from './exercises/typescript/UnionsIntersections'
import TypeNarrowing from './exercises/typescript/TypeNarrowing'
import TypeGuards from './exercises/typescript/TypeGuards'
import DiscriminatedUnions from './exercises/typescript/DiscriminatedUnions'
import NeverExhaustive from './exercises/typescript/NeverExhaustive'
import AssertionFunctions from './exercises/typescript/AssertionFunctions'
import GenericFunctions from './exercises/typescript/GenericFunctions'
import GenericConstraints from './exercises/typescript/GenericConstraints'
import DefaultTypeParams from './exercises/typescript/DefaultTypeParams'
import GenericInterfaces from './exercises/typescript/GenericInterfaces'
import ConstTypeParams from './exercises/typescript/ConstTypeParams'
import BuiltInUtilities from './exercises/typescript/BuiltInUtilities'
import ExtractExclude from './exercises/typescript/ExtractExclude'
import ReturnTypeParameters from './exercises/typescript/ReturnTypeParameters'
import MappedTypes from './exercises/typescript/MappedTypes'
import KeyRemapping from './exercises/typescript/KeyRemapping'
import TemplateLiteralTypes from './exercises/typescript/TemplateLiteralTypes'
import TypescriptProps from './exercises/typescript/TypescriptProps'
import EventTypes from './exercises/typescript/EventTypes'
import CustomHooksTyping from './exercises/typescript/CustomHooksTyping'
import GenericComponents from './exercises/typescript/GenericComponents'
import DiscriminatedProps from './exercises/typescript/DiscriminatedProps'
import ForwardRefTyped from './exercises/typescript/ForwardRefTyped'
import TypedContext from './exercises/typescript/TypedContext'
import TypingReducers from './exercises/typescript/TypingReducers'
import PolymorphicAsProp from './exercises/typescript/PolymorphicAsProp'
import ChildrenTypes from './exercises/typescript/ChildrenTypes'
import TypedExpressHandlers from './exercises/typescript/TypedExpressHandlers'
import DrizzleInferSelectInsert from './exercises/typescript/DrizzleInferSelectInsert'
import DrizzleInferModelHelpers from './exercises/typescript/DrizzleInferModelHelpers'
import ZodValidatedBodies from './exercises/typescript/ZodValidatedBodies'
import SharedDtoTypes from './exercises/typescript/SharedDtoTypes'
import BrandedIds from './exercises/typescript/BrandedIds'
import SatisfiesOperator from './exercises/typescript/SatisfiesOperator'
import ConditionalTypes from './exercises/typescript/ConditionalTypes'
import ModuleAugmentation from './exercises/typescript/ModuleAugmentation'
import StrictFlagsTour from './exercises/typescript/StrictFlagsTour'
import TypeLevelTests from './exercises/typescript/TypeLevelTests'

const nav: Array<{
  group: string
  groupPath?: string
  tiers: Array<{ label: string; items: Array<{ path: string; label: string }> }>
}> = [
  {
    group: 'React',
    tiers: [
      {
        label: 'Scratchpad',
        items: [{ path: 'scratch', label: 'Scratch' }],
      },
      {
        label: 'Tier 1 — Core Hooks',
        items: [
          { path: 'use-state', label: 'useState' },
          { path: 'use-effect', label: 'useEffect' },
          { path: 'use-ref', label: 'useRef' },
          { path: 'use-memo-callback', label: 'useMemo / useCallback' },
          { path: 'use-state-form', label: 'useState — Multi-step Form' },
          { path: 'use-effect-debounce', label: 'useEffect — Debounce' },
          { path: 'use-ref-intersection', label: 'useRef — IntersectionObserver' },
          { path: 'use-memo-virtual-list', label: 'useMemo — Virtual List' },
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
          { path: 'provider-composition', label: 'Provider composition' },
          { path: 'polymorphic-component', label: 'Polymorphic component' },
          { path: 'slots-pattern', label: 'Slots pattern' },
        ],
      },
      {
        label: 'Tier 3 — React 19',
        items: [
          { path: 'use-hook', label: 'use()' },
          { path: 'use-optimistic', label: 'useOptimistic' },
          { path: 'form-actions', label: 'useFormStatus / useActionState' },
          { path: 'use-transition', label: 'useTransition' },
          { path: 'use-deferred-value', label: 'useDeferredValue' },
          { path: 'use-id', label: 'useId' },
          { path: 'use-sync-external-store', label: 'useSyncExternalStore' },
        ],
      },
      {
        label: 'Tier 4 — Performance',
        items: [
          { path: 'react-memo', label: 'React.memo' },
          { path: 'lazy-suspense', label: 'lazy + Suspense' },
          { path: 'error-boundaries', label: 'Error boundaries' },
          { path: 'memo-child-pitfall', label: 'memo pitfalls' },
          { path: 'virtualized-table', label: 'Virtualized table' },
          { path: 'route-code-split', label: 'Route code splitting' },
          { path: 'why-did-you-render', label: 'Why did you render?' },
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
          { path: 'enums', label: 'Enums' },
          { path: 'indexes', label: 'Indexes' },
          { path: 'defaults-timestamps', label: 'Defaults + Timestamps' },
        ],
      },
      {
        label: 'Tier 2 — CRUD',
        items: [
          { path: 'insert', label: 'Insert' },
          { path: 'select', label: 'Select' },
          { path: 'update', label: 'Update' },
          { path: 'delete', label: 'Delete' },
          { path: 'bulk-insert', label: 'Bulk insert' },
          { path: 'upsert', label: 'Upsert' },
          { path: 'soft-delete', label: 'Soft delete' },
          { path: 'conditional-update', label: 'Conditional update' },
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
          { path: 'and-or-groups', label: 'AND / OR groups' },
          { path: 'subqueries', label: 'Subqueries' },
          { path: 'group-by-having', label: 'Group by + Having' },
        ],
      },
      {
        label: 'Tier 4 — Advanced',
        items: [
          { path: 'transactions', label: 'Transactions' },
          { path: 'prepared-statements', label: 'Prepared statements' },
          { path: 'sql-tag', label: 'sql template tag' },
          { path: 'type-inference', label: 'Type inference' },
          { path: 'json-columns', label: 'JSON columns' },
          { path: 'custom-types', label: 'Custom types' },
          { path: 'query-logging', label: 'Query logging' },
        ],
      },
    ],
  },
  {
    group: 'TypeScript',
    groupPath: 'typescript',
    tiers: [
      {
        label: 'Tier 1 — Fundamentals',
        items: [
          { path: 'basic-types', label: 'Basic types' },
          { path: 'arrays-tuples', label: 'Arrays & tuples' },
          { path: 'object-types', label: 'Object types' },
          { path: 'interfaces-vs-aliases', label: 'Interfaces vs type aliases' },
          { path: 'function-types', label: 'Function types' },
          { path: 'literal-types', label: 'Literal types' },
        ],
      },
      {
        label: 'Tier 2 — Unions & Narrowing',
        items: [
          { path: 'unions-intersections', label: 'Unions & intersections' },
          { path: 'type-narrowing', label: 'Type narrowing' },
          { path: 'type-guards', label: 'User-defined type guards' },
          { path: 'discriminated-unions', label: 'Discriminated unions' },
          { path: 'never-exhaustive', label: 'never & exhaustive checks' },
          { path: 'assertion-functions', label: 'Assertion functions' },
        ],
      },
      {
        label: 'Tier 3 — Generics',
        items: [
          { path: 'generic-functions', label: 'Generic functions' },
          { path: 'generic-constraints', label: 'Generic constraints' },
          { path: 'default-type-params', label: 'Default type params' },
          { path: 'generic-interfaces', label: 'Generic interfaces & classes' },
          { path: 'const-type-params', label: 'const type params' },
        ],
      },
      {
        label: 'Tier 4 — Utility & Mapped Types',
        items: [
          { path: 'built-in-utilities', label: 'Built-in utilities' },
          { path: 'extract-exclude', label: 'Extract / Exclude / NonNullable' },
          { path: 'returntype-parameters', label: 'ReturnType / Parameters / Awaited' },
          { path: 'mapped-types', label: 'Mapped types' },
          { path: 'key-remapping', label: 'Key remapping (as)' },
          { path: 'template-literal-types', label: 'Template literal types' },
        ],
      },
      {
        label: 'Tier 5 — TypeScript × React',
        items: [
          { path: 'typing-props', label: 'Typing props' },
          { path: 'event-types', label: 'Event types' },
          { path: 'typing-custom-hooks', label: 'Typing custom hooks' },
          { path: 'generic-components', label: 'Generic components' },
          { path: 'discriminated-component-props', label: 'Discriminated prop unions' },
          { path: 'typed-forward-ref', label: 'Typed forwardRef' },
          { path: 'typed-context', label: 'Typed context' },
          { path: 'typing-reducers', label: 'Typing useReducer' },
          { path: 'polymorphic-as-prop', label: 'Polymorphic (as prop)' },
          { path: 'children-types', label: 'Children types' },
        ],
      },
      {
        label: 'Tier 6 — TS × Backend',
        items: [
          { path: 'typed-express-handlers', label: 'Typed Express handlers' },
          { path: 'drizzle-infer-select-insert', label: 'Drizzle $infer types' },
          { path: 'drizzle-infermodel-helpers', label: 'InferSelectModel helpers' },
          { path: 'zod-validated-bodies', label: 'Zod-validated bodies' },
          { path: 'shared-dto-types', label: 'Shared DTOs (client ↔ server)' },
          { path: 'branded-ids', label: 'Branded IDs' },
        ],
      },
      {
        label: 'Tier 7 — Advanced',
        items: [
          { path: 'satisfies-operator', label: 'satisfies operator' },
          { path: 'conditional-types', label: 'Conditional types & infer' },
          { path: 'module-augmentation', label: 'Module augmentation' },
          { path: 'strict-flags-tour', label: 'strict flags tour' },
          { path: 'type-level-tests', label: 'Type-level tests' },
        ],
      },
    ],
  },
  {
    group: 'UI Lab',
    groupPath: 'ui-lab',
    tiers: [
      {
        label: 'Tier 1 — Atoms',
        items: [
          { path: 'styled-input',     label: 'Styled Input' },
          { path: 'animated-button',  label: 'Animated Button' },
          { path: 'pill-tab-nav',     label: 'Pill Tab Nav' },
          { path: 'icon-rail',        label: 'Icon Rail Sidebar' },
          { path: 'toggle-switch',    label: 'Toggle Switch' },
          { path: 'radio-cards',      label: 'Radio Cards' },
          { path: 'skeleton-loader',  label: 'Skeleton Loader' },
          { path: 'avatar-status',    label: 'Avatar + Status' },
          { path: 'tooltip',          label: 'Tooltip' },
          { path: 'range-slider',     label: 'Range Slider' },
        ],
      },
      {
        label: 'Tier 2 — Cards & Forms',
        items: [
          { path: 'newsletter-card',  label: 'Newsletter Card' },
          { path: 'terminal-contact', label: 'Terminal Contact' },
          { path: 'magic-link',       label: 'Magic Link Screen' },
          { path: 'course-card',      label: 'Course Card' },
          { path: 'friends-score',    label: 'Friends Score' },
          { path: 'pricing-card',     label: 'Pricing Card' },
          { path: 'login-card',       label: 'Login Card' },
          { path: 'stat-tile',        label: 'Stat Tile' },
          { path: 'notification-toast', label: 'Notification Toast' },
        ],
      },
      {
        label: 'Tier 3 — Layouts',
        items: [
          { path: 'event-dashboard',     label: 'Event Dashboard' },
          { path: 'kanban-board',        label: 'Kanban Board' },
          { path: 'infinite-scroll',     label: 'Infinite Scroll Feed' },
          { path: 'performance-chart',   label: 'Performance Chart' },
          { path: 'education-dashboard', label: 'Education Dashboard' },
          { path: 'settings-page',       label: 'Settings Page' },
          { path: 'chat-layout',         label: 'Chat Layout' },
          { path: 'music-player',        label: 'Music Player' },
          { path: 'calendar-month',      label: 'Calendar Month Grid' },
        ],
      },
      {
        label: 'Tier 4 — API-Driven',
        items: [
          { path: 'github-user',      label: 'GitHub User Card' },
          { path: 'jsonplaceholder',  label: 'JSONPlaceholder Feed' },
          { path: 'weather-widget',   label: 'Weather Widget' },
          { path: 'pokemon-card',     label: 'Pokémon Card' },
          { path: 'crypto-ticker',    label: 'Crypto Ticker' },
          { path: 'giphy-search',     label: 'GIF Search' },
        ],
      },
    ],
  },
  {
    group: 'Components',
    groupPath: 'components',
    tiers: [
      {
        label: 'UI Elements',
        items: [
          { path: 'button',           label: 'Button' },
          { path: 'navbar',           label: 'Navbar' },
          { path: 'form',             label: 'Form' },
          { path: 'footer',           label: 'Footer' },
          { path: 'animated-layout',  label: 'Animated Layout' },
          { path: 'modal',            label: 'Modal' },
          { path: 'toast',            label: 'Toast' },
          { path: 'dropdown',         label: 'Dropdown' },
          { path: 'tabs',             label: 'Tabs' },
          { path: 'accordion',        label: 'Accordion' },
        ],
      },
    ],
  },
  {
    group: 'End to End',
    groupPath: 'e2e',
    tiers: [
      {
        label: 'Scratchpad',
        items: [{ path: 'scratch', label: 'Scratch' }],
      },
      {
        label: 'Full Stack Exercises',
        items: [
          { path: 'todos-crud',         label: 'Todos — Full CRUD' },
          { path: 'users-crud',         label: 'Users — CRUD + Constraints' },
          { path: 'posts-with-authors', label: 'Posts + Authors — JOIN' },
          { path: 'posts-search',       label: 'Posts Search — WHERE + Pagination' },
          { path: 'dashboard',          label: 'Stats Dashboard — Aggregates' },
          { path: 'user-posts',         label: 'User Posts — Relations API' },
          { path: 'new-user-with-post', label: 'New User + Post — Transaction' },
          { path: 'advanced-search',    label: 'Advanced Search — Prepared Statements' },
          { path: 'comments-threaded',  label: 'Threaded Comments — Self FK' },
          { path: 'tags-many-to-many',  label: 'Tags — Many-to-Many' },
          { path: 'cascade-behaviors',  label: 'Cascade Behaviors' },
          { path: 'optimistic-todos',   label: 'Optimistic Todos' },
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
                    to={`/exercises/${section.groupPath ?? section.group.toLowerCase()}/${item.path}`}
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
          <Route path="/exercises/react/scratch" element={<Scratch />} />
          <Route path="/exercises/react/use-state" element={<UseState />} />
          <Route path="/exercises/react/use-effect" element={<UseEffect />} />
          <Route path="/exercises/react/use-ref" element={<UseRef />} />
          <Route path="/exercises/react/use-memo-callback" element={<UseMemoCallback />} />
          <Route path="/exercises/react/use-state-form" element={<UseStateForm />} />
          <Route path="/exercises/react/use-effect-debounce" element={<UseEffectDebounce />} />
          <Route path="/exercises/react/use-ref-intersection" element={<UseRefIntersection />} />
          <Route path="/exercises/react/use-memo-virtual-list" element={<UseMemoVirtualList />} />
          <Route path="/exercises/react/context" element={<ContextUseContext />} />
          <Route path="/exercises/react/custom-hooks" element={<CustomHooks />} />
          <Route path="/exercises/react/compound-components" element={<CompoundComponents />} />
          <Route path="/exercises/react/render-props" element={<RenderProps />} />
          <Route path="/exercises/react/controlled-inputs" element={<ControlledInputs />} />
          <Route path="/exercises/react/provider-composition" element={<ProviderComposition />} />
          <Route path="/exercises/react/polymorphic-component" element={<PolymorphicComponent />} />
          <Route path="/exercises/react/slots-pattern" element={<SlotsPattern />} />
          <Route path="/exercises/react/use-hook" element={<UseHook />} />
          <Route path="/exercises/react/use-optimistic" element={<UseOptimistic />} />
          <Route path="/exercises/react/form-actions" element={<FormActions />} />
          <Route path="/exercises/react/use-transition" element={<UseTransition />} />
          <Route path="/exercises/react/use-deferred-value" element={<UseDeferredValue />} />
          <Route path="/exercises/react/use-id" element={<UseId />} />
          <Route path="/exercises/react/use-sync-external-store" element={<UseSyncExternalStore />} />
          <Route path="/exercises/react/react-memo" element={<ReactMemo />} />
          <Route path="/exercises/react/lazy-suspense" element={<LazySuspense />} />
          <Route path="/exercises/react/error-boundaries" element={<ErrorBoundaries />} />
          <Route path="/exercises/react/memo-child-pitfall" element={<MemoChildPitfall />} />
          <Route path="/exercises/react/virtualized-table" element={<VirtualizedTable />} />
          <Route path="/exercises/react/route-code-split" element={<RouteCodeSplit />} />
          <Route path="/exercises/react/why-did-you-render" element={<WhyDidYouRender />} />

          {/* Drizzle */}
          <Route path="/exercises/drizzle/schema-definition" element={<SchemaDefinition />} />
          <Route path="/exercises/drizzle/migrations" element={<Migrations />} />
          <Route path="/exercises/drizzle/db-connection" element={<DbConnection />} />
          <Route path="/exercises/drizzle/enums" element={<Enums />} />
          <Route path="/exercises/drizzle/indexes" element={<Indexes />} />
          <Route path="/exercises/drizzle/defaults-timestamps" element={<DefaultsTimestamps />} />
          <Route path="/exercises/drizzle/insert" element={<Insert />} />
          <Route path="/exercises/drizzle/select" element={<Select />} />
          <Route path="/exercises/drizzle/update" element={<Update />} />
          <Route path="/exercises/drizzle/delete" element={<Delete />} />
          <Route path="/exercises/drizzle/bulk-insert" element={<BulkInsert />} />
          <Route path="/exercises/drizzle/upsert" element={<Upsert />} />
          <Route path="/exercises/drizzle/soft-delete" element={<SoftDelete />} />
          <Route path="/exercises/drizzle/conditional-update" element={<ConditionalUpdate />} />
          <Route path="/exercises/drizzle/where-clauses" element={<WhereClauses />} />
          <Route path="/exercises/drizzle/joins" element={<Joins />} />
          <Route path="/exercises/drizzle/relations-api" element={<RelationsApi />} />
          <Route path="/exercises/drizzle/pagination" element={<Pagination />} />
          <Route path="/exercises/drizzle/aggregates" element={<Aggregates />} />
          <Route path="/exercises/drizzle/and-or-groups" element={<AndOrGroups />} />
          <Route path="/exercises/drizzle/subqueries" element={<Subqueries />} />
          <Route path="/exercises/drizzle/group-by-having" element={<GroupByHaving />} />
          <Route path="/exercises/drizzle/transactions" element={<Transactions />} />
          <Route path="/exercises/drizzle/prepared-statements" element={<PreparedStatements />} />
          <Route path="/exercises/drizzle/sql-tag" element={<SqlTag />} />
          <Route path="/exercises/drizzle/type-inference" element={<TypeInference />} />
          <Route path="/exercises/drizzle/json-columns" element={<JsonColumns />} />
          <Route path="/exercises/drizzle/custom-types" element={<CustomTypes />} />
          <Route path="/exercises/drizzle/query-logging" element={<QueryLogging />} />

          {/* TypeScript */}
          <Route path="/exercises/typescript/basic-types"                   element={<BasicTypes />} />
          <Route path="/exercises/typescript/arrays-tuples"                 element={<ArraysTuples />} />
          <Route path="/exercises/typescript/object-types"                  element={<ObjectTypes />} />
          <Route path="/exercises/typescript/interfaces-vs-aliases"         element={<InterfacesVsAliases />} />
          <Route path="/exercises/typescript/function-types"                element={<FunctionTypes />} />
          <Route path="/exercises/typescript/literal-types"                 element={<LiteralTypes />} />
          <Route path="/exercises/typescript/unions-intersections"          element={<UnionsIntersections />} />
          <Route path="/exercises/typescript/type-narrowing"                element={<TypeNarrowing />} />
          <Route path="/exercises/typescript/type-guards"                   element={<TypeGuards />} />
          <Route path="/exercises/typescript/discriminated-unions"          element={<DiscriminatedUnions />} />
          <Route path="/exercises/typescript/never-exhaustive"              element={<NeverExhaustive />} />
          <Route path="/exercises/typescript/assertion-functions"           element={<AssertionFunctions />} />
          <Route path="/exercises/typescript/generic-functions"             element={<GenericFunctions />} />
          <Route path="/exercises/typescript/generic-constraints"           element={<GenericConstraints />} />
          <Route path="/exercises/typescript/default-type-params"           element={<DefaultTypeParams />} />
          <Route path="/exercises/typescript/generic-interfaces"            element={<GenericInterfaces />} />
          <Route path="/exercises/typescript/const-type-params"             element={<ConstTypeParams />} />
          <Route path="/exercises/typescript/built-in-utilities"            element={<BuiltInUtilities />} />
          <Route path="/exercises/typescript/extract-exclude"               element={<ExtractExclude />} />
          <Route path="/exercises/typescript/returntype-parameters"         element={<ReturnTypeParameters />} />
          <Route path="/exercises/typescript/mapped-types"                  element={<MappedTypes />} />
          <Route path="/exercises/typescript/key-remapping"                 element={<KeyRemapping />} />
          <Route path="/exercises/typescript/template-literal-types"        element={<TemplateLiteralTypes />} />
          <Route path="/exercises/typescript/typing-props"                  element={<TypescriptProps />} />
          <Route path="/exercises/typescript/event-types"                   element={<EventTypes />} />
          <Route path="/exercises/typescript/typing-custom-hooks"           element={<CustomHooksTyping />} />
          <Route path="/exercises/typescript/generic-components"            element={<GenericComponents />} />
          <Route path="/exercises/typescript/discriminated-component-props" element={<DiscriminatedProps />} />
          <Route path="/exercises/typescript/typed-forward-ref"             element={<ForwardRefTyped />} />
          <Route path="/exercises/typescript/typed-context"                 element={<TypedContext />} />
          <Route path="/exercises/typescript/typing-reducers"               element={<TypingReducers />} />
          <Route path="/exercises/typescript/polymorphic-as-prop"           element={<PolymorphicAsProp />} />
          <Route path="/exercises/typescript/children-types"                element={<ChildrenTypes />} />
          <Route path="/exercises/typescript/typed-express-handlers"        element={<TypedExpressHandlers />} />
          <Route path="/exercises/typescript/drizzle-infer-select-insert"   element={<DrizzleInferSelectInsert />} />
          <Route path="/exercises/typescript/drizzle-infermodel-helpers"    element={<DrizzleInferModelHelpers />} />
          <Route path="/exercises/typescript/zod-validated-bodies"          element={<ZodValidatedBodies />} />
          <Route path="/exercises/typescript/shared-dto-types"              element={<SharedDtoTypes />} />
          <Route path="/exercises/typescript/branded-ids"                   element={<BrandedIds />} />
          <Route path="/exercises/typescript/satisfies-operator"            element={<SatisfiesOperator />} />
          <Route path="/exercises/typescript/conditional-types"             element={<ConditionalTypes />} />
          <Route path="/exercises/typescript/module-augmentation"           element={<ModuleAugmentation />} />
          <Route path="/exercises/typescript/strict-flags-tour"             element={<StrictFlagsTour />} />
          <Route path="/exercises/typescript/type-level-tests"              element={<TypeLevelTests />} />

          {/* UI Lab */}
          <Route path="/exercises/ui-lab/styled-input"     element={<StyledInputPage />} />
          <Route path="/exercises/ui-lab/animated-button"  element={<AnimatedButtonPage />} />
          <Route path="/exercises/ui-lab/newsletter-card"  element={<NewsletterCardPage />} />
          <Route path="/exercises/ui-lab/terminal-contact" element={<TerminalContactPage />} />
          <Route path="/exercises/ui-lab/magic-link"       element={<MagicLinkScreenPage />} />
          <Route path="/exercises/ui-lab/event-dashboard"  element={<EventDashboardPage />} />
          <Route path="/exercises/ui-lab/kanban-board"     element={<KanbanBoardPage />} />
          <Route path="/exercises/ui-lab/infinite-scroll"  element={<InfiniteScrollFeedPage />} />
          <Route path="/exercises/ui-lab/github-user"      element={<GithubUserCardPage />} />
          <Route path="/exercises/ui-lab/jsonplaceholder"      element={<JsonPlaceholderFeedPage />} />
          <Route path="/exercises/ui-lab/pill-tab-nav"         element={<PillTabNavPage />} />
          <Route path="/exercises/ui-lab/icon-rail"            element={<IconRailSidebarPage />} />
          <Route path="/exercises/ui-lab/course-card"          element={<CourseCardPage />} />
          <Route path="/exercises/ui-lab/friends-score"        element={<FriendsScorePage />} />
          <Route path="/exercises/ui-lab/performance-chart"    element={<PerformanceChartPage />} />
          <Route path="/exercises/ui-lab/education-dashboard"  element={<EducationDashboardPage />} />
          <Route path="/exercises/ui-lab/toggle-switch"        element={<ToggleSwitchPage />} />
          <Route path="/exercises/ui-lab/radio-cards"          element={<RadioCardsPage />} />
          <Route path="/exercises/ui-lab/skeleton-loader"      element={<SkeletonLoaderPage />} />
          <Route path="/exercises/ui-lab/avatar-status"        element={<AvatarStatusPage />} />
          <Route path="/exercises/ui-lab/tooltip"              element={<TooltipPage />} />
          <Route path="/exercises/ui-lab/range-slider"         element={<RangeSliderPage />} />
          <Route path="/exercises/ui-lab/pricing-card"         element={<PricingCardPage />} />
          <Route path="/exercises/ui-lab/login-card"           element={<LoginCardPage />} />
          <Route path="/exercises/ui-lab/stat-tile"            element={<StatTilePage />} />
          <Route path="/exercises/ui-lab/notification-toast"   element={<NotificationToastPage />} />
          <Route path="/exercises/ui-lab/settings-page"        element={<SettingsPagePage />} />
          <Route path="/exercises/ui-lab/chat-layout"          element={<ChatLayoutPage />} />
          <Route path="/exercises/ui-lab/music-player"         element={<MusicPlayerPage />} />
          <Route path="/exercises/ui-lab/calendar-month"       element={<CalendarMonthGridPage />} />
          <Route path="/exercises/ui-lab/weather-widget"       element={<WeatherWidgetPage />} />
          <Route path="/exercises/ui-lab/pokemon-card"         element={<PokemonCardPage />} />
          <Route path="/exercises/ui-lab/crypto-ticker"        element={<CryptoTickerPage />} />
          <Route path="/exercises/ui-lab/giphy-search"         element={<GiphySearchPage />} />

          {/* Components */}
          <Route path="/exercises/components/button"           element={<ButtonShowcase />} />
          <Route path="/exercises/components/navbar"           element={<NavbarShowcase />} />
          <Route path="/exercises/components/form"             element={<FormShowcase />} />
          <Route path="/exercises/components/footer"           element={<FooterShowcase />} />
          <Route path="/exercises/components/animated-layout"  element={<AnimatedLayoutShowcase />} />
          <Route path="/exercises/components/modal"            element={<ModalShowcase />} />
          <Route path="/exercises/components/toast"            element={<ToastShowcase />} />
          <Route path="/exercises/components/dropdown"         element={<DropdownShowcase />} />
          <Route path="/exercises/components/tabs"             element={<TabsShowcase />} />
          <Route path="/exercises/components/accordion"        element={<AccordionShowcase />} />

          {/* End to End */}
          <Route path="/exercises/e2e/scratch"            element={<E2EScratch />} />
          <Route path="/exercises/e2e/todos-crud"         element={<TodosCrud />} />
          <Route path="/exercises/e2e/users-crud"         element={<UsersCrud />} />
          <Route path="/exercises/e2e/posts-with-authors" element={<PostsWithAuthors />} />
          <Route path="/exercises/e2e/posts-search"       element={<PostsSearch />} />
          <Route path="/exercises/e2e/dashboard"          element={<Dashboard />} />
          <Route path="/exercises/e2e/user-posts"         element={<UserPosts />} />
          <Route path="/exercises/e2e/new-user-with-post" element={<NewUserWithPost />} />
          <Route path="/exercises/e2e/advanced-search"    element={<AdvancedSearch />} />
          <Route path="/exercises/e2e/comments-threaded"  element={<CommentsThreaded />} />
          <Route path="/exercises/e2e/tags-many-to-many"  element={<TagsManyToMany />} />
          <Route path="/exercises/e2e/cascade-behaviors"  element={<CascadeBehaviors />} />
          <Route path="/exercises/e2e/optimistic-todos"   element={<OptimisticTodos />} />
        </Routes>
      </main>
    </div>
  )
}
