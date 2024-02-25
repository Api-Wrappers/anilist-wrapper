import { MediaListStatus } from './media';

export interface ErrorResponse {
  status_code: number;
  status_message: string;
  success: boolean;
}

export interface RequestOptions {
  timeout?: number;
}

export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ReqOptions extends RequestInit {
  method: string;
  headers: {
    'Content-Type': string;
    Accept: string;
    Authorization?: string;
  };
  signal?: AbortSignal;
  body: string;
}

export type FuzzyDate = {
  year: number;
  month: number;
  day: number;
};

export interface CharacterName {
  first: string; // The given name
  middle?: string; // The middle name
  last: string; // The surname
  full: string; // The first and last name
  native: string; // The full name in their native language
  alternative?: string[]; // Other names the character might be referred to as
  alternativeSpoiler?: string[]; // Other names the character might be referred to as but are spoilers
  userPreferred: string; // The currently authenticated user's preferred name language. Default romaji for non-authenticated
}

export type Name = Without<CharacterName, 'alternativeSpoiler'>;

export interface Trailer {
  id: number; // The id of the trailer
  site: string; // The site of the trailer (YouTube, Dailymotion, Vimeo, etc.)
  thumbnail: string; // The thumbnail of the trailer
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface ShowMutations {
  mediaId: number;
  status?: MediaListStatus;
  score?: number;
  scoreRaw?: number;
  progress?: number;
  progressVolumes?: number;
  repeat?: number;
  priority?: number;
  private?: boolean;
  notes?: string;
  hiddenFromStatusLists?: boolean;
  customLists?: Array<string>;
  advancedScores?: Array<number>;
  startedAt?: FuzzyDate;
  completedAt?: FuzzyDate;
}

export const ShowMutationsTypes = {
  mediaId: 'Int',
  status: 'MediaListStatus',
  score: 'Float',
  scoreRaw: 'Int',
  progress: 'Int',
  progressVolumes: 'Int',
  repeat: 'Int',
  priority: 'Int',
  private: 'Boolean',
  notes: 'String',
  hiddenFromStatusLists: 'Boolean',
  customLists: '[String]',
  advancedScores: '[Float]',
  startedAt: 'FuzzyDate',
  completedAt: 'FuzzyDate',
};

export interface Reply {
  id: number;
  text: string;
  likeCount: number;
}
