import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import type { GraphQLClient } from "../__generated__/anilist-sdk";
import {
	buildMediaByIdDocument,
	buildMediaListCollectionByUserDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { getSelection, hasSelection } from "../selections/options";
import type {
	MediaListCollectionSelect,
	MediaSelect,
	SelectedMedia,
	SelectedMediaListCollection,
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
			const select = getSelection(options, "media");
			const wrapped =
				(options.select as Record<string, unknown>).media !== undefined;
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
	 * @returns A promise that resolves with the user's media list.
	 */
	getMediaList(
		userId: number,
		mediaType: MediaTypeNonEnum,
	): ReturnType<ANILISTSDK["GetMediaListByUser"]>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		mediaType: MediaTypeNonEnum,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getMediaList<TSelect extends MediaListCollectionSelect>(
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
			mediaType: normalizedType,
			userId,
		});
	}

	/**
	 * Retrieves a user's media list by their username, filtered by media type (Anime or Manga).
	 * @param userName - The username of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @returns A promise that resolves with the user's media list.
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
			mediaType: normalizedType,
			userName,
		});
	}
}
