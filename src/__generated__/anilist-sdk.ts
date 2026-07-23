/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

export interface GraphQLClientRequestOptions<
  TVariables extends object = Record<string, unknown>,
> {
  document: string;
  variables?: TVariables;
  requestHeaders?: Record<string, string>;
  signal?: RequestInit["signal"];
  timeoutMs?: number;
  cacheKey?: string;
  tags?: string[];
  operationName?: string;
}

export interface GraphQLClient {
  request<
    TData = unknown,
    TVariables extends object = Record<string, unknown>,
  >(options: GraphQLClientRequestOptions<TVariables>): Promise<TData>;
}

export const ActivitySort = {
  Id: "ID",
  IdDesc: "ID_DESC",
  Pinned: "PINNED",
} as const;

export const ActivityType = {
  AnimeList: "ANIME_LIST",
  MangaList: "MANGA_LIST",
  MediaList: "MEDIA_LIST",
  Message: "MESSAGE",
  Text: "TEXT",
} as const;

export const AiringSort = {
  Episode: "EPISODE",
  EpisodeDesc: "EPISODE_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  MediaId: "MEDIA_ID",
  MediaIdDesc: "MEDIA_ID_DESC",
  Time: "TIME",
  TimeDesc: "TIME_DESC",
} as const;

export const CharacterRole = {
  Background: "BACKGROUND",
  Main: "MAIN",
  Supporting: "SUPPORTING",
} as const;

export const CharacterSort = {
  Favourites: "FAVOURITES",
  FavouritesDesc: "FAVOURITES_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  Relevance: "RELEVANCE",
  Role: "ROLE",
  RoleDesc: "ROLE_DESC",
  SearchMatch: "SEARCH_MATCH",
} as const;

export const ExternalLinkMediaType = {
  Anime: "ANIME",
  Manga: "MANGA",
  Staff: "STAFF",
} as const;

export const ExternalLinkType = {
  Info: "INFO",
  Social: "SOCIAL",
  Streaming: "STREAMING",
} as const;

export const LikeableType = {
  Activity: "ACTIVITY",
  ActivityReply: "ACTIVITY_REPLY",
  Thread: "THREAD",
  ThreadComment: "THREAD_COMMENT",
} as const;

export const MediaFormat = {
  Manga: "MANGA",
  Movie: "MOVIE",
  Music: "MUSIC",
  Novel: "NOVEL",
  Ona: "ONA",
  OneShot: "ONE_SHOT",
  Ova: "OVA",
  Special: "SPECIAL",
  Tv: "TV",
  TvShort: "TV_SHORT",
} as const;

export const MediaListSort = {
  AddedTime: "ADDED_TIME",
  AddedTimeDesc: "ADDED_TIME_DESC",
  FinishedOn: "FINISHED_ON",
  FinishedOnDesc: "FINISHED_ON_DESC",
  MediaId: "MEDIA_ID",
  MediaIdDesc: "MEDIA_ID_DESC",
  MediaPopularity: "MEDIA_POPULARITY",
  MediaPopularityDesc: "MEDIA_POPULARITY_DESC",
  MediaTitleEnglish: "MEDIA_TITLE_ENGLISH",
  MediaTitleEnglishDesc: "MEDIA_TITLE_ENGLISH_DESC",
  MediaTitleNative: "MEDIA_TITLE_NATIVE",
  MediaTitleNativeDesc: "MEDIA_TITLE_NATIVE_DESC",
  MediaTitleRomaji: "MEDIA_TITLE_ROMAJI",
  MediaTitleRomajiDesc: "MEDIA_TITLE_ROMAJI_DESC",
  Priority: "PRIORITY",
  PriorityDesc: "PRIORITY_DESC",
  Progress: "PROGRESS",
  ProgressDesc: "PROGRESS_DESC",
  ProgressVolumes: "PROGRESS_VOLUMES",
  ProgressVolumesDesc: "PROGRESS_VOLUMES_DESC",
  Repeat: "REPEAT",
  RepeatDesc: "REPEAT_DESC",
  Score: "SCORE",
  ScoreDesc: "SCORE_DESC",
  StartedOn: "STARTED_ON",
  StartedOnDesc: "STARTED_ON_DESC",
  Status: "STATUS",
  StatusDesc: "STATUS_DESC",
  UpdatedTime: "UPDATED_TIME",
  UpdatedTimeDesc: "UPDATED_TIME_DESC",
} as const;

export const MediaListStatus = {
  Completed: "COMPLETED",
  Current: "CURRENT",
  Dropped: "DROPPED",
  Paused: "PAUSED",
  Planning: "PLANNING",
  Repeating: "REPEATING",
} as const;

export const MediaRankType = {
  Popular: "POPULAR",
  Rated: "RATED",
} as const;

export const MediaRelation = {
  Adaptation: "ADAPTATION",
  Alternative: "ALTERNATIVE",
  Character: "CHARACTER",
  Compilation: "COMPILATION",
  Contains: "CONTAINS",
  Other: "OTHER",
  Parent: "PARENT",
  Prequel: "PREQUEL",
  SameUniverse: "SAME_UNIVERSE",
  Sequel: "SEQUEL",
  SideStory: "SIDE_STORY",
  Source: "SOURCE",
  SpinOff: "SPIN_OFF",
  Summary: "SUMMARY",
} as const;

export const MediaSeason = {
  Fall: "FALL",
  Spring: "SPRING",
  Summer: "SUMMER",
  Winter: "WINTER",
} as const;

export const MediaSort = {
  Chapters: "CHAPTERS",
  ChaptersDesc: "CHAPTERS_DESC",
  Duration: "DURATION",
  DurationDesc: "DURATION_DESC",
  EndDate: "END_DATE",
  EndDateDesc: "END_DATE_DESC",
  Episodes: "EPISODES",
  EpisodesDesc: "EPISODES_DESC",
  Favourites: "FAVOURITES",
  FavouritesDesc: "FAVOURITES_DESC",
  Format: "FORMAT",
  FormatDesc: "FORMAT_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  Popularity: "POPULARITY",
  PopularityDesc: "POPULARITY_DESC",
  Score: "SCORE",
  ScoreDesc: "SCORE_DESC",
  SearchMatch: "SEARCH_MATCH",
  StartDate: "START_DATE",
  StartDateDesc: "START_DATE_DESC",
  Status: "STATUS",
  StatusDesc: "STATUS_DESC",
  TitleEnglish: "TITLE_ENGLISH",
  TitleEnglishDesc: "TITLE_ENGLISH_DESC",
  TitleNative: "TITLE_NATIVE",
  TitleNativeDesc: "TITLE_NATIVE_DESC",
  TitleRomaji: "TITLE_ROMAJI",
  TitleRomajiDesc: "TITLE_ROMAJI_DESC",
  Trending: "TRENDING",
  TrendingDesc: "TRENDING_DESC",
  Type: "TYPE",
  TypeDesc: "TYPE_DESC",
  UpdatedAt: "UPDATED_AT",
  UpdatedAtDesc: "UPDATED_AT_DESC",
  Volumes: "VOLUMES",
  VolumesDesc: "VOLUMES_DESC",
} as const;

export const MediaSource = {
  Anime: "ANIME",
  Comic: "COMIC",
  Doujinshi: "DOUJINSHI",
  Game: "GAME",
  LightNovel: "LIGHT_NOVEL",
  LiveAction: "LIVE_ACTION",
  Manga: "MANGA",
  MultimediaProject: "MULTIMEDIA_PROJECT",
  Novel: "NOVEL",
  Original: "ORIGINAL",
  Other: "OTHER",
  PictureBook: "PICTURE_BOOK",
  VideoGame: "VIDEO_GAME",
  VisualNovel: "VISUAL_NOVEL",
  WebNovel: "WEB_NOVEL",
} as const;

export const MediaStatus = {
  Cancelled: "CANCELLED",
  Finished: "FINISHED",
  Hiatus: "HIATUS",
  NotYetReleased: "NOT_YET_RELEASED",
  Releasing: "RELEASING",
} as const;

export const MediaTrendSort = {
  Date: "DATE",
  DateDesc: "DATE_DESC",
  Episode: "EPISODE",
  EpisodeDesc: "EPISODE_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  MediaId: "MEDIA_ID",
  MediaIdDesc: "MEDIA_ID_DESC",
  Popularity: "POPULARITY",
  PopularityDesc: "POPULARITY_DESC",
  Score: "SCORE",
  ScoreDesc: "SCORE_DESC",
  Trending: "TRENDING",
  TrendingDesc: "TRENDING_DESC",
} as const;

export const MediaType = {
  Anime: "ANIME",
  Manga: "MANGA",
} as const;

export const ModActionType = {
  Anon: "ANON",
  Ban: "BAN",
  Delete: "DELETE",
  Edit: "EDIT",
  Expire: "EXPIRE",
  Note: "NOTE",
  Report: "REPORT",
  Reset: "RESET",
} as const;

export const ModRole = {
  Admin: "ADMIN",
  AnimeData: "ANIME_DATA",
  CharacterData: "CHARACTER_DATA",
  Community: "COMMUNITY",
  Developer: "DEVELOPER",
  DiscordCommunity: "DISCORD_COMMUNITY",
  LeadAnimeData: "LEAD_ANIME_DATA",
  LeadCommunity: "LEAD_COMMUNITY",
  LeadDeveloper: "LEAD_DEVELOPER",
  LeadMangaData: "LEAD_MANGA_DATA",
  LeadSocialMedia: "LEAD_SOCIAL_MEDIA",
  MangaData: "MANGA_DATA",
  Retired: "RETIRED",
  SocialMedia: "SOCIAL_MEDIA",
  StaffData: "STAFF_DATA",
} as const;

export const NotificationType = {
  ActivityLike: "ACTIVITY_LIKE",
  ActivityMention: "ACTIVITY_MENTION",
  ActivityMessage: "ACTIVITY_MESSAGE",
  ActivityReply: "ACTIVITY_REPLY",
  ActivityReplyLike: "ACTIVITY_REPLY_LIKE",
  ActivityReplySubscribed: "ACTIVITY_REPLY_SUBSCRIBED",
  Airing: "AIRING",
  CharacterSubmissionUpdate: "CHARACTER_SUBMISSION_UPDATE",
  Following: "FOLLOWING",
  MediaDataChange: "MEDIA_DATA_CHANGE",
  MediaDeletion: "MEDIA_DELETION",
  MediaMerge: "MEDIA_MERGE",
  MediaSubmissionUpdate: "MEDIA_SUBMISSION_UPDATE",
  RelatedMediaAddition: "RELATED_MEDIA_ADDITION",
  StaffSubmissionUpdate: "STAFF_SUBMISSION_UPDATE",
  ThreadCommentLike: "THREAD_COMMENT_LIKE",
  ThreadCommentMention: "THREAD_COMMENT_MENTION",
  ThreadCommentReply: "THREAD_COMMENT_REPLY",
  ThreadLike: "THREAD_LIKE",
  ThreadSubscribed: "THREAD_SUBSCRIBED",
} as const;

export const RecommendationRating = {
  NoRating: "NO_RATING",
  RateDown: "RATE_DOWN",
  RateUp: "RATE_UP",
} as const;

export const RecommendationSort = {
  Id: "ID",
  IdDesc: "ID_DESC",
  Rating: "RATING",
  RatingDesc: "RATING_DESC",
} as const;

export const ReviewRating = {
  DownVote: "DOWN_VOTE",
  NoVote: "NO_VOTE",
  UpVote: "UP_VOTE",
} as const;

