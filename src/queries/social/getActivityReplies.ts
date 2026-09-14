import { gql } from "@api-wrappers/api-core";

export const GET_ACTIVITY_REPLIES = gql`
  query GetActivityReplies(
    $activityId: Int
    $page: Int = 1
    $perPage: Int = 25
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      activityReplies(activityId: $activityId) {
        id
        activityId
        userId
        text
        createdAt
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
