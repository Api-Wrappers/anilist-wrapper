export interface ISearch {
  data: Data;
}

export interface Data {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

export interface Media {
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