export const ReviewSort = {
  CreatedAt: "CREATED_AT",
  CreatedAtDesc: "CREATED_AT_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  Rating: "RATING",
  RatingDesc: "RATING_DESC",
  Score: "SCORE",
  ScoreDesc: "SCORE_DESC",
  UpdatedAt: "UPDATED_AT",
  UpdatedAtDesc: "UPDATED_AT_DESC",
} as const;

export const RevisionHistoryAction = {
  Create: "CREATE",
  Edit: "EDIT",
} as const;

export const ScoreFormat = {
  Point3: "POINT_3",
  Point5: "POINT_5",
  Point10: "POINT_10",
  Point10Decimal: "POINT_10_DECIMAL",
  Point100: "POINT_100",
} as const;

export const SiteTrendSort = {
  Change: "CHANGE",
  ChangeDesc: "CHANGE_DESC",
  Count: "COUNT",
  CountDesc: "COUNT_DESC",
  Date: "DATE",
  DateDesc: "DATE_DESC",
} as const;

export const StaffLanguage = {
  English: "ENGLISH",
  French: "FRENCH",
  German: "GERMAN",
  Hebrew: "HEBREW",
  Hungarian: "HUNGARIAN",
  Italian: "ITALIAN",
  Japanese: "JAPANESE",
  Korean: "KOREAN",
  Portuguese: "PORTUGUESE",
  Spanish: "SPANISH",
} as const;

export const StaffSort = {
  Favourites: "FAVOURITES",
  FavouritesDesc: "FAVOURITES_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  Language: "LANGUAGE",
  LanguageDesc: "LANGUAGE_DESC",
  Relevance: "RELEVANCE",
  Role: "ROLE",
  RoleDesc: "ROLE_DESC",
  SearchMatch: "SEARCH_MATCH",
} as const;

export const StudioSort = {
  Favourites: "FAVOURITES",
  FavouritesDesc: "FAVOURITES_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  Name: "NAME",
  NameDesc: "NAME_DESC",
  SearchMatch: "SEARCH_MATCH",
} as const;

export const SubmissionSort = {
  Id: "ID",
  IdDesc: "ID_DESC",
} as const;

export const SubmissionStatus = {
  Accepted: "ACCEPTED",
  PartiallyAccepted: "PARTIALLY_ACCEPTED",
  Pending: "PENDING",
  Rejected: "REJECTED",
} as const;

export const ThreadCommentSort = {
  Id: "ID",
  IdDesc: "ID_DESC",
} as const;

export const ThreadSort = {
  CreatedAt: "CREATED_AT",
  CreatedAtDesc: "CREATED_AT_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  IsSticky: "IS_STICKY",
  RepliedAt: "REPLIED_AT",
  RepliedAtDesc: "REPLIED_AT_DESC",
  ReplyCount: "REPLY_COUNT",
  ReplyCountDesc: "REPLY_COUNT_DESC",
  SearchMatch: "SEARCH_MATCH",
  Title: "TITLE",
  TitleDesc: "TITLE_DESC",
  UpdatedAt: "UPDATED_AT",
  UpdatedAtDesc: "UPDATED_AT_DESC",
  ViewCount: "VIEW_COUNT",
  ViewCountDesc: "VIEW_COUNT_DESC",
} as const;

export const UserSort = {
  ChaptersRead: "CHAPTERS_READ",
  ChaptersReadDesc: "CHAPTERS_READ_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  SearchMatch: "SEARCH_MATCH",
  Username: "USERNAME",
  UsernameDesc: "USERNAME_DESC",
  WatchedTime: "WATCHED_TIME",
  WatchedTimeDesc: "WATCHED_TIME_DESC",
} as const;

export const UserStaffNameLanguage = {
  Native: "NATIVE",
  Romaji: "ROMAJI",
  RomajiWestern: "ROMAJI_WESTERN",
} as const;

export const UserStatisticsSort = {
  Count: "COUNT",
  CountDesc: "COUNT_DESC",
  Id: "ID",
  IdDesc: "ID_DESC",
  MeanScore: "MEAN_SCORE",
  MeanScoreDesc: "MEAN_SCORE_DESC",
  Progress: "PROGRESS",
  ProgressDesc: "PROGRESS_DESC",
} as const;

export const UserTitleLanguage = {
  English: "ENGLISH",
  EnglishStylised: "ENGLISH_STYLISED",
  Native: "NATIVE",
  NativeStylised: "NATIVE_STYLISED",
  Romaji: "ROMAJI",
  RomajiStylised: "ROMAJI_STYLISED",
} as const;

type TypedDocumentStringConstructor = {
  new <TResult = unknown, TVariables = unknown>(
    value: string,
    meta?: Record<string, unknown>,
  ): string;
};

const TypedDocumentString = class extends String {
  readonly value: string;
  readonly __meta__?: Record<string, unknown>;

  constructor(value: string, meta?: Record<string, unknown>) {
    super(value);
    this.value = value;
    this.__meta__ = meta;
  }

  override toString(): string {
    return this.value;
  }
} as unknown as TypedDocumentStringConstructor;

/** The role the character plays in the media */
export type CharacterRole =
  /** A background character in the media */
  | 'BACKGROUND'
  /** A primary character role in the media */
  | 'MAIN'
  /** A supporting character role in the media */
  | 'SUPPORTING';

export type ExternalLinkType =
  | 'INFO'
  | 'SOCIAL'
  | 'STREAMING';

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Day (24) */
  day: number | null | undefined;
  /** Numeric Month (3) */
  month: number | null | undefined;
  /** Numeric Year (2017) */
  year: number | null | undefined;
};

/** The format the media was released in */
export type MediaFormat =
  /** Professionally published manga with more than one chapter */
  | 'MANGA'
  /** Anime movies with a theatrical release */
  | 'MOVIE'
  /** Short anime released as a music video */
  | 'MUSIC'
  /** Written books released as a series of light novels */
  | 'NOVEL'
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  | 'ONA'
  /** Manga with just one chapter */
  | 'ONE_SHOT'
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  | 'OVA'
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  | 'SPECIAL'
  /** Anime broadcast on television */
  | 'TV'
  /** Anime which are under 15 minutes in length and broadcast on television */
  | 'TV_SHORT';

/** Media list watching/reading status enum. */
export type MediaListStatus =
  /** Finished watching/reading */
  | 'COMPLETED'
  /** Currently watching/reading */
  | 'CURRENT'
  /** Stopped watching/reading before completing */
  | 'DROPPED'
  /** Paused watching/reading */
  | 'PAUSED'
  /** Planning to watch/read */
  | 'PLANNING'
  /** Re-watching/reading */
  | 'REPEATING';

/** The type of ranking */
export type MediaRankType =
  /** Ranking is based on the media's popularity */
  | 'POPULAR'
  /** Ranking is based on the media's ratings/score */
  | 'RATED';

/** Type of relation media has to its parent. */
export type MediaRelation =
  /** An adaption of this media into a different format */
  | 'ADAPTATION'
  /** An alternative version of the same media */
  | 'ALTERNATIVE'
  /** Shares at least 1 character */
  | 'CHARACTER'
  /** Version 2 only. */
  | 'COMPILATION'
  /** Version 2 only. */
  | 'CONTAINS'
  /** Other */
  | 'OTHER'
  /** The media a side story is from */
  | 'PARENT'
  /** Released before the relation */
  | 'PREQUEL'
  /** Version 3 only. The media is set in the same universe as another media */
  | 'SAME_UNIVERSE'
  /** Released after the relation */
  | 'SEQUEL'
  /** A side story of the parent media */
  | 'SIDE_STORY'
  /** Version 2 only. The source material the media was adapted from */
  | 'SOURCE'
  /** An alternative version of the media with a different primary focus */
  | 'SPIN_OFF'
  /** A shortened and summarized version */
  | 'SUMMARY';

export type MediaSeason =
  /** Predominantly started airing between October and November */
  | 'FALL'
  /** Predominantly started airing between April and June */
  | 'SPRING'
  /** Predominantly started airing between July and September */
  | 'SUMMER'
  /** Predominantly started airing between January and March */
  | 'WINTER';

/** Source type the media was adapted from */
export type MediaSource =
  /** Version 2+ only. Japanese Anime */
  | 'ANIME'
  /** Version 3 only. Comics excluding manga */
  | 'COMIC'
  /** Version 2+ only. Self-published works */
  | 'DOUJINSHI'
  /** Version 3 only. Games excluding video games */
  | 'GAME'
  /** Written work published in volumes */
  | 'LIGHT_NOVEL'
  /** Version 3 only. Live action media such as movies or TV show */
  | 'LIVE_ACTION'
  /** Asian comic book */
  | 'MANGA'
  /** Version 3 only. Multimedia project */
  | 'MULTIMEDIA_PROJECT'
  /** Version 2+ only. Written works not published in volumes */
  | 'NOVEL'
  /** An original production not based of another work */
  | 'ORIGINAL'
  /** Other */
  | 'OTHER'
  /** Version 3 only. Picture book */
  | 'PICTURE_BOOK'
  /** Video game */
  | 'VIDEO_GAME'
  /** Video game driven primary by text and narrative */
  | 'VISUAL_NOVEL'
  /** Version 3 only. Written works published online */
  | 'WEB_NOVEL';

/** The current releasing status of the media */
export type MediaStatus =
  /** Ended before the work could be finished */
  | 'CANCELLED'
  /** Has completed and is no longer being released */
  | 'FINISHED'
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  | 'HIATUS'
  /** To be released at a later date */
  | 'NOT_YET_RELEASED'
  /** Currently releasing */
  | 'RELEASING';

/** Media type enum, anime or manga. */
export type MediaType =
  /** Japanese Anime */
  | 'ANIME'
  /** Asian comic */
  | 'MANGA';

/** Mod role enums */
export type ModRole =
  /** An AniList administrator */
  | 'ADMIN'
  /** An anime data moderator */
  | 'ANIME_DATA'
  /** A character data moderator */
  | 'CHARACTER_DATA'
  /** A community moderator */
  | 'COMMUNITY'
  /** An AniList developer */
  | 'DEVELOPER'
  /** A discord community moderator */
  | 'DISCORD_COMMUNITY'
  /** A lead anime data moderator */
  | 'LEAD_ANIME_DATA'
  /** A lead community moderator */
  | 'LEAD_COMMUNITY'
  /** A head developer of AniList */
  | 'LEAD_DEVELOPER'
  /** A lead manga data moderator */
  | 'LEAD_MANGA_DATA'
  /** A lead social media moderator */
  | 'LEAD_SOCIAL_MEDIA'
  /** A manga data moderator */
  | 'MANGA_DATA'
  /** A retired moderator */
  | 'RETIRED'
  /** A social media moderator */
  | 'SOCIAL_MEDIA'
  /** A staff data moderator */
  | 'STAFF_DATA';

