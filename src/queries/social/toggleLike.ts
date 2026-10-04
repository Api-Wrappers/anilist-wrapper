import { gql } from "@api-wrappers/api-core";

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($id: Int, $type: LikeableType) {
    ToggleLikeV2(id: $id, type: $type) {
      ... on ActivityReply {
        id
      }
      ... on ListActivity {
        id
      }
      ... on MessageActivity {
        id
      }
      ... on TextActivity {
        id
      }
      ... on Thread {
        id
      }
      ... on ThreadComment {
        id
      }
    }
  }
`;
