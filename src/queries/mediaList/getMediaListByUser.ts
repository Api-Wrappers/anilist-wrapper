import { gql } from "@api-wrappers/api-core";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_MEDIA_LIST_BY_USER = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetMediaListByUser(
    $userId: Int
    $mediaType: MediaType
    $status: MediaListStatus
  ) {
    MediaListCollection(userId: $userId, type: $mediaType, status: $status) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
