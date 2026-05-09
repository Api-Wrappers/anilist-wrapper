import { gql } from "@api-wrappers/api-core";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_ANIME_RELATIONS = gql`
  query GetAnimeRelations($id: Int) {
    Media(id: $id, type: ANIME) {
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

  ${MEDIA_FRAGMENT}
`;
