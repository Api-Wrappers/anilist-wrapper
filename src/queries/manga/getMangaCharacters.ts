import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";

export const GET_MANGA_CHARACTERS = gql`
  ${CHARACTER_FRAGMENT}
  query GetMangaCharacters($id: Int) {
    Media(id: $id, type: MANGA) {
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
