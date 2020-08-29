const neo4j = require("neo4j-driver");
const { ApolloServer } = require("apollo-server");
const { makeAugmentedSchema } = require("neo4j-graphql-js");
const typeDefs = require("./gql-schema/schema");

const schema = makeAugmentedSchema({
  typeDefs
});

const driver = neo4j.driver(
  "bolt://52.91.123.247:32969",
  neo4j.auth.basic("neo4j", "basins-engineer-speaker")
);

const server = new ApolloServer({
  context: { driver },
  schema,
});

server.listen(3003, "localhost").then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
