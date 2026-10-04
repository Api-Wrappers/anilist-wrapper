import { gql } from "@api-wrappers/api-core";

export const RECOMMENDATION_FRAGMENT = gql`
  fragment RecommendationFragment on Recommendation {
    id
    rating
    userRating
    user {
      id
      name
    }
    media {
      id
      title {
        userPreferred
      }
    }
    mediaRecommendation {
      id
      title {
        userPreferred
      }
    }
  }
`;
