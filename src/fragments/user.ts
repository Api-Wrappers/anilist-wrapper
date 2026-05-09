import { gql } from "@api-wrappers/api-core";
import { USER_BASIC_FRAGMENT } from "./entities/user.js";

export const USER_FRAGMENT = gql`
  ${USER_BASIC_FRAGMENT}
  fragment UserFragment on User {
    ...UserBasicFragment
  }
`;
