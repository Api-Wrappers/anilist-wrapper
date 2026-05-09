import { gql } from "@api-wrappers/api-core";
import { USER_FRAGMENT } from "../../fragments/user";

export const GET_USER_INFO_BY_USERNAME = gql`
  ${USER_FRAGMENT}
  query GetUserInfoByUsername($userName: String) {
    User(name: $userName) {
      ...UserFragment
    }
  }
`;
