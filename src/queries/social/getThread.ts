import { gql } from "@api-wrappers/api-core";

export const GET_THREAD = gql`
  query GetThread($id: Int!) {
    Thread(id: $id) {
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
`;
