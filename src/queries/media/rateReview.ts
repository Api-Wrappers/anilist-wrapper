import { gql } from "@api-wrappers/api-core";
import { REVIEW_FRAGMENT } from "../../fragments";

export const RATE_REVIEW = gql`
  ${REVIEW_FRAGMENT}

  mutation RateReview($reviewId: Int, $rating: ReviewRating) {
    RateReview(reviewId: $reviewId, rating: $rating) {
      ...ReviewFragment
    }
  }
`;
