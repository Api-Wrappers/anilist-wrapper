import { Activity } from './activity';
import { Lists } from './lists';
import { Media } from './media';
import { People } from './people';
import { Recommendation } from './recommendation';
import { Search } from './search';
import { Thread } from './thread';
import { User } from './user';

class Anilist {
  constructor(access_token?: string) {
    this.activty = new Activity(access_token);
    this.lists = new Lists(access_token);
    this.media = new Media(access_token);
    this.people = new People(access_token);
    this.recommendation = new Recommendation(access_token);
    this.search = new Search(access_token);
    this.thread = new Thread(access_token);
    this.user = new User(access_token);
  }

  activty: Activity;
  lists: Lists;
  media: Media;
  people: People;
  recommendation: Recommendation;
  search: Search;
  thread: Thread;
  user: User;
}

export * from './types';
export { Anilist };
