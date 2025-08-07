import { gql } from "graphql-request";
import { DATE_FRAGMENT } from "./common/date.js";
import { MEDIA_CORE_FRAGMENT } from "./media/core.js";

export const MEDIA_LIST_FRAGMENT = gql`
  ${DATE_FRAGMENT}
  ${MEDIA_CORE_FRAGMENT}
  fragment MediaListFragment on MediaList {
    id
    mediaId
    userId
    status
    score
    progress
    progressVolumes
    repeat
    priority
    private
    notes
    hiddenFromStatusLists
    customLists
    advancedScores
    startedAt {
      ...DateFragment
    }
    completedAt {
      ...DateFragment
    }
    updatedAt
    createdAt
    media {
      ...MediaCoreFragment
    }
  }
`;
