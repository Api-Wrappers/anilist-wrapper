import { gql } from "@api-wrappers/api-core";

export const COVER_IMAGE_FRAGMENT = gql`
  fragment CoverImageFragment on MediaCoverImage {
    large
    medium
    extraLarge
    color
  }
`;
