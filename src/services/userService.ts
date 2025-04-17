import type { ANILISTSDK } from "../@types";
import type {
  GetUserAnimeListQuery,
  GetUserInfoQuery,
  GetUserListQuery,
  GetUserMangaListQuery,
  GetUserStatisticsQuery,
  MediaListStatus,
} from "../__generated__/anilist-sdk";

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
  getUserInfo(userId: number): Promise<GetUserInfoQuery> {
    return this.client.GetUserInfo({ id: userId });
  }

  /**
   * Retrieves the user's anime list with optional filtering by status.
   * @param userId - The unique ID of the user.
   * @param status - Optional media list status filter (e.g., CURRENT, COMPLETED).
   * @returns A promise resolving to the user's anime list.
   */
  getUserAnimeList(
    userId: number,
    status?: MediaListStatus
  ): Promise<GetUserAnimeListQuery> {
    return this.client.GetUserAnimeList({
      status,
      userId,
    });
  }

  /**
   * Retrieves the user's manga list with optional filtering by status.
   * @param userId - The unique ID of the user.
   * @param status - Optional media list status filter.
   * @returns A promise resolving to the user's manga list.
   */
  getUserMangaList(
    userId: number,
    status?: MediaListStatus
  ): Promise<GetUserMangaListQuery> {
    return this.client.GetUserMangaList({
      status,
      userId,
    });
  }

  /**
   * Retrieves a paginated list of users.
   * @param page - Optional page number for pagination.
   * @param perPage - Optional number of users per page.
   * @returns A promise resolving to the paginated user list.
   */
  getUserList(page?: number, perPage?: number): Promise<GetUserListQuery> {
    return this.client.GetUserList({
      page,
      perPage,
    });
  }

  /**
   * Retrieves user statistics by user ID.
   * @param userId - The unique ID of the user.
   * @returns A promise resolving to the user's statistics.
   */
  getUserStatistics(userId: number): Promise<GetUserStatisticsQuery> {
    return this.client.GetUserStatistics({ id: userId });
  }
}
