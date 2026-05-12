import ExercisePage from '../../components/ExercisePage'

export default function CompoundComponents() {
  return (
    <ExercisePage
      breadcrumb={['React', 'Tier 2 — Composition']}
      title="Compound components"
      difficulty="Advanced"
      description="Compound components split a complex UI into cooperating sub-components that share implicit state through context. The parent owns the state; children read and write it without the caller needing to wire up props between siblings."
      whatToBuild="A Tabs component with four pieces: Tabs (the root, owns active state), Tabs.List (a flex container for tab buttons), Tabs.Tab (a button that activates its panel), and Tabs.Panel (renders its content only when active). The consumer writes <Tabs defaultTab='a'><Tabs.List>...</Tabs.List><Tabs.Panel id='a'>...</Tabs.Panel></Tabs> with no prop-threading."
      keyConcepts={['compound component', 'Context', 'displayName', 'implicit state sharing', 'static properties']}
      workspaceFile="client/src/exercises/react/CompoundComponents.tsx"
      hints={[
        'Create a TabsContext inside the file. The Tabs root component is the Provider — it owns const [active, setActive] = useState(defaultTab) and exposes both via context value.',
        'Tabs.Tab reads active and setActive from context. It renders as a <button> that calls setActive(id) on click and applies an active style when active === id.',
        'Tabs.Panel reads active from context and returns null when active !== id. That is the entire component body — context does all the heavy lifting.',
        'Attach sub-components as static properties with: const Tabs = Object.assign(TabsRoot, { List: TabsList, Tab: TabsTab, Panel: TabsPanel }). In TypeScript you may need to declare the type explicitly to get good autocomplete.',
      ]}
    >
      {/* Your code goes here */}
    </ExercisePage>
  )
}
