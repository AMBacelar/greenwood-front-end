import { ApolloServer } from 'apollo-server-micro';
import schema from '../../server/graphql-schema';
import { initializeNeo4j } from 'server/neo4j';
import withPassport from '../../server/googleStrategy';

const driver = initializeNeo4j();

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res, driver }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default withPassport(
  apolloServer.createHandler({ path: '/api/graphql' })
);
