import { gql } from "@api-wrappers/api-core";

export const TOGGLE_FOLLOW = gql`
  mutation ToggleFollow($userId: Int) {
    ToggleFollow(userId: $userId) {
      id
      name
      isFollowing
      siteUrl
    }
  }
`;
