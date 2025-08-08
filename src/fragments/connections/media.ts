import { gql } from "graphql-request";
import { COVER_IMAGE_FRAGMENT } from "../common/coverImage.js";
import { DATE_FRAGMENT } from "../common/date.js";
import { TITLE_FRAGMENT } from "../common/title.js";

export const MEDIA_RELATION_NODE_FRAGMENT = gql`
  ${TITLE_FRAGMENT}
  ${COVER_IMAGE_FRAGMENT}
  ${DATE_FRAGMENT}
  fragment MediaRelationNodeFragment on Media {
    id
    title {
      ...TitleFragment
    }
    type
    format
    status
    coverImage {
      ...CoverImageFragment
    }
    startDate {
      ...DateFragment
    }
    endDate {
      ...DateFragment
    }
    season
    seasonYear
    episodes
    chapters
    volumes
    duration
    averageScore
    popularity
    favourites
    genres
    isAdult
    countryOfOrigin
    siteUrl
  }
`;

export const MEDIA_RELATION_EDGE_FRAGMENT = gql`
  ${MEDIA_RELATION_NODE_FRAGMENT}
  fragment MediaRelationEdgeFragment on MediaEdge {
    id
    relationType
    isMainStudio
    characterRole
    characterName
    roleNotes
    dubGroup
    staffRole
    favouriteOrder
    node {
      ...MediaRelationNodeFragment
    }
  }
`;

export const MEDIA_RELATION_CONNECTION_FRAGMENT = gql`
  ${MEDIA_RELATION_EDGE_FRAGMENT}
  fragment MediaRelationConnectionFragment on MediaConnection {
    edges {
      ...MediaRelationEdgeFragment
    }
  }
`;
