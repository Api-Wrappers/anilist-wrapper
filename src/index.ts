import type { ANILISTSDK } from "./@types";
import { createClient } from "./client";
import { AnimeService } from "./services/animeService";
import { CharacterService } from "./services/characterService";
import { MangaService } from "./services/mangaService";
import { MediaListService } from "./services/mediaListService";
import { MediaService } from "./services/mediaService";
import { StaffService } from "./services/staffService";
import { UserService } from "./services/userService";

/**
 * Main class for interacting with the AniList API.
 * Provides access to various service classes for making different queries to the AniList API.
 */
class Anilist {
  private client: ANILISTSDK;

  /**
   * Constructs a new instance of the Anilist client.
   * @param token - Optional authentication token for the AniList API.
   */
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

  /**
   * Service class for interacting with AniList's anime-related queries.
   * @type {AnimeService}
   */
  anime: AnimeService;

  /**
   * Service class for interacting with AniList's character-related queries.
   * @type {CharacterService}
   */
  character: CharacterService;

  /**
   * Service class for interacting with AniList's manga-related queries.
   * @type {MangaService}
   */
  manga: MangaService;

  /**
   * Service class for interacting with AniList's media-related queries.
   * @type {MediaService}
   */
  media: MediaService;

  /**
   * Service class for interacting with AniList's media list-related queries.
   * @type {MediaListService}
   */
  mediaList: MediaListService;

  /**
   * Service class for interacting with AniList's staff-related queries.
   * @type {StaffService}
   */
  staff: StaffService;

  /**
   * Service class for interacting with AniList's user-related queries.
   * @type {UserService}
   */
  user: UserService;
}

export { Anilist };
