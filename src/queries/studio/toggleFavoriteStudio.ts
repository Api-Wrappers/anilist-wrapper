import { gql } from "@api-wrappers/api-core";

export const TOGGLE_FAVORITE_STUDIO = gql`
  mutation ToggleFavoriteStudio($studioId: Int!) {
    ToggleFavourite(studioId: $studioId) {
      studios(page: 1, perPage: 25) {
        nodes {
          id
        }
      }
    }
  }
`;
