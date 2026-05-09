import { gql } from "@api-wrappers/api-core";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_MANGA_RELATIONS = gql`
  ${MEDIA_FRAGMENT}
  query GetMangaRelations($id: Int) {
    Media(id: $id, type: MANGA) {
      relations {
        edges {
          relationType
          node {
            ...MediaFragment
          }
        }
      }
    }
  }
`;
