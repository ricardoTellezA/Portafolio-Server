const { gql } = require("apollo-server");

const typeDefs = gql`
  input UserInput {
    username: String
    name: String
    email: String!
    password: String!
  }

  input editUserInput {
    username: String!
    name: String
    presentation: String
    description: String
    image: String
    profession: String
    skills: [String]
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input ProjectInput {
    username: String!
    name: String!
    description: String!
    image: String!
    url: String!
    technologies: [String]!
    createAt: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
  }

  type UserInfo {
    username: String!
    name: String!
    presentation: String
    description: String
    image: String
    profession: String
    skills: [String]
    projects: [Project]
  }

  type Token {
    token: String!
  }

  type Project {
    id: ID!
    username: String!
    name: String!
    description: String!
    image: String!
    url: String!
    technologies: [String]!
  }

  type Skill {
    url: String
  }

  type Query {
    obtenerUsuario(username: String!): UserInfo
  }
  type Mutation {
    createUser(input: UserInput): User
    loginUser(input: LoginInput): Token
    editUser(input: editUserInput): User
    addProject(input: ProjectInput): Project
  }
`;

module.exports = typeDefs;
