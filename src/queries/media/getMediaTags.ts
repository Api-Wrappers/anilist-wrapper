import { gql } from "@api-wrappers/api-core";
import { MEDIA_TAG_FRAGMENT } from "../../fragments";

export const GET_MEDIA_TAGS = gql`
  ${MEDIA_TAG_FRAGMENT}

  query GetMediaTags($status: Int) {
    MediaTagCollection(status: $status) {
      ...MediaTagFragment
    }
  }
`;
