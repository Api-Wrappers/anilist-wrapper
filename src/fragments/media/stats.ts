import { gql } from "graphql-request";

export const SCORE_DISTRIBUTION_FRAGMENT = gql`
  fragment ScoreDistributionFragment on ScoreDistribution {
    score
    amount
  }
`;

export const STATUS_DISTRIBUTION_FRAGMENT = gql`
  fragment StatusDistributionFragment on StatusDistribution {
    status
    amount
  }
`;

export const MEDIA_STATS_FRAGMENT = gql`
  ${SCORE_DISTRIBUTION_FRAGMENT}
  ${STATUS_DISTRIBUTION_FRAGMENT}
  fragment MediaStatsFragment on MediaStats {
    scoreDistribution {
      ...ScoreDistributionFragment
    }
    statusDistribution {
      ...StatusDistributionFragment
    }
    airingProgression {
      episode
      score
      watching
    }
  }
`;
