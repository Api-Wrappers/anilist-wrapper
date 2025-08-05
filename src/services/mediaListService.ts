import type { ANILISTSDK } from "../@types";
import type {
	GetMediaListByUserQuery,
	GetMediaListQuery,
} from "../__generated__/anilist-sdk";

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
	 * @param userId - The ID of the user whose media list to retrieve.
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaList(userId: number): Promise<GetMediaListQuery> {
		return this.client.GetMediaList({
			id: userId,
		});
	}

	/**
	 * Retrieves a media list using the user ID (alternate query).
	 * @param userId - The ID of the user whose media list to retrieve.
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUser(userId: number): Promise<GetMediaListByUserQuery> {
		return this.client.GetMediaListByUser({
			userId,
		});
	}
}
