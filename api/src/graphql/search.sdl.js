export const schema = gql`
  type Query {
    search(query: String!): String!
  }
`
