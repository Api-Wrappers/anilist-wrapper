import { gql } from "graphql-request";

export const MEDIA_TRAILER_FRAGMENT = gql`
  fragment MediaTrailerFragment on MediaTrailer {
    id
    site
    thumbnail
  }
`;
