import type { ANILISTSDK } from "../@types";
import type {
	MediaFormat,
	MediaSeason,
	MediaStatus,
} from "../__generated__/anilist-schema";
import type {
	GetAnimeBrowseQuery,
	GetSeasonalAnimeQuery,
	GraphQLClient,
	ToggleFavoriteAnimeMutation,
} from "../__generated__/anilist-sdk";
import {
	buildAnimeByIdDocument,
	buildAnimeSearchDocument,
	buildMediaPageDocument,
	buildToggleFavouriteDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { getSelection, hasSelection } from "../selections/options";
import type {
	FavouritesSelect,
	MediaPageSelect,
	MediaSelect,
	SelectedFavourites,
	SelectedMedia,
	SelectedMediaPage,
} from "../selections/types";

/**
 * Service class for interacting with AniList anime-related queries.
 */
export class AnimeService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new AnimeService instance.
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
		const document = buildAnimeByIdDocument(select);
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
	 * Retrieves anime information by ID.
	 * When `options.select` is provided, only the selected fields are returned via a dynamic query.
	 * @param id - The unique ID of the anime.
	 */
	getAnimeById(id: number): ReturnType<ANILISTSDK["GetAnimeById"]>;
	getAnimeById<TSelect extends MediaSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getAnimeById<TSelect extends MediaSelect>(
		id: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getAnimeById<TSelect extends MediaSelect>(
		id: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
			return this.selectedMedia(getSelection(options, "media"), { id }).then(
				(raw) => (wrapped ? { media: raw.Media } : raw),
			);
		}
		return this.client.GetAnimeById({ id });
	}

	/**
	 * Searches for anime by title or keyword.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param search - The search query string.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 */
	getAnimeBySearch(
		search: string,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["SearchAnime"]>;
	getAnimeBySearch<TSelect extends MediaPageSelect>(
		search: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getAnimeBySearch<TSelect extends MediaPageSelect>(
		search: string,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["SearchAnime"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildAnimeSearchDocument(options.select.page);
			const p: Promise<{ page: SelectedMediaPage<TSelect> | null }> =
				this.graphQLClient
					.request<
						{ Page: SelectedMediaPage<TSelect> | null },
						{ query: string; page: number; perPage: number }
					>({ document, variables: { query: search, page, perPage } })
					.then((raw) => ({ page: raw.Page }));
			return p;
		}
		return this.client.SearchAnime({ query: search, page, perPage });
	}

	/**
	 * Retrieves a list of currently trending anime.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to trending anime.
	 */
	getTrendingAnime(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetAnimeTrending"]>;
	getTrendingAnime<TSelect extends MediaPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getTrendingAnime<TSelect extends MediaPageSelect>(
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetAnimeTrending"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedAnimeTrending",
				"($page: Int, $perPage: Int)",
				["type: ANIME", "sort: TRENDING_DESC"],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, { page, perPage });
		}
		return this.client.GetAnimeTrending({ page, perPage });
	}

	/**
	 * Retrieves a list of popular anime.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to popular anime.
	 */
	getPopularAnime(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetAnimePopular"]>;
	getPopularAnime<TSelect extends MediaPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getPopularAnime<TSelect extends MediaPageSelect>(
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetAnimePopular"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedAnimePopular",
				"($page: Int, $perPage: Int)",
				["type: ANIME", "sort: POPULARITY_DESC"],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, { page, perPage });
		}
		return this.client.GetAnimePopular({ page, perPage });
	}

	/**
	 * Retrieves anime recommendations based on a specific anime.
	 * @param mediaId - The ID of the anime to get recommendations for.
	 * @returns A promise resolving to recommended anime.
	 */
	getRecommendations(
		mediaId: number,
	): ReturnType<ANILISTSDK["GetAnimeRecommendations"]>;
	getRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getRecommendations<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
			return this.selectedMedia(getSelection(options, "media"), {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetAnimeRecommendations({ id: mediaId });
	}

	/**
	 * Retrieves characters for a given anime.
	 * @param mediaId - The ID of the anime.
	 * @returns A promise resolving to the characters list.
	 */
	getCharacters(mediaId: number): ReturnType<ANILISTSDK["GetAnimeCharacters"]>;
	getCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getCharacters<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
			return this.selectedMedia(getSelection(options, "media"), {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetAnimeCharacters({ id: mediaId });
	}

	/**
	 * Retrieves staff associated with a given anime.
	 * @param mediaId - The ID of the anime.
	 * @returns A promise resolving to the staff list.
	 */
	getStaff(mediaId: number): ReturnType<ANILISTSDK["GetAnimeStaff"]>;
	getStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getStaff<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
			return this.selectedMedia(getSelection(options, "media"), {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetAnimeStaff({ id: mediaId });
	}

	/**
	 * Retrieves related media for a given anime (e.g., sequels, prequels).
	 * @param mediaId - The ID of the anime.
	 * @returns A promise resolving to related anime/media.
	 */
	getRelations(mediaId: number): ReturnType<ANILISTSDK["GetAnimeRelations"]>;
	getRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getRelations<TSelect extends MediaSelect>(
		mediaId: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
			return this.selectedMedia(getSelection(options, "media"), {
				id: mediaId,
			}).then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetAnimeRelations({ id: mediaId });
	}

	/**
	 * Retrieves anime by its title.
	 * @param title - The title of the anime.
	 * @returns A promise resolving to the matching anime.
	 */
	getAnimeByTitle(title: string): ReturnType<ANILISTSDK["GetAnimeByTitle"]>;
	getAnimeByTitle<TSelect extends MediaPageSelect>(
		title: string,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getAnimeByTitle<TSelect extends MediaPageSelect>(
		title: string,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetAnimeByTitle"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedAnimeByTitle",
				"($title: String, $page: Int, $perPage: Int)",
				["search: $title", "type: ANIME"],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, {
				title,
				page: 1,
				perPage: 10,
			});
		}
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
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetAnimeListByGenre"]>;
	getAnimeListByGenre<TSelect extends MediaPageSelect>(
		genre: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getAnimeListByGenre<TSelect extends MediaPageSelect>(
		genre: string,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetAnimeListByGenre"]>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedAnimeListByGenre",
				"($genre: String, $page: Int, $perPage: Int)",
				["genre: $genre", "type: ANIME"],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, {
				genre,
				page,
				perPage,
			});
		}
		return this.client.GetAnimeListByGenre({ genre, page, perPage });
	}

	/**
	 * Browses anime with optional filters for genre, format, status, and season year.
	 * @param filters - Optional filters to narrow the results.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the filtered, paginated anime list with pageInfo.
	 */
	browseAnime(
		filters?: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			seasonYear?: number;
		},
		page?: number,
		perPage?: number,
	): Promise<GetAnimeBrowseQuery>;
	browseAnime<TSelect extends MediaPageSelect>(
		filters: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			seasonYear?: number;
		},
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	browseAnime<TSelect extends MediaPageSelect>(
		filters: {
			genre?: string;
			format?: MediaFormat;
			status?: MediaStatus;
			seasonYear?: number;
		} = {},
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetAnimeBrowseQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		const { genre, format, status, seasonYear } = filters;
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedAnimeBrowse",
				"($genre: String, $format: MediaFormat, $status: MediaStatus, $seasonYear: Int, $page: Int, $perPage: Int)",
				[
					"genre: $genre",
					"format: $format",
					"status: $status",
					"seasonYear: $seasonYear",
					"type: ANIME",
				],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, {
				genre,
				format,
				status,
				seasonYear,
				page,
				perPage,
			});
		}
		return this.client.GetAnimeBrowse({
			genre,
			format,
			status,
			seasonYear,
			page,
			perPage,
		});
	}

	/**
	 * Retrieves seasonal anime for a specific season and year.
	 * @param season - The AniList media season to filter by.
	 * @param seasonYear - The season year to filter by.
	 * @param page - Optional page number. Defaults to AniList's server default.
	 * @param perPage - Optional number of results per page. Defaults to AniList's server default.
	 * @returns A promise resolving to the seasonal anime list with pageInfo.
	 */
	getSeasonalAnime(
		season: MediaSeason,
		seasonYear: number,
		page?: number,
		perPage?: number,
	): Promise<GetSeasonalAnimeQuery>;
	getSeasonalAnime<TSelect extends MediaPageSelect>(
		season: MediaSeason,
		seasonYear: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedMediaPage<TSelect> | null }>;
	getSeasonalAnime<TSelect extends MediaPageSelect>(
		season: MediaSeason,
		seasonYear: number,
		page?: number,
		perPage?: number,
		options?: { select: { page: TSelect } },
	):
		| Promise<GetSeasonalAnimeQuery>
		| Promise<{ page: SelectedMediaPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildMediaPageDocument(
				"SelectedSeasonalAnime",
				"($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int)",
				["season: $season", "seasonYear: $seasonYear", "type: ANIME"],
				options.select.page,
			);
			return this.selectedMediaPage<TSelect>(document, {
				season,
				seasonYear,
				page: page ?? 1,
				perPage: perPage ?? 10,
			});
		}
		return this.client.GetSeasonalAnime({
			season,
			seasonYear,
			page,
			perPage,
		});
	}

	/**
	 * Toggles the favorite status of an anime. Requires authentication.
	 * @param animeId - The ID of the anime to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavourite(animeId: number): Promise<ToggleFavoriteAnimeMutation>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		animeId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		animeId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavourite<TSelect extends FavouritesSelect>(
		animeId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "favorites");
			const wrapped =
				(options.select as Record<string, unknown>).favorites !== undefined;
			const document = buildToggleFavouriteDocument(select, "animeId");
			return this.graphQLClient
				.request<
					{ ToggleFavourite: SelectedFavourites<TSelect> | null },
					{ id: number }
				>({ document, variables: { id: animeId } })
				.then((raw) => (wrapped ? { favorites: raw.ToggleFavourite } : raw));
		}
		return this.toggleFavorite(animeId);
	}

	/**
	 * Toggles the favorite status of an anime. Requires authentication.
	 * Alias for {@link toggleFavourite}.
	 * @param animeId - The ID of the anime to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavorite(animeId: number): Promise<ToggleFavoriteAnimeMutation>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		animeId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		animeId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavorite<TSelect extends FavouritesSelect>(
		animeId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "favorites");
			const wrapped =
				(options.select as Record<string, unknown>).favorites !== undefined;
			const document = buildToggleFavouriteDocument(select, "animeId");
			return this.graphQLClient
				.request<
					{ ToggleFavourite: SelectedFavourites<TSelect> | null },
					{ id: number }
				>({ document, variables: { id: animeId } })
				.then((raw) => (wrapped ? { favorites: raw.ToggleFavourite } : raw));
		}
		return this.client.ToggleFavoriteAnime({ animeId });
	}
}
