import { gql } from "@api-wrappers/api-core";
import { CHARACTER_FRAGMENT } from "../../fragments/character";
import { MEDIA_DETAILED_FRAGMENT } from "../../fragments/media/core";
import { AIRING_SCHEDULE_FRAGMENT } from "../../fragments/media/streaming";
import { STAFF_FRAGMENT } from "../../fragments/staff";
import { STUDIO_FRAGMENT } from "../../fragments/studio";

export const GET_ANIME_BY_ID = gql`
  ${MEDIA_DETAILED_FRAGMENT}
  ${AIRING_SCHEDULE_FRAGMENT}
  ${CHARACTER_FRAGMENT}
  ${STAFF_FRAGMENT}
  ${STUDIO_FRAGMENT}

  query GetAnimeById($id: Int!) {
    Media(id: $id, type: ANIME) {
      ...MediaDetailedFragment
      nextAiringEpisode {
        ...AiringScheduleFragment
      }
      characters {
        edges {
          role
          node {
            ...CharacterFragment
          }
        }
      }
      staff {
        edges {
          role
          node {
            ...StaffFragment
          }
        }
      }
      studios {
        edges {
          node {
            ...StudioFragment
          }
        }
      }
    }
  }
`;
