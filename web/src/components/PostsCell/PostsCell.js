import PostListing from 'src/components/PostListing'

export const QUERY = gql`
  query PostsQuery($offset: Int) {
    posts(offset: $offset)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return <PostListing posts={posts} />
}
