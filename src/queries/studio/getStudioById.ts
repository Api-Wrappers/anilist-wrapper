import { gql } from "@api-wrappers/api-core";
import { STUDIO_FRAGMENT } from "../../fragments/studio";

export const GET_STUDIO_BY_ID = gql`
  ${STUDIO_FRAGMENT}

  query GetStudioById($id: Int!) {
    Studio(id: $id) {
      ...StudioFragment
    }
  }
`;
