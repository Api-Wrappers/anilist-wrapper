import { gql } from "graphql-request";

export const STAFF_BIRTHDAY_TODAY = gql`
  query StaffBirthdayToday($page: Int) {
    Page(page: $page) {
      staff(isBirthday: true) {
        id
        name {
          alternative
          first
          full
          last
          middle
          native
          userPreferred
        }
      }
    }
  }
`;
