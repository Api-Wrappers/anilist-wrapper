import { gql } from "@api-wrappers/api-core";

export const DATE_FRAGMENT = gql`
  fragment DateFragment on FuzzyDate {
    year
    month
    day
  }
`;
