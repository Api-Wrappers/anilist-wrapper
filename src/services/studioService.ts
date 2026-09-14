import type { ANILISTSDK } from "../@types";
import type { GraphQLClient, StudioSort } from "../__generated__/anilist-sdk";
import {
	buildStudioByIdDocument,
	buildStudioPageDocument,
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
	SelectedStudio,
	SelectedStudioPage,
	StudioPageSelect,
	StudioSelect,
} from "../selections/types";

/**
 * Optional filters for {@link StudioService.searchStudios}.
 */
export type StudioSearchFilters = {
	/** Studio name search string. */
	search?: string;
	/** AniList studio sort order (for example `StudioSort.Name`). */
	sort?: StudioSort[];
};

/**
 * Service class for interacting with AniList studio-related queries.
 */
export class StudioService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new StudioService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Retrieves studio information by studio ID.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param id - The unique ID of the studio.
	 * @returns A promise resolving to the studio information.
	 */
	getStudioById(id: number): ReturnType<ANILISTSDK["GetStudioById"]>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Studio: SelectedStudio<TSelect> | null }>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options: RootSelectionOption<"studio", TSelect>,
	): Promise<{ studio: SelectedStudio<TSelect> | null }>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options?: SelectionOption<"studio", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const { select, wrapped } = resolveSelection(options, "studio");
			const document = buildStudioByIdDocument(select);
			return this.graphQLClient
				.request<{ Studio: SelectedStudio<TSelect> | null }, { id: number }>({
					document,
					variables: { id },
				})
				.then((raw) => (wrapped ? { studio: raw.Studio } : raw));
		}
		return this.client.GetStudioById({ id });
	}

	/**
	 * Searches for studios, optionally filtered and sorted.
	 * When `options.select` is provided, only the selected fields are returned.
	 * @param filters - Optional search string and sort order.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the paginated studio results.
	 */
	searchStudios(
		filters?: StudioSearchFilters,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["SearchStudios"]>;
	searchStudios<TSelect extends StudioPageSelect>(
		filters: StudioSearchFilters | undefined,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedStudioPage<TSelect> | null }>;
	searchStudios<TSelect extends StudioPageSelect>(
		filters: StudioSearchFilters = {},
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["SearchStudios"]>
		| Promise<{ page: SelectedStudioPage<TSelect> | null }> {
		const { search, sort } = filters;
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildStudioPageDocument(
				"SelectedStudioSearch",
				"($search: String, $sort: [StudioSort], $page: Int, $perPage: Int)",
				["search: $search", "sort: $sort"],
				resolvePageSelection<TSelect>(options.select, "studios"),
			);
			const selected: Promise<{
				page: SelectedStudioPage<TSelect> | null;
			}> = this.graphQLClient
				.request<
					{ Page: SelectedStudioPage<TSelect> | null },
					{
						search?: string;
						sort?: StudioSort[];
						page: number;
						perPage: number;
					}
				>({ document, variables: { search, sort, page, perPage } })
				.then((raw) => ({ page: raw.Page }));
			return selected;
		}
		return this.client.SearchStudios({ search, sort, page, perPage });
	}
}
