import { gql } from "graphql-request";

export const CHARACTER_IMAGE_FRAGMENT = gql`
  fragment CharacterImageFragment on CharacterImage {
    large
    medium
  }
`;

export const STAFF_IMAGE_FRAGMENT = gql`
  fragment StaffImageFragment on StaffImage {
    large
    medium
  }
`;

export const USER_AVATAR_FRAGMENT = gql`
  fragment UserAvatarFragment on UserAvatar {
    large
    medium
  }
`;
