import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import PostCell from 'src/components/PostCell'

const PostPage = ({ slug }) => {
  return (
    <MainLayout>
      <h1>PostPage</h1>
      <p>
        Find me in <code>./web/src/pages/PostPage/PostPage.js</code>
      </p>
      <p>
        My default route is named <code>post</code>, link to me with `
        <Link to={routes.post()}>Post</Link>`
      </p>
      <PostCell slug={slug} />
    </MainLayout>
  )
}

export default PostPage
