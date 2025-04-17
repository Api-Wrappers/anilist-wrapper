import { gql } from "graphql-request";

export const MEDIA_LIST_FRAGMENT = gql`
  fragment MediaListFragment on MediaList {
    id
    status
    score
    progress
    repeat
    priority
    private
    notes
    hiddenFromStatusLists
    customLists
    advancedScores
    startedAt {
      year
      month
      day
    }
    completedAt {
      year
      month
      day
    }
    updatedAt
    createdAt
    media {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
        medium
      }
      siteUrl
    }
  }
`;
