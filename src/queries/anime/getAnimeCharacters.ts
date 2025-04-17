import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";

export const GET_ANIME_CHARACTERS = gql`
  ${CHARACTER_FRAGMENT}

  query GetAnimeCharacters($id: Int) {
    Media(id: $id, type: ANIME) {
      characters {
        edges {
          role
          node {
            ...CharacterFragment
          }
        }
      }
    }
  }
`;
