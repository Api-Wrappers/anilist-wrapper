import { gql } from "@api-wrappers/api-core";

export const DELETE_MEDIA_LIST_ENTRY = gql`
  mutation DeleteMediaListEntry($id: Int!) {
    DeleteMediaListEntry(id: $id) {
      deleted
    }
  }
`;
