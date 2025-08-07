import { gql } from "graphql-request";
import { CHARACTER_CONNECTION_FRAGMENT } from "./connections/character";
import { MEDIA_RELATION_CONNECTION_FRAGMENT } from "./connections/media.js";
import { STAFF_CONNECTION_FRAGMENT } from "./connections/staff";
import { MEDIA_DETAILED_FRAGMENT } from "./media/core.js";

export const MANGA_FRAGMENT = gql`
  ${MEDIA_DETAILED_FRAGMENT}
  ${MEDIA_RELATION_CONNECTION_FRAGMENT}
  ${CHARACTER_CONNECTION_FRAGMENT}
  ${STAFF_CONNECTION_FRAGMENT}
  fragment MangaFragment on Media {
    ...MediaDetailedFragment
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
