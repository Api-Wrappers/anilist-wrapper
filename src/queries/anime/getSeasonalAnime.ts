import { gql } from "@api-wrappers/api-core";

export const GET_SEASONAL_ANIME = gql`
  query GetSeasonalAnime(
    $season: MediaSeason
    $seasonYear: Int
    $page: Int
    $perPage: Int
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(
        season: $season
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
        seasonYear
        season
      }
    }
  }
`;
