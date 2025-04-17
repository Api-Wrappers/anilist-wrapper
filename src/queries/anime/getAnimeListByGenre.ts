import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_ANIME_LIST_BY_GENRE = gql`
  ${MEDIA_FRAGMENT}

  query GetAnimeListByGenre(
    $genre: String!
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      media(genre: $genre, type: ANIME) {
        ...MediaFragment
      }
    }
  }
`;
