import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CategoriesQuery {
    categories
  }
`

export const Loading = () => (
  <div className="opacity-0 py-2 px-3 text-sm uppercase font-semibold">
    Loading...
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ categories }) => {
  return (
    <>
      {JSON.parse(categories).map(
        (category, id) =>
          category.count > 0 && (
            <li key={id}>
              <Link
                to={routes.category({ slug: category.slug })}
                className="block py-2 px-3 text-sm uppercase font-semibold shadow-none transition-colors duration-300 hover:bg-white hover:bg-opacity-80 hover:shadow-none focus:shadow-none"
              >
                {category.name}
              </Link>
            </li>
          )
      )}
    </>
  )
}
