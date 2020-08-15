import { makeExecutableSchema } from "apollo-server";
import { typeDefs, resolvers } from "./gql-schema";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
