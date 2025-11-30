import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import { MediaType } from "../__generated__/anilist-sdk";

/**
 * Service class responsible for interacting with the AniList API to retrieve media details.
 */
export class MediaService {
	private client: ANILISTSDK;

	/**
	 * Creates an instance of the MediaService.
	 * @param client - The AniList SDK client instance used to communicate with the AniList API.
	 */
	constructor(client: ANILISTSDK) {
		this.client = client;
	}

	/**
	 * Fetches media details by its unique ID.
	 * @param id - The unique identifier for the media (e.g., an Anime or Manga).
	 * @returns A promise that resolves with the media details, including data like title, genres, etc.
	 */
	getMediaById(id: number) {
		return this.client.GetMediaById({ id });
	}

	/**
	 * Retrieves a user's media list based on the media type (Anime or Manga).
	 * @param userId - The unique ID of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @returns A promise that resolves with the user's media list.
	 */
	getMediaList(userId: number, mediaType: MediaTypeNonEnum) {
		return this.client.GetMediaListByUser({
			mediaType: mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga,
			userId,
		});
	}

	/**
	 * Retrieves a user's media list by their username, filtered by media type (Anime or Manga).
	 * @param userName - The username of the user whose media list is being requested.
	 * @param mediaType - The type of media list to fetch: either "ANIME" or "MANGA".
	 * @returns A promise that resolves with the user's media list.
	 */
	getMediaListByUserName(userName: string, mediaType: MediaTypeNonEnum) {
		return this.client.GetMediaListByUserByUserName({
			mediaType: mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga,
			userName,
		});
	}
}
