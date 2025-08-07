import { gql } from "graphql-request";
import { CHARACTER_BASIC_FRAGMENT } from "../entities/character";

export const CHARACTER_EDGE_FRAGMENT = gql`
  ${CHARACTER_BASIC_FRAGMENT}
  fragment CharacterEdgeFragment on CharacterEdge {
    id
    role
    name
    voiceActors {
      id
      name {
        full
        native
      }
      image {
        large
        medium
      }
      languageV2
    }
    node {
      ...CharacterBasicFragment
    }
  }
`;

export const CHARACTER_CONNECTION_FRAGMENT = gql`
  ${CHARACTER_EDGE_FRAGMENT}
  fragment CharacterConnectionFragment on CharacterConnection {
    edges {
      ...CharacterEdgeFragment
    }
    nodes {
      ...CharacterBasicFragment
    }
  }
`;
