// server.js
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import express from 'express';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    greet(name: String!): String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello() {
    return 'Hello world!';
  },
  greet({ name }) {
    return `Greetings, ${name}!`;
  },
};

// server.js (continued)
const app = express();

// Create and use the GraphQL handler
app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Start the server
const PORT = 8181;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});

