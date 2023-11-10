import { Request } from './fetcher';
import { AniListMedia } from './types/Media';
import { NoIdException } from './utils/exceptions';

class Media {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  anime = async (id: number) => {
    if (!id) throw new NoIdException('anime');

    const query = `query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        idMal
        title {
          english
          native
          romaji
        }
        modNotes
        siteUrl
        autoCreateForumThread
        synonyms
        countryOfOrigin
        isLicensed
        isAdult
        hashtag
        rankings {
          rank
          type
          context
          year
          season
        }
        mediaListEntry {
          progress
          status
          score(format: POINT_10)
          id
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
          userId
          mediaId
          updatedAt
          createdAt
        }
        staff {
          edges {
            node {
              id
              name {
                first
                middle
                last
                full
                native
                alternative
                userPreferred
              }
              languageV2
              image {
                large
                medium
              }
              description
              primaryOccupations
              gender
              dateOfBirth {
                year
                month
                day
              }
              dateOfDeath {
                year
                month
                day
              }
            }
          }
        }
        stats {
          scoreDistribution {
            score
            amount
          }
          statusDistribution {
            status
            amount
          }
        }
        reviews {
          nodes {
            id
            score
            summary
            body
          }
        }
        trends {
          edges {
            node {
              mediaId
              date
              trending
              averageScore
              popularity
              media {
                id
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                idMal
                title {
                  english
                  native
                  romaji
                }
              }
            }
          }
        }
        externalLinks {
          url
          site
          type
          language
        }
        coverImage {
          extraLarge
          large
          color
        }
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
        bannerImage
        season
        isLocked
        seasonYear
        description
        type
        format
        status(version: 2)
        episodes
        duration
        chapters
        volumes
        trending
        trailer {
          id
          site
          thumbnail
        }
        genres
        source
        averageScore
        popularity
        meanScore
        nextAiringEpisode {
          airingAt
          timeUntilAiring
          episode
        }
        characters(sort: ROLE) {
          edges {
            role
            node {
              id
              name {
                first
                middle
                last
                full
                native
                userPreferred
              }
              image {
                large
                medium
              }
            }
            voiceActors(sort: LANGUAGE) {
              id
              languageV2
              name {
                first
                middle
                last
                full
                native
                userPreferred
              }
              image {
                large
                medium
              }
            }
          }
        }
        isFavourite
        recommendations {
          edges {
            node {
              id
              mediaRecommendation {
                type
                id
                idMal
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
                status
                episodes
                coverImage {
                  extraLarge
                  large
                  medium
                  color
                }
                bannerImage
                format
                chapters
                meanScore
                nextAiringEpisode {
                  episode
                  timeUntilAiring
                  airingAt
                }
              }
            }
          }
        }
        relations {
          edges {
            id
            relationType
            node {
              id
              idMal
              status
              coverImage {
                extraLarge
                large
                medium
                color
              }
              bannerImage
              title {
                romaji
                english
                native
                userPreferred
              }
              episodes
              chapters
              format
              nextAiringEpisode {
                airingAt
                timeUntilAiring
                episode
              }
              meanScore
            }
          }
        }
        studios(isMain: true) {
          edges {
            isMain
            node {
              id
              name
            }
          }
        }
        isRecommendationBlocked
      }
    }
    `;

    const request = new Request(this.access_token);

    return (await request.makeGQLRequest(query, { id })) as AniListMedia;
  };

  favouriteAnime = async (id: number) => {
    if (!id) throw new NoIdException('anime');

    const query = `mutation ($mediaID: Int) {
      ToggleFavourite(animeId: $mediaID) {
        anime (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { mediaID: id });
  };

  manga = async (id: number) => {
    if (!id) throw new NoIdException('Manga');

    const query = `query ($id: Int) {
      Media(id: $id, type: MANGA) {
        id
        idMal
        title {
          romaji
          english
          native
          userPreferred
        }
        description
        format
        status
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
        chapters
        volumes
        countryOfOrigin
        isLicensed
        updatedAt
        coverImage {
          large: extraLarge
          medium: large
          small: medium
          color
        }
        bannerImage
        genres
        synonyms
        averageScore
        meanScore
        siteUrl
        autoCreateForumThread
        modNotes
        popularity
        trending
        tags {
          id
          name
          isMediaSpoiler
        }
        relations {
          nodes {
            id
            title {
              english
              native
              romaji
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
        isFavourite
        isAdult
        isLocked
        trends {
          nodes {
            date
            trending
            popularity
            inProgress
          }
        }
        externalLinks {
          url
        }
        rankings {
          rank
          type
          context
          year
          season
        }
        mediaListEntry {
          progress
          status
          score(format: POINT_10)
          id
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
          userId
          mediaId
          updatedAt
          createdAt
        }
        reviews {
          nodes {
            id
            score
            summary
            body
          }
        }
        stats {
          scoreDistribution {
            score
            amount
          }
          statusDistribution {
            status
            amount
          }
        }
        favourites
        isRecommendationBlocked
        recommendations {
          nodes {
            mediaRecommendation {
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
        }
      }
    }
    `;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { id });
  };

  favouriteManga = async (id: number) => {
    if (!id) throw new NoIdException('anime');

    const query = `mutation ($mediaID: Int) {
      ToggleFavourite(mangaId: $mediaID) {
        manga (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { mediaID: id });
  };
}

export { Media };
