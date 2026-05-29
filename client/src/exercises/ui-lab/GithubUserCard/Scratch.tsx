import ScratchPlaceholder from '../_shared/ScratchPlaceholder'

export default function Scratch() {
  // wipe everything below and rebuild
  return (
    <ScratchPlaceholder
      message={<>Rebuild the GitHub user lookup. Fetch from <code>api.github.com/users/&lt;login&gt;</code>. Loading skeleton, error panel, success card.</>}
    />
  )
}
