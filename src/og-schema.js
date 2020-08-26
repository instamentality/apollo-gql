// original schema

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    allGroups: [Group!]
    allUsers: [User!]
    user(username: String): User
    group(username: String): User
    login(email: String!, password: String!): User
    me: User
  }

  type Mutation {
    signup(email: String!, password: String!): User
    uploadProfileImage(file: Upload!): String
    editUsername(username: String!): String
    editDisplayName(displayName: String!): String
    editEmail(email: String!): String
    editPassword(password: String!): String
    addBuddy(username: String!): Boolean
    addGroup(username: String!): Boolean
    removeBuddy(username: String!): Boolean
    removeGroup(username: String!): Boolean
    editGroupUsername(username: String!): String
    editGroupDisplayName(displayName: String!): String
    uploadGroupProfileImage(file: Upload!): String
    editGroupDescription(description: String!): String
    editGroupPrivacy(privacy: GroupPrivacy!): GroupPrivacy
    addMember(username: String!): Boolean
    removeMember(username: String!): Boolean
  }

  type User {
    generalInfo: GeneralInfo!
    studyData: StudyData!
    buddies: [User!]
    groups: [Group!]
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
