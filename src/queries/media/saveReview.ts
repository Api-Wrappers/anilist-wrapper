import { gql } from "@api-wrappers/api-core";
import { REVIEW_FRAGMENT } from "../../fragments";

export const SAVE_REVIEW = gql`
  ${REVIEW_FRAGMENT}

  mutation SaveReview(
    $id: Int
    $mediaId: Int
    $body: String
    $summary: String
    $score: Int
    $private: Boolean
  ) {
    SaveReview(
      id: $id
      mediaId: $mediaId
      body: $body
      summary: $summary
      score: $score
      private: $private
    ) {
      ...ReviewFragment
    }
  }
`;
