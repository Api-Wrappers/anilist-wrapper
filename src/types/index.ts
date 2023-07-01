export interface DataRes {
  data: Data;
}

export interface Data {
  Page: Result;
}

export interface Result {
  pageInfo: PageInfo;
  media: AnimeResult[] | MangaResult[];
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface AnimeResult {
  id: number;
  idMal: number;
  status: string;
  title: Title;
  bannerImage: string;
  popularity: number;
  coverImage: CoverImage;
  episodes: number;
  format: string;
  season: string;
  description: string;
  seasonYear: number;
  chapters: any;
  volumes: any;
  averageScore: number;
  genres: string[];
  nextAiringEpisode: any;
}

export interface MangaResult {
  id: number;
  idMal: number;
  status: string;
  title: Title;
  bannerImage: any;
  popularity: number;
  coverImage: CoverImage;
  episodes: any;
  format: string;
  season: any;
  description: string;
  seasonYear: any;
  chapters: any;
  volumes: number;
  averageScore: any;
  genres: string[];
  nextAiringEpisode: any;
}

export interface Title {
  userPreferred: string;
  romaji: string;
  english: any;
  native: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface RequestOptions {
  timeout?: number;
}

// Mutations

type MediaListStatus =
  | "CURRENT"
  | "PLANNING"
  | "COMPLETED"
  | "DROPPED"
  | "PAUSED"
  | "REPEATING";

type FuzzyDateInput = {
  year: number;
  month: number;
  day: number;
};

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
  startedAt?: FuzzyDateInput;
  completedAt?: FuzzyDateInput;
}

export const ShowMutationsTypes = {
  mediaId: "Int",
  status: "MediaListStatus",
  score: "Float",
  scoreRaw: "Int",
  progress: "Int",
  progressVolumes: "Int",
  repeat: "Int",
  priority: "Int",
  private: "Boolean",
  notes: "String",
  hiddenFromStatusLists: "Boolean",
  customLists: "[String]",
  advancedScores: "[Float]",
  startedAt: "FuzzyDateInput",
  completedAt: "FuzzyDateInput",
};
