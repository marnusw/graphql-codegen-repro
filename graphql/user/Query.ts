import { gql } from 'apollo-server'

export const typeDefs = gql`
  extend type Query {
    me: User
  }
`

export const resolvers = {
  Query: {
    me: (parent, args, { user }) => user ?? null,
  },
}
