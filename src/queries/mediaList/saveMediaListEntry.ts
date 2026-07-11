import { gql } from "@api-wrappers/api-core";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const SAVE_MEDIA_LIST_ENTRY = gql`
  ${MEDIA_LIST_FRAGMENT}
  mutation SaveMediaListEntry(
    $mediaId: Int
    $id: Int
    $status: MediaListStatus
    $score: Float
    $scoreRaw: Int
    $progress: Int
    $progressVolumes: Int
    $repeat: Int
    $private: Boolean
    $notes: String
    $startedAt: FuzzyDateInput
    $completedAt: FuzzyDateInput
    $advancedScores: [Float]
    $customLists: [String]
    $hiddenFromStatusLists: Boolean
    $priority: Int
  ) {
    SaveMediaListEntry(
      mediaId: $mediaId
      id: $id
      status: $status
      score: $score
      scoreRaw: $scoreRaw
      progress: $progress
      progressVolumes: $progressVolumes
      repeat: $repeat
      private: $private
      notes: $notes
      startedAt: $startedAt
      completedAt: $completedAt
      advancedScores: $advancedScores
      customLists: $customLists
      hiddenFromStatusLists: $hiddenFromStatusLists
      priority: $priority
    ) {
      ...MediaListFragment
    }
  }
`;
