export const schema = gql`
  type Page {
    id: Int!
    title: String!
    slug: String!
    content: String!
  }

  type Query {
    pages: String!
    pageBySlug(slug: String!): String!
    page(id: Int): String!
  }
`
