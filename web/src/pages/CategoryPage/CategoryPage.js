import MainLayout from 'src/layouts/MainLayout'
import CategoryCell from 'src/components/CategoryCell'

const CategoryPage = ({ slug }) => {
  return (
    <MainLayout>
      <CategoryCell slug={slug} />
    </MainLayout>
  )
}

export default CategoryPage
