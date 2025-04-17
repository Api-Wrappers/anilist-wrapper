import { gql } from "graphql-request";

export const MANGA_FRAGMENT = gql`
  fragment MangaFragment on Media {
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
    chapters
    volumes
    genres
    averageScore
    status
    format
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
