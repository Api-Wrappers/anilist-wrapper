import { RequestOptions } from './@types';
import { Activity, Lists, Media, People, Recommendation, Search, Thread, User } from './queries';

class Anilist {
  constructor(access_token?: string, options?: RequestOptions) {
    this.activty = new Activity(access_token, options);
    this.lists = new Lists(access_token, options);
    this.media = new Media(access_token, options);
    this.people = new People(access_token, options);
    this.recommendation = new Recommendation(access_token, options);
    this.search = new Search(access_token, options);
    this.thread = new Thread(access_token, options);
    this.user = new User(access_token, options);
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

export * from './@types';
export { Anilist };
