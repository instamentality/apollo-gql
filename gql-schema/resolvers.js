import { neo4jgraphql } from "neo4j-graphql-js";

export const resolvers = {
  Query: {
    // no resolvers added yet for the following Queries:
    // Groups, Users, Me
    Group(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    },
    User(object, params, ctx, resolveInfo) {
      return neo4jgraphql(object, params, ctx, resolveInfo);
    },
  },
};
