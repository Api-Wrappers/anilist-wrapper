import { gql } from "graphql-request";
import { TITLE_FRAGMENT } from "../common/title.js";

export const MEDIA_RELATION_NODE_FRAGMENT = gql`
  ${TITLE_FRAGMENT}
  fragment MediaRelationNodeFragment on Media {
    id
    title {
      ...TitleFragment
    }
  }
`;

export const MEDIA_RELATION_EDGE_FRAGMENT = gql`
  ${MEDIA_RELATION_NODE_FRAGMENT}
  fragment MediaRelationEdgeFragment on MediaEdge {
    relationType
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
