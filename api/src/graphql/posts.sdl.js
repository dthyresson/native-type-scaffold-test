export const schema = gql`
  type Post {
    id: Int!
    title: String!
    lede: String!
    tagline: String!
    content: String!
    xml: String!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    lede: String!
    tagline: String!
    content: String!
    xml: String!
  }

  input UpdatePostInput {
    title: String
    lede: String
    tagline: String
    content: String
    xml: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
