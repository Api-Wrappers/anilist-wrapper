import { CharacterName, FuzzyDate, Name, Trailer } from '../types';
import { CoverImage, MediaTag, MediaType } from './media';

export type MediaStudioEdge = {
  isMain: boolean;
  node: {
    id: number;
    name: string;
  };
};

export type MediaTitle = {
  english: null | string;
  native: string;
  romaji: string;
  userPreferred?: string;
};

export type MediaRanking = {
  rank: number;
  type: string;
  context: string;
  year: number;
  season: string;
};

export type MediaListEntry = {
  progress: number;
  status: string;
  score: number;
  id: number;
  startedAt: FuzzyDate;
  completedAt: FuzzyDate;
  userId: number;
  mediaId: number;
  updatedAt: string;
  createdAt: string;
};

export type MediaStaff = {
  id: number;
  name: Name;
  languageV2: string;
  image: Pick<CoverImage, 'large' | 'medium'>;
  description: string;
  primaryOccupations: string[];
  gender: string;
  dateOfBirth: FuzzyDate;
  dateOfDeath: FuzzyDate;
};

export type MediaStats = {
  scoreDistribution: {
    score: number;
    amount: number;
  }[];
  statusDistribution: {
    status: string;
    amount: number;
  }[];
};

export type MediaReview = {
  id: number;
  score: number;
  summary: string;
  body: string;
};

export type MediaTrend = {
  mediaId: number;
  date: string;
  trending: number;
  averageScore: number;
  popularity: number;
  media: {
    id: number;
    coverImage: CoverImage;
    idMal: number;
    title: MediaTitle;
  };
};

export type MediaExternalLink = {
  url: string;
  site: string;
  type: string;
  language: string;
};

export type MediaNextAiringEpisode = {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
};

export type MediaRecommendation = {
  id: number;
  mediaRecommendation: {
    type: string;
    id: number;
    idMal: number;
    title: MediaTitle;
    status: string;
    episodes: number;
    coverImage: CoverImage;
    bannerImage: string;
    format: string;
    chapters: number;
    meanScore: number;
    nextAiringEpisode: MediaNextAiringEpisode;
  };
};

export type MediaRelation = {
  id: number;
  relationType: string;
  node: {
    id: number;
    idMal: number;
    status: string;
    coverImage: CoverImage;
    bannerImage: string;
    title: MediaTitle;
    episodes: number;
    chapters: number;
    type: MediaType;
    averageScore: number;
    format: string;
    nextAiringEpisode: MediaNextAiringEpisode;
    meanScore: number;
  };
};

export type MediaStudio = {
  isMain: boolean;
  node: {
    id: number;
    name: string;
  };
};

export type MediaCharacter = {
  role: string;
  node: {
    id: number;
    name: CharacterName;
    image: Pick<CoverImage, 'large' | 'medium'>;
  };
  voiceActors: {
    id: number;
    languageV2: string;
    name: Name;
    image: Pick<CoverImage, 'large' | 'medium'>;
  }[];
};

export interface FavoriteAnimeResponse {
  ToggleFavourite: {
    anime: {
      nodes: {
        id: number;
      }[];
    };
  };
}

export interface AnimeMediaReturn {
  data: { Media: Anime };
}

export interface MangaMediaReturn {
  data: { Media: Manga };
}

export interface PagedAnimeMediaReturn {
  data: {
    Page: {
      media: Anime[];
    };
  };
}

export interface PagedMangaMediaReturn {
  data: {
    Page: {
      media: Manga[];
    };
  };
}

export interface Media<T = Anime | Manga> {
  Media: T;
}

export interface Anime {
  id: number;
  idMal: number;
  title: MediaTitle;
  modNotes: string;
  siteUrl: string;
  autoCreateForumThread: boolean;
  synonyms: string[];
  countryOfOrigin: string;
  isLicensed: boolean;
  isAdult: boolean;
  hashtag: string;
  rankings: MediaRanking[];
  mediaListEntry: MediaListEntry;
  staff: MediaStaff;
  stats: MediaStats;
  reviews: {
    nodes: MediaReview[];
  };
  trends: {
    edges: {
      node: MediaTrend;
    }[];
  };
  externalLinks: MediaExternalLink[];
  coverImage: CoverImage;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  bannerImage: string;
  season: string;
  isLocked: boolean;
  seasonYear: number;
  description: string;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  chapters: number;
  volumes: number;
  trending: number;
  trailer: Trailer;
  genres: string[];
  source: string;
  averageScore: number;
  popularity: number;
  meanScore: number;
  nextAiringEpisode: MediaNextAiringEpisode;
  characters: {
    edges: MediaCharacter[];
  };
  isFavourite: boolean;
  recommendations: {
    edges: MediaRecommendation[];
  };
  relations: {
    edges: MediaRelation[];
  };
  studios: {
    edges: MediaStudioEdge[];
  };
  isRecommendationBlocked: boolean;
}

export interface Manga {
  id: number;
  idMal: number;
  title: MediaTitle;
  description: string;
  format: string;
  status: string;
  startDate: FuzzyDate;
  endDate: FuzzyDate;
  chapters: number;
  volumes: number;
  countryOfOrigin: string;
  isLicensed: boolean;
  updatedAt: string;
  coverImage: CoverImage;
  bannerImage: string;
  genres: string[];
  synonyms: string[];
  averageScore: number;
  meanScore: number;
  siteUrl: string;
  autoCreateForumThread: boolean;
  modNotes: string;
  popularity: number;
  trending: number;
  tags: MediaTag[];
  relations: {
    edges: MediaRelation[];
  };
  characters: {
    nodes: MediaCharacter[];
  };
  staff: {
    nodes: MediaStaff[];
  };
  isFavourite: boolean;
  isAdult: boolean;
  isLocked: boolean;
  trends: {
    nodes: MediaTrend[];
  };
  externalLinks: MediaExternalLink[];
  rankings: MediaRanking[];
  mediaListEntry: MediaListEntry;
  reviews: {
    nodes: MediaReview[];
  };
  stats: MediaStats;
  favourites: number;
  isRecommendationBlocked: boolean;
  recommendations: {
    edges: MediaRecommendation[];
  };
}

export interface FavoriteMangaMutationResponse {
  ToggleFavourite: {
    manga: {
      nodes: {
        id: number;
      }[];
    };
  };
}
