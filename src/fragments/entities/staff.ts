import { gql } from "graphql-request";
import { DATE_FRAGMENT } from "../common/date.js";
import { STAFF_IMAGE_FRAGMENT } from "../common/image.js";

const STAFF_NAME_FRAGMENT = gql`
  fragment StaffNameFragment on StaffName {
    full
    native
    first
    middle
    last
    userPreferred
  }
`;

export const STAFF_BASIC_FRAGMENT = gql`
  ${STAFF_NAME_FRAGMENT}
  ${STAFF_IMAGE_FRAGMENT}
  ${DATE_FRAGMENT}
  fragment StaffBasicFragment on Staff {
    id
    name {
      ...StaffNameFragment
    }
    image {
      ...StaffImageFragment
    }
    description
    primaryOccupations
    gender
    bloodType
    homeTown
    languageV2
    yearsActive
    favourites
    isFavourite
    isFavouriteBlocked
    dateOfBirth {
      ...DateFragment
    }
    dateOfDeath {
      ...DateFragment
    }
    age
    siteUrl
  }
`;

export { STAFF_NAME_FRAGMENT };
