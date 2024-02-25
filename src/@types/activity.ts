import { MediaTitle, MediaType } from './media';
import { PageInfo, Reply } from './types';

interface ActivityUser {
  id: number;
  name: string;
}

interface ActivityMedia {
  id: number;
  title: MediaTitle;
  type: string;
}

export interface ActivityGet {
  data: {
    Activity: {
      id: number;
      user: ActivityUser;
      status: string;
      type: string;
      progress: string;
      media: {
        id: number;
        title: MediaTitle;
        type: MediaType;
      };
      createdAt: number;
      isLocked: boolean;
      isSubscribed: boolean;
      isLiked: boolean;
      replies: Reply[];
      likes: ActivityUser[];
    };
  };
}

interface Activity {
  id: number;
  user: ActivityUser;
  status?: string;
  type: string;
  progress?: number;
  media?: ActivityMedia;
  createdAt: string;
  isLocked: boolean;
  isSubscribed: boolean;
  isLiked: boolean;
  replies: Reply[];
  likes: ActivityUser[];
}

interface TextActivity extends Activity {
  text: string;
}

interface MessageActivity extends Activity {
  recipient: ActivityUser;
  message: string;
  user: ActivityUser;
  isPrivate: boolean;
}

interface ListActivity extends Activity {
  media: ActivityMedia;
}

export interface ActivityUserActivity {
  Page: {
    pageInfo: PageInfo;
    activities: (ListActivity | TextActivity | MessageActivity)[];
  };
}

export interface PostTextActivityResponse {
  SaveTextActivity: {
    id: number;
    user: ActivityUser;
    type: string;
    text: string;
    createdAt: string;
    replies: Reply[];
    isLocked: boolean;
    isSubscribed: boolean;
    isLiked: boolean;
    likes: ActivityUser[];
  };
}

export interface PostMessageActivityResponse {
  SaveMessageActivity: {
    id: number;
    recipient: ActivityUser;
    type: string;
    message: string;
    createdAt: string;
    replies: Reply[];
    user: ActivityUser;
    isPrivate: boolean;
    isLocked: boolean;
    isSubscribed: boolean;
    isLiked: boolean;
    likes: ActivityUser[];
  };
}

export interface DeleteActivityResponse {
  DeleteActivity: {
    deleted: boolean;
  };
}
