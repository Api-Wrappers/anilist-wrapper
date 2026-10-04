import { gql } from "@api-wrappers/api-core";

export const SAVE_ACTIVITY_REPLY = gql`
  mutation SaveActivityReply(
    $id: Int
    $activityId: Int
    $text: String
    $asMod: Boolean
  ) {
    SaveActivityReply(
      id: $id
      activityId: $activityId
      text: $text
      asMod: $asMod
    ) {
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
