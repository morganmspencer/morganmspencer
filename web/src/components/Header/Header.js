import { Link, routes, useLocation } from '@redwoodjs/router'
import CategoriesCell from 'src/components/CategoriesCell'

const Header = () => {
  const { pathname } = useLocation()

  const homeLink = (
    <Link to={routes.home()} className="font-serif text-2xl">
      Morgan M. Spencer
    </Link>
  )

  return (
    <header role="masthead" className="px-wrap">
      <div className="py-3 flex flex-col items-center md:justify-between md:flex-row">
        {'/' !== pathname ? (
          homeLink
        ) : (
          <h1 className="text-2xl mb-0">{homeLink}</h1>
        )}
        <nav className="-mx-wrap px-wrap">
          <ul className="flex flex-wrap">
            <CategoriesCell />
          </ul>
        </nav>
      </div>
      <nav className="category-nav -mx-wrap px-wrap bg-gradient-to-r from-primary to-secondary">
        <ul className="flex flex-wrap text-sm uppercase font-semibold">
          <CategoriesCell />
        </ul>
      </nav>
    </header>
  )
}

export default Header
