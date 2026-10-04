import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import type {
	GraphQLClient,
	MediaListStatus,
} from "../__generated__/anilist-sdk";
import {
	buildAiringScheduleByIdDocument,
	buildAiringSchedulePageDocument,
	buildMediaByIdDocument,
	buildMediaListCollectionByUserDocument,
	buildMediaTagCollectionDocument,
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
	AiringSchedulePageSelect,
	AiringScheduleSelect,
	MediaListCollectionSelect,
	MediaSelect,
	MediaTagSelect,
	SelectedAiringSchedule,
	SelectedAiringSchedulePage,
	SelectedMedia,
	SelectedMediaListCollection,
	SelectedMediaTag,
} from "../selections/types";
import { toMediaType } from "./mediaType";

/**
 * Service class responsible for interacting with the AniList API to retrieve media details.
 */
export class MediaService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Creates an instance of the MediaService.
	 * @param client - The AniList SDK client instance used to communicate with the AniList API.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Fetches media details by its unique ID.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique identifier for the media (e.g., an Anime or Manga).
	 */
	getMediaById(id: number): ReturnType<ANILISTSDK["GetMediaById"]>;
	getMediaById<TSelect extends MediaSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Media: SelectedMedia<TSelect> | null }>;
	getMediaById<TSelect extends MediaSelect>(
		id: number,
		options: RootSelectionOption<"media", TSelect>,
	): Promise<{ media: SelectedMedia<TSelect> | null }>;
	getMediaById<TSelect extends MediaSelect>(
		id: number,
		options?: SelectionOption<"media", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "media");
			const document = buildMediaByIdDocument(select);
			return this.graphQLClient
				.request<{ Media: SelectedMedia<TSelect> | null }, { id: number }>({
					document,
					variables: { id },
				})
				.then((raw) => (wrapped ? { media: raw.Media } : raw));
		}
		return this.client.GetMediaById({ id });
	}

	/**
	 * Retrieves a user's media list based on the media type (Anime or Manga).
	 * @param userId - The unique ID of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @param status - Optional media list status filter for selected queries.
	 * @returns A promise that resolves with the user's media list.
	 */
	getMediaList(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetMediaListByUser"]>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedType = toMediaType(mediaType);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(
				options,
				"mediaListCollection",
			);
			const document = buildMediaListCollectionByUserDocument(select, "id");
			return this.graphQLClient
				.request<
					{ MediaListCollection: SelectedMediaListCollection<TSelect> | null },
					{
						userId: number;
						mediaType: ReturnType<typeof toMediaType>;
						status?: MediaListStatus;
					}
				>({
					document,
					variables: {
						userId,
						mediaType: normalizedType,
						...(status !== undefined ? { status } : {}),
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetMediaListByUser({
			mediaType: normalizedType,
			userId,
		});
	}

	/**
	 * Retrieves a user's media list by their username, filtered by media type (Anime or Manga).
	 * @param userName - The username of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @param status - Optional media list status filter for selected queries.
	 * @returns A promise that resolves with the user's media list.
	 */
	getMediaListByUsername(
		userName: string,
		mediaType: MediaTypeNonEnum,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetMediaListByUserByUsername"]>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedType = toMediaType(mediaType);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(
				options,
				"mediaListCollection",
			);
			const document = buildMediaListCollectionByUserDocument(
				select,
				"username",
			);
			return this.graphQLClient
				.request<
					{ MediaListCollection: SelectedMediaListCollection<TSelect> | null },
					{
						userName: string;
						mediaType: ReturnType<typeof toMediaType>;
						status?: MediaListStatus;
					}
				>({
					document,
					variables: {
						userName,
						mediaType: normalizedType,
						...(status !== undefined ? { status } : {}),
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetMediaListByUserByUsername({
			mediaType: normalizedType,
			userName,
		});
	}

	/**
	 * Retrieves the full list of AniList genres.
	 * @returns A promise resolving to the genre names.
	 */
	getGenres(): ReturnType<ANILISTSDK["GetGenres"]> {
		return this.client.GetGenres();
	}

	/**
	 * Retrieves the AniList media tag collection.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param status - Optional tag status filter.
	 */
	getMediaTags(status?: number): ReturnType<ANILISTSDK["GetMediaTags"]>;
	getMediaTags<TSelect extends MediaTagSelect>(
		status: number | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaTagCollection: Array<SelectedMediaTag<TSelect> | null> | null;
	}>;
	getMediaTags<TSelect extends MediaTagSelect>(
		status: number | undefined,
		options: RootSelectionOption<"mediaTagCollection", TSelect>,
	): Promise<{
		mediaTagCollection: Array<SelectedMediaTag<TSelect> | null> | null;
	}>;
	getMediaTags<TSelect extends MediaTagSelect>(
		status?: number,
		options?: SelectionOption<"mediaTagCollection", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(
				options,
				"mediaTagCollection",
			);
			const document = buildMediaTagCollectionDocument(select);
			return this.graphQLClient
				.request<
					{
						MediaTagCollection: Array<SelectedMediaTag<TSelect> | null> | null;
					},
					{ status?: number }
				>({ document, variables: { status } })
				.then((raw) =>
					wrapped ? { mediaTagCollection: raw.MediaTagCollection } : raw,
				);
		}
		return this.client.GetMediaTags({ status });
	}

	/**
	 * Retrieves an airing schedule entry by its unique ID.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the airing schedule entry.
	 */
	getAiringSchedule(id: number): ReturnType<ANILISTSDK["GetAiringSchedule"]>;
	getAiringSchedule<TSelect extends AiringScheduleSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ AiringSchedule: SelectedAiringSchedule<TSelect> | null }>;
	getAiringSchedule<TSelect extends AiringScheduleSelect>(
		id: number,
		options: RootSelectionOption<"airingSchedule", TSelect>,
	): Promise<{ airingSchedule: SelectedAiringSchedule<TSelect> | null }>;
	getAiringSchedule<TSelect extends AiringScheduleSelect>(
		id: number,
		options?: SelectionOption<"airingSchedule", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "airingSchedule");
			const document = buildAiringScheduleByIdDocument(select);
			return this.graphQLClient
				.request<
					{ AiringSchedule: SelectedAiringSchedule<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) =>
					wrapped ? { airingSchedule: raw.AiringSchedule } : raw,
				);
		}
		return this.client.GetAiringSchedule({ id });
	}

	private selectedAiringSchedulePage<TSelect extends AiringSchedulePageSelect>(
		document: string,
		variables: Record<string, unknown>,
	): Promise<{ page: SelectedAiringSchedulePage<TSelect> | null }> {
		if (!this.graphQLClient) {
			throw new Error("graphQLClient is required for selected queries.");
		}
		return this.graphQLClient
			.request<
				{ Page: SelectedAiringSchedulePage<TSelect> | null },
				Record<string, unknown>
			>({ document, variables })
			.then((raw) => ({ page: raw.Page }));
	}

	/**
	 * Retrieves the airing schedule for a media entry.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param mediaId - The ID of the media whose schedule should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of entries per page. Defaults to 25.
	 */
	getAiringSchedulesByMedia(
		mediaId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetAiringSchedulesByMedia"]>;
	getAiringSchedulesByMedia<TSelect extends AiringSchedulePageSelect>(
		mediaId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedAiringSchedulePage<TSelect> | null }>;
	getAiringSchedulesByMedia<TSelect extends AiringSchedulePageSelect>(
		mediaId: number,
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetAiringSchedulesByMedia"]>
		| Promise<{ page: SelectedAiringSchedulePage<TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildAiringSchedulePageDocument(
				"SelectedAiringSchedulesByMedia",
				"($mediaId: Int, $page: Int, $perPage: Int)",
				["mediaId: $mediaId"],
				resolvePageSelection<TSelect>(options.select, "airingSchedules"),
			);
			return this.selectedAiringSchedulePage<TSelect>(document, {
				mediaId,
				page,
				perPage,
			});
		}
		return this.client.GetAiringSchedulesByMedia({
			mediaId,
			page,
			perPage,
		});
	}
}
