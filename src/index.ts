import type { BaseHttpClient } from "@api-wrappers/api-core";
import type { ANILISTSDK } from "./@types";
import type { GraphQLClient } from "./__generated__/anilist-sdk";
import { type AnilistClientInput, createClientBundle } from "./client";
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

/** Main class for interacting with the AniList API. */
class Anilist {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient;
	readonly http: BaseHttpClient;

	constructor();
	constructor(token: string);
	constructor(options: Exclude<AnilistClientInput, string | undefined>);
	constructor(input?: AnilistClientInput) {
		const { graphQLClient, httpClient, sdkClient } = createClientBundle(input);
		this.http = httpClient;
		this.graphQLClient = graphQLClient;
		this.client = sdkClient;

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

	/** Releases resources held by api-core plugins and transports. */
	dispose(): Promise<void> {
		return this.http.dispose();
	}

	anime: AnimeService;
	character: CharacterService;
	graphql: GraphQLService;
	manga: MangaService;
	media: MediaService;
	mediaList: MediaListService;
	social: SocialService;
	staff: StaffService;
	studio: StudioService;
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
export type {
	AnilistClientBundle,
	AnilistClientInput,
	AnilistOptions,
	AnilistRequestOptions,
	AnilistToken,
} from "./client";
export {
	createClient,
	createClientBundle,
	createGraphQLClient,
	createHttpClient,
	createSdkClient,
} from "./client";
export type {
	ExtractedPage,
	PageExtractor,
	PageFetcher,
	PageInfoLike,
	PaginateOptions,
} from "./pagination";
export { collectPages, paginate } from "./pagination";
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
export type { SaveReviewInput } from "./services/mediaService";
export type {
	SaveActivityReplyInput,
	SaveMessageActivityInput,
	SaveTextActivityInput,
	SaveThreadCommentInput,
	SaveThreadInput,
	ThreadSearchFilters,
} from "./services/socialService";
export {
	ANILIST_MAX_PER_PAGE,
	assertPositiveInt,
	normalizePerPage,
} from "./services/validation";
export { Anilist, Anilist as AniList };
