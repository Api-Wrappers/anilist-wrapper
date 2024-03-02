import {
  CoverImage,
  MediaFormat,
  MediaGenre,
  MediaSeason,
  MediaSort,
  MediaStatus,
  MediaTag,
  MediaTitle,
} from './media';
import { FuzzyDate, PageInfo } from './types';

export interface AdvancedSearchOptions {
  search?: string;
  page: number;
  size: number;
  format?: `${MediaFormat}`;
  sort?: `${MediaSort}`[];
  genres?: `${MediaGenre}`[];
  id?: string | number;
  year?: number;
  status?: `${MediaStatus}`;
  season?: `${MediaSeason}`;
}

export interface SearchRes<T extends string, K extends object> {
  data: SearchData<T, K>;
}

export interface Page {
  pageInfo: PageInfo;
}

export type Data<T extends string, K extends object> = Record<T, K[]>;

export interface SearchData<T extends string, K extends object> {
  Page: Page & Data<T, K>;
}

export interface SearchManga {
  id: number;
  idMal: number | null;
  status: MediaStatus;
  title: MediaTitle;
  bannerImage: string | null;
  popularity: 379;
  coverImage: CoverImage;
  episodes: null;
  format: 'MANGA';
  season: MediaSeason | null;
  description: string | null;
  seasonYear: null;
  chapters: number;
  volumes: number;
  averageScore: number;
  genres: MediaGenre[];
  nextAiringEpisode: null;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  tags: string[];
  duration: null;
  meanScore: string;
}

export interface SearchAnime {
  id: number;
  idMal: number | null;
  status: MediaStatus;
  title: MediaTitle;
  bannerImage: string | null;
  popularity: number;
  coverImage: CoverImage;
  episodes: number;
  format: MediaFormat;
  season: MediaStatus;
  description: string | null;
  seasonYear: number | null;
  chapters: null;
  volumes: null;
  averageScore: number | null;
  genres: MediaGenre[];
  nextAiringEpisode: null;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  tags: MediaTag[];
  duration: number;
  meanScore: number;
}

export interface SearchStaff {
  id: number;
  name: {
    english: string;
  };
}

export interface SearchUser {
  id: number;
  name: string;
}

export interface SearchCharacter {
  id: number;
  image: Pick<CoverImage, 'large' | 'medium'>;
  age: number | null;
  gender: string;
  name: {
    english: string;
  };
}

export interface SearchStudio {
  id: number;
  name: string;
  isAnimationStudio: boolean;
  siteUrl: string | null;
}
