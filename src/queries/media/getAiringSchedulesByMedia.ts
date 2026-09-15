import { gql } from "@api-wrappers/api-core";
import { AIRING_SCHEDULE_FRAGMENT } from "../../fragments";

export const GET_AIRING_SCHEDULES_BY_MEDIA = gql`
  ${AIRING_SCHEDULE_FRAGMENT}

  query GetAiringSchedulesByMedia(
    $mediaId: Int
    $page: Int = 1
    $perPage: Int = 25
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      airingSchedules(mediaId: $mediaId) {
        ...AiringScheduleFragment
      }
    }
  }
`;
