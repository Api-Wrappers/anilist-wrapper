import { CoverImage, MediaTitle, MediaType } from './media';

interface UserProfileOptions {
  type: string;
  enabled: boolean;
}

interface NotificationOption {
  type: string;
  enabled: boolean;
}

interface MediaListOptions {
  scoreFormat: string;
  rowOrder: string;
  animeList: {
    sectionOrder: string[];
    splitCompletedSectionByFormat: boolean;
    customLists: string[];
    advancedScoring: boolean;
    advancedScoringEnabled: boolean;
  };
  mangaList: {
    sectionOrder: string[];
    splitCompletedSectionByFormat: boolean;
    customLists: string[];
    advancedScoring: boolean;
    advancedScoringEnabled: boolean;
  };
}

interface UserProfileFavourites {
  anime: {
    nodes: {
      id: number;
      title: MediaTitle;
      type: MediaType;
    }[];
  };
  manga: {
    nodes: {
      id: number;
      title: MediaTitle;
      type: MediaType;
    }[];
  };
  characters: {
    nodes: {
      id: number;
      name: {
        english: string;
      };
    }[];
  };
  staff: {
    nodes: {
      id: number;
      name: {
        english: string;
      };
    }[];
  };
  studios: {
    nodes: {
      id: number;
      name: string;
    }[];
  };
}

export interface UserProfile {
  id: number;
  name: string;
  about: string;
  avatar: Pick<CoverImage, 'large' | 'medium'>;
  bannerImage: string;
  isFollowing: boolean;
  isFollower: boolean;
  isBlocked: boolean;
  bans: any[]; // unsure on the type
  options: {
    titleLanguage: string;
    displayAdultContent: boolean;
    airingNotifications: boolean;
    profileColor: string;
    activityMergeTime: number;
    staffNameLanguage: string;
    notificationOptions: NotificationOption[];
  };
  mediaListOptions: MediaListOptions;
  favourites: UserProfileFavourites;
  unreadNotificationCount: number;
  siteUrl: string;
  donatorTier: string;
  donatorBadge: string;
  moderatorRoles: string[];
  updatedAt: string;
}
