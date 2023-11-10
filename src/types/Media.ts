export type AniListMediaTitle = {
  english: string;
  native: string;
  romaji: string;
};

export type AniListMediaRanking = {
  rank: number;
  type: string;
  context: string;
  year: number;
  season: string;
};

export type AniListMediaListEntry = {
  progress: number;
  status: string;
  score: number;
  id: number;
  startedAt: {
    year: number;
    month: number;
    day: number;
  };
  completedAt: {
    year: number;
    month: number;
    day: number;
  };
  userId: number;
  mediaId: number;
  updatedAt: string;
  createdAt: string;
};

export type AniListMediaStaff = {
  id: number;
  name: {
    first: string;
    middle: string;
    last: string;
    full: string;
    native: string;
    alternative: string;
    userPreferred: string;
  };
  languageV2: string;
  image: {
    large: string;
    medium: string;
  };
  description: string;
  primaryOccupations: string[];
  gender: string;
  dateOfBirth: {
    year: number;
    month: number;
    day: number;
  };
  dateOfDeath: {
    year: number;
    month: number;
    day: number;
  };
};

export type AniListMediaStats = {
  scoreDistribution: {
    score: number;
    amount: number;
  }[];
  statusDistribution: {
    status: string;
    amount: number;
  }[];
};

export type AniListMediaReview = {
  id: number;
  score: number;
  summary: string;
  body: string;
};

export type AniListMediaTrend = {
  mediaId: number;
  date: string;
  trending: number;
  averageScore: number;
  popularity: number;
  media: {
    id: number;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
      color: string;
    };
    idMal: number;
    title: AniListMediaTitle;
  };
};

export type AniListMediaExternalLink = {
  url: string;
  site: string;
  type: string;
  language: string;
};

export type AniListMediaNextAiringEpisode = {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
};

export type AniListMediaCharacter = {
  role: string;
  node: {
    id: number;
    name: {
      first: string;
      middle: string;
      last: string;
      full: string;
      native: string;
      userPreferred: string;
    };
    image: {
      large: string;
      medium: string;
    };
  };
  voiceActors: {
    id: number;
    languageV2: string;
    name: {
      first: string;
      middle: string;
      last: string;
      full: string;
      native: string;
      userPreferred: string;
    };
    image: {
      large: string;
      medium: string;
    };
  }[];
};

export type AniListMediaRecommendation = {
  id: number;
  mediaRecommendation: {
    type: string;
    id: number;
    idMal: number;
    title: AniListMediaTitle;
    status: string;
    episodes: number;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
      color: string;
    };
    bannerImage: string;
    format: string;
    chapters: number;
    meanScore: number;
    nextAiringEpisode: AniListMediaNextAiringEpisode;
  };
};

export type AniListMediaRelation = {
  id: number;
  relationType: string;
  node: {
    id: number;
    idMal: number;
    status: string;
    coverImage: {
      extraLarge: string;
      large: string;
      medium: string;
      color: string;
    };
    bannerImage: string;
    title: AniListMediaTitle;
    episodes: number;
    chapters: number;
    type: 'ANIME' | 'MANGA';
    averageScore: number;
    format: string;
    nextAiringEpisode: AniListMediaNextAiringEpisode;
    meanScore: number;
  };
};

export type AniListMediaStudio = {
  isMain: boolean;
  node: {
    id: number;
    name: string;
  };
};

export type AniListMedia = {
  data: {
    Media: {
      id: number;
      idMal: number;
      title: AniListMediaTitle;
      modNotes: string;
      siteUrl: string;
      autoCreateForumThread: boolean;
      synonyms: string[];
      countryOfOrigin: string;
      isLicensed: boolean;
      isAdult: boolean;
      hashtag: string;
      rankings: AniListMediaRanking[];
      mediaListEntry: AniListMediaListEntry;
      staff: AniListMediaStaff;
      stats: AniListMediaStats;
      reviews: {
        nodes: AniListMediaReview[];
      };
      trends: {
        edges: {
          node: AniListMediaTrend;
        }[];
      };
      externalLinks: AniListMediaExternalLink[];
      coverImage: {
        extraLarge: string;
        large: string;
        color: string;
      };
      startDate: {
        year: number;
        month: number;
        day: number;
      };
      endDate: {
        year: number;
        month: number;
        day: number;
      };
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
      trailer: {
        id: number;
        site: string;
        thumbnail: string;
      };
      genres: string[];
      source: string;
      averageScore: number;
      popularity: number;
      meanScore: number;
      nextAiringEpisode: AniListMediaNextAiringEpisode;
      characters: {
        edges: AniListMediaCharacter[];
      };
      isFavourite: boolean;
      recommendations: {
        edges: AniListMediaRecommendation[];
      };
      relations: {
        edges: AniListMediaRelation[];
      };
      studios: {
        edges: AniListMediaStudio[];
      };
      isRecommendationBlocked: boolean;
    };
  };
};
