import { gql } from "@api-wrappers/api-core";
import { STUDIO_NODE_FRAGMENT } from "../../fragments";

export const SEARCH_STUDIOS = gql`
  ${STUDIO_NODE_FRAGMENT}

  query SearchStudios(
    $search: String
    $sort: [StudioSort]
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      studios(search: $search, sort: $sort) {
        ...StudioNodeFragment
      }
    }
  }
`;
