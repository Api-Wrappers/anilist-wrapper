import {
  type GraphQLResolveInfo,
  GraphQLScalarType,
  type GraphQLScalarTypeConfig,
} from "graphql";
import { GraphQLClient, type RequestOptions } from "graphql-request";
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
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
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

/** Notification for when a activity is liked */
export type ActivityLikeNotification = {
  __typename?: "ActivityLikeNotification";
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was liked */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars["Int"]["output"];
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type ActivityMentionNotification = {
  __typename?: "ActivityMentionNotification";
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity where mentioned */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars["Int"]["output"];
};

/** Notification for when a user is send an activity message */
export type ActivityMessageNotification = {
  __typename?: "ActivityMessageNotification";
  /** The id of the activity message */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The message activity */
  message?: Maybe<MessageActivity>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who sent the message */
  user?: Maybe<User>;
  /** The if of the user who send the message */
  userId: Scalars["Int"]["output"];
};

/** Replay to an activity item */
export type ActivityReply = {
  __typename?: "ActivityReply";
  /** The id of the parent activity */
  activityId?: Maybe<Scalars["Int"]["output"]>;
  /** The time the reply was created at */
  createdAt: Scalars["Int"]["output"];
  /** The id of the reply */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the reply */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the reply has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the reply */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The reply text */
  text?: Maybe<Scalars["String"]["output"]>;
  /** The user who created reply */
  user?: Maybe<User>;
  /** The id of the replies creator */
  userId?: Maybe<Scalars["Int"]["output"]>;
};

/** Replay to an activity item */
export type ActivityReplyTextArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Notification for when a activity reply is liked */
export type ActivityReplyLikeNotification = {
  __typename?: "ActivityReplyLikeNotification";
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity where the reply which was liked */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity reply */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity reply */
  userId: Scalars["Int"]["output"];
};

/** Notification for when a user replies to the authenticated users activity */
export type ActivityReplyNotification = {
  __typename?: "ActivityReplyNotification";
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who replied to the activity */
  userId: Scalars["Int"]["output"];
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type ActivityReplySubscribedNotification = {
  __typename?: "ActivityReplySubscribedNotification";
  /** The liked activity */
  activity?: Maybe<ActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who replied to the activity */
  userId: Scalars["Int"]["output"];
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

/** Activity union type */
export type ActivityUnion = ListActivity | MessageActivity | TextActivity;

/** Notification for when an episode of anime airs */
export type AiringNotification = {
  __typename?: "AiringNotification";
  /** The id of the aired anime */
  animeId: Scalars["Int"]["output"];
  /** The notification context text */
  contexts?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The episode number that just aired */
  episode: Scalars["Int"]["output"];
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type AiringProgression = {
  __typename?: "AiringProgression";
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode?: Maybe<Scalars["Float"]["output"]>;
  /** The average score for the media */
  score?: Maybe<Scalars["Float"]["output"]>;
  /** The amount of users watching the anime */
  watching?: Maybe<Scalars["Int"]["output"]>;
};

/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export type AiringSchedule = {
  __typename?: "AiringSchedule";
  /** The time the episode airs at */
  airingAt: Scalars["Int"]["output"];
  /** The airing episode number */
  episode: Scalars["Int"]["output"];
  /** The id of the airing schedule item */
  id: Scalars["Int"]["output"];
  /** The associate media of the airing episode */
  media?: Maybe<Media>;
  /** The associate media id of the airing episode */
  mediaId: Scalars["Int"]["output"];
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars["Int"]["output"];
};

export type AiringScheduleConnection = {
  __typename?: "AiringScheduleConnection";
  edges?: Maybe<Array<Maybe<AiringScheduleEdge>>>;
  nodes?: Maybe<Array<Maybe<AiringSchedule>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** AiringSchedule connection edge */
export type AiringScheduleEdge = {
  __typename?: "AiringScheduleEdge";
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  node?: Maybe<AiringSchedule>;
};

export type AiringScheduleInput = {
  airingAt?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  timeUntilAiring?: InputMaybe<Scalars["Int"]["input"]>;
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
  highlight?: InputMaybe<Scalars["String"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AniChartUser = {
  __typename?: "AniChartUser";
  highlights?: Maybe<Scalars["Json"]["output"]>;
  settings?: Maybe<Scalars["Json"]["output"]>;
  user?: Maybe<User>;
};

/** A character that features in an anime or manga */
export type Character = {
  __typename?: "Character";
  /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
  age?: Maybe<Scalars["String"]["output"]>;
  /** The characters blood type */
  bloodType?: Maybe<Scalars["String"]["output"]>;
  /** The character's birth date */
  dateOfBirth?: Maybe<FuzzyDate>;
  /** A general description of the character */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The amount of user's who have favourited the character */
  favourites?: Maybe<Scalars["Int"]["output"]>;
  /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars["String"]["output"]>;
  /** The id of the character */
  id: Scalars["Int"]["output"];
  /** Character images */
  image?: Maybe<CharacterImage>;
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars["Boolean"]["output"];
  /** If the character is blocked from being added to favourites */
  isFavouriteBlocked: Scalars["Boolean"]["output"];
  /** Media that includes the character */
  media?: Maybe<MediaConnection>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars["String"]["output"]>;
  /** The names of the character */
  name?: Maybe<CharacterName>;
  /** The url for the character page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

/** A character that features in an anime or manga */
export type CharacterDescriptionArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A character that features in an anime or manga */
export type CharacterMediaArgs = {
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type CharacterConnection = {
  __typename?: "CharacterConnection";
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Character connection edge */
export type CharacterEdge = {
  __typename?: "CharacterEdge";
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The media the character is in */
  media?: Maybe<Array<Maybe<Media>>>;
  /** Media specific character name */
  name?: Maybe<Scalars["String"]["output"]>;
  node?: Maybe<Character>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};

/** Character connection edge */
export type CharacterEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Character connection edge */
export type CharacterEdgeVoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type CharacterImage = {
  __typename?: "CharacterImage";
  /** The character's image of media at its largest size */
  large?: Maybe<Scalars["String"]["output"]>;
  /** The character's image of media at medium size */
  medium?: Maybe<Scalars["String"]["output"]>;
};

/** The names of the character */
export type CharacterName = {
  __typename?: "CharacterName";
  /** Other names the character might be referred to as */
  alternative?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The character's given name */
  first?: Maybe<Scalars["String"]["output"]>;
  /** The character's first and last name */
  full?: Maybe<Scalars["String"]["output"]>;
  /** The character's surname */
  last?: Maybe<Scalars["String"]["output"]>;
  /** The character's middle name */
  middle?: Maybe<Scalars["String"]["output"]>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars["String"]["output"]>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars["String"]["output"]>;
};

/** The names of the character */
export type CharacterNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** The character's given name */
  first?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's surname */
  last?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's middle name */
  middle?: InputMaybe<Scalars["String"]["input"]>;
  /** The character's full name in their native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
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

/** A submission for a character that features in an anime or manga */
export type CharacterSubmission = {
  __typename?: "CharacterSubmission";
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  /** Character that the submission is referencing */
  character?: Maybe<Character>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the submission */
  id: Scalars["Int"]["output"];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars["Boolean"]["output"]>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** The character submission changes */
  submission?: Maybe<Character>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
};

export type CharacterSubmissionConnection = {
  __typename?: "CharacterSubmissionConnection";
  edges?: Maybe<Array<Maybe<CharacterSubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<CharacterSubmission>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** CharacterSubmission connection edge */
export type CharacterSubmissionEdge = {
  __typename?: "CharacterSubmissionEdge";
  node?: Maybe<CharacterSubmission>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  /** The submitted voice actors of the character */
  submittedVoiceActors?: Maybe<Array<Maybe<StaffSubmission>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};

/** Deleted data type */
export type Deleted = {
  __typename?: "Deleted";
  /** If an item has been successfully deleted */
  deleted?: Maybe<Scalars["Boolean"]["output"]>;
};

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

/** User's favourite anime, manga, characters, staff & studios */
export type Favourites = {
  __typename?: "Favourites";
  /** Favourite anime */
  anime?: Maybe<MediaConnection>;
  /** Favourite characters */
  characters?: Maybe<CharacterConnection>;
  /** Favourite manga */
  manga?: Maybe<MediaConnection>;
  /** Favourite staff */
  staff?: Maybe<StaffConnection>;
  /** Favourite studios */
  studios?: Maybe<StudioConnection>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesAnimeArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesCharactersArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesMangaArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStaffArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type FavouritesStudiosArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Notification for when the authenticated user is followed by another user */
export type FollowingNotification = {
  __typename?: "FollowingNotification";
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The liked activity */
  user?: Maybe<User>;
  /** The id of the user who followed the authenticated user */
  userId: Scalars["Int"]["output"];
};

/** User's format statistics */
export type FormatStats = {
  __typename?: "FormatStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  format?: Maybe<MediaFormat>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDate = {
  __typename?: "FuzzyDate";
  /** Numeric Day (24) */
  day?: Maybe<Scalars["Int"]["output"]>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars["Int"]["output"]>;
  /** Numeric Year (2017) */
  year?: Maybe<Scalars["Int"]["output"]>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type FuzzyDateInput = {
  /** Numeric Day (24) */
  day?: InputMaybe<Scalars["Int"]["input"]>;
  /** Numeric Month (3) */
  month?: InputMaybe<Scalars["Int"]["input"]>;
  /** Numeric Year (2017) */
  year?: InputMaybe<Scalars["Int"]["input"]>;
};

/** User's genre statistics */
export type GenreStats = {
  __typename?: "GenreStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  genre?: Maybe<Scalars["String"]["output"]>;
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched?: Maybe<Scalars["Int"]["output"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPage = {
  __typename?: "InternalPage";
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  characterSubmissions?: Maybe<Array<Maybe<CharacterSubmission>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  mediaSubmissions?: Maybe<Array<Maybe<MediaSubmission>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  modActions?: Maybe<Array<Maybe<ModAction>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  reports?: Maybe<Array<Maybe<Report>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  revisionHistory?: Maybe<Array<Maybe<RevisionHistory>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  staffSubmissions?: Maybe<Array<Maybe<StaffSubmission>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  userBlockSearch?: Maybe<Array<Maybe<User>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  hasReplies?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasRepliesOrTypeText?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId_not?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userId_not?: InputMaybe<Scalars["Int"]["input"]>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notYetAired?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageCharacterSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars["Int"]["input"]>;
  characterId?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageCharactersArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

/** Page of data (Used for internal use only) */
export type InternalPageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

/** Page of data (Used for internal use only) */
export type InternalPageLikesArgs = {
  likeableId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<LikeableType>;
};

/** Page of data (Used for internal use only) */
export type InternalPageMediaArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  chapters?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_greater?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  countryOfOrigin?: InputMaybe<Scalars["CountryCode"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  duration_greater?: InputMaybe<Scalars["Int"]["input"]>;
  duration_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_like?: InputMaybe<Scalars["String"]["input"]>;
  episodes?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars["String"]["input"]>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  idMal?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  idMal_not?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isAdult?: InputMaybe<Scalars["Boolean"]["input"]>;
  isLicensed?: InputMaybe<Scalars["Boolean"]["input"]>;
  licensedBy?: InputMaybe<Scalars["String"]["input"]>;
  licensedById?: InputMaybe<Scalars["Int"]["input"]>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  minimumTagRank?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars["Boolean"]["input"]>;
  completedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_like?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageMediaSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  status?: InputMaybe<SubmissionStatus>;
  submissionId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_greater?: InputMaybe<Scalars["Int"]["input"]>;
  date_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  releasing?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars["Int"]["input"]>;
  trending_greater?: InputMaybe<Scalars["Int"]["input"]>;
  trending_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  trending_not?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageModActionsArgs = {
  modId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageRecommendationsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaRecommendationId?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  rating_greater?: InputMaybe<Scalars["Int"]["input"]>;
  rating_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageReportsArgs = {
  reportedId?: InputMaybe<Scalars["Int"]["input"]>;
  reporterId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageReviewsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageRevisionHistoryArgs = {
  characterId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  staffId?: InputMaybe<Scalars["Int"]["input"]>;
  studioId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageStaffArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageStaffSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SubmissionSort>>>;
  staffId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<SubmissionStatus>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageStudiosArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

/** Page of data (Used for internal use only) */
export type InternalPageThreadCommentsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageThreadsArgs = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaCategoryId?: InputMaybe<Scalars["Int"]["input"]>;
  replyUserId?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageUserBlockSearchArgs = {
  search?: InputMaybe<Scalars["String"]["input"]>;
};

/** Page of data (Used for internal use only) */
export type InternalPageUsersArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

/** Types that can be liked */
export enum LikeableType {
  Activity = "ACTIVITY",
  ActivityReply = "ACTIVITY_REPLY",
  Thread = "THREAD",
  ThreadComment = "THREAD_COMMENT",
}

/** Likeable union type */
export type LikeableUnion =
  | ActivityReply
  | ListActivity
  | MessageActivity
  | TextActivity
  | Thread
  | ThreadComment;

/** User list activity (anime & manga updates) */
export type ListActivity = {
  __typename?: "ListActivity";
  /** The time the activity was created at */
  createdAt: Scalars["Int"]["output"];
  /** The id of the activity */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the activity has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The associated media to the activity update */
  media?: Maybe<Media>;
  /** The list progress made */
  progress?: Maybe<Scalars["String"]["output"]>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars["Int"]["output"];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The list item's textual status */
  status?: Maybe<Scalars["String"]["output"]>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The owner of the activity */
  user?: Maybe<User>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars["Int"]["output"]>;
};

export type ListActivityOption = {
  __typename?: "ListActivityOption";
  disabled?: Maybe<Scalars["Boolean"]["output"]>;
  type?: Maybe<MediaListStatus>;
};

export type ListActivityOptionInput = {
  disabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<MediaListStatus>;
};

/** User's list score statistics */
export type ListScoreStats = {
  __typename?: "ListScoreStats";
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  standardDeviation?: Maybe<Scalars["Int"]["output"]>;
};

/** Anime or Manga */
export type Media = {
  __typename?: "Media";
  /** The media's entire airing schedule */
  airingSchedule?: Maybe<AiringScheduleConnection>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread?: Maybe<Scalars["Boolean"]["output"]>;
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars["Int"]["output"]>;
  /** The banner image of the media */
  bannerImage?: Maybe<Scalars["String"]["output"]>;
  /** The amount of chapters the manga has when complete */
  chapters?: Maybe<Scalars["Int"]["output"]>;
  /** The characters in the media */
  characters?: Maybe<CharacterConnection>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin?: Maybe<Scalars["CountryCode"]["output"]>;
  /** The cover images of the media */
  coverImage?: Maybe<MediaCoverImage>;
  /** Short description of the media's story and characters */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The general length of each anime episode in minutes */
  duration?: Maybe<Scalars["Int"]["output"]>;
  /** The last official release date of the media */
  endDate?: Maybe<FuzzyDate>;
  /** The amount of episodes the anime has when complete */
  episodes?: Maybe<Scalars["Int"]["output"]>;
  /** External links to another site related to the media */
  externalLinks?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** The amount of user's who have favourited the media */
  favourites?: Maybe<Scalars["Int"]["output"]>;
  /** The format the media was released in */
  format?: Maybe<MediaFormat>;
  /** The genres of the media */
  genres?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Official Twitter hashtags for the media */
  hashtag?: Maybe<Scalars["String"]["output"]>;
  /** The id of the media */
  id: Scalars["Int"]["output"];
  /** The mal id of the media */
  idMal?: Maybe<Scalars["Int"]["output"]>;
  /** If the media is intended only for 18+ adult audiences */
  isAdult?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars["Boolean"]["output"];
  /** If the media is blocked from being added to favourites */
  isFavouriteBlocked: Scalars["Boolean"]["output"];
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed?: Maybe<Scalars["Boolean"]["output"]>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the media is blocked from being reviewed */
  isReviewBlocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** Mean score of all the user's scores of the media */
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  /** The authenticated user's media list entry for the media */
  mediaListEntry?: Maybe<MediaList>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars["String"]["output"]>;
  /** The media's next episode airing schedule */
  nextAiringEpisode?: Maybe<AiringSchedule>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars["Int"]["output"]>;
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings?: Maybe<Array<Maybe<MediaRank>>>;
  /** User recommendations for similar media */
  recommendations?: Maybe<RecommendationConnection>;
  /** Other media in the same or connecting franchise */
  relations?: Maybe<MediaConnection>;
  /** User reviews of the media */
  reviews?: Maybe<ReviewConnection>;
  /** The season the media was initially released in */
  season?: Maybe<MediaSeason>;
  /**
   * The year & season the media was initially released in
   * @deprecated
   */
  seasonInt?: Maybe<Scalars["Int"]["output"]>;
  /** The season year the media was initially released in */
  seasonYear?: Maybe<Scalars["Int"]["output"]>;
  /** The url for the media page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** Source type the media was adapted from. */
  source?: Maybe<MediaSource>;
  /** The staff who produced the media */
  staff?: Maybe<StaffConnection>;
  /** The first official release date of the media */
  startDate?: Maybe<FuzzyDate>;
  stats?: Maybe<MediaStats>;
  /** The current releasing status of the media */
  status?: Maybe<MediaStatus>;
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes?: Maybe<Array<Maybe<MediaStreamingEpisode>>>;
  /** The companies who produced the media */
  studios?: Maybe<StudioConnection>;
  /** Alternative titles of the media */
  synonyms?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** List of tags that describes elements and themes of the media */
  tags?: Maybe<Array<Maybe<MediaTag>>>;
  /** The official titles of the media in various languages */
  title?: Maybe<MediaTitle>;
  /** Media trailer or advertisement */
  trailer?: Maybe<MediaTrailer>;
  /** The amount of related activity in the past hour */
  trending?: Maybe<Scalars["Int"]["output"]>;
  /** The media's daily trend stats */
  trends?: Maybe<MediaTrendConnection>;
  /** The type of the media; anime or manga */
  type?: Maybe<MediaType>;
  /** When the media's data was last updated */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of volumes the manga has when complete */
  volumes?: Maybe<Scalars["Int"]["output"]>;
};

/** Anime or Manga */
export type MediaAiringScheduleArgs = {
  notYetAired?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Anime or Manga */
export type MediaCharactersArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  role?: InputMaybe<CharacterRole>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

/** Anime or Manga */
export type MediaDescriptionArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Anime or Manga */
export type MediaRecommendationsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
};

/** Anime or Manga */
export type MediaReviewsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
};

/** Anime or Manga */
export type MediaSourceArgs = {
  version?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Anime or Manga */
export type MediaStaffArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Anime or Manga */
export type MediaStatusArgs = {
  version?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Anime or Manga */
export type MediaStudiosArgs = {
  isMain?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

/** Anime or Manga */
export type MediaTrendsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  releasing?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
};

/** Internal - Media characters separated */
export type MediaCharacter = {
  __typename?: "MediaCharacter";
  /** The characters in the media voiced by the parent actor */
  character?: Maybe<Character>;
  /** Media specific character name */
  characterName?: Maybe<Scalars["String"]["output"]>;
  dubGroup?: Maybe<Scalars["String"]["output"]>;
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** The characters role in the media */
  role?: Maybe<CharacterRole>;
  roleNotes?: Maybe<Scalars["String"]["output"]>;
  /** The voice actor of the character */
  voiceActor?: Maybe<Staff>;
};

export type MediaConnection = {
  __typename?: "MediaConnection";
  edges?: Maybe<Array<Maybe<MediaEdge>>>;
  nodes?: Maybe<Array<Maybe<Media>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

export type MediaCoverImage = {
  __typename?: "MediaCoverImage";
  /** Average #hex color of cover image */
  color?: Maybe<Scalars["String"]["output"]>;
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge?: Maybe<Scalars["String"]["output"]>;
  /** The cover image url of the media at a large size */
  large?: Maybe<Scalars["String"]["output"]>;
  /** The cover image url of the media at medium size */
  medium?: Maybe<Scalars["String"]["output"]>;
};

/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export type MediaDataChangeNotification = {
  __typename?: "MediaDataChangeNotification";
  /** The reason for the media data change */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The media that received data changes */
  media?: Maybe<Media>;
  /** The id of the media that received data changes */
  mediaId: Scalars["Int"]["output"];
  /** The reason for the media data change */
  reason?: Maybe<Scalars["String"]["output"]>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Notification for when a media tracked in a user's list is deleted from the site */
export type MediaDeletionNotification = {
  __typename?: "MediaDeletionNotification";
  /** The reason for the media deletion */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The title of the deleted media */
  deletedMediaTitle?: Maybe<Scalars["String"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The reason for the media deletion */
  reason?: Maybe<Scalars["String"]["output"]>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Media connection edge */
export type MediaEdge = {
  __typename?: "MediaEdge";
  /** Media specific character name */
  characterName?: Maybe<Scalars["String"]["output"]>;
  /** The characters role in the media */
  characterRole?: Maybe<CharacterRole>;
  /** The characters in the media voiced by the parent actor */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars["String"]["output"]>;
  /** The order the media should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars["Boolean"]["output"];
  node?: Maybe<Media>;
  /** The type of relation to the parent model */
  relationType?: Maybe<MediaRelation>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars["String"]["output"]>;
  /** The role of the staff member in the production of the media */
  staffRole?: Maybe<Scalars["String"]["output"]>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<StaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<Staff>>>;
};

/** Media connection edge */
export type MediaEdgeRelationTypeArgs = {
  version?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Media connection edge */
export type MediaEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Media connection edge */
export type MediaEdgeVoiceActorsArgs = {
  language?: InputMaybe<StaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** An external link to another site related to the media or staff member */
export type MediaExternalLink = {
  __typename?: "MediaExternalLink";
  color?: Maybe<Scalars["String"]["output"]>;
  /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
  icon?: Maybe<Scalars["String"]["output"]>;
  /** The id of the external link */
  id: Scalars["Int"]["output"];
  isDisabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** Language the site content is in. See Staff language field for values. */
  language?: Maybe<Scalars["String"]["output"]>;
  notes?: Maybe<Scalars["String"]["output"]>;
  /** The links website site name */
  site: Scalars["String"]["output"];
  /** The links website site id */
  siteId?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<ExternalLinkType>;
  /** The url of the external link or base url of link source */
  url?: Maybe<Scalars["String"]["output"]>;
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

/** List of anime or manga */
export type MediaList = {
  __typename?: "MediaList";
  /** Map of advanced scores with name keys */
  advancedScores?: Maybe<Scalars["Json"]["output"]>;
  /** When the entry was completed by the user */
  completedAt?: Maybe<FuzzyDate>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** Map of booleans for which custom lists the entry are in */
  customLists?: Maybe<Scalars["Json"]["output"]>;
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists?: Maybe<Scalars["Boolean"]["output"]>;
  /** The id of the list entry */
  id: Scalars["Int"]["output"];
  media?: Maybe<Media>;
  /** The id of the media */
  mediaId: Scalars["Int"]["output"];
  /** Text notes */
  notes?: Maybe<Scalars["String"]["output"]>;
  /** Priority of planning */
  priority?: Maybe<Scalars["Int"]["output"]>;
  /** If the entry should only be visible to authenticated user */
  private?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of episodes/chapters consumed by the user */
  progress?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of volumes read by the user */
  progressVolumes?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of times the user has rewatched/read the media */
  repeat?: Maybe<Scalars["Int"]["output"]>;
  /** The score of the entry */
  score?: Maybe<Scalars["Float"]["output"]>;
  /** When the entry was started by the user */
  startedAt?: Maybe<FuzzyDate>;
  /** The watching/reading status */
  status?: Maybe<MediaListStatus>;
  /** When the entry data was last updated */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<User>;
  /** The id of the user owner of the list entry */
  userId: Scalars["Int"]["output"];
};

/** List of anime or manga */
export type MediaListCustomListsArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** List of anime or manga */
export type MediaListScoreArgs = {
  format?: InputMaybe<ScoreFormat>;
};

/** List of anime or manga */
export type MediaListCollection = {
  __typename?: "MediaListCollection";
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /** If there is another chunk */
  hasNextChunk?: Maybe<Scalars["Boolean"]["output"]>;
  /** Grouped media list entries */
  lists?: Maybe<Array<Maybe<MediaListGroup>>>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists?: Maybe<Array<Maybe<Array<Maybe<MediaList>>>>>;
  /** The owner of the list */
  user?: Maybe<User>;
};

/** List of anime or manga */
export type MediaListCollectionCustomListsArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** List of anime or manga */
export type MediaListCollectionStatusListsArgs = {
  asArray?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** List group of anime or manga entries */
export type MediaListGroup = {
  __typename?: "MediaListGroup";
  /** Media list entries */
  entries?: Maybe<Array<Maybe<MediaList>>>;
  isCustomList?: Maybe<Scalars["Boolean"]["output"]>;
  isSplitCompletedList?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<MediaListStatus>;
};

/** A user's list options */
export type MediaListOptions = {
  __typename?: "MediaListOptions";
  /** The user's anime list options */
  animeList?: Maybe<MediaListTypeOptions>;
  /** The user's manga list options */
  mangaList?: Maybe<MediaListTypeOptions>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars["String"]["output"]>;
  /** The score format the user is using for media lists */
  scoreFormat?: Maybe<ScoreFormat>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars["Json"]["output"]>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated No longer used */
  useLegacyLists?: Maybe<Scalars["Boolean"]["output"]>;
};

/** A user's list options for anime or manga lists */
export type MediaListOptionsInput = {
  /** The names of the user's advanced scoring sections */
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The names of the user's custom lists */
  customLists?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The order each list should be displayed in */
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** list theme */
  theme?: InputMaybe<Scalars["String"]["input"]>;
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

/** A user's list options for anime or manga lists */
export type MediaListTypeOptions = {
  __typename?: "MediaListTypeOptions";
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme?: Maybe<Scalars["Json"]["output"]>;
};

/** Notification for when a media entry is merged into another for a user who had it on their list */
export type MediaMergeNotification = {
  __typename?: "MediaMergeNotification";
  /** The reason for the media data change */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The title of the deleted media */
  deletedMediaTitles?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The media that was merged into */
  media?: Maybe<Media>;
  /** The id of the media that was merged into */
  mediaId: Scalars["Int"]["output"];
  /** The reason for the media merge */
  reason?: Maybe<Scalars["String"]["output"]>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type MediaRank = {
  __typename?: "MediaRank";
  /** If the ranking is based on all time instead of a season/year */
  allTime?: Maybe<Scalars["Boolean"]["output"]>;
  /** String that gives context to the ranking type and time span */
  context: Scalars["String"]["output"];
  /** The format the media is ranked within */
  format: MediaFormat;
  /** The id of the rank */
  id: Scalars["Int"]["output"];
  /** The numerical rank of the media */
  rank: Scalars["Int"]["output"];
  /** The season the media is ranked within */
  season?: Maybe<MediaSeason>;
  /** The type of ranking */
  type: MediaRankType;
  /** The year the media is ranked within */
  year?: Maybe<Scalars["Int"]["output"]>;
};

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

/** A media's statistics */
export type MediaStats = {
  __typename?: "MediaStats";
  /** @deprecated Replaced by MediaTrends */
  airingProgression?: Maybe<Array<Maybe<AiringProgression>>>;
  scoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  statusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
};

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

/** Data and links to legal streaming episodes on external sites */
export type MediaStreamingEpisode = {
  __typename?: "MediaStreamingEpisode";
  /** The site location of the streaming episodes */
  site?: Maybe<Scalars["String"]["output"]>;
  /** Url of episode image thumbnail */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  /** Title of the episode */
  title?: Maybe<Scalars["String"]["output"]>;
  /** The url of the episode */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** Media submission */
export type MediaSubmission = {
  __typename?: "MediaSubmission";
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  changes?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  characters?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  externalLinks?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  /** The id of the submission */
  id: Scalars["Int"]["output"];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars["Boolean"]["output"]>;
  media?: Maybe<Media>;
  notes?: Maybe<Scalars["String"]["output"]>;
  relations?: Maybe<Array<Maybe<MediaEdge>>>;
  source?: Maybe<Scalars["String"]["output"]>;
  staff?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  studios?: Maybe<Array<Maybe<MediaSubmissionComparison>>>;
  submission?: Maybe<Media>;
  /** User submitter of the submission */
  submitter?: Maybe<User>;
  submitterStats?: Maybe<Scalars["Json"]["output"]>;
};

/** Media submission with comparison to current data */
export type MediaSubmissionComparison = {
  __typename?: "MediaSubmissionComparison";
  character?: Maybe<MediaCharacter>;
  externalLink?: Maybe<MediaExternalLink>;
  staff?: Maybe<StaffEdge>;
  studio?: Maybe<StudioEdge>;
  submission?: Maybe<MediaSubmissionEdge>;
};

export type MediaSubmissionEdge = {
  __typename?: "MediaSubmissionEdge";
  character?: Maybe<Character>;
  characterName?: Maybe<Scalars["String"]["output"]>;
  characterRole?: Maybe<CharacterRole>;
  characterSubmission?: Maybe<Character>;
  dubGroup?: Maybe<Scalars["String"]["output"]>;
  externalLink?: Maybe<MediaExternalLink>;
  /** The id of the direct submission */
  id?: Maybe<Scalars["Int"]["output"]>;
  isMain?: Maybe<Scalars["Boolean"]["output"]>;
  media?: Maybe<Media>;
  roleNotes?: Maybe<Scalars["String"]["output"]>;
  staff?: Maybe<Staff>;
  staffRole?: Maybe<Scalars["String"]["output"]>;
  staffSubmission?: Maybe<Staff>;
  studio?: Maybe<Studio>;
  voiceActor?: Maybe<Staff>;
  voiceActorSubmission?: Maybe<Staff>;
};

/** A tag that describes a theme or element of the media */
export type MediaTag = {
  __typename?: "MediaTag";
  /** The categories of tags this tag belongs to */
  category?: Maybe<Scalars["String"]["output"]>;
  /** A general description of the tag */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The id of the tag */
  id: Scalars["Int"]["output"];
  /** If the tag is only for adult 18+ media */
  isAdult?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the tag is a spoiler for this media */
  isMediaSpoiler?: Maybe<Scalars["Boolean"]["output"]>;
  /** The name of the tag */
  name: Scalars["String"]["output"];
  /** The relevance ranking of the tag out of the 100 for this media */
  rank?: Maybe<Scalars["Int"]["output"]>;
  /** The user who submitted the tag */
  userId?: Maybe<Scalars["Int"]["output"]>;
};

/** The official titles of the media in various languages */
export type MediaTitle = {
  __typename?: "MediaTitle";
  /** The official english title */
  english?: Maybe<Scalars["String"]["output"]>;
  /** Official title in it's native language */
  native?: Maybe<Scalars["String"]["output"]>;
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars["String"]["output"]>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars["String"]["output"]>;
};

/** The official titles of the media in various languages */
export type MediaTitleEnglishArgs = {
  stylised?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The official titles of the media in various languages */
export type MediaTitleNativeArgs = {
  stylised?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The official titles of the media in various languages */
export type MediaTitleRomajiArgs = {
  stylised?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The official titles of the media in various languages */
export type MediaTitleInput = {
  /** The official english title */
  english?: InputMaybe<Scalars["String"]["input"]>;
  /** Official title in it's native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
  /** The romanization of the native language title */
  romaji?: InputMaybe<Scalars["String"]["input"]>;
};

/** Media trailer or advertisement */
export type MediaTrailer = {
  __typename?: "MediaTrailer";
  /** The trailer video id */
  id?: Maybe<Scalars["String"]["output"]>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site?: Maybe<Scalars["String"]["output"]>;
  /** The url for the thumbnail image of the video */
  thumbnail?: Maybe<Scalars["String"]["output"]>;
};

/** Daily media statistics */
export type MediaTrend = {
  __typename?: "MediaTrend";
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars["Int"]["output"]>;
  /** The day the data was recorded (timestamp) */
  date: Scalars["Int"]["output"];
  /** The episode number of the anime released on this day */
  episode?: Maybe<Scalars["Int"]["output"]>;
  /** The number of users with watching/reading the media */
  inProgress?: Maybe<Scalars["Int"]["output"]>;
  /** The related media */
  media?: Maybe<Media>;
  /** The id of the tag */
  mediaId: Scalars["Int"]["output"];
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars["Int"]["output"]>;
  /** If the media was being released at this time */
  releasing: Scalars["Boolean"]["output"];
  /** The amount of media activity on the day */
  trending: Scalars["Int"]["output"];
};

export type MediaTrendConnection = {
  __typename?: "MediaTrendConnection";
  edges?: Maybe<Array<Maybe<MediaTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Media trend connection edge */
export type MediaTrendEdge = {
  __typename?: "MediaTrendEdge";
  node?: Maybe<MediaTrend>;
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

/** User message activity */
export type MessageActivity = {
  __typename?: "MessageActivity";
  /** The time the activity was created at */
  createdAt: Scalars["Int"]["output"];
  /** The id of the activity */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the activity has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The message text (Markdown) */
  message?: Maybe<Scalars["String"]["output"]>;
  /** The user who sent the activity message */
  messenger?: Maybe<User>;
  /** The user id of the activity's sender */
  messengerId?: Maybe<Scalars["Int"]["output"]>;
  /** The user who the activity message was sent to */
  recipient?: Maybe<User>;
  /** The user id of the activity's recipient */
  recipientId?: Maybe<Scalars["Int"]["output"]>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars["Int"]["output"];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The type of the activity */
  type?: Maybe<ActivityType>;
};

/** User message activity */
export type MessageActivityMessageArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ModAction = {
  __typename?: "ModAction";
  createdAt: Scalars["Int"]["output"];
  data?: Maybe<Scalars["String"]["output"]>;
  /** The id of the action */
  id: Scalars["Int"]["output"];
  mod?: Maybe<User>;
  objectId?: Maybe<Scalars["Int"]["output"]>;
  objectType?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<ModActionType>;
  user?: Maybe<User>;
};

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

export type Mutation = {
  __typename?: "Mutation";
  /** Delete an activity item of the authenticated users */
  DeleteActivity?: Maybe<Deleted>;
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply?: Maybe<Deleted>;
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList?: Maybe<Deleted>;
  /** Delete a media list entry */
  DeleteMediaListEntry?: Maybe<Deleted>;
  /** Delete a review */
  DeleteReview?: Maybe<Deleted>;
  /** Delete a thread */
  DeleteThread?: Maybe<Deleted>;
  /** Delete a thread comment */
  DeleteThreadComment?: Maybe<Deleted>;
  /** Rate a review */
  RateReview?: Maybe<Review>;
  /** Create or update an activity reply */
  SaveActivityReply?: Maybe<ActivityReply>;
  /** Update list activity (Mod Only) */
  SaveListActivity?: Maybe<ListActivity>;
  /** Create or update a media list entry */
  SaveMediaListEntry?: Maybe<MediaList>;
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity?: Maybe<MessageActivity>;
  /** Recommendation a media */
  SaveRecommendation?: Maybe<Recommendation>;
  /** Create or update a review */
  SaveReview?: Maybe<Review>;
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity?: Maybe<TextActivity>;
  /** Create or update a forum thread */
  SaveThread?: Maybe<Thread>;
  /** Create or update a thread comment */
  SaveThreadComment?: Maybe<ThreadComment>;
  /** Toggle activity to be pinned to the top of the user's activity feed */
  ToggleActivityPin?: Maybe<ActivityUnion>;
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription?: Maybe<ActivityUnion>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite?: Maybe<Favourites>;
  /** Toggle the un/following of a user */
  ToggleFollow?: Maybe<User>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike?: Maybe<Array<Maybe<User>>>;
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2?: Maybe<LikeableUnion>;
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription?: Maybe<Thread>;
  UpdateAniChartHighlights?: Maybe<Scalars["Json"]["output"]>;
  UpdateAniChartSettings?: Maybe<Scalars["Json"]["output"]>;
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder?: Maybe<Favourites>;
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries?: Maybe<Array<Maybe<MediaList>>>;
  UpdateUser?: Maybe<User>;
};

export type MutationDeleteActivityArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteActivityReplyArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteCustomListArgs = {
  customList?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<MediaType>;
};

export type MutationDeleteMediaListEntryArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteThreadArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationDeleteThreadCommentArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationRateReviewArgs = {
  rating?: InputMaybe<ReviewRating>;
  reviewId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSaveActivityReplyArgs = {
  activityId?: InputMaybe<Scalars["Int"]["input"]>;
  asMod?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaveListActivityArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSaveMediaListEntryArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  customLists?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  hiddenFromStatusLists?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  priority?: InputMaybe<Scalars["Int"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  progress?: InputMaybe<Scalars["Int"]["input"]>;
  progressVolumes?: InputMaybe<Scalars["Int"]["input"]>;
  repeat?: InputMaybe<Scalars["Int"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  scoreRaw?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};

export type MutationSaveMessageActivityArgs = {
  asMod?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  recipientId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationSaveRecommendationArgs = {
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaRecommendationId?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<RecommendationRating>;
};

export type MutationSaveReviewArgs = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  score?: InputMaybe<Scalars["Int"]["input"]>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaveTextActivityArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaveThreadArgs = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  categories?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaCategories?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sticky?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSaveThreadCommentArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  parentCommentId?: InputMaybe<Scalars["Int"]["input"]>;
  threadId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationToggleActivityPinArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  pinned?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationToggleActivitySubscriptionArgs = {
  activityId?: InputMaybe<Scalars["Int"]["input"]>;
  subscribe?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationToggleFavouriteArgs = {
  animeId?: InputMaybe<Scalars["Int"]["input"]>;
  characterId?: InputMaybe<Scalars["Int"]["input"]>;
  mangaId?: InputMaybe<Scalars["Int"]["input"]>;
  staffId?: InputMaybe<Scalars["Int"]["input"]>;
  studioId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationToggleFollowArgs = {
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationToggleLikeArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<LikeableType>;
};

export type MutationToggleLikeV2Args = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<LikeableType>;
};

export type MutationToggleThreadSubscriptionArgs = {
  subscribe?: InputMaybe<Scalars["Boolean"]["input"]>;
  threadId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationUpdateAniChartHighlightsArgs = {
  highlights?: InputMaybe<Array<InputMaybe<AniChartHighlightInput>>>;
};

export type MutationUpdateAniChartSettingsArgs = {
  outgoingLinkProvider?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Scalars["String"]["input"]>;
  theme?: InputMaybe<Scalars["String"]["input"]>;
  titleLanguage?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateFavouriteOrderArgs = {
  animeIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  animeOrder?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  characterIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  characterOrder?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mangaIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mangaOrder?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  staffOrder?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  studioIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  studioOrder?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type MutationUpdateMediaListEntriesArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  completedAt?: InputMaybe<FuzzyDateInput>;
  hiddenFromStatusLists?: InputMaybe<Scalars["Boolean"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  priority?: InputMaybe<Scalars["Int"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  progress?: InputMaybe<Scalars["Int"]["input"]>;
  progressVolumes?: InputMaybe<Scalars["Int"]["input"]>;
  repeat?: InputMaybe<Scalars["Int"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  scoreRaw?: InputMaybe<Scalars["Int"]["input"]>;
  startedAt?: InputMaybe<FuzzyDateInput>;
  status?: InputMaybe<MediaListStatus>;
};

export type MutationUpdateUserArgs = {
  about?: InputMaybe<Scalars["String"]["input"]>;
  activityMergeTime?: InputMaybe<Scalars["Int"]["input"]>;
  airingNotifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  animeListOptions?: InputMaybe<MediaListOptionsInput>;
  disabledListActivity?: InputMaybe<Array<InputMaybe<ListActivityOptionInput>>>;
  displayAdultContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  donatorBadge?: InputMaybe<Scalars["String"]["input"]>;
  mangaListOptions?: InputMaybe<MediaListOptionsInput>;
  notificationOptions?: InputMaybe<Array<InputMaybe<NotificationOptionInput>>>;
  profileColor?: InputMaybe<Scalars["String"]["input"]>;
  restrictMessagesToFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  rowOrder?: InputMaybe<Scalars["String"]["input"]>;
  scoreFormat?: InputMaybe<ScoreFormat>;
  staffNameLanguage?: InputMaybe<UserStaffNameLanguage>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
  titleLanguage?: InputMaybe<UserTitleLanguage>;
};

/** Notification option */
export type NotificationOption = {
  __typename?: "NotificationOption";
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars["Boolean"]["output"]>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

/** Notification option input */
export type NotificationOptionInput = {
  /** Whether this type of notification is enabled */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** The type of notification */
  type?: InputMaybe<NotificationType>;
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

/** Notification union type */
export type NotificationUnion =
  | ActivityLikeNotification
  | ActivityMentionNotification
  | ActivityMessageNotification
  | ActivityReplyLikeNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | AiringNotification
  | FollowingNotification
  | MediaDataChangeNotification
  | MediaDeletionNotification
  | MediaMergeNotification
  | RelatedMediaAdditionNotification
  | ThreadCommentLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadLikeNotification;

/** Page of data */
export type Page = {
  __typename?: "Page";
  activities?: Maybe<Array<Maybe<ActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<ActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<AiringSchedule>>>;
  characters?: Maybe<Array<Maybe<Character>>>;
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  media?: Maybe<Array<Maybe<Media>>>;
  mediaList?: Maybe<Array<Maybe<MediaList>>>;
  mediaTrends?: Maybe<Array<Maybe<MediaTrend>>>;
  notifications?: Maybe<Array<Maybe<NotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
  recommendations?: Maybe<Array<Maybe<Recommendation>>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  staff?: Maybe<Array<Maybe<Staff>>>;
  studios?: Maybe<Array<Maybe<Studio>>>;
  threadComments?: Maybe<Array<Maybe<ThreadComment>>>;
  threads?: Maybe<Array<Maybe<Thread>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

/** Page of data */
export type PageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  hasReplies?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasRepliesOrTypeText?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId_not?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userId_not?: InputMaybe<Scalars["Int"]["input"]>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** Page of data */
export type PageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notYetAired?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

/** Page of data */
export type PageCharactersArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

/** Page of data */
export type PageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

/** Page of data */
export type PageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

/** Page of data */
export type PageLikesArgs = {
  likeableId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<LikeableType>;
};

/** Page of data */
export type PageMediaArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  chapters?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_greater?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  countryOfOrigin?: InputMaybe<Scalars["CountryCode"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  duration_greater?: InputMaybe<Scalars["Int"]["input"]>;
  duration_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_like?: InputMaybe<Scalars["String"]["input"]>;
  episodes?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars["String"]["input"]>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  idMal?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  idMal_not?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isAdult?: InputMaybe<Scalars["Boolean"]["input"]>;
  isLicensed?: InputMaybe<Scalars["Boolean"]["input"]>;
  licensedBy?: InputMaybe<Scalars["String"]["input"]>;
  licensedById?: InputMaybe<Scalars["Int"]["input"]>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  minimumTagRank?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars["Boolean"]["input"]>;
  completedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_like?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

/** Page of data */
export type PageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_greater?: InputMaybe<Scalars["Int"]["input"]>;
  date_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  releasing?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars["Int"]["input"]>;
  trending_greater?: InputMaybe<Scalars["Int"]["input"]>;
  trending_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  trending_not?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

/** Page of data */
export type PageRecommendationsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaRecommendationId?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  rating_greater?: InputMaybe<Scalars["Int"]["input"]>;
  rating_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageReviewsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageStaffArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

/** Page of data */
export type PageStudiosArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

/** Page of data */
export type PageThreadCommentsArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageThreadsArgs = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaCategoryId?: InputMaybe<Scalars["Int"]["input"]>;
  replyUserId?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Page of data */
export type PageUsersArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  /** The current page */
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  /** If there is another page */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** The last page */
  lastPage?: Maybe<Scalars["Int"]["output"]>;
  /** The count on a page */
  perPage?: Maybe<Scalars["Int"]["output"]>;
  /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
  total?: Maybe<Scalars["Int"]["output"]>;
};

/** Provides the parsed markdown as html */
export type ParsedMarkdown = {
  __typename?: "ParsedMarkdown";
  /** The parsed markdown as html */
  html?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  /** Activity query */
  Activity?: Maybe<ActivityUnion>;
  /** Activity reply query */
  ActivityReply?: Maybe<ActivityReply>;
  /** Airing schedule query */
  AiringSchedule?: Maybe<AiringSchedule>;
  AniChartUser?: Maybe<AniChartUser>;
  /** Character query */
  Character?: Maybe<Character>;
  /** ExternalLinkSource collection query */
  ExternalLinkSourceCollection?: Maybe<Array<Maybe<MediaExternalLink>>>;
  /** Follow query */
  Follower?: Maybe<User>;
  /** Follow query */
  Following?: Maybe<User>;
  /** Collection of all the possible media genres */
  GenreCollection?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Like query */
  Like?: Maybe<User>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown?: Maybe<ParsedMarkdown>;
  /** Media query */
  Media?: Maybe<Media>;
  /** Media list query */
  MediaList?: Maybe<MediaList>;
  /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
  MediaListCollection?: Maybe<MediaListCollection>;
  /** Collection of all the possible media tags */
  MediaTagCollection?: Maybe<Array<Maybe<MediaTag>>>;
  /** Media Trend query */
  MediaTrend?: Maybe<MediaTrend>;
  /** Notification query */
  Notification?: Maybe<NotificationUnion>;
  Page?: Maybe<Page>;
  /** Recommendation query */
  Recommendation?: Maybe<Recommendation>;
  /** Review query */
  Review?: Maybe<Review>;
  /** Site statistics query */
  SiteStatistics?: Maybe<SiteStatistics>;
  /** Staff query */
  Staff?: Maybe<Staff>;
  /** Studio query */
  Studio?: Maybe<Studio>;
  /** Thread query */
  Thread?: Maybe<Thread>;
  /** Comment query */
  ThreadComment?: Maybe<Array<Maybe<ThreadComment>>>;
  /** User query */
  User?: Maybe<User>;
  /** Get the currently authenticated user */
  Viewer?: Maybe<User>;
};

export type QueryActivityArgs = {
  createdAt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  hasReplies?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasRepliesOrTypeText?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  messengerId_not?: InputMaybe<Scalars["Int"]["input"]>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sort?: InputMaybe<Array<InputMaybe<ActivitySort>>>;
  type?: InputMaybe<ActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  type_not?: InputMaybe<ActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<ActivityType>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userId_not?: InputMaybe<Scalars["Int"]["input"]>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type QueryActivityReplyArgs = {
  activityId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAiringScheduleArgs = {
  airingAt?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_greater?: InputMaybe<Scalars["Int"]["input"]>;
  airingAt_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notYetAired?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<AiringSort>>>;
};

export type QueryCharacterArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

export type QueryExternalLinkSourceCollectionArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaType?: InputMaybe<ExternalLinkMediaType>;
  type?: InputMaybe<ExternalLinkType>;
};

export type QueryFollowerArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

export type QueryFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  userId: Scalars["Int"]["input"];
};

export type QueryLikeArgs = {
  likeableId?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<LikeableType>;
};

export type QueryMarkdownArgs = {
  markdown: Scalars["String"]["input"];
};

export type QueryMediaArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  chapters?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_greater?: InputMaybe<Scalars["Int"]["input"]>;
  chapters_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  countryOfOrigin?: InputMaybe<Scalars["CountryCode"]["input"]>;
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  duration_greater?: InputMaybe<Scalars["Int"]["input"]>;
  duration_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  endDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  endDate_like?: InputMaybe<Scalars["String"]["input"]>;
  episodes?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episodes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  format?: InputMaybe<MediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  format_not?: InputMaybe<MediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<MediaFormat>>>;
  genre?: InputMaybe<Scalars["String"]["input"]>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  idMal?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  idMal_not?: InputMaybe<Scalars["Int"]["input"]>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isAdult?: InputMaybe<Scalars["Boolean"]["input"]>;
  isLicensed?: InputMaybe<Scalars["Boolean"]["input"]>;
  licensedBy?: InputMaybe<Scalars["String"]["input"]>;
  licensedById?: InputMaybe<Scalars["Int"]["input"]>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  minimumTagRank?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  season?: InputMaybe<MediaSeason>;
  seasonYear?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  source?: InputMaybe<MediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<MediaSource>>>;
  startDate?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startDate_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  status_not?: InputMaybe<MediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaStatus>>>;
  tag?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory?: InputMaybe<Scalars["String"]["input"]>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  type?: InputMaybe<MediaType>;
  volumes?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_greater?: InputMaybe<Scalars["Int"]["input"]>;
  volumes_lesser?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars["Boolean"]["input"]>;
  completedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isFollowing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_like?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryMediaListCollectionArgs = {
  chunk?: InputMaybe<Scalars["Int"]["input"]>;
  completedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  completedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  forceSingleCompletedList?: InputMaybe<Scalars["Boolean"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  notes_like?: InputMaybe<Scalars["String"]["input"]>;
  perChunk?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaListSort>>>;
  startedAt?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_greater?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_lesser?: InputMaybe<Scalars["FuzzyDateInt"]["input"]>;
  startedAt_like?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  status_not?: InputMaybe<MediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<MediaListStatus>>>;
  type?: InputMaybe<MediaType>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  userName?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryMediaTagCollectionArgs = {
  status?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryMediaTrendArgs = {
  averageScore?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_greater?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  averageScore_not?: InputMaybe<Scalars["Int"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_greater?: InputMaybe<Scalars["Int"]["input"]>;
  date_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode?: InputMaybe<Scalars["Int"]["input"]>;
  episode_greater?: InputMaybe<Scalars["Int"]["input"]>;
  episode_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  episode_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaId_not?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  popularity?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_greater?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  popularity_not?: InputMaybe<Scalars["Int"]["input"]>;
  releasing?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaTrendSort>>>;
  trending?: InputMaybe<Scalars["Int"]["input"]>;
  trending_greater?: InputMaybe<Scalars["Int"]["input"]>;
  trending_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  trending_not?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryNotificationArgs = {
  resetNotificationCount?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<NotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<NotificationType>>>;
};

export type QueryPageArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryRecommendationArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaRecommendationId?: InputMaybe<Scalars["Int"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  rating_greater?: InputMaybe<Scalars["Int"]["input"]>;
  rating_lesser?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RecommendationSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryReviewArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  mediaId?: InputMaybe<Scalars["Int"]["input"]>;
  mediaType?: InputMaybe<MediaType>;
  sort?: InputMaybe<Array<InputMaybe<ReviewSort>>>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryStaffArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  isBirthday?: InputMaybe<Scalars["Boolean"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StaffSort>>>;
};

export type QueryStudioArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_not?: InputMaybe<Scalars["Int"]["input"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<StudioSort>>>;
};

export type QueryThreadArgs = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  mediaCategoryId?: InputMaybe<Scalars["Int"]["input"]>;
  replyUserId?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadSort>>>;
  subscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryThreadCommentArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryUserArgs = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  isModerator?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

/** Media recommendation */
export type Recommendation = {
  __typename?: "Recommendation";
  /** The id of the recommendation */
  id: Scalars["Int"]["output"];
  /** The media the recommendation is from */
  media?: Maybe<Media>;
  /** The recommended media */
  mediaRecommendation?: Maybe<Media>;
  /** Users rating of the recommendation */
  rating?: Maybe<Scalars["Int"]["output"]>;
  /** The user that first created the recommendation */
  user?: Maybe<User>;
  /** The rating of the recommendation by currently authenticated user */
  userRating?: Maybe<RecommendationRating>;
};

export type RecommendationConnection = {
  __typename?: "RecommendationConnection";
  edges?: Maybe<Array<Maybe<RecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<Recommendation>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Recommendation connection edge */
export type RecommendationEdge = {
  __typename?: "RecommendationEdge";
  node?: Maybe<Recommendation>;
};

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

/** Notification for when new media is added to the site */
export type RelatedMediaAdditionNotification = {
  __typename?: "RelatedMediaAdditionNotification";
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The associated media of the airing schedule */
  media?: Maybe<Media>;
  /** The id of the new media */
  mediaId: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
};

export type Report = {
  __typename?: "Report";
  cleared?: Maybe<Scalars["Boolean"]["output"]>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  reported?: Maybe<User>;
  reporter?: Maybe<User>;
};

/** A Review that features in an anime or manga */
export type Review = {
  __typename?: "Review";
  /** The main review body text */
  body?: Maybe<Scalars["String"]["output"]>;
  /** The time of the thread creation */
  createdAt: Scalars["Int"]["output"];
  /** The id of the review */
  id: Scalars["Int"]["output"];
  /** The media the review is of */
  media?: Maybe<Media>;
  /** The id of the review's media */
  mediaId: Scalars["Int"]["output"];
  /** For which type of media the review is for */
  mediaType?: Maybe<MediaType>;
  /** If the review is not yet publicly published and is only viewable by creator */
  private?: Maybe<Scalars["Boolean"]["output"]>;
  /** The total user rating of the review */
  rating?: Maybe<Scalars["Int"]["output"]>;
  /** The amount of user ratings of the review */
  ratingAmount?: Maybe<Scalars["Int"]["output"]>;
  /** The review score of the media */
  score?: Maybe<Scalars["Int"]["output"]>;
  /** The url for the review page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** A short summary of the review */
  summary?: Maybe<Scalars["String"]["output"]>;
  /** The time of the thread last update */
  updatedAt: Scalars["Int"]["output"];
  /** The creator of the review */
  user?: Maybe<User>;
  /** The id of the review's creator */
  userId: Scalars["Int"]["output"];
  /** The rating of the review by currently authenticated user */
  userRating?: Maybe<ReviewRating>;
};

/** A Review that features in an anime or manga */
export type ReviewBodyArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ReviewConnection = {
  __typename?: "ReviewConnection";
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Review connection edge */
export type ReviewEdge = {
  __typename?: "ReviewEdge";
  node?: Maybe<Review>;
};

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

/** Feed of mod edit activity */
export type RevisionHistory = {
  __typename?: "RevisionHistory";
  /** The action taken on the objects */
  action?: Maybe<RevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  changes?: Maybe<Scalars["Json"]["output"]>;
  /** The character the mod feed entry references */
  character?: Maybe<Character>;
  /** When the mod feed entry was created */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The external link source the mod feed entry references */
  externalLink?: Maybe<MediaExternalLink>;
  /** The id of the media */
  id: Scalars["Int"]["output"];
  /** The media the mod feed entry references */
  media?: Maybe<Media>;
  /** The staff member the mod feed entry references */
  staff?: Maybe<Staff>;
  /** The studio the mod feed entry references */
  studio?: Maybe<Studio>;
  /** The user who made the edit to the object */
  user?: Maybe<User>;
};

/** Revision history actions */
export enum RevisionHistoryAction {
  Create = "CREATE",
  Edit = "EDIT",
}

/** A user's list score distribution. */
export type ScoreDistribution = {
  __typename?: "ScoreDistribution";
  /** The amount of list entries with this score */
  amount?: Maybe<Scalars["Int"]["output"]>;
  score?: Maybe<Scalars["Int"]["output"]>;
};

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

export type SiteStatistics = {
  __typename?: "SiteStatistics";
  anime?: Maybe<SiteTrendConnection>;
  characters?: Maybe<SiteTrendConnection>;
  manga?: Maybe<SiteTrendConnection>;
  reviews?: Maybe<SiteTrendConnection>;
  staff?: Maybe<SiteTrendConnection>;
  studios?: Maybe<SiteTrendConnection>;
  users?: Maybe<SiteTrendConnection>;
};

export type SiteStatisticsAnimeArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsCharactersArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsMangaArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsReviewsArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsStaffArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsStudiosArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

export type SiteStatisticsUsersArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SiteTrendSort>>>;
};

/** Daily site statistics */
export type SiteTrend = {
  __typename?: "SiteTrend";
  /** The change from yesterday */
  change: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  /** The day the data was recorded (timestamp) */
  date: Scalars["Int"]["output"];
};

export type SiteTrendConnection = {
  __typename?: "SiteTrendConnection";
  edges?: Maybe<Array<Maybe<SiteTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<SiteTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Site trend connection edge */
export type SiteTrendEdge = {
  __typename?: "SiteTrendEdge";
  node?: Maybe<SiteTrend>;
};

/** Site trend sort enums */
export enum SiteTrendSort {
  Change = "CHANGE",
  ChangeDesc = "CHANGE_DESC",
  Count = "COUNT",
  CountDesc = "COUNT_DESC",
  Date = "DATE",
  DateDesc = "DATE_DESC",
}

/** Voice actors or production staff */
export type Staff = {
  __typename?: "Staff";
  /** The person's age in years */
  age?: Maybe<Scalars["Int"]["output"]>;
  /** The persons blood type */
  bloodType?: Maybe<Scalars["String"]["output"]>;
  /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
  characterMedia?: Maybe<MediaConnection>;
  /** Characters voiced by the actor */
  characters?: Maybe<CharacterConnection>;
  dateOfBirth?: Maybe<FuzzyDate>;
  dateOfDeath?: Maybe<FuzzyDate>;
  /** A general description of the staff member */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The amount of user's who have favourited the staff member */
  favourites?: Maybe<Scalars["Int"]["output"]>;
  /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars["String"]["output"]>;
  /** The persons birthplace or hometown */
  homeTown?: Maybe<Scalars["String"]["output"]>;
  /** The id of the staff member */
  id: Scalars["Int"]["output"];
  /** The staff images */
  image?: Maybe<StaffImage>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars["Boolean"]["output"];
  /** If the staff member is blocked from being added to favourites */
  isFavouriteBlocked: Scalars["Boolean"]["output"];
  /**
   * The primary language the staff member dub's in
   * @deprecated Replaced with languageV2
   */
  language?: Maybe<StaffLanguage>;
  /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
  languageV2?: Maybe<Scalars["String"]["output"]>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars["String"]["output"]>;
  /** The names of the staff member */
  name?: Maybe<StaffName>;
  /** The person's primary occupations */
  primaryOccupations?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The url for the staff page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** Staff member that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Media where the staff member has a production role */
  staffMedia?: Maybe<MediaConnection>;
  /** Inner details of submission status */
  submissionNotes?: Maybe<Scalars["String"]["output"]>;
  /** Status of the submission */
  submissionStatus?: Maybe<Scalars["Int"]["output"]>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
  yearsActive?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
};

/** Voice actors or production staff */
export type StaffCharacterMediaArgs = {
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};

/** Voice actors or production staff */
export type StaffCharactersArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CharacterSort>>>;
};

/** Voice actors or production staff */
export type StaffDescriptionArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Voice actors or production staff */
export type StaffStaffMediaArgs = {
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
  type?: InputMaybe<MediaType>;
};

export type StaffConnection = {
  __typename?: "StaffConnection";
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Staff connection edge */
export type StaffEdge = {
  __typename?: "StaffEdge";
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  node?: Maybe<Staff>;
  /** The role of the staff member in the production of the media */
  role?: Maybe<Scalars["String"]["output"]>;
};

export type StaffImage = {
  __typename?: "StaffImage";
  /** The person's image of media at its largest size */
  large?: Maybe<Scalars["String"]["output"]>;
  /** The person's image of media at medium size */
  medium?: Maybe<Scalars["String"]["output"]>;
};

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
export type StaffName = {
  __typename?: "StaffName";
  /** Other names the staff member might be referred to as (pen names) */
  alternative?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** The person's given name */
  first?: Maybe<Scalars["String"]["output"]>;
  /** The person's first and last name */
  full?: Maybe<Scalars["String"]["output"]>;
  /** The person's surname */
  last?: Maybe<Scalars["String"]["output"]>;
  /** The person's middle name */
  middle?: Maybe<Scalars["String"]["output"]>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars["String"]["output"]>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars["String"]["output"]>;
};

/** The names of the staff member */
export type StaffNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** The person's given name */
  first?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's surname */
  last?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's middle name */
  middle?: InputMaybe<Scalars["String"]["input"]>;
  /** The person's full name in their native language */
  native?: InputMaybe<Scalars["String"]["input"]>;
};

/** Voice actor role for a character */
export type StaffRoleType = {
  __typename?: "StaffRoleType";
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars["String"]["output"]>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars["String"]["output"]>;
  /** The voice actors of the character */
  voiceActor?: Maybe<Staff>;
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

/** User's staff statistics */
export type StaffStats = {
  __typename?: "StaffStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  staff?: Maybe<Staff>;
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched?: Maybe<Scalars["Int"]["output"]>;
};

/** A submission for a staff that features in an anime or manga */
export type StaffSubmission = {
  __typename?: "StaffSubmission";
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<User>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the submission */
  id: Scalars["Int"]["output"];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars["Boolean"]["output"]>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars["String"]["output"]>;
  source?: Maybe<Scalars["String"]["output"]>;
  /** Staff that the submission is referencing */
  staff?: Maybe<Staff>;
  /** Status of the submission */
  status?: Maybe<SubmissionStatus>;
  /** The staff submission changes */
  submission?: Maybe<Staff>;
  /** Submitter for the submission */
  submitter?: Maybe<User>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type StatusDistribution = {
  __typename?: "StatusDistribution";
  /** The amount of entries with this status */
  amount?: Maybe<Scalars["Int"]["output"]>;
  /** The day the activity took place (Unix timestamp) */
  status?: Maybe<MediaListStatus>;
};

/** Animation or production company */
export type Studio = {
  __typename?: "Studio";
  /** The amount of user's who have favourited the studio */
  favourites?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the studio */
  id: Scalars["Int"]["output"];
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars["Boolean"]["output"];
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars["Boolean"]["output"];
  /** The media the studio has worked on */
  media?: Maybe<MediaConnection>;
  /** The name of the studio */
  name: Scalars["String"]["output"];
  /** The url for the studio page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
};

/** Animation or production company */
export type StudioMediaArgs = {
  isMain?: InputMaybe<Scalars["Boolean"]["input"]>;
  onList?: InputMaybe<Scalars["Boolean"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<MediaSort>>>;
};

export type StudioConnection = {
  __typename?: "StudioConnection";
  edges?: Maybe<Array<Maybe<StudioEdge>>>;
  nodes?: Maybe<Array<Maybe<Studio>>>;
  /** The pagination information */
  pageInfo?: Maybe<PageInfo>;
};

/** Studio connection edge */
export type StudioEdge = {
  __typename?: "StudioEdge";
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the connection */
  id?: Maybe<Scalars["Int"]["output"]>;
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars["Boolean"]["output"];
  node?: Maybe<Studio>;
};

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

/** User's studio statistics */
export type StudioStats = {
  __typename?: "StudioStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  studio?: Maybe<Studio>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched?: Maybe<Scalars["Int"]["output"]>;
};

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

/** User's tag statistics */
export type TagStats = {
  __typename?: "TagStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  tag?: Maybe<MediaTag>;
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched?: Maybe<Scalars["Int"]["output"]>;
};

/** User text activity */
export type TextActivity = {
  __typename?: "TextActivity";
  /** The time the activity was created at */
  createdAt: Scalars["Int"]["output"];
  /** The id of the activity */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the activity has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<ActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars["Int"]["output"];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The status text (Markdown) */
  text?: Maybe<Scalars["String"]["output"]>;
  /** The type of activity */
  type?: Maybe<ActivityType>;
  /** The user who created the activity */
  user?: Maybe<User>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars["Int"]["output"]>;
};

/** User text activity */
export type TextActivityTextArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Forum Thread */
export type Thread = {
  __typename?: "Thread";
  /** The text body of the thread (Markdown) */
  body?: Maybe<Scalars["String"]["output"]>;
  /** The categories of the thread */
  categories?: Maybe<Array<Maybe<ThreadCategory>>>;
  /** The time of the thread creation */
  createdAt: Scalars["Int"]["output"];
  /** The id of the thread */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the thread */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the thread is locked and can receive comments */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the thread has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the thread */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The media categories of the thread */
  mediaCategories?: Maybe<Array<Maybe<Media>>>;
  /** The time of the last reply */
  repliedAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the most recent comment on the thread */
  replyCommentId?: Maybe<Scalars["Int"]["output"]>;
  /** The number of comments on the thread */
  replyCount?: Maybe<Scalars["Int"]["output"]>;
  /** The user to last reply to the thread */
  replyUser?: Maybe<User>;
  /** The id of the user who most recently commented on the thread */
  replyUserId?: Maybe<Scalars["Int"]["output"]>;
  /** The url for the thread page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The title of the thread */
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time of the thread last update */
  updatedAt: Scalars["Int"]["output"];
  /** The owner of the thread */
  user?: Maybe<User>;
  /** The id of the thread owner user */
  userId: Scalars["Int"]["output"];
  /** The number of times users have viewed the thread */
  viewCount?: Maybe<Scalars["Int"]["output"]>;
};

/** Forum Thread */
export type ThreadBodyArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A forum thread category */
export type ThreadCategory = {
  __typename?: "ThreadCategory";
  /** The id of the category */
  id: Scalars["Int"]["output"];
  /** The name of the category */
  name: Scalars["String"]["output"];
};

/** Forum Thread Comment */
export type ThreadComment = {
  __typename?: "ThreadComment";
  /** The comment's child reply comments */
  childComments?: Maybe<Scalars["Json"]["output"]>;
  /** The text content of the comment (Markdown) */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** The time of the comments creation */
  createdAt: Scalars["Int"]["output"];
  /** The id of the comment */
  id: Scalars["Int"]["output"];
  /** If the currently authenticated user liked the comment */
  isLiked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the comment tree is locked and may not receive replies or edits */
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** The amount of likes the comment has */
  likeCount: Scalars["Int"]["output"];
  /** The users who liked the comment */
  likes?: Maybe<Array<Maybe<User>>>;
  /** The url for the comment page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The thread the comment belongs to */
  thread?: Maybe<Thread>;
  /** The id of thread the comment belongs to */
  threadId?: Maybe<Scalars["Int"]["output"]>;
  /** The time of the comments last update */
  updatedAt: Scalars["Int"]["output"];
  /** The user who created the comment */
  user?: Maybe<User>;
  /** The user id of the comment's owner */
  userId?: Maybe<Scalars["Int"]["output"]>;
};

/** Forum Thread Comment */
export type ThreadCommentCommentArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Notification for when a thread comment is liked */
export type ThreadCommentLikeNotification = {
  __typename?: "ThreadCommentLikeNotification";
  /** The thread comment that was liked */
  comment?: Maybe<ThreadComment>;
  /** The id of the activity which was liked */
  commentId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars["Int"]["output"];
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type ThreadCommentMentionNotification = {
  __typename?: "ThreadCommentMentionNotification";
  /** The thread comment that included the @ mention */
  comment?: Maybe<ThreadComment>;
  /** The id of the comment where mentioned */
  commentId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<User>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars["Int"]["output"];
};

/** Notification for when a user replies to your forum thread comment */
export type ThreadCommentReplyNotification = {
  __typename?: "ThreadCommentReplyNotification";
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The id of the reply comment */
  commentId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<User>;
  /** The id of the user who create the comment reply */
  userId: Scalars["Int"]["output"];
};

/** Thread comments sort enums */
export enum ThreadCommentSort {
  Id = "ID",
  IdDesc = "ID_DESC",
}

/** Notification for when a user replies to a subscribed forum thread */
export type ThreadCommentSubscribedNotification = {
  __typename?: "ThreadCommentSubscribedNotification";
  /** The reply thread comment */
  comment?: Maybe<ThreadComment>;
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars["Int"]["output"];
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who replied to the subscribed thread */
  user?: Maybe<User>;
  /** The id of the user who commented on the thread */
  userId: Scalars["Int"]["output"];
};

/** Notification for when a thread is liked */
export type ThreadLikeNotification = {
  __typename?: "ThreadLikeNotification";
  /** The liked thread comment */
  comment?: Maybe<ThreadComment>;
  /** The notification context text */
  context?: Maybe<Scalars["String"]["output"]>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** The id of the Notification */
  id: Scalars["Int"]["output"];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<Thread>;
  /** The id of the thread which was liked */
  threadId: Scalars["Int"]["output"];
  /** The type of notification */
  type?: Maybe<NotificationType>;
  /** The user who liked the activity */
  user?: Maybe<User>;
  /** The id of the user who liked to the activity */
  userId: Scalars["Int"]["output"];
};

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

/** A user */
export type User = {
  __typename?: "User";
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars["String"]["output"]>;
  /** The user's avatar images */
  avatar?: Maybe<UserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars["String"]["output"]>;
  bans?: Maybe<Scalars["Json"]["output"]>;
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars["String"]["output"]>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars["Int"]["output"]>;
  /** The users favourites */
  favourites?: Maybe<Favourites>;
  /** The id of the user */
  id: Scalars["Int"]["output"];
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars["Boolean"]["output"]>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars["Boolean"]["output"]>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars["Boolean"]["output"]>;
  /** The user's media list options */
  mediaListOptions?: Maybe<MediaListOptions>;
  /** The user's moderator roles if they are a site moderator */
  moderatorRoles?: Maybe<Array<Maybe<ModRole>>>;
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus?: Maybe<Scalars["String"]["output"]>;
  /** The name of the user */
  name: Scalars["String"]["output"];
  /** The user's general options */
  options?: Maybe<UserOptions>;
  /** The user's previously used names. */
  previousNames?: Maybe<Array<Maybe<UserPreviousName>>>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars["String"]["output"]>;
  /** The users anime & manga list statistics */
  statistics?: Maybe<UserStatisticTypes>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats?: Maybe<UserStats>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars["Int"]["output"]>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

/** A user */
export type UserAboutArgs = {
  asHtml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** A user */
export type UserFavouritesArgs = {
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user's activity history stats. */
export type UserActivityHistory = {
  __typename?: "UserActivityHistory";
  /** The amount of activity on the day */
  amount?: Maybe<Scalars["Int"]["output"]>;
  /** The day the activity took place (Unix timestamp) */
  date?: Maybe<Scalars["Int"]["output"]>;
  /** The level of activity represented on a 1-10 scale */
  level?: Maybe<Scalars["Int"]["output"]>;
};

/** A user's avatars */
export type UserAvatar = {
  __typename?: "UserAvatar";
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars["String"]["output"]>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars["String"]["output"]>;
};

export type UserCountryStatistic = {
  __typename?: "UserCountryStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  country?: Maybe<Scalars["CountryCode"]["output"]>;
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
};

export type UserFormatStatistic = {
  __typename?: "UserFormatStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  format?: Maybe<MediaFormat>;
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
};

export type UserGenreStatistic = {
  __typename?: "UserGenreStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  genre?: Maybe<Scalars["String"]["output"]>;
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
};

export type UserLengthStatistic = {
  __typename?: "UserLengthStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  length?: Maybe<Scalars["String"]["output"]>;
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
};

/** User data for moderators */
export type UserModData = {
  __typename?: "UserModData";
  alts?: Maybe<Array<Maybe<User>>>;
  bans?: Maybe<Scalars["Json"]["output"]>;
  counts?: Maybe<Scalars["Json"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  ip?: Maybe<Scalars["Json"]["output"]>;
  privacy?: Maybe<Scalars["Int"]["output"]>;
};

/** A user's general options */
export type UserOptions = {
  __typename?: "UserOptions";
  /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
  activityMergeTime?: Maybe<Scalars["Int"]["output"]>;
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications?: Maybe<Scalars["Boolean"]["output"]>;
  /** The list activity types the user has disabled from being created from list updates */
  disabledListActivity?: Maybe<Array<Maybe<ListActivityOption>>>;
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent?: Maybe<Scalars["Boolean"]["output"]>;
  /** Notification options */
  notificationOptions?: Maybe<Array<Maybe<NotificationOption>>>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor?: Maybe<Scalars["String"]["output"]>;
  /** Whether the user only allow messages from users they follow */
  restrictMessagesToFollowing?: Maybe<Scalars["Boolean"]["output"]>;
  /** The language the user wants to see staff and character names in */
  staffNameLanguage?: Maybe<UserStaffNameLanguage>;
  /** The user's timezone offset (Auth user only) */
  timezone?: Maybe<Scalars["String"]["output"]>;
  /** The language the user wants to see media titles in */
  titleLanguage?: Maybe<UserTitleLanguage>;
};

/** A user's previous name */
export type UserPreviousName = {
  __typename?: "UserPreviousName";
  /** When the user first changed from this name. */
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** A previous name of the user. */
  name?: Maybe<Scalars["String"]["output"]>;
  /** When the user most recently changed from this name. */
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type UserReleaseYearStatistic = {
  __typename?: "UserReleaseYearStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  releaseYear?: Maybe<Scalars["Int"]["output"]>;
};

export type UserScoreStatistic = {
  __typename?: "UserScoreStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  score?: Maybe<Scalars["Int"]["output"]>;
};

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

export type UserStaffStatistic = {
  __typename?: "UserStaffStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  staff?: Maybe<Staff>;
};

export type UserStartYearStatistic = {
  __typename?: "UserStartYearStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  startYear?: Maybe<Scalars["Int"]["output"]>;
};

export type UserStatisticTypes = {
  __typename?: "UserStatisticTypes";
  anime?: Maybe<UserStatistics>;
  manga?: Maybe<UserStatistics>;
};

export type UserStatistics = {
  __typename?: "UserStatistics";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  countries?: Maybe<Array<Maybe<UserCountryStatistic>>>;
  episodesWatched: Scalars["Int"]["output"];
  formats?: Maybe<Array<Maybe<UserFormatStatistic>>>;
  genres?: Maybe<Array<Maybe<UserGenreStatistic>>>;
  lengths?: Maybe<Array<Maybe<UserLengthStatistic>>>;
  meanScore: Scalars["Float"]["output"];
  minutesWatched: Scalars["Int"]["output"];
  releaseYears?: Maybe<Array<Maybe<UserReleaseYearStatistic>>>;
  scores?: Maybe<Array<Maybe<UserScoreStatistic>>>;
  staff?: Maybe<Array<Maybe<UserStaffStatistic>>>;
  standardDeviation: Scalars["Float"]["output"];
  startYears?: Maybe<Array<Maybe<UserStartYearStatistic>>>;
  statuses?: Maybe<Array<Maybe<UserStatusStatistic>>>;
  studios?: Maybe<Array<Maybe<UserStudioStatistic>>>;
  tags?: Maybe<Array<Maybe<UserTagStatistic>>>;
  voiceActors?: Maybe<Array<Maybe<UserVoiceActorStatistic>>>;
  volumesRead: Scalars["Int"]["output"];
};

export type UserStatisticsCountriesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsFormatsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsGenresArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsLengthsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsReleaseYearsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsScoresArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsStaffArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsStartYearsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsStatusesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsStudiosArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsTagsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

export type UserStatisticsVoiceActorsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserStatisticsSort>>>;
};

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

/** A user's statistics */
export type UserStats = {
  __typename?: "UserStats";
  activityHistory?: Maybe<Array<Maybe<UserActivityHistory>>>;
  animeListScores?: Maybe<ListScoreStats>;
  animeScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  animeStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** The amount of manga chapters the user has read */
  chaptersRead?: Maybe<Scalars["Int"]["output"]>;
  favouredActors?: Maybe<Array<Maybe<StaffStats>>>;
  favouredFormats?: Maybe<Array<Maybe<FormatStats>>>;
  favouredGenres?: Maybe<Array<Maybe<GenreStats>>>;
  favouredGenresOverview?: Maybe<Array<Maybe<GenreStats>>>;
  favouredStaff?: Maybe<Array<Maybe<StaffStats>>>;
  favouredStudios?: Maybe<Array<Maybe<StudioStats>>>;
  favouredTags?: Maybe<Array<Maybe<TagStats>>>;
  favouredYears?: Maybe<Array<Maybe<YearStats>>>;
  mangaListScores?: Maybe<ListScoreStats>;
  mangaScoreDistribution?: Maybe<Array<Maybe<ScoreDistribution>>>;
  mangaStatusDistribution?: Maybe<Array<Maybe<StatusDistribution>>>;
  /** The amount of anime the user has watched in minutes */
  watchedTime?: Maybe<Scalars["Int"]["output"]>;
};

export type UserStatusStatistic = {
  __typename?: "UserStatusStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  status?: Maybe<MediaListStatus>;
};

export type UserStudioStatistic = {
  __typename?: "UserStudioStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  studio?: Maybe<Studio>;
};

export type UserTagStatistic = {
  __typename?: "UserTagStatistic";
  chaptersRead: Scalars["Int"]["output"];
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  tag?: Maybe<MediaTag>;
};

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

export type UserVoiceActorStatistic = {
  __typename?: "UserVoiceActorStatistic";
  chaptersRead: Scalars["Int"]["output"];
  characterIds: Array<Maybe<Scalars["Int"]["output"]>>;
  count: Scalars["Int"]["output"];
  meanScore: Scalars["Float"]["output"];
  mediaIds: Array<Maybe<Scalars["Int"]["output"]>>;
  minutesWatched: Scalars["Int"]["output"];
  voiceActor?: Maybe<Staff>;
};

/** User's year statistics */
export type YearStats = {
  __typename?: "YearStats";
  amount?: Maybe<Scalars["Int"]["output"]>;
  meanScore?: Maybe<Scalars["Int"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
};

export type AnimeFragmentFragment = {
  __typename?: "Media";
  id: number;
  description?: string | null;
  episodes?: number | null;
  duration?: number | null;
  genres?: Array<string | null> | null;
  averageScore?: number | null;
  status?: MediaStatus | null;
  format?: MediaFormat | null;
  season?: MediaSeason | null;
  seasonYear?: number | null;
  title?: {
    __typename?: "MediaTitle";
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    large?: string | null;
    medium?: string | null;
  } | null;
  startDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  endDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  studios?: {
    __typename?: "StudioConnection";
    edges?: Array<{
      __typename?: "StudioEdge";
      isMain: boolean;
      node?: { __typename?: "Studio"; id: number; name: string } | null;
    } | null> | null;
  } | null;
  relations?: {
    __typename?: "MediaConnection";
    edges?: Array<{
      __typename?: "MediaEdge";
      relationType?: MediaRelation | null;
      node?: {
        __typename?: "Media";
        id: number;
        title?: { __typename?: "MediaTitle"; romaji?: string | null } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CharacterNameFragmentFragment = {
  __typename?: "CharacterName";
  alternative?: Array<string | null> | null;
  alternativeSpoiler?: Array<string | null> | null;
  first?: string | null;
  full?: string | null;
  last?: string | null;
  middle?: string | null;
  native?: string | null;
  userPreferred?: string | null;
};

export type CharacterFragmentFragment = {
  __typename?: "Character";
  id: number;
  description?: string | null;
  gender?: string | null;
  age?: string | null;
  bloodType?: string | null;
  siteUrl?: string | null;
  name?: {
    __typename?: "CharacterName";
    alternative?: Array<string | null> | null;
    alternativeSpoiler?: Array<string | null> | null;
    first?: string | null;
    full?: string | null;
    last?: string | null;
    middle?: string | null;
    native?: string | null;
    userPreferred?: string | null;
  } | null;
  image?: {
    __typename?: "CharacterImage";
    large?: string | null;
    medium?: string | null;
  } | null;
  dateOfBirth?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
};

export type MangaFragmentFragment = {
  __typename?: "Media";
  id: number;
  description?: string | null;
  chapters?: number | null;
  volumes?: number | null;
  genres?: Array<string | null> | null;
  averageScore?: number | null;
  status?: MediaStatus | null;
  format?: MediaFormat | null;
  title?: {
    __typename?: "MediaTitle";
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    large?: string | null;
    medium?: string | null;
  } | null;
  startDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  endDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  relations?: {
    __typename?: "MediaConnection";
    edges?: Array<{
      __typename?: "MediaEdge";
      relationType?: MediaRelation | null;
      node?: {
        __typename?: "Media";
        id: number;
        title?: { __typename?: "MediaTitle"; romaji?: string | null } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type MediaFragmentFragment = {
  __typename?: "Media";
  id: number;
  description?: string | null;
  format?: MediaFormat | null;
  status?: MediaStatus | null;
  episodes?: number | null;
  chapters?: number | null;
  volumes?: number | null;
  genres?: Array<string | null> | null;
  averageScore?: number | null;
  popularity?: number | null;
  siteUrl?: string | null;
  title?: {
    __typename?: "MediaTitle";
    romaji?: string | null;
    english?: string | null;
    native?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    large?: string | null;
    medium?: string | null;
  } | null;
  startDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  endDate?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
};

export type MediaListFragmentFragment = {
  __typename?: "MediaList";
  id: number;
  status?: MediaListStatus | null;
  score?: number | null;
  progress?: number | null;
  repeat?: number | null;
  priority?: number | null;
  private?: boolean | null;
  notes?: string | null;
  hiddenFromStatusLists?: boolean | null;
  customLists?: any | null;
  advancedScores?: any | null;
  updatedAt?: number | null;
  createdAt?: number | null;
  startedAt?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  completedAt?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
  media?: {
    __typename?: "Media";
    id: number;
    siteUrl?: string | null;
    title?: {
      __typename?: "MediaTitle";
      romaji?: string | null;
      english?: string | null;
      native?: string | null;
    } | null;
    coverImage?: {
      __typename?: "MediaCoverImage";
      large?: string | null;
      medium?: string | null;
    } | null;
  } | null;
};

export type StaffFragmentFragment = {
  __typename?: "Staff";
  id: number;
  description?: string | null;
  primaryOccupations?: Array<string | null> | null;
  gender?: string | null;
  age?: number | null;
  siteUrl?: string | null;
  name?: {
    __typename?: "StaffName";
    full?: string | null;
    native?: string | null;
  } | null;
  image?: {
    __typename?: "StaffImage";
    large?: string | null;
    medium?: string | null;
  } | null;
  dateOfBirth?: {
    __typename?: "FuzzyDate";
    year?: number | null;
    month?: number | null;
    day?: number | null;
  } | null;
};

export type StudioFragmentFragment = {
  __typename?: "Studio";
  id: number;
  name: string;
  isAnimationStudio: boolean;
  siteUrl?: string | null;
};

export type UserFragmentFragment = {
  __typename?: "User";
  id: number;
  name: string;
  about?: string | null;
  bannerImage?: string | null;
  siteUrl?: string | null;
  avatar?: {
    __typename?: "UserAvatar";
    large?: string | null;
    medium?: string | null;
  } | null;
  options?: {
    __typename?: "UserOptions";
    titleLanguage?: UserTitleLanguage | null;
  } | null;
  statistics?: {
    __typename?: "UserStatisticTypes";
    anime?: {
      __typename?: "UserStatistics";
      count: number;
      meanScore: number;
      minutesWatched: number;
    } | null;
    manga?: {
      __typename?: "UserStatistics";
      count: number;
      meanScore: number;
      chaptersRead: number;
    } | null;
  } | null;
};

export type GetAnimeByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeByIdQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    id: number;
    description?: string | null;
    format?: MediaFormat | null;
    status?: MediaStatus | null;
    episodes?: number | null;
    chapters?: number | null;
    volumes?: number | null;
    genres?: Array<string | null> | null;
    averageScore?: number | null;
    popularity?: number | null;
    siteUrl?: string | null;
    characters?: {
      __typename?: "CharacterConnection";
      edges?: Array<{
        __typename?: "CharacterEdge";
        role?: CharacterRole | null;
        node?: {
          __typename?: "Character";
          id: number;
          description?: string | null;
          gender?: string | null;
          age?: string | null;
          bloodType?: string | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "CharacterName";
            alternative?: Array<string | null> | null;
            alternativeSpoiler?: Array<string | null> | null;
            first?: string | null;
            full?: string | null;
            last?: string | null;
            middle?: string | null;
            native?: string | null;
            userPreferred?: string | null;
          } | null;
          image?: {
            __typename?: "CharacterImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    staff?: {
      __typename?: "StaffConnection";
      edges?: Array<{
        __typename?: "StaffEdge";
        role?: string | null;
        node?: {
          __typename?: "Staff";
          id: number;
          description?: string | null;
          primaryOccupations?: Array<string | null> | null;
          gender?: string | null;
          age?: number | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "StaffName";
            full?: string | null;
            native?: string | null;
          } | null;
          image?: {
            __typename?: "StaffImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    studios?: {
      __typename?: "StudioConnection";
      edges?: Array<{
        __typename?: "StudioEdge";
        node?: {
          __typename?: "Studio";
          id: number;
          name: string;
          isAnimationStudio: boolean;
          siteUrl?: string | null;
        } | null;
      } | null> | null;
    } | null;
    title?: {
      __typename?: "MediaTitle";
      romaji?: string | null;
      english?: string | null;
      native?: string | null;
    } | null;
    coverImage?: {
      __typename?: "MediaCoverImage";
      large?: string | null;
      medium?: string | null;
    } | null;
    startDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
    endDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
  } | null;
};

export type GetAnimeByTitleQueryVariables = Exact<{
  title?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAnimeByTitleQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetAnimeCharactersQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeCharactersQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    characters?: {
      __typename?: "CharacterConnection";
      edges?: Array<{
        __typename?: "CharacterEdge";
        role?: CharacterRole | null;
        node?: {
          __typename?: "Character";
          id: number;
          description?: string | null;
          gender?: string | null;
          age?: string | null;
          bloodType?: string | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "CharacterName";
            alternative?: Array<string | null> | null;
            alternativeSpoiler?: Array<string | null> | null;
            first?: string | null;
            full?: string | null;
            last?: string | null;
            middle?: string | null;
            native?: string | null;
            userPreferred?: string | null;
          } | null;
          image?: {
            __typename?: "CharacterImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
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
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetAnimePopularQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimePopularQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetAnimeRecommendationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeRecommendationsQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    recommendations?: {
      __typename?: "RecommendationConnection";
      edges?: Array<{
        __typename?: "RecommendationEdge";
        node?: {
          __typename?: "Recommendation";
          media?: {
            __typename?: "Media";
            id: number;
            description?: string | null;
            format?: MediaFormat | null;
            status?: MediaStatus | null;
            episodes?: number | null;
            chapters?: number | null;
            volumes?: number | null;
            genres?: Array<string | null> | null;
            averageScore?: number | null;
            popularity?: number | null;
            siteUrl?: string | null;
            title?: {
              __typename?: "MediaTitle";
              romaji?: string | null;
              english?: string | null;
              native?: string | null;
            } | null;
            coverImage?: {
              __typename?: "MediaCoverImage";
              large?: string | null;
              medium?: string | null;
            } | null;
            startDate?: {
              __typename?: "FuzzyDate";
              year?: number | null;
              month?: number | null;
              day?: number | null;
            } | null;
            endDate?: {
              __typename?: "FuzzyDate";
              year?: number | null;
              month?: number | null;
              day?: number | null;
            } | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetAnimeRelationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeRelationsQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    relations?: {
      __typename?: "MediaConnection";
      edges?: Array<{
        __typename?: "MediaEdge";
        relationType?: MediaRelation | null;
        node?: {
          __typename?: "Media";
          id: number;
          description?: string | null;
          format?: MediaFormat | null;
          status?: MediaStatus | null;
          episodes?: number | null;
          chapters?: number | null;
          volumes?: number | null;
          genres?: Array<string | null> | null;
          averageScore?: number | null;
          popularity?: number | null;
          siteUrl?: string | null;
          title?: {
            __typename?: "MediaTitle";
            romaji?: string | null;
            english?: string | null;
            native?: string | null;
          } | null;
          coverImage?: {
            __typename?: "MediaCoverImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          startDate?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
          endDate?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetAnimeStaffQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetAnimeStaffQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    staff?: {
      __typename?: "StaffConnection";
      edges?: Array<{
        __typename?: "StaffEdge";
        role?: string | null;
        node?: {
          __typename?: "Staff";
          id: number;
          description?: string | null;
          primaryOccupations?: Array<string | null> | null;
          gender?: string | null;
          age?: number | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "StaffName";
            full?: string | null;
            native?: string | null;
          } | null;
          image?: {
            __typename?: "StaffImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
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
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type SearchAnimeQueryVariables = Exact<{
  query?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type SearchAnimeQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CharactersBirthdayTodayQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type CharactersBirthdayTodayQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    characters?: Array<{
      __typename?: "Character";
      id: number;
      description?: string | null;
      gender?: string | null;
      age?: string | null;
      bloodType?: string | null;
      siteUrl?: string | null;
      name?: {
        __typename?: "CharacterName";
        alternative?: Array<string | null> | null;
        alternativeSpoiler?: Array<string | null> | null;
        first?: string | null;
        full?: string | null;
        last?: string | null;
        middle?: string | null;
        native?: string | null;
        userPreferred?: string | null;
      } | null;
      image?: {
        __typename?: "CharacterImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      dateOfBirth?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetCharacterByIdQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetCharacterByIdQuery = {
  __typename?: "Query";
  Character?: {
    __typename?: "Character";
    isFavourite: boolean;
    favourites?: number | null;
    id: number;
    description?: string | null;
    gender?: string | null;
    age?: string | null;
    bloodType?: string | null;
    siteUrl?: string | null;
    media?: {
      __typename?: "MediaConnection";
      nodes?: Array<{
        __typename?: "Media";
        id: number;
        type?: MediaType | null;
        title?: {
          __typename?: "MediaTitle";
          romaji?: string | null;
          english?: string | null;
          native?: string | null;
          userPreferred?: string | null;
        } | null;
      } | null> | null;
    } | null;
    name?: {
      __typename?: "CharacterName";
      alternative?: Array<string | null> | null;
      alternativeSpoiler?: Array<string | null> | null;
      first?: string | null;
      full?: string | null;
      last?: string | null;
      middle?: string | null;
      native?: string | null;
      userPreferred?: string | null;
    } | null;
    image?: {
      __typename?: "CharacterImage";
      large?: string | null;
      medium?: string | null;
    } | null;
    dateOfBirth?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
  } | null;
};

export type ToggleFavoriteCharacterMutationVariables = Exact<{
  charID?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ToggleFavoriteCharacterMutation = {
  __typename?: "Mutation";
  ToggleFavourite?: {
    __typename?: "Favourites";
    characters?: {
      __typename?: "CharacterConnection";
      nodes?: Array<{ __typename?: "Character"; id: number } | null> | null;
    } | null;
  } | null;
};

export type GetMangaByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaByIdQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    id: number;
    description?: string | null;
    format?: MediaFormat | null;
    status?: MediaStatus | null;
    episodes?: number | null;
    chapters?: number | null;
    volumes?: number | null;
    genres?: Array<string | null> | null;
    averageScore?: number | null;
    popularity?: number | null;
    siteUrl?: string | null;
    title?: {
      __typename?: "MediaTitle";
      romaji?: string | null;
      english?: string | null;
      native?: string | null;
    } | null;
    coverImage?: {
      __typename?: "MediaCoverImage";
      large?: string | null;
      medium?: string | null;
    } | null;
    startDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
    endDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
  } | null;
};

export type GetMangaByTitleQueryVariables = Exact<{
  title: Scalars["String"]["input"];
}>;

export type GetMangaByTitleQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetMangaCharactersQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaCharactersQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    characters?: {
      __typename?: "CharacterConnection";
      edges?: Array<{
        __typename?: "CharacterEdge";
        role?: CharacterRole | null;
        node?: {
          __typename?: "Character";
          id: number;
          description?: string | null;
          gender?: string | null;
          age?: string | null;
          bloodType?: string | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "CharacterName";
            alternative?: Array<string | null> | null;
            alternativeSpoiler?: Array<string | null> | null;
            first?: string | null;
            full?: string | null;
            last?: string | null;
            middle?: string | null;
            native?: string | null;
            userPreferred?: string | null;
          } | null;
          image?: {
            __typename?: "CharacterImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetMangaListByGenreQueryVariables = Exact<{
  genre?: InputMaybe<Scalars["String"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaListByGenreQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetMangaPopularQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaPopularQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetMangaRecommendationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaRecommendationsQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    recommendations?: {
      __typename?: "RecommendationConnection";
      edges?: Array<{
        __typename?: "RecommendationEdge";
        node?: {
          __typename?: "Recommendation";
          media?: {
            __typename?: "Media";
            id: number;
            description?: string | null;
            format?: MediaFormat | null;
            status?: MediaStatus | null;
            episodes?: number | null;
            chapters?: number | null;
            volumes?: number | null;
            genres?: Array<string | null> | null;
            averageScore?: number | null;
            popularity?: number | null;
            siteUrl?: string | null;
            title?: {
              __typename?: "MediaTitle";
              romaji?: string | null;
              english?: string | null;
              native?: string | null;
            } | null;
            coverImage?: {
              __typename?: "MediaCoverImage";
              large?: string | null;
              medium?: string | null;
            } | null;
            startDate?: {
              __typename?: "FuzzyDate";
              year?: number | null;
              month?: number | null;
              day?: number | null;
            } | null;
            endDate?: {
              __typename?: "FuzzyDate";
              year?: number | null;
              month?: number | null;
              day?: number | null;
            } | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetMangaRelationsQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaRelationsQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    relations?: {
      __typename?: "MediaConnection";
      edges?: Array<{
        __typename?: "MediaEdge";
        relationType?: MediaRelation | null;
        node?: {
          __typename?: "Media";
          id: number;
          description?: string | null;
          format?: MediaFormat | null;
          status?: MediaStatus | null;
          episodes?: number | null;
          chapters?: number | null;
          volumes?: number | null;
          genres?: Array<string | null> | null;
          averageScore?: number | null;
          popularity?: number | null;
          siteUrl?: string | null;
          title?: {
            __typename?: "MediaTitle";
            romaji?: string | null;
            english?: string | null;
            native?: string | null;
          } | null;
          coverImage?: {
            __typename?: "MediaCoverImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          startDate?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
          endDate?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetMangaStaffQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMangaStaffQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    staff?: {
      __typename?: "StaffConnection";
      edges?: Array<{
        __typename?: "StaffEdge";
        role?: string | null;
        node?: {
          __typename?: "Staff";
          id: number;
          description?: string | null;
          primaryOccupations?: Array<string | null> | null;
          gender?: string | null;
          age?: number | null;
          siteUrl?: string | null;
          name?: {
            __typename?: "StaffName";
            full?: string | null;
            native?: string | null;
          } | null;
          image?: {
            __typename?: "StaffImage";
            large?: string | null;
            medium?: string | null;
          } | null;
          dateOfBirth?: {
            __typename?: "FuzzyDate";
            year?: number | null;
            month?: number | null;
            day?: number | null;
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
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    media?: Array<{
      __typename?: "Media";
      id: number;
      description?: string | null;
      format?: MediaFormat | null;
      status?: MediaStatus | null;
      episodes?: number | null;
      chapters?: number | null;
      volumes?: number | null;
      genres?: Array<string | null> | null;
      averageScore?: number | null;
      popularity?: number | null;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
      startDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
      endDate?: {
        __typename?: "FuzzyDate";
        year?: number | null;
        month?: number | null;
        day?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetMediaByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMediaByIdQuery = {
  __typename?: "Query";
  Media?: {
    __typename?: "Media";
    id: number;
    description?: string | null;
    format?: MediaFormat | null;
    status?: MediaStatus | null;
    episodes?: number | null;
    chapters?: number | null;
    volumes?: number | null;
    genres?: Array<string | null> | null;
    averageScore?: number | null;
    popularity?: number | null;
    siteUrl?: string | null;
    title?: {
      __typename?: "MediaTitle";
      romaji?: string | null;
      english?: string | null;
      native?: string | null;
    } | null;
    coverImage?: {
      __typename?: "MediaCoverImage";
      large?: string | null;
      medium?: string | null;
    } | null;
    startDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
    endDate?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
  } | null;
};

export type GetMediaListQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMediaListQuery = {
  __typename?: "Query";
  MediaList?: {
    __typename?: "MediaList";
    id: number;
    status?: MediaListStatus | null;
    score?: number | null;
    progress?: number | null;
    repeat?: number | null;
    priority?: number | null;
    private?: boolean | null;
    notes?: string | null;
    hiddenFromStatusLists?: boolean | null;
    customLists?: any | null;
    advancedScores?: any | null;
    updatedAt?: number | null;
    createdAt?: number | null;
    startedAt?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
    completedAt?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
    media?: {
      __typename?: "Media";
      id: number;
      siteUrl?: string | null;
      title?: {
        __typename?: "MediaTitle";
        romaji?: string | null;
        english?: string | null;
        native?: string | null;
      } | null;
      coverImage?: {
        __typename?: "MediaCoverImage";
        large?: string | null;
        medium?: string | null;
      } | null;
    } | null;
  } | null;
};

export type GetMediaListByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetMediaListByUserQuery = {
  __typename?: "Query";
  MediaListCollection?: {
    __typename?: "MediaListCollection";
    lists?: Array<{
      __typename?: "MediaListGroup";
      entries?: Array<{
        __typename?: "MediaList";
        id: number;
        status?: MediaListStatus | null;
        score?: number | null;
        progress?: number | null;
        repeat?: number | null;
        priority?: number | null;
        private?: boolean | null;
        notes?: string | null;
        hiddenFromStatusLists?: boolean | null;
        customLists?: any | null;
        advancedScores?: any | null;
        updatedAt?: number | null;
        createdAt?: number | null;
        startedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        completedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        media?: {
          __typename?: "Media";
          id: number;
          siteUrl?: string | null;
          title?: {
            __typename?: "MediaTitle";
            romaji?: string | null;
            english?: string | null;
            native?: string | null;
          } | null;
          coverImage?: {
            __typename?: "MediaCoverImage";
            large?: string | null;
            medium?: string | null;
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
  __typename?: "Query";
  Staff?: {
    __typename?: "Staff";
    isFavourite: boolean;
    favourites?: number | null;
    id: number;
    description?: string | null;
    primaryOccupations?: Array<string | null> | null;
    gender?: string | null;
    age?: number | null;
    siteUrl?: string | null;
    staffMedia?: {
      __typename?: "MediaConnection";
      nodes?: Array<{
        __typename?: "Media";
        id: number;
        type?: MediaType | null;
        title?: {
          __typename?: "MediaTitle";
          romaji?: string | null;
          english?: string | null;
          native?: string | null;
          userPreferred?: string | null;
        } | null;
      } | null> | null;
    } | null;
    characters?: {
      __typename?: "CharacterConnection";
      nodes?: Array<{
        __typename?: "Character";
        id: number;
        description?: string | null;
        gender?: string | null;
        age?: string | null;
        bloodType?: string | null;
        siteUrl?: string | null;
        name?: {
          __typename?: "CharacterName";
          alternative?: Array<string | null> | null;
          alternativeSpoiler?: Array<string | null> | null;
          first?: string | null;
          full?: string | null;
          last?: string | null;
          middle?: string | null;
          native?: string | null;
          userPreferred?: string | null;
        } | null;
        image?: {
          __typename?: "CharacterImage";
          large?: string | null;
          medium?: string | null;
        } | null;
        dateOfBirth?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
      } | null> | null;
    } | null;
    characterMedia?: {
      __typename?: "MediaConnection";
      nodes?: Array<{
        __typename?: "Media";
        id: number;
        type?: MediaType | null;
        title?: {
          __typename?: "MediaTitle";
          romaji?: string | null;
          english?: string | null;
          native?: string | null;
          userPreferred?: string | null;
        } | null;
      } | null> | null;
    } | null;
    name?: {
      __typename?: "StaffName";
      full?: string | null;
      native?: string | null;
    } | null;
    image?: {
      __typename?: "StaffImage";
      large?: string | null;
      medium?: string | null;
    } | null;
    dateOfBirth?: {
      __typename?: "FuzzyDate";
      year?: number | null;
      month?: number | null;
      day?: number | null;
    } | null;
  } | null;
};

export type StaffBirthdayTodayQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type StaffBirthdayTodayQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    staff?: Array<{
      __typename?: "Staff";
      id: number;
      name?: {
        __typename?: "StaffName";
        alternative?: Array<string | null> | null;
        first?: string | null;
        full?: string | null;
        last?: string | null;
        middle?: string | null;
        native?: string | null;
        userPreferred?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ToggleFavoriteStaffMutationVariables = Exact<{
  staffID?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ToggleFavoriteStaffMutation = {
  __typename?: "Mutation";
  ToggleFavourite?: {
    __typename?: "Favourites";
    staff?: {
      __typename?: "StaffConnection";
      nodes?: Array<{ __typename?: "Staff"; id: number } | null> | null;
    } | null;
  } | null;
};

export type GetUserAnimeListQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
}>;

export type GetUserAnimeListQuery = {
  __typename?: "Query";
  MediaListCollection?: {
    __typename?: "MediaListCollection";
    lists?: Array<{
      __typename?: "MediaListGroup";
      entries?: Array<{
        __typename?: "MediaList";
        id: number;
        status?: MediaListStatus | null;
        score?: number | null;
        progress?: number | null;
        repeat?: number | null;
        priority?: number | null;
        private?: boolean | null;
        notes?: string | null;
        hiddenFromStatusLists?: boolean | null;
        customLists?: any | null;
        advancedScores?: any | null;
        updatedAt?: number | null;
        createdAt?: number | null;
        startedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        completedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        media?: {
          __typename?: "Media";
          id: number;
          siteUrl?: string | null;
          title?: {
            __typename?: "MediaTitle";
            romaji?: string | null;
            english?: string | null;
            native?: string | null;
          } | null;
          coverImage?: {
            __typename?: "MediaCoverImage";
            large?: string | null;
            medium?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetUserInfoQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserInfoQuery = {
  __typename?: "Query";
  User?: {
    __typename?: "User";
    id: number;
    name: string;
    about?: string | null;
    bannerImage?: string | null;
    siteUrl?: string | null;
    avatar?: {
      __typename?: "UserAvatar";
      large?: string | null;
      medium?: string | null;
    } | null;
    options?: {
      __typename?: "UserOptions";
      titleLanguage?: UserTitleLanguage | null;
    } | null;
    statistics?: {
      __typename?: "UserStatisticTypes";
      anime?: {
        __typename?: "UserStatistics";
        count: number;
        meanScore: number;
        minutesWatched: number;
      } | null;
      manga?: {
        __typename?: "UserStatistics";
        count: number;
        meanScore: number;
        chaptersRead: number;
      } | null;
    } | null;
  } | null;
};

export type GetUserListQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserListQuery = {
  __typename?: "Query";
  Page?: {
    __typename?: "Page";
    users?: Array<{
      __typename?: "User";
      id: number;
      name: string;
      about?: string | null;
      bannerImage?: string | null;
      siteUrl?: string | null;
      avatar?: {
        __typename?: "UserAvatar";
        large?: string | null;
        medium?: string | null;
      } | null;
      options?: {
        __typename?: "UserOptions";
        titleLanguage?: UserTitleLanguage | null;
      } | null;
      statistics?: {
        __typename?: "UserStatisticTypes";
        anime?: {
          __typename?: "UserStatistics";
          count: number;
          meanScore: number;
          minutesWatched: number;
        } | null;
        manga?: {
          __typename?: "UserStatistics";
          count: number;
          meanScore: number;
          chaptersRead: number;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetUserMangaListQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<MediaListStatus>;
}>;

export type GetUserMangaListQuery = {
  __typename?: "Query";
  MediaListCollection?: {
    __typename?: "MediaListCollection";
    lists?: Array<{
      __typename?: "MediaListGroup";
      entries?: Array<{
        __typename?: "MediaList";
        id: number;
        status?: MediaListStatus | null;
        score?: number | null;
        progress?: number | null;
        repeat?: number | null;
        priority?: number | null;
        private?: boolean | null;
        notes?: string | null;
        hiddenFromStatusLists?: boolean | null;
        customLists?: any | null;
        advancedScores?: any | null;
        updatedAt?: number | null;
        createdAt?: number | null;
        startedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        completedAt?: {
          __typename?: "FuzzyDate";
          year?: number | null;
          month?: number | null;
          day?: number | null;
        } | null;
        media?: {
          __typename?: "Media";
          id: number;
          siteUrl?: string | null;
          title?: {
            __typename?: "MediaTitle";
            romaji?: string | null;
            english?: string | null;
            native?: string | null;
          } | null;
          coverImage?: {
            __typename?: "MediaCoverImage";
            large?: string | null;
            medium?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetUserStatisticsQueryVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetUserStatisticsQuery = {
  __typename?: "Query";
  User?: {
    __typename?: "User";
    statistics?: {
      __typename?: "UserStatisticTypes";
      anime?: {
        __typename?: "UserStatistics";
        count: number;
        meanScore: number;
        minutesWatched: number;
      } | null;
      manga?: {
        __typename?: "UserStatistics";
        count: number;
        meanScore: number;
        chaptersRead: number;
      } | null;
    } | null;
  } | null;
};

export const AnimeFragmentFragmentDoc = gql`
  fragment AnimeFragment on Media {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
      medium
    }
    description
    episodes
    duration
    genres
    averageScore
    status
    format
    season
    seasonYear
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    studios {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
    relations {
      edges {
        relationType
        node {
          id
          title {
            romaji
          }
        }
      }
    }
  }
`;
export const CharacterNameFragmentFragmentDoc = gql`
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
export const CharacterFragmentFragmentDoc = gql`
  fragment CharacterFragment on Character {
    id
    name {
      ...CharacterNameFragment
    }
    image {
      large
      medium
    }
    description
    gender
    dateOfBirth {
      year
      month
      day
    }
    age
    bloodType
    siteUrl
  }
  ${CharacterNameFragmentFragmentDoc}
`;
export const MangaFragmentFragmentDoc = gql`
  fragment MangaFragment on Media {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
      medium
    }
    description
    chapters
    volumes
    genres
    averageScore
    status
    format
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    relations {
      edges {
        relationType
        node {
          id
          title {
            romaji
          }
        }
      }
    }
  }
`;
export const MediaFragmentFragmentDoc = gql`
  fragment MediaFragment on Media {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
      medium
    }
    description
    format
    status
    episodes
    chapters
    volumes
    genres
    averageScore
    popularity
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    siteUrl
  }
`;
export const MediaListFragmentFragmentDoc = gql`
  fragment MediaListFragment on MediaList {
    id
    status
    score
    progress
    repeat
    priority
    private
    notes
    hiddenFromStatusLists
    customLists
    advancedScores
    startedAt {
      year
      month
      day
    }
    completedAt {
      year
      month
      day
    }
    updatedAt
    createdAt
    media {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        large
        medium
      }
      siteUrl
    }
  }
`;
export const StaffFragmentFragmentDoc = gql`
  fragment StaffFragment on Staff {
    id
    name {
      full
      native
    }
    image {
      large
      medium
    }
    description
    primaryOccupations
    gender
    dateOfBirth {
      year
      month
      day
    }
    age
    siteUrl
  }
`;
export const StudioFragmentFragmentDoc = gql`
  fragment StudioFragment on Studio {
    id
    name
    isAnimationStudio
    siteUrl
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    name
    avatar {
      large
      medium
    }
    about
    bannerImage
    options {
      titleLanguage
    }
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
    siteUrl
  }
`;
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
  ${MediaFragmentFragmentDoc}
  ${CharacterFragmentFragmentDoc}
  ${StaffFragmentFragmentDoc}
  ${StudioFragmentFragmentDoc}
`;
export const GetAnimeByTitleDocument = gql`
  query GetAnimeByTitle($title: String) {
    Page(page: 1, perPage: 1) {
      media(search: $title, type: ANIME) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
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
  ${CharacterFragmentFragmentDoc}
`;
export const GetAnimeListByGenreDocument = gql`
  query GetAnimeListByGenre(
    $genre: String!
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      media(genre: $genre, type: ANIME) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const GetAnimePopularDocument = gql`
  query GetAnimePopular($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: POPULARITY_DESC, type: ANIME) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
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
  ${MediaFragmentFragmentDoc}
`;
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
  ${MediaFragmentFragmentDoc}
`;
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
  ${StaffFragmentFragmentDoc}
`;
export const GetAnimeTrendingDocument = gql`
  query GetAnimeTrending($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: TRENDING_DESC, type: ANIME) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const SearchAnimeDocument = gql`
  query SearchAnime($query: String, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $query, type: ANIME) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const CharactersBirthdayTodayDocument = gql`
  query CharactersBirthdayToday($page: Int) {
    Page(page: $page) {
      characters(isBirthday: true) {
        ...CharacterFragment
      }
    }
  }
  ${CharacterFragmentFragmentDoc}
`;
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
  ${CharacterFragmentFragmentDoc}
`;
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
  ${MediaFragmentFragmentDoc}
`;
export const GetMangaByTitleDocument = gql`
  query GetMangaByTitle($title: String!) {
    Page(page: 1, perPage: 1) {
      media(search: $title, type: MANGA) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
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
  ${CharacterFragmentFragmentDoc}
`;
export const GetMangaListByGenreDocument = gql`
  query GetMangaListByGenre(
    $genre: String
    $page: Int = 1
    $perPage: Int = 10
  ) {
    Page(page: $page, perPage: $perPage) {
      media(genre: $genre, type: MANGA) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const GetMangaPopularDocument = gql`
  query getMangaPopular($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: POPULARITY_DESC, type: MANGA) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
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
  ${MediaFragmentFragmentDoc}
`;
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
  ${MediaFragmentFragmentDoc}
`;
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
  ${StaffFragmentFragmentDoc}
`;
export const GetMangaTrendingDocument = gql`
  query getMangaTrending($page: Int = 1, $perPage: Int = 20) {
    Page(page: $page, perPage: $perPage) {
      media(sort: TRENDING_DESC, type: MANGA) {
        ...MediaFragment
      }
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const GetMediaByIdDocument = gql`
  query GetMediaById($id: Int) {
    Media(id: $id) {
      ...MediaFragment
    }
  }
  ${MediaFragmentFragmentDoc}
`;
export const GetMediaListDocument = gql`
  query GetMediaList($id: Int) {
    MediaList(id: $id) {
      ...MediaListFragment
    }
  }
  ${MediaListFragmentFragmentDoc}
`;
export const GetMediaListByUserDocument = gql`
  query GetMediaListByUser($userId: Int) {
    MediaListCollection(userId: $userId) {
      lists {
        entries {
          ...MediaListFragment
        }
      }
    }
  }
  ${MediaListFragmentFragmentDoc}
`;
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
  ${StaffFragmentFragmentDoc}
  ${CharacterFragmentFragmentDoc}
`;
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
  ${MediaListFragmentFragmentDoc}
`;
export const GetUserInfoDocument = gql`
  query GetUserInfo($id: Int) {
    User(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export const GetUserListDocument = gql`
  query GetUserList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      users {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
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
  ${MediaListFragmentFragmentDoc}
`;
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

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetAnimeById(
      variables?: GetAnimeByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeByIdQuery>(GetAnimeByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetAnimeById",
        "query",
        variables
      );
    },
    GetAnimeByTitle(
      variables?: GetAnimeByTitleQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeByTitleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeByTitleQuery>(
            GetAnimeByTitleDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeByTitle",
        "query",
        variables
      );
    },
    GetAnimeCharacters(
      variables?: GetAnimeCharactersQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeCharactersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeCharactersQuery>(
            GetAnimeCharactersDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeCharacters",
        "query",
        variables
      );
    },
    GetAnimeListByGenre(
      variables: GetAnimeListByGenreQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeListByGenreQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeListByGenreQuery>(
            GetAnimeListByGenreDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeListByGenre",
        "query",
        variables
      );
    },
    GetAnimePopular(
      variables?: GetAnimePopularQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimePopularQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimePopularQuery>(
            GetAnimePopularDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimePopular",
        "query",
        variables
      );
    },
    GetAnimeRecommendations(
      variables?: GetAnimeRecommendationsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeRecommendationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeRecommendationsQuery>(
            GetAnimeRecommendationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeRecommendations",
        "query",
        variables
      );
    },
    GetAnimeRelations(
      variables?: GetAnimeRelationsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeRelationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeRelationsQuery>(
            GetAnimeRelationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeRelations",
        "query",
        variables
      );
    },
    GetAnimeStaff(
      variables?: GetAnimeStaffQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeStaffQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeStaffQuery>(GetAnimeStaffDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetAnimeStaff",
        "query",
        variables
      );
    },
    GetAnimeTrending(
      variables?: GetAnimeTrendingQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAnimeTrendingQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAnimeTrendingQuery>(
            GetAnimeTrendingDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAnimeTrending",
        "query",
        variables
      );
    },
    SearchAnime(
      variables?: SearchAnimeQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<SearchAnimeQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SearchAnimeQuery>(SearchAnimeDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "SearchAnime",
        "query",
        variables
      );
    },
    CharactersBirthdayToday(
      variables?: CharactersBirthdayTodayQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CharactersBirthdayTodayQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CharactersBirthdayTodayQuery>(
            CharactersBirthdayTodayDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CharactersBirthdayToday",
        "query",
        variables
      );
    },
    GetCharacterById(
      variables: GetCharacterByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetCharacterByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCharacterByIdQuery>(
            GetCharacterByIdDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetCharacterById",
        "query",
        variables
      );
    },
    ToggleFavoriteCharacter(
      variables?: ToggleFavoriteCharacterMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<ToggleFavoriteCharacterMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ToggleFavoriteCharacterMutation>(
            ToggleFavoriteCharacterDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "ToggleFavoriteCharacter",
        "mutation",
        variables
      );
    },
    GetMangaById(
      variables?: GetMangaByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaByIdQuery>(GetMangaByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetMangaById",
        "query",
        variables
      );
    },
    GetMangaByTitle(
      variables: GetMangaByTitleQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaByTitleQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaByTitleQuery>(
            GetMangaByTitleDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMangaByTitle",
        "query",
        variables
      );
    },
    GetMangaCharacters(
      variables?: GetMangaCharactersQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaCharactersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaCharactersQuery>(
            GetMangaCharactersDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMangaCharacters",
        "query",
        variables
      );
    },
    GetMangaListByGenre(
      variables?: GetMangaListByGenreQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaListByGenreQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaListByGenreQuery>(
            GetMangaListByGenreDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMangaListByGenre",
        "query",
        variables
      );
    },
    getMangaPopular(
      variables?: GetMangaPopularQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaPopularQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaPopularQuery>(
            GetMangaPopularDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getMangaPopular",
        "query",
        variables
      );
    },
    GetMangaRecommendations(
      variables?: GetMangaRecommendationsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaRecommendationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaRecommendationsQuery>(
            GetMangaRecommendationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMangaRecommendations",
        "query",
        variables
      );
    },
    GetMangaRelations(
      variables?: GetMangaRelationsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaRelationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaRelationsQuery>(
            GetMangaRelationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMangaRelations",
        "query",
        variables
      );
    },
    GetMangaStaff(
      variables?: GetMangaStaffQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaStaffQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaStaffQuery>(GetMangaStaffDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetMangaStaff",
        "query",
        variables
      );
    },
    getMangaTrending(
      variables?: GetMangaTrendingQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMangaTrendingQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMangaTrendingQuery>(
            GetMangaTrendingDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getMangaTrending",
        "query",
        variables
      );
    },
    GetMediaById(
      variables?: GetMediaByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMediaByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMediaByIdQuery>(GetMediaByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetMediaById",
        "query",
        variables
      );
    },
    GetMediaList(
      variables?: GetMediaListQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMediaListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMediaListQuery>(GetMediaListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetMediaList",
        "query",
        variables
      );
    },
    GetMediaListByUser(
      variables?: GetMediaListByUserQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetMediaListByUserQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMediaListByUserQuery>(
            GetMediaListByUserDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetMediaListByUser",
        "query",
        variables
      );
    },
    GetStaffById(
      variables: GetStaffByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetStaffByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetStaffByIdQuery>(GetStaffByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetStaffById",
        "query",
        variables
      );
    },
    StaffBirthdayToday(
      variables?: StaffBirthdayTodayQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<StaffBirthdayTodayQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<StaffBirthdayTodayQuery>(
            StaffBirthdayTodayDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "StaffBirthdayToday",
        "query",
        variables
      );
    },
    ToggleFavoriteStaff(
      variables?: ToggleFavoriteStaffMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<ToggleFavoriteStaffMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ToggleFavoriteStaffMutation>(
            ToggleFavoriteStaffDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "ToggleFavoriteStaff",
        "mutation",
        variables
      );
    },
    GetUserAnimeList(
      variables?: GetUserAnimeListQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetUserAnimeListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserAnimeListQuery>(
            GetUserAnimeListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetUserAnimeList",
        "query",
        variables
      );
    },
    GetUserInfo(
      variables?: GetUserInfoQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetUserInfoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserInfoQuery>(GetUserInfoDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetUserInfo",
        "query",
        variables
      );
    },
    GetUserList(
      variables?: GetUserListQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetUserListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserListQuery>(GetUserListDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetUserList",
        "query",
        variables
      );
    },
    GetUserMangaList(
      variables?: GetUserMangaListQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetUserMangaListQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserMangaListQuery>(
            GetUserMangaListDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetUserMangaList",
        "query",
        variables
      );
    },
    GetUserStatistics(
      variables?: GetUserStatisticsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetUserStatisticsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserStatisticsQuery>(
            GetUserStatisticsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetUserStatistics",
        "query",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> =
  ResolversObject<{
    ActivityUnion: ListActivity | MessageActivity | TextActivity;
    LikeableUnion:
      | ActivityReply
      | ListActivity
      | MessageActivity
      | TextActivity
      | Thread
      | ThreadComment;
    NotificationUnion:
      | (Omit<ActivityLikeNotification, "activity"> & {
          activity?: Maybe<_RefType["ActivityUnion"]>;
        })
      | (Omit<ActivityMentionNotification, "activity"> & {
          activity?: Maybe<_RefType["ActivityUnion"]>;
        })
      | ActivityMessageNotification
      | (Omit<ActivityReplyLikeNotification, "activity"> & {
          activity?: Maybe<_RefType["ActivityUnion"]>;
        })
      | (Omit<ActivityReplyNotification, "activity"> & {
          activity?: Maybe<_RefType["ActivityUnion"]>;
        })
      | (Omit<ActivityReplySubscribedNotification, "activity"> & {
          activity?: Maybe<_RefType["ActivityUnion"]>;
        })
      | AiringNotification
      | FollowingNotification
      | MediaDataChangeNotification
      | MediaDeletionNotification
      | MediaMergeNotification
      | RelatedMediaAdditionNotification
      | ThreadCommentLikeNotification
      | ThreadCommentMentionNotification
      | ThreadCommentReplyNotification
      | ThreadCommentSubscribedNotification
      | ThreadLikeNotification;
  }>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  ActivityLikeNotification: ResolverTypeWrapper<
    Omit<ActivityLikeNotification, "activity"> & {
      activity?: Maybe<ResolversTypes["ActivityUnion"]>;
    }
  >;
  ActivityMentionNotification: ResolverTypeWrapper<
    Omit<ActivityMentionNotification, "activity"> & {
      activity?: Maybe<ResolversTypes["ActivityUnion"]>;
    }
  >;
  ActivityMessageNotification: ResolverTypeWrapper<ActivityMessageNotification>;
  ActivityReply: ResolverTypeWrapper<ActivityReply>;
  ActivityReplyLikeNotification: ResolverTypeWrapper<
    Omit<ActivityReplyLikeNotification, "activity"> & {
      activity?: Maybe<ResolversTypes["ActivityUnion"]>;
    }
  >;
  ActivityReplyNotification: ResolverTypeWrapper<
    Omit<ActivityReplyNotification, "activity"> & {
      activity?: Maybe<ResolversTypes["ActivityUnion"]>;
    }
  >;
  ActivityReplySubscribedNotification: ResolverTypeWrapper<
    Omit<ActivityReplySubscribedNotification, "activity"> & {
      activity?: Maybe<ResolversTypes["ActivityUnion"]>;
    }
  >;
  ActivitySort: ActivitySort;
  ActivityType: ActivityType;
  ActivityUnion: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["ActivityUnion"]
  >;
  AiringNotification: ResolverTypeWrapper<AiringNotification>;
  AiringProgression: ResolverTypeWrapper<AiringProgression>;
  AiringSchedule: ResolverTypeWrapper<AiringSchedule>;
  AiringScheduleConnection: ResolverTypeWrapper<AiringScheduleConnection>;
  AiringScheduleEdge: ResolverTypeWrapper<AiringScheduleEdge>;
  AiringScheduleInput: AiringScheduleInput;
  AiringSort: AiringSort;
  AniChartHighlightInput: AniChartHighlightInput;
  AniChartUser: ResolverTypeWrapper<AniChartUser>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Character: ResolverTypeWrapper<Character>;
  CharacterConnection: ResolverTypeWrapper<CharacterConnection>;
  CharacterEdge: ResolverTypeWrapper<CharacterEdge>;
  CharacterImage: ResolverTypeWrapper<CharacterImage>;
  CharacterName: ResolverTypeWrapper<CharacterName>;
  CharacterNameInput: CharacterNameInput;
  CharacterRole: CharacterRole;
  CharacterSort: CharacterSort;
  CharacterSubmission: ResolverTypeWrapper<CharacterSubmission>;
  CharacterSubmissionConnection: ResolverTypeWrapper<CharacterSubmissionConnection>;
  CharacterSubmissionEdge: ResolverTypeWrapper<CharacterSubmissionEdge>;
  CountryCode: ResolverTypeWrapper<Scalars["CountryCode"]["output"]>;
  Deleted: ResolverTypeWrapper<Deleted>;
  ExternalLinkMediaType: ExternalLinkMediaType;
  ExternalLinkType: ExternalLinkType;
  Favourites: ResolverTypeWrapper<Favourites>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  FollowingNotification: ResolverTypeWrapper<FollowingNotification>;
  FormatStats: ResolverTypeWrapper<FormatStats>;
  FuzzyDate: ResolverTypeWrapper<FuzzyDate>;
  FuzzyDateInput: FuzzyDateInput;
  FuzzyDateInt: ResolverTypeWrapper<Scalars["FuzzyDateInt"]["output"]>;
  GenreStats: ResolverTypeWrapper<GenreStats>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  InternalPage: ResolverTypeWrapper<
    Omit<InternalPage, "activities" | "notifications"> & {
      activities?: Maybe<Array<Maybe<ResolversTypes["ActivityUnion"]>>>;
      notifications?: Maybe<Array<Maybe<ResolversTypes["NotificationUnion"]>>>;
    }
  >;
  Json: ResolverTypeWrapper<Scalars["Json"]["output"]>;
  LikeableType: LikeableType;
  LikeableUnion: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["LikeableUnion"]
  >;
  ListActivity: ResolverTypeWrapper<ListActivity>;
  ListActivityOption: ResolverTypeWrapper<ListActivityOption>;
  ListActivityOptionInput: ListActivityOptionInput;
  ListScoreStats: ResolverTypeWrapper<ListScoreStats>;
  Media: ResolverTypeWrapper<Media>;
  MediaCharacter: ResolverTypeWrapper<MediaCharacter>;
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaCoverImage: ResolverTypeWrapper<MediaCoverImage>;
  MediaDataChangeNotification: ResolverTypeWrapper<MediaDataChangeNotification>;
  MediaDeletionNotification: ResolverTypeWrapper<MediaDeletionNotification>;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  MediaExternalLink: ResolverTypeWrapper<MediaExternalLink>;
  MediaExternalLinkInput: MediaExternalLinkInput;
  MediaFormat: MediaFormat;
  MediaList: ResolverTypeWrapper<MediaList>;
  MediaListCollection: ResolverTypeWrapper<MediaListCollection>;
  MediaListGroup: ResolverTypeWrapper<MediaListGroup>;
  MediaListOptions: ResolverTypeWrapper<MediaListOptions>;
  MediaListOptionsInput: MediaListOptionsInput;
  MediaListSort: MediaListSort;
  MediaListStatus: MediaListStatus;
  MediaListTypeOptions: ResolverTypeWrapper<MediaListTypeOptions>;
  MediaMergeNotification: ResolverTypeWrapper<MediaMergeNotification>;
  MediaRank: ResolverTypeWrapper<MediaRank>;
  MediaRankType: MediaRankType;
  MediaRelation: MediaRelation;
  MediaSeason: MediaSeason;
  MediaSort: MediaSort;
  MediaSource: MediaSource;
  MediaStats: ResolverTypeWrapper<MediaStats>;
  MediaStatus: MediaStatus;
  MediaStreamingEpisode: ResolverTypeWrapper<MediaStreamingEpisode>;
  MediaSubmission: ResolverTypeWrapper<MediaSubmission>;
  MediaSubmissionComparison: ResolverTypeWrapper<MediaSubmissionComparison>;
  MediaSubmissionEdge: ResolverTypeWrapper<MediaSubmissionEdge>;
  MediaTag: ResolverTypeWrapper<MediaTag>;
  MediaTitle: ResolverTypeWrapper<MediaTitle>;
  MediaTitleInput: MediaTitleInput;
  MediaTrailer: ResolverTypeWrapper<MediaTrailer>;
  MediaTrend: ResolverTypeWrapper<MediaTrend>;
  MediaTrendConnection: ResolverTypeWrapper<MediaTrendConnection>;
  MediaTrendEdge: ResolverTypeWrapper<MediaTrendEdge>;
  MediaTrendSort: MediaTrendSort;
  MediaType: MediaType;
  MessageActivity: ResolverTypeWrapper<MessageActivity>;
  ModAction: ResolverTypeWrapper<ModAction>;
  ModActionType: ModActionType;
  ModRole: ModRole;
  Mutation: ResolverTypeWrapper<{}>;
  NotificationOption: ResolverTypeWrapper<NotificationOption>;
  NotificationOptionInput: NotificationOptionInput;
  NotificationType: NotificationType;
  NotificationUnion: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>["NotificationUnion"]
  >;
  Page: ResolverTypeWrapper<
    Omit<Page, "activities" | "notifications"> & {
      activities?: Maybe<Array<Maybe<ResolversTypes["ActivityUnion"]>>>;
      notifications?: Maybe<Array<Maybe<ResolversTypes["NotificationUnion"]>>>;
    }
  >;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  ParsedMarkdown: ResolverTypeWrapper<ParsedMarkdown>;
  Query: ResolverTypeWrapper<{}>;
  Recommendation: ResolverTypeWrapper<Recommendation>;
  RecommendationConnection: ResolverTypeWrapper<RecommendationConnection>;
  RecommendationEdge: ResolverTypeWrapper<RecommendationEdge>;
  RecommendationRating: RecommendationRating;
  RecommendationSort: RecommendationSort;
  RelatedMediaAdditionNotification: ResolverTypeWrapper<RelatedMediaAdditionNotification>;
  Report: ResolverTypeWrapper<Report>;
  Review: ResolverTypeWrapper<Review>;
  ReviewConnection: ResolverTypeWrapper<ReviewConnection>;
  ReviewEdge: ResolverTypeWrapper<ReviewEdge>;
  ReviewRating: ReviewRating;
  ReviewSort: ReviewSort;
  RevisionHistory: ResolverTypeWrapper<RevisionHistory>;
  RevisionHistoryAction: RevisionHistoryAction;
  ScoreDistribution: ResolverTypeWrapper<ScoreDistribution>;
  ScoreFormat: ScoreFormat;
  SiteStatistics: ResolverTypeWrapper<SiteStatistics>;
  SiteTrend: ResolverTypeWrapper<SiteTrend>;
  SiteTrendConnection: ResolverTypeWrapper<SiteTrendConnection>;
  SiteTrendEdge: ResolverTypeWrapper<SiteTrendEdge>;
  SiteTrendSort: SiteTrendSort;
  Staff: ResolverTypeWrapper<Staff>;
  StaffConnection: ResolverTypeWrapper<StaffConnection>;
  StaffEdge: ResolverTypeWrapper<StaffEdge>;
  StaffImage: ResolverTypeWrapper<StaffImage>;
  StaffLanguage: StaffLanguage;
  StaffName: ResolverTypeWrapper<StaffName>;
  StaffNameInput: StaffNameInput;
  StaffRoleType: ResolverTypeWrapper<StaffRoleType>;
  StaffSort: StaffSort;
  StaffStats: ResolverTypeWrapper<StaffStats>;
  StaffSubmission: ResolverTypeWrapper<StaffSubmission>;
  StatusDistribution: ResolverTypeWrapper<StatusDistribution>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Studio: ResolverTypeWrapper<Studio>;
  StudioConnection: ResolverTypeWrapper<StudioConnection>;
  StudioEdge: ResolverTypeWrapper<StudioEdge>;
  StudioSort: StudioSort;
  StudioStats: ResolverTypeWrapper<StudioStats>;
  SubmissionSort: SubmissionSort;
  SubmissionStatus: SubmissionStatus;
  TagStats: ResolverTypeWrapper<TagStats>;
  TextActivity: ResolverTypeWrapper<TextActivity>;
  Thread: ResolverTypeWrapper<Thread>;
  ThreadCategory: ResolverTypeWrapper<ThreadCategory>;
  ThreadComment: ResolverTypeWrapper<ThreadComment>;
  ThreadCommentLikeNotification: ResolverTypeWrapper<ThreadCommentLikeNotification>;
  ThreadCommentMentionNotification: ResolverTypeWrapper<ThreadCommentMentionNotification>;
  ThreadCommentReplyNotification: ResolverTypeWrapper<ThreadCommentReplyNotification>;
  ThreadCommentSort: ThreadCommentSort;
  ThreadCommentSubscribedNotification: ResolverTypeWrapper<ThreadCommentSubscribedNotification>;
  ThreadLikeNotification: ResolverTypeWrapper<ThreadLikeNotification>;
  ThreadSort: ThreadSort;
  User: ResolverTypeWrapper<User>;
  UserActivityHistory: ResolverTypeWrapper<UserActivityHistory>;
  UserAvatar: ResolverTypeWrapper<UserAvatar>;
  UserCountryStatistic: ResolverTypeWrapper<UserCountryStatistic>;
  UserFormatStatistic: ResolverTypeWrapper<UserFormatStatistic>;
  UserGenreStatistic: ResolverTypeWrapper<UserGenreStatistic>;
  UserLengthStatistic: ResolverTypeWrapper<UserLengthStatistic>;
  UserModData: ResolverTypeWrapper<UserModData>;
  UserOptions: ResolverTypeWrapper<UserOptions>;
  UserPreviousName: ResolverTypeWrapper<UserPreviousName>;
  UserReleaseYearStatistic: ResolverTypeWrapper<UserReleaseYearStatistic>;
  UserScoreStatistic: ResolverTypeWrapper<UserScoreStatistic>;
  UserSort: UserSort;
  UserStaffNameLanguage: UserStaffNameLanguage;
  UserStaffStatistic: ResolverTypeWrapper<UserStaffStatistic>;
  UserStartYearStatistic: ResolverTypeWrapper<UserStartYearStatistic>;
  UserStatisticTypes: ResolverTypeWrapper<UserStatisticTypes>;
  UserStatistics: ResolverTypeWrapper<UserStatistics>;
  UserStatisticsSort: UserStatisticsSort;
  UserStats: ResolverTypeWrapper<UserStats>;
  UserStatusStatistic: ResolverTypeWrapper<UserStatusStatistic>;
  UserStudioStatistic: ResolverTypeWrapper<UserStudioStatistic>;
  UserTagStatistic: ResolverTypeWrapper<UserTagStatistic>;
  UserTitleLanguage: UserTitleLanguage;
  UserVoiceActorStatistic: ResolverTypeWrapper<UserVoiceActorStatistic>;
  YearStats: ResolverTypeWrapper<YearStats>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActivityLikeNotification: Omit<ActivityLikeNotification, "activity"> & {
    activity?: Maybe<ResolversParentTypes["ActivityUnion"]>;
  };
  ActivityMentionNotification: Omit<ActivityMentionNotification, "activity"> & {
    activity?: Maybe<ResolversParentTypes["ActivityUnion"]>;
  };
  ActivityMessageNotification: ActivityMessageNotification;
  ActivityReply: ActivityReply;
  ActivityReplyLikeNotification: Omit<
    ActivityReplyLikeNotification,
    "activity"
  > & { activity?: Maybe<ResolversParentTypes["ActivityUnion"]> };
  ActivityReplyNotification: Omit<ActivityReplyNotification, "activity"> & {
    activity?: Maybe<ResolversParentTypes["ActivityUnion"]>;
  };
  ActivityReplySubscribedNotification: Omit<
    ActivityReplySubscribedNotification,
    "activity"
  > & { activity?: Maybe<ResolversParentTypes["ActivityUnion"]> };
  ActivityUnion: ResolversUnionTypes<ResolversParentTypes>["ActivityUnion"];
  AiringNotification: AiringNotification;
  AiringProgression: AiringProgression;
  AiringSchedule: AiringSchedule;
  AiringScheduleConnection: AiringScheduleConnection;
  AiringScheduleEdge: AiringScheduleEdge;
  AiringScheduleInput: AiringScheduleInput;
  AniChartHighlightInput: AniChartHighlightInput;
  AniChartUser: AniChartUser;
  Boolean: Scalars["Boolean"]["output"];
  Character: Character;
  CharacterConnection: CharacterConnection;
  CharacterEdge: CharacterEdge;
  CharacterImage: CharacterImage;
  CharacterName: CharacterName;
  CharacterNameInput: CharacterNameInput;
  CharacterSubmission: CharacterSubmission;
  CharacterSubmissionConnection: CharacterSubmissionConnection;
  CharacterSubmissionEdge: CharacterSubmissionEdge;
  CountryCode: Scalars["CountryCode"]["output"];
  Deleted: Deleted;
  Favourites: Favourites;
  Float: Scalars["Float"]["output"];
  FollowingNotification: FollowingNotification;
  FormatStats: FormatStats;
  FuzzyDate: FuzzyDate;
  FuzzyDateInput: FuzzyDateInput;
  FuzzyDateInt: Scalars["FuzzyDateInt"]["output"];
  GenreStats: GenreStats;
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  InternalPage: Omit<InternalPage, "activities" | "notifications"> & {
    activities?: Maybe<Array<Maybe<ResolversParentTypes["ActivityUnion"]>>>;
    notifications?: Maybe<
      Array<Maybe<ResolversParentTypes["NotificationUnion"]>>
    >;
  };
  Json: Scalars["Json"]["output"];
  LikeableUnion: ResolversUnionTypes<ResolversParentTypes>["LikeableUnion"];
  ListActivity: ListActivity;
  ListActivityOption: ListActivityOption;
  ListActivityOptionInput: ListActivityOptionInput;
  ListScoreStats: ListScoreStats;
  Media: Media;
  MediaCharacter: MediaCharacter;
  MediaConnection: MediaConnection;
  MediaCoverImage: MediaCoverImage;
  MediaDataChangeNotification: MediaDataChangeNotification;
  MediaDeletionNotification: MediaDeletionNotification;
  MediaEdge: MediaEdge;
  MediaExternalLink: MediaExternalLink;
  MediaExternalLinkInput: MediaExternalLinkInput;
  MediaList: MediaList;
  MediaListCollection: MediaListCollection;
  MediaListGroup: MediaListGroup;
  MediaListOptions: MediaListOptions;
  MediaListOptionsInput: MediaListOptionsInput;
  MediaListTypeOptions: MediaListTypeOptions;
  MediaMergeNotification: MediaMergeNotification;
  MediaRank: MediaRank;
  MediaStats: MediaStats;
  MediaStreamingEpisode: MediaStreamingEpisode;
  MediaSubmission: MediaSubmission;
  MediaSubmissionComparison: MediaSubmissionComparison;
  MediaSubmissionEdge: MediaSubmissionEdge;
  MediaTag: MediaTag;
  MediaTitle: MediaTitle;
  MediaTitleInput: MediaTitleInput;
  MediaTrailer: MediaTrailer;
  MediaTrend: MediaTrend;
  MediaTrendConnection: MediaTrendConnection;
  MediaTrendEdge: MediaTrendEdge;
  MessageActivity: MessageActivity;
  ModAction: ModAction;
  Mutation: {};
  NotificationOption: NotificationOption;
  NotificationOptionInput: NotificationOptionInput;
  NotificationUnion: ResolversUnionTypes<ResolversParentTypes>["NotificationUnion"];
  Page: Omit<Page, "activities" | "notifications"> & {
    activities?: Maybe<Array<Maybe<ResolversParentTypes["ActivityUnion"]>>>;
    notifications?: Maybe<
      Array<Maybe<ResolversParentTypes["NotificationUnion"]>>
    >;
  };
  PageInfo: PageInfo;
  ParsedMarkdown: ParsedMarkdown;
  Query: {};
  Recommendation: Recommendation;
  RecommendationConnection: RecommendationConnection;
  RecommendationEdge: RecommendationEdge;
  RelatedMediaAdditionNotification: RelatedMediaAdditionNotification;
  Report: Report;
  Review: Review;
  ReviewConnection: ReviewConnection;
  ReviewEdge: ReviewEdge;
  RevisionHistory: RevisionHistory;
  ScoreDistribution: ScoreDistribution;
  SiteStatistics: SiteStatistics;
  SiteTrend: SiteTrend;
  SiteTrendConnection: SiteTrendConnection;
  SiteTrendEdge: SiteTrendEdge;
  Staff: Staff;
  StaffConnection: StaffConnection;
  StaffEdge: StaffEdge;
  StaffImage: StaffImage;
  StaffName: StaffName;
  StaffNameInput: StaffNameInput;
  StaffRoleType: StaffRoleType;
  StaffStats: StaffStats;
  StaffSubmission: StaffSubmission;
  StatusDistribution: StatusDistribution;
  String: Scalars["String"]["output"];
  Studio: Studio;
  StudioConnection: StudioConnection;
  StudioEdge: StudioEdge;
  StudioStats: StudioStats;
  TagStats: TagStats;
  TextActivity: TextActivity;
  Thread: Thread;
  ThreadCategory: ThreadCategory;
  ThreadComment: ThreadComment;
  ThreadCommentLikeNotification: ThreadCommentLikeNotification;
  ThreadCommentMentionNotification: ThreadCommentMentionNotification;
  ThreadCommentReplyNotification: ThreadCommentReplyNotification;
  ThreadCommentSubscribedNotification: ThreadCommentSubscribedNotification;
  ThreadLikeNotification: ThreadLikeNotification;
  User: User;
  UserActivityHistory: UserActivityHistory;
  UserAvatar: UserAvatar;
  UserCountryStatistic: UserCountryStatistic;
  UserFormatStatistic: UserFormatStatistic;
  UserGenreStatistic: UserGenreStatistic;
  UserLengthStatistic: UserLengthStatistic;
  UserModData: UserModData;
  UserOptions: UserOptions;
  UserPreviousName: UserPreviousName;
  UserReleaseYearStatistic: UserReleaseYearStatistic;
  UserScoreStatistic: UserScoreStatistic;
  UserStaffStatistic: UserStaffStatistic;
  UserStartYearStatistic: UserStartYearStatistic;
  UserStatisticTypes: UserStatisticTypes;
  UserStatistics: UserStatistics;
  UserStats: UserStats;
  UserStatusStatistic: UserStatusStatistic;
  UserStudioStatistic: UserStudioStatistic;
  UserTagStatistic: UserTagStatistic;
  UserVoiceActorStatistic: UserVoiceActorStatistic;
  YearStats: YearStats;
}>;

export type ActivityLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityLikeNotification"] = ResolversParentTypes["ActivityLikeNotification"]
> = ResolversObject<{
  activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType
  >;
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityMentionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityMentionNotification"] = ResolversParentTypes["ActivityMentionNotification"]
> = ResolversObject<{
  activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType
  >;
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityMessageNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityMessageNotification"] = ResolversParentTypes["ActivityMessageNotification"]
> = ResolversObject<{
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  message?: Resolver<
    Maybe<ResolversTypes["MessageActivity"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityReplyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityReply"] = ResolversParentTypes["ActivityReply"]
> = ResolversObject<{
  activityId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  text?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<ActivityReplyTextArgs>
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityReplyLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityReplyLikeNotification"] = ResolversParentTypes["ActivityReplyLikeNotification"]
> = ResolversObject<{
  activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType
  >;
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityReplyNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityReplyNotification"] = ResolversParentTypes["ActivityReplyNotification"]
> = ResolversObject<{
  activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType
  >;
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityReplySubscribedNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityReplySubscribedNotification"] = ResolversParentTypes["ActivityReplySubscribedNotification"]
> = ResolversObject<{
  activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType
  >;
  activityId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ActivityUnion"] = ResolversParentTypes["ActivityUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "ListActivity" | "MessageActivity" | "TextActivity",
    ParentType,
    ContextType
  >;
}>;

export type AiringNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AiringNotification"] = ResolversParentTypes["AiringNotification"]
> = ResolversObject<{
  animeId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  contexts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  episode?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AiringProgressionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AiringProgression"] = ResolversParentTypes["AiringProgression"]
> = ResolversObject<{
  episode?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  watching?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AiringScheduleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AiringSchedule"] = ResolversParentTypes["AiringSchedule"]
> = ResolversObject<{
  airingAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  episode?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timeUntilAiring?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AiringScheduleConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AiringScheduleConnection"] = ResolversParentTypes["AiringScheduleConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AiringScheduleEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AiringSchedule"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AiringScheduleEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AiringScheduleEdge"] = ResolversParentTypes["AiringScheduleEdge"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes["AiringSchedule"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AniChartUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AniChartUser"] = ResolversParentTypes["AniChartUser"]
> = ResolversObject<{
  highlights?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Character"] = ResolversParentTypes["Character"]
> = ResolversObject<{
  age?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  bloodType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dateOfBirth?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<CharacterDescriptionArgs>
  >;
  favourites?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes["CharacterImage"]>,
    ParentType,
    ContextType
  >;
  isFavourite?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFavouriteBlocked?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  media?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<CharacterMediaArgs>
  >;
  modNotes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<
    Maybe<ResolversTypes["CharacterName"]>,
    ParentType,
    ContextType
  >;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterConnection"] = ResolversParentTypes["CharacterConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CharacterEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Character"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterEdge"] = ResolversParentTypes["CharacterEdge"]
> = ResolversObject<{
  favouriteOrder?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  media?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Media"]>>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Character"]>, ParentType, ContextType>;
  role?: Resolver<
    Maybe<ResolversTypes["CharacterRole"]>,
    ParentType,
    ContextType
  >;
  voiceActorRoles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffRoleType"]>>>,
    ParentType,
    ContextType,
    Partial<CharacterEdgeVoiceActorRolesArgs>
  >;
  voiceActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType,
    Partial<CharacterEdgeVoiceActorsArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterImage"] = ResolversParentTypes["CharacterImage"]
> = ResolversObject<{
  large?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterName"] = ResolversParentTypes["CharacterName"]
> = ResolversObject<{
  alternative?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  alternativeSpoiler?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  first?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  middle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userPreferred?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterSubmission"] = ResolversParentTypes["CharacterSubmission"]
> = ResolversObject<{
  assignee?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  character?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  locked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["SubmissionStatus"]>,
    ParentType,
    ContextType
  >;
  submission?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  submitter?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterSubmissionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterSubmissionConnection"] = ResolversParentTypes["CharacterSubmissionConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CharacterSubmissionEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CharacterSubmission"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacterSubmissionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CharacterSubmissionEdge"] = ResolversParentTypes["CharacterSubmissionEdge"]
> = ResolversObject<{
  node?: Resolver<
    Maybe<ResolversTypes["CharacterSubmission"]>,
    ParentType,
    ContextType
  >;
  role?: Resolver<
    Maybe<ResolversTypes["CharacterRole"]>,
    ParentType,
    ContextType
  >;
  submittedVoiceActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffSubmission"]>>>,
    ParentType,
    ContextType
  >;
  voiceActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CountryCodeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["CountryCode"], any> {
  name: "CountryCode";
}

export type DeletedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Deleted"] = ResolversParentTypes["Deleted"]
> = ResolversObject<{
  deleted?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FavouritesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Favourites"] = ResolversParentTypes["Favourites"]
> = ResolversObject<{
  anime?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<FavouritesAnimeArgs>
  >;
  characters?: Resolver<
    Maybe<ResolversTypes["CharacterConnection"]>,
    ParentType,
    ContextType,
    Partial<FavouritesCharactersArgs>
  >;
  manga?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<FavouritesMangaArgs>
  >;
  staff?: Resolver<
    Maybe<ResolversTypes["StaffConnection"]>,
    ParentType,
    ContextType,
    Partial<FavouritesStaffArgs>
  >;
  studios?: Resolver<
    Maybe<ResolversTypes["StudioConnection"]>,
    ParentType,
    ContextType,
    Partial<FavouritesStudiosArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FollowingNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FollowingNotification"] = ResolversParentTypes["FollowingNotification"]
> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FormatStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FormatStats"] = ResolversParentTypes["FormatStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  format?: Resolver<
    Maybe<ResolversTypes["MediaFormat"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FuzzyDateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["FuzzyDate"] = ResolversParentTypes["FuzzyDate"]
> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface FuzzyDateIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["FuzzyDateInt"], any> {
  name: "FuzzyDateInt";
}

export type GenreStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GenreStats"] = ResolversParentTypes["GenreStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InternalPageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["InternalPage"] = ResolversParentTypes["InternalPage"]
> = ResolversObject<{
  activities?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityUnion"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageActivitiesArgs>
  >;
  activityReplies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityReply"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageActivityRepliesArgs>
  >;
  airingSchedules?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AiringSchedule"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageAiringSchedulesArgs>
  >;
  characterSubmissions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CharacterSubmission"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageCharacterSubmissionsArgs>
  >;
  characters?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Character"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageCharactersArgs>
  >;
  followers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<InternalPageFollowersArgs, "userId">
  >;
  following?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<InternalPageFollowingArgs, "userId">
  >;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageLikesArgs>
  >;
  media?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Media"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageMediaArgs>
  >;
  mediaList?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageMediaListArgs>
  >;
  mediaSubmissions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaSubmission"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageMediaSubmissionsArgs>
  >;
  mediaTrends?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTrend"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageMediaTrendsArgs>
  >;
  modActions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ModAction"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageModActionsArgs>
  >;
  notifications?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["NotificationUnion"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageNotificationsArgs>
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  recommendations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Recommendation"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageRecommendationsArgs>
  >;
  reports?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Report"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageReportsArgs>
  >;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageReviewsArgs>
  >;
  revisionHistory?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RevisionHistory"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageRevisionHistoryArgs>
  >;
  staff?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageStaffArgs>
  >;
  staffSubmissions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffSubmission"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageStaffSubmissionsArgs>
  >;
  studios?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Studio"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageStudiosArgs>
  >;
  threadComments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ThreadComment"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageThreadCommentsArgs>
  >;
  threads?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Thread"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageThreadsArgs>
  >;
  userBlockSearch?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageUserBlockSearchArgs>
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<InternalPageUsersArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Json"], any> {
  name: "Json";
}

export type LikeableUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["LikeableUnion"] = ResolversParentTypes["LikeableUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "ActivityReply"
    | "ListActivity"
    | "MessageActivity"
    | "TextActivity"
    | "Thread"
    | "ThreadComment",
    ParentType,
    ContextType
  >;
}>;

export type ListActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ListActivity"] = ResolversParentTypes["ListActivity"]
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isPinned?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSubscribed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  replies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityReply"]>>>,
    ParentType,
    ContextType
  >;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["ActivityType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListActivityOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ListActivityOption"] = ResolversParentTypes["ListActivityOption"]
> = ResolversObject<{
  disabled?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes["MediaListStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListScoreStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ListScoreStats"] = ResolversParentTypes["ListScoreStats"]
> = ResolversObject<{
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  standardDeviation?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Media"] = ResolversParentTypes["Media"]
> = ResolversObject<{
  airingSchedule?: Resolver<
    Maybe<ResolversTypes["AiringScheduleConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaAiringScheduleArgs>
  >;
  autoCreateForumThread?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  averageScore?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  bannerImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  chapters?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  characters?: Resolver<
    Maybe<ResolversTypes["CharacterConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaCharactersArgs>
  >;
  countryOfOrigin?: Resolver<
    Maybe<ResolversTypes["CountryCode"]>,
    ParentType,
    ContextType
  >;
  coverImage?: Resolver<
    Maybe<ResolversTypes["MediaCoverImage"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MediaDescriptionArgs>
  >;
  duration?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  endDate?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  episodes?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  externalLinks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaExternalLink"]>>>,
    ParentType,
    ContextType
  >;
  favourites?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  format?: Resolver<
    Maybe<ResolversTypes["MediaFormat"]>,
    ParentType,
    ContextType
  >;
  genres?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  hashtag?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  idMal?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFavouriteBlocked?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isLicensed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isRecommendationBlocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isReviewBlocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  mediaListEntry?: Resolver<
    Maybe<ResolversTypes["MediaList"]>,
    ParentType,
    ContextType
  >;
  modNotes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nextAiringEpisode?: Resolver<
    Maybe<ResolversTypes["AiringSchedule"]>,
    ParentType,
    ContextType
  >;
  popularity?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  rankings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaRank"]>>>,
    ParentType,
    ContextType
  >;
  recommendations?: Resolver<
    Maybe<ResolversTypes["RecommendationConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaRecommendationsArgs>
  >;
  relations?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType
  >;
  reviews?: Resolver<
    Maybe<ResolversTypes["ReviewConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaReviewsArgs>
  >;
  season?: Resolver<
    Maybe<ResolversTypes["MediaSeason"]>,
    ParentType,
    ContextType
  >;
  seasonInt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  seasonYear?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  source?: Resolver<
    Maybe<ResolversTypes["MediaSource"]>,
    ParentType,
    ContextType,
    Partial<MediaSourceArgs>
  >;
  staff?: Resolver<
    Maybe<ResolversTypes["StaffConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaStaffArgs>
  >;
  startDate?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  stats?: Resolver<
    Maybe<ResolversTypes["MediaStats"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes["MediaStatus"]>,
    ParentType,
    ContextType,
    Partial<MediaStatusArgs>
  >;
  streamingEpisodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaStreamingEpisode"]>>>,
    ParentType,
    ContextType
  >;
  studios?: Resolver<
    Maybe<ResolversTypes["StudioConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaStudiosArgs>
  >;
  synonyms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTag"]>>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<
    Maybe<ResolversTypes["MediaTitle"]>,
    ParentType,
    ContextType
  >;
  trailer?: Resolver<
    Maybe<ResolversTypes["MediaTrailer"]>,
    ParentType,
    ContextType
  >;
  trending?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  trends?: Resolver<
    Maybe<ResolversTypes["MediaTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<MediaTrendsArgs>
  >;
  type?: Resolver<Maybe<ResolversTypes["MediaType"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  volumes?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaCharacterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaCharacter"] = ResolversParentTypes["MediaCharacter"]
> = ResolversObject<{
  character?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  characterName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dubGroup?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  role?: Resolver<
    Maybe<ResolversTypes["CharacterRole"]>,
    ParentType,
    ContextType
  >;
  roleNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  voiceActor?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaConnection"] = ResolversParentTypes["MediaConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Media"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaCoverImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaCoverImage"] = ResolversParentTypes["MediaCoverImage"]
> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  extraLarge?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  large?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaDataChangeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaDataChangeNotification"] = ResolversParentTypes["MediaDataChangeNotification"]
> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaDeletionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaDeletionNotification"] = ResolversParentTypes["MediaDeletionNotification"]
> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  deletedMediaTitle?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaEdge"] = ResolversParentTypes["MediaEdge"]
> = ResolversObject<{
  characterName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  characterRole?: Resolver<
    Maybe<ResolversTypes["CharacterRole"]>,
    ParentType,
    ContextType
  >;
  characters?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Character"]>>>,
    ParentType,
    ContextType
  >;
  dubGroup?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  favouriteOrder?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  isMainStudio?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  relationType?: Resolver<
    Maybe<ResolversTypes["MediaRelation"]>,
    ParentType,
    ContextType,
    Partial<MediaEdgeRelationTypeArgs>
  >;
  roleNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  staffRole?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  voiceActorRoles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffRoleType"]>>>,
    ParentType,
    ContextType,
    Partial<MediaEdgeVoiceActorRolesArgs>
  >;
  voiceActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType,
    Partial<MediaEdgeVoiceActorsArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaExternalLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaExternalLink"] = ResolversParentTypes["MediaExternalLink"]
> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isDisabled?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  language?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  site?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  siteId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["ExternalLinkType"]>,
    ParentType,
    ContextType
  >;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaList"] = ResolversParentTypes["MediaList"]
> = ResolversObject<{
  advancedScores?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType
  >;
  completedAt?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  customLists?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType,
    Partial<MediaListCustomListsArgs>
  >;
  hiddenFromStatusLists?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  progressVolumes?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  repeat?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  score?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    Partial<MediaListScoreArgs>
  >;
  startedAt?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes["MediaListStatus"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaListCollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaListCollection"] = ResolversParentTypes["MediaListCollection"]
> = ResolversObject<{
  customLists?: Resolver<
    Maybe<Array<Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>>>,
    ParentType,
    ContextType,
    Partial<MediaListCollectionCustomListsArgs>
  >;
  hasNextChunk?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  lists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaListGroup"]>>>,
    ParentType,
    ContextType
  >;
  statusLists?: Resolver<
    Maybe<Array<Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>>>,
    ParentType,
    ContextType,
    Partial<MediaListCollectionStatusListsArgs>
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaListGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaListGroup"] = ResolversParentTypes["MediaListGroup"]
> = ResolversObject<{
  entries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>,
    ParentType,
    ContextType
  >;
  isCustomList?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSplitCompletedList?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["MediaListStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaListOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaListOptions"] = ResolversParentTypes["MediaListOptions"]
> = ResolversObject<{
  animeList?: Resolver<
    Maybe<ResolversTypes["MediaListTypeOptions"]>,
    ParentType,
    ContextType
  >;
  mangaList?: Resolver<
    Maybe<ResolversTypes["MediaListTypeOptions"]>,
    ParentType,
    ContextType
  >;
  rowOrder?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  scoreFormat?: Resolver<
    Maybe<ResolversTypes["ScoreFormat"]>,
    ParentType,
    ContextType
  >;
  sharedTheme?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType
  >;
  sharedThemeEnabled?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  useLegacyLists?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaListTypeOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaListTypeOptions"] = ResolversParentTypes["MediaListTypeOptions"]
> = ResolversObject<{
  advancedScoring?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  advancedScoringEnabled?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  customLists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  sectionOrder?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  splitCompletedSectionByFormat?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  theme?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaMergeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaMergeNotification"] = ResolversParentTypes["MediaMergeNotification"]
> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  deletedMediaTitles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaRankResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaRank"] = ResolversParentTypes["MediaRank"]
> = ResolversObject<{
  allTime?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  context?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  format?: Resolver<ResolversTypes["MediaFormat"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  season?: Resolver<
    Maybe<ResolversTypes["MediaSeason"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["MediaRankType"], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaStats"] = ResolversParentTypes["MediaStats"]
> = ResolversObject<{
  airingProgression?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AiringProgression"]>>>,
    ParentType,
    ContextType
  >;
  scoreDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ScoreDistribution"]>>>,
    ParentType,
    ContextType
  >;
  statusDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StatusDistribution"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaStreamingEpisodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaStreamingEpisode"] = ResolversParentTypes["MediaStreamingEpisode"]
> = ResolversObject<{
  site?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  thumbnail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaSubmission"] = ResolversParentTypes["MediaSubmission"]
> = ResolversObject<{
  assignee?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  changes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  characters?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaSubmissionComparison"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  externalLinks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaSubmissionComparison"]>>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  locked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  relations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaEdge"]>>>,
    ParentType,
    ContextType
  >;
  source?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  staff?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaSubmissionComparison"]>>>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    Maybe<ResolversTypes["SubmissionStatus"]>,
    ParentType,
    ContextType
  >;
  studios?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaSubmissionComparison"]>>>,
    ParentType,
    ContextType
  >;
  submission?: Resolver<
    Maybe<ResolversTypes["Media"]>,
    ParentType,
    ContextType
  >;
  submitter?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  submitterStats?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaSubmissionComparisonResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaSubmissionComparison"] = ResolversParentTypes["MediaSubmissionComparison"]
> = ResolversObject<{
  character?: Resolver<
    Maybe<ResolversTypes["MediaCharacter"]>,
    ParentType,
    ContextType
  >;
  externalLink?: Resolver<
    Maybe<ResolversTypes["MediaExternalLink"]>,
    ParentType,
    ContextType
  >;
  staff?: Resolver<Maybe<ResolversTypes["StaffEdge"]>, ParentType, ContextType>;
  studio?: Resolver<
    Maybe<ResolversTypes["StudioEdge"]>,
    ParentType,
    ContextType
  >;
  submission?: Resolver<
    Maybe<ResolversTypes["MediaSubmissionEdge"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaSubmissionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaSubmissionEdge"] = ResolversParentTypes["MediaSubmissionEdge"]
> = ResolversObject<{
  character?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  characterName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  characterRole?: Resolver<
    Maybe<ResolversTypes["CharacterRole"]>,
    ParentType,
    ContextType
  >;
  characterSubmission?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  dubGroup?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  externalLink?: Resolver<
    Maybe<ResolversTypes["MediaExternalLink"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  isMain?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  roleNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  staffRole?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  staffSubmission?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  studio?: Resolver<Maybe<ResolversTypes["Studio"]>, ParentType, ContextType>;
  voiceActor?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  voiceActorSubmission?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTag"] = ResolversParentTypes["MediaTag"]
> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isAdult?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isGeneralSpoiler?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isMediaSpoiler?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTitleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTitle"] = ResolversParentTypes["MediaTitle"]
> = ResolversObject<{
  english?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MediaTitleEnglishArgs>
  >;
  native?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MediaTitleNativeArgs>
  >;
  romaji?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MediaTitleRomajiArgs>
  >;
  userPreferred?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTrailerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTrailer"] = ResolversParentTypes["MediaTrailer"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  thumbnail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTrendResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTrend"] = ResolversParentTypes["MediaTrend"]
> = ResolversObject<{
  averageScore?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  date?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  episode?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  inProgress?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  releasing?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  trending?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTrendConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTrendConnection"] = ResolversParentTypes["MediaTrendConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTrendEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTrend"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaTrendEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaTrendEdge"] = ResolversParentTypes["MediaTrendEdge"]
> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes["MediaTrend"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MessageActivity"] = ResolversParentTypes["MessageActivity"]
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isPrivate?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSubscribed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  message?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MessageActivityMessageArgs>
  >;
  messenger?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  messengerId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  recipientId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  replies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityReply"]>>>,
    ParentType,
    ContextType
  >;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["ActivityType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ModActionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ModAction"] = ResolversParentTypes["ModAction"]
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  mod?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  objectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  objectType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<
    Maybe<ResolversTypes["ModActionType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  DeleteActivity?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteActivityArgs>
  >;
  DeleteActivityReply?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteActivityReplyArgs>
  >;
  DeleteCustomList?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteCustomListArgs>
  >;
  DeleteMediaListEntry?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteMediaListEntryArgs>
  >;
  DeleteReview?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteReviewArgs>
  >;
  DeleteThread?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteThreadArgs>
  >;
  DeleteThreadComment?: Resolver<
    Maybe<ResolversTypes["Deleted"]>,
    ParentType,
    ContextType,
    Partial<MutationDeleteThreadCommentArgs>
  >;
  RateReview?: Resolver<
    Maybe<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    Partial<MutationRateReviewArgs>
  >;
  SaveActivityReply?: Resolver<
    Maybe<ResolversTypes["ActivityReply"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveActivityReplyArgs>
  >;
  SaveListActivity?: Resolver<
    Maybe<ResolversTypes["ListActivity"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveListActivityArgs>
  >;
  SaveMediaListEntry?: Resolver<
    Maybe<ResolversTypes["MediaList"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveMediaListEntryArgs>
  >;
  SaveMessageActivity?: Resolver<
    Maybe<ResolversTypes["MessageActivity"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveMessageActivityArgs>
  >;
  SaveRecommendation?: Resolver<
    Maybe<ResolversTypes["Recommendation"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveRecommendationArgs>
  >;
  SaveReview?: Resolver<
    Maybe<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveReviewArgs>
  >;
  SaveTextActivity?: Resolver<
    Maybe<ResolversTypes["TextActivity"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveTextActivityArgs>
  >;
  SaveThread?: Resolver<
    Maybe<ResolversTypes["Thread"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveThreadArgs>
  >;
  SaveThreadComment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType,
    Partial<MutationSaveThreadCommentArgs>
  >;
  ToggleActivityPin?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleActivityPinArgs>
  >;
  ToggleActivitySubscription?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleActivitySubscriptionArgs>
  >;
  ToggleFavourite?: Resolver<
    Maybe<ResolversTypes["Favourites"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleFavouriteArgs>
  >;
  ToggleFollow?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleFollowArgs>
  >;
  ToggleLike?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<MutationToggleLikeArgs>
  >;
  ToggleLikeV2?: Resolver<
    Maybe<ResolversTypes["LikeableUnion"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleLikeV2Args>
  >;
  ToggleThreadSubscription?: Resolver<
    Maybe<ResolversTypes["Thread"]>,
    ParentType,
    ContextType,
    Partial<MutationToggleThreadSubscriptionArgs>
  >;
  UpdateAniChartHighlights?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateAniChartHighlightsArgs>
  >;
  UpdateAniChartSettings?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateAniChartSettingsArgs>
  >;
  UpdateFavouriteOrder?: Resolver<
    Maybe<ResolversTypes["Favourites"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateFavouriteOrderArgs>
  >;
  UpdateMediaListEntries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>,
    ParentType,
    ContextType,
    Partial<MutationUpdateMediaListEntriesArgs>
  >;
  UpdateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateUserArgs>
  >;
}>;

export type NotificationOptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NotificationOption"] = ResolversParentTypes["NotificationOption"]
> = ResolversObject<{
  enabled?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["NotificationUnion"] = ResolversParentTypes["NotificationUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "ActivityLikeNotification"
    | "ActivityMentionNotification"
    | "ActivityMessageNotification"
    | "ActivityReplyLikeNotification"
    | "ActivityReplyNotification"
    | "ActivityReplySubscribedNotification"
    | "AiringNotification"
    | "FollowingNotification"
    | "MediaDataChangeNotification"
    | "MediaDeletionNotification"
    | "MediaMergeNotification"
    | "RelatedMediaAdditionNotification"
    | "ThreadCommentLikeNotification"
    | "ThreadCommentMentionNotification"
    | "ThreadCommentReplyNotification"
    | "ThreadCommentSubscribedNotification"
    | "ThreadLikeNotification",
    ParentType,
    ContextType
  >;
}>;

export type PageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Page"] = ResolversParentTypes["Page"]
> = ResolversObject<{
  activities?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityUnion"]>>>,
    ParentType,
    ContextType,
    Partial<PageActivitiesArgs>
  >;
  activityReplies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityReply"]>>>,
    ParentType,
    ContextType,
    Partial<PageActivityRepliesArgs>
  >;
  airingSchedules?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AiringSchedule"]>>>,
    ParentType,
    ContextType,
    Partial<PageAiringSchedulesArgs>
  >;
  characters?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Character"]>>>,
    ParentType,
    ContextType,
    Partial<PageCharactersArgs>
  >;
  followers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<PageFollowersArgs, "userId">
  >;
  following?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    RequireFields<PageFollowingArgs, "userId">
  >;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<PageLikesArgs>
  >;
  media?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Media"]>>>,
    ParentType,
    ContextType,
    Partial<PageMediaArgs>
  >;
  mediaList?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaList"]>>>,
    ParentType,
    ContextType,
    Partial<PageMediaListArgs>
  >;
  mediaTrends?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTrend"]>>>,
    ParentType,
    ContextType,
    Partial<PageMediaTrendsArgs>
  >;
  notifications?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["NotificationUnion"]>>>,
    ParentType,
    ContextType,
    Partial<PageNotificationsArgs>
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  recommendations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Recommendation"]>>>,
    ParentType,
    ContextType,
    Partial<PageRecommendationsArgs>
  >;
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType,
    Partial<PageReviewsArgs>
  >;
  staff?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType,
    Partial<PageStaffArgs>
  >;
  studios?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Studio"]>>>,
    ParentType,
    ContextType,
    Partial<PageStudiosArgs>
  >;
  threadComments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ThreadComment"]>>>,
    ParentType,
    ContextType,
    Partial<PageThreadCommentsArgs>
  >;
  threads?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Thread"]>>>,
    ParentType,
    ContextType,
    Partial<PageThreadsArgs>
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType,
    Partial<PageUsersArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = ResolversObject<{
  currentPage?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  hasNextPage?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  lastPage?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParsedMarkdownResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ParsedMarkdown"] = ResolversParentTypes["ParsedMarkdown"]
> = ResolversObject<{
  html?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  Activity?: Resolver<
    Maybe<ResolversTypes["ActivityUnion"]>,
    ParentType,
    ContextType,
    Partial<QueryActivityArgs>
  >;
  ActivityReply?: Resolver<
    Maybe<ResolversTypes["ActivityReply"]>,
    ParentType,
    ContextType,
    Partial<QueryActivityReplyArgs>
  >;
  AiringSchedule?: Resolver<
    Maybe<ResolversTypes["AiringSchedule"]>,
    ParentType,
    ContextType,
    Partial<QueryAiringScheduleArgs>
  >;
  AniChartUser?: Resolver<
    Maybe<ResolversTypes["AniChartUser"]>,
    ParentType,
    ContextType
  >;
  Character?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType,
    Partial<QueryCharacterArgs>
  >;
  ExternalLinkSourceCollection?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaExternalLink"]>>>,
    ParentType,
    ContextType,
    Partial<QueryExternalLinkSourceCollectionArgs>
  >;
  Follower?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFollowerArgs, "userId">
  >;
  Following?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFollowingArgs, "userId">
  >;
  GenreCollection?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  Like?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    Partial<QueryLikeArgs>
  >;
  Markdown?: Resolver<
    Maybe<ResolversTypes["ParsedMarkdown"]>,
    ParentType,
    ContextType,
    RequireFields<QueryMarkdownArgs, "markdown">
  >;
  Media?: Resolver<
    Maybe<ResolversTypes["Media"]>,
    ParentType,
    ContextType,
    Partial<QueryMediaArgs>
  >;
  MediaList?: Resolver<
    Maybe<ResolversTypes["MediaList"]>,
    ParentType,
    ContextType,
    Partial<QueryMediaListArgs>
  >;
  MediaListCollection?: Resolver<
    Maybe<ResolversTypes["MediaListCollection"]>,
    ParentType,
    ContextType,
    Partial<QueryMediaListCollectionArgs>
  >;
  MediaTagCollection?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaTag"]>>>,
    ParentType,
    ContextType,
    Partial<QueryMediaTagCollectionArgs>
  >;
  MediaTrend?: Resolver<
    Maybe<ResolversTypes["MediaTrend"]>,
    ParentType,
    ContextType,
    Partial<QueryMediaTrendArgs>
  >;
  Notification?: Resolver<
    Maybe<ResolversTypes["NotificationUnion"]>,
    ParentType,
    ContextType,
    Partial<QueryNotificationArgs>
  >;
  Page?: Resolver<
    Maybe<ResolversTypes["Page"]>,
    ParentType,
    ContextType,
    Partial<QueryPageArgs>
  >;
  Recommendation?: Resolver<
    Maybe<ResolversTypes["Recommendation"]>,
    ParentType,
    ContextType,
    Partial<QueryRecommendationArgs>
  >;
  Review?: Resolver<
    Maybe<ResolversTypes["Review"]>,
    ParentType,
    ContextType,
    Partial<QueryReviewArgs>
  >;
  SiteStatistics?: Resolver<
    Maybe<ResolversTypes["SiteStatistics"]>,
    ParentType,
    ContextType
  >;
  Staff?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType,
    Partial<QueryStaffArgs>
  >;
  Studio?: Resolver<
    Maybe<ResolversTypes["Studio"]>,
    ParentType,
    ContextType,
    Partial<QueryStudioArgs>
  >;
  Thread?: Resolver<
    Maybe<ResolversTypes["Thread"]>,
    ParentType,
    ContextType,
    Partial<QueryThreadArgs>
  >;
  ThreadComment?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ThreadComment"]>>>,
    ParentType,
    ContextType,
    Partial<QueryThreadCommentArgs>
  >;
  User?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    Partial<QueryUserArgs>
  >;
  Viewer?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
}>;

export type RecommendationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Recommendation"] = ResolversParentTypes["Recommendation"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaRecommendation?: Resolver<
    Maybe<ResolversTypes["Media"]>,
    ParentType,
    ContextType
  >;
  rating?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userRating?: Resolver<
    Maybe<ResolversTypes["RecommendationRating"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecommendationConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RecommendationConnection"] = ResolversParentTypes["RecommendationConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RecommendationEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Recommendation"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecommendationEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RecommendationEdge"] = ResolversParentTypes["RecommendationEdge"]
> = ResolversObject<{
  node?: Resolver<
    Maybe<ResolversTypes["Recommendation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RelatedMediaAdditionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RelatedMediaAdditionNotification"] = ResolversParentTypes["RelatedMediaAdditionNotification"]
> = ResolversObject<{
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReportResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Report"] = ResolversParentTypes["Report"]
> = ResolversObject<{
  cleared?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  reported?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  reporter?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Review"] = ResolversParentTypes["Review"]
> = ResolversObject<{
  body?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<ReviewBodyArgs>
  >;
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  mediaType?: Resolver<
    Maybe<ResolversTypes["MediaType"]>,
    ParentType,
    ContextType
  >;
  private?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  ratingAmount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  score?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  userRating?: Resolver<
    Maybe<ResolversTypes["ReviewRating"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ReviewConnection"] = ResolversParentTypes["ReviewConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ReviewEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ReviewEdge"] = ResolversParentTypes["ReviewEdge"]
> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes["Review"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevisionHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RevisionHistory"] = ResolversParentTypes["RevisionHistory"]
> = ResolversObject<{
  action?: Resolver<
    Maybe<ResolversTypes["RevisionHistoryAction"]>,
    ParentType,
    ContextType
  >;
  changes?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  character?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  externalLink?: Resolver<
    Maybe<ResolversTypes["MediaExternalLink"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes["Media"]>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes["Studio"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScoreDistributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ScoreDistribution"] = ResolversParentTypes["ScoreDistribution"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SiteStatistics"] = ResolversParentTypes["SiteStatistics"]
> = ResolversObject<{
  anime?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsAnimeArgs>
  >;
  characters?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsCharactersArgs>
  >;
  manga?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsMangaArgs>
  >;
  reviews?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsReviewsArgs>
  >;
  staff?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsStaffArgs>
  >;
  studios?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsStudiosArgs>
  >;
  users?: Resolver<
    Maybe<ResolversTypes["SiteTrendConnection"]>,
    ParentType,
    ContextType,
    Partial<SiteStatisticsUsersArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteTrendResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SiteTrend"] = ResolversParentTypes["SiteTrend"]
> = ResolversObject<{
  change?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteTrendConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SiteTrendConnection"] = ResolversParentTypes["SiteTrendConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SiteTrendEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SiteTrend"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SiteTrendEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SiteTrendEdge"] = ResolversParentTypes["SiteTrendEdge"]
> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes["SiteTrend"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Staff"] = ResolversParentTypes["Staff"]
> = ResolversObject<{
  age?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  bloodType?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  characterMedia?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<StaffCharacterMediaArgs>
  >;
  characters?: Resolver<
    Maybe<ResolversTypes["CharacterConnection"]>,
    ParentType,
    ContextType,
    Partial<StaffCharactersArgs>
  >;
  dateOfBirth?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  dateOfDeath?: Resolver<
    Maybe<ResolversTypes["FuzzyDate"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<StaffDescriptionArgs>
  >;
  favourites?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  homeTown?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  image?: Resolver<
    Maybe<ResolversTypes["StaffImage"]>,
    ParentType,
    ContextType
  >;
  isFavourite?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isFavouriteBlocked?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  language?: Resolver<
    Maybe<ResolversTypes["StaffLanguage"]>,
    ParentType,
    ContextType
  >;
  languageV2?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  modNotes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["StaffName"]>, ParentType, ContextType>;
  primaryOccupations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  staffMedia?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<StaffStaffMediaArgs>
  >;
  submissionNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  submissionStatus?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  submitter?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  yearsActive?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Int"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffConnection"] = ResolversParentTypes["StaffConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Staff"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffEdge"] = ResolversParentTypes["StaffEdge"]
> = ResolversObject<{
  favouriteOrder?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffImage"] = ResolversParentTypes["StaffImage"]
> = ResolversObject<{
  large?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffName"] = ResolversParentTypes["StaffName"]
> = ResolversObject<{
  alternative?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  first?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  full?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  middle?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  native?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userPreferred?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffRoleTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffRoleType"] = ResolversParentTypes["StaffRoleType"]
> = ResolversObject<{
  dubGroup?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  roleNotes?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  voiceActor?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffStats"] = ResolversParentTypes["StaffStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StaffSubmissionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StaffSubmission"] = ResolversParentTypes["StaffSubmission"]
> = ResolversObject<{
  assignee?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  locked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["SubmissionStatus"]>,
    ParentType,
    ContextType
  >;
  submission?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  submitter?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusDistributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StatusDistribution"] = ResolversParentTypes["StatusDistribution"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["MediaListStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StudioResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Studio"] = ResolversParentTypes["Studio"]
> = ResolversObject<{
  favourites?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isAnimationStudio?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  isFavourite?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  media?: Resolver<
    Maybe<ResolversTypes["MediaConnection"]>,
    ParentType,
    ContextType,
    Partial<StudioMediaArgs>
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StudioConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StudioConnection"] = ResolversParentTypes["StudioConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StudioEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Studio"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<
    Maybe<ResolversTypes["PageInfo"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StudioEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StudioEdge"] = ResolversParentTypes["StudioEdge"]
> = ResolversObject<{
  favouriteOrder?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  isMain?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Studio"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StudioStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StudioStats"] = ResolversParentTypes["StudioStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes["Studio"]>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TagStats"] = ResolversParentTypes["TagStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes["MediaTag"]>, ParentType, ContextType>;
  timeWatched?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TextActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TextActivity"] = ResolversParentTypes["TextActivity"]
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isPinned?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSubscribed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  replies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ActivityReply"]>>>,
    ParentType,
    ContextType
  >;
  replyCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  text?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<TextActivityTextArgs>
  >;
  type?: Resolver<
    Maybe<ResolversTypes["ActivityType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Thread"] = ResolversParentTypes["Thread"]
> = ResolversObject<{
  body?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<ThreadBodyArgs>
  >;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ThreadCategory"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSticky?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isSubscribed?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  mediaCategories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Media"]>>>,
    ParentType,
    ContextType
  >;
  repliedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  replyCommentId?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  replyCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  replyUser?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  replyUserId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  viewCount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadCategory"] = ResolversParentTypes["ThreadCategory"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadComment"] = ResolversParentTypes["ThreadComment"]
> = ResolversObject<{
  childComments?: Resolver<
    Maybe<ResolversTypes["Json"]>,
    ParentType,
    ContextType
  >;
  comment?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<ThreadCommentCommentArgs>
  >;
  createdAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isLiked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  isLocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  likeCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  likes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCommentLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadCommentLikeNotification"] = ResolversParentTypes["ThreadCommentLikeNotification"]
> = ResolversObject<{
  comment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType
  >;
  commentId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCommentMentionNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadCommentMentionNotification"] = ResolversParentTypes["ThreadCommentMentionNotification"]
> = ResolversObject<{
  comment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType
  >;
  commentId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCommentReplyNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadCommentReplyNotification"] = ResolversParentTypes["ThreadCommentReplyNotification"]
> = ResolversObject<{
  comment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType
  >;
  commentId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadCommentSubscribedNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadCommentSubscribedNotification"] = ResolversParentTypes["ThreadCommentSubscribedNotification"]
> = ResolversObject<{
  comment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType
  >;
  commentId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThreadLikeNotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ThreadLikeNotification"] = ResolversParentTypes["ThreadLikeNotification"]
> = ResolversObject<{
  comment?: Resolver<
    Maybe<ResolversTypes["ThreadComment"]>,
    ParentType,
    ContextType
  >;
  context?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  thread?: Resolver<Maybe<ResolversTypes["Thread"]>, ParentType, ContextType>;
  threadId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<
    Maybe<ResolversTypes["NotificationType"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  about?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<UserAboutArgs>
  >;
  avatar?: Resolver<
    Maybe<ResolversTypes["UserAvatar"]>,
    ParentType,
    ContextType
  >;
  bannerImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bans?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  donatorBadge?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  donatorTier?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  favourites?: Resolver<
    Maybe<ResolversTypes["Favourites"]>,
    ParentType,
    ContextType,
    Partial<UserFavouritesArgs>
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isBlocked?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isFollower?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isFollowing?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  mediaListOptions?: Resolver<
    Maybe<ResolversTypes["MediaListOptions"]>,
    ParentType,
    ContextType
  >;
  moderatorRoles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ModRole"]>>>,
    ParentType,
    ContextType
  >;
  moderatorStatus?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  options?: Resolver<
    Maybe<ResolversTypes["UserOptions"]>,
    ParentType,
    ContextType
  >;
  previousNames?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserPreviousName"]>>>,
    ParentType,
    ContextType
  >;
  siteUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  statistics?: Resolver<
    Maybe<ResolversTypes["UserStatisticTypes"]>,
    ParentType,
    ContextType
  >;
  stats?: Resolver<Maybe<ResolversTypes["UserStats"]>, ParentType, ContextType>;
  unreadNotificationCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserActivityHistoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserActivityHistory"] = ResolversParentTypes["UserActivityHistory"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAvatarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAvatar"] = ResolversParentTypes["UserAvatar"]
> = ResolversObject<{
  large?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountryStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserCountryStatistic"] = ResolversParentTypes["UserCountryStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  country?: Resolver<
    Maybe<ResolversTypes["CountryCode"]>,
    ParentType,
    ContextType
  >;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserFormatStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserFormatStatistic"] = ResolversParentTypes["UserFormatStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  format?: Resolver<
    Maybe<ResolversTypes["MediaFormat"]>,
    ParentType,
    ContextType
  >;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGenreStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserGenreStatistic"] = ResolversParentTypes["UserGenreStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLengthStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserLengthStatistic"] = ResolversParentTypes["UserLengthStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserModDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserModData"] = ResolversParentTypes["UserModData"]
> = ResolversObject<{
  alts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  bans?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  counts?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  ip?: Resolver<Maybe<ResolversTypes["Json"]>, ParentType, ContextType>;
  privacy?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserOptionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserOptions"] = ResolversParentTypes["UserOptions"]
> = ResolversObject<{
  activityMergeTime?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  airingNotifications?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  disabledListActivity?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ListActivityOption"]>>>,
    ParentType,
    ContextType
  >;
  displayAdultContent?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  notificationOptions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["NotificationOption"]>>>,
    ParentType,
    ContextType
  >;
  profileColor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  restrictMessagesToFollowing?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  staffNameLanguage?: Resolver<
    Maybe<ResolversTypes["UserStaffNameLanguage"]>,
    ParentType,
    ContextType
  >;
  timezone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  titleLanguage?: Resolver<
    Maybe<ResolversTypes["UserTitleLanguage"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserPreviousNameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserPreviousName"] = ResolversParentTypes["UserPreviousName"]
> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserReleaseYearStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserReleaseYearStatistic"] = ResolversParentTypes["UserReleaseYearStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserScoreStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserScoreStatistic"] = ResolversParentTypes["UserScoreStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStaffStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStaffStatistic"] = ResolversParentTypes["UserStaffStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  staff?: Resolver<Maybe<ResolversTypes["Staff"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStartYearStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStartYearStatistic"] = ResolversParentTypes["UserStartYearStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startYear?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatisticTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStatisticTypes"] = ResolversParentTypes["UserStatisticTypes"]
> = ResolversObject<{
  anime?: Resolver<
    Maybe<ResolversTypes["UserStatistics"]>,
    ParentType,
    ContextType
  >;
  manga?: Resolver<
    Maybe<ResolversTypes["UserStatistics"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatisticsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStatistics"] = ResolversParentTypes["UserStatistics"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  countries?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserCountryStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsCountriesArgs>
  >;
  episodesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  formats?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserFormatStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsFormatsArgs>
  >;
  genres?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserGenreStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsGenresArgs>
  >;
  lengths?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserLengthStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsLengthsArgs>
  >;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  releaseYears?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserReleaseYearStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsReleaseYearsArgs>
  >;
  scores?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserScoreStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsScoresArgs>
  >;
  staff?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserStaffStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsStaffArgs>
  >;
  standardDeviation?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  startYears?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserStartYearStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsStartYearsArgs>
  >;
  statuses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserStatusStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsStatusesArgs>
  >;
  studios?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserStudioStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsStudiosArgs>
  >;
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserTagStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsTagsArgs>
  >;
  voiceActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserVoiceActorStatistic"]>>>,
    ParentType,
    ContextType,
    Partial<UserStatisticsVoiceActorsArgs>
  >;
  volumesRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStats"] = ResolversParentTypes["UserStats"]
> = ResolversObject<{
  activityHistory?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserActivityHistory"]>>>,
    ParentType,
    ContextType
  >;
  animeListScores?: Resolver<
    Maybe<ResolversTypes["ListScoreStats"]>,
    ParentType,
    ContextType
  >;
  animeScoreDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ScoreDistribution"]>>>,
    ParentType,
    ContextType
  >;
  animeStatusDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StatusDistribution"]>>>,
    ParentType,
    ContextType
  >;
  chaptersRead?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  favouredActors?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredFormats?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["FormatStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredGenres?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["GenreStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredGenresOverview?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["GenreStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredStaff?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StaffStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredStudios?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StudioStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredTags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["TagStats"]>>>,
    ParentType,
    ContextType
  >;
  favouredYears?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["YearStats"]>>>,
    ParentType,
    ContextType
  >;
  mangaListScores?: Resolver<
    Maybe<ResolversTypes["ListScoreStats"]>,
    ParentType,
    ContextType
  >;
  mangaScoreDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ScoreDistribution"]>>>,
    ParentType,
    ContextType
  >;
  mangaStatusDistribution?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["StatusDistribution"]>>>,
    ParentType,
    ContextType
  >;
  watchedTime?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatusStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStatusStatistic"] = ResolversParentTypes["UserStatusStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["MediaListStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStudioStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserStudioStatistic"] = ResolversParentTypes["UserStudioStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  studio?: Resolver<Maybe<ResolversTypes["Studio"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTagStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserTagStatistic"] = ResolversParentTypes["UserTagStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes["MediaTag"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserVoiceActorStatisticResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserVoiceActorStatistic"] = ResolversParentTypes["UserVoiceActorStatistic"]
> = ResolversObject<{
  chaptersRead?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  characterIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  count?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  meanScore?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  mediaIds?: Resolver<
    Array<Maybe<ResolversTypes["Int"]>>,
    ParentType,
    ContextType
  >;
  minutesWatched?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  voiceActor?: Resolver<
    Maybe<ResolversTypes["Staff"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type YearStatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["YearStats"] = ResolversParentTypes["YearStats"]
> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  meanScore?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  ActivityLikeNotification?: ActivityLikeNotificationResolvers<ContextType>;
  ActivityMentionNotification?: ActivityMentionNotificationResolvers<ContextType>;
  ActivityMessageNotification?: ActivityMessageNotificationResolvers<ContextType>;
  ActivityReply?: ActivityReplyResolvers<ContextType>;
  ActivityReplyLikeNotification?: ActivityReplyLikeNotificationResolvers<ContextType>;
  ActivityReplyNotification?: ActivityReplyNotificationResolvers<ContextType>;
  ActivityReplySubscribedNotification?: ActivityReplySubscribedNotificationResolvers<ContextType>;
  ActivityUnion?: ActivityUnionResolvers<ContextType>;
  AiringNotification?: AiringNotificationResolvers<ContextType>;
  AiringProgression?: AiringProgressionResolvers<ContextType>;
  AiringSchedule?: AiringScheduleResolvers<ContextType>;
  AiringScheduleConnection?: AiringScheduleConnectionResolvers<ContextType>;
  AiringScheduleEdge?: AiringScheduleEdgeResolvers<ContextType>;
  AniChartUser?: AniChartUserResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  CharacterConnection?: CharacterConnectionResolvers<ContextType>;
  CharacterEdge?: CharacterEdgeResolvers<ContextType>;
  CharacterImage?: CharacterImageResolvers<ContextType>;
  CharacterName?: CharacterNameResolvers<ContextType>;
  CharacterSubmission?: CharacterSubmissionResolvers<ContextType>;
  CharacterSubmissionConnection?: CharacterSubmissionConnectionResolvers<ContextType>;
  CharacterSubmissionEdge?: CharacterSubmissionEdgeResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  Deleted?: DeletedResolvers<ContextType>;
  Favourites?: FavouritesResolvers<ContextType>;
  FollowingNotification?: FollowingNotificationResolvers<ContextType>;
  FormatStats?: FormatStatsResolvers<ContextType>;
  FuzzyDate?: FuzzyDateResolvers<ContextType>;
  FuzzyDateInt?: GraphQLScalarType;
  GenreStats?: GenreStatsResolvers<ContextType>;
  InternalPage?: InternalPageResolvers<ContextType>;
  Json?: GraphQLScalarType;
  LikeableUnion?: LikeableUnionResolvers<ContextType>;
  ListActivity?: ListActivityResolvers<ContextType>;
  ListActivityOption?: ListActivityOptionResolvers<ContextType>;
  ListScoreStats?: ListScoreStatsResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaCharacter?: MediaCharacterResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaCoverImage?: MediaCoverImageResolvers<ContextType>;
  MediaDataChangeNotification?: MediaDataChangeNotificationResolvers<ContextType>;
  MediaDeletionNotification?: MediaDeletionNotificationResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  MediaExternalLink?: MediaExternalLinkResolvers<ContextType>;
  MediaList?: MediaListResolvers<ContextType>;
  MediaListCollection?: MediaListCollectionResolvers<ContextType>;
  MediaListGroup?: MediaListGroupResolvers<ContextType>;
  MediaListOptions?: MediaListOptionsResolvers<ContextType>;
  MediaListTypeOptions?: MediaListTypeOptionsResolvers<ContextType>;
  MediaMergeNotification?: MediaMergeNotificationResolvers<ContextType>;
  MediaRank?: MediaRankResolvers<ContextType>;
  MediaStats?: MediaStatsResolvers<ContextType>;
  MediaStreamingEpisode?: MediaStreamingEpisodeResolvers<ContextType>;
  MediaSubmission?: MediaSubmissionResolvers<ContextType>;
  MediaSubmissionComparison?: MediaSubmissionComparisonResolvers<ContextType>;
  MediaSubmissionEdge?: MediaSubmissionEdgeResolvers<ContextType>;
  MediaTag?: MediaTagResolvers<ContextType>;
  MediaTitle?: MediaTitleResolvers<ContextType>;
  MediaTrailer?: MediaTrailerResolvers<ContextType>;
  MediaTrend?: MediaTrendResolvers<ContextType>;
  MediaTrendConnection?: MediaTrendConnectionResolvers<ContextType>;
  MediaTrendEdge?: MediaTrendEdgeResolvers<ContextType>;
  MessageActivity?: MessageActivityResolvers<ContextType>;
  ModAction?: ModActionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NotificationOption?: NotificationOptionResolvers<ContextType>;
  NotificationUnion?: NotificationUnionResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  ParsedMarkdown?: ParsedMarkdownResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Recommendation?: RecommendationResolvers<ContextType>;
  RecommendationConnection?: RecommendationConnectionResolvers<ContextType>;
  RecommendationEdge?: RecommendationEdgeResolvers<ContextType>;
  RelatedMediaAdditionNotification?: RelatedMediaAdditionNotificationResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewConnection?: ReviewConnectionResolvers<ContextType>;
  ReviewEdge?: ReviewEdgeResolvers<ContextType>;
  RevisionHistory?: RevisionHistoryResolvers<ContextType>;
  ScoreDistribution?: ScoreDistributionResolvers<ContextType>;
  SiteStatistics?: SiteStatisticsResolvers<ContextType>;
  SiteTrend?: SiteTrendResolvers<ContextType>;
  SiteTrendConnection?: SiteTrendConnectionResolvers<ContextType>;
  SiteTrendEdge?: SiteTrendEdgeResolvers<ContextType>;
  Staff?: StaffResolvers<ContextType>;
  StaffConnection?: StaffConnectionResolvers<ContextType>;
  StaffEdge?: StaffEdgeResolvers<ContextType>;
  StaffImage?: StaffImageResolvers<ContextType>;
  StaffName?: StaffNameResolvers<ContextType>;
  StaffRoleType?: StaffRoleTypeResolvers<ContextType>;
  StaffStats?: StaffStatsResolvers<ContextType>;
  StaffSubmission?: StaffSubmissionResolvers<ContextType>;
  StatusDistribution?: StatusDistributionResolvers<ContextType>;
  Studio?: StudioResolvers<ContextType>;
  StudioConnection?: StudioConnectionResolvers<ContextType>;
  StudioEdge?: StudioEdgeResolvers<ContextType>;
  StudioStats?: StudioStatsResolvers<ContextType>;
  TagStats?: TagStatsResolvers<ContextType>;
  TextActivity?: TextActivityResolvers<ContextType>;
  Thread?: ThreadResolvers<ContextType>;
  ThreadCategory?: ThreadCategoryResolvers<ContextType>;
  ThreadComment?: ThreadCommentResolvers<ContextType>;
  ThreadCommentLikeNotification?: ThreadCommentLikeNotificationResolvers<ContextType>;
  ThreadCommentMentionNotification?: ThreadCommentMentionNotificationResolvers<ContextType>;
  ThreadCommentReplyNotification?: ThreadCommentReplyNotificationResolvers<ContextType>;
  ThreadCommentSubscribedNotification?: ThreadCommentSubscribedNotificationResolvers<ContextType>;
  ThreadLikeNotification?: ThreadLikeNotificationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserActivityHistory?: UserActivityHistoryResolvers<ContextType>;
  UserAvatar?: UserAvatarResolvers<ContextType>;
  UserCountryStatistic?: UserCountryStatisticResolvers<ContextType>;
  UserFormatStatistic?: UserFormatStatisticResolvers<ContextType>;
  UserGenreStatistic?: UserGenreStatisticResolvers<ContextType>;
  UserLengthStatistic?: UserLengthStatisticResolvers<ContextType>;
  UserModData?: UserModDataResolvers<ContextType>;
  UserOptions?: UserOptionsResolvers<ContextType>;
  UserPreviousName?: UserPreviousNameResolvers<ContextType>;
  UserReleaseYearStatistic?: UserReleaseYearStatisticResolvers<ContextType>;
  UserScoreStatistic?: UserScoreStatisticResolvers<ContextType>;
  UserStaffStatistic?: UserStaffStatisticResolvers<ContextType>;
  UserStartYearStatistic?: UserStartYearStatisticResolvers<ContextType>;
  UserStatisticTypes?: UserStatisticTypesResolvers<ContextType>;
  UserStatistics?: UserStatisticsResolvers<ContextType>;
  UserStats?: UserStatsResolvers<ContextType>;
  UserStatusStatistic?: UserStatusStatisticResolvers<ContextType>;
  UserStudioStatistic?: UserStudioStatisticResolvers<ContextType>;
  UserTagStatistic?: UserTagStatisticResolvers<ContextType>;
  UserVoiceActorStatistic?: UserVoiceActorStatisticResolvers<ContextType>;
  YearStats?: YearStatsResolvers<ContextType>;
}>;
