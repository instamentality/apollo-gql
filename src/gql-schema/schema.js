/**
 * Some Mutations are auto-generated.
 * Check neo4j and then add mutations and any necessary resolvers.
 *
 * Add @cypher directive for the following:
 * Query: Groups, Users, Me
 * User(?): generalInfo, studyData
 * Group(?): generalInfo, studyData
 */

module.exports = `
  type Query {
    Groups(username: String): [Group]
    Users(username: String): [User]
    User(username: String): User
    Group(username: String): User
    Me: User
  }

  type User {
    generalInfo: GeneralInfo!
    studyData: StudyData!
    buddies: [User]
      @relation(name: "BUDDY_OF", direction: "BOTH")
    groups: [Group]
      @relation(name: "MEMBER_OF", direction: "OUT")
    email: String
    password: String!
  }

  type GeneralInfo {
    username: String!
    displayName: String!
    image: String
  }

  type StudyData {
    studyTime: Int
    lastActiveTime: Int!
  }

  type Group {
    admin: User
      @relation(name: "OWNER_OF", direction: "IN")
    generalInfo: GeneralInfo!
    studyData: StudyData!
    description: String
    privacy: GroupPrivacy!
    members: [User]
  }

  enum GroupPrivacy {
    PUBLIC
    PRIVATE
    RESTRICTED
  }
`;
