import { gql } from "@api-wrappers/api-core";
import { RECOMMENDATION_FRAGMENT } from "../../fragments";

export const GET_RECOMMENDATIONS_PAGE = gql`
  ${RECOMMENDATION_FRAGMENT}

  query GetRecommendationsPage(
    $mediaId: Int
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      recommendations(mediaId: $mediaId) {
        ...RecommendationFragment
      }
    }
  }
`;
