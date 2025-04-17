import { gql } from "graphql-request";
import { STAFF_FRAGMENT } from "../../fragments/staff";

export const GET_ANIME_STAFF = gql`
  ${STAFF_FRAGMENT}

  query GetAnimeStaff($id: Int) {
    Media(id: $id, type: ANIME) {
      staff {
        edges {
          role
          node {
            ...StaffFragment
          }
        }
      }
    }
  }
`;
