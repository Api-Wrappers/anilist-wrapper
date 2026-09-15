import { gql } from "@api-wrappers/api-core";

export const GET_MANGA_BROWSE = gql`
  query GetMangaBrowse(
    $genre: String
    $format: MediaFormat
    $status: MediaStatus
    $startDate: FuzzyDateInt
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
        startDate: $startDate
        type: MANGA
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
        startDate {
          year
        }
        averageScore
        chapters
        volumes
      }
    }
  }
`;
