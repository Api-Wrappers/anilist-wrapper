import type { ANILISTSDK } from "../@types";
import type { Page } from "../__generated__/anilist-schema";
import type {
	GraphQLClient,
	LikeableType,
	SaveActivityReplyMutationVariables,
	SaveMessageActivityMutationVariables,
	SaveTextActivityMutationVariables,
	SaveThreadCommentMutationVariables,
	SaveThreadMutationVariables,
} from "../__generated__/anilist-sdk";
import {
	buildActivityReplyByIdDocument,
	buildActivityReplyPageDocument,
	buildFollowersPageDocument,
	buildFollowingPageDocument,
	buildParsedMarkdownDocument,
	buildSiteStatisticsDocument,
	buildThreadByIdDocument,
	buildThreadCommentByIdDocument,
	buildThreadCommentPageDocument,
	buildThreadPageDocument,
	buildToggleFollowDocument,
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
	ActivityReplyPageSelect,
	ActivityReplySelect,
	FollowersPageSelect,
	FollowingPageSelect,
	ParsedMarkdownSelect,
	SelectedActivityReply,
	SelectedActivityReplyPage,
	SelectedFields,
	SelectedFollowersPage,
	SelectedFollowingPage,
	SelectedParsedMarkdown,
	SelectedSiteStatistics,
	SelectedThread,
	SelectedThreadComment,
	SelectedThreadCommentPage,
	SelectedThreadPage,
	SelectedUser,
	SiteStatisticsSelect,
	ThreadCommentPageSelect,
	ThreadCommentSelect,
	ThreadPageSelect,
	ThreadSelect,
	UserSelect,
} from "../selections/types";

/**
 * Optional filters for {@link SocialService.getThreads}.
 */
export type ThreadSearchFilters = {
	/** Thread title/body search string. */
	search?: string;
	/** Restrict results to a specific user ID. */
	userId?: number;
};

/**
 * Fields accepted by {@link SocialService.saveTextActivity}.
 */
export type SaveTextActivityInput = {
	id?: number | null;
	text?: string | null;
	locked?: boolean | null;
};

/**
 * Fields accepted by {@link SocialService.saveMessageActivity}.
 */
export type SaveMessageActivityInput = {
	id?: number | null;
	message?: string | null;
	recipientId?: number | null;
	private?: boolean | null;
	locked?: boolean | null;
	asMod?: boolean | null;
};

/**
 * Fields accepted by {@link SocialService.saveActivityReply}.
 */
export type SaveActivityReplyInput = {
	id?: number | null;
	activityId?: number | null;
	text?: string | null;
	asMod?: boolean | null;
};

/**
 * Fields accepted by {@link SocialService.saveThread}.
 */
export type SaveThreadInput = {
	id?: number | null;
	title?: string | null;
	body?: string | null;
	categories?: number[] | null;
	mediaCategories?: number[] | null;
	sticky?: boolean | null;
	locked?: boolean | null;
};

/**
 * Fields accepted by {@link SocialService.saveThreadComment}.
 */
export type SaveThreadCommentInput = {
	id?: number | null;
	threadId?: number | null;
	parentCommentId?: number | null;
	comment?: string | null;
	locked?: boolean | null;
};

/**
 * Service class for social and forum queries: follows, activities,
 * notifications, threads, comments, site statistics, and markdown.
 *
 * Union-typed roots (`ActivityUnion`, `NotificationUnion`, `LikeableUnion`)
 * do not support `select`; use {@link GraphQLService.request} for custom
 * projections of those types.
 */
