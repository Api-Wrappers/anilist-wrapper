import { gql } from "graphql-request";

export const MEDIA_RANK_FRAGMENT = gql`
  fragment MediaRankFragment on MediaRank {
    id
    rank
    type
    format
    year
    season
    allTime
    context
  }
`;
