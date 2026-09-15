import { gql } from "@api-wrappers/api-core";

export const DELETE_THREAD_COMMENT = gql`
  mutation DeleteThreadComment($id: Int) {
    DeleteThreadComment(id: $id) {
      deleted
    }
  }
`;
