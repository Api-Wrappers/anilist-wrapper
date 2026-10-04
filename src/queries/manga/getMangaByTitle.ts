import { gql } from "@api-wrappers/api-core";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_MANGA_BY_TITLE = gql`
  ${MEDIA_FRAGMENT}
  query GetMangaByTitle(
    $title: String!
    $page: Int = 1
    $perPage: Int = 1
  ) {
    Page(page: $page, perPage: $perPage) {
      media(search: $title, type: MANGA) {
        ...MediaFragment
      }
    }
  }
`;
