export default function TypescriptProps() {
  return (
    <div className="exercise">
      <h1>Typing props</h1>
      <p className="exercise-meta">Tier 5 — TypeScript × React</p>
      <div className="exercise-goals">
        <h3>Practice goals</h3>
        <ul>
          <li>Bare function vs <code>FC</code>: prefer bare — <code>function Foo(props: FooProps) &#123;&#125;</code></li>
          <li><code>PropsWithChildren&lt;T&gt;</code>: add <code>children?: ReactNode</code> to any props type</li>
          <li>Generic component: <code>function List&lt;T&gt;(&#123; items, renderItem &#125;: &#123; items: T[]; renderItem: (item: T) =&gt; ReactNode &#125;)</code></li>
          <li>Discriminated union props: <code>type Props = &#123; variant: 'primary' &#125; | &#123; variant: 'icon'; icon: string &#125;</code></li>
          <li><code>ComponentPropsWithoutRef&lt;'button'&gt;</code>: extend native element props without ref</li>
        </ul>
      </div>
      <hr className="exercise-divider" />
      <div className="exercise-workspace">
        {/* Your code goes here */}
      </div>
    </div>
  )
}
