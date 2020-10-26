import fs from 'fs';
import path from 'path';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import { resolvers } from './graphql-resolvers';

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

const typeDefs = fs
  .readFileSync(
    process.env.GRAPHQL_SCHEMA || path.join(process.cwd(), 'schema.graphql')
  )
  .toString('utf-8');

export default makeAugmentedSchema({
  typeDefs,
  resolvers,
  config: {
    query: {
      exclude: ['RatingCount'],
    },
    mutation: {
      exclude: ['RatingCount'],
    },
  },
});
