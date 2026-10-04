import { gql } from "@api-wrappers/api-core";

export const TOGGLE_ACTIVITY_PIN = gql`
  mutation ToggleActivityPin($id: Int, $pinned: Boolean) {
    ToggleActivityPin(id: $id, pinned: $pinned) {
      ... on TextActivity {
        id
        isPinned
      }
      ... on ListActivity {
        id
        isPinned
      }
      ... on MessageActivity {
        id
        isPinned
      }
    }
  }
`;
