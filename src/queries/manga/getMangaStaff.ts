import { gql } from "graphql-request";
import { STAFF_FRAGMENT } from "../../fragments/staff";

export const GET_MANGA_STAFF = gql`
  ${STAFF_FRAGMENT}
  query GetMangaStaff($id: Int) {
    Media(id: $id, type: MANGA) {
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
