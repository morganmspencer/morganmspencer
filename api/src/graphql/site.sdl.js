export const schema = gql`
  type SiteData {
    title: String!
    description: String!
    posts_per_page: String!
  }

  type Query {
    siteTitle: String!
  }
`
