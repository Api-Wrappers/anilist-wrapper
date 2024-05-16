import { CoverImage, MediaListStatus, MediaNextAiringEpisode, MediaTitle } from '../media';
import { FuzzyDate } from '../types';

interface Media {
  averageScore: number;
  meanScore: number;
  id: number;
  idMal: number;
  title: MediaTitle;
  status: string;
  type: string;
  seasonYear: number;
  coverImage: CoverImage;
  bannerImage: string;
  episodes: number;
  nextAiringEpisode: MediaNextAiringEpisode;
  description: string;
  format: string;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  duration: number;
  genres: string[];
  synonyms: string[];
  tags: { name: string; isMediaSpoiler: boolean }[];
  isFavourite: boolean;
  isAdult: boolean;
  siteUrl: string;
}

interface Entry {
  id: number;
  media: Media;
  status: string;
  score: number;
  progress: number;
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

interface List {
  name: string;
  isCustomList: boolean;
  isSplitCompletedList: boolean;
  status: MediaListStatus;
  entries: Entry[];
}

interface MediaListCollection {
  lists: List[];
}

export interface AnimeListResponse {
  MediaListCollection: MediaListCollection;
}
