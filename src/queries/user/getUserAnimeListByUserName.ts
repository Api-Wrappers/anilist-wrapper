import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_USER_ANIME_LIST_BY_USERNAME = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetUserAnimeListByUserName($userName: String, $status: MediaListStatus ) {
    MediaListCollection(userName: $userName , type: ANIME, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
