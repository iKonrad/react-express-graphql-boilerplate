import express from 'express';
import expressGraphQL from 'express-graphql';
import { SERVER_PORT } from './config/server';
import './database';
import schema from './rootSchema';

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(SERVER_PORT, () => {
// eslint-disable-next-line no-console
  console.log(`Started the server on ${SERVER_PORT}`);
});