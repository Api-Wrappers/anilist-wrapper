import { gql } from "graphql-request";

export const GET_USER_STATISTICS_BY_USERNAME = gql`
  query GetUserStatisticsByUsername($userName: String) {
    User(name: $userName) {
      statistics {
        anime {
          count
          meanScore
          minutesWatched
          episodesWatched
          standardDeviation
          genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
            meanScore
            minutesWatched
          }
          tags(limit: 10, sort: COUNT_DESC) {
            tag {
              id
              name
            }
            count
            meanScore
            minutesWatched
          }
          statuses {
            status
            count
            meanScore
            minutesWatched
          }
          formats {
            format
            count
            meanScore
            minutesWatched
          }
          releaseYears {
            releaseYear
            count
            meanScore
            minutesWatched
          }
        }
        manga {
          count
          meanScore
          chaptersRead
          volumesRead
          standardDeviation
          genres(limit: 10, sort: COUNT_DESC) {
            genre
            count
            meanScore
            chaptersRead
          }
          tags(limit: 10, sort: COUNT_DESC) {
            tag {
              id
              name
            }
            count
            meanScore
            chaptersRead
          }
          statuses {
            status
            count
            meanScore
            chaptersRead
          }
          formats {
            format
            count
            meanScore
            chaptersRead
          }
        }
      }
    }
  }
`;
