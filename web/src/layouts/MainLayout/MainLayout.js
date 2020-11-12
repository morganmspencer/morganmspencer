import { useLocation } from '@redwoodjs/router'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainLayout = ({ children }) => {
  const { pathname } = useLocation()
  var pageId =
    pathname !== '/' ? pathname.replace('/', 'template-') : 'template-home'
  pageId = pageId.includes('/')
    ? pageId.split('/')[0]
    : !pageId.includes('template-')
    ? pageId.replace('-', '')
    : pageId

  return (
    <>
      <Header />
      <main id={pageId} className="px-wrap flex-1 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
