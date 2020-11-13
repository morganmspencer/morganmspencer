import { Link, routes, useLocation } from '@redwoodjs/router'
import {
  CgArrowLongLeft,
  CgFolder,
  CgFileDocument,
  CgChevronRight,
} from 'react-icons/cg'

const ResumeLayout = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <>
      <header className="bg-dark text-light">
        <nav className="px-wrap border-b border-solid border-light py-2">
          <ul className="flex items-center">
            <li>
              <Link
                to={routes.home()}
                className="flex items-center gap-2 shadow-none"
              >
                <CgArrowLongLeft />
                Return to main site
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="px-wrap border-b border-solid border-light py-2">
          <ul className="flex items-center gap-4">
            <li>
              {pathname !== '/resume' ? (
                <Link
                  to={routes.resume()}
                  className="flex items-center gap-2 shadow-none"
                >
                  <CgFolder />
                  <span className="text-sm lowercase">Resume</span>
                </Link>
              ) : (
                <p className="flex items-center gap-2 shadow-none">
                  <CgFolder />
                  <span className="text-sm lowercase">Resume</span>
                </p>
              )}
            </li>
            {pathname !== '/resume' && (
              <li className="flex items-center gap-4">
                <CgChevronRight />
                <p className="flex items-center gap-2 shadow-none">
                  <CgFileDocument />
                  <span className="text-sm">
                    {pathname.replace('/resume/', '')}
                  </span>
                </p>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="bg-dark text-light flex-1 px-wrap py-8 md:py-12">
        {children}
      </main>
    </>
  )
}

export default ResumeLayout
