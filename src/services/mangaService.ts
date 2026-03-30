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
	SearchMangaQuery,
	ToggleFavoriteMangaMutation,
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
	 * Searches for manga by title or keyword.
	 * @param search - The search query string.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the search results.
	 */
	getMangaBySearch(
		search: string,
		page = 1,
		perPage = 10,
	): Promise<SearchMangaQuery> {
		return this.client.SearchManga({ query: search, page, perPage });
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
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the list of manga in that genre.
	 */
	getMangaListByGenre(
		genre: string,
		page = 1,
		perPage = 10,
	): Promise<GetMangaListByGenreQuery> {
		return this.client.GetMangaListByGenre({ genre, page, perPage });
	}

	/**
	 * Retrieves manga recommendations based on a given manga.
	 * @param mediaId - The ID of the manga to get recommendations for.
	 * @returns A promise resolving to recommended manga.
	 */
	getMangaRecommendations(
		mediaId: number,
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
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of entries per page. Defaults to 20.
	 * @returns A promise resolving to trending manga.
	 */
	getMangaTrending(page = 1, perPage = 20): Promise<GetMangaTrendingQuery> {
		return this.client.GetMangaTrending({ page, perPage });
	}

	/**
	 * Retrieves popular manga entries.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of entries per page. Defaults to 20.
	 * @returns A promise resolving to popular manga.
	 */
	getMangaPopular(page = 1, perPage = 20): Promise<GetMangaPopularQuery> {
		return this.client.GetMangaPopular({ page, perPage });
	}

	/**
	 * Toggles the favorite status of a manga. Requires authentication.
	 * @param mangaId - The ID of the manga to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavourite(mangaId: number): Promise<ToggleFavoriteMangaMutation> {
		return this.client.ToggleFavoriteManga({ mangaId });
	}
}
