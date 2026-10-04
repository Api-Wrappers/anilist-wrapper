import { gql } from "@api-wrappers/api-core";

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: Int) {
    DeleteReview(id: $id) {
      deleted
    }
  }
`;