/** Notification type enum */
export type NotificationType =
  /** A user has liked your activity */
  | 'ACTIVITY_LIKE'
  /** A user has mentioned you in their activity */
  | 'ACTIVITY_MENTION'
  /** A user has sent you message */
  | 'ACTIVITY_MESSAGE'
  /** A user has replied to your activity */
  | 'ACTIVITY_REPLY'
  /** A user has liked your activity reply */
  | 'ACTIVITY_REPLY_LIKE'
  /** A user has replied to activity you have also replied to */
  | 'ACTIVITY_REPLY_SUBSCRIBED'
  /** An anime you are currently watching has aired */
  | 'AIRING'
  /** A user's character submission has been accepted, partially accepted, or rejected */
  | 'CHARACTER_SUBMISSION_UPDATE'
  /** A user has followed you */
  | 'FOLLOWING'
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  | 'MEDIA_DATA_CHANGE'
  /** An anime or manga on the user's list has been deleted from the site */
  | 'MEDIA_DELETION'
  /** Anime or manga entries on the user's list have been merged into a single entry */
  | 'MEDIA_MERGE'
  /** A user's submission has been accepted, partially accepted, or rejected */
  | 'MEDIA_SUBMISSION_UPDATE'
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  | 'RELATED_MEDIA_ADDITION'
  /** A user's staff submission has been accepted, partially accepted, or rejected */
  | 'STAFF_SUBMISSION_UPDATE'
  /** A user has liked your forum comment */
  | 'THREAD_COMMENT_LIKE'
  /** A user has mentioned you in a forum comment */
  | 'THREAD_COMMENT_MENTION'
  /** A user has replied to your forum comment */
  | 'THREAD_COMMENT_REPLY'
  /** A user has liked your forum thread */
  | 'THREAD_LIKE'
  /** A user has commented in one of your subscribed forum threads */
  | 'THREAD_SUBSCRIBED';

/** Media list scoring type */
export type ScoreFormat =
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  | 'POINT_3'
  /** An integer from 0-5. Should be represented in Stars */
  | 'POINT_5'
  /** An integer from 0-10 */
  | 'POINT_10'
  /** A float from 0-10 with 1 decimal place */
  | 'POINT_10_DECIMAL'
  /** An integer from 0-100 */
  | 'POINT_100';

/** The language the user wants to see staff and character names in */
export type UserStaffNameLanguage =
  /** The staff or character's name in their native language */
  | 'NATIVE'
  /** The romanization of the staff or character's native name */
  | 'ROMAJI'
  /** The romanization of the staff or character's native name, with western name ordering */
  | 'ROMAJI_WESTERN';

/** The language the user wants to see media titles in */
export type UserTitleLanguage =
  /** The official english title */
  | 'ENGLISH'
  /** The official english title, stylised by media creator */
  | 'ENGLISH_STYLISED'
  /** Official title in it's native language */
  | 'NATIVE'
  /** Official title in it's native language, stylised by media creator */
  | 'NATIVE_STYLISED'
  /** The romanization of the native language title */
  | 'ROMAJI'
  /** The romanization of the native language title, stylised by media creator */
  | 'ROMAJI_STYLISED';

