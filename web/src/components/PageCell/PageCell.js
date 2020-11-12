export const QUERY = gql`
  query PageQuery($slug: String!) {
    pageBySlug(slug: $slug)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ pageBySlug }) => {
  const page = JSON.parse(pageBySlug)[0]
  return (
    <>
      <header>
        <h1>{page.title.rendered}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      {console.log(JSON.parse(pageBySlug))}
    </>
  )
}
