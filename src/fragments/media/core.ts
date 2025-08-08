import { gql } from "graphql-request";
import { COVER_IMAGE_FRAGMENT } from "../common/coverImage";
import { DATE_FRAGMENT } from "../common/date";
import { TITLE_FRAGMENT } from "../common/title";
import {
	MEDIA_EXTERNAL_LINK_BASIC_FRAGMENT,
	MEDIA_EXTERNAL_LINK_FRAGMENT,
} from "./externalLinks";
import { MEDIA_RANK_FRAGMENT } from "./rankings";
import { MEDIA_STATS_FRAGMENT } from "./stats";
import { MEDIA_TAG_BASIC_FRAGMENT, MEDIA_TAG_FRAGMENT } from "./tags";
import { MEDIA_TRAILER_FRAGMENT } from "./trailer";

export const MEDIA_CORE_FRAGMENT = gql`
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
  ${DATE_FRAGMENT}
  fragment MediaCoreFragment on Media {
    id
    idMal
    title {
      ...TitleFragment
    }
    coverImage {
      ...CoverImageFragment
    }
    bannerImage
    description
    format
    status
    type
    episodes
    chapters
    volumes
    duration
    genres
    averageScore
    meanScore
    popularity
    favourites
    trending
    source
    countryOfOrigin
    isAdult
    isLicensed
    isLocked
    isFavourite
    isFavouriteBlocked
    hashtag
    synonyms
    startDate {
      ...DateFragment
    }
    endDate {
      ...DateFragment
    }
    season
    seasonYear
    siteUrl
    updatedAt
    autoCreateForumThread
    isRecommendationBlocked
    isReviewBlocked
    modNotes
  }
`;

export const MEDIA_DETAILED_FRAGMENT = gql`
  ${MEDIA_CORE_FRAGMENT}
  ${MEDIA_TAG_FRAGMENT}
  ${MEDIA_RANK_FRAGMENT}
  ${MEDIA_EXTERNAL_LINK_FRAGMENT}
  ${MEDIA_STATS_FRAGMENT}
  ${MEDIA_TRAILER_FRAGMENT}
  fragment MediaDetailedFragment on Media {
    ...MediaCoreFragment
    tags {
      ...MediaTagFragment
    }
    rankings {
      ...MediaRankFragment
    }
    externalLinks {
      ...MediaExternalLinkFragment
    }
    stats {
      ...MediaStatsFragment
    }
    trailer {
      ...MediaTrailerFragment
    }
    reviews(page: 1, perPage: 1) {
      pageInfo {
        total
      }
    }
    recommendations(page: 1, perPage: 1) {
      pageInfo {
        total
      }
    }
  }
`;

export const MEDIA_BASIC_FRAGMENT = gql`
  ${MEDIA_CORE_FRAGMENT}
  ${MEDIA_TAG_BASIC_FRAGMENT}
  ${MEDIA_EXTERNAL_LINK_BASIC_FRAGMENT}
  fragment MediaBasicFragment on Media {
    ...MediaCoreFragment
    tags {
      ...MediaTagBasicFragment
    }
    externalLinks {
      ...MediaExternalLinkBasicFragment
    }
  }
`;