export type AnimeFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, streamingEpisodes: Array<{ title: string | null, thumbnail: string | null, url: string | null, site: string | null } | null> | null, studios: { edges: Array<{ isMain: boolean, favouriteOrder: number | null, node: { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null } | null } | null> | null } | null, relations: { edges: Array<{ id: number | null, relationType: MediaRelation | null, isMainStudio: boolean, characterRole: CharacterRole | null, characterName: string | null, roleNotes: string | null, dubGroup: string | null, staffRole: string | null, favouriteOrder: number | null, node: { id: number, type: MediaType | null, format: MediaFormat | null, status: MediaStatus | null, season: MediaSeason | null, seasonYear: number | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, averageScore: number | null, popularity: number | null, favourites: number | null, genres: Array<string | null> | null, isAdult: boolean | null, countryOfOrigin: unknown, siteUrl: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null, characters: { edges: Array<{ id: number | null, role: CharacterRole | null, name: string | null, favouriteOrder: number | null, voiceActors: Array<{ id: number, languageV2: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, voiceActorRoles: Array<{ roleNotes: string | null, dubGroup: string | null, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null, staff: { edges: Array<{ id: number | null, role: string | null, favouriteOrder: number | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null, isGeneralSpoiler: boolean | null, isMediaSpoiler: boolean | null, isAdult: boolean | null, userId: number | null } | null> | null, rankings: Array<{ id: number, rank: number, type: MediaRankType, format: MediaFormat, year: number | null, season: MediaSeason | null, allTime: boolean | null, context: string } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null, language: string | null, color: string | null, icon: string | null, notes: string | null, isDisabled: boolean | null } | null> | null, stats: { scoreDistribution: Array<{ score: number | null, amount: number | null } | null> | null, statusDistribution: Array<{ status: MediaListStatus | null, amount: number | null } | null> | null, airingProgression: Array<{ episode: number | null, score: number | null, watching: number | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, reviews: { pageInfo: { total: number | null } | null } | null, recommendations: { pageInfo: { total: number | null } | null } | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type CharacterFragment = { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null };

export type CoverImageFragment = { large: string | null, medium: string | null, extraLarge: string | null, color: string | null };

export type DateFragment = { year: number | null, month: number | null, day: number | null };

export type CharacterImageFragment = { large: string | null, medium: string | null };

export type StaffImageFragment = { large: string | null, medium: string | null };

export type UserAvatarFragment = { large: string | null, medium: string | null };

export type TitleFragment = { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null };

export type CharacterEdgeFragment = { id: number | null, role: CharacterRole | null, name: string | null, favouriteOrder: number | null, voiceActors: Array<{ id: number, languageV2: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, voiceActorRoles: Array<{ roleNotes: string | null, dubGroup: string | null, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null };

export type CharacterConnectionFragment = { edges: Array<{ id: number | null, role: CharacterRole | null, name: string | null, favouriteOrder: number | null, voiceActors: Array<{ id: number, languageV2: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, voiceActorRoles: Array<{ roleNotes: string | null, dubGroup: string | null, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null> | null };

export type MediaRelationNodeFragment = { id: number, type: MediaType | null, format: MediaFormat | null, status: MediaStatus | null, season: MediaSeason | null, seasonYear: number | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, averageScore: number | null, popularity: number | null, favourites: number | null, genres: Array<string | null> | null, isAdult: boolean | null, countryOfOrigin: unknown, siteUrl: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaRelationEdgeFragment = { id: number | null, relationType: MediaRelation | null, isMainStudio: boolean, characterRole: CharacterRole | null, characterName: string | null, roleNotes: string | null, dubGroup: string | null, staffRole: string | null, favouriteOrder: number | null, node: { id: number, type: MediaType | null, format: MediaFormat | null, status: MediaStatus | null, season: MediaSeason | null, seasonYear: number | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, averageScore: number | null, popularity: number | null, favourites: number | null, genres: Array<string | null> | null, isAdult: boolean | null, countryOfOrigin: unknown, siteUrl: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null };

export type MediaRelationConnectionFragment = { edges: Array<{ id: number | null, relationType: MediaRelation | null, isMainStudio: boolean, characterRole: CharacterRole | null, characterName: string | null, roleNotes: string | null, dubGroup: string | null, staffRole: string | null, favouriteOrder: number | null, node: { id: number, type: MediaType | null, format: MediaFormat | null, status: MediaStatus | null, season: MediaSeason | null, seasonYear: number | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, averageScore: number | null, popularity: number | null, favourites: number | null, genres: Array<string | null> | null, isAdult: boolean | null, countryOfOrigin: unknown, siteUrl: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null };

export type StaffEdgeFragment = { id: number | null, role: string | null, favouriteOrder: number | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null };

export type StaffConnectionFragment = { edges: Array<{ id: number | null, role: string | null, favouriteOrder: number | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null> | null };

export type StudioNodeFragment = { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null };

export type StudioEdgeFragment = { isMain: boolean, favouriteOrder: number | null, node: { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null } | null };

export type StudioConnectionFragment = { edges: Array<{ isMain: boolean, favouriteOrder: number | null, node: { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null } | null } | null> | null };

export type CharacterNameFragment = { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null };

export type CharacterBasicFragment = { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null };

export type StaffNameFragment = { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null };

export type StaffBasicFragment = { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null };

export type UserOptionsFragment = { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null };

export type UserMediaListOptionsFragment = { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null };

export type UserFavouritesFragment = { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null };

export type UserStatisticsFragment = { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null };

export type UserBasicFragment = { id: number, name: string, about: string | null, bannerImage: string | null, donatorTier: number | null, donatorBadge: string | null, isFollowing: boolean | null, isFollower: boolean | null, isBlocked: boolean | null, createdAt: number | null, updatedAt: number | null, unreadNotificationCount: number | null, bans: unknown, moderatorRoles: Array<ModRole | null> | null, moderatorStatus: string | null, siteUrl: string | null, avatar: { large: string | null, medium: string | null } | null, options: { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null } | null, mediaListOptions: { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null } | null, favourites: { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null } | null, statistics: { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null } | null, stats: { watchedTime: number | null, chaptersRead: number | null } | null, previousNames: Array<{ name: string | null, createdAt: number | null, updatedAt: number | null } | null> | null };

export type MangaFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, relations: { edges: Array<{ id: number | null, relationType: MediaRelation | null, isMainStudio: boolean, characterRole: CharacterRole | null, characterName: string | null, roleNotes: string | null, dubGroup: string | null, staffRole: string | null, favouriteOrder: number | null, node: { id: number, type: MediaType | null, format: MediaFormat | null, status: MediaStatus | null, season: MediaSeason | null, seasonYear: number | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, averageScore: number | null, popularity: number | null, favourites: number | null, genres: Array<string | null> | null, isAdult: boolean | null, countryOfOrigin: unknown, siteUrl: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null, characters: { edges: Array<{ id: number | null, role: CharacterRole | null, name: string | null, favouriteOrder: number | null, voiceActors: Array<{ id: number, languageV2: string | null, name: { full: string | null, native: string | null } | null, image: { large: string | null, medium: string | null } | null } | null> | null, voiceActorRoles: Array<{ roleNotes: string | null, dubGroup: string | null, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null, staff: { edges: Array<{ id: number | null, role: string | null, favouriteOrder: number | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null, nodes: Array<{ id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null, isGeneralSpoiler: boolean | null, isMediaSpoiler: boolean | null, isAdult: boolean | null, userId: number | null } | null> | null, rankings: Array<{ id: number, rank: number, type: MediaRankType, format: MediaFormat, year: number | null, season: MediaSeason | null, allTime: boolean | null, context: string } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null, language: string | null, color: string | null, icon: string | null, notes: string | null, isDisabled: boolean | null } | null> | null, stats: { scoreDistribution: Array<{ score: number | null, amount: number | null } | null> | null, statusDistribution: Array<{ status: MediaListStatus | null, amount: number | null } | null> | null, airingProgression: Array<{ episode: number | null, score: number | null, watching: number | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, reviews: { pageInfo: { total: number | null } | null } | null, recommendations: { pageInfo: { total: number | null } | null } | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaCoreFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaDetailedFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null, isGeneralSpoiler: boolean | null, isMediaSpoiler: boolean | null, isAdult: boolean | null, userId: number | null } | null> | null, rankings: Array<{ id: number, rank: number, type: MediaRankType, format: MediaFormat, year: number | null, season: MediaSeason | null, allTime: boolean | null, context: string } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null, language: string | null, color: string | null, icon: string | null, notes: string | null, isDisabled: boolean | null } | null> | null, stats: { scoreDistribution: Array<{ score: number | null, amount: number | null } | null> | null, statusDistribution: Array<{ status: MediaListStatus | null, amount: number | null } | null> | null, airingProgression: Array<{ episode: number | null, score: number | null, watching: number | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, reviews: { pageInfo: { total: number | null } | null } | null, recommendations: { pageInfo: { total: number | null } | null } | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaBasicFragment = { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null };

export type MediaExternalLinkFragment = { id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null, language: string | null, color: string | null, icon: string | null, notes: string | null, isDisabled: boolean | null };

export type MediaExternalLinkBasicFragment = { id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null };

export type MediaRankFragment = { id: number, rank: number, type: MediaRankType, format: MediaFormat, year: number | null, season: MediaSeason | null, allTime: boolean | null, context: string };

export type ScoreDistributionFragment = { score: number | null, amount: number | null };

export type StatusDistributionFragment = { status: MediaListStatus | null, amount: number | null };

export type MediaStatsFragment = { scoreDistribution: Array<{ score: number | null, amount: number | null } | null> | null, statusDistribution: Array<{ status: MediaListStatus | null, amount: number | null } | null> | null, airingProgression: Array<{ episode: number | null, score: number | null, watching: number | null } | null> | null };

export type MediaStreamingEpisodeFragment = { title: string | null, thumbnail: string | null, url: string | null, site: string | null };

export type AiringScheduleFragment = { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number };

export type MediaTagFragment = { id: number, name: string, description: string | null, category: string | null, rank: number | null, isGeneralSpoiler: boolean | null, isMediaSpoiler: boolean | null, isAdult: boolean | null, userId: number | null };

export type MediaTagBasicFragment = { id: number, name: string, description: string | null, category: string | null, rank: number | null };

export type MediaTrailerFragment = { id: string | null, site: string | null, thumbnail: string | null };

export type MediaListFragment = { id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null };

export type StaffFragment = { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null };

export type StudioFragment = { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null, media: { pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null };

export type UserFragment = { id: number, name: string, about: string | null, bannerImage: string | null, donatorTier: number | null, donatorBadge: string | null, isFollowing: boolean | null, isFollower: boolean | null, isBlocked: boolean | null, createdAt: number | null, updatedAt: number | null, unreadNotificationCount: number | null, bans: unknown, moderatorRoles: Array<ModRole | null> | null, moderatorStatus: string | null, siteUrl: string | null, avatar: { large: string | null, medium: string | null } | null, options: { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null } | null, mediaListOptions: { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null } | null, favourites: { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null } | null, statistics: { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null } | null, stats: { watchedTime: number | null, chaptersRead: number | null } | null, previousNames: Array<{ name: string | null, createdAt: number | null, updatedAt: number | null } | null> | null };

export type GetAnimeBrowseQueryVariables = Exact<{
  genre: string | null | undefined;
  format: MediaFormat | null | undefined;
  status: MediaStatus | null | undefined;
  seasonYear: number | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetAnimeBrowseQuery = { Page: { pageInfo: { hasNextPage: boolean | null, currentPage: number | null, total: number | null } | null, media: Array<{ id: number, bannerImage: string | null, genres: Array<string | null> | null, format: MediaFormat | null, status: MediaStatus | null, seasonYear: number | null, averageScore: number | null, episodes: number | null, title: { english: string | null, romaji: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { extraLarge: string | null, large: string | null } | null } | null> | null } | null };

export type GetAnimeByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetAnimeByIdQuery = { Media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, characters: { edges: Array<{ role: CharacterRole | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null, staff: { edges: Array<{ role: string | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null, studios: { edges: Array<{ node: { id: number, name: string, isAnimationStudio: boolean, favourites: number | null, isFavourite: boolean, siteUrl: string | null, media: { pageInfo: { total: number | null, perPage: number | null, currentPage: number | null, lastPage: number | null, hasNextPage: boolean | null } | null } | null } | null } | null> | null } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null, isGeneralSpoiler: boolean | null, isMediaSpoiler: boolean | null, isAdult: boolean | null, userId: number | null } | null> | null, rankings: Array<{ id: number, rank: number, type: MediaRankType, format: MediaFormat, year: number | null, season: MediaSeason | null, allTime: boolean | null, context: string } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null, language: string | null, color: string | null, icon: string | null, notes: string | null, isDisabled: boolean | null } | null> | null, stats: { scoreDistribution: Array<{ score: number | null, amount: number | null } | null> | null, statusDistribution: Array<{ status: MediaListStatus | null, amount: number | null } | null> | null, airingProgression: Array<{ episode: number | null, score: number | null, watching: number | null } | null> | null } | null, trailer: { id: string | null, site: string | null, thumbnail: string | null } | null, reviews: { pageInfo: { total: number | null } | null } | null, recommendations: { pageInfo: { total: number | null } | null } | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null };

export type GetAnimeByTitleQueryVariables = Exact<{
  title: string;
}>;


export type GetAnimeByTitleQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetAnimeCharactersQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetAnimeCharactersQuery = { Media: { characters: { edges: Array<{ role: CharacterRole | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetAnimeListByGenreQueryVariables = Exact<{
  genre: string;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetAnimeListByGenreQuery = { Page: { pageInfo: { hasNextPage: boolean | null } | null, media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetAnimePopularQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetAnimePopularQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetAnimeRecommendationsQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetAnimeRecommendationsQuery = { Media: { recommendations: { edges: Array<{ node: { media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null } | null> | null } | null } | null };

export type GetAnimeRelationsQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetAnimeRelationsQuery = { Media: { relations: { edges: Array<{ relationType: MediaRelation | null, node: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetAnimeStaffQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetAnimeStaffQuery = { Media: { staff: { edges: Array<{ role: string | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetAnimeTrendingQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetAnimeTrendingQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetSeasonalAnimeQueryVariables = Exact<{
  season: MediaSeason | null | undefined;
  seasonYear: number | null | undefined;
  page: number | null | undefined;
  perPage: number | null | undefined;
}>;


export type GetSeasonalAnimeQuery = { Page: { pageInfo: { hasNextPage: boolean | null, currentPage: number | null } | null, media: Array<{ id: number, bannerImage: string | null, genres: Array<string | null> | null, seasonYear: number | null, season: MediaSeason | null, title: { english: string | null, romaji: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { extraLarge: string | null, large: string | null } | null } | null> | null } | null };

export type SearchAnimeQueryVariables = Exact<{
  query: string | null | undefined;
  page: number | null | undefined;
  perPage: number | null | undefined;
}>;


export type SearchAnimeQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type ToggleFavoriteAnimeMutationVariables = Exact<{
  animeId: number;
}>;


export type ToggleFavoriteAnimeMutation = { ToggleFavourite: { anime: { nodes: Array<{ id: number } | null> | null } | null } | null };

export type CharactersBirthdayTodayQueryVariables = Exact<{
  page: number | null | undefined;
  perPage: number | null | undefined;
}>;


export type CharactersBirthdayTodayQuery = { Page: { characters: Array<{ id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetCharacterByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetCharacterByIdQuery = { Character: { isFavourite: boolean, favourites: number | null, id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavouriteBlocked: boolean, siteUrl: string | null, media: { nodes: Array<{ id: number, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null } | null> | null } | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null };

export type ToggleFavoriteCharacterMutationVariables = Exact<{
  charID: number;
}>;


export type ToggleFavoriteCharacterMutation = { ToggleFavourite: { characters: { nodes: Array<{ id: number } | null> | null } | null } | null };

export type GetMangaByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetMangaByIdQuery = { Media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null };

export type GetMangaByTitleQueryVariables = Exact<{
  title: string;
}>;


export type GetMangaByTitleQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetMangaCharactersQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetMangaCharactersQuery = { Media: { characters: { edges: Array<{ role: CharacterRole | null, node: { id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetMangaListByGenreQueryVariables = Exact<{
  genre: string | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetMangaListByGenreQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetMangaPopularQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetMangaPopularQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type GetMangaRecommendationsQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetMangaRecommendationsQuery = { Media: { recommendations: { edges: Array<{ node: { media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null } | null> | null } | null } | null };

export type GetMangaRelationsQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetMangaRelationsQuery = { Media: { relations: { edges: Array<{ relationType: MediaRelation | null, node: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetMangaStaffQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetMangaStaffQuery = { Media: { staff: { edges: Array<{ role: string | null, node: { id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, favourites: number | null, isFavourite: boolean, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null } | null };

export type GetMangaTrendingQueryVariables = Exact<{
  page?: number | null | undefined;
  perPage?: number | null | undefined;
}>;


export type GetMangaTrendingQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type SearchMangaQueryVariables = Exact<{
  query: string | null | undefined;
  page: number | null | undefined;
  perPage: number | null | undefined;
}>;


export type SearchMangaQuery = { Page: { media: Array<{ id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null };

export type ToggleFavoriteMangaMutationVariables = Exact<{
  mangaId: number;
}>;


export type ToggleFavoriteMangaMutation = { ToggleFavourite: { manga: { nodes: Array<{ id: number } | null> | null } | null } | null };

export type GetMediaByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetMediaByIdQuery = { Media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, nextAiringEpisode: { id: number, airingAt: number, timeUntilAiring: number, episode: number, mediaId: number } | null, tags: Array<{ id: number, name: string, description: string | null, category: string | null, rank: number | null } | null> | null, externalLinks: Array<{ id: number, url: string | null, site: string, siteId: number | null, type: ExternalLinkType | null } | null> | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null };

export type DeleteMediaListEntryMutationVariables = Exact<{
  id: number;
}>;


export type DeleteMediaListEntryMutation = { DeleteMediaListEntry: { deleted: boolean | null } | null };

export type GetMediaListQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetMediaListQuery = { MediaList: { id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null };

export type GetMediaListByUserQueryVariables = Exact<{
  userId: number | null | undefined;
  mediaType: MediaType | null | undefined;
}>;


export type GetMediaListByUserQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type GetMediaListByUserByUsernameQueryVariables = Exact<{
  userName: string | null | undefined;
  mediaType: MediaType | null | undefined;
}>;


export type GetMediaListByUserByUsernameQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type SaveMediaListEntryMutationVariables = Exact<{
  mediaId: number | null | undefined;
  id: number | null | undefined;
  status: MediaListStatus | null | undefined;
  score: number | null | undefined;
  scoreRaw: number | null | undefined;
  progress: number | null | undefined;
  progressVolumes: number | null | undefined;
  repeat: number | null | undefined;
  private: boolean | null | undefined;
  notes: string | null | undefined;
  startedAt: FuzzyDateInput | null | undefined;
  completedAt: FuzzyDateInput | null | undefined;
  advancedScores: Array<number | null | undefined> | number | null | undefined;
  customLists: Array<string | null | undefined> | string | null | undefined;
  hiddenFromStatusLists: boolean | null | undefined;
  priority: number | null | undefined;
}>;


export type SaveMediaListEntryMutation = { SaveMediaListEntry: { id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null };

export type GetStaffByIdQueryVariables = Exact<{
  id: number;
}>;


export type GetStaffByIdQuery = { Staff: { isFavourite: boolean, favourites: number | null, id: number, description: string | null, primaryOccupations: Array<string | null> | null, gender: string | null, bloodType: string | null, homeTown: string | null, languageV2: string | null, yearsActive: Array<number | null> | null, isFavouriteBlocked: boolean, age: number | null, siteUrl: string | null, staffMedia: { nodes: Array<{ id: number, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, description: string | null, gender: string | null, age: string | null, bloodType: string | null, isFavourite: boolean, isFavouriteBlocked: boolean, favourites: number | null, siteUrl: string | null, name: { alternative: Array<string | null> | null, alternativeSpoiler: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null } | null> | null } | null, characterMedia: { nodes: Array<{ id: number, type: MediaType | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null } | null> | null } | null, name: { full: string | null, native: string | null, first: string | null, middle: string | null, last: string | null, userPreferred: string | null } | null, image: { large: string | null, medium: string | null } | null, dateOfBirth: { year: number | null, month: number | null, day: number | null } | null, dateOfDeath: { year: number | null, month: number | null, day: number | null } | null } | null };

export type StaffBirthdayTodayQueryVariables = Exact<{
  page: number | null | undefined;
}>;


export type StaffBirthdayTodayQuery = { Page: { staff: Array<{ id: number, name: { alternative: Array<string | null> | null, first: string | null, full: string | null, last: string | null, middle: string | null, native: string | null, userPreferred: string | null } | null } | null> | null } | null };

export type ToggleFavoriteStaffMutationVariables = Exact<{
  staffID: number;
}>;


export type ToggleFavoriteStaffMutation = { ToggleFavourite: { staff: { nodes: Array<{ id: number } | null> | null } | null } | null };

export type GetUserAnimeListQueryVariables = Exact<{
  userId: number | null | undefined;
  status: MediaListStatus | null | undefined;
}>;


export type GetUserAnimeListQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type GetUserAnimeListByUsernameQueryVariables = Exact<{
  userName: string | null | undefined;
  status: MediaListStatus | null | undefined;
}>;


export type GetUserAnimeListByUsernameQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type GetUserInfoQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetUserInfoQuery = { User: { id: number, name: string, about: string | null, bannerImage: string | null, donatorTier: number | null, donatorBadge: string | null, isFollowing: boolean | null, isFollower: boolean | null, isBlocked: boolean | null, createdAt: number | null, updatedAt: number | null, unreadNotificationCount: number | null, bans: unknown, moderatorRoles: Array<ModRole | null> | null, moderatorStatus: string | null, siteUrl: string | null, avatar: { large: string | null, medium: string | null } | null, options: { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null } | null, mediaListOptions: { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null } | null, favourites: { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null } | null, statistics: { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null } | null, stats: { watchedTime: number | null, chaptersRead: number | null } | null, previousNames: Array<{ name: string | null, createdAt: number | null, updatedAt: number | null } | null> | null } | null };

export type GetUserInfoByUsernameQueryVariables = Exact<{
  userName: string | null | undefined;
}>;


export type GetUserInfoByUsernameQuery = { User: { id: number, name: string, about: string | null, bannerImage: string | null, donatorTier: number | null, donatorBadge: string | null, isFollowing: boolean | null, isFollower: boolean | null, isBlocked: boolean | null, createdAt: number | null, updatedAt: number | null, unreadNotificationCount: number | null, bans: unknown, moderatorRoles: Array<ModRole | null> | null, moderatorStatus: string | null, siteUrl: string | null, avatar: { large: string | null, medium: string | null } | null, options: { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null } | null, mediaListOptions: { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null } | null, favourites: { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null } | null, statistics: { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null } | null, stats: { watchedTime: number | null, chaptersRead: number | null } | null, previousNames: Array<{ name: string | null, createdAt: number | null, updatedAt: number | null } | null> | null } | null };

export type GetUserListQueryVariables = Exact<{
  page: number | null | undefined;
  perPage: number | null | undefined;
}>;


export type GetUserListQuery = { Page: { users: Array<{ id: number, name: string, about: string | null, bannerImage: string | null, donatorTier: number | null, donatorBadge: string | null, isFollowing: boolean | null, isFollower: boolean | null, isBlocked: boolean | null, createdAt: number | null, updatedAt: number | null, unreadNotificationCount: number | null, bans: unknown, moderatorRoles: Array<ModRole | null> | null, moderatorStatus: string | null, siteUrl: string | null, avatar: { large: string | null, medium: string | null } | null, options: { titleLanguage: UserTitleLanguage | null, displayAdultContent: boolean | null, airingNotifications: boolean | null, profileColor: string | null, timezone: string | null, activityMergeTime: number | null, staffNameLanguage: UserStaffNameLanguage | null, restrictMessagesToFollowing: boolean | null, notificationOptions: Array<{ type: NotificationType | null, enabled: boolean | null } | null> | null, disabledListActivity: Array<{ disabled: boolean | null, type: MediaListStatus | null } | null> | null } | null, mediaListOptions: { scoreFormat: ScoreFormat | null, rowOrder: string | null, useLegacyLists: boolean | null, sharedTheme: unknown, sharedThemeEnabled: boolean | null, animeList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null, mangaList: { sectionOrder: Array<string | null> | null, splitCompletedSectionByFormat: boolean | null, customLists: Array<string | null> | null, advancedScoring: Array<string | null> | null, advancedScoringEnabled: boolean | null } | null } | null, favourites: { anime: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, manga: { nodes: Array<{ id: number, title: { romaji: string | null } | null } | null> | null } | null, characters: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, staff: { nodes: Array<{ id: number, name: { full: string | null } | null } | null> | null } | null, studios: { nodes: Array<{ id: number, name: string } | null> | null } | null } | null, statistics: { anime: { count: number, meanScore: number, standardDeviation: number, minutesWatched: number, episodesWatched: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, minutesWatched: number } | null> | null, voiceActors: Array<{ count: number, meanScore: number, minutesWatched: number, characterIds: Array<number | null>, mediaIds: Array<number | null>, voiceActor: { id: number, name: { full: string | null } | null } | null } | null> | null, staff: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, minutesWatched: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null, manga: { count: number, meanScore: number, standardDeviation: number, chaptersRead: number, volumesRead: number, scores: Array<{ score: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, lengths: Array<{ length: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, startYears: Array<{ startYear: number | null, count: number, meanScore: number, chaptersRead: number } | null> | null, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { name: string } | null } | null> | null, countries: Array<{ country: unknown, count: number, meanScore: number, chaptersRead: number } | null> | null, staff: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, staff: { id: number, name: { full: string | null } | null } | null } | null> | null, studios: Array<{ count: number, meanScore: number, chaptersRead: number, mediaIds: Array<number | null>, studio: { id: number, name: string } | null } | null> | null } | null } | null, stats: { watchedTime: number | null, chaptersRead: number | null } | null, previousNames: Array<{ name: string | null, createdAt: number | null, updatedAt: number | null } | null> | null } | null> | null } | null };

export type GetUserMangaListQueryVariables = Exact<{
  userId: number | null | undefined;
  status: MediaListStatus | null | undefined;
}>;


export type GetUserMangaListQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type GetUserMangaListByUsernameQueryVariables = Exact<{
  userName: string | null | undefined;
  status: MediaListStatus | null | undefined;
}>;


export type GetUserMangaListByUsernameQuery = { MediaListCollection: { lists: Array<{ entries: Array<{ id: number, mediaId: number, userId: number, status: MediaListStatus | null, score: number | null, progress: number | null, progressVolumes: number | null, repeat: number | null, priority: number | null, private: boolean | null, notes: string | null, hiddenFromStatusLists: boolean | null, customLists: unknown, advancedScores: unknown, updatedAt: number | null, createdAt: number | null, startedAt: { year: number | null, month: number | null, day: number | null } | null, completedAt: { year: number | null, month: number | null, day: number | null } | null, media: { id: number, idMal: number | null, bannerImage: string | null, description: string | null, format: MediaFormat | null, status: MediaStatus | null, type: MediaType | null, episodes: number | null, chapters: number | null, volumes: number | null, duration: number | null, genres: Array<string | null> | null, averageScore: number | null, meanScore: number | null, popularity: number | null, favourites: number | null, trending: number | null, source: MediaSource | null, countryOfOrigin: unknown, isAdult: boolean | null, isLicensed: boolean | null, isLocked: boolean | null, isFavourite: boolean, isFavouriteBlocked: boolean, hashtag: string | null, synonyms: Array<string | null> | null, season: MediaSeason | null, seasonYear: number | null, siteUrl: string | null, updatedAt: number | null, autoCreateForumThread: boolean | null, isRecommendationBlocked: boolean | null, isReviewBlocked: boolean | null, modNotes: string | null, title: { romaji: string | null, english: string | null, native: string | null, userPreferred: string | null } | null, coverImage: { large: string | null, medium: string | null, extraLarge: string | null, color: string | null } | null, startDate: { year: number | null, month: number | null, day: number | null } | null, endDate: { year: number | null, month: number | null, day: number | null } | null } | null } | null> | null } | null> | null } | null };

export type GetUserStatisticsQueryVariables = Exact<{
  id: number | null | undefined;
}>;


export type GetUserStatisticsQuery = { User: { statistics: { anime: { count: number, meanScore: number, minutesWatched: number, episodesWatched: number, standardDeviation: number, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { id: number, name: string } | null } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null } | null, manga: { count: number, meanScore: number, chaptersRead: number, volumesRead: number, standardDeviation: number, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { id: number, name: string } | null } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null } | null } | null } | null };

export type GetUserStatisticsByUsernameQueryVariables = Exact<{
  userName: string | null | undefined;
}>;


export type GetUserStatisticsByUsernameQuery = { User: { statistics: { anime: { count: number, meanScore: number, minutesWatched: number, episodesWatched: number, standardDeviation: number, genres: Array<{ genre: string | null, count: number, meanScore: number, minutesWatched: number } | null> | null, tags: Array<{ count: number, meanScore: number, minutesWatched: number, tag: { id: number, name: string } | null } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, minutesWatched: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, minutesWatched: number } | null> | null, releaseYears: Array<{ releaseYear: number | null, count: number, meanScore: number, minutesWatched: number } | null> | null } | null, manga: { count: number, meanScore: number, chaptersRead: number, volumesRead: number, standardDeviation: number, genres: Array<{ genre: string | null, count: number, meanScore: number, chaptersRead: number } | null> | null, tags: Array<{ count: number, meanScore: number, chaptersRead: number, tag: { id: number, name: string } | null } | null> | null, statuses: Array<{ status: MediaListStatus | null, count: number, meanScore: number, chaptersRead: number } | null> | null, formats: Array<{ format: MediaFormat | null, count: number, meanScore: number, chaptersRead: number } | null> | null } | null } | null } | null };

export const TitleFragmentDoc = new TypedDocumentString(`
    fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
    `, {"fragmentName":"TitleFragment"});
export const CoverImageFragmentDoc = new TypedDocumentString(`
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
    `, {"fragmentName":"CoverImageFragment"});
export const DateFragmentDoc = new TypedDocumentString(`
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
    `, {"fragmentName":"DateFragment"});
export const MediaCoreFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}`, {"fragmentName":"MediaCoreFragment"});
export const MediaTagFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"MediaTagFragment"});
export const MediaRankFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"MediaRankFragment"});
export const MediaExternalLinkFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"MediaExternalLinkFragment"});
export const ScoreDistributionFragmentDoc = new TypedDocumentString(`
    fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
    `, {"fragmentName":"ScoreDistributionFragment"});
export const StatusDistributionFragmentDoc = new TypedDocumentString(`
    fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
    `, {"fragmentName":"StatusDistributionFragment"});
export const MediaStatsFragmentDoc = new TypedDocumentString(`
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
    fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}`, {"fragmentName":"MediaStatsFragment"});
export const MediaTrailerFragmentDoc = new TypedDocumentString(`
    fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}
    `, {"fragmentName":"MediaTrailerFragment"});
export const MediaDetailedFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
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
fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}`, {"fragmentName":"MediaDetailedFragment"});
export const AiringScheduleFragmentDoc = new TypedDocumentString(`
    fragment AiringScheduleFragment on AiringSchedule {
  id
  airingAt
  timeUntilAiring
  episode
  mediaId
}
    `, {"fragmentName":"AiringScheduleFragment"});
export const MediaStreamingEpisodeFragmentDoc = new TypedDocumentString(`
    fragment MediaStreamingEpisodeFragment on MediaStreamingEpisode {
  title
  thumbnail
  url
  site
}
    `, {"fragmentName":"MediaStreamingEpisodeFragment"});
export const StudioNodeFragmentDoc = new TypedDocumentString(`
    fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}
    `, {"fragmentName":"StudioNodeFragment"});
export const StudioEdgeFragmentDoc = new TypedDocumentString(`
    fragment StudioEdgeFragment on StudioEdge {
  isMain
  favouriteOrder
  node {
    ...StudioNodeFragment
  }
}
    fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}`, {"fragmentName":"StudioEdgeFragment"});
export const StudioConnectionFragmentDoc = new TypedDocumentString(`
    fragment StudioConnectionFragment on StudioConnection {
  edges {
    ...StudioEdgeFragment
  }
}
    fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}
fragment StudioEdgeFragment on StudioEdge {
  isMain
  favouriteOrder
  node {
    ...StudioNodeFragment
  }
}`, {"fragmentName":"StudioConnectionFragment"});
export const MediaRelationNodeFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}`, {"fragmentName":"MediaRelationNodeFragment"});
export const MediaRelationEdgeFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`, {"fragmentName":"MediaRelationEdgeFragment"});
export const MediaRelationConnectionFragmentDoc = new TypedDocumentString(`
    fragment MediaRelationConnectionFragment on MediaConnection {
  edges {
    ...MediaRelationEdgeFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`, {"fragmentName":"MediaRelationConnectionFragment"});
export const CharacterNameFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"CharacterNameFragment"});
export const CharacterImageFragmentDoc = new TypedDocumentString(`
    fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
    `, {"fragmentName":"CharacterImageFragment"});
export const CharacterBasicFragmentDoc = new TypedDocumentString(`
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
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
fragment CharacterNameFragment on CharacterName {
  alternative
  alternativeSpoiler
  first
  full
  last
  middle
  native
  userPreferred
}`, {"fragmentName":"CharacterBasicFragment"});
export const CharacterEdgeFragmentDoc = new TypedDocumentString(`
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
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`, {"fragmentName":"CharacterEdgeFragment"});
export const CharacterConnectionFragmentDoc = new TypedDocumentString(`
    fragment CharacterConnectionFragment on CharacterConnection {
  edges {
    ...CharacterEdgeFragment
  }
  nodes {
    ...CharacterBasicFragment
  }
}
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`, {"fragmentName":"CharacterConnectionFragment"});
export const StaffNameFragmentDoc = new TypedDocumentString(`
    fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
    `, {"fragmentName":"StaffNameFragment"});
export const StaffImageFragmentDoc = new TypedDocumentString(`
    fragment StaffImageFragment on StaffImage {
  large
  medium
}
    `, {"fragmentName":"StaffImageFragment"});
export const StaffBasicFragmentDoc = new TypedDocumentString(`
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
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}`, {"fragmentName":"StaffBasicFragment"});
export const StaffEdgeFragmentDoc = new TypedDocumentString(`
    fragment StaffEdgeFragment on StaffEdge {
  id
  role
  favouriteOrder
  node {
    ...StaffBasicFragment
  }
}
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
}`, {"fragmentName":"StaffEdgeFragment"});
export const StaffConnectionFragmentDoc = new TypedDocumentString(`
    fragment StaffConnectionFragment on StaffConnection {
  edges {
    ...StaffEdgeFragment
  }
  nodes {
    ...StaffBasicFragment
  }
}
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffEdgeFragment on StaffEdge {
  id
  role
  favouriteOrder
  node {
    ...StaffBasicFragment
  }
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
}`, {"fragmentName":"StaffConnectionFragment"});
export const AnimeFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment CharacterConnectionFragment on CharacterConnection {
  edges {
    ...CharacterEdgeFragment
  }
  nodes {
    ...CharacterBasicFragment
  }
}
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
fragment MediaRelationConnectionFragment on MediaConnection {
  edges {
    ...MediaRelationEdgeFragment
  }
}
fragment StaffEdgeFragment on StaffEdge {
  id
  role
  favouriteOrder
  node {
    ...StaffBasicFragment
  }
}
fragment StaffConnectionFragment on StaffConnection {
  edges {
    ...StaffEdgeFragment
  }
  nodes {
    ...StaffBasicFragment
  }
}
fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}
fragment StudioEdgeFragment on StudioEdge {
  isMain
  favouriteOrder
  node {
    ...StudioNodeFragment
  }
}
fragment StudioConnectionFragment on StudioConnection {
  edges {
    ...StudioEdgeFragment
  }
}
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
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
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
fragment MediaStreamingEpisodeFragment on MediaStreamingEpisode {
  title
  thumbnail
  url
  site
}
fragment AiringScheduleFragment on AiringSchedule {
  id
  airingAt
  timeUntilAiring
  episode
  mediaId
}
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
fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}`, {"fragmentName":"AnimeFragment"});
export const CharacterFragmentDoc = new TypedDocumentString(`
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`, {"fragmentName":"CharacterFragment"});
export const MangaFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment CharacterConnectionFragment on CharacterConnection {
  edges {
    ...CharacterEdgeFragment
  }
  nodes {
    ...CharacterBasicFragment
  }
}
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
fragment MediaRelationConnectionFragment on MediaConnection {
  edges {
    ...MediaRelationEdgeFragment
  }
}
fragment StaffEdgeFragment on StaffEdge {
  id
  role
  favouriteOrder
  node {
    ...StaffBasicFragment
  }
}
fragment StaffConnectionFragment on StaffConnection {
  edges {
    ...StaffEdgeFragment
  }
  nodes {
    ...StaffBasicFragment
  }
}
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
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
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
fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}`, {"fragmentName":"MangaFragment"});
export const MediaTagBasicFragmentDoc = new TypedDocumentString(`
    fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}
    `, {"fragmentName":"MediaTagBasicFragment"});
export const MediaExternalLinkBasicFragmentDoc = new TypedDocumentString(`
    fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
    `, {"fragmentName":"MediaExternalLinkBasicFragment"});
export const MediaBasicFragmentDoc = new TypedDocumentString(`
    fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`, {"fragmentName":"MediaBasicFragment"});
export const MediaFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`, {"fragmentName":"MediaFragment"});
export const MediaListFragmentDoc = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`, {"fragmentName":"MediaListFragment"});
export const StaffFragmentDoc = new TypedDocumentString(`
    fragment StaffFragment on Staff {
  ...StaffBasicFragment
}
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
}`, {"fragmentName":"StaffFragment"});
export const StudioFragmentDoc = new TypedDocumentString(`
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
    fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}`, {"fragmentName":"StudioFragment"});
export const UserAvatarFragmentDoc = new TypedDocumentString(`
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
    `, {"fragmentName":"UserAvatarFragment"});
export const UserOptionsFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"UserOptionsFragment"});
export const UserMediaListOptionsFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"UserMediaListOptionsFragment"});
export const UserFavouritesFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"UserFavouritesFragment"});
export const UserStatisticsFragmentDoc = new TypedDocumentString(`
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
    `, {"fragmentName":"UserStatisticsFragment"});
export const UserBasicFragmentDoc = new TypedDocumentString(`
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
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
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
}`, {"fragmentName":"UserBasicFragment"});
export const UserFragmentDoc = new TypedDocumentString(`
    fragment UserFragment on User {
  ...UserBasicFragment
}
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
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
}`, {"fragmentName":"UserFragment"});
export const GetAnimeBrowseDocument = new TypedDocumentString(`
    query GetAnimeBrowse($genre: String, $format: MediaFormat, $status: MediaStatus, $seasonYear: Int, $page: Int = 1, $perPage: Int = 10) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage
      currentPage
      total
    }
    media(
      genre: $genre
      format: $format
      status: $status
      seasonYear: $seasonYear
      type: ANIME
      sort: POPULARITY_DESC
      isAdult: false
    ) {
      id
      title {
        english
        romaji
        native
        userPreferred
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
      genres
      format
      status
      seasonYear
      averageScore
      episodes
    }
  }
}
    `);
export const GetAnimeByIdDocument = new TypedDocumentString(`
    query GetAnimeById($id: Int!) {
  Media(id: $id, type: ANIME) {
    ...MediaDetailedFragment
    nextAiringEpisode {
      ...AiringScheduleFragment
    }
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
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
fragment StudioNodeFragment on Studio {
  id
  name
  isAnimationStudio
  favourites
  isFavourite
  siteUrl
}
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
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment ScoreDistributionFragment on ScoreDistribution {
  score
  amount
}
fragment StatusDistributionFragment on StatusDistribution {
  status
  amount
}
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
fragment AiringScheduleFragment on AiringSchedule {
  id
  airingAt
  timeUntilAiring
  episode
  mediaId
}
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
fragment MediaTrailerFragment on MediaTrailer {
  id
  site
  thumbnail
}
fragment StaffFragment on Staff {
  ...StaffBasicFragment
}
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
}`);
export const GetAnimeByTitleDocument = new TypedDocumentString(`
    query GetAnimeByTitle($title: String!) {
  Page(page: 1, perPage: 1) {
    media(search: $title, type: ANIME) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetAnimeCharactersDocument = new TypedDocumentString(`
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
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`);
export const GetAnimeListByGenreDocument = new TypedDocumentString(`
    query GetAnimeListByGenre($genre: String!, $page: Int = 1, $perPage: Int = 10) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage
    }
    media(genre: $genre, type: ANIME) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetAnimePopularDocument = new TypedDocumentString(`
    query GetAnimePopular($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: ANIME) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetAnimeRecommendationsDocument = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetAnimeRelationsDocument = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetAnimeStaffDocument = new TypedDocumentString(`
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
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment StaffFragment on Staff {
  ...StaffBasicFragment
}`);
export const GetAnimeTrendingDocument = new TypedDocumentString(`
    query GetAnimeTrending($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: ANIME) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetSeasonalAnimeDocument = new TypedDocumentString(`
    query GetSeasonalAnime($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage
      currentPage
    }
    media(
      season: $season
      seasonYear: $seasonYear
      type: ANIME
      sort: POPULARITY_DESC
      isAdult: false
    ) {
      id
      title {
        english
        romaji
        native
        userPreferred
      }
      coverImage {
        extraLarge
        large
      }
      bannerImage
      genres
      seasonYear
      season
    }
  }
}
    `);
export const SearchAnimeDocument = new TypedDocumentString(`
    query SearchAnime($query: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(search: $query, type: ANIME) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const ToggleFavoriteAnimeDocument = new TypedDocumentString(`
    mutation ToggleFavoriteAnime($animeId: Int!) {
  ToggleFavourite(animeId: $animeId) {
    anime(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `);
export const CharactersBirthdayTodayDocument = new TypedDocumentString(`
    query CharactersBirthdayToday($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    characters(isBirthday: true) {
      ...CharacterFragment
    }
  }
}
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`);
export const GetCharacterByIdDocument = new TypedDocumentString(`
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
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`);
export const ToggleFavoriteCharacterDocument = new TypedDocumentString(`
    mutation ToggleFavoriteCharacter($charID: Int!) {
  ToggleFavourite(characterId: $charID) {
    characters(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `);
export const GetMangaByIdDocument = new TypedDocumentString(`
    query GetMangaById($id: Int!) {
  Media(id: $id, type: MANGA) {
    ...MediaFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaByTitleDocument = new TypedDocumentString(`
    query GetMangaByTitle($title: String!) {
  Page(page: 1, perPage: 1) {
    media(search: $title, type: MANGA) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaCharactersDocument = new TypedDocumentString(`
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
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
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
}`);
export const GetMangaListByGenreDocument = new TypedDocumentString(`
    query GetMangaListByGenre($genre: String, $page: Int = 1, $perPage: Int = 10) {
  Page(page: $page, perPage: $perPage) {
    media(genre: $genre, type: MANGA) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaPopularDocument = new TypedDocumentString(`
    query GetMangaPopular($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC, type: MANGA) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaRecommendationsDocument = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaRelationsDocument = new TypedDocumentString(`
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
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const GetMangaStaffDocument = new TypedDocumentString(`
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
    fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment StaffFragment on Staff {
  ...StaffBasicFragment
}`);
export const GetMangaTrendingDocument = new TypedDocumentString(`
    query GetMangaTrending($page: Int = 1, $perPage: Int = 20) {
  Page(page: $page, perPage: $perPage) {
    media(sort: TRENDING_DESC, type: MANGA) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const SearchMangaDocument = new TypedDocumentString(`
    query SearchManga($query: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(search: $query, type: MANGA) {
      ...MediaFragment
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const ToggleFavoriteMangaDocument = new TypedDocumentString(`
    mutation ToggleFavoriteManga($mangaId: Int!) {
  ToggleFavourite(mangaId: $mangaId) {
    manga(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `);
export const GetMediaByIdDocument = new TypedDocumentString(`
    query GetMediaById($id: Int!) {
  Media(id: $id) {
    ...MediaFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
fragment MediaBasicFragment on Media {
  ...MediaCoreFragment
  tags {
    ...MediaTagBasicFragment
  }
  externalLinks {
    ...MediaExternalLinkBasicFragment
  }
}
fragment MediaExternalLinkBasicFragment on MediaExternalLink {
  id
  url
  site
  siteId
  type
}
fragment MediaTagBasicFragment on MediaTag {
  id
  name
  description
  category
  rank
}`);
export const DeleteMediaListEntryDocument = new TypedDocumentString(`
    mutation DeleteMediaListEntry($id: Int!) {
  DeleteMediaListEntry(id: $id) {
    deleted
  }
}
    `);
export const GetMediaListDocument = new TypedDocumentString(`
    query GetMediaList($id: Int) {
  MediaList(id: $id) {
    ...MediaListFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetMediaListByUserDocument = new TypedDocumentString(`
    query GetMediaListByUser($userId: Int, $mediaType: MediaType) {
  MediaListCollection(userId: $userId, type: $mediaType) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetMediaListByUserByUsernameDocument = new TypedDocumentString(`
    query GetMediaListByUserByUsername($userName: String, $mediaType: MediaType) {
  MediaListCollection(userName: $userName, type: $mediaType) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const SaveMediaListEntryDocument = new TypedDocumentString(`
    mutation SaveMediaListEntry($mediaId: Int, $id: Int, $status: MediaListStatus, $score: Float, $scoreRaw: Int, $progress: Int, $progressVolumes: Int, $repeat: Int, $private: Boolean, $notes: String, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput, $advancedScores: [Float], $customLists: [String], $hiddenFromStatusLists: Boolean, $priority: Int) {
  SaveMediaListEntry(
    mediaId: $mediaId
    id: $id
    status: $status
    score: $score
    scoreRaw: $scoreRaw
    progress: $progress
    progressVolumes: $progressVolumes
    repeat: $repeat
    private: $private
    notes: $notes
    startedAt: $startedAt
    completedAt: $completedAt
    advancedScores: $advancedScores
    customLists: $customLists
    hiddenFromStatusLists: $hiddenFromStatusLists
    priority: $priority
  ) {
    ...MediaListFragment
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetStaffByIdDocument = new TypedDocumentString(`
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
    fragment CharacterFragment on Character {
  ...CharacterBasicFragment
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment CharacterImageFragment on CharacterImage {
  large
  medium
}
fragment StaffImageFragment on StaffImage {
  large
  medium
}
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
fragment StaffNameFragment on StaffName {
  full
  native
  first
  middle
  last
  userPreferred
}
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
fragment StaffFragment on Staff {
  ...StaffBasicFragment
}`);
export const StaffBirthdayTodayDocument = new TypedDocumentString(`
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
    `);
export const ToggleFavoriteStaffDocument = new TypedDocumentString(`
    mutation ToggleFavoriteStaff($staffID: Int!) {
  ToggleFavourite(staffId: $staffID) {
    staff(page: 1, perPage: 25) {
      nodes {
        id
      }
    }
  }
}
    `);
export const GetUserAnimeListDocument = new TypedDocumentString(`
    query GetUserAnimeList($userId: Int, $status: MediaListStatus) {
  MediaListCollection(userId: $userId, type: ANIME, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetUserAnimeListByUsernameDocument = new TypedDocumentString(`
    query GetUserAnimeListByUsername($userName: String, $status: MediaListStatus) {
  MediaListCollection(userName: $userName, type: ANIME, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetUserInfoDocument = new TypedDocumentString(`
    query GetUserInfo($id: Int) {
  User(id: $id) {
    ...UserFragment
  }
}
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
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
fragment UserFragment on User {
  ...UserBasicFragment
}`);
export const GetUserInfoByUsernameDocument = new TypedDocumentString(`
    query GetUserInfoByUsername($userName: String) {
  User(name: $userName) {
    ...UserFragment
  }
}
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
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
fragment UserFragment on User {
  ...UserBasicFragment
}`);
export const GetUserListDocument = new TypedDocumentString(`
    query GetUserList($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    users {
      ...UserFragment
    }
  }
}
    fragment UserAvatarFragment on UserAvatar {
  large
  medium
}
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
fragment UserFragment on User {
  ...UserBasicFragment
}`);
export const GetUserMangaListDocument = new TypedDocumentString(`
    query GetUserMangaList($userId: Int, $status: MediaListStatus) {
  MediaListCollection(userId: $userId, type: MANGA, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetUserMangaListByUsernameDocument = new TypedDocumentString(`
    query GetUserMangaListByUsername($userName: String, $status: MediaListStatus) {
  MediaListCollection(userName: $userName, type: MANGA, status: $status) {
    lists {
      entries {
        ...MediaListFragment
      }
    }
  }
}
    fragment CoverImageFragment on MediaCoverImage {
  large
  medium
  extraLarge
  color
}
fragment DateFragment on FuzzyDate {
  year
  month
  day
}
fragment TitleFragment on MediaTitle {
  romaji
  english
  native
  userPreferred
}
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
}`);
export const GetUserStatisticsDocument = new TypedDocumentString(`
    query GetUserStatistics($id: Int) {
  User(id: $id) {
    statistics {
      anime {
        count
        meanScore
        minutesWatched
        episodesWatched
        standardDeviation
        genres(limit: 10, sort: COUNT_DESC) {
          genre
          count
          meanScore
          minutesWatched
        }
        tags(limit: 10, sort: COUNT_DESC) {
          tag {
            id
            name
          }
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
        formats {
          format
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
      }
      manga {
        count
        meanScore
        chaptersRead
        volumesRead
        standardDeviation
        genres(limit: 10, sort: COUNT_DESC) {
          genre
          count
          meanScore
          chaptersRead
        }
        tags(limit: 10, sort: COUNT_DESC) {
          tag {
            id
            name
          }
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
        formats {
          format
          count
          meanScore
          chaptersRead
        }
      }
    }
  }
}
    `);
export const GetUserStatisticsByUsernameDocument = new TypedDocumentString(`
    query GetUserStatisticsByUsername($userName: String) {
  User(name: $userName) {
    statistics {
      anime {
        count
        meanScore
        minutesWatched
        episodesWatched
        standardDeviation
        genres(limit: 10, sort: COUNT_DESC) {
          genre
          count
          meanScore
          minutesWatched
        }
        tags(limit: 10, sort: COUNT_DESC) {
          tag {
            id
            name
          }
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
        formats {
          format
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
      }
      manga {
        count
        meanScore
        chaptersRead
        volumesRead
        standardDeviation
        genres(limit: 10, sort: COUNT_DESC) {
          genre
          count
          meanScore
          chaptersRead
        }
        tags(limit: 10, sort: COUNT_DESC) {
          tag {
            id
            name
          }
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
        formats {
          format
          count
          meanScore
          chaptersRead
        }
      }
    }
  }
}
    `);
export type Requester<C = {}> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    GetAnimeBrowse(variables?: GetAnimeBrowseQueryVariables, options?: C): Promise<GetAnimeBrowseQuery> {
      return requester<GetAnimeBrowseQuery, GetAnimeBrowseQueryVariables>(GetAnimeBrowseDocument, variables, options) as Promise<GetAnimeBrowseQuery>;
    },
    GetAnimeById(variables: GetAnimeByIdQueryVariables, options?: C): Promise<GetAnimeByIdQuery> {
      return requester<GetAnimeByIdQuery, GetAnimeByIdQueryVariables>(GetAnimeByIdDocument, variables, options) as Promise<GetAnimeByIdQuery>;
    },
    GetAnimeByTitle(variables: GetAnimeByTitleQueryVariables, options?: C): Promise<GetAnimeByTitleQuery> {
      return requester<GetAnimeByTitleQuery, GetAnimeByTitleQueryVariables>(GetAnimeByTitleDocument, variables, options) as Promise<GetAnimeByTitleQuery>;
    },
    GetAnimeCharacters(variables?: GetAnimeCharactersQueryVariables, options?: C): Promise<GetAnimeCharactersQuery> {
      return requester<GetAnimeCharactersQuery, GetAnimeCharactersQueryVariables>(GetAnimeCharactersDocument, variables, options) as Promise<GetAnimeCharactersQuery>;
    },
    GetAnimeListByGenre(variables: GetAnimeListByGenreQueryVariables, options?: C): Promise<GetAnimeListByGenreQuery> {
      return requester<GetAnimeListByGenreQuery, GetAnimeListByGenreQueryVariables>(GetAnimeListByGenreDocument, variables, options) as Promise<GetAnimeListByGenreQuery>;
    },
    GetAnimePopular(variables?: GetAnimePopularQueryVariables, options?: C): Promise<GetAnimePopularQuery> {
      return requester<GetAnimePopularQuery, GetAnimePopularQueryVariables>(GetAnimePopularDocument, variables, options) as Promise<GetAnimePopularQuery>;
    },
    GetAnimeRecommendations(variables?: GetAnimeRecommendationsQueryVariables, options?: C): Promise<GetAnimeRecommendationsQuery> {
      return requester<GetAnimeRecommendationsQuery, GetAnimeRecommendationsQueryVariables>(GetAnimeRecommendationsDocument, variables, options) as Promise<GetAnimeRecommendationsQuery>;
    },
    GetAnimeRelations(variables?: GetAnimeRelationsQueryVariables, options?: C): Promise<GetAnimeRelationsQuery> {
      return requester<GetAnimeRelationsQuery, GetAnimeRelationsQueryVariables>(GetAnimeRelationsDocument, variables, options) as Promise<GetAnimeRelationsQuery>;
    },
    GetAnimeStaff(variables?: GetAnimeStaffQueryVariables, options?: C): Promise<GetAnimeStaffQuery> {
      return requester<GetAnimeStaffQuery, GetAnimeStaffQueryVariables>(GetAnimeStaffDocument, variables, options) as Promise<GetAnimeStaffQuery>;
    },
    GetAnimeTrending(variables?: GetAnimeTrendingQueryVariables, options?: C): Promise<GetAnimeTrendingQuery> {
      return requester<GetAnimeTrendingQuery, GetAnimeTrendingQueryVariables>(GetAnimeTrendingDocument, variables, options) as Promise<GetAnimeTrendingQuery>;
    },
    GetSeasonalAnime(variables?: GetSeasonalAnimeQueryVariables, options?: C): Promise<GetSeasonalAnimeQuery> {
      return requester<GetSeasonalAnimeQuery, GetSeasonalAnimeQueryVariables>(GetSeasonalAnimeDocument, variables, options) as Promise<GetSeasonalAnimeQuery>;
    },
    SearchAnime(variables?: SearchAnimeQueryVariables, options?: C): Promise<SearchAnimeQuery> {
      return requester<SearchAnimeQuery, SearchAnimeQueryVariables>(SearchAnimeDocument, variables, options) as Promise<SearchAnimeQuery>;
    },
    ToggleFavoriteAnime(variables: ToggleFavoriteAnimeMutationVariables, options?: C): Promise<ToggleFavoriteAnimeMutation> {
      return requester<ToggleFavoriteAnimeMutation, ToggleFavoriteAnimeMutationVariables>(ToggleFavoriteAnimeDocument, variables, options) as Promise<ToggleFavoriteAnimeMutation>;
    },
    CharactersBirthdayToday(variables?: CharactersBirthdayTodayQueryVariables, options?: C): Promise<CharactersBirthdayTodayQuery> {
      return requester<CharactersBirthdayTodayQuery, CharactersBirthdayTodayQueryVariables>(CharactersBirthdayTodayDocument, variables, options) as Promise<CharactersBirthdayTodayQuery>;
    },
    GetCharacterById(variables: GetCharacterByIdQueryVariables, options?: C): Promise<GetCharacterByIdQuery> {
      return requester<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, variables, options) as Promise<GetCharacterByIdQuery>;
    },
    ToggleFavoriteCharacter(variables: ToggleFavoriteCharacterMutationVariables, options?: C): Promise<ToggleFavoriteCharacterMutation> {
      return requester<ToggleFavoriteCharacterMutation, ToggleFavoriteCharacterMutationVariables>(ToggleFavoriteCharacterDocument, variables, options) as Promise<ToggleFavoriteCharacterMutation>;
    },
    GetMangaById(variables: GetMangaByIdQueryVariables, options?: C): Promise<GetMangaByIdQuery> {
      return requester<GetMangaByIdQuery, GetMangaByIdQueryVariables>(GetMangaByIdDocument, variables, options) as Promise<GetMangaByIdQuery>;
    },
    GetMangaByTitle(variables: GetMangaByTitleQueryVariables, options?: C): Promise<GetMangaByTitleQuery> {
      return requester<GetMangaByTitleQuery, GetMangaByTitleQueryVariables>(GetMangaByTitleDocument, variables, options) as Promise<GetMangaByTitleQuery>;
    },
    GetMangaCharacters(variables?: GetMangaCharactersQueryVariables, options?: C): Promise<GetMangaCharactersQuery> {
      return requester<GetMangaCharactersQuery, GetMangaCharactersQueryVariables>(GetMangaCharactersDocument, variables, options) as Promise<GetMangaCharactersQuery>;
    },
    GetMangaListByGenre(variables?: GetMangaListByGenreQueryVariables, options?: C): Promise<GetMangaListByGenreQuery> {
      return requester<GetMangaListByGenreQuery, GetMangaListByGenreQueryVariables>(GetMangaListByGenreDocument, variables, options) as Promise<GetMangaListByGenreQuery>;
    },
    GetMangaPopular(variables?: GetMangaPopularQueryVariables, options?: C): Promise<GetMangaPopularQuery> {
      return requester<GetMangaPopularQuery, GetMangaPopularQueryVariables>(GetMangaPopularDocument, variables, options) as Promise<GetMangaPopularQuery>;
    },
    GetMangaRecommendations(variables?: GetMangaRecommendationsQueryVariables, options?: C): Promise<GetMangaRecommendationsQuery> {
      return requester<GetMangaRecommendationsQuery, GetMangaRecommendationsQueryVariables>(GetMangaRecommendationsDocument, variables, options) as Promise<GetMangaRecommendationsQuery>;
    },
    GetMangaRelations(variables?: GetMangaRelationsQueryVariables, options?: C): Promise<GetMangaRelationsQuery> {
      return requester<GetMangaRelationsQuery, GetMangaRelationsQueryVariables>(GetMangaRelationsDocument, variables, options) as Promise<GetMangaRelationsQuery>;
    },
    GetMangaStaff(variables?: GetMangaStaffQueryVariables, options?: C): Promise<GetMangaStaffQuery> {
      return requester<GetMangaStaffQuery, GetMangaStaffQueryVariables>(GetMangaStaffDocument, variables, options) as Promise<GetMangaStaffQuery>;
    },
    GetMangaTrending(variables?: GetMangaTrendingQueryVariables, options?: C): Promise<GetMangaTrendingQuery> {
      return requester<GetMangaTrendingQuery, GetMangaTrendingQueryVariables>(GetMangaTrendingDocument, variables, options) as Promise<GetMangaTrendingQuery>;
    },
    SearchManga(variables?: SearchMangaQueryVariables, options?: C): Promise<SearchMangaQuery> {
      return requester<SearchMangaQuery, SearchMangaQueryVariables>(SearchMangaDocument, variables, options) as Promise<SearchMangaQuery>;
    },
    ToggleFavoriteManga(variables: ToggleFavoriteMangaMutationVariables, options?: C): Promise<ToggleFavoriteMangaMutation> {
      return requester<ToggleFavoriteMangaMutation, ToggleFavoriteMangaMutationVariables>(ToggleFavoriteMangaDocument, variables, options) as Promise<ToggleFavoriteMangaMutation>;
    },
    GetMediaById(variables: GetMediaByIdQueryVariables, options?: C): Promise<GetMediaByIdQuery> {
      return requester<GetMediaByIdQuery, GetMediaByIdQueryVariables>(GetMediaByIdDocument, variables, options) as Promise<GetMediaByIdQuery>;
    },
    DeleteMediaListEntry(variables: DeleteMediaListEntryMutationVariables, options?: C): Promise<DeleteMediaListEntryMutation> {
      return requester<DeleteMediaListEntryMutation, DeleteMediaListEntryMutationVariables>(DeleteMediaListEntryDocument, variables, options) as Promise<DeleteMediaListEntryMutation>;
    },
    GetMediaList(variables?: GetMediaListQueryVariables, options?: C): Promise<GetMediaListQuery> {
      return requester<GetMediaListQuery, GetMediaListQueryVariables>(GetMediaListDocument, variables, options) as Promise<GetMediaListQuery>;
    },
    GetMediaListByUser(variables?: GetMediaListByUserQueryVariables, options?: C): Promise<GetMediaListByUserQuery> {
      return requester<GetMediaListByUserQuery, GetMediaListByUserQueryVariables>(GetMediaListByUserDocument, variables, options) as Promise<GetMediaListByUserQuery>;
    },
    GetMediaListByUserByUsername(variables?: GetMediaListByUserByUsernameQueryVariables, options?: C): Promise<GetMediaListByUserByUsernameQuery> {
      return requester<GetMediaListByUserByUsernameQuery, GetMediaListByUserByUsernameQueryVariables>(GetMediaListByUserByUsernameDocument, variables, options) as Promise<GetMediaListByUserByUsernameQuery>;
    },
    SaveMediaListEntry(variables?: SaveMediaListEntryMutationVariables, options?: C): Promise<SaveMediaListEntryMutation> {
      return requester<SaveMediaListEntryMutation, SaveMediaListEntryMutationVariables>(SaveMediaListEntryDocument, variables, options) as Promise<SaveMediaListEntryMutation>;
    },
    GetStaffById(variables: GetStaffByIdQueryVariables, options?: C): Promise<GetStaffByIdQuery> {
      return requester<GetStaffByIdQuery, GetStaffByIdQueryVariables>(GetStaffByIdDocument, variables, options) as Promise<GetStaffByIdQuery>;
    },
    StaffBirthdayToday(variables?: StaffBirthdayTodayQueryVariables, options?: C): Promise<StaffBirthdayTodayQuery> {
      return requester<StaffBirthdayTodayQuery, StaffBirthdayTodayQueryVariables>(StaffBirthdayTodayDocument, variables, options) as Promise<StaffBirthdayTodayQuery>;
    },
    ToggleFavoriteStaff(variables: ToggleFavoriteStaffMutationVariables, options?: C): Promise<ToggleFavoriteStaffMutation> {
      return requester<ToggleFavoriteStaffMutation, ToggleFavoriteStaffMutationVariables>(ToggleFavoriteStaffDocument, variables, options) as Promise<ToggleFavoriteStaffMutation>;
    },
    GetUserAnimeList(variables?: GetUserAnimeListQueryVariables, options?: C): Promise<GetUserAnimeListQuery> {
      return requester<GetUserAnimeListQuery, GetUserAnimeListQueryVariables>(GetUserAnimeListDocument, variables, options) as Promise<GetUserAnimeListQuery>;
    },
    GetUserAnimeListByUsername(variables?: GetUserAnimeListByUsernameQueryVariables, options?: C): Promise<GetUserAnimeListByUsernameQuery> {
      return requester<GetUserAnimeListByUsernameQuery, GetUserAnimeListByUsernameQueryVariables>(GetUserAnimeListByUsernameDocument, variables, options) as Promise<GetUserAnimeListByUsernameQuery>;
    },
    GetUserInfo(variables?: GetUserInfoQueryVariables, options?: C): Promise<GetUserInfoQuery> {
      return requester<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, variables, options) as Promise<GetUserInfoQuery>;
    },
    GetUserInfoByUsername(variables?: GetUserInfoByUsernameQueryVariables, options?: C): Promise<GetUserInfoByUsernameQuery> {
      return requester<GetUserInfoByUsernameQuery, GetUserInfoByUsernameQueryVariables>(GetUserInfoByUsernameDocument, variables, options) as Promise<GetUserInfoByUsernameQuery>;
    },
    GetUserList(variables?: GetUserListQueryVariables, options?: C): Promise<GetUserListQuery> {
      return requester<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, variables, options) as Promise<GetUserListQuery>;
    },
    GetUserMangaList(variables?: GetUserMangaListQueryVariables, options?: C): Promise<GetUserMangaListQuery> {
      return requester<GetUserMangaListQuery, GetUserMangaListQueryVariables>(GetUserMangaListDocument, variables, options) as Promise<GetUserMangaListQuery>;
    },
    GetUserMangaListByUsername(variables?: GetUserMangaListByUsernameQueryVariables, options?: C): Promise<GetUserMangaListByUsernameQuery> {
      return requester<GetUserMangaListByUsernameQuery, GetUserMangaListByUsernameQueryVariables>(GetUserMangaListByUsernameDocument, variables, options) as Promise<GetUserMangaListByUsernameQuery>;
    },
    GetUserStatistics(variables?: GetUserStatisticsQueryVariables, options?: C): Promise<GetUserStatisticsQuery> {
      return requester<GetUserStatisticsQuery, GetUserStatisticsQueryVariables>(GetUserStatisticsDocument, variables, options) as Promise<GetUserStatisticsQuery>;
    },
    GetUserStatisticsByUsername(variables?: GetUserStatisticsByUsernameQueryVariables, options?: C): Promise<GetUserStatisticsByUsernameQuery> {
      return requester<GetUserStatisticsByUsernameQuery, GetUserStatisticsByUsernameQueryVariables>(GetUserStatisticsByUsernameDocument, variables, options) as Promise<GetUserStatisticsByUsernameQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;