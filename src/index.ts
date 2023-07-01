import { Activity } from "./activity";
import { Lists } from "./lists";
import { Media } from "./media";
import { People } from "./people";
import { Recommendation } from "./recommendation";
import { Search } from "./search";
import { Thread } from "./thread";
import { User } from "./user";

class Anilist {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  activty = new Activity();

  lists = new Lists();

  media = new Media(this.access_token);

  people = new People(this.access_token);

  recommendation = new Recommendation();

  search = new Search();

  thread = new Thread();

  user = new User(this.access_token);
}

export { Anilist };
