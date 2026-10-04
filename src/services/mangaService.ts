import type { ANILISTSDK } from "../@types";
import type { MediaFormat, MediaStatus } from "../__generated__/anilist-schema";
import type {
	GetMangaBrowseQuery,
	GetMangaByTitleQuery,
	GetMangaCharactersQuery,
	GetMangaListByGenreQuery,
	GetMangaPopularQuery,
	GetMangaRecommendationsQuery,
	GetMangaRelationsQuery,
	GetMangaStaffQuery,
	GetMangaTrendingQuery,
	GraphQLClient,
	ToggleFavoriteMangaMutation,
} from "../__generated__/anilist-sdk";
import {
	buildMangaByIdDocument,
	buildMangaSearchDocument,
	buildMediaPageDocument,
	buildToggleFavouriteDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import {
	hasSelection,
	resolvePageSelection,
	resolveSelection,
} from "../selections/options";
import type {
	FavouritesSelect,
	MediaPageSelect,
	MediaSelect,
	SelectedFavourites,
	SelectedMedia,
	SelectedMediaPage,
} from "../selections/types";
import { normalizePerPage } from "./validation";

/**
 * Service class for interacting with AniList manga-related queries.
 */
export class MangaService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new MangaService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	private selectedMedia<TSelect extends MediaSelect>(
		select: TSelect,
		variables: { id: number },
	): Promise<{ Media: SelectedMedia<TSelect> | null }> {
		if (!this.graphQLClient) {
			throw new Error("graphQLClient is required for selected queries.");
		}
		const document = buildMangaByIdDocument(select);
		return this.graphQLClient.request<
			{ Media: SelectedMedia<TSelect> | null },
			{ id: number }
		>({ document, variables });
	}

	private selectedMediaPage<TSelect extends MediaPageSelect>(
		document: string,
		variables: Record<string, unknown>,
	): Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (!this.graphQLClient) {
			throw new Error("graphQLClient is required for selected queries.");
		}
		return this.graphQLClient
			.request<
				{ Page: SelectedMediaPage<TSelect> | null },
				Record<string, unknown>
			>({ document, variables })
			.then((raw) => ({ page: raw.Page }));
	}

	/**
	 * Retrieves manga details by ID.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the manga.
	 */
	getMangaById(id: number): ReturnType<ANILISTSDK["GetMangaById"]>;
	getMangaById<TSelect extends MediaSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMangaById<TSelect extends MediaSelect>(
		id: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMangaById<TSelect extends MediaSelect>(
		id: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const { select, wrapped } = resolveSelection(options, "media");
			return this.selectedMedia(select, { id }).then((raw) =>
				wrapped ? { media: raw.Media } : raw,
			);
		}
		return this.client.GetMangaById({ id });
	}

	/**
	 * Retrieves manga by title.
	 * @param title - The title of the manga.
	 * @returns A promise resolving to the matching manga entry.
	 */
	getMangaByTitle(
		title: string,
		page?: number,
		perPage?: number,
	): Promise<GetMangaByTitleQuery>;
	getMangaByTitle<TSelect extends MediaPageSelect>(
		title: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getMangaByTitle<TSelect extends MediaPageSelect>(
		title: string,
		page = 1,
		perPage = 1,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetMangaByTitleQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		const limit = normalizePerPage(perPage, 1);
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedMangaByTitle",
				"($title: String, $page: Int, $perPage: Int)",
				["search: $title", "type: MANGA"],
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			return this.selectedMediaPage<TSelect>(document, {
				title,
				page,
				perPage: limit,
			});
		}
		return this.client.GetMangaByTitle({ title, page, perPage: limit });
	}

	/**
	 * Searches for manga by title or keyword.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param search - The search query string.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 */
	getMangaBySearch(
		search: string,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["SearchManga"]>;
	getMangaBySearch<TSelect extends MediaPageSelect>(
		search: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getMangaBySearch<TSelect extends MediaPageSelect>(
		search: string,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["SearchManga"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildMangaSearchDocument(
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			const p: Promise<{ page: SelectedMediaPage<TSelect> | null }> =
				this.graphQLClient
					.request<
						{ Page: SelectedMediaPage<TSelect> | null },
						{ query: string; page: number; perPage: number }
					>({ document, variables: { query: search, page, perPage } })
					.then((raw) => ({ page: raw.Page }));
			return p;
		}
		return this.client.SearchManga({ query: search, page, perPage });
	}

	/**
	 * Retrieves characters associated with a manga.
	 * @param mediaId - The ID of the manga.
	 * @returns A promise resolving to the list of characters.
	 */
	getMangaCharacters(mediaId: number): Promise<GetMangaCharactersQuery>;
	getMangaCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMangaCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMangaCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const { select, wrapped } = resolveSelection(options, "media");
			return this.selectedMedia(select, {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
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
		page?: number,
		perPage?: number,
	): Promise<GetMangaListByGenreQuery>;
	getMangaListByGenre<TSelect extends MediaPageSelect>(
		genre: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getMangaListByGenre<TSelect extends MediaPageSelect>(
		genre: string,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetMangaListByGenreQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedMangaListByGenre",
				"($genre: String, $page: Int, $perPage: Int)",
				["genre: $genre", "type: MANGA"],
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			return this.selectedMediaPage<TSelect>(document, {
				genre,
				page,
				perPage,
			});
		}
		return this.client.GetMangaListByGenre({ genre, page, perPage });
	}

	/**
	 * Retrieves manga recommendations based on a given manga.
	 * @param mediaId - The ID of the manga to get recommendations for.
	 * @returns A promise resolving to recommended manga.
	 */
	getMangaRecommendations(
		mediaId: number,
	): Promise<GetMangaRecommendationsQuery>;
	getMangaRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMangaRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMangaRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const { select, wrapped } = resolveSelection(options, "media");
			return this.selectedMedia(select, {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetMangaRecommendations({ id: mediaId });
	}

	/**
	 * Retrieves related manga/media for a given manga.
	 * @param mediaId - The ID of the manga.
	 * @returns A promise resolving to related manga/media.
	 */
	getMangaRelations(mediaId: number): Promise<GetMangaRelationsQuery>;
	getMangaRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMangaRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMangaRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const { select, wrapped } = resolveSelection(options, "media");
			return this.selectedMedia(select, {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetMangaRelations({ id: mediaId });
	}

	/**
	 * Retrieves staff associated with a given manga.
	 * @param mediaId - The ID of the manga.
	 * @returns A promise resolving to the staff list.
	 */
	getMangaStaff(mediaId: number): Promise<GetMangaStaffQuery>;
	getMangaStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMangaStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMangaStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const { select, wrapped } = resolveSelection(options, "media");
			return this.selectedMedia(select, {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetMangaStaff({ id: mediaId });
	}

	/**
	 * Browses manga with optional filters for genre, format, status, and start
	 * date. AniList has no seasonal manga, so browse is the manga counterpart to
	 * `anime.browseAnime`.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param filters - Optional filters to narrow the results.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the filtered, paginated manga list.
	 */
	browseManga(
		filters?: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			startDate?: number;
		},
		page?: number,
		perPage?: number,
	): Promise<GetMangaBrowseQuery>;
	browseManga<TSelect extends MediaPageSelect>(
		filters: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			startDate?: number;
		},
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	browseManga<TSelect extends MediaPageSelect>(
		filters: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			startDate?: number;
		} = {},
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetMangaBrowseQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		const { genre, format, status, startDate } = filters;
		const limit = normalizePerPage(perPage, 10);
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedMangaBrowse",
				"($genre: String, $format: MediaFormat, $status: MediaStatus, $startDate: FuzzyDateInt, $page: Int, $perPage: Int)",
				[
					"genre: $genre",
					"format: $format",
					"status: $status",
					"startDate: $startDate",
					"type: MANGA",
					"sort: POPULARITY_DESC",
					"isAdult: false",
				],
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			return this.selectedMediaPage<TSelect>(document, {
				genre,
				format,
				status,
				startDate,
				page,
				perPage: limit,
			});
		}
		return this.client.GetMangaBrowse({
			genre,
			format,
			status,
			startDate,
			page,
			perPage: limit,
		});
	}

	/**
	 * Retrieves trending manga entries.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of entries per page. Defaults to 20.
	 * @returns A promise resolving to trending manga.
	 */
	getMangaTrending(
		page?: number,
		perPage?: number,
	): Promise<GetMangaTrendingQuery>;
	getMangaTrending<TSelect extends MediaPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getMangaTrending<TSelect extends MediaPageSelect>(
		page = 1,
		perPage = 20,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetMangaTrendingQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedMangaTrending",
				"($page: Int, $perPage: Int)",
				["type: MANGA", "sort: TRENDING_DESC"],
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			return this.selectedMediaPage<TSelect>(document, { page, perPage });
		}
		return this.client.GetMangaTrending({ page, perPage });
	}

	/**
	 * Retrieves popular manga entries.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of entries per page. Defaults to 20.
	 * @returns A promise resolving to popular manga.
	 */
	getMangaPopular(
		page?: number,
		perPage?: number,
	): Promise<GetMangaPopularQuery>;
	getMangaPopular<TSelect extends MediaPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getMangaPopular<TSelect extends MediaPageSelect>(
		page = 1,
		perPage = 20,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetMangaPopularQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedMangaPopular",
				"($page: Int, $perPage: Int)",
				["type: MANGA", "sort: POPULARITY_DESC"],
				resolvePageSelection<TSelect>(options.select, "media"),
			);
			return this.selectedMediaPage<TSelect>(document, { page, perPage });
		}
		return this.client.GetMangaPopular({ page, perPage });
	}

	/**
	 * Toggles the favorite status of a manga. Requires authentication.
	 * @param mangaId - The ID of the manga to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavourite(mangaId: number): Promise<ToggleFavoriteMangaMutation>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (options === undefined) return this.toggleFavorite(mangaId);
		return this.toggleFavorite(mangaId, options as { select: TSelect });
	}

	/**
	 * Toggles the favorite status of a manga. Requires authentication.
	 * Alias for {@link toggleFavourite}.
	 * @param mangaId - The ID of the manga to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavorite(mangaId: number): Promise<ToggleFavoriteMangaMutation>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		mangaId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "favorites");
			const document = buildToggleFavouriteDocument(select, "mangaId");
			return this.graphQLClient
				.request<
					{ ToggleFavourite: SelectedFavourites<TSelect> | null },
					{ id: number }
				>({ document, variables: { id: mangaId } })
				.then((raw) => (wrapped ? { favorites: raw.ToggleFavourite } : raw));
		}
		return this.client.ToggleFavoriteManga({ mangaId });
	}
}
