import { gql } from "graphql-request";

export const ANIME_FRAGMENT = gql`
  fragment AnimeFragment on Media {
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
    episodes
    duration
    genres
    averageScore
    status
    format
    season
    seasonYear
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
    studios {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
    relations {
      edges {
        relationType
        node {
          id
          title {
            romaji
          }
        }
      }
    }
  }
`;
