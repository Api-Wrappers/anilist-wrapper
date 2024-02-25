import { MediaTitle } from './media';

export interface GetThreadResponse {
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
  };
  replyCommentId: number;
  viewCount: number;
  isLocked: boolean;
  isSticky: boolean;
  isSubscribed: boolean;
  replyUser: {
    id: number;
    name: string;
  };
  isLiked: boolean;
  repliedAt: number;
  createdAt: number;
  updatedAt: number;
  likes: {
    id: number;
    name: string;
  }[];
  categories: {
    id: number;
    name: string;
  }[];
  mediaCategories: {
    id: number;
    title: MediaTitle;
    type: string;
  }[];
}

export interface GetThreadVariables {
  id: number;
}

export interface DeleteThreadResponse {
  deleted: boolean;
}

export interface DeleteThreadVariables {
  id: number;
}

export interface GetCommentsResponse {
  Page: {
    threadComments: {
      id: number;
      user: {
        id: number;
        name: string;
      };
      comment: string;
      isLiked: boolean;
      createdAt: number;
      updatedAt: number;
      likes: {
        id: number;
        name: string;
      }[];
      childComments: any[]; // unsure on type
      isLocked: boolean;
    }[];
  };
}

export interface GetCommentsVariables {
  threadID: number;
  page: number;
  perPage: number;
}
