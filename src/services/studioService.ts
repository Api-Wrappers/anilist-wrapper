import type { ANILISTSDK } from "../@types";
import type { GraphQLClient } from "../__generated__/anilist-sdk";
import {
	buildStudioByIdDocument,
	buildStudioPageDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { getSelection, hasSelection } from "../selections/options";
import type {
	SelectedStudio,
	SelectedStudioPage,
	StudioPageSelect,
	StudioSelect,
} from "../selections/types";

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
	 * @param id - The unique ID of the studio.
	 * @returns A promise resolving to the studio information.
	 */
	getStudioById(id: number): ReturnType<ANILISTSDK["GetStudioById"]>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options: RootSelectionOption<"studio", TSelect>,
	): Promise<{ studio: SelectedStudio<TSelect> | null }>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Studio: SelectedStudio<TSelect> | null }>;
	getStudioById<TSelect extends StudioSelect>(
		id: number,
		options?: SelectionOption<"studio", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "studio");
			const wrapped =
				(options.select as Record<string, unknown>).studio !== undefined;
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
	 * Searches for studios by name.
	 * The response keeps AniList's paginated `Page` shape, matching the other
	 * search methods.
	 * @param search - The search query string.
	 * @param page - Optional page number. Defaults to 1.
	 * @param perPage - Optional number of results per page. Defaults to 10.
	 * @returns A promise resolving to the paginated studio search results.
	 */
	getStudioBySearch(
		search: string,
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["SearchStudio"]>;
	getStudioBySearch<TSelect extends StudioPageSelect>(
		search: string,
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedStudioPage<TSelect> | null }>;
	getStudioBySearch<TSelect extends StudioPageSelect>(
		search: string,
		page = 1,
		perPage = 10,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["SearchStudio"]>
		| Promise<{ page: SelectedStudioPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildStudioPageDocument(
				"SelectedStudioSearch",
				"($query: String, $page: Int, $perPage: Int)",
				["search: $query"],
				options.select.page,
			);
			const selected: Promise<{ page: SelectedStudioPage<TSelect> | null }> =
				this.graphQLClient
					.request<
						{ Page: SelectedStudioPage<TSelect> | null },
						{ query: string; page: number; perPage: number }
					>({ document, variables: { query: search, page, perPage } })
					.then((raw) => ({ page: raw.Page }));
			return selected;
		}
		return this.client.SearchStudio({ query: search, page, perPage });
	}
}
