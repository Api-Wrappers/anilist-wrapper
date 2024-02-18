import { Request } from "./fetcher";
import { MediaListStatus } from "./types";
import { utils } from "./utils";
import { NoIdException } from "./utils/exceptions";

class Lists {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  anime = async (idOrUsername: string, status: MediaListStatus) => {
    if (!idOrUsername) throw new NoIdException("anime");

    const queryVals = utils.generateQueryHeaders(
      "MediaListCollection",
      idOrUsername,
      "ANIME",
      status
    );

    const query =
      queryVals[1] +
      `lists {
          name
          isCustomList
          isSplitCompletedList
          status
          entries {
            id
            media {
              averageScore
              meanScore
              id
              idMal
              title {
                romaji
                english
                native
                userPreferred
              }
              status
              type 
              seasonYear
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              episodes
              nextAiringEpisode {
                id
                episode
                airingAt
                timeUntilAiring
                mediaId
              }
              description
              format
              startDate {
                year
                month
                day
              }
              endDate {
                year
                month
                day
              }
              duration
              genres
              synonyms
              tags {
                name
                isMediaSpoiler
              }
              isFavourite
              isAdult
              siteUrl
            }
            status
            score
            progress
            repeat
            priority
            private
            notes
            hiddenFromStatusLists
            advancedScores
            startedAt {
              year
              month
              day
            }
            completedAt {
              year
              month
              day
            }
            updatedAt
            createdAt
          }
      }
    }
  }`;

    const reqest = new Request();

    return await reqest.makeGQLRequest(query, queryVals[0]);
  };

  manga = async (idOrUsername: string, status: MediaListStatus) => {
    if (!idOrUsername) throw new NoIdException("manga");

    const queryVals = utils.generateQueryHeaders(
      "MediaListCollection",
      idOrUsername,
      "MANGA",
      status
    );

    const query =
      queryVals[1] +
      ` lists {
        name
        isCustomList
        isSplitCompletedList
        status
        entries {
          id
          media {
            averageScore
            meanScore
            id
            idMal
            title {
              romaji
              english
              native
              userPreferred
            }
            volumes
            chapters
            description
            format
            startDate {
              year
              month
              day
            }
            endDate {
              year
              month
              day
            }
            genres
            synonyms
            tags {
              name
              isMediaSpoiler
            }
            type
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
            isFavourite
            isAdult
            siteUrl
          }
          status
          score
          progress
          progressVolumes
          repeat
          priority
          private
          notes
          hiddenFromStatusLists
          advancedScores
          startedAt {
            year
            month
            day
          }
          completedAt {
            year
            month
            day
          }
          updatedAt
          createdAt
        }
      }
    }
  }`;

    const reqest = new Request();

    return await reqest.makeGQLRequest(query, queryVals[0]);
  };
}

export { Lists };
