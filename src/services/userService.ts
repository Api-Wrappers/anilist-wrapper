import type { ANILISTSDK } from "../@types";
import { MediaListStatus } from "../__generated__/anilist-sdk";

/**
 * Service class for interacting with AniList user-related queries.
 */
export class UserService {
	private client: ANILISTSDK;

	/**
	 * Constructs a new UserService instance.
	 * @param client - An instance of the AniList SDK client.
	 */
	constructor(client: ANILISTSDK) {
		this.client = client;
	}

	/**
	 * Retrieves basic user information by user ID.
	 * @param userId - The unique ID of the user.
	 * @returns A promise resolving to the user information.
	 */
	getUserInfo(userId: number) {
		return this.client.GetUserInfo({ id: userId });
	}

	/**
	 * Retrieves basic user information by userName.
	 * @param userName - The userName of the user.
	 * @returns A promise resolving to the user information.
	 */
	getUserInfoByUserName(userName: string) {
		return this.client.GetUserInfoByUserName({ userName });
	}

	/**
	 * Retrieves the user's anime list with optional filtering by status.
	 * @param userId - The unique ID of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's anime list.
	 */
	getUserAnimeList(userId: number, status?: MediaListStatus) {
		return this.client.GetUserAnimeList({
			status: status ?? MediaListStatus.Current,
			userId,
		});
	}

	/**
	 * Retrieves the user's anime list with optional filtering by status.
	 * @param userName - The userName of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's anime list.
	 */
	getUserAnimeListByUserName(userName: string, status?: MediaListStatus) {
		return this.client.GetUserAnimeListByUserName({
			status: status ?? MediaListStatus.Current,
			userName,
		});
	}

	/**
	 * Retrieves the user's manga list with optional filtering by status.
	 * @param userId - The unique ID of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's manga list.
	 */
	getUserMangaList(userId: number, status?: MediaListStatus) {
		return this.client.GetUserMangaList({
			status: status ?? MediaListStatus.Current,
			userId,
		});
	}

	/**
	 * Retrieves the user's manga list with optional filtering by status.
	 * @param userName - The userName of the user.
	 * @param status - Optional media list status filter defaults to current.
	 * @returns A promise resolving to the user's manga list.
	 */
	getUserMangaListByUserName(userName: string, status?: MediaListStatus) {
		return this.client.GetUserMangaListByUserName({
			status: status ?? MediaListStatus.Current,
			userName,
		});
	}

	/**
	 * Retrieves a paginated list of users.
	 * @param page - Optional page number for pagination defaults to 1.
	 * @param perPage - Optional number of users per page defaults to 10.
	 * @returns A promise resolving to the paginated user list.
	 */
	getUserList(page?: number, perPage?: number) {
		return this.client.GetUserList({
			page: page ?? 1,
			perPage: perPage ?? 10,
		});
	}

	/**
	 * Retrieves user statistics by user ID.
	 * @param userId - The unique ID of the user.
	 * @returns A promise resolving to the user's statistics.
	 */
	getUserStatistics(userId: number) {
		return this.client.GetUserStatistics({ id: userId });
	}

	/**
	 * Retrieves user statistics by userName.
	 * @param userName - The userName of the user.
	 * @returns A promise resolving to the user's statistics.
	 */
	getUserStatisticsByUserName(userName: string) {
		return this.client.GetUserStatisticsByUserName({ userName });
	}
}
