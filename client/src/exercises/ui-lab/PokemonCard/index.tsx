import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function PokemonCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="Pokémon Card"
      difficulty="Beginner"
      description="Pulls from pokeapi.co. Type → color theme → stat bars. Drill: fetching by id, prev/next pagination, mapping type to accent color, animated stat bars."
      scratchFile="client/src/exercises/ui-lab/PokemonCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
