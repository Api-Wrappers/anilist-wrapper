import { gql } from "@api-wrappers/api-core";
import { USER_FRAGMENT } from "../../fragments";

export const GET_VIEWER = gql`
  ${USER_FRAGMENT}

  query GetViewer {
    Viewer {
      ...UserFragment
    }
  }
`;
