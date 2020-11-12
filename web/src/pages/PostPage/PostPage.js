import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import PostCell from 'src/components/PostCell'

const PostPage = ({ slug }) => {
  return (
    <MainLayout>
      <PostCell slug={slug} />
    </MainLayout>
  )
}

export default PostPage
