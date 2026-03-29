import { gql } from "graphql-request";

export const GET_USER_STATISTICS_BY_USERNAME = gql`
  query GetUserStatisticsByUsername($userName: String) {
    User(name: $userName) {
      statistics {
        anime {
          count
          meanScore
          minutesWatched
        }
        manga {
          count
          meanScore
          chaptersRead
        }
      }
    }
  }
`;
