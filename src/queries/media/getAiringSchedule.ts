import { gql } from "@api-wrappers/api-core";
import { AIRING_SCHEDULE_FRAGMENT } from "../../fragments";

export const GET_AIRING_SCHEDULE = gql`
  ${AIRING_SCHEDULE_FRAGMENT}

  query GetAiringSchedule($id: Int!) {
    AiringSchedule(id: $id) {
      ...AiringScheduleFragment
    }
  }
`;
