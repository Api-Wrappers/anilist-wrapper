import type { BaseHttpClient } from "@api-wrappers/api-core";
import type { ANILISTSDK } from "./@types";
import type { GraphQLClient } from "./__generated__/anilist-sdk";
import { type AnilistClientInput, createClientBundle } from "./client";
import { AnimeService } from "./services/animeService";
import { CharacterService } from "./services/characterService";
import { GraphQLService } from "./services/graphqlService";
import { MangaService } from "./services/mangaService";
import { MediaListService } from "./services/mediaListService";
import { MediaService } from "./services/mediaService";
import { StaffService } from "./services/staffService";
import { UserService } from "./services/userService";

/** Main class for interacting with the AniList API. */
class Anilist {
	private client: ANILISTSDK;
	private graphQLClient: GraphQLClient;
	readonly http: BaseHttpClient;

	constructor();
	constructor(token: string);
	constructor(options: Exclude<AnilistClientInput, string | undefined>);
	constructor(input?: AnilistClientInput) {
		const { graphQLClient, httpClient, sdkClient } = createClientBundle(input);
		this.http = httpClient;
		this.graphQLClient = graphQLClient;
		this.client = sdkClient;

		this.anime = new AnimeService(this.client, this.graphQLClient);
		this.character = new CharacterService(this.client, this.graphQLClient);
		this.graphql = new GraphQLService(this.graphQLClient);
		this.manga = new MangaService(this.client, this.graphQLClient);
		this.media = new MediaService(this.client, this.graphQLClient);
		this.mediaList = new MediaListService(this.client, this.graphQLClient);
		this.staff = new StaffService(this.client, this.graphQLClient);
		this.user = new UserService(this.client, this.graphQLClient);
	}

	/** Releases resources held by api-core plugins and transports. */
	dispose(): Promise<void> {
		return this.http.dispose();
	}

	anime: AnimeService;
	character: CharacterService;
	graphql: GraphQLService;
	manga: MangaService;
	media: MediaService;
	mediaList: MediaListService;
	staff: StaffService;
	user: UserService;
}

export { gql } from "@api-wrappers/api-core";
export * from "./__generated__/anilist-schema";
export * as AniListOperations from "./__generated__/anilist-sdk";
export type {
	AnilistClientBundle,
	AnilistClientInput,
	AnilistOptions,
	AnilistToken,
} from "./client";
export {
	createClient,
	createClientBundle,
	createGraphQLClient,
	createHttpClient,
	createSdkClient,
} from "./client";
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
