import { gql } from "graphql-request";

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
