import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_ANIME_BY_TITLE = gql`
  ${MEDIA_FRAGMENT}

  query GetAnimeByTitle($title: String) {
    Page(page: 1, perPage: 1) {
      media(search: $title, type: ANIME) {
        ...MediaFragment
      }
    }
  }
`;
