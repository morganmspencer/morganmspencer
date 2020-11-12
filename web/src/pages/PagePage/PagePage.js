import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import PageCell from 'src/components/PageCell'

const PagePage = ({ slug }) => {
  return (
    <MainLayout>
      <h1>PagePage</h1>
      <p>
        Find me in <code>./web/src/pages/PagePage/PagePage.js</code>
      </p>
      <p>
        My default route is named <code>page</code>, link to me with `
        <Link to={routes.page()}>Page</Link>`
      </p>
      <PageCell slug={slug} />
    </MainLayout>
  )
}

export default PagePage
