export const schema = gql`
  type Category {
    id: Int!
    title: String!
    slug: String!
    content: String!
  }

  type Query {
    categories: String!
    categoryBySlug(slug: String): String!
    category(id: Int): String!
  }
`
