import { MediaTitle } from './media';

export interface GetListResponse {
  Recommendation: {
    media: {
      id: number;
      title: MediaTitle;
      type: string;
    };
    Page: {
      recommendations: {
        rating: number;
        userRating: number;
        user: {
          id: number;
          name: string;
        };
        id: number;
        mediaRecommendation: {
          id: number;
          title: MediaTitle;
          type: string;
        };
      }[];
    };
  };
}

export interface RecommendationGetResponse {
  Recommendation: {
    id: number;
    rating: number;
    userRating: number;
    media: {
      id: number;
      title: MediaTitle;
      type: string;
    };
    mediaRecommendation: {
      id: number;
      title: MediaTitle;
      type: string;
    };
    user: {
      id: number;
      name: string;
    };
  };
}
