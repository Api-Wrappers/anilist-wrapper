import { gql } from "@api-wrappers/api-core";

export const SAVE_TEXT_ACTIVITY = gql`
  mutation SaveTextActivity($id: Int, $text: String, $locked: Boolean) {
    SaveTextActivity(id: $id, text: $text, locked: $locked) {
      id
      type
      userId
      createdAt
      text
      isLiked
      isLocked
      likeCount
      siteUrl
    }
  }
`;
