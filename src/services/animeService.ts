import type { ANILISTSDK } from "../@types";
import type {
  GetAnimeByIdQuery,
  GetAnimeByTitleQuery,
  GetAnimeCharactersQuery,
  GetAnimeListByGenreQuery,
  GetAnimePopularQuery,
  GetAnimeRecommendationsQuery,
  GetAnimeRelationsQuery,
  GetAnimeStaffQuery,
  GetAnimeTrendingQuery,
  SearchAnimeQuery,
} from "../__generated__/anilist-sdk";

/**
 * Service class for interacting with AniList anime-related queries.
 */
export class AnimeService {
  private client: ANILISTSDK;

  /**
   * Constructs a new AnimeService instance.
   * @param client - An instance of the AniList SDK client.
   */
  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  /**
   * Retrieves anime information by ID.
   * @param id - The unique ID of the anime.
   * @returns A promise resolving to the anime data.
   */
  getAnimeById(id: number): Promise<GetAnimeByIdQuery> {
    return this.client.GetAnimeById({ id });
  }

  /**
   * Searches for anime by title or keyword.
   * @param search - The search query string.
   * @param page - Optional page number. Defaults to 1.
   * @param perPage - Optional number of results per page. Defaults to 10.
   * @returns A promise resolving to the search results.
   */
  getAnimeBySearch(
    search: string,
    page = 1,
    perPage = 10
  ): Promise<SearchAnimeQuery> {
    return this.client.SearchAnime({ query: search, page, perPage });
  }

  /**
   * Retrieves a list of currently trending anime.
   * @param page - Optional page number. Defaults to 1.
   * @param perPage - Optional number of results per page. Defaults to 10.
   * @returns A promise resolving to trending anime.
   */
  getTrendingAnime(page = 1, perPage = 10): Promise<GetAnimeTrendingQuery> {
    return this.client.GetAnimeTrending({ page, perPage });
  }

  /**
   * Retrieves a list of popular anime.
   * @param page - Optional page number. Defaults to 1.
   * @param perPage - Optional number of results per page. Defaults to 10.
   * @returns A promise resolving to popular anime.
   */
  getPopularAnime(page = 1, perPage = 10): Promise<GetAnimePopularQuery> {
    return this.client.GetAnimePopular({ page, perPage });
  }

  /**
   * Retrieves anime recommendations based on a specific anime.
   * @param mediaId - The ID of the anime to get recommendations for.
   * @returns A promise resolving to recommended anime.
   */
  getRecommendations(mediaId: number): Promise<GetAnimeRecommendationsQuery> {
    return this.client.GetAnimeRecommendations({ id: mediaId });
  }

  /**
   * Retrieves characters for a given anime.
   * @param mediaId - The ID of the anime.
   * @returns A promise resolving to the characters list.
   */
  getCharacters(mediaId: number): Promise<GetAnimeCharactersQuery> {
    return this.client.GetAnimeCharacters({ id: mediaId });
  }

  /**
   * Retrieves staff associated with a given anime.
   * @param mediaId - The ID of the anime.
   * @returns A promise resolving to the staff list.
   */
  getStaff(mediaId: number): Promise<GetAnimeStaffQuery> {
    return this.client.GetAnimeStaff({ id: mediaId });
  }

  /**
   * Retrieves related media for a given anime (e.g., sequels, prequels).
   * @param mediaId - The ID of the anime.
   * @returns A promise resolving to related anime/media.
   */
  getRelations(mediaId: number): Promise<GetAnimeRelationsQuery> {
    return this.client.GetAnimeRelations({ id: mediaId });
  }

  /**
   * Retrieves anime by its title.
   * @param title - The title of the anime.
   * @returns A promise resolving to the matching anime.
   */
  getAnimeByTitle(title: string): Promise<GetAnimeByTitleQuery> {
    return this.client.GetAnimeByTitle({ title });
  }

  /**
   * Retrieves a list of anime filtered by genre.
   * @param genre - The genre to filter by.
   * @param page - Optional page number. Defaults to 1.
   * @param perPage - Optional number of results per page. Defaults to 10.
   * @returns A promise resolving to the filtered anime list.
   */
  getAnimeListByGenre(
    genre: string,
    page = 1,
    perPage = 10
  ): Promise<GetAnimeListByGenreQuery> {
    return this.client.GetAnimeListByGenre({ genre, page, perPage });
  }
}
