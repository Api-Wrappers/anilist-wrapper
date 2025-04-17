import { gql } from "graphql-request";

export const MEDIA_FRAGMENT = gql`
  fragment MediaFragment on Media {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
      medium
    }
    description
    format
    status
    episodes
    chapters
    volumes
    genres
    averageScore
    popularity
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    siteUrl
  }
`;
