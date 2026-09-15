import { gql } from "@api-wrappers/api-core";

export const SAVE_THREAD = gql`
  mutation SaveThread(
    $id: Int
    $title: String
    $body: String
    $categories: [Int]
    $mediaCategories: [Int]
    $sticky: Boolean
    $locked: Boolean
  ) {
    SaveThread(
      id: $id
      title: $title
      body: $body
      categories: $categories
      mediaCategories: $mediaCategories
      sticky: $sticky
      locked: $locked
    ) {
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
