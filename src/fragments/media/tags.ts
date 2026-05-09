import { gql } from "@api-wrappers/api-core";

export const MEDIA_TAG_FRAGMENT = gql`
  fragment MediaTagFragment on MediaTag {
    id
    name
    description
    category
    rank
    isGeneralSpoiler
    isMediaSpoiler
    isAdult
    userId
  }
`;

export const MEDIA_TAG_BASIC_FRAGMENT = gql`
  fragment MediaTagBasicFragment on MediaTag {
    id
    name
    description
    category
    rank
  }
`;
