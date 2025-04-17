import type { ANILISTSDK } from "./@types";
import { createClient } from "./client";
import { AnimeService } from "./services/animeService";
import { CharacterService } from "./services/characterService";
import { MangaService } from "./services/mangaService"; // Added import
import { MediaListService } from "./services/mediaListService"; // Added import
import { MediaService } from "./services/mediaService";
import { StaffService } from "./services/staffService";
import { UserService } from "./services/userService"; // Added import

class Anilist {
  private client: ANILISTSDK;

  constructor(token?: string) {
    this.client = createClient(token);

    this.anime = new AnimeService(this.client);
    this.character = new CharacterService(this.client);
    this.manga = new MangaService(this.client);
    this.media = new MediaService(this.client);
    this.mediaList = new MediaListService(this.client);
    this.staff = new StaffService(this.client);
    this.user = new UserService(this.client);
  }

  anime: AnimeService;
  character: CharacterService;
  manga: MangaService;
  media: MediaService;
  mediaList: MediaListService;
  staff: StaffService;
  user: UserService;
}

export { Anilist };
