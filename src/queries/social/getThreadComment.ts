import { gql } from "@api-wrappers/api-core";

export const GET_THREAD_COMMENT = gql`
  query GetThreadComment($id: Int!) {
    ThreadComment(id: $id) {
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
`;
