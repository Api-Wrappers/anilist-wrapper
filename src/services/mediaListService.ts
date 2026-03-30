import type { ANILISTSDK, MediaTypeNonEnum } from "../@types";
import {
	MediaType,
	type DeleteMediaListEntryMutation,
	type SaveMediaListEntryMutation,
	type SaveMediaListEntryMutationVariables,
} from "../__generated__/anilist-sdk";

/**
 * Service class for retrieving and managing media lists from AniList.
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
	 * Retrieves a media list using the user ID.
	 * @param userId - The ID of the user whose media list to retrieve.
	 * @param mediaType - The media type ("ANIME" or "MANGA").
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUser(userId: number, mediaType: MediaTypeNonEnum) {
		return this.client.GetMediaListByUser({
			userId,
			mediaType: mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga,
		});
	}

	/**
	 * Retrieves a media list using the username.
	 * @param userName - The username of the user whose media list to retrieve.
	 * @param mediaType - The media type ("ANIME" or "MANGA").
	 * @returns A promise resolving to the user's media list.
	 */
	getMediaListByUsername(userName: string, mediaType: MediaTypeNonEnum) {
		return this.client.GetMediaListByUserByUsername({
			userName,
			mediaType: mediaType === "ANIME" ? MediaType.Anime : MediaType.Manga,
		});
	}

	/**
	 * Saves (creates or updates) a media list entry. Requires authentication.
	 * @param variables - The entry fields to save (mediaId required; all others optional).
	 * @returns A promise resolving to the saved media list entry.
	 */
	saveEntry(
		variables: SaveMediaListEntryMutationVariables,
	): Promise<SaveMediaListEntryMutation> {
		return this.client.SaveMediaListEntry(variables);
	}

	/**
	 * Deletes a media list entry by its list entry ID. Requires authentication.
	 * @param id - The ID of the media list entry to delete.
	 * @returns A promise resolving to the deletion result.
	 */
	deleteEntry(id: number): Promise<DeleteMediaListEntryMutation> {
		return this.client.DeleteMediaListEntry({ id });
	}
}
