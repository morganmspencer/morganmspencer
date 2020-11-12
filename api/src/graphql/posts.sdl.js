export const schema = gql`
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    author: String!
  }

  type Query {
    posts(offset: Int): String!
    postsByCategory(id: Int): String!
    postsByCategory(slug: String): String!
    postBySlug(slug: String!): String!
    post(id: Int): String!
  }
`
