import { gql } from "graphql-request";
import { STUDIO_NODE_FRAGMENT } from "./connections/studio.js";

export const STUDIO_FRAGMENT = gql`
  ${STUDIO_NODE_FRAGMENT}
  fragment StudioFragment on Studio {
    ...StudioNodeFragment
    media {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`;
