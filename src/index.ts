import type { ANILISTSDK } from "./@types";
import type { GraphQLClient } from "./__generated__/anilist-sdk";
import { createGraphQLClient, createSdkClient } from "./client";
import { AnimeService } from "./services/animeService";
import { CharacterService } from "./services/characterService";
import { GraphQLService } from "./services/graphqlService";
import { MangaService } from "./services/mangaService";
import { MediaListService } from "./services/mediaListService";
import { MediaService } from "./services/mediaService";
import { StaffService } from "./services/staffService";
import { UserService } from "./services/userService";

/**
 * Main class for interacting with the AniList API.
 * Provides access to various service classes for making different queries to the AniList API.
 */
class Anilist {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient;

	/**
	 * Constructs a new instance of the Anilist client.
	 * @param token - Optional authentication token for the AniList API.
	 */
	constructor(token?: string) {
		this.graphQLClient = createGraphQLClient(token);
		this.client = createSdkClient(this.graphQLClient);

		this.anime = new AnimeService(this.client, this.graphQLClient);
		this.character = new CharacterService(this.client, this.graphQLClient);
		this.graphql = new GraphQLService(this.graphQLClient);
		this.manga = new MangaService(this.client, this.graphQLClient);
		this.media = new MediaService(this.client, this.graphQLClient);
		this.mediaList = new MediaListService(this.client, this.graphQLClient);
		this.staff = new StaffService(this.client, this.graphQLClient);
		this.user = new UserService(this.client, this.graphQLClient);
	}

	/**
	 * Service class for interacting with AniList's anime-related queries.
	 * @type {AnimeService}
	 */
	anime: AnimeService;

	/**
	 * Service class for interacting with AniList's character-related queries.
	 * @type {CharacterService}
	 */
	character: CharacterService;

	/**
	 * Low-level GraphQL access for every AniList query and mutation.
	 * @type {GraphQLService}
	 */
	graphql: GraphQLService;

	/**
	 * Service class for interacting with AniList's manga-related queries.
	 * @type {MangaService}
	 */
	manga: MangaService;

	/**
	 * Service class for interacting with AniList's media-related queries.
	 * @type {MediaService}
	 */
	media: MediaService;

	/**
	 * Service class for interacting with AniList's media list-related queries.
	 * @type {MediaListService}
	 */
	mediaList: MediaListService;

	/**
	 * Service class for interacting with AniList's staff-related queries.
	 * @type {StaffService}
	 */
	staff: StaffService;

	/**
	 * Service class for interacting with AniList's user-related queries.
	 * @type {UserService}
	 */
	user: UserService;
}

export { gql } from "@api-wrappers/api-core";
export * from "./__generated__/anilist-schema";
export * as AniListOperations from "./__generated__/anilist-sdk";
export { createClient, createGraphQLClient, createSdkClient } from "./client";
export type {
	CharacterPageSelect,
	CharacterSelect,
	DeletedSelect,
	FavouritesSelect,
	MediaListCollectionSelect,
	MediaListSelect,
	MediaPageSelect,
	MediaSelect,
	PageInfoSelect,
	SelectedCharacter,
	SelectedCharacterPage,
	SelectedDeleted,
	SelectedFavourites,
	SelectedFields,
	SelectedMedia,
	SelectedMediaList,
	SelectedMediaListCollection,
	SelectedMediaPage,
	SelectedStaff,
	SelectedStaffPage,
	SelectedUser,
	SelectedUserPage,
	StaffPageSelect,
	StaffSelect,
	ToSelect,
	UserPageSelect,
	UserSelect,
} from "./selections";
export type { SaveMediaListEntryInput } from "./services/mediaListService";
export { Anilist };
