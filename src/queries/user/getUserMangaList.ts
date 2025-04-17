import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_USER_MANGA_LIST = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetUserMangaList($userId: Int, $status: MediaListStatus) {
    MediaListCollection(userId: $userId, type: MANGA, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
