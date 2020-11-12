import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'

const CategoryPage = () => {
  return (
    <MainLayout>
      <h1>CategoryPage</h1>
      <p>
        Find me in <code>./web/src/pages/CategoryPage/CategoryPage.js</code>
      </p>
      <p>
        My default route is named <code>category</code>, link to me with `
        <Link to={routes.category()}>Category</Link>`
      </p>
    </MainLayout>
  )
}

export default CategoryPage
