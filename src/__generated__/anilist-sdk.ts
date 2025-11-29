import type { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	CountryCode: { input: any; output: any };
	FuzzyDateInt: { input: any; output: any };
	Json: { input: any; output: any };
};

/** Activity sort enums */
export enum ActivitySort {
	Id = "ID",
	IdDesc = "ID_DESC",
	Pinned = "PINNED",
}

/** Activity type enum. */
export enum ActivityType {
	/** A anime list update activity */
	AnimeList = "ANIME_LIST",
	/** A manga list update activity */
	MangaList = "MANGA_LIST",
	/** Anime & Manga list update, only used in query arguments */
	MediaList = "MEDIA_LIST",
	/** A text message activity sent to another user */
	Message = "MESSAGE",
	/** A text activity */
	Text = "TEXT",
}

export type AiringScheduleInput = {
	airingAt: InputMaybe<Scalars["Int"]["input"]>;
	episode: InputMaybe<Scalars["Int"]["input"]>;
	timeUntilAiring: InputMaybe<Scalars["Int"]["input"]>;
};

/** Airing schedule sort enums */
export enum AiringSort {
	Episode = "EPISODE",
	EpisodeDesc = "EPISODE_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	MediaId = "MEDIA_ID",
	MediaIdDesc = "MEDIA_ID_DESC",
	Time = "TIME",
	TimeDesc = "TIME_DESC",
}

export type AniChartHighlightInput = {
	highlight: InputMaybe<Scalars["String"]["input"]>;
	mediaId: InputMaybe<Scalars["Int"]["input"]>;
};

/** The names of the character */
export type CharacterNameInput = {
	/** Other names the character might be referred by */
	alternative: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** Other names the character might be referred to as but are spoilers */
	alternativeSpoiler: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The character's given name */
	first: InputMaybe<Scalars["String"]["input"]>;
	/** The character's surname */
	last: InputMaybe<Scalars["String"]["input"]>;
	/** The character's middle name */
	middle: InputMaybe<Scalars["String"]["input"]>;
	/** The character's full name in their native language */
	native: InputMaybe<Scalars["String"]["input"]>;
};

/** The role the character plays in the media */
export enum CharacterRole {
	/** A background character in the media */
	Background = "BACKGROUND",
	/** A primary character role in the media */
	Main = "MAIN",
	/** A supporting character role in the media */
	Supporting = "SUPPORTING",
}

/** Character sort enums */
export enum CharacterSort {
	Favourites = "FAVOURITES",
	FavouritesDesc = "FAVOURITES_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	/** Order manually decided by moderators */
	Relevance = "RELEVANCE",
	Role = "ROLE",
	RoleDesc = "ROLE_DESC",
	SearchMatch = "SEARCH_MATCH",
}

export enum ExternalLinkMediaType {
	Anime = "ANIME",
	Manga = "MANGA",
	Staff = "STAFF",
}

export enum ExternalLinkType {
	Info = "INFO",
	Social = "SOCIAL",
	Streaming = "STREAMING",
}

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
	/** Numeric Day (24) */
	day: InputMaybe<Scalars["Int"]["input"]>;
	/** Numeric Month (3) */
	month: InputMaybe<Scalars["Int"]["input"]>;
	/** Numeric Year (2017) */
	year: InputMaybe<Scalars["Int"]["input"]>;
};

/** Types that can be liked */
export enum LikeableType {
	Activity = "ACTIVITY",
	ActivityReply = "ACTIVITY_REPLY",
	Thread = "THREAD",
	ThreadComment = "THREAD_COMMENT",
}

export type ListActivityOptionInput = {
	disabled: InputMaybe<Scalars["Boolean"]["input"]>;
	type: InputMaybe<MediaListStatus>;
};

/** An external link to another site related to the media */
export type MediaExternalLinkInput = {
	/** The id of the external link */
	id: Scalars["Int"]["input"];
	/** The site location of the external link */
	site: Scalars["String"]["input"];
	/** The url of the external link */
	url: Scalars["String"]["input"];
};

/** The format the media was released in */
export enum MediaFormat {
	/** Professionally published manga with more than one chapter */
	Manga = "MANGA",
	/** Anime movies with a theatrical release */
	Movie = "MOVIE",
	/** Short anime released as a music video */
	Music = "MUSIC",
	/** Written books released as a series of light novels */
	Novel = "NOVEL",
	/** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
	Ona = "ONA",
	/** Manga with just one chapter */
	OneShot = "ONE_SHOT",
	/** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
	Ova = "OVA",
	/** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
	Special = "SPECIAL",
	/** Anime broadcast on television */
	Tv = "TV",
	/** Anime which are under 15 minutes in length and broadcast on television */
	TvShort = "TV_SHORT",
}

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
	/** The names of the user's advanced scoring sections */
	advancedScoring: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** If advanced scoring is enabled */
	advancedScoringEnabled: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The names of the user's custom lists */
	customLists: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The order each list should be displayed in */
	sectionOrder: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** If the completed sections of the list should be separated by format */
	splitCompletedSectionByFormat: InputMaybe<Scalars["Boolean"]["input"]>;
	/** list theme */
	theme: InputMaybe<Scalars["String"]["input"]>;
};

/** Media list sort enums */
export enum MediaListSort {
	AddedTime = "ADDED_TIME",
	AddedTimeDesc = "ADDED_TIME_DESC",
	FinishedOn = "FINISHED_ON",
	FinishedOnDesc = "FINISHED_ON_DESC",
	MediaId = "MEDIA_ID",
	MediaIdDesc = "MEDIA_ID_DESC",
	MediaPopularity = "MEDIA_POPULARITY",
	MediaPopularityDesc = "MEDIA_POPULARITY_DESC",
	MediaTitleEnglish = "MEDIA_TITLE_ENGLISH",
	MediaTitleEnglishDesc = "MEDIA_TITLE_ENGLISH_DESC",
	MediaTitleNative = "MEDIA_TITLE_NATIVE",
	MediaTitleNativeDesc = "MEDIA_TITLE_NATIVE_DESC",
	MediaTitleRomaji = "MEDIA_TITLE_ROMAJI",
	MediaTitleRomajiDesc = "MEDIA_TITLE_ROMAJI_DESC",
	Priority = "PRIORITY",
	PriorityDesc = "PRIORITY_DESC",
	Progress = "PROGRESS",
	ProgressDesc = "PROGRESS_DESC",
	ProgressVolumes = "PROGRESS_VOLUMES",
	ProgressVolumesDesc = "PROGRESS_VOLUMES_DESC",
	Repeat = "REPEAT",
	RepeatDesc = "REPEAT_DESC",
	Score = "SCORE",
	ScoreDesc = "SCORE_DESC",
	StartedOn = "STARTED_ON",
	StartedOnDesc = "STARTED_ON_DESC",
	Status = "STATUS",
	StatusDesc = "STATUS_DESC",
	UpdatedTime = "UPDATED_TIME",
	UpdatedTimeDesc = "UPDATED_TIME_DESC",
}

/** Media list watching/reading status enum. */
export enum MediaListStatus {
	/** Finished watching/reading */
	Completed = "COMPLETED",
	/** Currently watching/reading */
	Current = "CURRENT",
	/** Stopped watching/reading before completing */
	Dropped = "DROPPED",
	/** Paused watching/reading */
	Paused = "PAUSED",
	/** Planning to watch/read */
	Planning = "PLANNING",
	/** Re-watching/reading */
	Repeating = "REPEATING",
}

/** The type of ranking */
export enum MediaRankType {
	/** Ranking is based on the media's popularity */
	Popular = "POPULAR",
	/** Ranking is based on the media's ratings/score */
	Rated = "RATED",
}

/** Type of relation media has to its parent. */
export enum MediaRelation {
	/** An adaption of this media into a different format */
	Adaptation = "ADAPTATION",
	/** An alternative version of the same media */
	Alternative = "ALTERNATIVE",
	/** Shares at least 1 character */
	Character = "CHARACTER",
	/** Version 2 only. */
	Compilation = "COMPILATION",
	/** Version 2 only. */
	Contains = "CONTAINS",
	/** Other */
	Other = "OTHER",
	/** The media a side story is from */
	Parent = "PARENT",
	/** Released before the relation */
	Prequel = "PREQUEL",
	/** Released after the relation */
	Sequel = "SEQUEL",
	/** A side story of the parent media */
	SideStory = "SIDE_STORY",
	/** Version 2 only. The source material the media was adapted from */
	Source = "SOURCE",
	/** An alternative version of the media with a different primary focus */
	SpinOff = "SPIN_OFF",
	/** A shortened and summarized version */
	Summary = "SUMMARY",
}

export enum MediaSeason {
	/** Months September to November */
	Fall = "FALL",
	/** Months March to May */
	Spring = "SPRING",
	/** Months June to August */
	Summer = "SUMMER",
	/** Months December to February */
	Winter = "WINTER",
}

/** Media sort enums */
export enum MediaSort {
	Chapters = "CHAPTERS",
	ChaptersDesc = "CHAPTERS_DESC",
	Duration = "DURATION",
	DurationDesc = "DURATION_DESC",
	EndDate = "END_DATE",
	EndDateDesc = "END_DATE_DESC",
	Episodes = "EPISODES",
	EpisodesDesc = "EPISODES_DESC",
	Favourites = "FAVOURITES",
	FavouritesDesc = "FAVOURITES_DESC",
	Format = "FORMAT",
	FormatDesc = "FORMAT_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	Popularity = "POPULARITY",
	PopularityDesc = "POPULARITY_DESC",
	Score = "SCORE",
	ScoreDesc = "SCORE_DESC",
	SearchMatch = "SEARCH_MATCH",
	StartDate = "START_DATE",
	StartDateDesc = "START_DATE_DESC",
	Status = "STATUS",
	StatusDesc = "STATUS_DESC",
	TitleEnglish = "TITLE_ENGLISH",
	TitleEnglishDesc = "TITLE_ENGLISH_DESC",
	TitleNative = "TITLE_NATIVE",
	TitleNativeDesc = "TITLE_NATIVE_DESC",
	TitleRomaji = "TITLE_ROMAJI",
	TitleRomajiDesc = "TITLE_ROMAJI_DESC",
	Trending = "TRENDING",
	TrendingDesc = "TRENDING_DESC",
	Type = "TYPE",
	TypeDesc = "TYPE_DESC",
	UpdatedAt = "UPDATED_AT",
	UpdatedAtDesc = "UPDATED_AT_DESC",
	Volumes = "VOLUMES",
	VolumesDesc = "VOLUMES_DESC",
}

/** Source type the media was adapted from */
export enum MediaSource {
	/** Version 2+ only. Japanese Anime */
	Anime = "ANIME",
	/** Version 3 only. Comics excluding manga */
	Comic = "COMIC",
	/** Version 2+ only. Self-published works */
	Doujinshi = "DOUJINSHI",
	/** Version 3 only. Games excluding video games */
	Game = "GAME",
	/** Written work published in volumes */
	LightNovel = "LIGHT_NOVEL",
	/** Version 3 only. Live action media such as movies or TV show */
	LiveAction = "LIVE_ACTION",
	/** Asian comic book */
	Manga = "MANGA",
	/** Version 3 only. Multimedia project */
	MultimediaProject = "MULTIMEDIA_PROJECT",
	/** Version 2+ only. Written works not published in volumes */
	Novel = "NOVEL",
	/** An original production not based of another work */
	Original = "ORIGINAL",
	/** Other */
	Other = "OTHER",
	/** Version 3 only. Picture book */
	PictureBook = "PICTURE_BOOK",
	/** Video game */
	VideoGame = "VIDEO_GAME",
	/** Video game driven primary by text and narrative */
	VisualNovel = "VISUAL_NOVEL",
	/** Version 3 only. Written works published online */
	WebNovel = "WEB_NOVEL",
}

/** The current releasing status of the media */
export enum MediaStatus {
	/** Ended before the work could be finished */
	Cancelled = "CANCELLED",
	/** Has completed and is no longer being released */
	Finished = "FINISHED",
	/** Version 2 only. Is currently paused from releasing and will resume at a later date */
	Hiatus = "HIATUS",
	/** To be released at a later date */
	NotYetReleased = "NOT_YET_RELEASED",
	/** Currently releasing */
	Releasing = "RELEASING",
}

/** The official titles of the media in various languages */
export type MediaTitleInput = {
	/** The official english title */
	english: InputMaybe<Scalars["String"]["input"]>;
	/** Official title in it's native language */
	native: InputMaybe<Scalars["String"]["input"]>;
	/** The romanization of the native language title */
	romaji: InputMaybe<Scalars["String"]["input"]>;
};

/** Media trend sort enums */
export enum MediaTrendSort {
	Date = "DATE",
	DateDesc = "DATE_DESC",
	Episode = "EPISODE",
	EpisodeDesc = "EPISODE_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	MediaId = "MEDIA_ID",
	MediaIdDesc = "MEDIA_ID_DESC",
	Popularity = "POPULARITY",
	PopularityDesc = "POPULARITY_DESC",
	Score = "SCORE",
	ScoreDesc = "SCORE_DESC",
	Trending = "TRENDING",
	TrendingDesc = "TRENDING_DESC",
}

/** Media type enum, anime or manga. */
export enum MediaType {
	/** Japanese Anime */
	Anime = "ANIME",
	/** Asian comic */
	Manga = "MANGA",
}

export enum ModActionType {
	Anon = "ANON",
	Ban = "BAN",
	Delete = "DELETE",
	Edit = "EDIT",
	Expire = "EXPIRE",
	Note = "NOTE",
	Report = "REPORT",
	Reset = "RESET",
}

/** Mod role enums */
export enum ModRole {
	/** An AniList administrator */
	Admin = "ADMIN",
	/** An anime data moderator */
	AnimeData = "ANIME_DATA",
	/** A character data moderator */
	CharacterData = "CHARACTER_DATA",
	/** A community moderator */
	Community = "COMMUNITY",
	/** An AniList developer */
	Developer = "DEVELOPER",
	/** A discord community moderator */
	DiscordCommunity = "DISCORD_COMMUNITY",
	/** A lead anime data moderator */
	LeadAnimeData = "LEAD_ANIME_DATA",
	/** A lead community moderator */
	LeadCommunity = "LEAD_COMMUNITY",
	/** A head developer of AniList */
	LeadDeveloper = "LEAD_DEVELOPER",
	/** A lead manga data moderator */
	LeadMangaData = "LEAD_MANGA_DATA",
	/** A lead social media moderator */
	LeadSocialMedia = "LEAD_SOCIAL_MEDIA",
	/** A manga data moderator */
	MangaData = "MANGA_DATA",
	/** A retired moderator */
	Retired = "RETIRED",
	/** A social media moderator */
	SocialMedia = "SOCIAL_MEDIA",
	/** A staff data moderator */
	StaffData = "STAFF_DATA",
}

/** Notification option input */
export type NotificationOptionInput = {
	/** Whether this type of notification is enabled */
	enabled: InputMaybe<Scalars["Boolean"]["input"]>;
	/** The type of notification */
	type: InputMaybe<NotificationType>;
};

/** Notification type enum */
export enum NotificationType {
	/** A user has liked your activity */
	ActivityLike = "ACTIVITY_LIKE",
	/** A user has mentioned you in their activity */
	ActivityMention = "ACTIVITY_MENTION",
	/** A user has sent you message */
	ActivityMessage = "ACTIVITY_MESSAGE",
	/** A user has replied to your activity */
	ActivityReply = "ACTIVITY_REPLY",
	/** A user has liked your activity reply */
	ActivityReplyLike = "ACTIVITY_REPLY_LIKE",
	/** A user has replied to activity you have also replied to */
	ActivityReplySubscribed = "ACTIVITY_REPLY_SUBSCRIBED",
	/** An anime you are currently watching has aired */
	Airing = "AIRING",
	/** A user has followed you */
	Following = "FOLLOWING",
	/** An anime or manga has had a data change that affects how a user may track it in their lists */
	MediaDataChange = "MEDIA_DATA_CHANGE",
	/** An anime or manga on the user's list has been deleted from the site */
	MediaDeletion = "MEDIA_DELETION",
	/** Anime or manga entries on the user's list have been merged into a single entry */
	MediaMerge = "MEDIA_MERGE",
	/** A new anime or manga has been added to the site where its related media is on the user's list */
	RelatedMediaAddition = "RELATED_MEDIA_ADDITION",
	/** A user has liked your forum comment */
	ThreadCommentLike = "THREAD_COMMENT_LIKE",
	/** A user has mentioned you in a forum comment */
	ThreadCommentMention = "THREAD_COMMENT_MENTION",
	/** A user has replied to your forum comment */
	ThreadCommentReply = "THREAD_COMMENT_REPLY",
	/** A user has liked your forum thread */
	ThreadLike = "THREAD_LIKE",
	/** A user has commented in one of your subscribed forum threads */
	ThreadSubscribed = "THREAD_SUBSCRIBED",
}

/** Recommendation rating enums */
export enum RecommendationRating {
	NoRating = "NO_RATING",
	RateDown = "RATE_DOWN",
	RateUp = "RATE_UP",
}

/** Recommendation sort enums */
export enum RecommendationSort {
	Id = "ID",
	IdDesc = "ID_DESC",
	Rating = "RATING",
	RatingDesc = "RATING_DESC",
}

