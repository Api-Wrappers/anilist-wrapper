import { gql } from "graphql-request";

export const DELETE_MEDIA_LIST_ENTRY = gql`
  mutation DeleteMediaListEntry($id: Int!) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`;
