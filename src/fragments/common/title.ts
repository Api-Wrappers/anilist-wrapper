import { gql } from "@api-wrappers/api-core";

export const TITLE_FRAGMENT = gql`
  fragment TitleFragment on MediaTitle {
    romaji
    english
    native
    userPreferred
  }
`;
