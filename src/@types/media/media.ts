/**
 * Represents the season the media was released in.
 * @description Months December to February are considered winter, March to May are considered spring, June to August are considered summer, and September to November are considered fall.
 */
export enum MediaSeason {
  /**
   * Months December to February.
   */
  WINTER = 'WINTER',

  /**
   * Months March to May.
   */
  SPRING = 'SPRING',

  /**
   * Months June to August.
   */
  SUMMER = 'SUMMER',

  /**
   * Months September to November.
   */
  FALL = 'FALL',
}

/**
 * Represents the format the media was released in.
 * @description The format could be Japanese Anime or Asian comic.
 */
export enum MediaType {
  /**
   * Japanese Anime.
   */
  ANIME = 'ANIME',

  /**
   * Asian comic.
   */
  MANGA = 'MANGA',
}

/**
 * Represents the format the media was released in.
 * @description This includes various formats such as TV broadcasts, movies, manga, novels, etc.
 */
export enum MediaFormat {
  /**
   * Anime broadcast on television.
   */
  TV = 'TV',

  /**
   * Anime which are under 15 minutes in length and broadcast on television.
   */
  TV_SHORT = 'TV_SHORT',

  /**
   * Anime movies with a theatrical release.
   */
  MOVIE = 'MOVIE',

  /**
   * Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc.
   */
  SPECIAL = 'SPECIAL',

  /**
   * (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast.
   */
  OVA = 'OVA',

  /**
   * (Original Net Animation) Anime that have been originally released online or are only available through streaming services.
   */
  ONA = 'ONA',

  /**
   * Short anime released as a music video.
   */
  MUSIC = 'MUSIC',

  /**
   * Professionally published manga with more than one chapter.
   */
  MANGA = 'MANGA',

  /**
   * Written books released as a series of light novels.
   */
  NOVEL = 'NOVEL',

  /**
   * Manga with just one chapter.
   */
  ONE_SHOT = 'ONE_SHOT',
}

/**
 * Represents the current releasing status of the media.
 * @description Possible statuses of media releases.
 */
export enum MediaStatus {
  /**
   * Has completed and is no longer being released.
   */
  FINISHED = 'FINISHED',

  /**
   * Currently releasing.
   */
  RELEASING = 'RELEASING',

  /**
   * To be released at a later date.
   */
  NOT_YET_RELEASED = 'NOT_YET_RELEASED',

  /**
   * Ended before the work could be finished.
   */
  CANCELLED = 'CANCELLED',

  /**
   * Version 2 only. Is currently paused from releasing and will resume at a later date.
   */
  HIATUS = 'HIATUS',
}

/**
 * @description Source type the media was adapted from.
 */
export enum MediaSource {
  /**
   * An original production not based on another work.
   */
  ORIGINAL = 'ORIGINAL',

  /**
   * Asian comic book.
   */
  MANGA = 'MANGA',

  /**
   * Written work published in volumes.
   */
  LIGHT_NOVEL = 'LIGHT_NOVEL',

  /**
   * Video game driven primarily by text and narrative.
   */
  VISUAL_NOVEL = 'VISUAL_NOVEL',

  /**
   * Video game.
   */
  VIDEO_GAME = 'VIDEO_GAME',

  /**
   * Other.
   */
  OTHER = 'OTHER',

  /**
   * Version 2+ only. Written works not published in volumes.
   */
  NOVEL = 'NOVEL',

  /**
   * Version 2+ only. Self-published works.
   */
  DOUJINSHI = 'DOUJINSHI',

  /**
   * Version 2+ only. Japanese Anime.
   */
  ANIME = 'ANIME',

  /**
   * Version 3 only. Written works published online.
   */
  WEB_NOVEL = 'WEB_NOVEL',

  /**
   * Version 3 only. Live action media such as movies or TV show.
   */
  LIVE_ACTION = 'LIVE_ACTION',

