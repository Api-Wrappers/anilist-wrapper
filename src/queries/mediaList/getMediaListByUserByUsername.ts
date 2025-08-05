import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_MEDIA_LIST_BY_USERNAME = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetMediaListByUserByUserName($userName: String, $mediaType: MediaType) {
    MediaListCollection(userName: $userName, type: $mediaType) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
