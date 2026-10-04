import { gql } from "@api-wrappers/api-core";
import { RECOMMENDATION_FRAGMENT } from "../../fragments";

export const SAVE_RECOMMENDATION = gql`
  ${RECOMMENDATION_FRAGMENT}

  mutation SaveRecommendation(
    $mediaId: Int
    $mediaRecommendationId: Int
    $rating: RecommendationRating
  ) {
    SaveRecommendation(
      mediaId: $mediaId
      mediaRecommendationId: $mediaRecommendationId
      rating: $rating
    ) {
      ...RecommendationFragment
    }
  }
`;
