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
