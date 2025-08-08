import { gql } from "graphql-request";

export const STUDIO_NODE_FRAGMENT = gql`
  fragment StudioNodeFragment on Studio {
    id
    name
    isAnimationStudio
    favourites
    isFavourite
    siteUrl
  }
`;

export const STUDIO_EDGE_FRAGMENT = gql`
  ${STUDIO_NODE_FRAGMENT}
  fragment StudioEdgeFragment on StudioEdge {
    isMain
    favouriteOrder
    node {
      ...StudioNodeFragment
    }
  }
`;

export const STUDIO_CONNECTION_FRAGMENT = gql`
  ${STUDIO_EDGE_FRAGMENT}
  fragment StudioConnectionFragment on StudioConnection {
    edges {
      ...StudioEdgeFragment
    }
  }
`;
