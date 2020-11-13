import { Link, routes, useParams, useLocation } from '@redwoodjs/router'
import configData from 'src/../../wp.config.json'
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

const PostListing = ({ posts }) => {
  const { page } = useParams()
  const { pathname } = useLocation()

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
                  pageNum === 2 ? pathname : pathname + '?page=' + pageNum - 1
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
                to={
                  pageNum
                    ? pathname + '?page=' + pageNum + 1
                    : pathname + '?page=' + 2
                }
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

export default PostListing
