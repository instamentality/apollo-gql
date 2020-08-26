const { neo4jgraphql } = require("neo4j-graphql-js");

module.exports = {
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
