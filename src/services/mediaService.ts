import type { ANILISTSDK } from "../@types";
import type { GetMediaByIdQuery } from "../__generated__/anilist-sdk";

/**
 * Service class for retrieving media details from AniList.
 */
export class MediaService {
  private client: ANILISTSDK;

  /**
   * Constructs a new MediaService instance.
   * @param client - An instance of the AniList SDK client.
   */
  constructor(client: ANILISTSDK) {
    this.client = client;
  }

  /**
   * Retrieves media details by media ID.
   * @param id - The unique ID of the media.
   * @returns A promise resolving to the media data.
   */
  getMediaById(id: number): Promise<GetMediaByIdQuery> {
    return this.client.GetMediaById({ id });
  }
}
