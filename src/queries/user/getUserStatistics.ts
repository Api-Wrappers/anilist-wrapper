import { gql } from "graphql-request";

export const GET_USER_STATISTICS = gql`
  query GetUserStatistics($id: Int) {
    User(id: $id) {
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
