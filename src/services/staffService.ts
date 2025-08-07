import type { ANILISTSDK } from "../@types";

/**
 * Service class for interacting with AniList staff-related queries.
 */
export class StaffService {
	private client: ANILISTSDK;

	/**
	 * Constructs a new StaffService instance.
	 * @param client - An instance of the AniList SDK client.
	 */
	constructor(client: ANILISTSDK) {
		this.client = client;
	}

	/**
	 * Retrieves staff information by staff ID.
	 * @param id - The unique ID of the staff member.
	 * @returns A promise resolving to the staff information.
	 */
	getStaffById(id: number) {
		return this.client.GetStaffById({ id });
	}

	/**
	 * Retrieves a list of staff members who have birthdays today.
	 * @param page - Optional page number for pagination. Defaults to 1.
	 * @returns A promise resolving to the staff birthday list.
	 */
	getStaffBirthdayToday(page = 1) {
		return this.client.StaffBirthdayToday({ page });
	}

	/**
	 * Toggles the favorite status of a staff member.
	 * @param staffId - The ID of the staff member to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavoriteStaff(staffId: number) {
		return this.client.ToggleFavoriteStaff({ staffID: staffId });
	}
}
