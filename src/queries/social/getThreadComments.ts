import { gql } from "@api-wrappers/api-core";

export const GET_THREAD_COMMENTS = gql`
  query GetThreadComments(
    $threadId: Int
    $page: Int = 1
    $perPage: Int = 25
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      threadComments(threadId: $threadId) {
        id
        threadId
        userId
        comment
        createdAt
        updatedAt
        likeCount
        isLiked
        user {
          id
          name
        }
      }
    }
  }
`;
