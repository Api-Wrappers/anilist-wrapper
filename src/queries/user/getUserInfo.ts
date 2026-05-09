import { gql } from "@api-wrappers/api-core";
import { USER_FRAGMENT } from "../../fragments/user";

export const GET_USER_INFO = gql`
  ${USER_FRAGMENT}
  query GetUserInfo($id: Int) {
    User(id: $id) {
      ...UserFragment
    }
  }
`;
