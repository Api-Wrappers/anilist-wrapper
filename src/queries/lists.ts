import { BaseQuery, MediaListStatus, RequestOptions } from '../@types';
import { generateQueryHeaders } from '../utils';
import { NoIdException } from '../utils/exceptions';

// TODO: add return types

export class Lists extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  anime = async (idOrUsername: string, status: MediaListStatus) => {
    if (!idOrUsername) throw new NoIdException('anime');

    const queryVals = generateQueryHeaders('MediaListCollection', idOrUsername, 'ANIME', status);

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

    return await this.api.get(query, queryVals[0]);
  };

  manga = async (idOrUsername: string, status: MediaListStatus) => {
    if (!idOrUsername) throw new NoIdException('manga');

    const queryVals = generateQueryHeaders('MediaListCollection', idOrUsername, 'MANGA', status);

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

    return await this.api.get(query, queryVals[0]);
  };
}
