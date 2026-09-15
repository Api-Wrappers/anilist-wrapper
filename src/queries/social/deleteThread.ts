import { gql } from "@api-wrappers/api-core";

export const DELETE_THREAD = gql`
  mutation DeleteThread($id: Int) {
    DeleteThread(id: $id) {
      deleted
    }
  }
`;
