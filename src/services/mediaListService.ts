import type { ANILISTSDK } from "../@types";

export class MediaListService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getMediaList(userId: number) {
    return this.client.GetMediaList({
      id: userId,
    });
  }

  getMediaListByUser(userId: number) {
    return this.client.GetMediaListByUser({
      userId,
    });
  }
}
