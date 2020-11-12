import { useParams } from '@redwoodjs/router'
import configData from 'src/../../wp.config.json'
import MainLayout from 'src/layouts/MainLayout'
import PostsCell from 'src/components/PostsCell'

const HomePage = () => {
  const { page } = useParams()
  var pageOffset = page ? (page - 1) * configData.posts_per_page : 0
  return (
    <MainLayout>
      <PostsCell offset={pageOffset} />
    </MainLayout>
  )
}

export default HomePage
