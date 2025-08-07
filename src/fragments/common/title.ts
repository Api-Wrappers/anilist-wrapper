import { gql } from "graphql-request";

export const TITLE_FRAGMENT = gql`
  fragment TitleFragment on MediaTitle {
    romaji
    english
    native
  }
`;
