import { gql } from "graphql-request";
import { MEDIA_BASIC_FRAGMENT } from "./media/core.js";

export const MEDIA_FRAGMENT = gql`
  ${MEDIA_BASIC_FRAGMENT}
  fragment MediaFragment on Media {
    ...MediaBasicFragment
    nextAiringEpisode {
      id
      airingAt
      timeUntilAiring
      episode
      mediaId
    }
  }
`;
