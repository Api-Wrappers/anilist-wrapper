import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import { MediaType } from "../__generated__/anilist-sdk";

/**
 * Service class for retrieving media lists from AniList.
 */
export class MediaListService {
	private client: ANILISTSDK;

	/**
	 * Constructs a new MediaListService instance.
	 * @param client - An instance of the AniList SDK client.
	 */
	constructor(client: ANILISTSDK) {
		this.client = client;
	}

	/**
	 * Retrieves a user's media list by ID.
	 * @param id - The ID of the list to retrieve.
	 * @returns A promise resolving to the media list.
	 */
	getMediaList(id: number) {
		return this.client.GetMediaList({ id });
	}

	/**
	 * Retrieves a media list using the user ID (alternate query).
	 * @param userId - The ID of the user whose media list to retrieve.
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUser(userId: number, mediaType: MediaTypeNonEnum) {
		return this.client.GetMediaListByUser({
			userId,
			mediaType: mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga,
		});
	}
}
