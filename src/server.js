const neo4j = require("neo4j-driver");
const { ApolloServer } = require("apollo-server");
const { makeAugmentedSchema } = require("neo4j-graphql-js");
const { typeDefs, resolvers } = require("./gql-schema");

const schema = makeAugmentedSchema({
  typeDefs,
  // resolvers,
});

const driver = neo4j.driver(
  "bolt://100.24.242.251:33047",
  neo4j.auth.basic("neo4j", "suppressions-fatigues-failures")
);

const server = new ApolloServer({
  context: { driver },
  schema,
});

server.listen(3003, "localhost").then(({ url }) => {
  console.log(`GraphQL API ready at ${url}`);
});
