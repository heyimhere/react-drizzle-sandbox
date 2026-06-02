import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function CryptoTickerPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="Crypto Ticker"
      difficulty="Intermediate"
      description="A compact price ticker from coingecko's public API. Drill: parallel fetches via a single endpoint, polling on an interval, color-coded 24h change, abort on unmount."
      scratchFile="client/src/exercises/ui-lab/CryptoTicker/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
