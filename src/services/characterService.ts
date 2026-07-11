import type { ANILISTSDK } from "../@types";
import type { GraphQLClient } from "../__generated__/anilist-sdk";
import {
	buildCharacterByIdDocument,
	buildCharacterPageDocument,
	buildToggleFavouriteDocument,
} from "../selections/builder";
import type {
	RootSelectionOption,
	SelectionOption,
} from "../selections/options";
import { getSelection, hasSelection } from "../selections/options";
import type {
	CharacterPageSelect,
	CharacterSelect,
	FavouritesSelect,
	SelectedCharacter,
	SelectedCharacterPage,
	SelectedFavourites,
} from "../selections/types";

/**
 * Service class for interacting with AniList character-related queries.
 */
export class CharacterService {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient | undefined;

	/**
	 * Constructs a new CharacterService instance.
	 * @param client - An instance of the AniList SDK client.
	 * @param graphQLClient - Optional low-level GraphQL client for selected queries.
	 */
	constructor(client: ANILISTSDK, graphQLClient?: GraphQLClient) {
		this.client = client;
		this.graphQLClient = graphQLClient;
	}

	/**
	 * Retrieves character information by character ID.
	 * @param id - The unique ID of the character.
	 * @returns A promise resolving to the character data.
	 */
	getCharacterById(id: number): ReturnType<ANILISTSDK["GetCharacterById"]>;
	getCharacterById<TSelect extends CharacterSelect>(
		id: number,
		options: { select: TSelect },
	): Promise<{ Character: SelectedCharacter<TSelect> | null }>;
	getCharacterById<TSelect extends CharacterSelect>(
		id: number,
		options: RootSelectionOption<"character", TSelect>,
	): Promise<{ character: SelectedCharacter<TSelect> | null }>;
	getCharacterById<TSelect extends CharacterSelect>(
		id: number,
		options?: SelectionOption<"character", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "character");
			const wrapped =
				(options.select as Record<string, unknown>).character !== undefined;
			const document = buildCharacterByIdDocument(select);
			return this.graphQLClient
				.request<
					{ Character: SelectedCharacter<TSelect> | null },
					{ id: number }
				>({ document, variables: { id } })
				.then((raw) => (wrapped ? { character: raw.Character } : raw));
		}
		return this.client.GetCharacterById({ id });
	}

	/**
	 * Retrieves a list of characters whose birthdays are today.
	 * @param page - Optional page number for pagination. Defaults to 1.
	 * @param perPage - Optional number of characters per page. Defaults to 25.
	 * @returns A promise resolving to the list of today's birthday characters.
	 */
	getCharactersBirthdayToday(
		page?: number,
		perPage?: number,
	): ReturnType<ANILISTSDK["CharactersBirthdayToday"]>;
	getCharactersBirthdayToday<TSelect extends CharacterPageSelect>(
		page: number,
		perPage: number,
		options: { select: { page: TSelect } },
	): Promise<{ page: SelectedCharacterPage<TSelect> | null }>;
	getCharactersBirthdayToday<TSelect extends CharacterPageSelect>(
		page = 1,
		perPage = 25,
		options?: { select: { page: TSelect } },
	):
		| ReturnType<ANILISTSDK["CharactersBirthdayToday"]>
		| Promise<{ page: SelectedCharacterPage<TSelect> | null }> {
		if (options?.select !== undefined) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const document = buildCharacterPageDocument(
				"SelectedCharactersBirthdayToday",
				"($page: Int, $perPage: Int)",
				["isBirthday: true"],
				options.select.page,
			);
			const selected: Promise<{ page: SelectedCharacterPage<TSelect> | null }> =
				this.graphQLClient
					.request<
						{ Page: SelectedCharacterPage<TSelect> | null },
						{ page: number; perPage: number }
					>({ document, variables: { page, perPage } })
					.then((raw) => ({ page: raw.Page }));
			return selected;
		}
		return this.client.CharactersBirthdayToday({ page, perPage });
	}

	/**
	 * Toggles the favorite status of a character.
	 * @param characterId - The ID of the character to toggle as favorite.
	 * @returns A promise resolving to the result of the toggle mutation.
	 */
	toggleFavoriteCharacter(
		characterId: number,
	): ReturnType<ANILISTSDK["ToggleFavoriteCharacter"]>;
	toggleFavoriteCharacter<TSelect extends FavouritesSelect>(
		characterId: number,
		options: { select: TSelect },
	): Promise<{ ToggleFavourite: SelectedFavourites<TSelect> | null }>;
	toggleFavoriteCharacter<TSelect extends FavouritesSelect>(
		characterId: number,
		options: RootSelectionOption<"favorites", TSelect>,
	): Promise<{ favorites: SelectedFavourites<TSelect> | null }>;
	toggleFavoriteCharacter<TSelect extends FavouritesSelect>(
		characterId: number,
		options?: SelectionOption<"favorites", TSelect>,
	): unknown {
		if (hasSelection(options)) {
			if (!this.graphQLClient) {
				throw new Error("graphQLClient is required for selected queries.");
			}
			const select = getSelection(options, "favorites");
			const wrapped =
				(options.select as Record<string, unknown>).favorites !== undefined;
			const document = buildToggleFavouriteDocument(select, "characterId");
			return this.graphQLClient
				.request<
					{ ToggleFavourite: SelectedFavourites<TSelect> | null },
					{ id: number }
				>({ document, variables: { id: characterId } })
				.then((raw) => (wrapped ? { favorites: raw.ToggleFavourite } : raw));
		}
		return this.client.ToggleFavoriteCharacter({ charID: characterId });
	}
}
