import { gql } from "@api-wrappers/api-core";

export const TOGGLE_THREAD_SUBSCRIPTION = gql`
  mutation ToggleThreadSubscription($threadId: Int, $subscribe: Boolean) {
    ToggleThreadSubscription(threadId: $threadId, subscribe: $subscribe) {
      id
      isSubscribed
    }
  }
`;
