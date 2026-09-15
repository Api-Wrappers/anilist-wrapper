import { gql } from "@api-wrappers/api-core";

export const GET_ACTIVITIES = gql`
  query GetActivities($userId: Int, $page: Int = 1, $perPage: Int = 25) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      activities(userId: $userId, sort: ID_DESC) {
        ... on TextActivity {
          id
          type
          userId
          createdAt
          text
        }
        ... on ListActivity {
          id
          type
          userId
          createdAt
          status
          progress
        }
        ... on MessageActivity {
          id
          type
          messengerId
          createdAt
          message
        }
      }
    }
  }
`;
