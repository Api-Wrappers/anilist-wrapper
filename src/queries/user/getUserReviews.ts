import { gql } from "@api-wrappers/api-core";
import { REVIEW_FRAGMENT } from "../../fragments";

export const GET_USER_REVIEWS = gql`
  ${REVIEW_FRAGMENT}

  query GetUserReviews($userId: Int, $page: Int = 1, $perPage: Int = 10) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      reviews(userId: $userId) {
        ...ReviewFragment
      }
    }
  }
`;
