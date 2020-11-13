import PostListing from 'src/components/PostListing'

export const QUERY = gql`
  query CategoryQuery($slug: String!) {
    postsByCategory(slug: $slug)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ postsByCategory }) => {
  return <PostListing posts={postsByCategory} />
}
