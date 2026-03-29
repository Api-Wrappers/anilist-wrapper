import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments";

export const GET_MEDIA_BY_ID = gql`
  ${MEDIA_FRAGMENT}
  query GetMediaById($id: Int!) {
    Media(id: $id) {
      ...MediaFragment
    }
  }
`;
