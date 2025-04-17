import type { ANILISTSDK } from "../@types";
import type {
  GetMangaByIdQuery,
  GetMangaByTitleQuery,
  GetMangaCharactersQuery,
  GetMangaListByGenreQuery,
  GetMangaPopularQuery,
  GetMangaRecommendationsQuery,
  GetMangaRelationsQuery,
  GetMangaStaffQuery,
  GetMangaTrendingQuery,
} from "../__generated__/anilist-sdk";

/**
 * Service class for interacting with AniList manga-related queries.
 */
export class MangaService {
  private client: ANILISTSDK;

  /**
   * Constructs a new MangaService instance.
   * @param client - An instance of the AniList SDK client.
   */
  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  /**
   * Retrieves manga details by ID.
   * @param id - The unique ID of the manga.
   * @returns A promise resolving to the manga data.
   */
  getMangaById(id: number): Promise<GetMangaByIdQuery> {
    return this.client.GetMangaById({ id });
  }

  /**
   * Retrieves manga by title.
   * @param title - The title of the manga.
   * @returns A promise resolving to the matching manga entry.
   */
  getMangaByTitle(title: string): Promise<GetMangaByTitleQuery> {
    return this.client.GetMangaByTitle({ title });
  }

  /**
   * Retrieves characters associated with a manga.
   * @param mediaId - The ID of the manga.
   * @returns A promise resolving to the list of characters.
   */
  getMangaCharacters(mediaId: number): Promise<GetMangaCharactersQuery> {
    return this.client.GetMangaCharacters({ id: mediaId });
  }

  /**
   * Retrieves manga entries filtered by genre.
   * @param genre - The genre to filter by.
   * @returns A promise resolving to the list of manga in that genre.
   */
  getMangaListByGenre(genre: string): Promise<GetMangaListByGenreQuery> {
    return this.client.GetMangaListByGenre({ genre });
  }

  /**
   * Retrieves manga recommendations based on a given manga.
   * @param mediaId - The ID of the manga to get recommendations for.
   * @returns A promise resolving to recommended manga.
   */
  getMangaRecommendations(
    mediaId: number
  ): Promise<GetMangaRecommendationsQuery> {
    return this.client.GetMangaRecommendations({ id: mediaId });
  }

  /**
   * Retrieves related manga/media for a given manga.
   * @param mediaId - The ID of the manga.
   * @returns A promise resolving to related manga/media.
   */
  getMangaRelations(mediaId: number): Promise<GetMangaRelationsQuery> {
    return this.client.GetMangaRelations({ id: mediaId });
  }

  /**
   * Retrieves staff associated with a given manga.
   * @param mediaId - The ID of the manga.
   * @returns A promise resolving to the staff list.
   */
  getMangaStaff(mediaId: number): Promise<GetMangaStaffQuery> {
    return this.client.GetMangaStaff({ id: mediaId });
  }

  /**
   * Retrieves trending manga entries.
   * @param page - The page number to retrieve.
   * @param perPage - The number of entries per page.
   * @returns A promise resolving to trending manga.
   */
  getMangaTrending(
    page: number,
    perPage: number
  ): Promise<GetMangaTrendingQuery> {
    return this.client.getMangaTrending({ page, perPage });
  }

  /**
   * Retrieves popular manga entries.
   * @param page - The page number to retrieve.
   * @param perPage - The number of entries per page.
   * @returns A promise resolving to popular manga.
   */
  getMangaPopular(
    page: number,
    perPage: number
  ): Promise<GetMangaPopularQuery> {
    return this.client.getMangaPopular({ page, perPage });
  }
}
