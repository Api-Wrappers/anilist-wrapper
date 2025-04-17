import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_MANGA_BY_ID = gql`
  ${MEDIA_FRAGMENT}
  query GetMangaById($id: Int) {
    Media(id: $id, type: MANGA) {
      ...MediaFragment
    }
  }
`;
