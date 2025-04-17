import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_MEDIA_LIST_BY_USER = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetMediaListByUser($userId: Int) {
    MediaListCollection(userId: $userId) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
`;
