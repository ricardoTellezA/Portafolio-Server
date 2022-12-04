const { gql } = require("apollo-server");

const typeDefs = gql`
  input UserInput {
    username: String!
    name: String!
    email: String!
    password: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
  } 

  type Query {
    obtenerUsuario: String
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`;

module.exports = typeDefs;