/** Review rating enums */
export enum ReviewRating {
	DownVote = "DOWN_VOTE",
	NoVote = "NO_VOTE",
	UpVote = "UP_VOTE",
}

/** Review sort enums */
export enum ReviewSort {
	CreatedAt = "CREATED_AT",
	CreatedAtDesc = "CREATED_AT_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	Rating = "RATING",
	RatingDesc = "RATING_DESC",
	Score = "SCORE",
	ScoreDesc = "SCORE_DESC",
	UpdatedAt = "UPDATED_AT",
	UpdatedAtDesc = "UPDATED_AT_DESC",
}

/** Revision history actions */
export enum RevisionHistoryAction {
	Create = "CREATE",
	Edit = "EDIT",
}

/** Media list scoring type */
export enum ScoreFormat {
	/** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
	Point_3 = "POINT_3",
	/** An integer from 0-5. Should be represented in Stars */
	Point_5 = "POINT_5",
	/** An integer from 0-10 */
	Point_10 = "POINT_10",
	/** A float from 0-10 with 1 decimal place */
	Point_10Decimal = "POINT_10_DECIMAL",
	/** An integer from 0-100 */
	Point_100 = "POINT_100",
}

/** Site trend sort enums */
export enum SiteTrendSort {
	Change = "CHANGE",
	ChangeDesc = "CHANGE_DESC",
	Count = "COUNT",
	CountDesc = "COUNT_DESC",
	Date = "DATE",
	DateDesc = "DATE_DESC",
}

/** The primary language of the voice actor */
export enum StaffLanguage {
	/** English */
	English = "ENGLISH",
	/** French */
	French = "FRENCH",
	/** German */
	German = "GERMAN",
	/** Hebrew */
	Hebrew = "HEBREW",
	/** Hungarian */
	Hungarian = "HUNGARIAN",
	/** Italian */
	Italian = "ITALIAN",
	/** Japanese */
	Japanese = "JAPANESE",
	/** Korean */
	Korean = "KOREAN",
	/** Portuguese */
	Portuguese = "PORTUGUESE",
	/** Spanish */
	Spanish = "SPANISH",
}

/** The names of the staff member */
export type StaffNameInput = {
	/** Other names the character might be referred by */
	alternative: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
	/** The person's given name */
	first: InputMaybe<Scalars["String"]["input"]>;
	/** The person's surname */
	last: InputMaybe<Scalars["String"]["input"]>;
	/** The person's middle name */
	middle: InputMaybe<Scalars["String"]["input"]>;
	/** The person's full name in their native language */
	native: InputMaybe<Scalars["String"]["input"]>;
};

/** Staff sort enums */
export enum StaffSort {
	Favourites = "FAVOURITES",
	FavouritesDesc = "FAVOURITES_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	Language = "LANGUAGE",
	LanguageDesc = "LANGUAGE_DESC",
	/** Order manually decided by moderators */
	Relevance = "RELEVANCE",
	Role = "ROLE",
	RoleDesc = "ROLE_DESC",
	SearchMatch = "SEARCH_MATCH",
}

/** Studio sort enums */
export enum StudioSort {
	Favourites = "FAVOURITES",
	FavouritesDesc = "FAVOURITES_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	Name = "NAME",
	NameDesc = "NAME_DESC",
	SearchMatch = "SEARCH_MATCH",
}

/** Submission sort enums */
export enum SubmissionSort {
	Id = "ID",
	IdDesc = "ID_DESC",
}

/** Submission status */
export enum SubmissionStatus {
	Accepted = "ACCEPTED",
	PartiallyAccepted = "PARTIALLY_ACCEPTED",
	Pending = "PENDING",
	Rejected = "REJECTED",
}

/** Thread comments sort enums */
export enum ThreadCommentSort {
	Id = "ID",
	IdDesc = "ID_DESC",
}

/** Thread sort enums */
export enum ThreadSort {
	CreatedAt = "CREATED_AT",
	CreatedAtDesc = "CREATED_AT_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	IsSticky = "IS_STICKY",
	RepliedAt = "REPLIED_AT",
	RepliedAtDesc = "REPLIED_AT_DESC",
	ReplyCount = "REPLY_COUNT",
	ReplyCountDesc = "REPLY_COUNT_DESC",
	SearchMatch = "SEARCH_MATCH",
	Title = "TITLE",
	TitleDesc = "TITLE_DESC",
	UpdatedAt = "UPDATED_AT",
	UpdatedAtDesc = "UPDATED_AT_DESC",
	ViewCount = "VIEW_COUNT",
	ViewCountDesc = "VIEW_COUNT_DESC",
}

/** User sort enums */
export enum UserSort {
	ChaptersRead = "CHAPTERS_READ",
	ChaptersReadDesc = "CHAPTERS_READ_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	SearchMatch = "SEARCH_MATCH",
	Username = "USERNAME",
	UsernameDesc = "USERNAME_DESC",
	WatchedTime = "WATCHED_TIME",
	WatchedTimeDesc = "WATCHED_TIME_DESC",
}

/** The language the user wants to see staff and character names in */
export enum UserStaffNameLanguage {
	/** The staff or character's name in their native language */
	Native = "NATIVE",
	/** The romanization of the staff or character's native name */
	Romaji = "ROMAJI",
	/** The romanization of the staff or character's native name, with western name ordering */
	RomajiWestern = "ROMAJI_WESTERN",
}

/** User statistics sort enum */
export enum UserStatisticsSort {
	Count = "COUNT",
	CountDesc = "COUNT_DESC",
	Id = "ID",
	IdDesc = "ID_DESC",
	MeanScore = "MEAN_SCORE",
	MeanScoreDesc = "MEAN_SCORE_DESC",
	Progress = "PROGRESS",
	ProgressDesc = "PROGRESS_DESC",
}

/** The language the user wants to see media titles in */
export enum UserTitleLanguage {
	/** The official english title */
	English = "ENGLISH",
	/** The official english title, stylised by media creator */
	EnglishStylised = "ENGLISH_STYLISED",
	/** Official title in it's native language */
	Native = "NATIVE",
	/** Official title in it's native language, stylised by media creator */
	NativeStylised = "NATIVE_STYLISED",
	/** The romanization of the native language title */
	Romaji = "ROMAJI",
	/** The romanization of the native language title, stylised by media creator */
	RomajiStylised = "ROMAJI_STYLISED",
}

