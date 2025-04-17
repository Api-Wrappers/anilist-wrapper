import { gql } from "graphql-request";

export const STAFF_FRAGMENT = gql`
  fragment StaffFragment on Staff {
    id
    name {
      full
      native
    }
    image {
      large
      medium
    }
    description
    primaryOccupations
    gender
    dateOfBirth {
      year
      month
      day
    }
    age
    siteUrl
  }
`;
