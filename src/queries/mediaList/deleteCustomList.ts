import { gql } from "@api-wrappers/api-core";

export const DELETE_CUSTOM_LIST = gql`
  mutation DeleteCustomList($customList: String, $type: MediaType) {
    DeleteCustomList(customList: $customList, type: $type) {
      deleted
    }
  }
`;
