import { gql } from "@api-wrappers/api-core";

export const GET_ACTIVITY = gql`
  query GetActivity($id: Int!) {
    Activity(id: $id) {
      ... on TextActivity {
        id
        type
        userId
        createdAt
        text
      }
      ... on ListActivity {
        id
        type
        userId
        createdAt
        status
        progress
      }
      ... on MessageActivity {
        id
        type
        messengerId
        createdAt
        message
      }
    }
  }
`;
