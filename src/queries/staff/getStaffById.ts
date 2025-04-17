import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";
import { STAFF_FRAGMENT } from "../../fragments/staff";

export const GET_STAFF_BY_ID = gql`
  ${STAFF_FRAGMENT}
  ${CHARACTER_FRAGMENT}

  query GetStaffById($id: Int!) {
    Staff(id: $id) {
      ...StaffFragment
      isFavourite
      favourites
      staffMedia {
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
      characters {
        nodes {
          ...CharacterFragment
        }
      }
      characterMedia {
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
