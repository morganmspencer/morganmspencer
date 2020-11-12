export const QUERY = gql`
  query PostQuery($slug: String!) {
    postBySlug(slug: $slug)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ postBySlug }) => {
  const post = JSON.parse(postBySlug)[0]
  return (
    <>
      {console.log(post)}
      <article className={`post-${post.id}`}>
        <header>
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <img src={post.jetpack_featured_media_url} />
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>
    </>
  )
}
