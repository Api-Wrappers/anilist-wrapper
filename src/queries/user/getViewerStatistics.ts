import { gql } from "@api-wrappers/api-core";
import { USER_STATISTICS_FRAGMENT } from "../../fragments";

export const GET_VIEWER_STATISTICS = gql`
  ${USER_STATISTICS_FRAGMENT}

  query GetViewerStatistics {
    Viewer {
      statistics {
        ...UserStatisticsFragment
      }
    }
  }
`;
