import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_USER_MANGA_LIST_BY_USERNAME = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetUserMangaListByUserName($userName: String, $status: MediaListStatus) {
    MediaListCollection(userName: $userName, type: MANGA, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
