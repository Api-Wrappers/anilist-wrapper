import { gql } from "graphql-request";
import { USER_FRAGMENT } from "../../fragments/user";

export const GET_USER_INFO_BY_USERNAME = gql`
  ${USER_FRAGMENT}
  query GetUserInfoByUserName($userName: String) {
    User(name: $userName) {
      ...UserFragment
    }
  }
`;
