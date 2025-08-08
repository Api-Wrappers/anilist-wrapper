import { gql } from "graphql-request";

export const MEDIA_EXTERNAL_LINK_FRAGMENT = gql`
  fragment MediaExternalLinkFragment on MediaExternalLink {
    id
    url
    site
    siteId
    type
    language
    color
    icon
    notes
    isDisabled
  }
`;

export const MEDIA_EXTERNAL_LINK_BASIC_FRAGMENT = gql`
  fragment MediaExternalLinkBasicFragment on MediaExternalLink {
    id
    url
    site
    siteId
    type
  }
`;
