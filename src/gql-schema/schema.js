/**
 * Some Mutations are auto-generated.
 * Check neo4j and then add mutations and any necessary resolvers.
 */

module.exports = `
type User {
  username: String!
  displayName: String!
  image: String
  studyTime: Int
  lastActiveTime: Int!
  buddies: [User]
    @relation(name: "BUDDY_OF", direction: "BOTH")
  groups: [Group]
    @relation(name: "MEMBER_OF", direction: "OUT")
  email: String
  password: String!
  }
type Group {
  admin: User
    @relation(name: "OWNER_OF", direction: "IN")
  username: String!
  displayName: String!
  image: String
  studyTime: Int
  lastActiveTime: Int!
  privacy: GroupPrivacy!
  description: String
  }
enum GroupPrivacy {
  PUBLIC
  PRIVATE
  RESTRICTED
}
`;
