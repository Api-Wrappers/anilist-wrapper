import type { ANILISTSDK } from "../@types";
import type { GraphQLClient } from "../__generated__/anilist-sdk";
import {
	buildStaffByIdDocument,
	buildStaffPageDocument,
	buildToggleFavouriteDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import {
	hasSelection,
	resolvePageSelection,
	resolveSelection,
} from "../selections/options";
import type {
	FavouritesSelect,
	SelectedFavourites,
	SelectedStaff,
	SelectedStaffPage,
	StaffPageSelect,
	StaffSelect,
} from "../selections/types";

/**
 * Service class for interacting with AniList staff-related queries.
 */
export class StaffService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new StaffService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Retrieves staff information by staff ID.
	 * @param id - The unique ID of the staff member.
	 * @returns A promise resolving to the staff information.
	 */
	getStaffById(id: number): ReturnType<ANILISTSDK["GetStaffById"]>;
	getStaffById<TSelect extends StaffSelect>(
		id: number,
		options: RootSelectionOption<"staff", TSelect>,
	): Promise<{ staff: SelectedStaff<TSelect> | null }>;
	getStaffById<TSelect extends StaffSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Staff: SelectedStaff<TSelect> | null }>;
	getStaffById<TSelect extends StaffSelect>(
		id: number,
		options?: SelectionOption<"staff", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "staff");
			const document = buildStaffByIdDocument(select);
			return this.graphQLClient
				.request<{ Staff: SelectedStaff<TSelect> | null }, { id: number }>({
					document,
					variables: { id },
				})
				.then((raw) => (wrapped ? { staff: raw.Staff } : raw));
		}
		return this.client.GetStaffById({ id });
	}

	/**
	 * Retrieves a list of staff members who have birthdays today.
	 * @param page - Optional page number for pagination. Defaults to 1.
	 * @param perPage - Optional number of staff members per page. Defaults to 25.
	 * @returns A promise resolving to the staff birthday list.
	 */
	getStaffBirthdayToday(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["StaffBirthdayToday"]>;
	getStaffBirthdayToday<TSelect extends StaffPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedStaffPage<TSelect> | null }>;
	getStaffBirthdayToday<TSelect extends StaffPageSelect>(
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["StaffBirthdayToday"]>
		| Promise<{ page: SelectedStaffPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildStaffPageDocument(
				"SelectedStaffBirthdayToday",
				"($page: Int, $perPage: Int)",
				["isBirthday: true"],
				resolvePageSelection<TSelect>(options.select, "staff"),
			);
			const selected: Promise<{ page: SelectedStaffPage<TSelect> | null }> =
				this.graphQLClient
					.request<
						{ Page: SelectedStaffPage<TSelect> | null },
						{ page: number; perPage: number }
					>({ document, variables: { page, perPage } })
					.then((raw) => ({ page: raw.Page }));
			return selected;
		}
		return this.client.StaffBirthdayToday({ page, perPage });
	}

	/**
	 * Toggles the favorite status of a staff member.
	 * @param staffId - The ID of the staff member to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavoriteStaff(
		staffId: number,
	): ReturnType<ANILISTSDK["ToggleFavoriteStaff"]>;
	toggleFavoriteStaff<TSelect extends FavouritesSelect>(
		staffId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavoriteStaff<TSelect extends FavouritesSelect>(
		staffId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavoriteStaff<TSelect extends FavouritesSelect>(
		staffId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "favorites");
			const document = buildToggleFavouriteDocument(select, "staffId");
			return this.graphQLClient
				.request<
					{ ToggleFavourite: SelectedFavourites<TSelect> | null },
					{ id: number }
				>({ document, variables: { id: staffId } })
				.then((raw) => (wrapped ? { favorites: raw.ToggleFavourite } : raw));
		}
		return this.client.ToggleFavoriteStaff({ staffID: staffId });
	}
}
