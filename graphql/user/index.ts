import { merge } from 'lodash'

import * as User from './User'
import * as Query from './Query'

export const typeDefs = [
  User.typeDefs,
  Query.typeDefs,
]

export const resolvers = merge(
  {},
  Query.resolvers,
)
