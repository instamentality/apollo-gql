const typeDefs = `
  type Query {
    groups: [Group!]
    users: [User!]
    user(username: String): User
    group(username: String): User
    me: User
  }

  type User {
    generalInfo: GeneralInfo!
    studyData: StudyData!
    buddies: [User!]
      @relation(name: "BUDDY_OF", direction: "BOTH")
    groups: [Group!]
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
    admin: User!
      @relation(name: "OWNER_OF", direction: "IN")
    generalInfo: GeneralInfo!
    studyData: StudyData!
    description: String
    privacy: GroupPrivacy!
    members: [User!]
  }

  enum GroupPrivacy {
    PUBLIC
    PRIVATE
    RESTRICTED
  }
`;

module.exports = typeDefs;
