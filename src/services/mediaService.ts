import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import type { Page } from "../__generated__/anilist-schema";
import type {
	GraphQLClient,
	MediaListStatus,
	RecommendationRating,
	ReviewRating,
	SaveReviewMutationVariables,
} from "../__generated__/anilist-sdk";
import {
	buildAiringScheduleByIdDocument,
	buildAiringSchedulePageDocument,
	buildDeleteReviewDocument,
	buildMediaByIdDocument,
	buildMediaListCollectionByUserDocument,
	buildMediaTagCollectionDocument,
	buildRateReviewDocument,
	buildRecommendationPageDocument,
	buildReviewPageDocument,
	buildSaveRecommendationDocument,
	buildSaveReviewDocument,
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
	DeletedSelect,
	MediaListCollectionSelect,
	MediaSelect,
	MediaTagSelect,
	RecommendationPageSelect,
	RecommendationSelect,
	ReviewPageSelect,
	ReviewSelect,
	SelectedAiringSchedule,
	SelectedAiringSchedulePage,
	SelectedDeleted,
	SelectedFields,
	SelectedMedia,
	SelectedMediaListCollection,
	SelectedMediaTag,
	SelectedRecommendation,
	SelectedRecommendationPage,
	SelectedReview,
	SelectedReviewPage,
} from "../selections/types";
import { toMediaType } from "./mediaType";
import { assertPositiveInt, normalizePerPage } from "./validation";

/**
 * Fields accepted by {@link MediaService.saveReview}. Provide `id` to update
 * an existing review or `mediaId` to create one.
 */
