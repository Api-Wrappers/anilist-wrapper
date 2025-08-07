import { gql } from "graphql-request";
import { USER_AVATAR_FRAGMENT } from "../common/image.js";

export const USER_OPTIONS_FRAGMENT = gql`
  fragment UserOptionsFragment on UserOptions {
    titleLanguage
    displayAdultContent
    airingNotifications
    profileColor
    notificationOptions {
      type
      enabled
    }
  }
`;

export const USER_MEDIA_LIST_OPTIONS_FRAGMENT = gql`
  fragment UserMediaListOptionsFragment on MediaListOptions {
    scoreFormat
    rowOrder
    animeList {
      sectionOrder
      splitCompletedSectionByFormat
      customLists
      advancedScoring
      advancedScoringEnabled
    }
    mangaList {
      sectionOrder
      splitCompletedSectionByFormat
      customLists
      advancedScoring
      advancedScoringEnabled
    }
  }
`;

export const USER_FAVOURITES_FRAGMENT = gql`
  fragment UserFavouritesFragment on Favourites {
    anime {
      nodes {
        id
        title {
          romaji
        }
      }
    }
    manga {
      nodes {
        id
        title {
          romaji
        }
      }
    }
    characters {
      nodes {
        id
        name {
          full
        }
      }
    }
    staff {
      nodes {
        id
        name {
          full
        }
      }
    }
    studios {
      nodes {
        id
        name
      }
    }
  }
`;

export const USER_STATISTICS_FRAGMENT = gql`
  fragment UserStatisticsFragment on UserStatisticTypes {
    anime {
      count
      meanScore
      standardDeviation
      minutesWatched
      episodesWatched
      scores {
        score
        count
        meanScore
        minutesWatched
      }
      lengths {
        length
        count
        meanScore
        minutesWatched
      }
      formats {
        format
        count
        meanScore
        minutesWatched
      }
      statuses {
        status
        count
        meanScore
        minutesWatched
      }
      releaseYears {
        releaseYear
        count
        meanScore
        minutesWatched
      }
      startYears {
        startYear
        count
        meanScore
        minutesWatched
      }
      genres {
        genre
        count
        meanScore
        minutesWatched
      }
      tags {
        tag {
          name
        }
        count
        meanScore
        minutesWatched
      }
    }
    manga {
      count
      meanScore
      standardDeviation
      chaptersRead
      volumesRead
      scores {
        score
        count
        meanScore
        chaptersRead
      }
      lengths {
        length
        count
        meanScore
        chaptersRead
      }
      formats {
        format
        count
        meanScore
        chaptersRead
      }
      statuses {
        status
        count
        meanScore
        chaptersRead
      }
      releaseYears {
        releaseYear
        count
        meanScore
        chaptersRead
      }
      startYears {
        startYear
        count
        meanScore
        chaptersRead
      }
      genres {
        genre
        count
        meanScore
        chaptersRead
      }
      tags {
        tag {
          name
        }
        count
        meanScore
        chaptersRead
      }
    }
  }
`;

export const USER_BASIC_FRAGMENT = gql`
  ${USER_AVATAR_FRAGMENT}
  ${USER_OPTIONS_FRAGMENT}
  ${USER_MEDIA_LIST_OPTIONS_FRAGMENT}
  ${USER_FAVOURITES_FRAGMENT}
  ${USER_STATISTICS_FRAGMENT}
  fragment UserBasicFragment on User {
    id
    name
    avatar {
      ...UserAvatarFragment
    }
    about
    bannerImage
    donatorTier
    donatorBadge
    createdAt
    updatedAt
    isFollowing
    isFollower
    isBlocked
    unreadNotificationCount
    moderatorRoles
    options {
      ...UserOptionsFragment
    }
    mediaListOptions {
      ...UserMediaListOptionsFragment
    }
    favourites {
      ...UserFavouritesFragment
    }
    statistics {
      ...UserStatisticsFragment
    }
    siteUrl
  }
`;
