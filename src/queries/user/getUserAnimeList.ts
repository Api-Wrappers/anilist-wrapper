import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_USER_ANIME_LIST = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetUserAnimeList($userId: Int, $status: MediaListStatus) {
    MediaListCollection(userId: $userId, type: ANIME, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
