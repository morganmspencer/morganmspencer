import moment from 'moment'

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
  const postDate = new Date(post.date_gmt)

  return (
    <>
      {console.log(post)}
      <article className={`post-${post.id}`}>
        <header
          className="bg-cover flex items-center justify-center bg-center relative z-0 -mx-wrap px-wrap py-8 -mt-8 mb-8 min-h-screen-1/2 md:py-12 md:-mt-12 md:mb-12 md:min-h-screen-3/4"
          style={{ backgroundImage: `url(${post.jetpack_featured_media_url})` }}
        >
          <div className="text-center max-w-4xl text-white static z-20 mb-12">
            {console.log(new Date(post.date_gmt))}
            <p>{moment(post.date_gmt).format('LL')}</p>
            <h1
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              className="mb-0 leading-tight"
            />
          </div>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className="entry-content max-w-4xl mx-auto text-lg"
        />
      </article>
    </>
  )
}
