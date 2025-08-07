import { gql } from "graphql-request";

export const COVER_IMAGE_FRAGMENT = gql`
  fragment CoverImageFragment on MediaCoverImage {
    large
    medium
    extraLarge
    color
  }
`;
