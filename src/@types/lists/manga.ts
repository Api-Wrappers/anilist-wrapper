import { CoverImage, MediaListStatus, MediaTitle, MediaType } from '../media';
import { FuzzyDate } from '../types';

interface MangaMedia {
  averageScore: number;
  meanScore: number;
  id: number;
  idMal: number;
  title: MediaTitle;
  volumes: number;
  chapters: number;
  description: string;
  format: string;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  genres: string[];
  synonyms: string[];
  tags: { name: string; isMediaSpoiler: boolean }[];
  type: string;
  coverImage: CoverImage;
  bannerImage: string;
  isFavourite: boolean;
  isAdult: boolean;
  siteUrl: string;
}

interface MangaEntry {
  id: number;
  media: MangaMedia;
  status: string;
  score: number;
  progress: number;
  progressVolumes: number;
  repeat: number;
  priority: number;
  private: boolean;
  notes: string;
  hiddenFromStatusLists: boolean;
  advancedScores: string[];
  startedAt: FuzzyDate;
  completedAt: FuzzyDate;
  updatedAt: string;
  createdAt: string;
}

interface MangaList {
  name: string;
  isCustomList: boolean;
  isSplitCompletedList: boolean;
  status: string;
  entries: MangaEntry[];
}

interface MangaListCollection {
  lists: MangaList[];
}

export interface MangaListQueryVariables {
  name: string;
  type: MediaType;
  status: MediaListStatus;
}

export interface MangaListResponse {
  MediaListCollection: MangaListCollection;
}
