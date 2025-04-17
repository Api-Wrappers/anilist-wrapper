import { gql } from "graphql-request";

export const GET_MEDIA_BY_ID = gql`
  query GetMediaById($id: Int) {
    Media(id: $id) {
      ...MediaFragment
    }
  }
`;
