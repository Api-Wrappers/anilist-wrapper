import { gql } from "graphql-request";

export const DATE_FRAGMENT = gql`
  fragment DateFragment on FuzzyDate {
    year
    month
    day
  }
`;
