import { gql } from "graphql-request";
import { MEDIA_FRAGMENT } from "../../fragments/media";

export const GET_ANIME_RECOMMENDATIONS = gql`
  ${MEDIA_FRAGMENT}

  query GetAnimeRecommendations($id: Int) {
    Media(id: $id, type: ANIME) {
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
