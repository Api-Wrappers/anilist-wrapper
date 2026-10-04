import { gql } from "@api-wrappers/api-core";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const SEARCH_ANIME = gql`
  ${MEDIA_FRAGMENT}

  query SearchAnime($query: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
      }
      media(search: $query, type: ANIME) {
        ...MediaFragment
      }
    }
  }
`;