export type SaveReviewInput = {
	id?: number | null;
	mediaId?: number | null;
	body?: string | null;
	summary?: string | null;
	score?: number | null;
	private?: boolean | null;
};

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
		assertPositiveInt(id);
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
	 * @param status - Optional media list status filter.
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
		assertPositiveInt(userId, "userId");
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
			status,
			userId,
		});
	}

	/**
	 * Retrieves a user's media list by their username, filtered by media type (Anime or Manga).
	 * @param userName - The username of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @param status - Optional media list status filter.
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
			status,
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
		assertPositiveInt(id);
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
		const limit = normalizePerPage(perPage, 25);
		assertPositiveInt(mediaId, "mediaId");
		if (options?.select !== undefined) {
			const document = buildAiringSchedulePageDocument(
				"SelectedAiringSchedulesByMedia",
				"($mediaId: Int, $page: Int, $perPage: Int)",
				["mediaId: $mediaId"],
				resolvePageSelection<TSelect>(options.select, "airingSchedules"),
			);
			return this.selectedPage<TSelect>(document, {
				mediaId,
				page,
				perPage: limit,
			});
		}
		return this.client.GetAiringSchedulesByMedia({
			mediaId,
			page,
			perPage: limit,
		});
	}

	/**
	 * Retrieves reviews for a media entry.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param mediaId - The ID of the media whose reviews should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of reviews per page. Defaults to 10.
	 */
	getReviews(
		mediaId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetMediaReviews"]>;
	getReviews<TSelect extends ReviewPageSelect>(
		mediaId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedReviewPage<TSelect> | null }>;
	getReviews<TSelect extends ReviewPageSelect>(
		mediaId: number,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetMediaReviews"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		const limit = normalizePerPage(perPage, 10);
		assertPositiveInt(mediaId, "mediaId");
		if (options?.select !== undefined) {
			const document = buildReviewPageDocument(
				"SelectedMediaReviews",
				"($mediaId: Int, $page: Int, $perPage: Int)",
				["mediaId: $mediaId"],
				resolvePageSelection<TSelect>(options.select, "reviews"),
			);
			return this.selectedPage<TSelect>(document, {
				mediaId,
				page,
				perPage: limit,
			});
		}
		return this.client.GetMediaReviews({ mediaId, page, perPage: limit });
	}

	/**
	 * Retrieves recommendations for a media entry.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param mediaId - The ID of the media whose recommendations should be fetched.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of recommendations per page. Defaults to 10.
	 */
	getRecommendationsPage(
		mediaId: number,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["GetRecommendationsPage"]>;
	getRecommendationsPage<TSelect extends RecommendationPageSelect>(
		mediaId: number,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedRecommendationPage<TSelect> | null }>;
	getRecommendationsPage<TSelect extends RecommendationPageSelect>(
		mediaId: number,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["GetRecommendationsPage"]>
		| Promise<{ page: SelectedFields<Page, TSelect> | null }> {
		const limit = normalizePerPage(perPage, 10);
		assertPositiveInt(mediaId, "mediaId");
		if (options?.select !== undefined) {
			const document = buildRecommendationPageDocument(
				"SelectedRecommendationsPage",
				"($mediaId: Int, $page: Int, $perPage: Int)",
				["mediaId: $mediaId"],
				resolvePageSelection<TSelect>(options.select, "recommendations"),
			);
			return this.selectedPage<TSelect>(document, {
				mediaId,
				page,
				perPage: limit,
			});
		}
		return this.client.GetRecommendationsPage({
			mediaId,
			page,
			perPage: limit,
		});
	}

	/**
	 * Saves a recommendation rating. Requires authentication.
	 * @param mediaId - The media the recommendation belongs to.
	 * @param mediaRecommendationId - The recommended media.
	 * @param rating - Optional rating (`RecommendationRating`).
	 */
	saveRecommendation(
		mediaId: number,
		mediaRecommendationId: number,
		rating?: RecommendationRating,
	): ReturnType<ANILISTSDK["SaveRecommendation"]>;
	saveRecommendation<TSelect extends RecommendationSelect>(
		mediaId: number,
		mediaRecommendationId: number,
		rating: RecommendationRating | undefined,
		options: { select: TSelect },
	): Promise<{ SaveRecommendation: SelectedRecommendation<TSelect> | null }>;
	saveRecommendation<TSelect extends RecommendationSelect>(
		mediaId: number,
		mediaRecommendationId: number,
		rating: RecommendationRating | undefined,
		options: RootSelectionOption<"recommendation", TSelect>,
	): Promise<{ recommendation: SelectedRecommendation<TSelect> | null }>;
	saveRecommendation<TSelect extends RecommendationSelect>(
		mediaId: number,
		mediaRecommendationId: number,
		rating?: RecommendationRating,
		options?: SelectionOption<"recommendation", TSelect>,
	): unknown {
		assertPositiveInt(mediaId, "mediaId");
		assertPositiveInt(mediaRecommendationId, "mediaRecommendationId");
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "recommendation");
			const document = buildSaveRecommendationDocument(select);
			return this.graphQLClient
				.request<
					{ SaveRecommendation: SelectedRecommendation<TSelect> | null },
					{
						mediaId: number;
						mediaRecommendationId: number;
						rating?: RecommendationRating;
					}
				>({
					document,
					variables: { mediaId, mediaRecommendationId, rating },
				})
				.then((raw) =>
					wrapped ? { recommendation: raw.SaveRecommendation } : raw,
				);
		}
		return this.client.SaveRecommendation({
			mediaId,
			mediaRecommendationId,
			rating,
		});
	}

	/**
	 * Rates a review. Requires authentication.
	 * @param reviewId - The ID of the review to rate.
	 * @param rating - Optional rating (`ReviewRating`).
	 */
	rateReview(
		reviewId: number,
		rating?: ReviewRating,
	): ReturnType<ANILISTSDK["RateReview"]>;
	rateReview<TSelect extends ReviewSelect>(
		reviewId: number,
		rating: ReviewRating | undefined,
		options: { select: TSelect },
	): Promise<{ RateReview: SelectedReview<TSelect> | null }>;
	rateReview<TSelect extends ReviewSelect>(
		reviewId: number,
		rating: ReviewRating | undefined,
		options: RootSelectionOption<"review", TSelect>,
	): Promise<{ review: SelectedReview<TSelect> | null }>;
	rateReview<TSelect extends ReviewSelect>(
		reviewId: number,
		rating?: ReviewRating,
		options?: SelectionOption<"review", TSelect>,
	): unknown {
		assertPositiveInt(reviewId, "reviewId");
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "review");
			const document = buildRateReviewDocument(select);
			return this.graphQLClient
				.request<
					{ RateReview: SelectedReview<TSelect> | null },
					{ reviewId: number; rating?: ReviewRating }
				>({ document, variables: { reviewId, rating } })
				.then((raw) => (wrapped ? { review: raw.RateReview } : raw));
		}
		return this.client.RateReview({ reviewId, rating });
	}

	/**
	 * Saves (creates or updates) a review. Requires authentication.
	 * @param input - The review fields to save.
	 */
	saveReview(input: SaveReviewInput): ReturnType<ANILISTSDK["SaveReview"]>;
	saveReview<TSelect extends ReviewSelect>(
		input: SaveReviewInput,
		options: { select: TSelect },
	): Promise<{ SaveReview: SelectedReview<TSelect> | null }>;
	saveReview<TSelect extends ReviewSelect>(
		input: SaveReviewInput,
		options: RootSelectionOption<"review", TSelect>,
	): Promise<{ review: SelectedReview<TSelect> | null }>;
	saveReview<TSelect extends ReviewSelect>(
		input: SaveReviewInput,
		options?: SelectionOption<"review", TSelect>,
	): unknown {
		const mutationVariables: SaveReviewMutationVariables = {
			body: input.body,
			id: input.id,
			mediaId: input.mediaId,
			private: input.private,
			score: input.score,
			summary: input.summary,
		};

		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "review");
			const document = buildSaveReviewDocument(select);
			return this.graphQLClient
				.request<
					{ SaveReview: SelectedReview<TSelect> | null },
					SaveReviewMutationVariables
				>({ document, variables: mutationVariables })
				.then((raw) => (wrapped ? { review: raw.SaveReview } : raw));
		}
		return this.client.SaveReview(mutationVariables);
	}

	/**
	 * Deletes a review. Requires authentication.
	 * @param id - The ID of the review to delete.
	 */
	deleteReview(id: number): ReturnType<ANILISTSDK["DeleteReview"]>;
	deleteReview<TSelect extends DeletedSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ DeleteReview: SelectedDeleted<TSelect> | null }>;
	deleteReview<TSelect extends DeletedSelect>(
		id: number,
		options: RootSelectionOption<"deleteReview", TSelect>,
	): Promise<{ deleteReview: SelectedDeleted<TSelect> | null }>;
	deleteReview<TSelect extends DeletedSelect>(
		id: number,
		options?: SelectionOption<"deleteReview", TSelect>,
	): unknown {
		assertPositiveInt(id);
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "deleteReview");
			const document = buildDeleteReviewDocument(select);
			return this.graphQLClient
				.request<
					{ DeleteReview: SelectedDeleted<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) => (wrapped ? { deleteReview: raw.DeleteReview } : raw));
		}
		return this.client.DeleteReview({ id });
	}
}
