import { gql } from "@api-wrappers/api-core";

export const DELETE_ACTIVITY_REPLY = gql`
  mutation DeleteActivityReply($id: Int) {
    DeleteActivityReply(id: $id) {
      deleted
    }
  }
`;
