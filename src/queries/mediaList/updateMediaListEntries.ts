import { gql } from "@api-wrappers/api-core";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const UPDATE_MEDIA_LIST_ENTRIES = gql`
  ${MEDIA_LIST_FRAGMENT}

  mutation UpdateMediaListEntries(
    $ids: [Int]
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
    $hiddenFromStatusLists: Boolean
    $priority: Int
  ) {
    UpdateMediaListEntries(
      ids: $ids
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
      hiddenFromStatusLists: $hiddenFromStatusLists
      priority: $priority
    ) {
      ...MediaListFragment
    }
  }
`;
