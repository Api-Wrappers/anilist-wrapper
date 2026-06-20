import { gql } from "@api-wrappers/api-core";

export const GET_ANIME_BROWSE = gql`
  query GetAnimeBrowse(
    $genre: String
    $format: MediaFormat
    $status: MediaStatus
    $seasonYear: Int
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      media(
        genre: $genre
        format: $format
        status: $status
        seasonYear: $seasonYear
        type: ANIME
        sort: POPULARITY_DESC
        isAdult: false
      ) {
        id
        title {
          english
          romaji
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
        }
        bannerImage
        genres
        format
        status
        seasonYear
        averageScore
        episodes
      }
    }
  }
`;
