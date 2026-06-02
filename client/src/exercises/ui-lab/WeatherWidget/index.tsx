import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function WeatherWidgetPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="Weather Widget"
      difficulty="Intermediate"
      description="Hits open-meteo.com (no API key) for current weather plus a 7-day forecast. Drill: fetching with useEffect, loading/error states, mapping weather codes to icons, presenting a tidy forecast strip."
      scratchFile="client/src/exercises/ui-lab/WeatherWidget/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
