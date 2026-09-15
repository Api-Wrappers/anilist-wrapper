import { gql } from "@api-wrappers/api-core";

export const TOGGLE_ACTIVITY_SUBSCRIPTION = gql`
  mutation ToggleActivitySubscription($activityId: Int, $subscribe: Boolean) {
    ToggleActivitySubscription(activityId: $activityId, subscribe: $subscribe) {
      ... on TextActivity {
        id
        isSubscribed
      }
      ... on ListActivity {
        id
        isSubscribed
      }
      ... on MessageActivity {
        id
        isSubscribed
      }
    }
  }
`;
