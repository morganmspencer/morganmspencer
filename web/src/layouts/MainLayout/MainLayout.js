import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-wrap flex-1 py-8 md:py-12">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
