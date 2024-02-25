import { CharacterName, FuzzyDate, Name, Trailer } from '../types';
import { CoverImage, MediaType } from './media';

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

export type MediaReturn = {
  data: {
    Media: {
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
    };
  };
};
