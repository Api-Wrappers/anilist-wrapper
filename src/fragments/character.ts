import { gql } from "graphql-request";

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

export const CHARACTER_FRAGMENT = gql`
  ${CHARACTER_NAME_FRAGMENT}
  fragment CharacterFragment on Character {
    id
    name {
      ...CharacterNameFragment
    }
    image {
      large
      medium
    }
    description
    gender
    dateOfBirth {
      year
      month
      day
    }
    age
    bloodType
    siteUrl
  }
`;
