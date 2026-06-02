import ExercisePage from '../../components/ExercisePage'

export default function TagsManyToMany() {
  return (
    <ExercisePage
      breadcrumb={['End to End', 'Full Stack Exercises']}
      title="Tags — Many to Many"
      difficulty="Intermediate"
      description="Many-to-many lives in a join table — post_tags(post_id, tag_id) with a compound primary key. Both directions are queried via the join: posts WITH tags, tags WITH posts. Drizzle's Relations API can navigate through the join table when you wire the relations up."
      whatToBuild="Add tags + postTags tables (already in the schema for this exercise). Implement POST /posts/:id/tags accepting { name }, which finds-or-creates the tag and links it. GET /posts/:id returns the post plus its tags array. GET /tags/:name/posts returns all posts under a tag. On the client, build a 'add tag' chip-input UI."
      keyConcepts={['join table', 'compound primary key', 'onConflictDoNothing for upsert', 'Relations API through a join table', 'chip input UI']}
      workspaceFile="server/src/routes/tags.ts"
      workspaceFiles={['client/src/exercises/e2e/TagsManyToMany.tsx', 'server/src/db/schema.ts']}
      hints={[
        'Find-or-create: const [tag] = await db.insert(tags).values({ name }).onConflictDoNothing({ target: tags.name }).returning(). If the tag existed, the array is empty — fall back to a SELECT.',
        'Link the tag to the post: await db.insert(postTags).values({ postId, tagId: tag.id }).onConflictDoNothing(). Compound PK on (post_id, tag_id) prevents duplicates without a guard.',
        'Read post with tags via Relations API: db.query.posts.findFirst({ where: eq(posts.id, id), with: { postTags: { with: { tag: true } } } }). Then map to flatten: postTags.map(pt => pt.tag).',
        'For posts-by-tag, easier to flat-join: db.select().from(posts).innerJoin(postTags, eq(postTags.postId, posts.id)).innerJoin(tags, eq(tags.id, postTags.tagId)).where(eq(tags.name, name)).',
      ]}
    />
  )
}
