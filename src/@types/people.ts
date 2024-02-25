import { CoverImage, MediaTitle } from './media';
import { CharacterName, FuzzyDate } from './types';

export interface PeopleCharacterQuery {
  Character: {
    id: number;
    name: CharacterName;
    image: Pick<CoverImage, 'large' | 'medium'>;
    gender: string;
    dateOfBirth: FuzzyDate;
    age: number;
    bloodType: string;
    description: string;
    isFavourite: boolean;
    favourites: number;
    isFavouriteBlocked: boolean;
    media: {
      nodes: {
        id: number;
        title: MediaTitle;
        type: string;
      }[];
    };
  };
}

export interface PeopleFavoriteCharacterMutationResponse {
  ToggleFavourite: {
    characters: {
      nodes: {
        id: number;
      }[];
    };
  };
}

export interface CharactersBirthdayTodayResponse {
  Page: {
    characters: {
      id: number;
      name: {
        english: string;
      };
    }[];
  };
}

export interface PeopleStaffResponse {
  id: number;
  name: CharacterName;
  language: string;
  image: Pick<CoverImage, 'large' | 'medium'>;
  description: string;
  primaryOccupations: string[];
  gender: string;
  dateOfBirth: FuzzyDate;
  dateOfDeath: FuzzyDate | null;
  age: number;
  yearsActive: number;
  homeTown: string;
  bloodType: string;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  favourites: number;
  staffMedia: {
    nodes: {
      id: number;
      title: MediaTitle;
      type: string;
    }[];
  };
  characters: {
    nodes: {
      id: number;
      name: CharacterName;
    }[];
  };
  characterMedia: {
    nodes: {
      id: number;
      title: MediaTitle;
      type: string;
    }[];
  };
}

export interface FavoriteStaffResponse {
  ToggleFavourite: {
    staff: {
      nodes: {
        id: number;
      }[];
    };
  };
}

export interface StaffBirthdayTodayResponse {
  Page: {
    staff: {
      id: number;
      name: {
        english: string;
      };
    }[];
  };
}
