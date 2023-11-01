import { Request } from "./fetcher";
import { NoIdException } from "./utils/exceptions";

class Media {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  anime = async (id: number) => {
    if (!id) throw new NoIdException("anime");

    const query = `query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
    format status episodes description startDate { year month day } endDate { year month day }
    season seasonYear duration countryOfOrigin isLicensed source hashtag trailer { id site }
    updatedAt coverImage { large:extraLarge medium:large small:medium color }
    bannerImage genres synonyms averageScore meanScore favourites
    popularity trending tags { id name isMediaSpoiler } relations { nodes { id title { english native romaji userPreferred } type } } 
    characters { nodes { id name { english: full } } } staff { nodes { id name { english: full } } } studios { nodes { id name isAnimationStudio } } 
    isFavourite isAdult isLocked nextAiringEpisode { timeUntilAiring airingAt episode } airingSchedule { nodes { airingAt timeUntilAiring episode } }
    trends { nodes { date trending popularity inProgress } } externalLinks { url }
    streamingEpisodes { title thumbnail url site } rankings { rank type context year season } mediaListEntry { progress status score(format: POINT_10) id startedAt { year month day } completedAt { year month day } userId mediaId updatedAt createdAt }
    reviews { nodes { id score summary body } } siteUrl autoCreateForumThread modNotes 
    stats { scoreDistribution { score amount } statusDistribution { status amount } }
    isRecommendationBlocked recommendations { nodes { mediaRecommendation { id title { romaji english native userPreferred } type } } } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { id });
  };

  favouriteAnime = async (id: number) => {
    if (!id) throw new NoIdException("anime");

    const query = `mutation ($mediaID: Int) {
      ToggleFavourite(animeId: $mediaID) {
        anime (page: 1, perPage: 25) {
        nodes { id }
    } } }`;

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(query, { mediaID: id });
  };

  manga = async (id: number) => {
    if (!id) throw new NoIdException("Manga");

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
    if (!id) throw new NoIdException("anime");

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
