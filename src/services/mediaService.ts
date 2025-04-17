import type { ANILISTSDK } from "../@types";

export class MediaService {
  private client: ANILISTSDK;

  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  getMediaById(id: number) {
    return this.client.GetMediaById({ id });
  }
}