export type AnimeFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	nextAiringEpisode: {
		id: number;
		airingAt: number;
		timeUntilAiring: number;
		episode: number;
		mediaId: number;
	} | null;
	streamingEpisodes: Array<{
		title: string | null;
		thumbnail: string | null;
		url: string | null;
		site: string | null;
	} | null> | null;
	studios: {
		edges: Array<{
			isMain: boolean;
			favouriteOrder: number | null;
			node: {
				id: number;
				name: string;
				isAnimationStudio: boolean;
				favourites: number | null;
				isFavourite: boolean;
				siteUrl: string | null;
			} | null;
		} | null> | null;
	} | null;
	relations: {
		edges: Array<{
			id: number | null;
			relationType: MediaRelation | null;
			isMainStudio: boolean;
			characterRole: CharacterRole | null;
			characterName: string | null;
			roleNotes: string | null;
			dubGroup: string | null;
			staffRole: string | null;
			favouriteOrder: number | null;
			node: {
				id: number;
				type: MediaType | null;
				format: MediaFormat | null;
				status: MediaStatus | null;
				season: MediaSeason | null;
				seasonYear: number | null;
				episodes: number | null;
				chapters: number | null;
				volumes: number | null;
				duration: number | null;
				averageScore: number | null;
				popularity: number | null;
				favourites: number | null;
				genres: Array<string | null> | null;
				isAdult: boolean | null;
				countryOfOrigin: any | null;
				siteUrl: string | null;
				title: {
					romaji: string | null;
					english: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
				coverImage: {
					large: string | null;
					medium: string | null;
					extraLarge: string | null;
					color: string | null;
				} | null;
				startDate: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				endDate: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
	} | null;
	characters: {
		edges: Array<{
			id: number | null;
			role: CharacterRole | null;
			name: string | null;
			favouriteOrder: number | null;
			voiceActors: Array<{
				id: number;
				languageV2: string | null;
				name: { full: string | null; native: string | null } | null;
				image: { large: string | null; medium: string | null } | null;
			} | null> | null;
			voiceActorRoles: Array<{
				roleNotes: string | null;
				dubGroup: string | null;
				voiceActor: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			node: {
				id: number;
				description: string | null;
				gender: string | null;
				age: string | null;
				bloodType: string | null;
				isFavourite: boolean;
				isFavouriteBlocked: boolean;
				favourites: number | null;
				siteUrl: string | null;
				name: {
					alternative: Array<string | null> | null;
					alternativeSpoiler: Array<string | null> | null;
					first: string | null;
					full: string | null;
					last: string | null;
					middle: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
				image: { large: string | null; medium: string | null } | null;
				dateOfBirth: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
		nodes: Array<{
			id: number;
			description: string | null;
			gender: string | null;
			age: string | null;
			bloodType: string | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			favourites: number | null;
			siteUrl: string | null;
			name: {
				alternative: Array<string | null> | null;
				alternativeSpoiler: Array<string | null> | null;
				first: string | null;
				full: string | null;
				last: string | null;
				middle: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
	staff: {
		edges: Array<{
			id: number | null;
			role: string | null;
			favouriteOrder: number | null;
			node: {
				id: number;
				description: string | null;
				primaryOccupations: Array<string | null> | null;
				gender: string | null;
				bloodType: string | null;
				homeTown: string | null;
				languageV2: string | null;
				yearsActive: Array<number | null> | null;
				favourites: number | null;
				isFavourite: boolean;
				isFavouriteBlocked: boolean;
				age: number | null;
				siteUrl: string | null;
				name: {
					full: string | null;
					native: string | null;
					first: string | null;
					middle: string | null;
					last: string | null;
					userPreferred: string | null;
				} | null;
				image: { large: string | null; medium: string | null } | null;
				dateOfBirth: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				dateOfDeath: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
		nodes: Array<{
			id: number;
			description: string | null;
			primaryOccupations: Array<string | null> | null;
			gender: string | null;
			bloodType: string | null;
			homeTown: string | null;
			languageV2: string | null;
			yearsActive: Array<number | null> | null;
			favourites: number | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			age: number | null;
			siteUrl: string | null;
			name: {
				full: string | null;
				native: string | null;
				first: string | null;
				middle: string | null;
				last: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			dateOfDeath: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
	tags: Array<{
		id: number;
		name: string;
		description: string | null;
		category: string | null;
		rank: number | null;
		isGeneralSpoiler: boolean | null;
		isMediaSpoiler: boolean | null;
		isAdult: boolean | null;
		userId: number | null;
	} | null> | null;
	rankings: Array<{
		id: number;
		rank: number;
		type: MediaRankType;
		format: MediaFormat;
		year: number | null;
		season: MediaSeason | null;
		allTime: boolean | null;
		context: string;
	} | null> | null;
	externalLinks: Array<{
		id: number;
		url: string | null;
		site: string;
		siteId: number | null;
		type: ExternalLinkType | null;
		language: string | null;
		color: string | null;
		icon: string | null;
		notes: string | null;
		isDisabled: boolean | null;
	} | null> | null;
	stats: {
		scoreDistribution: Array<{
			score: number | null;
			amount: number | null;
		} | null> | null;
		statusDistribution: Array<{
			status: MediaListStatus | null;
			amount: number | null;
		} | null> | null;
		airingProgression: Array<{
			episode: number | null;
			score: number | null;
			watching: number | null;
		} | null> | null;
	} | null;
	trailer: {
		id: string | null;
		site: string | null;
		thumbnail: string | null;
	} | null;
	reviews: { pageInfo: { total: number | null } | null } | null;
	recommendations: { pageInfo: { total: number | null } | null } | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type CharacterFragment = {
	id: number;
	description: string | null;
	gender: string | null;
	age: string | null;
	bloodType: string | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	favourites: number | null;
	siteUrl: string | null;
	name: {
		alternative: Array<string | null> | null;
		alternativeSpoiler: Array<string | null> | null;
		first: string | null;
		full: string | null;
		last: string | null;
		middle: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	image: { large: string | null; medium: string | null } | null;
	dateOfBirth: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type CoverImageFragment = {
	large: string | null;
	medium: string | null;
	extraLarge: string | null;
	color: string | null;
};

export type DateFragment = {
	year: number | null;
	month: number | null;
	day: number | null;
};

export type CharacterImageFragment = {
	large: string | null;
	medium: string | null;
};

export type StaffImageFragment = {
	large: string | null;
	medium: string | null;
};

export type UserAvatarFragment = {
	large: string | null;
	medium: string | null;
};

export type TitleFragment = {
	romaji: string | null;
	english: string | null;
	native: string | null;
	userPreferred: string | null;
};

export type CharacterEdgeFragment = {
	id: number | null;
	role: CharacterRole | null;
	name: string | null;
	favouriteOrder: number | null;
	voiceActors: Array<{
		id: number;
		languageV2: string | null;
		name: { full: string | null; native: string | null } | null;
		image: { large: string | null; medium: string | null } | null;
	} | null> | null;
	voiceActorRoles: Array<{
		roleNotes: string | null;
		dubGroup: string | null;
		voiceActor: { id: number; name: { full: string | null } | null } | null;
	} | null> | null;
	node: {
		id: number;
		description: string | null;
		gender: string | null;
		age: string | null;
		bloodType: string | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		favourites: number | null;
		siteUrl: string | null;
		name: {
			alternative: Array<string | null> | null;
			alternativeSpoiler: Array<string | null> | null;
			first: string | null;
			full: string | null;
			last: string | null;
			middle: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type CharacterConnectionFragment = {
	edges: Array<{
		id: number | null;
		role: CharacterRole | null;
		name: string | null;
		favouriteOrder: number | null;
		voiceActors: Array<{
			id: number;
			languageV2: string | null;
			name: { full: string | null; native: string | null } | null;
			image: { large: string | null; medium: string | null } | null;
		} | null> | null;
		voiceActorRoles: Array<{
			roleNotes: string | null;
			dubGroup: string | null;
			voiceActor: { id: number; name: { full: string | null } | null } | null;
		} | null> | null;
		node: {
			id: number;
			description: string | null;
			gender: string | null;
			age: string | null;
			bloodType: string | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			favourites: number | null;
			siteUrl: string | null;
			name: {
				alternative: Array<string | null> | null;
				alternativeSpoiler: Array<string | null> | null;
				first: string | null;
				full: string | null;
				last: string | null;
				middle: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null;
	} | null> | null;
	nodes: Array<{
		id: number;
		description: string | null;
		gender: string | null;
		age: string | null;
		bloodType: string | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		favourites: number | null;
		siteUrl: string | null;
		name: {
			alternative: Array<string | null> | null;
			alternativeSpoiler: Array<string | null> | null;
			first: string | null;
			full: string | null;
			last: string | null;
			middle: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null> | null;
};

export type MediaRelationNodeFragment = {
	id: number;
	type: MediaType | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	averageScore: number | null;
	popularity: number | null;
	favourites: number | null;
	genres: Array<string | null> | null;
	isAdult: boolean | null;
	countryOfOrigin: any | null;
	siteUrl: string | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaRelationEdgeFragment = {
	id: number | null;
	relationType: MediaRelation | null;
	isMainStudio: boolean;
	characterRole: CharacterRole | null;
	characterName: string | null;
	roleNotes: string | null;
	dubGroup: string | null;
	staffRole: string | null;
	favouriteOrder: number | null;
	node: {
		id: number;
		type: MediaType | null;
		format: MediaFormat | null;
		status: MediaStatus | null;
		season: MediaSeason | null;
		seasonYear: number | null;
		episodes: number | null;
		chapters: number | null;
		volumes: number | null;
		duration: number | null;
		averageScore: number | null;
		popularity: number | null;
		favourites: number | null;
		genres: Array<string | null> | null;
		isAdult: boolean | null;
		countryOfOrigin: any | null;
		siteUrl: string | null;
		title: {
			romaji: string | null;
			english: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		coverImage: {
			large: string | null;
			medium: string | null;
			extraLarge: string | null;
			color: string | null;
		} | null;
		startDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		endDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type MediaRelationConnectionFragment = {
	edges: Array<{
		id: number | null;
		relationType: MediaRelation | null;
		isMainStudio: boolean;
		characterRole: CharacterRole | null;
		characterName: string | null;
		roleNotes: string | null;
		dubGroup: string | null;
		staffRole: string | null;
		favouriteOrder: number | null;
		node: {
			id: number;
			type: MediaType | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			averageScore: number | null;
			popularity: number | null;
			favourites: number | null;
			genres: Array<string | null> | null;
			isAdult: boolean | null;
			countryOfOrigin: any | null;
			siteUrl: string | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null;
	} | null> | null;
};

export type StaffEdgeFragment = {
	id: number | null;
	role: string | null;
	favouriteOrder: number | null;
	node: {
		id: number;
		description: string | null;
		primaryOccupations: Array<string | null> | null;
		gender: string | null;
		bloodType: string | null;
		homeTown: string | null;
		languageV2: string | null;
		yearsActive: Array<number | null> | null;
		favourites: number | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		age: number | null;
		siteUrl: string | null;
		name: {
			full: string | null;
			native: string | null;
			first: string | null;
			middle: string | null;
			last: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		dateOfDeath: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type StaffConnectionFragment = {
	edges: Array<{
		id: number | null;
		role: string | null;
		favouriteOrder: number | null;
		node: {
			id: number;
			description: string | null;
			primaryOccupations: Array<string | null> | null;
			gender: string | null;
			bloodType: string | null;
			homeTown: string | null;
			languageV2: string | null;
			yearsActive: Array<number | null> | null;
			favourites: number | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			age: number | null;
			siteUrl: string | null;
			name: {
				full: string | null;
				native: string | null;
				first: string | null;
				middle: string | null;
				last: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			dateOfDeath: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null;
	} | null> | null;
	nodes: Array<{
		id: number;
		description: string | null;
		primaryOccupations: Array<string | null> | null;
		gender: string | null;
		bloodType: string | null;
		homeTown: string | null;
		languageV2: string | null;
		yearsActive: Array<number | null> | null;
		favourites: number | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		age: number | null;
		siteUrl: string | null;
		name: {
			full: string | null;
			native: string | null;
			first: string | null;
			middle: string | null;
			last: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		dateOfDeath: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null> | null;
};

export type StudioNodeFragment = {
	id: number;
	name: string;
	isAnimationStudio: boolean;
	favourites: number | null;
	isFavourite: boolean;
	siteUrl: string | null;
};

export type StudioEdgeFragment = {
	isMain: boolean;
	favouriteOrder: number | null;
	node: {
		id: number;
		name: string;
		isAnimationStudio: boolean;
		favourites: number | null;
		isFavourite: boolean;
		siteUrl: string | null;
	} | null;
};

export type StudioConnectionFragment = {
	edges: Array<{
		isMain: boolean;
		favouriteOrder: number | null;
		node: {
			id: number;
			name: string;
			isAnimationStudio: boolean;
			favourites: number | null;
			isFavourite: boolean;
			siteUrl: string | null;
		} | null;
	} | null> | null;
};

export type CharacterNameFragment = {
	alternative: Array<string | null> | null;
	alternativeSpoiler: Array<string | null> | null;
	first: string | null;
	full: string | null;
	last: string | null;
	middle: string | null;
	native: string | null;
	userPreferred: string | null;
};

export type CharacterBasicFragment = {
	id: number;
	description: string | null;
	gender: string | null;
	age: string | null;
	bloodType: string | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	favourites: number | null;
	siteUrl: string | null;
	name: {
		alternative: Array<string | null> | null;
		alternativeSpoiler: Array<string | null> | null;
		first: string | null;
		full: string | null;
		last: string | null;
		middle: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	image: { large: string | null; medium: string | null } | null;
	dateOfBirth: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type StaffNameFragment = {
	full: string | null;
	native: string | null;
	first: string | null;
	middle: string | null;
	last: string | null;
	userPreferred: string | null;
};

export type StaffBasicFragment = {
	id: number;
	description: string | null;
	primaryOccupations: Array<string | null> | null;
	gender: string | null;
	bloodType: string | null;
	homeTown: string | null;
	languageV2: string | null;
	yearsActive: Array<number | null> | null;
	favourites: number | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	age: number | null;
	siteUrl: string | null;
	name: {
		full: string | null;
		native: string | null;
		first: string | null;
		middle: string | null;
		last: string | null;
		userPreferred: string | null;
	} | null;
	image: { large: string | null; medium: string | null } | null;
	dateOfBirth: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	dateOfDeath: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type UserOptionsFragment = {
	titleLanguage: UserTitleLanguage | null;
	displayAdultContent: boolean | null;
	airingNotifications: boolean | null;
	profileColor: string | null;
	timezone: string | null;
	activityMergeTime: number | null;
	staffNameLanguage: UserStaffNameLanguage | null;
	restrictMessagesToFollowing: boolean | null;
	notificationOptions: Array<{
		type: NotificationType | null;
		enabled: boolean | null;
	} | null> | null;
	disabledListActivity: Array<{
		disabled: boolean | null;
		type: MediaListStatus | null;
	} | null> | null;
};

export type UserMediaListOptionsFragment = {
	scoreFormat: ScoreFormat | null;
	rowOrder: string | null;
	useLegacyLists: boolean | null;
	sharedTheme: any | null;
	sharedThemeEnabled: boolean | null;
	animeList: {
		sectionOrder: Array<string | null> | null;
		splitCompletedSectionByFormat: boolean | null;
		customLists: Array<string | null> | null;
		advancedScoring: Array<string | null> | null;
		advancedScoringEnabled: boolean | null;
	} | null;
	mangaList: {
		sectionOrder: Array<string | null> | null;
		splitCompletedSectionByFormat: boolean | null;
		customLists: Array<string | null> | null;
		advancedScoring: Array<string | null> | null;
		advancedScoringEnabled: boolean | null;
	} | null;
};

export type UserFavouritesFragment = {
	anime: {
		nodes: Array<{
			id: number;
			title: { romaji: string | null } | null;
		} | null> | null;
	} | null;
	manga: {
		nodes: Array<{
			id: number;
			title: { romaji: string | null } | null;
		} | null> | null;
	} | null;
	characters: {
		nodes: Array<{
			id: number;
			name: { full: string | null } | null;
		} | null> | null;
	} | null;
	staff: {
		nodes: Array<{
			id: number;
			name: { full: string | null } | null;
		} | null> | null;
	} | null;
	studios: { nodes: Array<{ id: number; name: string } | null> | null } | null;
};

export type UserStatisticsFragment = {
	anime: {
		count: number;
		meanScore: number;
		standardDeviation: number;
		minutesWatched: number;
		episodesWatched: number;
		chaptersRead: number;
		volumesRead: number;
		scores: Array<{
			score: number | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		lengths: Array<{
			length: string | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		formats: Array<{
			format: MediaFormat | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		statuses: Array<{
			status: MediaListStatus | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		releaseYears: Array<{
			releaseYear: number | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		startYears: Array<{
			startYear: number | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		genres: Array<{
			genre: string | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		tags: Array<{
			count: number;
			meanScore: number;
			minutesWatched: number;
			tag: { name: string } | null;
		} | null> | null;
		countries: Array<{
			country: any | null;
			count: number;
			meanScore: number;
			minutesWatched: number;
		} | null> | null;
		voiceActors: Array<{
			count: number;
			meanScore: number;
			minutesWatched: number;
			characterIds: Array<number | null>;
			mediaIds: Array<number | null>;
			voiceActor: { id: number; name: { full: string | null } | null } | null;
		} | null> | null;
		staff: Array<{
			count: number;
			meanScore: number;
			minutesWatched: number;
			mediaIds: Array<number | null>;
			staff: { id: number; name: { full: string | null } | null } | null;
		} | null> | null;
		studios: Array<{
			count: number;
			meanScore: number;
			minutesWatched: number;
			mediaIds: Array<number | null>;
			studio: { id: number; name: string } | null;
		} | null> | null;
	} | null;
	manga: {
		count: number;
		meanScore: number;
		standardDeviation: number;
		chaptersRead: number;
		volumesRead: number;
		scores: Array<{
			score: number | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		lengths: Array<{
			length: string | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		formats: Array<{
			format: MediaFormat | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		statuses: Array<{
			status: MediaListStatus | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		releaseYears: Array<{
			releaseYear: number | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		startYears: Array<{
			startYear: number | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		genres: Array<{
			genre: string | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		tags: Array<{
			count: number;
			meanScore: number;
			chaptersRead: number;
			tag: { name: string } | null;
		} | null> | null;
		countries: Array<{
			country: any | null;
			count: number;
			meanScore: number;
			chaptersRead: number;
		} | null> | null;
		staff: Array<{
			count: number;
			meanScore: number;
			chaptersRead: number;
			mediaIds: Array<number | null>;
			staff: { id: number; name: { full: string | null } | null } | null;
		} | null> | null;
		studios: Array<{
			count: number;
			meanScore: number;
			chaptersRead: number;
			mediaIds: Array<number | null>;
			studio: { id: number; name: string } | null;
		} | null> | null;
	} | null;
};

export type UserBasicFragment = {
	id: number;
	name: string;
	about: string | null;
	bannerImage: string | null;
	donatorTier: number | null;
	donatorBadge: string | null;
	isFollowing: boolean | null;
	isFollower: boolean | null;
	isBlocked: boolean | null;
	createdAt: number | null;
	updatedAt: number | null;
	unreadNotificationCount: number | null;
	bans: any | null;
	moderatorRoles: Array<ModRole | null> | null;
	moderatorStatus: string | null;
	siteUrl: string | null;
	avatar: { large: string | null; medium: string | null } | null;
	options: {
		titleLanguage: UserTitleLanguage | null;
		displayAdultContent: boolean | null;
		airingNotifications: boolean | null;
		profileColor: string | null;
		timezone: string | null;
		activityMergeTime: number | null;
		staffNameLanguage: UserStaffNameLanguage | null;
		restrictMessagesToFollowing: boolean | null;
		notificationOptions: Array<{
			type: NotificationType | null;
			enabled: boolean | null;
		} | null> | null;
		disabledListActivity: Array<{
			disabled: boolean | null;
			type: MediaListStatus | null;
		} | null> | null;
	} | null;
	mediaListOptions: {
		scoreFormat: ScoreFormat | null;
		rowOrder: string | null;
		useLegacyLists: boolean | null;
		sharedTheme: any | null;
		sharedThemeEnabled: boolean | null;
		animeList: {
			sectionOrder: Array<string | null> | null;
			splitCompletedSectionByFormat: boolean | null;
			customLists: Array<string | null> | null;
			advancedScoring: Array<string | null> | null;
			advancedScoringEnabled: boolean | null;
		} | null;
		mangaList: {
			sectionOrder: Array<string | null> | null;
			splitCompletedSectionByFormat: boolean | null;
			customLists: Array<string | null> | null;
			advancedScoring: Array<string | null> | null;
			advancedScoringEnabled: boolean | null;
		} | null;
	} | null;
	favourites: {
		anime: {
			nodes: Array<{
				id: number;
				title: { romaji: string | null } | null;
			} | null> | null;
		} | null;
		manga: {
			nodes: Array<{
				id: number;
				title: { romaji: string | null } | null;
			} | null> | null;
		} | null;
		characters: {
			nodes: Array<{
				id: number;
				name: { full: string | null } | null;
			} | null> | null;
		} | null;
		staff: {
			nodes: Array<{
				id: number;
				name: { full: string | null } | null;
			} | null> | null;
		} | null;
		studios: {
			nodes: Array<{ id: number; name: string } | null> | null;
		} | null;
	} | null;
	statistics: {
		anime: {
			count: number;
			meanScore: number;
			standardDeviation: number;
			minutesWatched: number;
			episodesWatched: number;
			chaptersRead: number;
			volumesRead: number;
			scores: Array<{
				score: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			lengths: Array<{
				length: string | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			formats: Array<{
				format: MediaFormat | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			statuses: Array<{
				status: MediaListStatus | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			releaseYears: Array<{
				releaseYear: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			startYears: Array<{
				startYear: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			genres: Array<{
				genre: string | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			tags: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				tag: { name: string } | null;
			} | null> | null;
			countries: Array<{
				country: any | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			voiceActors: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				characterIds: Array<number | null>;
				mediaIds: Array<number | null>;
				voiceActor: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			staff: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				mediaIds: Array<number | null>;
				staff: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			studios: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				mediaIds: Array<number | null>;
				studio: { id: number; name: string } | null;
			} | null> | null;
		} | null;
		manga: {
			count: number;
			meanScore: number;
			standardDeviation: number;
			chaptersRead: number;
			volumesRead: number;
			scores: Array<{
				score: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			lengths: Array<{
				length: string | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			formats: Array<{
				format: MediaFormat | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			statuses: Array<{
				status: MediaListStatus | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			releaseYears: Array<{
				releaseYear: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			startYears: Array<{
				startYear: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			genres: Array<{
				genre: string | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			tags: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				tag: { name: string } | null;
			} | null> | null;
			countries: Array<{
				country: any | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			staff: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				mediaIds: Array<number | null>;
				staff: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			studios: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				mediaIds: Array<number | null>;
				studio: { id: number; name: string } | null;
			} | null> | null;
		} | null;
	} | null;
	stats: { watchedTime: number | null; chaptersRead: number | null } | null;
	previousNames: Array<{
		name: string | null;
		createdAt: number | null;
		updatedAt: number | null;
	} | null> | null;
};

export type MangaFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	relations: {
		edges: Array<{
			id: number | null;
			relationType: MediaRelation | null;
			isMainStudio: boolean;
			characterRole: CharacterRole | null;
			characterName: string | null;
			roleNotes: string | null;
			dubGroup: string | null;
			staffRole: string | null;
			favouriteOrder: number | null;
			node: {
				id: number;
				type: MediaType | null;
				format: MediaFormat | null;
				status: MediaStatus | null;
				season: MediaSeason | null;
				seasonYear: number | null;
				episodes: number | null;
				chapters: number | null;
				volumes: number | null;
				duration: number | null;
				averageScore: number | null;
				popularity: number | null;
				favourites: number | null;
				genres: Array<string | null> | null;
				isAdult: boolean | null;
				countryOfOrigin: any | null;
				siteUrl: string | null;
				title: {
					romaji: string | null;
					english: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
				coverImage: {
					large: string | null;
					medium: string | null;
					extraLarge: string | null;
					color: string | null;
				} | null;
				startDate: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				endDate: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
	} | null;
	characters: {
		edges: Array<{
			id: number | null;
			role: CharacterRole | null;
			name: string | null;
			favouriteOrder: number | null;
			voiceActors: Array<{
				id: number;
				languageV2: string | null;
				name: { full: string | null; native: string | null } | null;
				image: { large: string | null; medium: string | null } | null;
			} | null> | null;
			voiceActorRoles: Array<{
				roleNotes: string | null;
				dubGroup: string | null;
				voiceActor: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			node: {
				id: number;
				description: string | null;
				gender: string | null;
				age: string | null;
				bloodType: string | null;
				isFavourite: boolean;
				isFavouriteBlocked: boolean;
				favourites: number | null;
				siteUrl: string | null;
				name: {
					alternative: Array<string | null> | null;
					alternativeSpoiler: Array<string | null> | null;
					first: string | null;
					full: string | null;
					last: string | null;
					middle: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
				image: { large: string | null; medium: string | null } | null;
				dateOfBirth: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
		nodes: Array<{
			id: number;
			description: string | null;
			gender: string | null;
			age: string | null;
			bloodType: string | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			favourites: number | null;
			siteUrl: string | null;
			name: {
				alternative: Array<string | null> | null;
				alternativeSpoiler: Array<string | null> | null;
				first: string | null;
				full: string | null;
				last: string | null;
				middle: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
	staff: {
		edges: Array<{
			id: number | null;
			role: string | null;
			favouriteOrder: number | null;
			node: {
				id: number;
				description: string | null;
				primaryOccupations: Array<string | null> | null;
				gender: string | null;
				bloodType: string | null;
				homeTown: string | null;
				languageV2: string | null;
				yearsActive: Array<number | null> | null;
				favourites: number | null;
				isFavourite: boolean;
				isFavouriteBlocked: boolean;
				age: number | null;
				siteUrl: string | null;
				name: {
					full: string | null;
					native: string | null;
					first: string | null;
					middle: string | null;
					last: string | null;
					userPreferred: string | null;
				} | null;
				image: { large: string | null; medium: string | null } | null;
				dateOfBirth: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				dateOfDeath: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null;
		} | null> | null;
		nodes: Array<{
			id: number;
			description: string | null;
			primaryOccupations: Array<string | null> | null;
			gender: string | null;
			bloodType: string | null;
			homeTown: string | null;
			languageV2: string | null;
			yearsActive: Array<number | null> | null;
			favourites: number | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			age: number | null;
			siteUrl: string | null;
			name: {
				full: string | null;
				native: string | null;
				first: string | null;
				middle: string | null;
				last: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			dateOfDeath: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
	tags: Array<{
		id: number;
		name: string;
		description: string | null;
		category: string | null;
		rank: number | null;
		isGeneralSpoiler: boolean | null;
		isMediaSpoiler: boolean | null;
		isAdult: boolean | null;
		userId: number | null;
	} | null> | null;
	rankings: Array<{
		id: number;
		rank: number;
		type: MediaRankType;
		format: MediaFormat;
		year: number | null;
		season: MediaSeason | null;
		allTime: boolean | null;
		context: string;
	} | null> | null;
	externalLinks: Array<{
		id: number;
		url: string | null;
		site: string;
		siteId: number | null;
		type: ExternalLinkType | null;
		language: string | null;
		color: string | null;
		icon: string | null;
		notes: string | null;
		isDisabled: boolean | null;
	} | null> | null;
	stats: {
		scoreDistribution: Array<{
			score: number | null;
			amount: number | null;
		} | null> | null;
		statusDistribution: Array<{
			status: MediaListStatus | null;
			amount: number | null;
		} | null> | null;
		airingProgression: Array<{
			episode: number | null;
			score: number | null;
			watching: number | null;
		} | null> | null;
	} | null;
	trailer: {
		id: string | null;
		site: string | null;
		thumbnail: string | null;
	} | null;
	reviews: { pageInfo: { total: number | null } | null } | null;
	recommendations: { pageInfo: { total: number | null } | null } | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	nextAiringEpisode: {
		id: number;
		airingAt: number;
		timeUntilAiring: number;
		episode: number;
		mediaId: number;
	} | null;
	tags: Array<{
		id: number;
		name: string;
		description: string | null;
		category: string | null;
		rank: number | null;
	} | null> | null;
	externalLinks: Array<{
		id: number;
		url: string | null;
		site: string;
		siteId: number | null;
		type: ExternalLinkType | null;
	} | null> | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaCoreFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaDetailedFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	tags: Array<{
		id: number;
		name: string;
		description: string | null;
		category: string | null;
		rank: number | null;
		isGeneralSpoiler: boolean | null;
		isMediaSpoiler: boolean | null;
		isAdult: boolean | null;
		userId: number | null;
	} | null> | null;
	rankings: Array<{
		id: number;
		rank: number;
		type: MediaRankType;
		format: MediaFormat;
		year: number | null;
		season: MediaSeason | null;
		allTime: boolean | null;
		context: string;
	} | null> | null;
	externalLinks: Array<{
		id: number;
		url: string | null;
		site: string;
		siteId: number | null;
		type: ExternalLinkType | null;
		language: string | null;
		color: string | null;
		icon: string | null;
		notes: string | null;
		isDisabled: boolean | null;
	} | null> | null;
	stats: {
		scoreDistribution: Array<{
			score: number | null;
			amount: number | null;
		} | null> | null;
		statusDistribution: Array<{
			status: MediaListStatus | null;
			amount: number | null;
		} | null> | null;
		airingProgression: Array<{
			episode: number | null;
			score: number | null;
			watching: number | null;
		} | null> | null;
	} | null;
	trailer: {
		id: string | null;
		site: string | null;
		thumbnail: string | null;
	} | null;
	reviews: { pageInfo: { total: number | null } | null } | null;
	recommendations: { pageInfo: { total: number | null } | null } | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaBasicFragment = {
	id: number;
	idMal: number | null;
	bannerImage: string | null;
	description: string | null;
	format: MediaFormat | null;
	status: MediaStatus | null;
	type: MediaType | null;
	episodes: number | null;
	chapters: number | null;
	volumes: number | null;
	duration: number | null;
	genres: Array<string | null> | null;
	averageScore: number | null;
	meanScore: number | null;
	popularity: number | null;
	favourites: number | null;
	trending: number | null;
	source: MediaSource | null;
	countryOfOrigin: any | null;
	isAdult: boolean | null;
	isLicensed: boolean | null;
	isLocked: boolean | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	hashtag: string | null;
	synonyms: Array<string | null> | null;
	season: MediaSeason | null;
	seasonYear: number | null;
	siteUrl: string | null;
	updatedAt: number | null;
	autoCreateForumThread: boolean | null;
	isRecommendationBlocked: boolean | null;
	isReviewBlocked: boolean | null;
	modNotes: string | null;
	tags: Array<{
		id: number;
		name: string;
		description: string | null;
		category: string | null;
		rank: number | null;
	} | null> | null;
	externalLinks: Array<{
		id: number;
		url: string | null;
		site: string;
		siteId: number | null;
		type: ExternalLinkType | null;
	} | null> | null;
	title: {
		romaji: string | null;
		english: string | null;
		native: string | null;
		userPreferred: string | null;
	} | null;
	coverImage: {
		large: string | null;
		medium: string | null;
		extraLarge: string | null;
		color: string | null;
	} | null;
	startDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	endDate: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type MediaExternalLinkFragment = {
	id: number;
	url: string | null;
	site: string;
	siteId: number | null;
	type: ExternalLinkType | null;
	language: string | null;
	color: string | null;
	icon: string | null;
	notes: string | null;
	isDisabled: boolean | null;
};

export type MediaExternalLinkBasicFragment = {
	id: number;
	url: string | null;
	site: string;
	siteId: number | null;
	type: ExternalLinkType | null;
};

export type MediaRankFragment = {
	id: number;
	rank: number;
	type: MediaRankType;
	format: MediaFormat;
	year: number | null;
	season: MediaSeason | null;
	allTime: boolean | null;
	context: string;
};

export type ScoreDistributionFragment = {
	score: number | null;
	amount: number | null;
};

export type StatusDistributionFragment = {
	status: MediaListStatus | null;
	amount: number | null;
};

export type MediaStatsFragment = {
	scoreDistribution: Array<{
		score: number | null;
		amount: number | null;
	} | null> | null;
	statusDistribution: Array<{
		status: MediaListStatus | null;
		amount: number | null;
	} | null> | null;
	airingProgression: Array<{
		episode: number | null;
		score: number | null;
		watching: number | null;
	} | null> | null;
};

export type MediaStreamingEpisodeFragment = {
	title: string | null;
	thumbnail: string | null;
	url: string | null;
	site: string | null;
};

export type AiringScheduleFragment = {
	id: number;
	airingAt: number;
	timeUntilAiring: number;
	episode: number;
	mediaId: number;
};

export type MediaTagFragment = {
	id: number;
	name: string;
	description: string | null;
	category: string | null;
	rank: number | null;
	isGeneralSpoiler: boolean | null;
	isMediaSpoiler: boolean | null;
	isAdult: boolean | null;
	userId: number | null;
};

export type MediaTagBasicFragment = {
	id: number;
	name: string;
	description: string | null;
	category: string | null;
	rank: number | null;
};

export type MediaTrailerFragment = {
	id: string | null;
	site: string | null;
	thumbnail: string | null;
};

export type MediaListFragment = {
	id: number;
	mediaId: number;
	userId: number;
	status: MediaListStatus | null;
	score: number | null;
	progress: number | null;
	progressVolumes: number | null;
	repeat: number | null;
	priority: number | null;
	private: boolean | null;
	notes: string | null;
	hiddenFromStatusLists: boolean | null;
	customLists: any | null;
	advancedScores: any | null;
	updatedAt: number | null;
	createdAt: number | null;
	startedAt: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	completedAt: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	media: {
		id: number;
		idMal: number | null;
		bannerImage: string | null;
		description: string | null;
		format: MediaFormat | null;
		status: MediaStatus | null;
		type: MediaType | null;
		episodes: number | null;
		chapters: number | null;
		volumes: number | null;
		duration: number | null;
		genres: Array<string | null> | null;
		averageScore: number | null;
		meanScore: number | null;
		popularity: number | null;
		favourites: number | null;
		trending: number | null;
		source: MediaSource | null;
		countryOfOrigin: any | null;
		isAdult: boolean | null;
		isLicensed: boolean | null;
		isLocked: boolean | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		hashtag: string | null;
		synonyms: Array<string | null> | null;
		season: MediaSeason | null;
		seasonYear: number | null;
		siteUrl: string | null;
		updatedAt: number | null;
		autoCreateForumThread: boolean | null;
		isRecommendationBlocked: boolean | null;
		isReviewBlocked: boolean | null;
		modNotes: string | null;
		title: {
			romaji: string | null;
			english: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		coverImage: {
			large: string | null;
			medium: string | null;
			extraLarge: string | null;
			color: string | null;
		} | null;
		startDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		endDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type StaffFragment = {
	id: number;
	description: string | null;
	primaryOccupations: Array<string | null> | null;
	gender: string | null;
	bloodType: string | null;
	homeTown: string | null;
	languageV2: string | null;
	yearsActive: Array<number | null> | null;
	favourites: number | null;
	isFavourite: boolean;
	isFavouriteBlocked: boolean;
	age: number | null;
	siteUrl: string | null;
	name: {
		full: string | null;
		native: string | null;
		first: string | null;
		middle: string | null;
		last: string | null;
		userPreferred: string | null;
	} | null;
	image: { large: string | null; medium: string | null } | null;
	dateOfBirth: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
	dateOfDeath: {
		year: number | null;
		month: number | null;
		day: number | null;
	} | null;
};

export type StudioFragment = {
	id: number;
	name: string;
	isAnimationStudio: boolean;
	favourites: number | null;
	isFavourite: boolean;
	siteUrl: string | null;
	media: {
		pageInfo: {
			total: number | null;
			perPage: number | null;
			currentPage: number | null;
			lastPage: number | null;
			hasNextPage: boolean | null;
		} | null;
	} | null;
};

export type UserFragment = {
	id: number;
	name: string;
	about: string | null;
	bannerImage: string | null;
	donatorTier: number | null;
	donatorBadge: string | null;
	isFollowing: boolean | null;
	isFollower: boolean | null;
	isBlocked: boolean | null;
	createdAt: number | null;
	updatedAt: number | null;
	unreadNotificationCount: number | null;
	bans: any | null;
	moderatorRoles: Array<ModRole | null> | null;
	moderatorStatus: string | null;
	siteUrl: string | null;
	avatar: { large: string | null; medium: string | null } | null;
	options: {
		titleLanguage: UserTitleLanguage | null;
		displayAdultContent: boolean | null;
		airingNotifications: boolean | null;
		profileColor: string | null;
		timezone: string | null;
		activityMergeTime: number | null;
		staffNameLanguage: UserStaffNameLanguage | null;
		restrictMessagesToFollowing: boolean | null;
		notificationOptions: Array<{
			type: NotificationType | null;
			enabled: boolean | null;
		} | null> | null;
		disabledListActivity: Array<{
			disabled: boolean | null;
			type: MediaListStatus | null;
		} | null> | null;
	} | null;
	mediaListOptions: {
		scoreFormat: ScoreFormat | null;
		rowOrder: string | null;
		useLegacyLists: boolean | null;
		sharedTheme: any | null;
		sharedThemeEnabled: boolean | null;
		animeList: {
			sectionOrder: Array<string | null> | null;
			splitCompletedSectionByFormat: boolean | null;
			customLists: Array<string | null> | null;
			advancedScoring: Array<string | null> | null;
			advancedScoringEnabled: boolean | null;
		} | null;
		mangaList: {
			sectionOrder: Array<string | null> | null;
			splitCompletedSectionByFormat: boolean | null;
			customLists: Array<string | null> | null;
			advancedScoring: Array<string | null> | null;
			advancedScoringEnabled: boolean | null;
		} | null;
	} | null;
	favourites: {
		anime: {
			nodes: Array<{
				id: number;
				title: { romaji: string | null } | null;
			} | null> | null;
		} | null;
		manga: {
			nodes: Array<{
				id: number;
				title: { romaji: string | null } | null;
			} | null> | null;
		} | null;
		characters: {
			nodes: Array<{
				id: number;
				name: { full: string | null } | null;
			} | null> | null;
		} | null;
		staff: {
			nodes: Array<{
				id: number;
				name: { full: string | null } | null;
			} | null> | null;
		} | null;
		studios: {
			nodes: Array<{ id: number; name: string } | null> | null;
		} | null;
	} | null;
	statistics: {
		anime: {
			count: number;
			meanScore: number;
			standardDeviation: number;
			minutesWatched: number;
			episodesWatched: number;
			chaptersRead: number;
			volumesRead: number;
			scores: Array<{
				score: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			lengths: Array<{
				length: string | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			formats: Array<{
				format: MediaFormat | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			statuses: Array<{
				status: MediaListStatus | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			releaseYears: Array<{
				releaseYear: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			startYears: Array<{
				startYear: number | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			genres: Array<{
				genre: string | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			tags: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				tag: { name: string } | null;
			} | null> | null;
			countries: Array<{
				country: any | null;
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null> | null;
			voiceActors: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				characterIds: Array<number | null>;
				mediaIds: Array<number | null>;
				voiceActor: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			staff: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				mediaIds: Array<number | null>;
				staff: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			studios: Array<{
				count: number;
				meanScore: number;
				minutesWatched: number;
				mediaIds: Array<number | null>;
				studio: { id: number; name: string } | null;
			} | null> | null;
		} | null;
		manga: {
			count: number;
			meanScore: number;
			standardDeviation: number;
			chaptersRead: number;
			volumesRead: number;
			scores: Array<{
				score: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			lengths: Array<{
				length: string | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			formats: Array<{
				format: MediaFormat | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			statuses: Array<{
				status: MediaListStatus | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			releaseYears: Array<{
				releaseYear: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			startYears: Array<{
				startYear: number | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			genres: Array<{
				genre: string | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			tags: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				tag: { name: string } | null;
			} | null> | null;
			countries: Array<{
				country: any | null;
				count: number;
				meanScore: number;
				chaptersRead: number;
			} | null> | null;
			staff: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				mediaIds: Array<number | null>;
				staff: { id: number; name: { full: string | null } | null } | null;
			} | null> | null;
			studios: Array<{
				count: number;
				meanScore: number;
				chaptersRead: number;
				mediaIds: Array<number | null>;
				studio: { id: number; name: string } | null;
			} | null> | null;
		} | null;
	} | null;
	stats: { watchedTime: number | null; chaptersRead: number | null } | null;
	previousNames: Array<{
		name: string | null;
		createdAt: number | null;
		updatedAt: number | null;
	} | null> | null;
};

export type GetAnimeByIdQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeByIdQuery = {
	Media: {
		id: number;
		idMal: number | null;
		bannerImage: string | null;
		description: string | null;
		format: MediaFormat | null;
		status: MediaStatus | null;
		type: MediaType | null;
		episodes: number | null;
		chapters: number | null;
		volumes: number | null;
		duration: number | null;
		genres: Array<string | null> | null;
		averageScore: number | null;
		meanScore: number | null;
		popularity: number | null;
		favourites: number | null;
		trending: number | null;
		source: MediaSource | null;
		countryOfOrigin: any | null;
		isAdult: boolean | null;
		isLicensed: boolean | null;
		isLocked: boolean | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		hashtag: string | null;
		synonyms: Array<string | null> | null;
		season: MediaSeason | null;
		seasonYear: number | null;
		siteUrl: string | null;
		updatedAt: number | null;
		autoCreateForumThread: boolean | null;
		isRecommendationBlocked: boolean | null;
		isReviewBlocked: boolean | null;
		modNotes: string | null;
		characters: {
			edges: Array<{
				role: CharacterRole | null;
				node: {
					id: number;
					description: string | null;
					gender: string | null;
					age: string | null;
					bloodType: string | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					favourites: number | null;
					siteUrl: string | null;
					name: {
						alternative: Array<string | null> | null;
						alternativeSpoiler: Array<string | null> | null;
						first: string | null;
						full: string | null;
						last: string | null;
						middle: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
		staff: {
			edges: Array<{
				role: string | null;
				node: {
					id: number;
					description: string | null;
					primaryOccupations: Array<string | null> | null;
					gender: string | null;
					bloodType: string | null;
					homeTown: string | null;
					languageV2: string | null;
					yearsActive: Array<number | null> | null;
					favourites: number | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					age: number | null;
					siteUrl: string | null;
					name: {
						full: string | null;
						native: string | null;
						first: string | null;
						middle: string | null;
						last: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					dateOfDeath: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
		studios: {
			edges: Array<{
				node: {
					id: number;
					name: string;
					isAnimationStudio: boolean;
					favourites: number | null;
					isFavourite: boolean;
					siteUrl: string | null;
					media: {
						pageInfo: {
							total: number | null;
							perPage: number | null;
							currentPage: number | null;
							lastPage: number | null;
							hasNextPage: boolean | null;
						} | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
		nextAiringEpisode: {
			id: number;
			airingAt: number;
			timeUntilAiring: number;
			episode: number;
			mediaId: number;
		} | null;
		tags: Array<{
			id: number;
			name: string;
			description: string | null;
			category: string | null;
			rank: number | null;
		} | null> | null;
		externalLinks: Array<{
			id: number;
			url: string | null;
			site: string;
			siteId: number | null;
			type: ExternalLinkType | null;
		} | null> | null;
		title: {
			romaji: string | null;
			english: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		coverImage: {
			large: string | null;
			medium: string | null;
			extraLarge: string | null;
			color: string | null;
		} | null;
		startDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		endDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type GetAnimeByTitleQueryVariables = Exact<{
	title: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAnimeByTitleQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetAnimeCharactersQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeCharactersQuery = {
	Media: {
		characters: {
			edges: Array<{
				role: CharacterRole | null;
				node: {
					id: number;
					description: string | null;
					gender: string | null;
					age: string | null;
					bloodType: string | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					favourites: number | null;
					siteUrl: string | null;
					name: {
						alternative: Array<string | null> | null;
						alternativeSpoiler: Array<string | null> | null;
						first: string | null;
						full: string | null;
						last: string | null;
						middle: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetAnimeListByGenreQueryVariables = Exact<{
	genre: Scalars["String"]["input"];
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeListByGenreQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetAnimePopularQueryVariables = Exact<{
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimePopularQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetAnimeRecommendationsQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeRecommendationsQuery = {
	Media: {
		recommendations: {
			edges: Array<{
				node: {
					media: {
						id: number;
						idMal: number | null;
						bannerImage: string | null;
						description: string | null;
						format: MediaFormat | null;
						status: MediaStatus | null;
						type: MediaType | null;
						episodes: number | null;
						chapters: number | null;
						volumes: number | null;
						duration: number | null;
						genres: Array<string | null> | null;
						averageScore: number | null;
						meanScore: number | null;
						popularity: number | null;
						favourites: number | null;
						trending: number | null;
						source: MediaSource | null;
						countryOfOrigin: any | null;
						isAdult: boolean | null;
						isLicensed: boolean | null;
						isLocked: boolean | null;
						isFavourite: boolean;
						isFavouriteBlocked: boolean;
						hashtag: string | null;
						synonyms: Array<string | null> | null;
						season: MediaSeason | null;
						seasonYear: number | null;
						siteUrl: string | null;
						updatedAt: number | null;
						autoCreateForumThread: boolean | null;
						isRecommendationBlocked: boolean | null;
						isReviewBlocked: boolean | null;
						modNotes: string | null;
						nextAiringEpisode: {
							id: number;
							airingAt: number;
							timeUntilAiring: number;
							episode: number;
							mediaId: number;
						} | null;
						tags: Array<{
							id: number;
							name: string;
							description: string | null;
							category: string | null;
							rank: number | null;
						} | null> | null;
						externalLinks: Array<{
							id: number;
							url: string | null;
							site: string;
							siteId: number | null;
							type: ExternalLinkType | null;
						} | null> | null;
						title: {
							romaji: string | null;
							english: string | null;
							native: string | null;
							userPreferred: string | null;
						} | null;
						coverImage: {
							large: string | null;
							medium: string | null;
							extraLarge: string | null;
							color: string | null;
						} | null;
						startDate: {
							year: number | null;
							month: number | null;
							day: number | null;
						} | null;
						endDate: {
							year: number | null;
							month: number | null;
							day: number | null;
						} | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetAnimeRelationsQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeRelationsQuery = {
	Media: {
		relations: {
			edges: Array<{
				relationType: MediaRelation | null;
				node: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					nextAiringEpisode: {
						id: number;
						airingAt: number;
						timeUntilAiring: number;
						episode: number;
						mediaId: number;
					} | null;
					tags: Array<{
						id: number;
						name: string;
						description: string | null;
						category: string | null;
						rank: number | null;
					} | null> | null;
					externalLinks: Array<{
						id: number;
						url: string | null;
						site: string;
						siteId: number | null;
						type: ExternalLinkType | null;
					} | null> | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetAnimeStaffQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeStaffQuery = {
	Media: {
		staff: {
			edges: Array<{
				role: string | null;
				node: {
					id: number;
					description: string | null;
					primaryOccupations: Array<string | null> | null;
					gender: string | null;
					bloodType: string | null;
					homeTown: string | null;
					languageV2: string | null;
					yearsActive: Array<number | null> | null;
					favourites: number | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					age: number | null;
					siteUrl: string | null;
					name: {
						full: string | null;
						native: string | null;
						first: string | null;
						middle: string | null;
						last: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					dateOfDeath: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetAnimeTrendingQueryVariables = Exact<{
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeTrendingQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type SearchAnimeQueryVariables = Exact<{
	query: InputMaybe<Scalars["String"]["input"]>;
	page: InputMaybe<Scalars["Int"]["input"]>;
	perPage: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SearchAnimeQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type CharactersBirthdayTodayQueryVariables = Exact<{
	page: InputMaybe<Scalars["Int"]["input"]>;
	perPage: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type CharactersBirthdayTodayQuery = {
	Page: {
		characters: Array<{
			id: number;
			description: string | null;
			gender: string | null;
			age: string | null;
			bloodType: string | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			favourites: number | null;
			siteUrl: string | null;
			name: {
				alternative: Array<string | null> | null;
				alternativeSpoiler: Array<string | null> | null;
				first: string | null;
				full: string | null;
				last: string | null;
				middle: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			image: { large: string | null; medium: string | null } | null;
			dateOfBirth: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetCharacterByIdQueryVariables = Exact<{
	id: Scalars["Int"]["input"];
}>;

export type GetCharacterByIdQuery = {
	Character: {
		isFavourite: boolean;
		favourites: number | null;
		id: number;
		description: string | null;
		gender: string | null;
		age: string | null;
		bloodType: string | null;
		isFavouriteBlocked: boolean;
		siteUrl: string | null;
		media: {
			nodes: Array<{
				id: number;
				type: MediaType | null;
				title: {
					romaji: string | null;
					english: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
			} | null> | null;
		} | null;
		name: {
			alternative: Array<string | null> | null;
			alternativeSpoiler: Array<string | null> | null;
			first: string | null;
			full: string | null;
			last: string | null;
			middle: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type ToggleFavoriteCharacterMutationVariables = Exact<{
	charID: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ToggleFavoriteCharacterMutation = {
	ToggleFavourite: {
		characters: { nodes: Array<{ id: number } | null> | null } | null;
	} | null;
};

export type GetMangaByIdQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaByIdQuery = {
	Media: {
		id: number;
		idMal: number | null;
		bannerImage: string | null;
		description: string | null;
		format: MediaFormat | null;
		status: MediaStatus | null;
		type: MediaType | null;
		episodes: number | null;
		chapters: number | null;
		volumes: number | null;
		duration: number | null;
		genres: Array<string | null> | null;
		averageScore: number | null;
		meanScore: number | null;
		popularity: number | null;
		favourites: number | null;
		trending: number | null;
		source: MediaSource | null;
		countryOfOrigin: any | null;
		isAdult: boolean | null;
		isLicensed: boolean | null;
		isLocked: boolean | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		hashtag: string | null;
		synonyms: Array<string | null> | null;
		season: MediaSeason | null;
		seasonYear: number | null;
		siteUrl: string | null;
		updatedAt: number | null;
		autoCreateForumThread: boolean | null;
		isRecommendationBlocked: boolean | null;
		isReviewBlocked: boolean | null;
		modNotes: string | null;
		nextAiringEpisode: {
			id: number;
			airingAt: number;
			timeUntilAiring: number;
			episode: number;
			mediaId: number;
		} | null;
		tags: Array<{
			id: number;
			name: string;
			description: string | null;
			category: string | null;
			rank: number | null;
		} | null> | null;
		externalLinks: Array<{
			id: number;
			url: string | null;
			site: string;
			siteId: number | null;
			type: ExternalLinkType | null;
		} | null> | null;
		title: {
			romaji: string | null;
			english: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		coverImage: {
			large: string | null;
			medium: string | null;
			extraLarge: string | null;
			color: string | null;
		} | null;
		startDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		endDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type GetMangaByTitleQueryVariables = Exact<{
	title: Scalars["String"]["input"];
}>;

export type GetMangaByTitleQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetMangaCharactersQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaCharactersQuery = {
	Media: {
		characters: {
			edges: Array<{
				role: CharacterRole | null;
				node: {
					id: number;
					description: string | null;
					gender: string | null;
					age: string | null;
					bloodType: string | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					favourites: number | null;
					siteUrl: string | null;
					name: {
						alternative: Array<string | null> | null;
						alternativeSpoiler: Array<string | null> | null;
						first: string | null;
						full: string | null;
						last: string | null;
						middle: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetMangaListByGenreQueryVariables = Exact<{
	genre: InputMaybe<Scalars["String"]["input"]>;
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaListByGenreQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetMangaPopularQueryVariables = Exact<{
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaPopularQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetMangaRecommendationsQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaRecommendationsQuery = {
	Media: {
		recommendations: {
			edges: Array<{
				node: {
					media: {
						id: number;
						idMal: number | null;
						bannerImage: string | null;
						description: string | null;
						format: MediaFormat | null;
						status: MediaStatus | null;
						type: MediaType | null;
						episodes: number | null;
						chapters: number | null;
						volumes: number | null;
						duration: number | null;
						genres: Array<string | null> | null;
						averageScore: number | null;
						meanScore: number | null;
						popularity: number | null;
						favourites: number | null;
						trending: number | null;
						source: MediaSource | null;
						countryOfOrigin: any | null;
						isAdult: boolean | null;
						isLicensed: boolean | null;
						isLocked: boolean | null;
						isFavourite: boolean;
						isFavouriteBlocked: boolean;
						hashtag: string | null;
						synonyms: Array<string | null> | null;
						season: MediaSeason | null;
						seasonYear: number | null;
						siteUrl: string | null;
						updatedAt: number | null;
						autoCreateForumThread: boolean | null;
						isRecommendationBlocked: boolean | null;
						isReviewBlocked: boolean | null;
						modNotes: string | null;
						nextAiringEpisode: {
							id: number;
							airingAt: number;
							timeUntilAiring: number;
							episode: number;
							mediaId: number;
						} | null;
						tags: Array<{
							id: number;
							name: string;
							description: string | null;
							category: string | null;
							rank: number | null;
						} | null> | null;
						externalLinks: Array<{
							id: number;
							url: string | null;
							site: string;
							siteId: number | null;
							type: ExternalLinkType | null;
						} | null> | null;
						title: {
							romaji: string | null;
							english: string | null;
							native: string | null;
							userPreferred: string | null;
						} | null;
						coverImage: {
							large: string | null;
							medium: string | null;
							extraLarge: string | null;
							color: string | null;
						} | null;
						startDate: {
							year: number | null;
							month: number | null;
							day: number | null;
						} | null;
						endDate: {
							year: number | null;
							month: number | null;
							day: number | null;
						} | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetMangaRelationsQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaRelationsQuery = {
	Media: {
		relations: {
			edges: Array<{
				relationType: MediaRelation | null;
				node: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					nextAiringEpisode: {
						id: number;
						airingAt: number;
						timeUntilAiring: number;
						episode: number;
						mediaId: number;
					} | null;
					tags: Array<{
						id: number;
						name: string;
						description: string | null;
						category: string | null;
						rank: number | null;
					} | null> | null;
					externalLinks: Array<{
						id: number;
						url: string | null;
						site: string;
						siteId: number | null;
						type: ExternalLinkType | null;
					} | null> | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetMangaStaffQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaStaffQuery = {
	Media: {
		staff: {
			edges: Array<{
				role: string | null;
				node: {
					id: number;
					description: string | null;
					primaryOccupations: Array<string | null> | null;
					gender: string | null;
					bloodType: string | null;
					homeTown: string | null;
					languageV2: string | null;
					yearsActive: Array<number | null> | null;
					favourites: number | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					age: number | null;
					siteUrl: string | null;
					name: {
						full: string | null;
						native: string | null;
						first: string | null;
						middle: string | null;
						last: string | null;
						userPreferred: string | null;
					} | null;
					image: { large: string | null; medium: string | null } | null;
					dateOfBirth: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					dateOfDeath: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null;
	} | null;
};

export type GetMangaTrendingQueryVariables = Exact<{
	page?: InputMaybe<Scalars["Int"]["input"]>;
	perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaTrendingQuery = {
	Page: {
		media: Array<{
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			nextAiringEpisode: {
				id: number;
				airingAt: number;
				timeUntilAiring: number;
				episode: number;
				mediaId: number;
			} | null;
			tags: Array<{
				id: number;
				name: string;
				description: string | null;
				category: string | null;
				rank: number | null;
			} | null> | null;
			externalLinks: Array<{
				id: number;
				url: string | null;
				site: string;
				siteId: number | null;
				type: ExternalLinkType | null;
			} | null> | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GetMediaByIdQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMediaByIdQuery = {
	Media: {
		id: number;
		idMal: number | null;
		bannerImage: string | null;
		description: string | null;
		format: MediaFormat | null;
		status: MediaStatus | null;
		type: MediaType | null;
		episodes: number | null;
		chapters: number | null;
		volumes: number | null;
		duration: number | null;
		genres: Array<string | null> | null;
		averageScore: number | null;
		meanScore: number | null;
		popularity: number | null;
		favourites: number | null;
		trending: number | null;
		source: MediaSource | null;
		countryOfOrigin: any | null;
		isAdult: boolean | null;
		isLicensed: boolean | null;
		isLocked: boolean | null;
		isFavourite: boolean;
		isFavouriteBlocked: boolean;
		hashtag: string | null;
		synonyms: Array<string | null> | null;
		season: MediaSeason | null;
		seasonYear: number | null;
		siteUrl: string | null;
		updatedAt: number | null;
		autoCreateForumThread: boolean | null;
		isRecommendationBlocked: boolean | null;
		isReviewBlocked: boolean | null;
		modNotes: string | null;
		nextAiringEpisode: {
			id: number;
			airingAt: number;
			timeUntilAiring: number;
			episode: number;
			mediaId: number;
		} | null;
		tags: Array<{
			id: number;
			name: string;
			description: string | null;
			category: string | null;
			rank: number | null;
		} | null> | null;
		externalLinks: Array<{
			id: number;
			url: string | null;
			site: string;
			siteId: number | null;
			type: ExternalLinkType | null;
		} | null> | null;
		title: {
			romaji: string | null;
			english: string | null;
			native: string | null;
			userPreferred: string | null;
		} | null;
		coverImage: {
			large: string | null;
			medium: string | null;
			extraLarge: string | null;
			color: string | null;
		} | null;
		startDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		endDate: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type GetMediaListQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMediaListQuery = {
	MediaList: {
		id: number;
		mediaId: number;
		userId: number;
		status: MediaListStatus | null;
		score: number | null;
		progress: number | null;
		progressVolumes: number | null;
		repeat: number | null;
		priority: number | null;
		private: boolean | null;
		notes: string | null;
		hiddenFromStatusLists: boolean | null;
		customLists: any | null;
		advancedScores: any | null;
		updatedAt: number | null;
		createdAt: number | null;
		startedAt: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		completedAt: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		media: {
			id: number;
			idMal: number | null;
			bannerImage: string | null;
			description: string | null;
			format: MediaFormat | null;
			status: MediaStatus | null;
			type: MediaType | null;
			episodes: number | null;
			chapters: number | null;
			volumes: number | null;
			duration: number | null;
			genres: Array<string | null> | null;
			averageScore: number | null;
			meanScore: number | null;
			popularity: number | null;
			favourites: number | null;
			trending: number | null;
			source: MediaSource | null;
			countryOfOrigin: any | null;
			isAdult: boolean | null;
			isLicensed: boolean | null;
			isLocked: boolean | null;
			isFavourite: boolean;
			isFavouriteBlocked: boolean;
			hashtag: string | null;
			synonyms: Array<string | null> | null;
			season: MediaSeason | null;
			seasonYear: number | null;
			siteUrl: string | null;
			updatedAt: number | null;
			autoCreateForumThread: boolean | null;
			isRecommendationBlocked: boolean | null;
			isReviewBlocked: boolean | null;
			modNotes: string | null;
			title: {
				romaji: string | null;
				english: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
			coverImage: {
				large: string | null;
				medium: string | null;
				extraLarge: string | null;
				color: string | null;
			} | null;
			startDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
			endDate: {
				year: number | null;
				month: number | null;
				day: number | null;
			} | null;
		} | null;
	} | null;
};

export type GetMediaListByUserQueryVariables = Exact<{
	userId: InputMaybe<Scalars["Int"]["input"]>;
	mediaType: InputMaybe<MediaType>;
}>;

export type GetMediaListByUserQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetMediaListByUserByUserNameQueryVariables = Exact<{
	userName: InputMaybe<Scalars["String"]["input"]>;
	mediaType: InputMaybe<MediaType>;
}>;

export type GetMediaListByUserByUserNameQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetStaffByIdQueryVariables = Exact<{
	id: Scalars["Int"]["input"];
}>;

export type GetStaffByIdQuery = {
	Staff: {
		isFavourite: boolean;
		favourites: number | null;
		id: number;
		description: string | null;
		primaryOccupations: Array<string | null> | null;
		gender: string | null;
		bloodType: string | null;
		homeTown: string | null;
		languageV2: string | null;
		yearsActive: Array<number | null> | null;
		isFavouriteBlocked: boolean;
		age: number | null;
		siteUrl: string | null;
		staffMedia: {
			nodes: Array<{
				id: number;
				type: MediaType | null;
				title: {
					romaji: string | null;
					english: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
			} | null> | null;
		} | null;
		characters: {
			nodes: Array<{
				id: number;
				description: string | null;
				gender: string | null;
				age: string | null;
				bloodType: string | null;
				isFavourite: boolean;
				isFavouriteBlocked: boolean;
				favourites: number | null;
				siteUrl: string | null;
				name: {
					alternative: Array<string | null> | null;
					alternativeSpoiler: Array<string | null> | null;
					first: string | null;
					full: string | null;
					last: string | null;
					middle: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
				image: { large: string | null; medium: string | null } | null;
				dateOfBirth: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
			} | null> | null;
		} | null;
		characterMedia: {
			nodes: Array<{
				id: number;
				type: MediaType | null;
				title: {
					romaji: string | null;
					english: string | null;
					native: string | null;
					userPreferred: string | null;
				} | null;
			} | null> | null;
		} | null;
		name: {
			full: string | null;
			native: string | null;
			first: string | null;
			middle: string | null;
			last: string | null;
			userPreferred: string | null;
		} | null;
		image: { large: string | null; medium: string | null } | null;
		dateOfBirth: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
		dateOfDeath: {
			year: number | null;
			month: number | null;
			day: number | null;
		} | null;
	} | null;
};

export type StaffBirthdayTodayQueryVariables = Exact<{
	page: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type StaffBirthdayTodayQuery = {
	Page: {
		staff: Array<{
			id: number;
			name: {
				alternative: Array<string | null> | null;
				first: string | null;
				full: string | null;
				last: string | null;
				middle: string | null;
				native: string | null;
				userPreferred: string | null;
			} | null;
		} | null> | null;
	} | null;
};

export type ToggleFavoriteStaffMutationVariables = Exact<{
	staffID: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ToggleFavoriteStaffMutation = {
	ToggleFavourite: {
		staff: { nodes: Array<{ id: number } | null> | null } | null;
	} | null;
};

export type GetUserAnimeListQueryVariables = Exact<{
	userId: InputMaybe<Scalars["Int"]["input"]>;
	status: InputMaybe<MediaListStatus>;
}>;

export type GetUserAnimeListQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetUserAnimeListByUserNameQueryVariables = Exact<{
	userName: InputMaybe<Scalars["String"]["input"]>;
	status: InputMaybe<MediaListStatus>;
}>;

export type GetUserAnimeListByUserNameQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetUserInfoQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserInfoQuery = {
	User: {
		id: number;
		name: string;
		about: string | null;
		bannerImage: string | null;
		donatorTier: number | null;
		donatorBadge: string | null;
		isFollowing: boolean | null;
		isFollower: boolean | null;
		isBlocked: boolean | null;
		createdAt: number | null;
		updatedAt: number | null;
		unreadNotificationCount: number | null;
		bans: any | null;
		moderatorRoles: Array<ModRole | null> | null;
		moderatorStatus: string | null;
		siteUrl: string | null;
		avatar: { large: string | null; medium: string | null } | null;
		options: {
			titleLanguage: UserTitleLanguage | null;
			displayAdultContent: boolean | null;
			airingNotifications: boolean | null;
			profileColor: string | null;
			timezone: string | null;
			activityMergeTime: number | null;
			staffNameLanguage: UserStaffNameLanguage | null;
			restrictMessagesToFollowing: boolean | null;
			notificationOptions: Array<{
				type: NotificationType | null;
				enabled: boolean | null;
			} | null> | null;
			disabledListActivity: Array<{
				disabled: boolean | null;
				type: MediaListStatus | null;
			} | null> | null;
		} | null;
		mediaListOptions: {
			scoreFormat: ScoreFormat | null;
			rowOrder: string | null;
			useLegacyLists: boolean | null;
			sharedTheme: any | null;
			sharedThemeEnabled: boolean | null;
			animeList: {
				sectionOrder: Array<string | null> | null;
				splitCompletedSectionByFormat: boolean | null;
				customLists: Array<string | null> | null;
				advancedScoring: Array<string | null> | null;
				advancedScoringEnabled: boolean | null;
			} | null;
			mangaList: {
				sectionOrder: Array<string | null> | null;
				splitCompletedSectionByFormat: boolean | null;
				customLists: Array<string | null> | null;
				advancedScoring: Array<string | null> | null;
				advancedScoringEnabled: boolean | null;
			} | null;
		} | null;
		favourites: {
			anime: {
				nodes: Array<{
					id: number;
					title: { romaji: string | null } | null;
				} | null> | null;
			} | null;
			manga: {
				nodes: Array<{
					id: number;
					title: { romaji: string | null } | null;
				} | null> | null;
			} | null;
			characters: {
				nodes: Array<{
					id: number;
					name: { full: string | null } | null;
				} | null> | null;
			} | null;
			staff: {
				nodes: Array<{
					id: number;
					name: { full: string | null } | null;
				} | null> | null;
			} | null;
			studios: {
				nodes: Array<{ id: number; name: string } | null> | null;
			} | null;
		} | null;
		statistics: {
			anime: {
				count: number;
				meanScore: number;
				standardDeviation: number;
				minutesWatched: number;
				episodesWatched: number;
				chaptersRead: number;
				volumesRead: number;
				scores: Array<{
					score: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				lengths: Array<{
					length: string | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				formats: Array<{
					format: MediaFormat | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				statuses: Array<{
					status: MediaListStatus | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				releaseYears: Array<{
					releaseYear: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				startYears: Array<{
					startYear: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				genres: Array<{
					genre: string | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				tags: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					tag: { name: string } | null;
				} | null> | null;
				countries: Array<{
					country: any | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				voiceActors: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					characterIds: Array<number | null>;
					mediaIds: Array<number | null>;
					voiceActor: {
						id: number;
						name: { full: string | null } | null;
					} | null;
				} | null> | null;
				staff: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					mediaIds: Array<number | null>;
					staff: { id: number; name: { full: string | null } | null } | null;
				} | null> | null;
				studios: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					mediaIds: Array<number | null>;
					studio: { id: number; name: string } | null;
				} | null> | null;
			} | null;
			manga: {
				count: number;
				meanScore: number;
				standardDeviation: number;
				chaptersRead: number;
				volumesRead: number;
				scores: Array<{
					score: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				lengths: Array<{
					length: string | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				formats: Array<{
					format: MediaFormat | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				statuses: Array<{
					status: MediaListStatus | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				releaseYears: Array<{
					releaseYear: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				startYears: Array<{
					startYear: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				genres: Array<{
					genre: string | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				tags: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					tag: { name: string } | null;
				} | null> | null;
				countries: Array<{
					country: any | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				staff: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					mediaIds: Array<number | null>;
					staff: { id: number; name: { full: string | null } | null } | null;
				} | null> | null;
				studios: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					mediaIds: Array<number | null>;
					studio: { id: number; name: string } | null;
				} | null> | null;
			} | null;
		} | null;
		stats: { watchedTime: number | null; chaptersRead: number | null } | null;
		previousNames: Array<{
			name: string | null;
			createdAt: number | null;
			updatedAt: number | null;
		} | null> | null;
	} | null;
};

export type GetUserInfoByUserNameQueryVariables = Exact<{
	userName: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetUserInfoByUserNameQuery = {
	User: {
		id: number;
		name: string;
		about: string | null;
		bannerImage: string | null;
		donatorTier: number | null;
		donatorBadge: string | null;
		isFollowing: boolean | null;
		isFollower: boolean | null;
		isBlocked: boolean | null;
		createdAt: number | null;
		updatedAt: number | null;
		unreadNotificationCount: number | null;
		bans: any | null;
		moderatorRoles: Array<ModRole | null> | null;
		moderatorStatus: string | null;
		siteUrl: string | null;
		avatar: { large: string | null; medium: string | null } | null;
		options: {
			titleLanguage: UserTitleLanguage | null;
			displayAdultContent: boolean | null;
			airingNotifications: boolean | null;
			profileColor: string | null;
			timezone: string | null;
			activityMergeTime: number | null;
			staffNameLanguage: UserStaffNameLanguage | null;
			restrictMessagesToFollowing: boolean | null;
			notificationOptions: Array<{
				type: NotificationType | null;
				enabled: boolean | null;
			} | null> | null;
			disabledListActivity: Array<{
				disabled: boolean | null;
				type: MediaListStatus | null;
			} | null> | null;
		} | null;
		mediaListOptions: {
			scoreFormat: ScoreFormat | null;
			rowOrder: string | null;
			useLegacyLists: boolean | null;
			sharedTheme: any | null;
			sharedThemeEnabled: boolean | null;
			animeList: {
				sectionOrder: Array<string | null> | null;
				splitCompletedSectionByFormat: boolean | null;
				customLists: Array<string | null> | null;
				advancedScoring: Array<string | null> | null;
				advancedScoringEnabled: boolean | null;
			} | null;
			mangaList: {
				sectionOrder: Array<string | null> | null;
				splitCompletedSectionByFormat: boolean | null;
				customLists: Array<string | null> | null;
				advancedScoring: Array<string | null> | null;
				advancedScoringEnabled: boolean | null;
			} | null;
		} | null;
		favourites: {
			anime: {
				nodes: Array<{
					id: number;
					title: { romaji: string | null } | null;
				} | null> | null;
			} | null;
			manga: {
				nodes: Array<{
					id: number;
					title: { romaji: string | null } | null;
				} | null> | null;
			} | null;
			characters: {
				nodes: Array<{
					id: number;
					name: { full: string | null } | null;
				} | null> | null;
			} | null;
			staff: {
				nodes: Array<{
					id: number;
					name: { full: string | null } | null;
				} | null> | null;
			} | null;
			studios: {
				nodes: Array<{ id: number; name: string } | null> | null;
			} | null;
		} | null;
		statistics: {
			anime: {
				count: number;
				meanScore: number;
				standardDeviation: number;
				minutesWatched: number;
				episodesWatched: number;
				chaptersRead: number;
				volumesRead: number;
				scores: Array<{
					score: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				lengths: Array<{
					length: string | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				formats: Array<{
					format: MediaFormat | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				statuses: Array<{
					status: MediaListStatus | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				releaseYears: Array<{
					releaseYear: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				startYears: Array<{
					startYear: number | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				genres: Array<{
					genre: string | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				tags: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					tag: { name: string } | null;
				} | null> | null;
				countries: Array<{
					country: any | null;
					count: number;
					meanScore: number;
					minutesWatched: number;
				} | null> | null;
				voiceActors: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					characterIds: Array<number | null>;
					mediaIds: Array<number | null>;
					voiceActor: {
						id: number;
						name: { full: string | null } | null;
					} | null;
				} | null> | null;
				staff: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					mediaIds: Array<number | null>;
					staff: { id: number; name: { full: string | null } | null } | null;
				} | null> | null;
				studios: Array<{
					count: number;
					meanScore: number;
					minutesWatched: number;
					mediaIds: Array<number | null>;
					studio: { id: number; name: string } | null;
				} | null> | null;
			} | null;
			manga: {
				count: number;
				meanScore: number;
				standardDeviation: number;
				chaptersRead: number;
				volumesRead: number;
				scores: Array<{
					score: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				lengths: Array<{
					length: string | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				formats: Array<{
					format: MediaFormat | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				statuses: Array<{
					status: MediaListStatus | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				releaseYears: Array<{
					releaseYear: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				startYears: Array<{
					startYear: number | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				genres: Array<{
					genre: string | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				tags: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					tag: { name: string } | null;
				} | null> | null;
				countries: Array<{
					country: any | null;
					count: number;
					meanScore: number;
					chaptersRead: number;
				} | null> | null;
				staff: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					mediaIds: Array<number | null>;
					staff: { id: number; name: { full: string | null } | null } | null;
				} | null> | null;
				studios: Array<{
					count: number;
					meanScore: number;
					chaptersRead: number;
					mediaIds: Array<number | null>;
					studio: { id: number; name: string } | null;
				} | null> | null;
			} | null;
		} | null;
		stats: { watchedTime: number | null; chaptersRead: number | null } | null;
		previousNames: Array<{
			name: string | null;
			createdAt: number | null;
			updatedAt: number | null;
		} | null> | null;
	} | null;
};

export type GetUserListQueryVariables = Exact<{
	page: InputMaybe<Scalars["Int"]["input"]>;
	perPage: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserListQuery = {
	Page: {
		users: Array<{
			id: number;
			name: string;
			about: string | null;
			bannerImage: string | null;
			donatorTier: number | null;
			donatorBadge: string | null;
			isFollowing: boolean | null;
			isFollower: boolean | null;
			isBlocked: boolean | null;
			createdAt: number | null;
			updatedAt: number | null;
			unreadNotificationCount: number | null;
			bans: any | null;
			moderatorRoles: Array<ModRole | null> | null;
			moderatorStatus: string | null;
			siteUrl: string | null;
			avatar: { large: string | null; medium: string | null } | null;
			options: {
				titleLanguage: UserTitleLanguage | null;
				displayAdultContent: boolean | null;
				airingNotifications: boolean | null;
				profileColor: string | null;
				timezone: string | null;
				activityMergeTime: number | null;
				staffNameLanguage: UserStaffNameLanguage | null;
				restrictMessagesToFollowing: boolean | null;
				notificationOptions: Array<{
					type: NotificationType | null;
					enabled: boolean | null;
				} | null> | null;
				disabledListActivity: Array<{
					disabled: boolean | null;
					type: MediaListStatus | null;
				} | null> | null;
			} | null;
			mediaListOptions: {
				scoreFormat: ScoreFormat | null;
				rowOrder: string | null;
				useLegacyLists: boolean | null;
				sharedTheme: any | null;
				sharedThemeEnabled: boolean | null;
				animeList: {
					sectionOrder: Array<string | null> | null;
					splitCompletedSectionByFormat: boolean | null;
					customLists: Array<string | null> | null;
					advancedScoring: Array<string | null> | null;
					advancedScoringEnabled: boolean | null;
				} | null;
				mangaList: {
					sectionOrder: Array<string | null> | null;
					splitCompletedSectionByFormat: boolean | null;
					customLists: Array<string | null> | null;
					advancedScoring: Array<string | null> | null;
					advancedScoringEnabled: boolean | null;
				} | null;
			} | null;
			favourites: {
				anime: {
					nodes: Array<{
						id: number;
						title: { romaji: string | null } | null;
					} | null> | null;
				} | null;
				manga: {
					nodes: Array<{
						id: number;
						title: { romaji: string | null } | null;
					} | null> | null;
				} | null;
				characters: {
					nodes: Array<{
						id: number;
						name: { full: string | null } | null;
					} | null> | null;
				} | null;
				staff: {
					nodes: Array<{
						id: number;
						name: { full: string | null } | null;
					} | null> | null;
				} | null;
				studios: {
					nodes: Array<{ id: number; name: string } | null> | null;
				} | null;
			} | null;
			statistics: {
				anime: {
					count: number;
					meanScore: number;
					standardDeviation: number;
					minutesWatched: number;
					episodesWatched: number;
					chaptersRead: number;
					volumesRead: number;
					scores: Array<{
						score: number | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					lengths: Array<{
						length: string | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					formats: Array<{
						format: MediaFormat | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					statuses: Array<{
						status: MediaListStatus | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					releaseYears: Array<{
						releaseYear: number | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					startYears: Array<{
						startYear: number | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					genres: Array<{
						genre: string | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					tags: Array<{
						count: number;
						meanScore: number;
						minutesWatched: number;
						tag: { name: string } | null;
					} | null> | null;
					countries: Array<{
						country: any | null;
						count: number;
						meanScore: number;
						minutesWatched: number;
					} | null> | null;
					voiceActors: Array<{
						count: number;
						meanScore: number;
						minutesWatched: number;
						characterIds: Array<number | null>;
						mediaIds: Array<number | null>;
						voiceActor: {
							id: number;
							name: { full: string | null } | null;
						} | null;
					} | null> | null;
					staff: Array<{
						count: number;
						meanScore: number;
						minutesWatched: number;
						mediaIds: Array<number | null>;
						staff: { id: number; name: { full: string | null } | null } | null;
					} | null> | null;
					studios: Array<{
						count: number;
						meanScore: number;
						minutesWatched: number;
						mediaIds: Array<number | null>;
						studio: { id: number; name: string } | null;
					} | null> | null;
				} | null;
				manga: {
					count: number;
					meanScore: number;
					standardDeviation: number;
					chaptersRead: number;
					volumesRead: number;
					scores: Array<{
						score: number | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					lengths: Array<{
						length: string | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					formats: Array<{
						format: MediaFormat | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					statuses: Array<{
						status: MediaListStatus | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					releaseYears: Array<{
						releaseYear: number | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					startYears: Array<{
						startYear: number | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					genres: Array<{
						genre: string | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					tags: Array<{
						count: number;
						meanScore: number;
						chaptersRead: number;
						tag: { name: string } | null;
					} | null> | null;
					countries: Array<{
						country: any | null;
						count: number;
						meanScore: number;
						chaptersRead: number;
					} | null> | null;
					staff: Array<{
						count: number;
						meanScore: number;
						chaptersRead: number;
						mediaIds: Array<number | null>;
						staff: { id: number; name: { full: string | null } | null } | null;
					} | null> | null;
					studios: Array<{
						count: number;
						meanScore: number;
						chaptersRead: number;
						mediaIds: Array<number | null>;
						studio: { id: number; name: string } | null;
					} | null> | null;
				} | null;
			} | null;
			stats: { watchedTime: number | null; chaptersRead: number | null } | null;
			previousNames: Array<{
				name: string | null;
				createdAt: number | null;
				updatedAt: number | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetUserMangaListQueryVariables = Exact<{
	userId: InputMaybe<Scalars["Int"]["input"]>;
	status: InputMaybe<MediaListStatus>;
}>;

export type GetUserMangaListQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetUserMangaListByUserNameQueryVariables = Exact<{
	userName: InputMaybe<Scalars["String"]["input"]>;
	status: InputMaybe<MediaListStatus>;
}>;

export type GetUserMangaListByUserNameQuery = {
	MediaListCollection: {
		lists: Array<{
			entries: Array<{
				id: number;
				mediaId: number;
				userId: number;
				status: MediaListStatus | null;
				score: number | null;
				progress: number | null;
				progressVolumes: number | null;
				repeat: number | null;
				priority: number | null;
				private: boolean | null;
				notes: string | null;
				hiddenFromStatusLists: boolean | null;
				customLists: any | null;
				advancedScores: any | null;
				updatedAt: number | null;
				createdAt: number | null;
				startedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				completedAt: {
					year: number | null;
					month: number | null;
					day: number | null;
				} | null;
				media: {
					id: number;
					idMal: number | null;
					bannerImage: string | null;
					description: string | null;
					format: MediaFormat | null;
					status: MediaStatus | null;
					type: MediaType | null;
					episodes: number | null;
					chapters: number | null;
					volumes: number | null;
					duration: number | null;
					genres: Array<string | null> | null;
					averageScore: number | null;
					meanScore: number | null;
					popularity: number | null;
					favourites: number | null;
					trending: number | null;
					source: MediaSource | null;
					countryOfOrigin: any | null;
					isAdult: boolean | null;
					isLicensed: boolean | null;
					isLocked: boolean | null;
					isFavourite: boolean;
					isFavouriteBlocked: boolean;
					hashtag: string | null;
					synonyms: Array<string | null> | null;
					season: MediaSeason | null;
					seasonYear: number | null;
					siteUrl: string | null;
					updatedAt: number | null;
					autoCreateForumThread: boolean | null;
					isRecommendationBlocked: boolean | null;
					isReviewBlocked: boolean | null;
					modNotes: string | null;
					title: {
						romaji: string | null;
						english: string | null;
						native: string | null;
						userPreferred: string | null;
					} | null;
					coverImage: {
						large: string | null;
						medium: string | null;
						extraLarge: string | null;
						color: string | null;
					} | null;
					startDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
					endDate: {
						year: number | null;
						month: number | null;
						day: number | null;
					} | null;
				} | null;
			} | null> | null;
		} | null> | null;
	} | null;
};

export type GetUserStatisticsQueryVariables = Exact<{
	id: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserStatisticsQuery = {
	User: {
		statistics: {
			anime: {
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null;
			manga: { count: number; meanScore: number; chaptersRead: number } | null;
		} | null;
	} | null;
};

export type GetUserStatisticsByUserNameQueryVariables = Exact<{
	userName: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetUserStatisticsByUserNameQuery = {
	User: {
		statistics: {
			anime: {
				count: number;
				meanScore: number;
				minutesWatched: number;
			} | null;
			manga: { count: number; meanScore: number; chaptersRead: number } | null;
		} | null;
	} | null;
};

export const TitleFragmentDoc = gql`
    fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
    `;
export const CoverImageFragmentDoc = gql`
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
    `;
export const DateFragmentDoc = gql`
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
    `;
export const MediaCoreFragmentDoc = gql`
    fragment MediaCoreFragment on Media {
  id
  idMal
  title {
    ...TitleFragment
  }
  coverImage {
    ...CoverImageFragment
  }
  bannerImage
  description
  format
  status
  type
  episodes
  chapters
  volumes
  duration
  genres
  averageScore
  meanScore
  popularity
  favourites
  trending
  source
  countryOfOrigin
  isAdult
  isLicensed
  isLocked
  isFavourite
  isFavouriteBlocked
  hashtag
  synonyms
  startDate {
    ...DateFragment
  }
  endDate {
    ...DateFragment
  }
  season
  seasonYear
  siteUrl
  updatedAt
  autoCreateForumThread
  isRecommendationBlocked
  isReviewBlocked
  modNotes
}
    ${TitleFragmentDoc}
${CoverImageFragmentDoc}
${DateFragmentDoc}`;
export const MediaTagFragmentDoc = gql`
    fragment MediaTagFragment on MediaTag {
  id
  name
  description
  category
  rank
  isGeneralSpoiler
  isMediaSpoiler
  isAdult
  userId
}
    `;
export const MediaRankFragmentDoc = gql`
    fragment MediaRankFragment on MediaRank {
  id
  rank
  type
  format
  year
  season
  allTime
  context
}
    `;
export const MediaExternalLinkFragmentDoc = gql`
    fragment MediaExternalLinkFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
  language
  color
  icon
  notes
  isDisabled
}
    `;
export const ScoreDistributionFragmentDoc = gql`
    fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
    `;
export const StatusDistributionFragmentDoc = gql`
    fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
    `;
export const MediaStatsFragmentDoc = gql`
    fragment MediaStatsFragment on MediaStats {
  scoreDistribution {
    ...ScoreDistributionFragment
  }
  statusDistribution {
    ...StatusDistributionFragment
  }
  airingProgression {
    episode
    score
    watching
  }
}
    ${ScoreDistributionFragmentDoc}
${StatusDistributionFragmentDoc}`;
export const MediaTrailerFragmentDoc = gql`
    fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}
    `;
export const MediaDetailedFragmentDoc = gql`
    fragment MediaDetailedFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagFragment
  }
  rankings {
    ...MediaRankFragment
  }
  externalLinks {
    ...MediaExternalLinkFragment
  }
  stats {
    ...MediaStatsFragment
  }
  trailer {
    ...MediaTrailerFragment
  }
  reviews(page: 1, perPage: 1) {
    pageInfo {
      total
    }
  }
  recommendations(page: 1, perPage: 1) {
    pageInfo {
      total
    }
  }
}
    ${MediaCoreFragmentDoc}
${MediaTagFragmentDoc}
${MediaRankFragmentDoc}
${MediaExternalLinkFragmentDoc}
${MediaStatsFragmentDoc}
${MediaTrailerFragmentDoc}`;
export const AiringScheduleFragmentDoc = gql`
    fragment AiringScheduleFragment on AiringSchedule {
  id
  airingAt
  timeUntilAiring
  episode
  mediaId
}
    `;
export const MediaStreamingEpisodeFragmentDoc = gql`
    fragment MediaStreamingEpisodeFragment on MediaStreamingEpisode {
  title
  thumbnail
  url
  site
}
    `;
export const StudioNodeFragmentDoc = gql`
    fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}
    `;
export const StudioEdgeFragmentDoc = gql`
    fragment StudioEdgeFragment on StudioEdge {
  isMain
  favouriteOrder
  node {
    ...StudioNodeFragment
  }
}
    ${StudioNodeFragmentDoc}`;
export const StudioConnectionFragmentDoc = gql`
    fragment StudioConnectionFragment on StudioConnection {
  edges {
    ...StudioEdgeFragment
  }
}
    ${StudioEdgeFragmentDoc}`;
export const MediaRelationNodeFragmentDoc = gql`
    fragment MediaRelationNodeFragment on Media {
  id
  title {
    ...TitleFragment
  }
  type
  format
  status
  coverImage {
    ...CoverImageFragment
  }
  startDate {
    ...DateFragment
  }
  endDate {
    ...DateFragment
  }
  season
  seasonYear
  episodes
  chapters
  volumes
  duration
  averageScore
  popularity
  favourites
  genres
  isAdult
  countryOfOrigin
  siteUrl
}
    ${TitleFragmentDoc}
${CoverImageFragmentDoc}
${DateFragmentDoc}`;
export const MediaRelationEdgeFragmentDoc = gql`
    fragment MediaRelationEdgeFragment on MediaEdge {
  id
  relationType
  isMainStudio
  characterRole
  characterName
  roleNotes
  dubGroup
  staffRole
  favouriteOrder
  node {
    ...MediaRelationNodeFragment
  }
}
    ${MediaRelationNodeFragmentDoc}`;
export const MediaRelationConnectionFragmentDoc = gql`
    fragment MediaRelationConnectionFragment on MediaConnection {
  edges {
    ...MediaRelationEdgeFragment
  }
}
    ${MediaRelationEdgeFragmentDoc}`;
export const CharacterNameFragmentDoc = gql`
    fragment CharacterNameFragment on CharacterName {
  alternative
  alternativeSpoiler
  first
  full
  last
  middle
  native
  userPreferred
}
    `;
export const CharacterImageFragmentDoc = gql`
    fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
    `;
export const CharacterBasicFragmentDoc = gql`
    fragment CharacterBasicFragment on Character {
  id
  name {
    ...CharacterNameFragment
  }
  image {
    ...CharacterImageFragment
  }
  description
  gender
  dateOfBirth {
    ...DateFragment
  }
  age
  bloodType
  isFavourite
  isFavouriteBlocked
  favourites
  siteUrl
}
    ${CharacterNameFragmentDoc}
${CharacterImageFragmentDoc}
${DateFragmentDoc}`;
export const CharacterEdgeFragmentDoc = gql`
    fragment CharacterEdgeFragment on CharacterEdge {
  id
  role
  name
  voiceActors {
    id
    name {
      full
      native
    }
    image {
      large
      medium
    }
    languageV2
  }
  voiceActorRoles {
    roleNotes
    dubGroup
    voiceActor {
      id
      name {
        full
      }
    }
  }
  favouriteOrder
  node {
    ...CharacterBasicFragment
  }
}
    ${CharacterBasicFragmentDoc}`;
export const CharacterConnectionFragmentDoc = gql`
    fragment CharacterConnectionFragment on CharacterConnection {
  edges {
    ...CharacterEdgeFragment
  }
  nodes {
    ...CharacterBasicFragment
  }
}
    ${CharacterEdgeFragmentDoc}
${CharacterBasicFragmentDoc}`;
export const StaffNameFragmentDoc = gql`
    fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
    `;
export const StaffImageFragmentDoc = gql`
    fragment StaffImageFragment on StaffImage {
  large
  medium
}
    `;
export const StaffBasicFragmentDoc = gql`
    fragment StaffBasicFragment on Staff {
  id
  name {
    ...StaffNameFragment
  }
  image {
    ...StaffImageFragment
  }
  description
  primaryOccupations
  gender
  bloodType
  homeTown
  languageV2
  yearsActive
  favourites
  isFavourite
  isFavouriteBlocked
  dateOfBirth {
    ...DateFragment
  }
  dateOfDeath {
    ...DateFragment
  }
  age
  siteUrl
}
    ${StaffNameFragmentDoc}
${StaffImageFragmentDoc}
${DateFragmentDoc}`;
export const StaffEdgeFragmentDoc = gql`
    fragment StaffEdgeFragment on StaffEdge {
  id
  role
  favouriteOrder
  node {
    ...StaffBasicFragment
  }
}
    ${StaffBasicFragmentDoc}`;
export const StaffConnectionFragmentDoc = gql`
    fragment StaffConnectionFragment on StaffConnection {
  edges {
    ...StaffEdgeFragment
  }
  nodes {
    ...StaffBasicFragment
  }
}
    ${StaffEdgeFragmentDoc}
${StaffBasicFragmentDoc}`;
export const AnimeFragmentDoc = gql`
    fragment AnimeFragment on Media {
  ...MediaDetailedFragment
  nextAiringEpisode {
    ...AiringScheduleFragment
  }
  streamingEpisodes {
    ...MediaStreamingEpisodeFragment
  }
  studios {
    ...StudioConnectionFragment
  }
  relations {
    ...MediaRelationConnectionFragment
  }
  characters {
    ...CharacterConnectionFragment
  }
  staff {
    ...StaffConnectionFragment
  }
}
    ${MediaDetailedFragmentDoc}
${AiringScheduleFragmentDoc}
${MediaStreamingEpisodeFragmentDoc}
${StudioConnectionFragmentDoc}
${MediaRelationConnectionFragmentDoc}
${CharacterConnectionFragmentDoc}
${StaffConnectionFragmentDoc}`;
export const CharacterFragmentDoc = gql`
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
    ${CharacterBasicFragmentDoc}`;
export const MangaFragmentDoc = gql`
    fragment MangaFragment on Media {
  ...MediaDetailedFragment
  relations {
    ...MediaRelationConnectionFragment
  }
  characters {
    ...CharacterConnectionFragment
  }
  staff {
    ...StaffConnectionFragment
  }
}
    ${MediaDetailedFragmentDoc}
${MediaRelationConnectionFragmentDoc}
${CharacterConnectionFragmentDoc}
${StaffConnectionFragmentDoc}`;
export const MediaTagBasicFragmentDoc = gql`
    fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}
    `;
export const MediaExternalLinkBasicFragmentDoc = gql`
    fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
    `;
export const MediaBasicFragmentDoc = gql`
    fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
    ${MediaCoreFragmentDoc}
${MediaTagBasicFragmentDoc}
${MediaExternalLinkBasicFragmentDoc}`;
export const MediaFragmentDoc = gql`
    fragment MediaFragment on Media {
  ...MediaBasicFragment
  nextAiringEpisode {
    id
    airingAt
    timeUntilAiring
    episode
    mediaId
  }
}
    ${MediaBasicFragmentDoc}`;
export const MediaListFragmentDoc = gql`
    fragment MediaListFragment on MediaList {
  id
  mediaId
  userId
  status
  score
  progress
  progressVolumes
  repeat
  priority
  private
  notes
  hiddenFromStatusLists
  customLists
  advancedScores
  startedAt {
    ...DateFragment
  }
  completedAt {
    ...DateFragment
  }
  updatedAt
  createdAt
  media {
    ...MediaCoreFragment
  }
}
    ${DateFragmentDoc}
${MediaCoreFragmentDoc}`;
export const StaffFragmentDoc = gql`
    fragment StaffFragment on Staff {
  ...StaffBasicFragment
}
    ${StaffBasicFragmentDoc}`;
export const StudioFragmentDoc = gql`
    fragment StudioFragment on Studio {
  ...StudioNodeFragment
  media {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
  }
}
    ${StudioNodeFragmentDoc}`;
export const UserAvatarFragmentDoc = gql`
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
    `;
export const UserOptionsFragmentDoc = gql`
    fragment UserOptionsFragment on UserOptions {
  titleLanguage
  displayAdultContent
  airingNotifications
  profileColor
  notificationOptions {
    type
    enabled
  }
  timezone
  activityMergeTime
  staffNameLanguage
  restrictMessagesToFollowing
  disabledListActivity {
    disabled
    type
  }
}
    `;
export const UserMediaListOptionsFragmentDoc = gql`
    fragment UserMediaListOptionsFragment on MediaListOptions {
  scoreFormat
  rowOrder
  useLegacyLists
  animeList {
    sectionOrder
    splitCompletedSectionByFormat
    customLists
    advancedScoring
    advancedScoringEnabled
  }
  mangaList {
    sectionOrder
    splitCompletedSectionByFormat
    customLists
    advancedScoring
    advancedScoringEnabled
  }
  sharedTheme
  sharedThemeEnabled
}
    `;
export const UserFavouritesFragmentDoc = gql`
    fragment UserFavouritesFragment on Favourites {
  anime {
    nodes {
      id
      title {
        romaji
      }
    }
  }
  manga {
    nodes {
      id
      title {
        romaji
      }
    }
  }
  characters {
    nodes {
      id
      name {
        full
      }
    }
  }
  staff {
    nodes {
      id
      name {
        full
      }
    }
  }
  studios {
    nodes {
      id
      name
    }
  }
}
    `;
export const UserStatisticsFragmentDoc = gql`
    fragment UserStatisticsFragment on UserStatisticTypes {
  anime {
    count
    meanScore
    standardDeviation
    minutesWatched
    episodesWatched
    chaptersRead
    volumesRead
    scores {
      score
      count
      meanScore
      minutesWatched
    }
    lengths {
      length
      count
      meanScore
      minutesWatched
    }
    formats {
      format
      count
      meanScore
      minutesWatched
    }
    statuses {
      status
      count
      meanScore
      minutesWatched
    }
    releaseYears {
      releaseYear
      count
      meanScore
      minutesWatched
    }
    startYears {
      startYear
      count
      meanScore
      minutesWatched
    }
    genres {
      genre
      count
      meanScore
      minutesWatched
    }
    tags {
      tag {
        name
      }
      count
      meanScore
      minutesWatched
    }
    countries {
      country
      count
      meanScore
      minutesWatched
    }
    voiceActors {
      count
      meanScore
      minutesWatched
      voiceActor {
        id
        name {
          full
        }
      }
      characterIds
      mediaIds
    }
    staff {
      count
      meanScore
      minutesWatched
      staff {
        id
        name {
          full
        }
      }
      mediaIds
    }
    studios {
      count
      meanScore
      minutesWatched
      studio {
        id
        name
      }
      mediaIds
    }
  }
  manga {
    count
    meanScore
    standardDeviation
    chaptersRead
    volumesRead
    scores {
      score
      count
      meanScore
      chaptersRead
    }
    lengths {
      length
      count
      meanScore
      chaptersRead
    }
    formats {
      format
      count
      meanScore
      chaptersRead
    }
    statuses {
      status
      count
      meanScore
      chaptersRead
    }
    releaseYears {
      releaseYear
      count
      meanScore
      chaptersRead
    }
    startYears {
      startYear
      count
      meanScore
      chaptersRead
    }
    genres {
      genre
      count
      meanScore
      chaptersRead
    }
    tags {
      tag {
        name
      }
      count
      meanScore
      chaptersRead
    }
    countries {
      country
      count
      meanScore
      chaptersRead
    }
    staff {
      count
      meanScore
      chaptersRead
      staff {
        id
        name {
          full
        }
      }
      mediaIds
    }
    studios {
      count
      meanScore
      chaptersRead
      studio {
        id
        name
      }
      mediaIds
    }
  }
}
    `;
export const UserBasicFragmentDoc = gql`
    fragment UserBasicFragment on User {
  id
  name
  avatar {
    ...UserAvatarFragment
  }
  about
  bannerImage
  donatorTier
  donatorBadge
  isFollowing
  isFollower
  isBlocked
  createdAt
  updatedAt
  unreadNotificationCount
  bans
  moderatorRoles
  moderatorStatus
  options {
    ...UserOptionsFragment
  }
  mediaListOptions {
    ...UserMediaListOptionsFragment
  }
  favourites {
    ...UserFavouritesFragment
  }
  statistics {
    ...UserStatisticsFragment
  }
  siteUrl
  stats {
    watchedTime
    chaptersRead
  }
  previousNames {
    name
    createdAt
    updatedAt
  }
}
    ${UserAvatarFragmentDoc}
${UserOptionsFragmentDoc}
${UserMediaListOptionsFragmentDoc}
${UserFavouritesFragmentDoc}
${UserStatisticsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment UserFragment on User {
  ...UserBasicFragment
}
    ${UserBasicFragmentDoc}`;
export const GetAnimeByIdDocument = gql`
    query GetAnimeById($id: Int) {
  Media(id: $id, type: ANIME) {
    ...MediaFragment
    characters {
      edges {
        role
        node {
          ...CharacterFragment
        }
      }
    }
    staff {
      edges {
        role
        node {
          ...StaffFragment
        }
      }
    }
    studios {
      edges {
        node {
          ...StudioFragment
        }
      }
    }
  }
}
    ${MediaFragmentDoc}
${CharacterFragmentDoc}
${StaffFragmentDoc}
${StudioFragmentDoc}`;
export const GetAnimeByTitleDocument = gql`
    query GetAnimeByTitle($title: String) {
  Page(page: 1, perPage: 1) {
    media(search: $title, type: ANIME) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetAnimeCharactersDocument = gql`
    query GetAnimeCharacters($id: Int) {
  Media(id: $id, type: ANIME) {
    characters {
      edges {
        role
        node {
          ...CharacterFragment
        }
      }
    }
  }
}
    ${CharacterFragmentDoc}`;
export const GetAnimeListByGenreDocument = gql`
    query GetAnimeListByGenre($genre: String!, $page: Int = 1, $perPage: Int = 10) {
  Page(page: $page, perPage: $perPage) {
    media(genre: $genre, type: ANIME) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetAnimePopularDocument = gql`
    query GetAnimePopular($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: ANIME) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetAnimeRecommendationsDocument = gql`
    query GetAnimeRecommendations($id: Int) {
  Media(id: $id, type: ANIME) {
    recommendations {
      edges {
        node {
          media {
            ...MediaFragment
          }
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetAnimeRelationsDocument = gql`
    query GetAnimeRelations($id: Int) {
  Media(id: $id, type: ANIME) {
    relations {
      edges {
        relationType
        node {
          ...MediaFragment
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetAnimeStaffDocument = gql`
    query GetAnimeStaff($id: Int) {
  Media(id: $id, type: ANIME) {
    staff {
      edges {
        role
        node {
          ...StaffFragment
        }
      }
    }
  }
}
    ${StaffFragmentDoc}`;
export const GetAnimeTrendingDocument = gql`
    query GetAnimeTrending($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const SearchAnimeDocument = gql`
    query SearchAnime($query: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(search: $query, type: ANIME) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const CharactersBirthdayTodayDocument = gql`
    query CharactersBirthdayToday($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    characters(isBirthday: true) {
      ...CharacterFragment
    }
  }
}
    ${CharacterFragmentDoc}`;
export const GetCharacterByIdDocument = gql`
    query GetCharacterById($id: Int!) {
  Character(id: $id) {
    ...CharacterFragment
    isFavourite
    favourites
    media {
      nodes {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        type
      }
    }
  }
}
    ${CharacterFragmentDoc}`;
export const ToggleFavoriteCharacterDocument = gql`
    mutation ToggleFavoriteCharacter($charID: Int) {
  ToggleFavourite(characterId: $charID) {
    characters(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `;
export const GetMangaByIdDocument = gql`
    query GetMangaById($id: Int) {
  Media(id: $id, type: MANGA) {
    ...MediaFragment
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaByTitleDocument = gql`
    query GetMangaByTitle($title: String!) {
  Page(page: 1, perPage: 1) {
    media(search: $title, type: MANGA) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaCharactersDocument = gql`
    query GetMangaCharacters($id: Int) {
  Media(id: $id, type: MANGA) {
    characters {
      edges {
        role
        node {
          ...CharacterFragment
        }
      }
    }
  }
}
    ${CharacterFragmentDoc}`;
export const GetMangaListByGenreDocument = gql`
    query GetMangaListByGenre($genre: String, $page: Int = 1, $perPage: Int = 10) {
  Page(page: $page, perPage: $perPage) {
    media(genre: $genre, type: MANGA) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaPopularDocument = gql`
    query GetMangaPopular($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: MANGA) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaRecommendationsDocument = gql`
    query GetMangaRecommendations($id: Int) {
  Media(id: $id, type: MANGA) {
    recommendations {
      edges {
        node {
          media {
            ...MediaFragment
          }
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaRelationsDocument = gql`
    query GetMangaRelations($id: Int) {
  Media(id: $id, type: MANGA) {
    relations {
      edges {
        relationType
        node {
          ...MediaFragment
        }
      }
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMangaStaffDocument = gql`
    query GetMangaStaff($id: Int) {
  Media(id: $id, type: MANGA) {
    staff {
      edges {
        role
        node {
          ...StaffFragment
        }
      }
    }
  }
}
    ${StaffFragmentDoc}`;
export const GetMangaTrendingDocument = gql`
    query GetMangaTrending($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaFragment
    }
  }
}
    ${MediaFragmentDoc}`;
export const GetMediaByIdDocument = gql`
    query GetMediaById($id: Int) {
  Media(id: $id) {
    ...MediaFragment
  }
}
    ${MediaFragmentDoc}`;
export const GetMediaListDocument = gql`
    query GetMediaList($id: Int) {
  MediaList(id: $id) {
    ...MediaListFragment
  }
}
    ${MediaListFragmentDoc}`;
export const GetMediaListByUserDocument = gql`
    query GetMediaListByUser($userId: Int, $mediaType: MediaType) {
  MediaListCollection(userId: $userId, type: $mediaType) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetMediaListByUserByUserNameDocument = gql`
    query GetMediaListByUserByUserName($userName: String, $mediaType: MediaType) {
  MediaListCollection(userName: $userName, type: $mediaType) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetStaffByIdDocument = gql`
    query GetStaffById($id: Int!) {
  Staff(id: $id) {
    ...StaffFragment
    isFavourite
    favourites
    staffMedia {
      nodes {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        type
      }
    }
    characters {
      nodes {
        ...CharacterFragment
      }
    }
    characterMedia {
      nodes {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        type
      }
    }
  }
}
    ${StaffFragmentDoc}
${CharacterFragmentDoc}`;
export const StaffBirthdayTodayDocument = gql`
    query StaffBirthdayToday($page: Int) {
  Page(page: $page) {
    staff(isBirthday: true) {
      id
      name {
        alternative
        first
        full
        last
        middle
        native
        userPreferred
      }
    }
  }
}
    `;
export const ToggleFavoriteStaffDocument = gql`
    mutation ToggleFavoriteStaff($staffID: Int) {
  ToggleFavourite(staffId: $staffID) {
    staff(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `;
export const GetUserAnimeListDocument = gql`
    query GetUserAnimeList($userId: Int, $status: MediaListStatus) {
  MediaListCollection(userId: $userId, type: ANIME, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetUserAnimeListByUserNameDocument = gql`
    query GetUserAnimeListByUserName($userName: String, $status: MediaListStatus) {
  MediaListCollection(userName: $userName, type: ANIME, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetUserInfoDocument = gql`
    query GetUserInfo($id: Int) {
  User(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;
export const GetUserInfoByUserNameDocument = gql`
    query GetUserInfoByUserName($userName: String) {
  User(name: $userName) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;
export const GetUserListDocument = gql`
    query GetUserList($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    users {
      ...UserFragment
    }
  }
}
    ${UserFragmentDoc}`;
export const GetUserMangaListDocument = gql`
    query GetUserMangaList($userId: Int, $status: MediaListStatus) {
  MediaListCollection(userId: $userId, type: MANGA, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetUserMangaListByUserNameDocument = gql`
    query GetUserMangaListByUserName($userName: String, $status: MediaListStatus) {
  MediaListCollection(userName: $userName, type: MANGA, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    ${MediaListFragmentDoc}`;
export const GetUserStatisticsDocument = gql`
    query GetUserStatistics($id: Int) {
  User(id: $id) {
    statistics {
      anime {
        count
        meanScore
        minutesWatched
      }
      manga {
        count
        meanScore
        chaptersRead
      }
    }
  }
}
    `;
export const GetUserStatisticsByUserNameDocument = gql`
    query GetUserStatisticsByUserName($userName: String) {
  User(name: $userName) {
    statistics {
      anime {
        count
        meanScore
        minutesWatched
      }
      manga {
        count
        meanScore
        chaptersRead
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
	operationType?: string,
	variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
	action,
	_operationName,
	_operationType,
	_variables,
) => action();

export function getSdk(
	client: GraphQLClient,
	withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
	return {
		GetAnimeById(
			variables?: GetAnimeByIdQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeByIdQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeByIdQuery>({
						document: GetAnimeByIdDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeById",
				"query",
				variables,
			);
		},
		GetAnimeByTitle(
			variables?: GetAnimeByTitleQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeByTitleQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeByTitleQuery>({
						document: GetAnimeByTitleDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeByTitle",
				"query",
				variables,
			);
		},
		GetAnimeCharacters(
			variables?: GetAnimeCharactersQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeCharactersQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeCharactersQuery>({
						document: GetAnimeCharactersDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeCharacters",
				"query",
				variables,
			);
		},
		GetAnimeListByGenre(
			variables: GetAnimeListByGenreQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeListByGenreQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeListByGenreQuery>({
						document: GetAnimeListByGenreDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeListByGenre",
				"query",
				variables,
			);
		},
		GetAnimePopular(
			variables?: GetAnimePopularQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimePopularQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimePopularQuery>({
						document: GetAnimePopularDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimePopular",
				"query",
				variables,
			);
		},
		GetAnimeRecommendations(
			variables?: GetAnimeRecommendationsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeRecommendationsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeRecommendationsQuery>({
						document: GetAnimeRecommendationsDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeRecommendations",
				"query",
				variables,
			);
		},
		GetAnimeRelations(
			variables?: GetAnimeRelationsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeRelationsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeRelationsQuery>({
						document: GetAnimeRelationsDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeRelations",
				"query",
				variables,
			);
		},
		GetAnimeStaff(
			variables?: GetAnimeStaffQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeStaffQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeStaffQuery>({
						document: GetAnimeStaffDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeStaff",
				"query",
				variables,
			);
		},
		GetAnimeTrending(
			variables?: GetAnimeTrendingQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetAnimeTrendingQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetAnimeTrendingQuery>({
						document: GetAnimeTrendingDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetAnimeTrending",
				"query",
				variables,
			);
		},
		SearchAnime(
			variables?: SearchAnimeQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<SearchAnimeQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<SearchAnimeQuery>({
						document: SearchAnimeDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"SearchAnime",
				"query",
				variables,
			);
		},
		CharactersBirthdayToday(
			variables?: CharactersBirthdayTodayQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<CharactersBirthdayTodayQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<CharactersBirthdayTodayQuery>({
						document: CharactersBirthdayTodayDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"CharactersBirthdayToday",
				"query",
				variables,
			);
		},
		GetCharacterById(
			variables: GetCharacterByIdQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetCharacterByIdQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetCharacterByIdQuery>({
						document: GetCharacterByIdDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetCharacterById",
				"query",
				variables,
			);
		},
		ToggleFavoriteCharacter(
			variables?: ToggleFavoriteCharacterMutationVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<ToggleFavoriteCharacterMutation> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ToggleFavoriteCharacterMutation>({
						document: ToggleFavoriteCharacterDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"ToggleFavoriteCharacter",
				"mutation",
				variables,
			);
		},
		GetMangaById(
			variables?: GetMangaByIdQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaByIdQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaByIdQuery>({
						document: GetMangaByIdDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaById",
				"query",
				variables,
			);
		},
		GetMangaByTitle(
			variables: GetMangaByTitleQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaByTitleQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaByTitleQuery>({
						document: GetMangaByTitleDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaByTitle",
				"query",
				variables,
			);
		},
		GetMangaCharacters(
			variables?: GetMangaCharactersQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaCharactersQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaCharactersQuery>({
						document: GetMangaCharactersDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaCharacters",
				"query",
				variables,
			);
		},
		GetMangaListByGenre(
			variables?: GetMangaListByGenreQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaListByGenreQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaListByGenreQuery>({
						document: GetMangaListByGenreDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaListByGenre",
				"query",
				variables,
			);
		},
		GetMangaPopular(
			variables?: GetMangaPopularQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaPopularQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaPopularQuery>({
						document: GetMangaPopularDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaPopular",
				"query",
				variables,
			);
		},
		GetMangaRecommendations(
			variables?: GetMangaRecommendationsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaRecommendationsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaRecommendationsQuery>({
						document: GetMangaRecommendationsDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaRecommendations",
				"query",
				variables,
			);
		},
		GetMangaRelations(
			variables?: GetMangaRelationsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaRelationsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaRelationsQuery>({
						document: GetMangaRelationsDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaRelations",
				"query",
				variables,
			);
		},
		GetMangaStaff(
			variables?: GetMangaStaffQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaStaffQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaStaffQuery>({
						document: GetMangaStaffDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaStaff",
				"query",
				variables,
			);
		},
		GetMangaTrending(
			variables?: GetMangaTrendingQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMangaTrendingQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMangaTrendingQuery>({
						document: GetMangaTrendingDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMangaTrending",
				"query",
				variables,
			);
		},
		GetMediaById(
			variables?: GetMediaByIdQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMediaByIdQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMediaByIdQuery>({
						document: GetMediaByIdDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMediaById",
				"query",
				variables,
			);
		},
		GetMediaList(
			variables?: GetMediaListQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMediaListQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMediaListQuery>({
						document: GetMediaListDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMediaList",
				"query",
				variables,
			);
		},
		GetMediaListByUser(
			variables?: GetMediaListByUserQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMediaListByUserQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMediaListByUserQuery>({
						document: GetMediaListByUserDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMediaListByUser",
				"query",
				variables,
			);
		},
		GetMediaListByUserByUserName(
			variables?: GetMediaListByUserByUserNameQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetMediaListByUserByUserNameQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetMediaListByUserByUserNameQuery>({
						document: GetMediaListByUserByUserNameDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetMediaListByUserByUserName",
				"query",
				variables,
			);
		},
		GetStaffById(
			variables: GetStaffByIdQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetStaffByIdQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetStaffByIdQuery>({
						document: GetStaffByIdDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetStaffById",
				"query",
				variables,
			);
		},
		StaffBirthdayToday(
			variables?: StaffBirthdayTodayQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<StaffBirthdayTodayQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<StaffBirthdayTodayQuery>({
						document: StaffBirthdayTodayDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"StaffBirthdayToday",
				"query",
				variables,
			);
		},
		ToggleFavoriteStaff(
			variables?: ToggleFavoriteStaffMutationVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<ToggleFavoriteStaffMutation> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ToggleFavoriteStaffMutation>({
						document: ToggleFavoriteStaffDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"ToggleFavoriteStaff",
				"mutation",
				variables,
			);
		},
		GetUserAnimeList(
			variables?: GetUserAnimeListQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserAnimeListQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserAnimeListQuery>({
						document: GetUserAnimeListDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserAnimeList",
				"query",
				variables,
			);
		},
		GetUserAnimeListByUserName(
			variables?: GetUserAnimeListByUserNameQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserAnimeListByUserNameQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserAnimeListByUserNameQuery>({
						document: GetUserAnimeListByUserNameDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserAnimeListByUserName",
				"query",
				variables,
			);
		},
		GetUserInfo(
			variables?: GetUserInfoQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserInfoQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserInfoQuery>({
						document: GetUserInfoDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserInfo",
				"query",
				variables,
			);
		},
		GetUserInfoByUserName(
			variables?: GetUserInfoByUserNameQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserInfoByUserNameQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserInfoByUserNameQuery>({
						document: GetUserInfoByUserNameDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserInfoByUserName",
				"query",
				variables,
			);
		},
		GetUserList(
			variables?: GetUserListQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserListQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserListQuery>({
						document: GetUserListDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserList",
				"query",
				variables,
			);
		},
		GetUserMangaList(
			variables?: GetUserMangaListQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserMangaListQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserMangaListQuery>({
						document: GetUserMangaListDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserMangaList",
				"query",
				variables,
			);
		},
		GetUserMangaListByUserName(
			variables?: GetUserMangaListByUserNameQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserMangaListByUserNameQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserMangaListByUserNameQuery>({
						document: GetUserMangaListByUserNameDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserMangaListByUserName",
				"query",
				variables,
			);
		},
		GetUserStatistics(
			variables?: GetUserStatisticsQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserStatisticsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserStatisticsQuery>({
						document: GetUserStatisticsDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserStatistics",
				"query",
				variables,
			);
		},
		GetUserStatisticsByUserName(
			variables?: GetUserStatisticsByUserNameQueryVariables,
			requestHeaders?: GraphQLClientRequestHeaders,
			signal?: RequestInit["signal"],
		): Promise<GetUserStatisticsByUserNameQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GetUserStatisticsByUserNameQuery>({
						document: GetUserStatisticsByUserNameDocument,
						variables,
						requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders },
						signal,
					}),
				"GetUserStatisticsByUserName",
				"query",
				variables,
			);
		},
	};
}
export type Sdk = ReturnType<typeof getSdk>;
