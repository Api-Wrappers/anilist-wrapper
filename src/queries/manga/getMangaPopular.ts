import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_MANGA_POPULAR = gql`
  ${MEDIA_FRAGMENT}

  query GetMangaPopular($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: POPULARITY_DESC, type: MANGA) {
        ...MediaFragment
      }
    }
  }
`;
