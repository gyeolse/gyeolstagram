import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio: String
    avatar: String
  }
`;
// 스키마랑 sync 맞춰야함.
