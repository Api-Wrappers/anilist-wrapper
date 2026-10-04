import { gql } from "@api-wrappers/api-core";

export const SAVE_MESSAGE_ACTIVITY = gql`
  mutation SaveMessageActivity(
    $id: Int
    $message: String
    $recipientId: Int
    $private: Boolean
    $locked: Boolean
    $asMod: Boolean
  ) {
    SaveMessageActivity(
      id: $id
      message: $message
      recipientId: $recipientId
      private: $private
      locked: $locked
      asMod: $asMod
    ) {
      id
      type
      messengerId
      createdAt
      message
      isLiked
      isLocked
      likeCount
      siteUrl
    }
  }
`;
