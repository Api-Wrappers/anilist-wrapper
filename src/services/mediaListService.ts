import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import type {
	DeleteMediaListEntryMutation,
	FuzzyDateInput,
	GraphQLClient,
	MediaListStatus,
	SaveMediaListEntryMutation,
	SaveMediaListEntryMutationVariables,
	UpdateMediaListEntriesMutationVariables,
} from "../__generated__/anilist-sdk";
import {
	buildDeleteCustomListDocument,
	buildDeleteMediaListEntryDocument,
	buildMediaListByIdDocument,
	buildMediaListCollectionByUserDocument,
	buildSaveMediaListEntryDocument,
	buildUpdateMediaListEntriesDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { hasSelection, resolveSelection } from "../selections/options";
import type {
	DeletedSelect,
	MediaListCollectionSelect,
	MediaListSelect,
	SelectedDeleted,
	SelectedMediaList,
	SelectedMediaListCollection,
} from "../selections/types";
import { toMediaType } from "./mediaType";

type SaveMediaListEntryFields = {
	status?: MediaListStatus | null;
	score?: number | null;
	scoreRaw?: number | null;
	progress?: number | null;
	progressVolumes?: number | null;
	repeat?: number | null;
	private?: boolean | null;
	notes?: string | null;
	startedAt?: FuzzyDateInput | null;
	completedAt?: FuzzyDateInput | null;
	advancedScores?: Array<number | null> | null;
	customLists?: Array<string | null> | null;
	hiddenFromStatusLists?: boolean | null;
	priority?: number | null;
};

export type SaveMediaListEntryInput = SaveMediaListEntryFields &
	(
		| { mediaId: number; id?: number | null }
		| { id: number; mediaId?: number | null }
	);

export type UpdateMediaListEntriesInput = Omit<
	SaveMediaListEntryFields,
	"customLists"
> & {
	ids: number[];
};

/**
 * Service class for retrieving and managing media lists from AniList.
 */
export class MediaListService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new MediaListService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Retrieves a user's media list by ID.
	 * @param id - The ID of the list to retrieve.
	 * @returns A promise resolving to the media list.
	 */
	getMediaList(id: number): ReturnType<ANILISTSDK["GetMediaList"]>;
	getMediaList<TSelect extends MediaListSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ MediaList: SelectedMediaList<TSelect> | null }>;
	getMediaList<TSelect extends MediaListSelect>(
		id: number,
		options: RootSelectionOption<"mediaList", TSelect>,
	): Promise<{ mediaList: SelectedMediaList<TSelect> | null }>;
	getMediaList<TSelect extends MediaListSelect>(
		id: number,
		options?: SelectionOption<"mediaList", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "mediaList");
			const document = buildMediaListByIdDocument(select);
			return this.graphQLClient
				.request<
					{ MediaList: SelectedMediaList<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) => (wrapped ? { mediaList: raw.MediaList } : raw));
		}
		return this.client.GetMediaList({ id });
	}

	/**
	 * Retrieves a media list using the user ID.
	 * @param userId - The ID of the user whose media list to retrieve.
	 * @param mediaType - The media type ("ANIME" or "MANGA").
	 * @param status - Optional media list status filter for selected queries.
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUser(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetMediaListByUser"]>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
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
			userId,
			mediaType: normalizedType,
		});
	}

	/**
	 * Retrieves a media list using the username.
	 * @param userName - The username of the user whose media list to retrieve.
	 * @param mediaType - The media type ("ANIME" or "MANGA").
	 * @param status - Optional media list status filter for selected queries.
	 * @returns A promise resolving to the user's media list.
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
			userName,
			mediaType: normalizedType,
		});
	}

	/**
	 * Saves (creates or updates) a media list entry. Requires authentication.
	 * @param variables - The entry fields to save (mediaId required; all others optional).
	 * @returns A promise resolving to the saved media list entry.
	 */
	saveEntry(
		variables: SaveMediaListEntryInput,
	): Promise<SaveMediaListEntryMutation>;
	saveEntry<TSelect extends MediaListSelect>(
		variables: SaveMediaListEntryInput,
		options: { select: TSelect },
	): Promise<{ SaveMediaListEntry: SelectedMediaList<TSelect> | null }>;
	saveEntry<TSelect extends MediaListSelect>(
		variables: SaveMediaListEntryInput,
		options: RootSelectionOption<"mediaList", TSelect>,
	): Promise<{ mediaList: SelectedMediaList<TSelect> | null }>;
	saveEntry<TSelect extends MediaListSelect>(
		variables: SaveMediaListEntryInput,
		options?: SelectionOption<"mediaList", TSelect>,
	): unknown {
		if (variables.mediaId == null && variables.id == null) {
			throw new TypeError("saveEntry requires either mediaId or id.");
		}
		const mutationVariables: SaveMediaListEntryMutationVariables = {
			advancedScores: variables.advancedScores,
			completedAt: variables.completedAt,
			customLists: variables.customLists,
			hiddenFromStatusLists: variables.hiddenFromStatusLists,
			id: variables.id,
			mediaId: variables.mediaId,
			notes: variables.notes,
			private: variables.private,
			priority: variables.priority,
			progress: variables.progress,
			progressVolumes: variables.progressVolumes,
			repeat: variables.repeat,
			score: variables.score,
			scoreRaw: variables.scoreRaw,
			startedAt: variables.startedAt,
			status: variables.status,
		};

		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "mediaList");
			const document = buildSaveMediaListEntryDocument(select);
			return this.graphQLClient
				.request<
					{ SaveMediaListEntry: SelectedMediaList<TSelect> | null },
					SaveMediaListEntryMutationVariables
				>({ document, variables: mutationVariables })
				.then((raw) => (wrapped ? { mediaList: raw.SaveMediaListEntry } : raw));
		}

		return this.client.SaveMediaListEntry(mutationVariables);
	}

	/**
	 * Deletes a media list entry by its list entry ID. Requires authentication.
	 * @param id - The ID of the media list entry to delete.
	 * @returns A promise resolving to the deletion result.
	 */
	deleteEntry(id: number): Promise<DeleteMediaListEntryMutation>;
	deleteEntry<TSelect extends DeletedSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ DeleteMediaListEntry: SelectedDeleted<TSelect> | null }>;
	deleteEntry<TSelect extends DeletedSelect>(
		id: number,
		options: RootSelectionOption<"deleteMediaListEntry", TSelect>,
	): Promise<{ deleteMediaListEntry: SelectedDeleted<TSelect> | null }>;
	deleteEntry<TSelect extends DeletedSelect>(
		id: number,
		options?: SelectionOption<"deleteMediaListEntry", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(
				options,
				"deleteMediaListEntry",
			);
			const document = buildDeleteMediaListEntryDocument(select);
			return this.graphQLClient
				.request<
					{ DeleteMediaListEntry: SelectedDeleted<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) =>
					wrapped ? { deleteMediaListEntry: raw.DeleteMediaListEntry } : raw,
				);
		}
		return this.client.DeleteMediaListEntry({ id });
	}

	/**
	 * Updates the same fields on many media list entries at once. Requires authentication.
	 * @param entries - The entry ids plus the fields to apply to every entry.
	 * @returns A promise resolving to the updated media list entries.
	 */
	updateEntries(
		entries: UpdateMediaListEntriesInput,
	): ReturnType<ANILISTSDK["UpdateMediaListEntries"]>;
	updateEntries<TSelect extends MediaListSelect>(
		entries: UpdateMediaListEntriesInput,
		options: { select: TSelect },
	): Promise<{
		UpdateMediaListEntries: Array<SelectedMediaList<TSelect> | null> | null;
	}>;
	updateEntries<TSelect extends MediaListSelect>(
		entries: UpdateMediaListEntriesInput,
		options: RootSelectionOption<"updateMediaListEntries", TSelect>,
	): Promise<{
		updateMediaListEntries: Array<SelectedMediaList<TSelect> | null> | null;
	}>;
	updateEntries<TSelect extends MediaListSelect>(
		entries: UpdateMediaListEntriesInput,
		options?: SelectionOption<"updateMediaListEntries", TSelect>,
	): unknown {
		const { ids, ...fields } = entries;
		const mutationVariables: UpdateMediaListEntriesMutationVariables = {
			advancedScores: fields.advancedScores,
			completedAt: fields.completedAt,
			hiddenFromStatusLists: fields.hiddenFromStatusLists,
			ids,
			notes: fields.notes,
			priority: fields.priority,
			private: fields.private,
			progress: fields.progress,
			progressVolumes: fields.progressVolumes,
			repeat: fields.repeat,
			score: fields.score,
			scoreRaw: fields.scoreRaw,
			startedAt: fields.startedAt,
			status: fields.status,
		};

		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(
				options,
				"updateMediaListEntries",
			);
			const document = buildUpdateMediaListEntriesDocument(select);
			return this.graphQLClient
				.request<
					{
						UpdateMediaListEntries: Array<SelectedMediaList<TSelect> | null> | null;
					},
					UpdateMediaListEntriesMutationVariables
				>({ document, variables: mutationVariables })
				.then((raw) =>
					wrapped
						? { updateMediaListEntries: raw.UpdateMediaListEntries }
						: raw,
				);
		}

		return this.client.UpdateMediaListEntries(mutationVariables);
	}

	/**
	 * Deletes a custom list. Requires authentication.
	 * @param customList - The name of the custom list to delete.
	 * @param type - The media type the list belongs to ("ANIME" or "MANGA").
	 * @returns A promise resolving to the deletion result.
	 */
	deleteCustomList(
		customList: string,
		type: MediaTypeNonEnum,
	): ReturnType<ANILISTSDK["DeleteCustomList"]>;
	deleteCustomList<TSelect extends DeletedSelect>(
		customList: string,
		type: MediaTypeNonEnum,
		options: { select: TSelect },
	): Promise<{ DeleteCustomList: SelectedDeleted<TSelect> | null }>;
	deleteCustomList<TSelect extends DeletedSelect>(
		customList: string,
		type: MediaTypeNonEnum,
		options: RootSelectionOption<"deleteCustomList", TSelect>,
	): Promise<{ deleteCustomList: SelectedDeleted<TSelect> | null }>;
	deleteCustomList<TSelect extends DeletedSelect>(
		customList: string,
		type: MediaTypeNonEnum,
		options?: SelectionOption<"deleteCustomList", TSelect>,
	): unknown {
		const normalizedType = toMediaType(type);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "deleteCustomList");
			const document = buildDeleteCustomListDocument(select);
			return this.graphQLClient
				.request<
					{ DeleteCustomList: SelectedDeleted<TSelect> | null },
					{ customList: string; type: ReturnType<typeof toMediaType> }
				>({ document, variables: { customList, type: normalizedType } })
				.then((raw) =>
					wrapped ? { deleteCustomList: raw.DeleteCustomList } : raw,
				);
		}
		return this.client.DeleteCustomList({
			customList,
			type: normalizedType,
		});
	}
}
