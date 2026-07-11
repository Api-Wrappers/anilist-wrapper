import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import type {
	DeleteMediaListEntryMutation,
	FuzzyDateInput,
	GraphQLClient,
	MediaListStatus,
	SaveMediaListEntryMutation,
	SaveMediaListEntryMutationVariables,
} from "../__generated__/anilist-sdk";
import {
	buildDeleteMediaListEntryDocument,
	buildMediaListByIdDocument,
	buildMediaListCollectionByUserDocument,
	buildSaveMediaListEntryDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { getSelection, hasSelection } from "../selections/options";
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
			const select = getSelection(options, "mediaList");
			const wrapped =
				(options.select as Record<string, unknown>).mediaList !== undefined;
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
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUser(
		userId: number,
		mediaType: MediaTypeNonEnum,
	): ReturnType<ANILISTSDK["GetMediaListByUser"]>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUser<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedType = toMediaType(mediaType);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "mediaListCollection");
			const wrapped =
				(options.select as Record<string, unknown>).mediaListCollection !==
				undefined;
			const document = buildMediaListCollectionByUserDocument(select, "id");
			return this.graphQLClient
				.request<
					{ MediaListCollection: SelectedMediaListCollection<TSelect> | null },
					{ userId: number; mediaType: ReturnType<typeof toMediaType> }
				>({ document, variables: { userId, mediaType: normalizedType } })
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
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUsername(
		userName: string,
		mediaType: MediaTypeNonEnum,
	): ReturnType<ANILISTSDK["GetMediaListByUserByUsername"]>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		mediaType: MediaTypeNonEnum,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedType = toMediaType(mediaType);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "mediaListCollection");
			const wrapped =
				(options.select as Record<string, unknown>).mediaListCollection !==
				undefined;
			const document = buildMediaListCollectionByUserDocument(
				select,
				"username",
			);
			return this.graphQLClient
				.request<
					{ MediaListCollection: SelectedMediaListCollection<TSelect> | null },
					{ userName: string; mediaType: ReturnType<typeof toMediaType> }
				>({ document, variables: { userName, mediaType: normalizedType } })
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
			const select = getSelection(options, "mediaList");
			const wrapped =
				(options.select as Record<string, unknown>).mediaList !== undefined;
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
			const select = getSelection(options, "deleteMediaListEntry");
			const wrapped =
				(options.select as Record<string, unknown>).deleteMediaListEntry !==
				undefined;
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
}
