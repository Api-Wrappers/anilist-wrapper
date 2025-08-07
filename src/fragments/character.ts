import { gql } from "graphql-request";
import { CHARACTER_BASIC_FRAGMENT } from "./entities/character.js";

export const CHARACTER_FRAGMENT = gql`
  ${CHARACTER_BASIC_FRAGMENT}
  fragment CharacterFragment on Character {
    ...CharacterBasicFragment
  }
`;
