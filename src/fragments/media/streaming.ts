import { gql } from "graphql-request";

export const MEDIA_STREAMING_EPISODE_FRAGMENT = gql`
  fragment MediaStreamingEpisodeFragment on MediaStreamingEpisode {
    title
    thumbnail
    url
    site
  }
`;

export const AIRING_SCHEDULE_FRAGMENT = gql`
  fragment AiringScheduleFragment on AiringSchedule {
    id
    airingAt
    timeUntilAiring
    episode
  }
`;
