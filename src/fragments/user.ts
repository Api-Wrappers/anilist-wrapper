import { gql } from "graphql-request";

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    name
    avatar {
      large
      medium
    }
    about
    bannerImage
    options {
      titleLanguage
    }
    statistics {
      anime {
        count
        meanScore
        minutesWatched
      }
      manga {
        count
        meanScore
        chaptersRead
      }
    }
    siteUrl
  }
`;
