import type { ANILISTSDK } from "../@types";
import type { MediaListStatus } from "../__generated__/anilist-sdk";

export class UserService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getUserInfo(userId: number) {
    return this.client.GetUserInfo({ id: userId });
  }

  getUserAnimeList(userId: number, status?: MediaListStatus) {
    return this.client.GetUserAnimeList({
      status,
      userId,
    });
  }

  getUserMangaList(userId: number, status?: MediaListStatus) {
    return this.client.GetUserMangaList({
      status,
      userId,
    });
  }

  getUserList(page?: number, perPage?: number) {
    return this.client.GetUserList({
      page,
      perPage,
    });
  }

  getUserStatistics(userId: number) {
    return this.client.GetUserStatistics({ id: userId });
  }
}
