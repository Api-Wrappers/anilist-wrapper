import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";

export const GET_CHARACTER_BY_ID = gql`
  ${CHARACTER_FRAGMENT}

  query GetCharacterById($id: Int!) {
    Character(id: $id) {
      ...CharacterFragment
      isFavourite
      favourites
      media {
        nodes {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
      }
    }
  }
`;
