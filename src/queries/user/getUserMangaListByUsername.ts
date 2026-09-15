import { gql } from "@api-wrappers/api-core";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_USER_MANGA_LIST_BY_USERNAME = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetUserMangaListByUsername($userName: String, $status: MediaListStatus) {
    MediaListCollection(userName: $userName, type: MANGA, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
