export const SearchQuery = (
  query: string,
  page: number,
  perPage: number,
  type: "ANIME" | "MANGA" = "ANIME"
) =>
  `query ($page: Int = ${page}, $id: Int, $type: MediaType = ${type},  $search: String = "${query}", $isAdult: Boolean = false, $size: Int = ${perPage}) {  Page(page: $page, perPage: $size) {    pageInfo {      total      perPage      currentPage      lastPage      hasNextPage    }    media(id: $id, type: $type, search: $search, isAdult: $isAdult) {      id      idMal      status(version: 2)      title {        userPreferred        romaji        english        native      }      bannerImage      popularity      coverImage {        extraLarge        large        medium        color      }      episodes      format      season      description      seasonYear      chapters      volumes      averageScore      genres      nextAiringEpisode {        airingAt        timeUntilAiring        episode      }      startDate {        year        month        day      }      endDate {        year        month        day      }      tags {        id        name        category        description      }      duration      meanScore    }  }}`;

export const UserProfileQuery = `id name
    about
    avatar {
      large
      medium
    }
    bannerImage
    isFollowing
    isFollower
    isBlocked
    bans
    options {
      titleLanguage
      displayAdultContent
      airingNotifications
      profileColor
      activityMergeTime
      staffNameLanguage
      notificationOptions {
        type
        enabled
      }
    }
    mediaListOptions {
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
    favourites {
      anime {
        nodes {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
      }
      manga {
        nodes {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
        }
      }
      characters {
        nodes {
          id
          name {
            english: full
          }
        }
      }
      staff {
        nodes {
          id
          name {
            english: full
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
    unreadNotificationCount
    siteUrl
    donatorTier
    donatorBadge
    moderatorRoles
    updatedAt
`;

export const TextActivityQuery = `id user { id name } type text createdAt replies { id text likeCount }
isLocked isSubscribed isLiked likes { id name }`;

export const MessageActivityQuery = `id recipient { id name } type message createdAt replies { id text likeCount }
user:messenger { id name } isPrivate isLocked isSubscribed isLiked likes { id name }`;

export const ListActivityQuery = ` id user { id name } status type progress
media { id title { romaji english native userPreferred } type }
createdAt isLocked isSubscribed isLiked replies { id text likeCount } likes { id name }`;
