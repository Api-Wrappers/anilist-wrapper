import { gql } from "@api-wrappers/api-core";
import { USER_FRAGMENT } from "../../fragments/user";

export const GET_USER_LIST = gql`
  ${USER_FRAGMENT}
  query GetUserList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      users {
        ...UserFragment
      }
    }
  }
`;
