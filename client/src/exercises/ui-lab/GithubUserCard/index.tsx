import UILabLayout from '../_shared/UILabLayout'
import Example from './Example'
import Scratch from './Scratch'

export default function GithubUserCardPage() {
  return (
    <UILabLayout
      breadcrumb={['UI Lab', 'Tier 4 — API-Driven']}
      title="GitHub User Card"
      difficulty="Intermediate"
      description="Real GitHub API lookup — type a username, fetch from api.github.com, render avatar, bio, stats. Drill: loading skeleton, error banner, success layout, useEffect cleanup."
      scratchFile="client/src/exercises/ui-lab/GithubUserCard/Scratch.tsx"
      example={<Example />}
      scratch={<Scratch />}
    />
  )
}
