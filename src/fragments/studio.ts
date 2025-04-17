import { gql } from "graphql-request";

export const STUDIO_FRAGMENT = gql`
  fragment StudioFragment on Studio {
    id
    name
    isAnimationStudio
    siteUrl
  }
`;
