export interface ISearchManga {
  data: ISearchMangaData;
}

export interface ISearchMangaData {
  Page: ISearchMangaPage;
}

export interface ISearchMangaPage {
  pageInfo: PageInfo;
  media: ISearchMangaMedia[];
}

export interface ISearchMangaMedia {
  id: number;
  idMal: number | null;
  status: Status;
  title: Title;
  bannerImage: null | string;
  coverImage: CoverImage;
  episodes: null;
  season: null;
  popularity: number;
  description: string;
  format: string;
  seasonYear: null;
  genres: string[];
  averageScore: number;
  countryOfOrigin: string;
  nextAiringEpisode: null;
}

export interface ISearchAnime {
  data: ISearchAnimeData;
}

export interface ISearchAnimeData {
  Page: ISearchAnimePage;
}

export interface ISearchAnimePage {
  pageInfo: PageInfo;
  media: ISearchAnimeMedia[];
}

export interface ISearchAnimeMedia {
  id: number;
  idMal: number;
  status: Status;
  title: Title;
  bannerImage: null | string;
  popularity: number;
  coverImage: CoverImage;
  episodes: number | null;
  format: string;
  season: null | string;
  description: string;
  seasonYear: number | null;
  chapters: null;
  volumes: null;
  averageScore: number | null;
  genres: string[];
  nextAiringEpisode: NextAiringEpisode | null;
  startDate: EndDateClass;
  endDate: EndDateClass;
  tags: Tag[];
  duration: number | null;
  meanScore: number | null;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface EndDateClass {
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface NextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export enum Status {
  Finished = "FINISHED",
  NotYetReleased = "NOT_YET_RELEASED",
}

export interface Tag {
  id: number;
  name: string;
  category: string;
  description: string;
}

export interface Title {
  userPreferred: string;
  romaji: string;
  english: null | string;
  native: string;
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface AdvancedSearchOptions {
  search?: string;
  page: number;
  size: number;
  format?: string;
  sort?: string[];
  genres?: string[];
  id?: string | number;
  year?: number;
  status?: string;
  season?: string;
}
