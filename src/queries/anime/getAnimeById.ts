import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";
import { MEDIA_FRAGMENT } from "../../fragments/media";
import { STAFF_FRAGMENT } from "../../fragments/staff";
import { STUDIO_FRAGMENT } from "../../fragments/studio";

export const GET_ANIME_BY_ID = gql`
  ${MEDIA_FRAGMENT}
  ${CHARACTER_FRAGMENT}
  ${STAFF_FRAGMENT}
  ${STUDIO_FRAGMENT}

  query GetAnimeById($id: Int) {
    Media(id: $id, type: ANIME) {
      ...MediaFragment
      characters {
        edges {
          role
          node {
            ...CharacterFragment
          }
        }
      }
      staff {
        edges {
          role
          node {
            ...StaffFragment
          }
        }
      }
      studios {
        edges {
          node {
            ...StudioFragment
          }
        }
      }
    }
  }
`;
