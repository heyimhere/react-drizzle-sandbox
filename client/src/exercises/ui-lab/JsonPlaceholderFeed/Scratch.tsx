import ScratchPlaceholder from '../_shared/ScratchPlaceholder'

export default function Scratch() {
  // wipe everything below and rebuild
  return (
    <ScratchPlaceholder
      message={<>Rebuild the brutalist feed. Fetch from <code>jsonplaceholder.typicode.com/posts?userId=N</code>. User filter chips, chunky cards.</>}
    />
  )
}