  /**
   * Version 3 only. Games excluding video games.
   */
  GAME = 'GAME',

  /**
   * Version 3 only. Comics excluding manga.
   */
  COMIC = 'COMIC',

  /**
   * Version 3 only. Multimedia project.
   */
  MULTIMEDIA_PROJECT = 'MULTIMEDIA_PROJECT',

  /**
   * Version 3 only. Picture book.
   */
  PICTURE_BOOK = 'PICTURE_BOOK',
}

/**
 * Media sort enums
 * @description Enums for sorting media.
 */
export enum MediaSort {
  ID = 'ID',
  ID_DESC = 'ID_DESC',
  TITLE_ROMAJI = 'TITLE_ROMAJI',
  TITLE_ROMAJI_DESC = 'TITLE_ROMAJI_DESC',
  TITLE_ENGLISH = 'TITLE_ENGLISH',
  TITLE_ENGLISH_DESC = 'TITLE_ENGLISH_DESC',
  TITLE_NATIVE = 'TITLE_NATIVE',
  TITLE_NATIVE_DESC = 'TITLE_NATIVE_DESC',
  TYPE = 'TYPE',
  TYPE_DESC = 'TYPE_DESC',
  FORMAT = 'FORMAT',
  FORMAT_DESC = 'FORMAT_DESC',
  START_DATE = 'START_DATE',
  START_DATE_DESC = 'START_DATE_DESC',
  END_DATE = 'END_DATE',
  END_DATE_DESC = 'END_DATE_DESC',
  SCORE = 'SCORE',
  SCORE_DESC = 'SCORE_DESC',
  POPULARITY = 'POPULARITY',
  POPULARITY_DESC = 'POPULARITY_DESC',
  TRENDING = 'TRENDING',
  TRENDING_DESC = 'TRENDING_DESC',
  EPISODES = 'EPISODES',
  EPISODES_DESC = 'EPISODES_DESC',
  DURATION = 'DURATION',
  DURATION_DESC = 'DURATION_DESC',
  STATUS = 'STATUS',
  STATUS_DESC = 'STATUS_DESC',
  CHAPTERS = 'CHAPTERS',
  CHAPTERS_DESC = 'CHAPTERS_DESC',
  VOLUMES = 'VOLUMES',
  VOLUMES_DESC = 'VOLUMES_DESC',
  UPDATED_AT = 'UPDATED_AT',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC',
  SEARCH_MATCH = 'SEARCH_MATCH',
  FAVOURITES = 'FAVOURITES',
  FAVOURITES_DESC = 'FAVOURITES_DESC',
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export type MediaListStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING';

export enum MediaGenre {
  ACTION = 'Action',
  ADVENTURE = 'Adventure',
  CARS = 'Cars',
  COMEDY = 'Comedy',
  DRAMA = 'Drama',
  FANTASY = 'Fantasy',
  HORROR = 'Horror',
  MAHOU_SHOUJO = 'Mahou Shoujo',
  MECHA = 'Mecha',
  MUSIC = 'Music',
  MYSTERY = 'Mystery',
  PSYCHOLOGICAL = 'Psychological',
  ROMANCE = 'Romance',
  SCI_FI = 'Sci-Fi',
  SLICE_OF_LIFE = 'Slice of Life',
  SPORTS = 'Sports',
  SUPERNATURAL = 'Supernatural',
  THRILLER = 'Thriller',
}

export interface MediaTag {
  id: number; // The id of the tag
  name: string; // The name of the tag
  description?: string; // A general description of the tag
  category?: string; // The categories of tags this tag belongs to
  rank?: number; // The relevance ranking of the tag out of the 100 for this media
  isGeneralSpoiler?: boolean; // If the tag could be a spoiler for any media
  isMediaSpoiler?: boolean; // If the tag is a spoiler for this media
  isAdult?: boolean; // If the tag is only for adult 18+ media
  userId?: number; // The user who submitted the tag
}
