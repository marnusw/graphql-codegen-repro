import { gql, makeExecutableSchema } from 'apollo-server'
import { merge } from 'lodash'

import * as user from './user'

const Query = gql`
  type Query {
    _empty: String
  }
`

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`

export const typeDefs = [
  Query,
  Mutation,
  ...user.typeDefs,
]

export const resolvers = merge(
  {},
  user.resolvers,
)

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
