import type { ANILISTSDK } from "../@types";
import type { Page } from "../__generated__/anilist-schema";
import {
	type GraphQLClient,
	MediaListStatus,
	MediaType,
} from "../__generated__/anilist-sdk";
import {
	buildMediaListCollectionByUserDocument,
	buildReviewPageDocument,
	buildUserByIdDocument,
	buildUserByUsernameDocument,
	buildUserPageDocument,
	buildViewerDocument,
	buildViewerStatisticsDocument,
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
	MediaListCollectionSelect,
	ReviewPageSelect,
	SelectedFields,
	SelectedMediaListCollection,
	SelectedReviewPage,
	SelectedUser,
	SelectedUserPage,
	SelectedUserStatisticTypes,
	UserPageSelect,
	UserSelect,
	UserStatisticTypesSelect,
} from "../selections/types";
import { assertPositiveInt, normalizePerPage } from "./validation";

/**
 * Service class for interacting with AniList user-related queries.
 */
export class UserService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new UserService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Retrieves basic user information by user ID.
	 * @param userId - The unique ID of the user.
	 * @returns A promise resolving to the user information.
	 */
	getUserInfo(userId: number): ReturnType<ANILISTSDK["GetUserInfo"]>;
	getUserInfo<TSelect extends UserSelect>(
		userId: number,
		options: { select: TSelect },
	): Promise<{ User: SelectedUser<TSelect> | null }>;
	getUserInfo<TSelect extends UserSelect>(
		userId: number,
		options: RootSelectionOption<"user", TSelect>,
	): Promise<{ user: SelectedUser<TSelect> | null }>;
	getUserInfo<TSelect extends UserSelect>(
		userId: number,
		options?: SelectionOption<"user", TSelect>,
	): unknown {
		assertPositiveInt(userId, "userId");
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "user");
			const document = buildUserByIdDocument(select);
			return this.graphQLClient
				.request<{ User: SelectedUser<TSelect> | null }, { id: number }>({
					document,
					variables: { id: userId },
				})
				.then((raw) => (wrapped ? { user: raw.User } : raw));
		}
		return this.client.GetUserInfo({ id: userId });
	}

	/**
	 * Retrieves basic user information by userName.
	 * @param userName - The userName of the user.
	 * @returns A promise resolving to the user information.
	 */
	getUserInfoByUsername(
		userName: string,
	): ReturnType<ANILISTSDK["GetUserInfoByUsername"]>;
	getUserInfoByUsername<TSelect extends UserSelect>(
		userName: string,
		options: { select: TSelect },
	): Promise<{ User: SelectedUser<TSelect> | null }>;
	getUserInfoByUsername<TSelect extends UserSelect>(
		userName: string,
		options: RootSelectionOption<"user", TSelect>,
	): Promise<{ user: SelectedUser<TSelect> | null }>;
	getUserInfoByUsername<TSelect extends UserSelect>(
		userName: string,
		options?: SelectionOption<"user", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "user");
			const document = buildUserByUsernameDocument(select);
			return this.graphQLClient
				.request<{ User: SelectedUser<TSelect> | null }, { userName: string }>({
					document,
					variables: { userName },
				})
				.then((raw) => (wrapped ? { user: raw.User } : raw));
		}
		return this.client.GetUserInfoByUsername({ userName });
	}

	/**
	 * Retrieves the user's anime list with optional filtering by status.
	 * @param userId - The unique ID of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's anime list.
	 */
	getUserAnimeList(
		userId: number,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetUserAnimeList"]>;
	getUserAnimeList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserAnimeList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserAnimeList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		assertPositiveInt(userId, "userId");
		const normalizedStatus = status ?? MediaListStatus.Current;
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
						mediaType: MediaType;
						status: MediaListStatus;
					}
				>({
					document,
					variables: {
						userId,
						mediaType: MediaType.Anime,
						status: normalizedStatus,
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetUserAnimeList({
			status: normalizedStatus,
			userId,
		});
	}

	/**
	 * Retrieves the user's anime list with optional filtering by status.
	 * @param userName - The userName of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's anime list.
	 */
	getUserAnimeListByUsername(
		userName: string,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetUserAnimeListByUsername"]>;
	getUserAnimeListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserAnimeListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserAnimeListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedStatus = status ?? MediaListStatus.Current;
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
						mediaType: MediaType;
						status: MediaListStatus;
					}
				>({
					document,
					variables: {
						userName,
						mediaType: MediaType.Anime,
						status: normalizedStatus,
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetUserAnimeListByUsername({
			status: normalizedStatus,
			userName,
		});
	}

	/**
	 * Retrieves the user's manga list with optional filtering by status.
	 * @param userId - The unique ID of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's manga list.
	 */
	getUserMangaList(
		userId: number,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetUserMangaList"]>;
	getUserMangaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserMangaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserMangaList<TSelect extends MediaListCollectionSelect>(
		userId: number,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		assertPositiveInt(userId, "userId");
		const normalizedStatus = status ?? MediaListStatus.Current;
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
						mediaType: MediaType;
						status: MediaListStatus;
					}
				>({
					document,
					variables: {
						userId,
						mediaType: MediaType.Manga,
						status: normalizedStatus,
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetUserMangaList({
			status: normalizedStatus,
			userId,
		});
	}

	/**
	 * Retrieves the user's manga list with optional filtering by status.
	 * @param userName - The userName of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's manga list.
	 */
	getUserMangaListByUsername(
		userName: string,
		status?: MediaListStatus,
	): ReturnType<ANILISTSDK["GetUserMangaListByUsername"]>;
	getUserMangaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status: MediaListStatus | undefined,
		options: { select: TSelect },
	): Promise<{
		MediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserMangaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status: MediaListStatus | undefined,
		options: RootSelectionOption<"mediaListCollection", TSelect>,
	): Promise<{
		mediaListCollection: SelectedMediaListCollection<TSelect> | null;
	}>;
	getUserMangaListByUsername<TSelect extends MediaListCollectionSelect>(
		userName: string,
		status?: MediaListStatus,
		options?: SelectionOption<"mediaListCollection", TSelect>,
	): unknown {
		const normalizedStatus = status ?? MediaListStatus.Current;
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
						mediaType: MediaType;
						status: MediaListStatus;
					}
				>({
					document,
					variables: {
						userName,
						mediaType: MediaType.Manga,
						status: normalizedStatus,
					},
				})
				.then((raw) =>
					wrapped ? { mediaListCollection: raw.MediaListCollection } : raw,
				);
		}
		return this.client.GetUserMangaListByUsername({
			status: normalizedStatus,
			userName,
		});
	}

	/**
	 * Retrieves a paginated list of users.
	 * @param page - Optional page number for pagination defaults to 1.
	 * @param perPage - Optional number of users per page defaults to 10.
	 * @returns A promise resolving to the paginated user list.
	 */
	getUserList(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetUserList"]>;
	getUserList<TSelect extends UserPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedUserPage<TSelect> | null }>;
	getUserList<TSelect extends UserPageSelect>(
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	): unknown {
		const limit = normalizePerPage(perPage, 10);
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildUserPageDocument(
				"SelectedUserList",
				"($page: Int, $perPage: Int)",
				[],
				resolvePageSelection<TSelect>(options.select, "users"),
			);
			return this.graphQLClient
				.request<
					{ Page: SelectedUserPage<TSelect> | null },
					{ page: number; perPage: number }
				>({ document, variables: { page, perPage: limit } })
				.then((raw) => ({ page: raw.Page }));
		}
		return this.client.GetUserList({
			page,
			perPage: limit,
		});
	}

	/**
	 * Retrieves user statistics by user ID.
	 * @param userId - The unique ID of the user.
	 * @returns A promise resolving to the user's statistics.
	 */
	getUserStatistics(
		userId: number,
	): ReturnType<ANILISTSDK["GetUserStatistics"]>;
	getUserStatistics<TSelect extends UserSelect>(
		userId: number,
		options: { select: TSelect },
	): Promise<{ User: SelectedUser<TSelect> | null }>;
	getUserStatistics<TSelect extends UserSelect>(
		userId: number,
		options: RootSelectionOption<"user", TSelect>,
	): Promise<{ user: SelectedUser<TSelect> | null }>;
	getUserStatistics<TSelect extends UserSelect>(
		userId: number,
		options?: SelectionOption<"user", TSelect>,
	): unknown {
		assertPositiveInt(userId, "userId");
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "user");
			const document = buildUserByIdDocument(select);
			return this.graphQLClient
				.request<{ User: SelectedUser<TSelect> | null }, { id: number }>({
					document,
					variables: { id: userId },
				})
				.then((raw) => (wrapped ? { user: raw.User } : raw));
		}
		return this.client.GetUserStatistics({ id: userId });
	}

	/**
	 * Retrieves user statistics by userName.
	 * @param userName - The userName of the user.
	 * @returns A promise resolving to the user's statistics.
	 */
	getUserStatisticsByUsername(
		userName: string,
	): ReturnType<ANILISTSDK["GetUserStatisticsByUsername"]>;
	getUserStatisticsByUsername<TSelect extends UserSelect>(
		userName: string,
		options: { select: TSelect },
	): Promise<{ User: SelectedUser<TSelect> | null }>;
	getUserStatisticsByUsername<TSelect extends UserSelect>(
		userName: string,
		options: RootSelectionOption<"user", TSelect>,
	): Promise<{ user: SelectedUser<TSelect> | null }>;
	getUserStatisticsByUsername<TSelect extends UserSelect>(
		userName: string,
		options?: SelectionOption<"user", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "user");
			const document = buildUserByUsernameDocument(select);
			return this.graphQLClient
				.request<{ User: SelectedUser<TSelect> | null }, { userName: string }>({
					document,
					variables: { userName },
				})
				.then((raw) => (wrapped ? { user: raw.User } : raw));
		}
		return this.client.GetUserStatisticsByUsername({ userName });
	}

	/**
	 * Retrieves the authenticated user's profile. Requires authentication.
	 * When `options.select` is provided, only the selected fields are returned.
	 */
	getViewer(): ReturnType<ANILISTSDK["GetViewer"]>;
	getViewer<TSelect extends UserSelect>(options: {
		select: TSelect;
	}): Promise<{ Viewer: SelectedUser<TSelect> | null }>;
	getViewer<TSelect extends UserSelect>(
		options: RootSelectionOption<"viewer", TSelect>,
	): Promise<{ viewer: SelectedUser<TSelect> | null }>;
	getViewer<TSelect extends UserSelect>(
		options?: SelectionOption<"viewer", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "viewer");
			const document = buildViewerDocument(select);
			return this.graphQLClient
				.request<{ Viewer: SelectedUser<TSelect> | null }>({ document })
				.then((raw) => (wrapped ? { viewer: raw.Viewer } : raw));
		}
		return this.client.GetViewer();
	}

	/**
	 * Retrieves the authenticated user's statistics. Requires authentication.
	 * When `options.select` is provided, only the selected statistics are returned.
	 */
	getViewerStatistics(): ReturnType<ANILISTSDK["GetViewerStatistics"]>;
	getViewerStatistics<TSelect extends UserStatisticTypesSelect>(options: {
		select: TSelect;
	}): Promise<{
		Viewer: { statistics: SelectedUserStatisticTypes<TSelect> | null } | null;
	}>;
	getViewerStatistics<TSelect extends UserStatisticTypesSelect>(
		options: RootSelectionOption<"viewerStatistics", TSelect>,
	): Promise<{ viewerStatistics: SelectedUserStatisticTypes<TSelect> | null }>;
	getViewerStatistics<TSelect extends UserStatisticTypesSelect>(
		options?: SelectionOption<"viewerStatistics", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "viewerStatistics");
			const document = buildViewerStatisticsDocument(select);
			return this.graphQLClient
				.request<{
					Viewer: {
						statistics: SelectedUserStatisticTypes<TSelect> | null;
					} | null;
				}>({ document })
				.then((raw) =>
					wrapped ? { viewerStatistics: raw.Viewer?.statistics ?? null } : raw,
				);
		}
		return this.client.GetViewerStatistics();
	}

	/**
	 * Retrieves reviews written by a user.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param userId - The ID of the user whose reviews should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of reviews per page. Defaults to 10.
	 */
	getReviews(
		userId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetUserReviews"]>;
	getReviews<TSelect extends ReviewPageSelect>(
		userId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedReviewPage<TSelect> | null }>;
	getReviews<TSelect extends ReviewPageSelect>(
		userId: number,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetUserReviews"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		const limit = normalizePerPage(perPage, 10);
		assertPositiveInt(userId, "userId");
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildReviewPageDocument(
				"SelectedUserReviews",
				"($userId: Int, $page: Int, $perPage: Int)",
				["userId: $userId"],
				resolvePageSelection<TSelect>(options.select, "reviews"),
			);
			const selected: Promise<{
				page: SelectedFields<Page, TSelect> | null;
			}> = this.graphQLClient
				.request<
					{ Page: SelectedFields<Page, TSelect> | null },
					{ userId: number; page: number; perPage: number }
				>({ document, variables: { userId, page, perPage: limit } })
				.then((raw) => ({ page: raw.Page }));
			return selected;
		}
		return this.client.GetUserReviews({ userId, page, perPage: limit });
	}
}
