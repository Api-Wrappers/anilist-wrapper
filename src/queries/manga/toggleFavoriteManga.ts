import { gql } from "@api-wrappers/api-core";

export const TOGGLE_FAVORITE_MANGA = gql`
  mutation ToggleFavoriteManga($mangaId: Int!) {
    ToggleFavourite(mangaId: $mangaId) {
      manga(page: 1, perPage: 25) {
        nodes {
          id
        }
      }
    }
  }
`;
