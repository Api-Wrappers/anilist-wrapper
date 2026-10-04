import { gql } from "@api-wrappers/api-core";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_MEDIA_LIST_BY_USERNAME = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetMediaListByUserByUsername(
    $userName: String
    $mediaType: MediaType
    $status: MediaListStatus
  ) {
    MediaListCollection(
      userName: $userName
      type: $mediaType
      status: $status
    ) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
