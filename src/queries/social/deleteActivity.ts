import { gql } from "@api-wrappers/api-core";

export const DELETE_ACTIVITY = gql`
  mutation DeleteActivity($id: Int) {
    DeleteActivity(id: $id) {
      deleted
    }
  }
`;
