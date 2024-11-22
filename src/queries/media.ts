import {
  AnimeMediaReturn,
  BaseQuery,
  FavoriteAnimeResponse,
  FavoriteMangaMutationResponse,
  MangaMediaReturn,
  PagedAnimeMediaReturn,
  PagedMangaMediaReturn,
  RequestOptions,
} from '../@types';
import { NoIdException } from '../utils/exceptions';

export class Media extends BaseQuery {
  constructor(access_token?: string, options?: RequestOptions) {
    super(access_token, options);
  }

  anime = async (id: number): Promise<AnimeMediaReturn> => {
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
        averageScore
        type
        description
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
              type
              averageScore
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
    }`;

    return await this.api.get<AnimeMediaReturn>(query, { id });
  };

  animes = async (
    ids: number[],
    config?: { perPage?: number; page?: number }
  ) => {
    if (ids.length == 0) throw new NoIdException('animes');

    const query = `query ($ids: [Int], $perPage: Int, $page: Int) {
      Page(page: $page, perPage: $perPage) {
        media(id_in: $ids, type: ANIME) {
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
          averageScore
          type
          description
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
                type
                averageScore
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
    }`;

    return await this.api.get<PagedAnimeMediaReturn>(query, {
      ids,
      perPage: config?.perPage ?? 10,
      page: config?.page ?? 1,
    });
  };

  favouriteAnime = async (id: number): Promise<FavoriteAnimeResponse> => {
    if (!id) throw new NoIdException('anime');

    const query = `mutation ($mediaID: Int) {
      ToggleFavourite(animeId: $mediaID) {
        anime (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    return await this.api.get<FavoriteAnimeResponse>(query, { mediaID: id });
  };

  manga = async (id: number): Promise<MangaMediaReturn> => {
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
              chapters
              type
              averageScore
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
      }
    }    
    `;

    return await this.api.get<MangaMediaReturn>(query, { id });
  };

  mangas = async (
    ids: number[],
    config?: { perPage?: number; page?: number }
  ) => {
    if (ids.length == 0) throw new NoIdException('animes');

    const query = `query ($ids: [Int], $perPage: Int, $page: Int) {
      Page(page: $page, perPage: $perPage) {
        media(id_in: $ids, type: MANGA) {
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
                chapters
                type
                averageScore
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
        }
      }
    }`;

    return await this.api.get<PagedMangaMediaReturn>(query, {
      ids,
      perPage: config?.perPage ?? 10,
      page: config?.page ?? 1,
    });
  };

  favouriteManga = async (
    id: number
  ): Promise<FavoriteMangaMutationResponse> => {
    if (!id) throw new NoIdException('anime');

    const query = `mutation ($mediaID: Int) {
      ToggleFavourite(mangaId: $mediaID) {
        manga (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    return await this.api.get<FavoriteMangaMutationResponse>(query, {
      mediaID: id,
    });
  };
}
