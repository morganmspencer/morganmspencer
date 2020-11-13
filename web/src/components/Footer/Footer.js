import { Link, routes } from '@redwoodjs/router'
import CategoriesCell from 'src/components/CategoriesCell'

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="px-wrap pt-8 pb-2 bg-gradient-to-r from-primary to-secondary text-center"
    >
      <div>
        <Link
          to={routes.home()}
          className="inline-block font-serif text-2xl mb-1"
        >
          Morgan M. Spencer
        </Link>
        <p className="text-sm mb-1">
          Web Developer • Digital Designer • Business Owner • Content Creator
        </p>
        <nav className="category-nav">
          <ul className="flex flex-wrap justify-center">
            <CategoriesCell />
          </ul>
        </nav>
        <p className="font-semibold text-xs uppercase mt-8">
          &copy; {new Date().getFullYear()}{' '}
          <Link to={routes.home()}>Morgan M. Spencer</Link>, all rights
          reserved.
        </p>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer
