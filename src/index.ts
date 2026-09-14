import type { ANILISTSDK } from "./@types";
import type { GraphQLClient } from "./__generated__/anilist-sdk";
import {
	type AnilistClientOptions,
	createGraphQLClient,
	createSdkClient,
} from "./client";
import { AnimeService } from "./services/animeService";
import { CharacterService } from "./services/characterService";
import { GraphQLService } from "./services/graphqlService";
import { MangaService } from "./services/mangaService";
import { MediaListService } from "./services/mediaListService";
import { MediaService } from "./services/mediaService";
import { SocialService } from "./services/socialService";
import { StaffService } from "./services/staffService";
import { StudioService } from "./services/studioService";
import { UserService } from "./services/userService";

/**
 * Main class for interacting with the AniList API.
 * Provides access to various service classes for making different queries to the AniList API.
 */
class Anilist {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient;

	/**
	 * Constructs a new instance of the Anilist client.
	 * @param input - Optional authentication token, or client options including
	 * token, endpoint, headers, timeout, retry, plugins, and transport.
	 */
	constructor(input?: string | AnilistClientOptions) {
		this.graphQLClient = createGraphQLClient(input);
		this.client = createSdkClient(this.graphQLClient);

		this.anime = new AnimeService(this.client, this.graphQLClient);
		this.character = new CharacterService(this.client, this.graphQLClient);
		this.graphql = new GraphQLService(this.graphQLClient);
		this.manga = new MangaService(this.client, this.graphQLClient);
		this.media = new MediaService(this.client, this.graphQLClient);
		this.mediaList = new MediaListService(this.client, this.graphQLClient);
		this.social = new SocialService(this.client, this.graphQLClient);
		this.staff = new StaffService(this.client, this.graphQLClient);
		this.studio = new StudioService(this.client, this.graphQLClient);
		this.user = new UserService(this.client, this.graphQLClient);
	}

	/**
	 * Service class for interacting with AniList's anime-related queries.
	 * @type {AnimeService}
	 */
	anime: AnimeService;

	/**
	 * Service class for interacting with AniList's character-related queries.
	 * @type {CharacterService}
	 */
	character: CharacterService;

	/**
	 * Low-level GraphQL access for every AniList query and mutation.
	 * @type {GraphQLService}
	 */
	graphql: GraphQLService;

	/**
	 * Service class for interacting with AniList's manga-related queries.
	 * @type {MangaService}
	 */
	manga: MangaService;

	/**
	 * Service class for interacting with AniList's media-related queries.
	 * @type {MediaService}
	 */
	media: MediaService;

	/**
	 * Service class for interacting with AniList's media list-related queries.
	 * @type {MediaListService}
	 */
	mediaList: MediaListService;

	/**
	 * Service class for interacting with AniList social and forum queries.
	 * @type {SocialService}
	 */
	social: SocialService;

	/**
	 * Service class for interacting with AniList staff-related queries.
	 * @type {StaffService}
	 */
	staff: StaffService;

	/**
	 * Service class for interacting with AniList studio-related queries.
	 * @type {StudioService}
	 */
	studio: StudioService;

	/**
	 * Service class for interacting with AniList user-related queries.
	 * @type {UserService}
	 */
	user: UserService;
}

export type {
	ApiCoreError,
	ApiPlugin,
	GraphQLErrorDetail,
	RateLimitPluginOptions,
	RetryConfig,
	Transport,
} from "@api-wrappers/api-core";
export {
	ApiError,
	createRateLimitPlugin,
	GraphQLRequestError,
	gql,
	isApiError,
	isGraphQLRequestError,
	isRateLimitError,
	isTimeoutError,
	RateLimitError,
	TimeoutError,
} from "@api-wrappers/api-core";
export * from "./__generated__/anilist-schema";
export * as AniListOperations from "./__generated__/anilist-sdk";
export type { AnilistClientOptions } from "./client";
export { createClient, createGraphQLClient, createSdkClient } from "./client";
export type {
	ActivityReplyPageSelect,
	ActivityReplySelect,
	AiringSchedulePageSelect,
	AiringScheduleSelect,
	CharacterPageSelect,
	CharacterSelect,
	DeletedSelect,
	FavouritesSelect,
	FollowersPageSelect,
	FollowingPageSelect,
	MediaListCollectionSelect,
	MediaListSelect,
	MediaPageSelect,
	MediaSelect,
	MediaTagSelect,
	PageInfoSelect,
	ParsedMarkdownSelect,
	RecommendationPageSelect,
	RecommendationSelect,
	ReviewPageSelect,
	ReviewSelect,
	SelectedActivityReply,
	SelectedActivityReplyPage,
	SelectedAiringSchedule,
	SelectedAiringSchedulePage,
	SelectedCharacter,
	SelectedCharacterPage,
	SelectedDeleted,
	SelectedFavourites,
	SelectedFields,
	SelectedFollowersPage,
	SelectedFollowingPage,
	SelectedMedia,
	SelectedMediaList,
	SelectedMediaListCollection,
	SelectedMediaPage,
	SelectedMediaTag,
	SelectedParsedMarkdown,
	SelectedRecommendation,
	SelectedRecommendationPage,
	SelectedReview,
	SelectedReviewPage,
	SelectedSiteStatistics,
	SelectedStaff,
	SelectedStaffPage,
	SelectedStudio,
	SelectedStudioPage,
	SelectedThread,
	SelectedThreadComment,
	SelectedThreadCommentPage,
	SelectedThreadPage,
	SelectedUser,
	SelectedUserPage,
	SelectedUserStatisticTypes,
	SiteStatisticsSelect,
	StaffPageSelect,
	StaffSelect,
	StudioPageSelect,
	StudioSelect,
	ThreadCommentPageSelect,
	ThreadCommentSelect,
	ThreadPageSelect,
	ThreadSelect,
	ToSelect,
	UserPageSelect,
	UserSelect,
	UserStatisticTypesSelect,
} from "./selections";
export type { GraphQLDocument } from "./services/graphqlService";
export type {
	SaveMediaListEntryInput,
	UpdateMediaListEntriesInput,
} from "./services/mediaListService";
export type { ThreadSearchFilters } from "./services/socialService";
export type { StudioSearchFilters } from "./services/studioService";
export { Anilist, Anilist as AniList };
