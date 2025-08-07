import { gql } from "graphql-request";
import { CHARACTER_FRAGMENT } from "../../fragments/character";

export const CHARACTERS_BIRTHDAY_TODAY = gql`
  ${CHARACTER_FRAGMENT}

  query CharactersBirthdayToday($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      characters(isBirthday: true) {
        ...CharacterFragment
      }
    }
  }
`;
