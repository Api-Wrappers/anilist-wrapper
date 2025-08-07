import { gql } from "graphql-request";
import { DATE_FRAGMENT } from "../common/date.js";
import { CHARACTER_IMAGE_FRAGMENT } from "../common/image.js";

const CHARACTER_NAME_FRAGMENT = gql`
  fragment CharacterNameFragment on CharacterName {
    alternative
    alternativeSpoiler
    first
    full
    last
    middle
    native
    userPreferred
  }
`;

export const CHARACTER_BASIC_FRAGMENT = gql`
  ${CHARACTER_NAME_FRAGMENT}
  ${CHARACTER_IMAGE_FRAGMENT}
  ${DATE_FRAGMENT}
  fragment CharacterBasicFragment on Character {
    id
    name {
      ...CharacterNameFragment
    }
    image {
      ...CharacterImageFragment
    }
    description
    gender
    dateOfBirth {
      ...DateFragment
    }
    age
    bloodType
    favourites
    isFavourite
    isFavouriteBlocked
    siteUrl
  }
`;

export { CHARACTER_NAME_FRAGMENT };
