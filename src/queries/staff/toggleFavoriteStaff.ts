import { gql } from "@api-wrappers/api-core";

export const TOGGLE_FAVORITE_STAFF = gql`
  mutation ToggleFavoriteStaff($staffID: Int!) {
    ToggleFavourite(staffId: $staffID) {
      staff(page: 1, perPage: 25) {
        nodes {
          id
        }
      }
    }
  }
`;
