import { gql } from "graphql-request";
import { MEDIA_LIST_FRAGMENT } from "../../fragments/mediaList";

export const GET_MEDIA_LIST = gql`
  ${MEDIA_LIST_FRAGMENT}
  query GetMediaList($id: Int) {
    MediaList(id: $id) {
      ...MediaListFragment
    }
  }
`;
