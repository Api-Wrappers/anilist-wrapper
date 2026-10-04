import { gql } from "@api-wrappers/api-core";

export const GET_FOLLOWING = gql`
  query GetFollowing($userId: Int!, $page: Int = 1, $perPage: Int = 25) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      following(userId: $userId) {
        id
        name
        siteUrl
      }
    }
  }
`;
