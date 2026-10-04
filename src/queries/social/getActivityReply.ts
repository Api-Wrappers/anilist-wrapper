import { gql } from "@api-wrappers/api-core";

export const GET_ACTIVITY_REPLY = gql`
  query GetActivityReply($id: Int!) {
    ActivityReply(id: $id) {
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
`;
