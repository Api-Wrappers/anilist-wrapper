import { gql } from "@api-wrappers/api-core";

export const GET_SITE_STATISTICS = gql`
  query GetSiteStatistics {
    SiteStatistics {
      users {
        nodes {
          count
          date
          change
        }
      }
      anime {
        nodes {
          count
          date
          change
        }
      }
      manga {
        nodes {
          count
          date
          change
        }
      }
      characters {
        nodes {
          count
          date
          change
        }
      }
      staff {
        nodes {
          count
          date
          change
        }
      }
      studios {
        nodes {
          count
          date
          change
        }
      }
      reviews {
        nodes {
          count
          date
          change
        }
      }
    }
  }
`;
