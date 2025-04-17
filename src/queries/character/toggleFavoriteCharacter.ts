import { gql } from "graphql-request";

export const TOGGLE_FAVORITE_CHARACTER = gql`
  mutation ToggleFavoriteCharacter($charID: Int) {
    ToggleFavourite(characterId: $charID) {
      characters(page: 1, perPage: 25) {
        nodes {
          id
        }
      }
    }
  }
`;
