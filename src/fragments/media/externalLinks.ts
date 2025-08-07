import { gql } from "graphql-request";

export const MEDIA_EXTERNAL_LINK_FRAGMENT = gql`
  fragment MediaExternalLinkFragment on MediaExternalLink {
    id
    url
    site
    type
    language
    color
    icon
  }
`;

export const MEDIA_EXTERNAL_LINK_BASIC_FRAGMENT = gql`
  fragment MediaExternalLinkBasicFragment on MediaExternalLink {
    id
    url
    site
    type
  }
`;
