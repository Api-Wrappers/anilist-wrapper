import { gql } from "@api-wrappers/api-core";

export const REVIEW_FRAGMENT = gql`
  fragment ReviewFragment on Review {
    id
    userId
    mediaId
    mediaType
    summary
    body
    rating
    ratingAmount
    score
    private
    siteUrl
    createdAt
    updatedAt
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
  }
`;
