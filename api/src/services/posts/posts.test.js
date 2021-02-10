import { posts, post, createPost, updatePost, deletePost } from './posts'

describe('posts', () => {
  scenario('returns all posts', async (scenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async (scenario) => {
    const result = await createPost({
      input: {
        title: 'String1560461',
        lede: 'String',
        tagline: 'String',
        content: 'String',
        xml: 'String',
      },
    })

    expect(result.title).toEqual('String1560461')
    expect(result.lede).toEqual('String')
    expect(result.tagline).toEqual('String')
    expect(result.content).toEqual('String')
    expect(result.xml).toEqual('String')
  })

  scenario('updates a post', async (scenario) => {
    const original = await post({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String43813212' },
    })

    expect(result.title).toEqual('String43813212')
  })

  scenario('deletes a post', async (scenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
