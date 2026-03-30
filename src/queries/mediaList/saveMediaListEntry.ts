import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const SAVE_MEDIA_LIST_ENTRY = gql`
  ${MEDIA_LIST_FRAGMENT}
  mutation SaveMediaListEntry(
    $mediaId: Int
    $status: MediaListStatus
    $score: Float
    $progress: Int
    $progressVolumes: Int
    $repeat: Int
    $private: Boolean
    $notes: String
    $startedAt: FuzzyDateInput
    $completedAt: FuzzyDateInput
  ) {
    SaveMediaListEntry(
      mediaId: $mediaId
      status: $status
      score: $score
      progress: $progress
      progressVolumes: $progressVolumes
      repeat: $repeat
      private: $private
      notes: $notes
      startedAt: $startedAt
      completedAt: $completedAt
    ) {
      ...MediaListFragment
    }
  }
`;
