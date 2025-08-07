import { gql } from "graphql-request";
import { STAFF_BASIC_FRAGMENT } from "../entities/staff";

export const STAFF_EDGE_FRAGMENT = gql`
  ${STAFF_BASIC_FRAGMENT}
  fragment StaffEdgeFragment on StaffEdge {
    id
    role
    node {
      ...StaffBasicFragment
    }
  }
`;

export const STAFF_CONNECTION_FRAGMENT = gql`
  ${STAFF_EDGE_FRAGMENT}
  fragment StaffConnectionFragment on StaffConnection {
    edges {
      ...StaffEdgeFragment
    }
    nodes {
      ...StaffBasicFragment
    }
  }
`;
