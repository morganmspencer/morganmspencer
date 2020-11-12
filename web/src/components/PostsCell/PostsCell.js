import { Link, routes, useParams } from '@redwoodjs/router'
import configData from 'src/../../wp.config.json'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

export const QUERY = gql`
  query PostsQuery($offset: Int) {
    posts(offset: $offset)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  const { page } = useParams()

  var baseArray = JSON.parse(posts)
  var morePosts = false

  if (baseArray.length > configData.posts_per_page) {
    morePosts = true
    baseArray.pop()
  }

  const postArray = baseArray

  const pageNum = parseInt(page)

  return (
    <>
      <div className="post-grid">
        {postArray.map((post, id) => (
          <article key={id}>
            <Link to={routes.post({ slug: post.slug })}>
              <img src={post.jetpack_featured_media_url} />
            </Link>
            <h2 className="text-2xl mb-2">
              <Link
                to={routes.post({ slug: post.slug })}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </h2>
          </article>
        ))}
      </div>
      {(morePosts === true || pageNum > 1) && (
        <div className="flex flex-wrap gap-8 justify-center font-semibold mt-12">
          <div>
            {pageNum > 1 && (
              <Link
                to={
                  pageNum === 2
                    ? routes.home()
                    : routes.home({ page: pageNum - 1 })
                }
                className="flex items-center gap-2"
              >
                <CgArrowLongLeft />
                Newer posts
              </Link>
            )}
          </div>
          <div>
            {morePosts === true && (
              <Link
                to={routes.home({ page: pageNum ? pageNum + 1 : 2 })}
                className="flex items-center gap-2"
              >
                Older posts
                <CgArrowLongRight />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  )
}
