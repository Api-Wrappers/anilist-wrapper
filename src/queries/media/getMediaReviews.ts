import { gql } from "@api-wrappers/api-core";
import { REVIEW_FRAGMENT } from "../../fragments";

export const GET_MEDIA_REVIEWS = gql`
  ${REVIEW_FRAGMENT}

  query GetMediaReviews(
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
      reviews(mediaId: $mediaId) {
        ...ReviewFragment
      }
    }
  }
`;
