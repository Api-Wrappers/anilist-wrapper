import { gql } from "@api-wrappers/api-core";
import { STUDIO_NODE_FRAGMENT } from "../../fragments/connections/studio";

export const SEARCH_STUDIO = gql`
  ${STUDIO_NODE_FRAGMENT}

  query SearchStudio($query: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      studios(search: $query) {
        ...StudioNodeFragment
      }
    }
  }
`;
