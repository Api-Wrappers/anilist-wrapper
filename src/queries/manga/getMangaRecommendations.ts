import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_MANGA_RECOMMENDATIONS = gql`
  ${MEDIA_FRAGMENT}
  query GetMangaRecommendations($id: Int) {
    Media(id: $id, type: MANGA) {
      recommendations {
        edges {
          node {
            media {
              ...MediaFragment
            }
          }
        }
      }
    }
  }
`;
