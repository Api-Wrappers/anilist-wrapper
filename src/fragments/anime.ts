import { gql } from "graphql-request";
import { CHARACTER_CONNECTION_FRAGMENT } from "./connections/character";
import { MEDIA_RELATION_CONNECTION_FRAGMENT } from "./connections/media.js";
import { STAFF_CONNECTION_FRAGMENT } from "./connections/staff";
import { STUDIO_CONNECTION_FRAGMENT } from "./connections/studio.js";
import { MEDIA_DETAILED_FRAGMENT } from "./media/core.js";
import {
	AIRING_SCHEDULE_FRAGMENT,
	MEDIA_STREAMING_EPISODE_FRAGMENT,
} from "./media/streaming.js";

export const ANIME_FRAGMENT = gql`
  ${MEDIA_DETAILED_FRAGMENT}
  ${STUDIO_CONNECTION_FRAGMENT}
  ${MEDIA_RELATION_CONNECTION_FRAGMENT}
  ${CHARACTER_CONNECTION_FRAGMENT}
  ${STAFF_CONNECTION_FRAGMENT}
  ${MEDIA_STREAMING_EPISODE_FRAGMENT}
  ${AIRING_SCHEDULE_FRAGMENT}
  fragment AnimeFragment on Media {
    ...MediaDetailedFragment
    nextAiringEpisode {
      ...AiringScheduleFragment
    }
    streamingEpisodes {
      ...MediaStreamingEpisodeFragment
    }
    studios {
      ...StudioConnectionFragment
    }
    relations {
      ...MediaRelationConnectionFragment
    }
    characters {
      ...CharacterConnectionFragment
    }
    staff {
      ...StaffConnectionFragment
    }
  }
`;
