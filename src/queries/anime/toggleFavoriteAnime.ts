import { gql } from "@api-wrappers/api-core";

export const TOGGLE_FAVORITE_ANIME = gql`
  mutation ToggleFavoriteAnime($animeId: Int!) {
    ToggleFavourite(animeId: $animeId) {
      anime(page: 1, perPage: 25) {
        nodes {
          id
        }
      }
    }
  }
`;
