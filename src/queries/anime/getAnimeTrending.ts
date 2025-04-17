import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_ANIME_TRENDING = gql`
  ${MEDIA_FRAGMENT}

  query GetAnimeTrending($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: TRENDING_DESC, type: ANIME) {
        ...MediaFragment
      }
    }
  }
`;
