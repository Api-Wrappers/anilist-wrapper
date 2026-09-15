import { gql } from "@api-wrappers/api-core";

export const SAVE_THREAD_COMMENT = gql`
  mutation SaveThreadComment(
    $id: Int
    $threadId: Int
    $parentCommentId: Int
    $comment: String
    $locked: Boolean
  ) {
    SaveThreadComment(
      id: $id
      threadId: $threadId
      parentCommentId: $parentCommentId
      comment: $comment
      locked: $locked
    ) {
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
