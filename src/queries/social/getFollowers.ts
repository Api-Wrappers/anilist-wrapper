import { gql } from "@api-wrappers/api-core";

export const GET_FOLLOWERS = gql`
  query GetFollowers($userId: Int!, $page: Int = 1, $perPage: Int = 25) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      followers(userId: $userId) {
        id
        name
        siteUrl
      }
    }
  }
`;
