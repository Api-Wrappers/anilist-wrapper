import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const SEARCH_MANGA = gql`
  ${MEDIA_FRAGMENT}

  query SearchManga($query: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $query, type: MANGA) {
        ...MediaFragment
      }
    }
  }
`;