export class SocialService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new SocialService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	private selectedPage<TSelect>(
		document: string,
		variables: Record<string, unknown>,
	): Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		if (!this.graphQLClient) {
			throw new Error("graphQLClient is required for selected queries.");
		}
		return this.graphQLClient
			.request<
				{ Page: SelectedFields<Page, TSelect> | null },
				Record<string, unknown>
			>({ document, variables })
			.then((raw) => ({ page: raw.Page }));
	}

	/**
	 * Retrieves the users a user follows.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param userId - The ID of the user whose follows should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of users per page. Defaults to 25.
	 */
	getFollowing(
		userId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetFollowing"]>;
	getFollowing<TSelect extends FollowingPageSelect>(
		userId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedFollowingPage<TSelect> | null }>;
	getFollowing<TSelect extends FollowingPageSelect>(
		userId: number,
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetFollowing"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildFollowingPageDocument(
				resolvePageSelection<TSelect>(options.select, "following"),
			);
			return this.selectedPage<TSelect>(document, { userId, page, perPage });
		}
		return this.client.GetFollowing({ userId, page, perPage });
	}

	/**
	 * Retrieves the followers of a user.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param userId - The ID of the user whose followers should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of users per page. Defaults to 25.
	 */
	getFollowers(
		userId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetFollowers"]>;
	getFollowers<TSelect extends FollowersPageSelect>(
		userId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedFollowersPage<TSelect> | null }>;
	getFollowers<TSelect extends FollowersPageSelect>(
		userId: number,
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetFollowers"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildFollowersPageDocument(
				resolvePageSelection<TSelect>(options.select, "followers"),
			);
			return this.selectedPage<TSelect>(document, { userId, page, perPage });
		}
		return this.client.GetFollowers({ userId, page, perPage });
	}

	/**
	 * Retrieves the authenticated user's notifications. Requires authentication.
	 * Union-typed notifications do not support `select`.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of notifications per page. Defaults to 25.
	 */
	getNotifications(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetNotifications"]> {
		return this.client.GetNotifications({ page, perPage });
	}

	/**
	 * Retrieves activity entries, optionally for a specific user.
	 * Union-typed activities do not support `select`.
	 * @param userId - Optional user ID to filter activities by.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of activities per page. Defaults to 25.
	 */
	getActivities(
		userId?: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetActivities"]> {
		return this.client.GetActivities({ userId, page, perPage });
	}

	/**
	 * Retrieves a single activity. Union-typed activities do not support `select`.
	 * @param id - The unique ID of the activity.
	 */
	getActivity(id: number): ReturnType<ANILISTSDK["GetActivity"]> {
		return this.client.GetActivity({ id });
	}

	/**
	 * Retrieves replies to an activity.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param activityId - Optional activity ID to filter replies by.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of replies per page. Defaults to 25.
	 */
	getActivityReplies(
		activityId?: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetActivityReplies"]>;
	getActivityReplies<TSelect extends ActivityReplyPageSelect>(
		activityId: number | undefined,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedActivityReplyPage<TSelect> | null }>;
	getActivityReplies<TSelect extends ActivityReplyPageSelect>(
		activityId: number | undefined,
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetActivityReplies"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildActivityReplyPageDocument(
				resolvePageSelection<TSelect>(options.select, "activityReplies"),
			);
			return this.selectedPage<TSelect>(document, {
				activityId,
				page,
				perPage,
			});
		}
		return this.client.GetActivityReplies({ activityId, page, perPage });
	}

	/**
	 * Retrieves a single activity reply.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the activity reply.
	 */
	getActivityReply(id: number): ReturnType<ANILISTSDK["GetActivityReply"]>;
	getActivityReply<TSelect extends ActivityReplySelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ ActivityReply: SelectedActivityReply<TSelect> | null }>;
	getActivityReply<TSelect extends ActivityReplySelect>(
		id: number,
		options: RootSelectionOption<"activityReply", TSelect>,
	): Promise<{ activityReply: SelectedActivityReply<TSelect> | null }>;
	getActivityReply<TSelect extends ActivityReplySelect>(
		id: number,
		options?: SelectionOption<"activityReply", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "activityReply");
			const document = buildActivityReplyByIdDocument(select);
			return this.graphQLClient
				.request<
					{ ActivityReply: SelectedActivityReply<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) => (wrapped ? { activityReply: raw.ActivityReply } : raw));
		}
		return this.client.GetActivityReply({ id });
	}

	/**
	 * Retrieves forum threads, optionally filtered by search or user.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param filters - Optional search string and user filter.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of threads per page. Defaults to 25.
	 */
	getThreads(
		filters?: ThreadSearchFilters,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetThreads"]>;
	getThreads<TSelect extends ThreadPageSelect>(
		filters: ThreadSearchFilters | undefined,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedThreadPage<TSelect> | null }>;
	getThreads<TSelect extends ThreadPageSelect>(
		filters: ThreadSearchFilters = {},
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetThreads"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		const { search, userId } = filters;
		if (options?.select !== undefined) {
			const document = buildThreadPageDocument(
				resolvePageSelection<TSelect>(options.select, "threads"),
			);
			return this.selectedPage<TSelect>(document, {
				search,
				userId,
				page,
				perPage,
			});
		}
		return this.client.GetThreads({ search, userId, page, perPage });
	}

	/**
	 * Retrieves a single forum thread.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the thread.
	 */
	getThread(id: number): ReturnType<ANILISTSDK["GetThread"]>;
	getThread<TSelect extends ThreadSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Thread: SelectedThread<TSelect> | null }>;
	getThread<TSelect extends ThreadSelect>(
		id: number,
		options: RootSelectionOption<"thread", TSelect>,
	): Promise<{ thread: SelectedThread<TSelect> | null }>;
	getThread<TSelect extends ThreadSelect>(
		id: number,
		options?: SelectionOption<"thread", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "thread");
			const document = buildThreadByIdDocument(select);
			return this.graphQLClient
				.request<{ Thread: SelectedThread<TSelect> | null }, { id: number }>({
					document,
					variables: { id },
				})
				.then((raw) => (wrapped ? { thread: raw.Thread } : raw));
		}
		return this.client.GetThread({ id });
	}

	/**
	 * Retrieves comments on a thread.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param threadId - Optional thread ID to filter comments by.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of comments per page. Defaults to 25.
	 */
	getThreadComments(
		threadId?: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetThreadComments"]>;
	getThreadComments<TSelect extends ThreadCommentPageSelect>(
		threadId: number | undefined,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedThreadCommentPage<TSelect> | null }>;
	getThreadComments<TSelect extends ThreadCommentPageSelect>(
		threadId: number | undefined,
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetThreadComments"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		if (options?.select !== undefined) {
			const document = buildThreadCommentPageDocument(
				resolvePageSelection<TSelect>(options.select, "threadComments"),
			);
			return this.selectedPage<TSelect>(document, {
				threadId,
				page,
				perPage,
			});
		}
		return this.client.GetThreadComments({ threadId, page, perPage });
	}

	/**
	 * Retrieves a single thread comment (AniList returns a list with one entry).
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the thread comment.
	 */
	getThreadComment(id: number): ReturnType<ANILISTSDK["GetThreadComment"]>;
	getThreadComment<TSelect extends ThreadCommentSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{
		ThreadComment: Array<SelectedThreadComment<TSelect> | null> | null;
	}>;
	getThreadComment<TSelect extends ThreadCommentSelect>(
		id: number,
		options: RootSelectionOption<"threadComments", TSelect>,
	): Promise<{
		threadComments: Array<SelectedThreadComment<TSelect> | null> | null;
	}>;
	getThreadComment<TSelect extends ThreadCommentSelect>(
		id: number,
		options?: SelectionOption<"threadComments", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "threadComments");
			const document = buildThreadCommentByIdDocument(select);
			return this.graphQLClient
				.request<
					{
						ThreadComment: Array<SelectedThreadComment<TSelect> | null> | null;
					},
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) => (wrapped ? { threadComments: raw.ThreadComment } : raw));
		}
		return this.client.GetThreadComment({ id });
	}

	/**
	 * Retrieves AniList site-wide statistics.
	 * When `options.select` is provided, only the selected fields are returned.
	 */
	getSiteStatistics(): ReturnType<ANILISTSDK["GetSiteStatistics"]>;
	getSiteStatistics<TSelect extends SiteStatisticsSelect>(options: {
		select: TSelect;
	}): Promise<{ SiteStatistics: SelectedSiteStatistics<TSelect> | null }>;
	getSiteStatistics<TSelect extends SiteStatisticsSelect>(
		options: RootSelectionOption<"siteStatistics", TSelect>,
	): Promise<{ siteStatistics: SelectedSiteStatistics<TSelect> | null }>;
	getSiteStatistics<TSelect extends SiteStatisticsSelect>(
		options?: SelectionOption<"siteStatistics", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "siteStatistics");
			const document = buildSiteStatisticsDocument(select);
			return this.graphQLClient
				.request<{ SiteStatistics: SelectedSiteStatistics<TSelect> | null }>({
					document,
				})
				.then((raw) =>
					wrapped ? { siteStatistics: raw.SiteStatistics } : raw,
				);
		}
		return this.client.GetSiteStatistics();
	}

	/**
	 * Renders AniList markdown to HTML.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param markdown - The markdown source to render.
	 */
	getMarkdown(markdown: string): ReturnType<ANILISTSDK["GetMarkdown"]>;
	getMarkdown<TSelect extends ParsedMarkdownSelect>(
		markdown: string,
		options: { select: TSelect },
	): Promise<{ Markdown: SelectedParsedMarkdown<TSelect> | null }>;
	getMarkdown<TSelect extends ParsedMarkdownSelect>(
		markdown: string,
		options: RootSelectionOption<"markdown", TSelect>,
	): Promise<{ markdown: SelectedParsedMarkdown<TSelect> | null }>;
	getMarkdown<TSelect extends ParsedMarkdownSelect>(
		markdown: string,
		options?: SelectionOption<"markdown", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "markdown");
			const document = buildParsedMarkdownDocument(select);
			return this.graphQLClient
				.request<
					{ Markdown: SelectedParsedMarkdown<TSelect> | null },
					{ markdown: string }
				>({ document, variables: { markdown } })
				.then((raw) => (wrapped ? { markdown: raw.Markdown } : raw));
		}
		return this.client.GetMarkdown({ markdown });
	}

	/**
	 * Toggles whether the authenticated user follows another user. Requires authentication.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param userId - The ID of the user to follow or unfollow.
	 */
	toggleFollow(userId: number): ReturnType<ANILISTSDK["ToggleFollow"]>;
	toggleFollow<TSelect extends UserSelect>(
		userId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFollow: SelectedUser<TSelect> | null }>;
	toggleFollow<TSelect extends UserSelect>(
		userId: number,
		options: RootSelectionOption<"user", TSelect>,
	): Promise<{ user: SelectedUser<TSelect> | null }>;
	toggleFollow<TSelect extends UserSelect>(
		userId: number,
		options?: SelectionOption<"user", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "user");
			const document = buildToggleFollowDocument(select);
			return this.graphQLClient
				.request<
					{ ToggleFollow: SelectedUser<TSelect> | null },
					{ userId: number }
				>({ document, variables: { userId } })
				.then((raw) => (wrapped ? { user: raw.ToggleFollow } : raw));
		}
		return this.client.ToggleFollow({ userId });
	}

	/**
	 * Toggles a like on a likeable entity. Requires authentication.
	 * The `LikeableUnion` result does not support `select`.
	 * @param id - The ID of the likeable entity.
	 * @param type - Optional `LikeableType` (defaults to AniList's behaviour).
	 */
	toggleLike(
		id: number,
		type?: LikeableType,
	): ReturnType<ANILISTSDK["ToggleLike"]> {
		return this.client.ToggleLike({ id, type });
	}

	/**
	 * Creates or updates a text activity. Requires authentication.
	 * @param input - The activity fields to save (`text` is required by AniList).
	 */
	saveTextActivity(
		input: SaveTextActivityInput,
	): ReturnType<ANILISTSDK["SaveTextActivity"]> {
		const variables: SaveTextActivityMutationVariables = {
			id: input.id,
			locked: input.locked,
			text: input.text,
		};
		return this.client.SaveTextActivity(variables);
	}

	/**
	 * Creates or updates a message activity. Requires authentication.
	 * @param input - The message fields to save.
	 */
	saveMessageActivity(
		input: SaveMessageActivityInput,
	): ReturnType<ANILISTSDK["SaveMessageActivity"]> {
		const variables: SaveMessageActivityMutationVariables = {
			asMod: input.asMod,
			id: input.id,
			locked: input.locked,
			message: input.message,
			private: input.private,
			recipientId: input.recipientId,
		};
		return this.client.SaveMessageActivity(variables);
	}

	/**
	 * Creates or updates an activity reply. Requires authentication.
	 * @param input - The reply fields to save.
	 */
	saveActivityReply(
		input: SaveActivityReplyInput,
	): ReturnType<ANILISTSDK["SaveActivityReply"]> {
		const variables: SaveActivityReplyMutationVariables = {
			activityId: input.activityId,
			asMod: input.asMod,
			id: input.id,
			text: input.text,
		};
		return this.client.SaveActivityReply(variables);
	}

	/**
	 * Deletes an activity. Requires authentication.
	 * @param id - The ID of the activity to delete.
	 */
	deleteActivity(id: number): ReturnType<ANILISTSDK["DeleteActivity"]> {
		return this.client.DeleteActivity({ id });
	}

	/**
	 * Deletes an activity reply. Requires authentication.
	 * @param id - The ID of the activity reply to delete.
	 */
	deleteActivityReply(
		id: number,
	): ReturnType<ANILISTSDK["DeleteActivityReply"]> {
		return this.client.DeleteActivityReply({ id });
	}

	/**
	 * Subscribes to or unsubscribes from an activity. Requires authentication.
	 * The `ActivityUnion` result does not support `select`.
	 * @param activityId - The ID of the activity.
	 * @param subscribe - `true` to subscribe, `false` to unsubscribe.
	 */
	toggleActivitySubscription(
		activityId: number,
		subscribe?: boolean,
	): ReturnType<ANILISTSDK["ToggleActivitySubscription"]> {
		return this.client.ToggleActivitySubscription({ activityId, subscribe });
	}

	/**
	 * Pins or unpins an activity. Requires authentication.
	 * The `ActivityUnion` result does not support `select`.
	 * @param id - The ID of the activity.
	 * @param pinned - `true` to pin, `false` to unpin.
	 */
	toggleActivityPin(
		id: number,
		pinned?: boolean,
	): ReturnType<ANILISTSDK["ToggleActivityPin"]> {
		return this.client.ToggleActivityPin({ id, pinned });
	}

	/**
	 * Creates or updates a forum thread. Requires authentication.
	 * @param input - The thread fields to save.
	 */
	saveThread(input: SaveThreadInput): ReturnType<ANILISTSDK["SaveThread"]> {
		const variables: SaveThreadMutationVariables = {
			body: input.body,
			categories: input.categories,
			id: input.id,
			locked: input.locked,
			mediaCategories: input.mediaCategories,
			sticky: input.sticky,
			title: input.title,
		};
		return this.client.SaveThread(variables);
	}

	/**
	 * Creates or updates a thread comment. Requires authentication.
	 * @param input - The comment fields to save.
	 */
	saveThreadComment(
		input: SaveThreadCommentInput,
	): ReturnType<ANILISTSDK["SaveThreadComment"]> {
		const variables: SaveThreadCommentMutationVariables = {
			comment: input.comment,
			id: input.id,
			locked: input.locked,
			parentCommentId: input.parentCommentId,
			threadId: input.threadId,
		};
		return this.client.SaveThreadComment(variables);
	}

	/**
	 * Deletes a forum thread. Requires authentication.
	 * @param id - The ID of the thread to delete.
	 */
	deleteThread(id: number): ReturnType<ANILISTSDK["DeleteThread"]> {
		return this.client.DeleteThread({ id });
	}

	/**
	 * Deletes a thread comment. Requires authentication.
	 * @param id - The ID of the thread comment to delete.
	 */
	deleteThreadComment(
		id: number,
	): ReturnType<ANILISTSDK["DeleteThreadComment"]> {
		return this.client.DeleteThreadComment({ id });
	}

	/**
	 * Subscribes to or unsubscribes from a thread. Requires authentication.
	 * @param threadId - The ID of the thread.
	 * @param subscribe - `true` to subscribe, `false` to unsubscribe.
	 */
	toggleThreadSubscription(
		threadId: number,
		subscribe?: boolean,
	): ReturnType<ANILISTSDK["ToggleThreadSubscription"]> {
		return this.client.ToggleThreadSubscription({ threadId, subscribe });
	}
}
