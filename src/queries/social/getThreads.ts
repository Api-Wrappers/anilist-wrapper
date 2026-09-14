import { gql } from "@api-wrappers/api-core";

export const GET_THREADS = gql`
  query GetThreads(
    $search: String
    $userId: Int
    $page: Int = 1
    $perPage: Int = 25
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      threads(search: $search, userId: $userId, sort: ID_DESC) {
        id
        title
        body
        userId
        createdAt
        updatedAt
        replyCount
        viewCount
        likeCount
        isLocked
        isSticky
        isSubscribed
        user {
          id
          name
        }
      }
    }
  }
`;
