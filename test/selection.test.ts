import { describe, expect, it } from "bun:test";
import {
	LikeableType,
	MediaListStatus,
	MediaSeason,
	RecommendationRating,
	ReviewRating,
} from "../src";
import type { MediaTypeNonEnum } from "../src/@types";
import type { GraphQLClientRequestOptions } from "../src/__generated__/anilist-sdk";
import { buildPageDocument, buildRootDocument } from "../src/selections/builder";
import { AnimeService } from "../src/services/animeService";
import { CharacterService } from "../src/services/characterService";
import { MangaService } from "../src/services/mangaService";
import { MediaListService } from "../src/services/mediaListService";
import { MediaService } from "../src/services/mediaService";
import { toMediaType } from "../src/services/mediaType";
import { SocialService } from "../src/services/socialService";
import { StaffService } from "../src/services/staffService";
import { StudioService } from "../src/services/studioService";
import { UserService } from "../src/services/userService";
import { FakeSdk, sdkResult } from "./fakeSdk";

// ── Fake low-level GraphQL client ─────────────────────────────────────────────

type RecordedRequest = {
	document: string;
	variables: Record<string, unknown>;
};

class FakeGraphQLClient {
	readonly requests: RecordedRequest[] = [];
	private response: unknown = undefined;

	setResponse(value: unknown) {
		this.response = value;
		return this;
	}

	client() {
		return {
			request: async <
				TData = unknown,
				TVariables extends object = Record<string, unknown>,
			>(
				options: GraphQLClientRequestOptions<TVariables>,
			): Promise<TData> => {
				this.requests.push({
					document: options.document.toString(),
					variables: (options.variables ?? {}) as Record<string, unknown>,
				});
				return this.response as TData;
			},
		};
	}

	lastRequest(): RecordedRequest {
		const req = this.requests.at(-1);
		if (!req) throw new Error("No requests recorded.");
		return req;
	}
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function makeAnimeService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new AnimeService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeMangaService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new MangaService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeMediaService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new MediaService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeCharacterService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new CharacterService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeStaffService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new StaffService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeStudioService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new StudioService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeSocialService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new SocialService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeUserService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new UserService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

function makeMediaListService() {
	const sdk = new FakeSdk();
	const gql = new FakeGraphQLClient();
	const service = new MediaListService(sdk.client(), gql.client());
	return { sdk, gql, service };
}

// ── No-selection calls still use the SDK ─────────────────────────────────────

describe("no-selection calls use the generated SDK", () => {
	it("AnimeService.getAnimeById without select hits SDK", async () => {
		const fake = new FakeSdk().respond(
			"GetAnimeById",
			sdkResult("GetAnimeById", { Media: null }),
		);
		const service = new AnimeService(fake.client());

		await service.getAnimeById(16498);

		expect(fake.lastCall("GetAnimeById").variables).toEqual({ id: 16498 });
	});

	it("AnimeService.getAnimeBySearch without select hits SDK", async () => {
		const fake = new FakeSdk().respond(
			"SearchAnime",
			sdkResult("SearchAnime", { Page: null }),
		);
		const service = new AnimeService(fake.client());

		await service.getAnimeBySearch("Frieren");

		expect(fake.lastCall("SearchAnime").variables).toEqual({
			query: "Frieren",
			page: 1,
			perPage: 10,
		});
	});

	it("MangaService.getMangaById without select hits SDK", async () => {
		const fake = new FakeSdk().respond(
			"GetMangaById",
			sdkResult("GetMangaById", { Media: null }),
		);
		const service = new MangaService(fake.client());

		await service.getMangaById(30013);

		expect(fake.lastCall("GetMangaById").variables).toEqual({ id: 30013 });
	});

	it("MangaService.getMangaBySearch without select hits SDK", async () => {
		const fake = new FakeSdk().respond(
			"SearchManga",
			sdkResult("SearchManga", { Page: null }),
		);
		const service = new MangaService(fake.client());

		await service.getMangaBySearch("Berserk");

		expect(fake.lastCall("SearchManga").variables).toEqual({
			query: "Berserk",
			page: 1,
			perPage: 10,
		});
	});

	it("MediaService.getMediaById without select hits SDK", async () => {
		const fake = new FakeSdk().respond(
			"GetMediaById",
			sdkResult("GetMediaById", { Media: null }),
		);
		const service = new MediaService(fake.client());

		await service.getMediaById(16498);

		expect(fake.lastCall("GetMediaById").variables).toEqual({ id: 16498 });
	});
});

// ── Selected detail calls hit the low-level GraphQL client ───────────────────

describe("selected detail calls use the low-level GraphQL client", () => {
	it("AnimeService.getAnimeById with select uses dynamic document and correct variables", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({
			Media: { id: 16498, title: { userPreferred: "Frieren" } },
		});

		const result = await service.getAnimeById(16498, {
			select: { id: true, title: { userPreferred: true } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ id: 16498 });
		expect(req.document).toContain("Media(id: $id, type: ANIME)");
		expect(req.document).toContain("id");
		expect(req.document).toContain("title");
		expect(req.document).toContain("userPreferred");
		expect(result).toEqual({
			Media: { id: 16498, title: { userPreferred: "Frieren" } },
		});
	});

	it("MangaService.getMangaById with select uses MANGA type in document", async () => {
		const { gql, service } = makeMangaService();
		gql.setResponse({ Media: { id: 30013, genres: ["Action"] } });

		await service.getMangaById(30013, { select: { id: true, genres: true } });

		const req = gql.lastRequest();
		expect(req.document).toContain("Media(id: $id, type: MANGA)");
	});

	it("MediaService.getMediaById with select uses no type filter", async () => {
		const { gql, service } = makeMediaService();
		gql.setResponse({ Media: { id: 16498 } });

		await service.getMediaById(16498, { select: { id: true } });

		const req = gql.lastRequest();
		expect(req.document).toContain("Media(id: $id)");
		expect(req.document).not.toContain("type:");
	});

	it("coverImage nested selection appears in document", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Media: { coverImage: { large: "url" } } });

		await service.getAnimeById(1, {
			select: { coverImage: { large: true } },
		});

		const req = gql.lastRequest();
		expect(req.document).toContain("coverImage");
		expect(req.document).toContain("large");
		expect(req.document).not.toContain("medium");
	});

	it("previously missing scalar fields are now selectable: startDate, endDate, trailer, nextAiringEpisode", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Media: {} });

		await service.getAnimeById(1, {
			select: {
				startDate: { year: true, month: true, day: true },
				endDate: { year: true },
				trailer: { id: true, site: true, thumbnail: true },
				nextAiringEpisode: { episode: true, airingAt: true },
				autoCreateForumThread: true,
				isRecommendationBlocked: true,
				isReviewBlocked: true,
				modNotes: true,
				seasonInt: true,
			},
		});

		const req = gql.lastRequest();
		expect(req.document).toContain("startDate");
		expect(req.document).toContain("year");
		expect(req.document).toContain("endDate");
		expect(req.document).toContain("trailer");
		expect(req.document).toContain("thumbnail");
		expect(req.document).toContain("nextAiringEpisode");
		expect(req.document).toContain("airingAt");
		expect(req.document).toContain("autoCreateForumThread");
		expect(req.document).toContain("isRecommendationBlocked");
		expect(req.document).toContain("isReviewBlocked");
		expect(req.document).toContain("modNotes");
		expect(req.document).toContain("seasonInt");
	});

	it("connection types are selectable: characters, relations, tags, externalLinks", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Media: {} });

		await service.getAnimeById(1, {
			select: {
				characters: {
					edges: {
						role: true,
						node: { id: true },
					},
				},
				relations: {
					edges: {
						relationType: true,
						node: { id: true, type: true },
					},
				},
				tags: { name: true, rank: true },
				externalLinks: { url: true, site: true },
			},
		});

		const req = gql.lastRequest();
		expect(req.document).toContain("characters");
		expect(req.document).toContain("role");
		expect(req.document).toContain("relations");
		expect(req.document).toContain("relationType");
		expect(req.document).toContain("tags");
		expect(req.document).toContain("externalLinks");
	});
});

// ── Selected search calls translate lowercase page → GraphQL Page ─────────────

describe("selected search calls use the low-level client with correct page mapping", () => {
	it("AnimeService.getAnimeBySearch returns lowercase page key", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({
			Page: {
				pageInfo: { currentPage: 1, hasNextPage: true },
				media: [{ id: 16498 }],
			},
		});

		const result = await service.getAnimeBySearch("Frieren", 1, 10, {
			select: {
				page: {
					pageInfo: { currentPage: true, hasNextPage: true },
					media: { id: true },
				},
			},
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ query: "Frieren", page: 1, perPage: 10 });
		expect(req.document).toContain("Page(page: $page, perPage: $perPage)");
		expect(req.document).toContain("media(search: $query, type: ANIME)");
		expect(req.document).toContain("pageInfo");
		expect(req.document).toContain("currentPage");
		expect(req.document).toContain("hasNextPage");
		expect(req.document).toContain("id");
		expect(result).toHaveProperty("page");
		expect((result as { page: unknown }).page).toEqual({
			pageInfo: { currentPage: 1, hasNextPage: true },
			media: [{ id: 16498 }],
		});
	});

	it("pageInfo is omitted from document when not selected", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { media: [{ id: 1 }] } });

		await service.getAnimeBySearch("test", 1, 10, {
			select: { page: { media: { id: true } } },
		});

		expect(gql.lastRequest().document).not.toContain("pageInfo");
	});

	it("media is omitted from document when only pageInfo is selected", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { pageInfo: { total: 100 } } });

		await service.getAnimeBySearch("test", 1, 10, {
			select: { page: { pageInfo: { total: true } } },
		});

		const doc = gql.lastRequest().document;
		expect(doc).toContain("pageInfo");
		expect(doc).not.toContain("media(");
	});

	it("MangaService.getMangaBySearch uses MANGA type in document", async () => {
		const { gql, service } = makeMangaService();
		gql.setResponse({ Page: { media: [{ id: 30013 }] } });

		await service.getMangaBySearch("Berserk", 1, 10, {
			select: { page: { media: { id: true } } },
		});

		expect(gql.lastRequest().document).toContain(
			"media(search: $query, type: MANGA)",
		);
	});
});

// ── Selected calls are available across read endpoint families ───────────────

describe("selected read endpoints across services", () => {
	it("AnimeService page and media sub-resource endpoints accept derived selects", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { media: [{ id: 1 }] } });

		await service.getTrendingAnime(1, 5, {
			select: { page: { media: { id: true }, pageInfo: { hasNextPage: true } } },
		});
		expect(gql.lastRequest().document).toContain("sort: TRENDING_DESC");

		await service.getAnimeListByGenre("Fantasy", 2, 5, {
			select: { page: { media: { title: { userPreferred: true } } } },
		});
		expect(gql.lastRequest().variables).toEqual({
			genre: "Fantasy",
			page: 2,
			perPage: 5,
		});

		await service.getSeasonalAnime(MediaSeason.Fall, 2023, 1, 5, {
			select: { page: { media: { season: true } } },
		});
		expect(gql.lastRequest().document).toContain("seasonYear: $seasonYear");

		gql.setResponse({ Media: { characters: { edges: [] } } });
		await service.getCharacters(16498, {
			select: { characters: { edges: { role: true, node: { id: true } } } },
		});
		expect(gql.lastRequest().document).toContain("characters");
	});

	it("MangaService page and media sub-resource endpoints accept derived selects", async () => {
		const { gql, service } = makeMangaService();
		gql.setResponse({ Page: { media: [{ id: 30013 }] } });

		await service.getMangaTrending(1, 5, {
			select: { page: { media: { id: true } } },
		});
		expect(gql.lastRequest().document).toContain("type: MANGA");

		await service.getMangaByTitle("Berserk", {
			select: { page: { media: { title: { romaji: true } } } },
		});
		expect(gql.lastRequest().variables).toEqual({
			title: "Berserk",
			page: 1,
			perPage: 1,
		});

		gql.setResponse({ Media: { recommendations: { edges: [] } } });
		await service.getMangaRecommendations(30013, {
			select: { recommendations: { edges: { node: { id: true } } } },
		});
		expect(gql.lastRequest().document).toContain("recommendations");
	});

	it("CharacterService and StaffService endpoints accept derived selects", async () => {
		const character = makeCharacterService();
		character.gql.setResponse({ Character: { id: 1, name: { full: "Spike" } } });
		await character.service.getCharacterById(1, {
			select: { id: true, name: { full: true } },
		});
		expect(character.gql.lastRequest().document).toContain("Character(id: $id)");

		await character.service.getCharactersBirthdayToday(1, 25, {
			select: { page: { characters: { id: true }, pageInfo: { total: true } } },
		});
		expect(character.gql.lastRequest().document).toContain(
			"characters(isBirthday: true)",
		);

		const staff = makeStaffService();
		staff.gql.setResponse({ Staff: { id: 1, name: { full: "Aoi" } } });
		await staff.service.getStaffById(1, {
			select: { id: true, name: { full: true } },
		});
		expect(staff.gql.lastRequest().document).toContain("Staff(id: $id)");

		await staff.service.getStaffBirthdayToday(1, 25, {
			select: { page: { staff: { id: true }, pageInfo: { total: true } } },
		});
		expect(staff.gql.lastRequest().document).toContain("staff(isBirthday: true)");
	});

	it("User, MediaService, and MediaListService endpoints accept derived selects", async () => {
		const user = makeUserService();
		user.gql.setResponse({ User: { id: 1, name: "example" } });
		await user.service.getUserInfo(1, { select: { id: true, name: true } });
		expect(user.gql.lastRequest().document).toContain("User(id: $id)");

		await user.service.getUserList(1, 10, {
			select: { page: { users: { id: true }, pageInfo: { total: true } } },
		});
		expect(user.gql.lastRequest().document).toContain("users");

		await user.service.getUserAnimeList(1, MediaListStatus.Current, {
			select: { lists: { entries: { media: { id: true } } } },
		});
		expect(user.gql.lastRequest().document).toContain("MediaListCollection");

		const media = makeMediaService();
		media.gql.setResponse({ MediaListCollection: { lists: [] } });
		await media.service.getMediaList(1, "ANIME", undefined, {
			select: { lists: { entries: { id: true } } },
		});
		expect(media.gql.lastRequest().variables).toMatchObject({ userId: 1 });

		const mediaList = makeMediaListService();
		mediaList.gql.setResponse({ MediaList: { id: 10 } });
		await mediaList.service.getMediaList(10, { select: { id: true } });
		expect(mediaList.gql.lastRequest().document).toContain("MediaList(id: $id)");

		await mediaList.service.getMediaListByUsername("example", "MANGA", undefined, {
			select: { lists: { entries: { progress: true } } },
		});
		expect(mediaList.gql.lastRequest().variables).toMatchObject({
			userName: "example",
		});
	});
});

// ── Selected mutation calls use the low-level GraphQL client ─────────────────

describe("selected mutation endpoints across services", () => {
	it("favorite mutations accept derived Favourites selections", async () => {
		const anime = makeAnimeService();
		anime.gql.setResponse({ ToggleFavourite: { anime: { nodes: [{ id: 1 }] } } });
		await anime.service.toggleFavorite(1, {
			select: { anime: { nodes: { id: true } } },
		});
		expect(anime.gql.lastRequest().variables).toEqual({ id: 1 });
		expect(anime.gql.lastRequest().document).toContain(
			"ToggleFavourite(animeId: $id)",
		);
		expect(anime.gql.lastRequest().document).toContain("nodes");

		const manga = makeMangaService();
		manga.gql.setResponse({ ToggleFavourite: { manga: { nodes: [{ id: 2 }] } } });
		await manga.service.toggleFavourite(2, {
			select: { manga: { nodes: { id: true } } },
		});
		expect(manga.gql.lastRequest().document).toContain(
			"ToggleFavourite(mangaId: $id)",
		);

		const character = makeCharacterService();
		character.gql.setResponse({
			ToggleFavourite: { characters: { nodes: [{ id: 3 }] } },
		});
		await character.service.toggleFavoriteCharacter(3, {
			select: { characters: { nodes: { id: true } } },
		});
		expect(character.gql.lastRequest().document).toContain(
			"ToggleFavourite(characterId: $id)",
		);

		const staff = makeStaffService();
		staff.gql.setResponse({ ToggleFavourite: { staff: { nodes: [{ id: 4 }] } } });
		await staff.service.toggleFavoriteStaff(4, {
			select: { staff: { nodes: { id: true } } },
		});
		expect(staff.gql.lastRequest().document).toContain(
			"ToggleFavourite(staffId: $id)",
		);
	});

	it("media list save and delete mutations accept derived selections", async () => {
		const { gql, service } = makeMediaListService();
		gql.setResponse({
			SaveMediaListEntry: { id: 10, progress: 3, media: { id: 16498 } },
		});

		await service.saveEntry(
			{
				mediaId: 16498,
				status: MediaListStatus.Current,
				progress: 3,
			},
			{
				select: { id: true, progress: true, media: { id: true } },
			},
		);

		expect(gql.lastRequest().variables).toMatchObject({
			mediaId: 16498,
			status: MediaListStatus.Current,
			progress: 3,
		});
		expect(gql.lastRequest().document).toContain("mutation");
		expect(gql.lastRequest().document).toContain("SaveMediaListEntry(");
		expect(gql.lastRequest().document).toContain("media {");

		await service.saveEntry(
			{
				id: 10,
				advancedScores: [90, 85],
				customLists: ["Favorites"],
				hiddenFromStatusLists: true,
				priority: 2,
				scoreRaw: 88,
			},
			{ select: { mediaList: { id: true } } },
		);
		expect(gql.lastRequest().variables).toMatchObject({
			id: 10,
			advancedScores: [90, 85],
			customLists: ["Favorites"],
			hiddenFromStatusLists: true,
			priority: 2,
			scoreRaw: 88,
		});
		expect(gql.lastRequest().document).toContain("scoreRaw: $scoreRaw");

		gql.setResponse({ DeleteMediaListEntry: { deleted: true } });
		const result = await service.deleteEntry(10, {
			select: { deleteMediaListEntry: { deleted: true } },
		});

		expect(gql.lastRequest().variables).toEqual({ id: 10 });
		expect(gql.lastRequest().document).toContain(
			"DeleteMediaListEntry(id: $id)",
		);
		expect(gql.lastRequest().document).toContain("deleted");
		expect(result).toEqual({ deleteMediaListEntry: { deleted: true } });
	});
});

// ── Normalized root-object selection shape ───────────────────────────────────

describe("normalized root-object selections return normalized roots", () => {
	it("detail endpoints return lowercase root keys", async () => {
		const anime = makeAnimeService();
		anime.gql.setResponse({ Media: { id: 16498 } });
		await expect(
			anime.service.getAnimeById(16498, {
				select: { media: { id: true } },
			}),
		).resolves.toEqual({ media: { id: 16498 } });

		const character = makeCharacterService();
		character.gql.setResponse({ Character: { id: 1 } });
		await expect(
			character.service.getCharacterById(1, {
				select: { character: { id: true } },
			}),
		).resolves.toEqual({ character: { id: 1 } });

		const staff = makeStaffService();
		staff.gql.setResponse({ Staff: { id: 2 } });
		await expect(
			staff.service.getStaffById(2, {
				select: { staff: { id: true } },
			}),
		).resolves.toEqual({ staff: { id: 2 } });

		const user = makeUserService();
		user.gql.setResponse({ User: { id: 3, name: "example" } });
		await expect(
			user.service.getUserInfo(3, {
				select: { user: { id: true, name: true } },
			}),
		).resolves.toEqual({ user: { id: 3, name: "example" } });
	});

	it("collection endpoints return normalized collection roots", async () => {
		const user = makeUserService();
		user.gql.setResponse({
			MediaListCollection: { lists: [{ entries: [{ id: 1 }] }] },
		});

		await expect(
			user.service.getUserAnimeList(1, MediaListStatus.Current, {
				select: {
					mediaListCollection: {
						lists: { entries: { id: true } },
					},
				},
			}),
		).resolves.toEqual({
			mediaListCollection: { lists: [{ entries: [{ id: 1 }] }] },
		});

		const mediaList = makeMediaListService();
		mediaList.gql.setResponse({ MediaList: { id: 10, progress: 3 } });
		await expect(
			mediaList.service.getMediaList(10, {
				select: { mediaList: { id: true, progress: true } },
			}),
		).resolves.toEqual({ mediaList: { id: 10, progress: 3 } });
	});

	it("mutation endpoints return normalized mutation roots", async () => {
		const anime = makeAnimeService();
		anime.gql.setResponse({
			ToggleFavourite: { anime: { nodes: [{ id: 16498 }] } },
		});
		await expect(
			anime.service.toggleFavorite(16498, {
				select: { favorites: { anime: { nodes: { id: true } } } },
			}),
		).resolves.toEqual({
			favorites: { anime: { nodes: [{ id: 16498 }] } },
		});

		const mediaList = makeMediaListService();
		mediaList.gql.setResponse({
			SaveMediaListEntry: { id: 10, status: MediaListStatus.Current },
		});
		await expect(
			mediaList.service.saveEntry(
				{ mediaId: 16498, status: MediaListStatus.Current },
				{
					select: { mediaList: { id: true, status: true } },
				},
			),
		).resolves.toEqual({
			mediaList: { id: 10, status: MediaListStatus.Current },
		});

		mediaList.gql.setResponse({ DeleteMediaListEntry: { deleted: true } });
		await expect(
			mediaList.service.deleteEntry(10, {
				select: { deleteMediaListEntry: { deleted: true } },
			}),
		).resolves.toEqual({ deleteMediaListEntry: { deleted: true } });
	});
});

// ── Empty selections throw TypeError before any network call ─────────────────
// (Unknown fields are caught at compile time by TypeScript, not at runtime.)

describe("empty selections throw TypeError before any request", () => {
	it("empty MediaSelect throws TypeError", () => {
		const { gql, service } = makeAnimeService();

		expect(() => service.getAnimeById(1, { select: {} })).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("empty nested object selection throws TypeError", () => {
		const { gql, service } = makeAnimeService();

		expect(() =>
			service.getAnimeById(1, { select: { title: {} } }),
		).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("empty page select throws TypeError", () => {
		const { gql, service } = makeAnimeService();

		expect(() =>
			service.getAnimeBySearch("test", 1, 10, { select: { page: {} } }),
		).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("empty pageInfo selection throws TypeError", () => {
		const { gql, service } = makeAnimeService();

		expect(() =>
			service.getAnimeBySearch("test", 1, 10, {
				select: { page: { pageInfo: {} } },
			}),
		).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("empty mutation selection throws TypeError", () => {
		const { gql, service } = makeAnimeService();

		expect(() => service.toggleFavorite(1, { select: {} })).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("empty delete mutation selection throws TypeError", () => {
		const { gql, service } = makeMediaListService();

		expect(() => service.deleteEntry(1, { select: {} })).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("invalid runtime selection values throw before any request", () => {
		const { gql, service } = makeAnimeService();
		const unsafeService = service as unknown as {
			getAnimeById(id: number, options: unknown): unknown;
		};

		expect(() =>
			unsafeService.getAnimeById(1, { select: { id: false } }),
		).toThrow(TypeError);
		expect(() =>
			unsafeService.getAnimeById(1, { select: { title: ["romaji"] } }),
		).toThrow(TypeError);
		expect(() =>
			unsafeService.getAnimeById(1, { select: { "id } mutation Bad": true } }),
		).toThrow(TypeError);
		expect(gql.requests).toHaveLength(0);
	});

	it("non-object select values throw before any request", () => {
		const { gql, service } = makeAnimeService();
		const unsafeService = service as unknown as {
			getAnimeById(id: number, options: unknown): unknown;
		};

		expect(() => unsafeService.getAnimeById(1, { select: null })).toThrow(
			"select must be an object.",
		);
		expect(() => unsafeService.getAnimeById(1, { select: [1, 2] })).toThrow(
			"select must be an object.",
		);
		expect(gql.requests).toHaveLength(0);
	});
});

// ── Type narrowing: selected result exposes only selected fields ──────────────

describe("selected return type narrowing", () => {
	it("getAnimeById selected result only exposes selected scalars", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Media: { id: 16498, averageScore: 90 } });

		const result = await service.getAnimeById(16498, {
			select: { id: true, averageScore: true },
		});

		const media = result.Media;
		if (media) {
			const _id: number = media.id;
			const _score: number | null = media.averageScore;
			// @ts-expect-error — episodes was not selected
			const _episodes = media.episodes;
		}
		expect(result.Media).toEqual({ id: 16498, averageScore: 90 });
	});

	it("getAnimeBySearch result uses lowercase page key, not Page", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { pageInfo: { total: 5 } } });

		const result = await service.getAnimeBySearch("test", 1, 10, {
			select: { page: { pageInfo: { total: true } } },
		});

		const _page = result.page;
		// @ts-expect-error — uppercase "Page" must not exist on the result
		const _upperPage = result.Page;
		expect(result).toHaveProperty("page");
	});
});

// ── Selection root routing ────────────────────────────────────────────────────

describe("selection root routing", () => {
	it("treats a mixed legacy staff selection as a direct Staff selection", async () => {
		const staff = makeStaffService();
		staff.gql.setResponse({ Staff: { id: 1, staff: { id: 2 } } });

		const result = await staff.service.getStaffById(1, {
			select: { id: true, staff: { id: true } },
		});

		const document = staff.gql.lastRequest().document.replace(/\s+/g, " ");
		expect(document).toContain("id staff { id }");
		expect(result).toEqual({ Staff: { id: 1, staff: { id: 2 } } });
	});

	it("still returns the normalized staff root for wrapped selections", async () => {
		const staff = makeStaffService();
		staff.gql.setResponse({ Staff: { id: 1 } });

		await expect(
			staff.service.getStaffById(1, { select: { staff: { id: true } } }),
		).resolves.toEqual({ staff: { id: 1 } });
	});
});

// ── Selected anime filters match the static queries ──────────────────────────

describe("selected anime filters match the static queries", () => {
	it("browseAnime selection includes the popularity sort and adult filter", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { media: [] } });

		await service.browseAnime({}, 1, 10, {
			select: { page: { media: { id: true } } },
		});

		const document = gql.lastRequest().document;
		expect(document).toContain("sort: POPULARITY_DESC");
		expect(document).toContain("isAdult: false");
	});

	it("getSeasonalAnime selection includes the popularity sort and adult filter", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { media: [] } });

		await service.getSeasonalAnime(MediaSeason.Fall, 2023, 1, 10, {
			select: { page: { media: { id: true } } },
		});

		const document = gql.lastRequest().document;
		expect(document).toContain("sort: POPULARITY_DESC");
		expect(document).toContain("isAdult: false");
	});
});

// ── Selected title lookups request a single result ───────────────────────────

describe("selected title lookups request a single result", () => {
	it("getAnimeByTitle and getMangaByTitle send perPage: 1", async () => {
		const anime = makeAnimeService();
		anime.gql.setResponse({ Page: { media: [] } });
		await anime.service.getAnimeByTitle("Frieren", {
			select: { page: { media: { id: true } } },
		});
		expect(anime.gql.lastRequest().variables).toEqual({
			title: "Frieren",
			page: 1,
			perPage: 1,
		});

		const manga = makeMangaService();
		manga.gql.setResponse({ Page: { media: [] } });
		await manga.service.getMangaByTitle("Berserk", {
			select: { page: { media: { id: true } } },
		});
		expect(manga.gql.lastRequest().variables).toEqual({
			title: "Berserk",
			page: 1,
			perPage: 1,
		});
	});
});

// ── Staff birthday pagination ─────────────────────────────────────────────────

describe("staff birthday pagination", () => {
	it("forwards perPage through the selected path", async () => {
		const { gql, service } = makeStaffService();
		gql.setResponse({ Page: { staff: [] } });

		await service.getStaffBirthdayToday(2, 50, {
			select: { page: { staff: { id: true } } },
		});

		expect(gql.lastRequest().variables).toEqual({ page: 2, perPage: 50 });
	});

	it("forwards perPage through the SDK path and defaults it to 25", async () => {
		const fake = new FakeSdk().respond(
			"StaffBirthdayToday",
			sdkResult("StaffBirthdayToday", { Page: null }),
		);
		const service = new StaffService(fake.client());

		await service.getStaffBirthdayToday(3, 40);
		await service.getStaffBirthdayToday();

		expect(fake.calls.map((call) => call.variables)).toEqual([
			{ page: 3, perPage: 40 },
			{ page: 1, perPage: 25 },
		]);
	});
});

// ── Media list collection status forwarding ──────────────────────────────────

describe("media list collection status forwarding", () => {
	it("forwards status in selected calls and omits it when absent", async () => {
		const select = { lists: { entries: { id: true } } } as const;
		const media = makeMediaService();

		media.gql.setResponse({ MediaListCollection: { lists: [] } });
		await media.service.getMediaList(1, "ANIME", MediaListStatus.Completed, {
			select,
		});
		expect(media.gql.lastRequest().variables).toEqual({
			userId: 1,
			mediaType: "ANIME",
			status: MediaListStatus.Completed,
		});

		media.gql.setResponse({ MediaListCollection: { lists: [] } });
		await media.service.getMediaList(1, "ANIME", undefined, { select });
		expect(media.gql.lastRequest().variables).toEqual({
			userId: 1,
			mediaType: "ANIME",
		});

		media.gql.setResponse({ MediaListCollection: { lists: [] } });
		await media.service.getMediaListByUsername(
			"example",
			"MANGA",
			MediaListStatus.Current,
			{ select },
		);
		expect(media.gql.lastRequest().variables).toEqual({
			userName: "example",
			mediaType: "MANGA",
			status: MediaListStatus.Current,
		});

		const mediaList = makeMediaListService();

		mediaList.gql.setResponse({ MediaListCollection: { lists: [] } });
		await mediaList.service.getMediaListByUser(
			1,
			"ANIME",
			MediaListStatus.Paused,
			{ select },
		);
		expect(mediaList.gql.lastRequest().variables).toEqual({
			userId: 1,
			mediaType: "ANIME",
			status: MediaListStatus.Paused,
		});

		mediaList.gql.setResponse({ MediaListCollection: { lists: [] } });
		await mediaList.service.getMediaListByUsername(
			"example",
			"MANGA",
			undefined,
			{ select },
		);
		expect(mediaList.gql.lastRequest().variables).toEqual({
			userName: "example",
			mediaType: "MANGA",
		});
	});
});

// ── Page selection shapes ─────────────────────────────────────────────────────

describe("page selection shapes", () => {
	it("builds documents from a legacy page body", async () => {
		const { gql, service } = makeAnimeService();
		gql.setResponse({ Page: { media: [{ id: 1 }], pageInfo: { total: 1 } } });
		const legacy = service as unknown as {
			getAnimeBySearch(
				search: string,
				page: number,
				perPage: number,
				options: unknown,
			): Promise<unknown>;
		};

		await legacy.getAnimeBySearch("test", 1, 10, {
			select: { pageInfo: { total: true }, media: { id: true } },
		});

		const document = gql.lastRequest().document;
		expect(document).toContain("pageInfo");
		expect(document).toContain("total");
		expect(document).toContain("media(search: $query, type: ANIME)");
	});

	it("throws descriptive TypeErrors for empty and undefined page selections", () => {
		const { gql, service } = makeAnimeService();
		const unsafe = service as unknown as {
			getAnimeBySearch(
				search: string,
				page: number,
				perPage: number,
				options: unknown,
			): unknown;
		};

		expect(() =>
			unsafe.getAnimeBySearch("test", 1, 10, { select: {} }),
		).toThrow(TypeError);
		expect(() =>
			unsafe.getAnimeBySearch("test", 1, 10, { select: {} }),
		).toThrow(/"pageInfo" and "media"/);
		expect(() =>
			unsafe.getAnimeBySearch("test", 1, 10, {
				select: { page: undefined },
			}),
		).toThrow(TypeError);
		expect(() =>
			unsafe.getAnimeBySearch("test", 1, 10, {
				select: { page: undefined },
			}),
		).toThrow(/"pageInfo" and "media"/);
		expect(gql.requests).toHaveLength(0);
	});
});

// ── Selection builder hardening ───────────────────────────────────────────────

describe("selection builder hardening", () => {
	it("skips null and undefined entries", () => {
		const document = buildRootDocument({
			operationName: "SelectedAnimeById",
			variableDefinitions: "($id: Int)",
			rootField: "Media",
			rootArgs: ["id: $id"],
			select: { id: true, title: null, coverImage: undefined, genres: true },
			context: "MediaSelect",
		});

		expect(document).toContain("id");
		expect(document).toContain("genres");
		expect(document).not.toContain("title");
		expect(document).not.toContain("coverImage");
	});

	it("throws a descriptive TypeError for unknown page keys", () => {
		expect(() =>
			buildPageDocument({
				operationName: "SelectedAnimeSearch",
				variableDefinitions: "($page: Int, $perPage: Int)",
				fieldName: "media",
				select: { media: { id: true }, bogus: true },
				context: "page select",
			}),
		).toThrow(/Allowed keys: pageInfo, media/);
	});
});

// ── Media type conversion ─────────────────────────────────────────────────────

describe("media type conversion", () => {
	it("throws a TypeError for unsupported media type strings", () => {
		expect(() => toMediaType("anime" as MediaTypeNonEnum)).toThrow(TypeError);
		expect(() => toMediaType("anime" as MediaTypeNonEnum)).toThrow(
			'mediaType must be "ANIME" or "MANGA".',
		);
	});
});

// ── Reference and read paths ──────────────────────────────────────────────────

describe("reference and read endpoint selections", () => {
	it("MediaService.getMediaTags supports normalized tag selections", async () => {
		const { gql, service } = makeMediaService();
		gql.setResponse({ MediaTagCollection: [{ id: 1, name: "Isekai" }] });

		const result = await service.getMediaTags(0, {
			select: { mediaTagCollection: { id: true, name: true } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ status: 0 });
		expect(req.document).toContain("MediaTagCollection(status: $status)");
		expect(result).toEqual({
			mediaTagCollection: [{ id: 1, name: "Isekai" }],
		});
	});

	it("MediaService.getAiringSchedule supports normalized schedule selections", async () => {
		const { gql, service } = makeMediaService();
		gql.setResponse({ AiringSchedule: { id: 4, episode: 3 } });

		await service.getAiringSchedule(4, {
			select: { airingSchedule: { id: true, episode: true } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ id: 4 });
		expect(req.document).toContain("AiringSchedule(id: $id)");
	});

	it("MediaService.getAiringSchedulesByMedia maps page selections", async () => {
		const { gql, service } = makeMediaService();
		gql.setResponse({ Page: { airingSchedules: [{ id: 1 }] } });

		const result = await service.getAiringSchedulesByMedia(16498, 2, 25, {
			select: { page: { airingSchedules: { id: true } } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ mediaId: 16498, page: 2, perPage: 25 });
		expect(req.document).toContain("airingSchedules(mediaId: $mediaId)");
		expect(result).toEqual({ page: { airingSchedules: [{ id: 1 }] } });
	});

	it("StudioService endpoints support selections", async () => {
		const studio = makeStudioService();
		studio.gql.setResponse({ Studio: { id: 1, name: "MAPPA" } });

		const result = await studio.service.getStudioById(1, {
			select: { studio: { id: true, name: true } },
		});
		expect(result).toEqual({ studio: { id: 1, name: "MAPPA" } });
		expect(studio.gql.lastRequest().document).toContain("Studio(id: $id)");

		studio.gql.setResponse({ Page: { studios: [{ id: 1 }] } });
		await studio.service.getStudioBySearch("MAPPA", 1, 10, {
			select: { page: { studios: { id: true } } },
		});
		const req = studio.gql.lastRequest();
		expect(req.document).toContain("studios(search: $query)");
		expect(req.variables).toMatchObject({
			query: "MAPPA",
			page: 1,
			perPage: 10,
		});
	});

	it("UserService viewer endpoints support selections", async () => {
		const user = makeUserService();
		user.gql.setResponse({ Viewer: { id: 1, name: "example" } });

		const viewer = await user.service.getViewer({
			select: { viewer: { id: true, name: true } },
		});
		expect(viewer).toEqual({ viewer: { id: 1, name: "example" } });
		expect(user.gql.lastRequest().document).toContain("Viewer");

		user.gql.setResponse({ Viewer: { statistics: { anime: { count: 5 } } } });
		const statistics = await user.service.getViewerStatistics({
			select: { viewerStatistics: { anime: { count: true } } },
		});
		expect(statistics).toEqual({
			viewerStatistics: { anime: { count: 5 } },
		});
	});
});

// ── List write endpoints ──────────────────────────────────────────────────────

describe("list write endpoint selections", () => {
	it("MediaListService.updateEntries supports normalized selections", async () => {
		const { gql, service } = makeMediaListService();
		gql.setResponse({ UpdateMediaListEntries: [{ id: 1, progress: 3 }] });

		const result = await service.updateEntries(
			{ ids: [1, 2], status: MediaListStatus.Current, progress: 3 },
			{ select: { updateMediaListEntries: { id: true, progress: true } } },
		);

		const req = gql.lastRequest();
		expect(req.variables).toMatchObject({
			ids: [1, 2],
			status: MediaListStatus.Current,
			progress: 3,
		});
		expect(req.document).toContain("UpdateMediaListEntries(ids: $ids");
		expect(result).toEqual({
			updateMediaListEntries: [{ id: 1, progress: 3 }],
		});
	});

	it("MediaListService.deleteCustomList supports normalized selections", async () => {
		const { gql, service } = makeMediaListService();
		gql.setResponse({ DeleteCustomList: { deleted: true } });

		const result = await service.deleteCustomList("Favorites", "ANIME", {
			select: { deleteCustomList: { deleted: true } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({
			customList: "Favorites",
			type: "ANIME",
		});
		expect(req.document).toContain(
			"DeleteCustomList(customList: $customList, type: $type)",
		);
		expect(result).toEqual({ deleteCustomList: { deleted: true } });
	});

	it("StudioService.toggleFavorite supports normalized selections", async () => {
		const studio = makeStudioService();
		studio.gql.setResponse({
			ToggleFavourite: { studios: { nodes: [{ id: 1 }] } },
		});

		await studio.service.toggleFavorite(1, {
			select: { favorites: { studios: { nodes: { id: true } } } },
		});

		const req = studio.gql.lastRequest();
		expect(req.variables).toEqual({ id: 1 });
		expect(req.document).toContain("ToggleFavourite(studioId: $id)");
	});
});

// ── Review and recommendation endpoints ───────────────────────────────────────

describe("review and recommendation endpoint selections", () => {
	it("MediaService.getReviews and getRecommendationsPage map page selections", async () => {
		const { gql, service } = makeMediaService();
		gql.setResponse({ Page: { reviews: [{ id: 1, summary: "Great" }] } });

		const reviews = await service.getReviews(16498, 2, 10, {
			select: { page: { reviews: { id: true, summary: true } } },
		});
		const reviewsRequest = gql.lastRequest();
		expect(reviewsRequest.variables).toEqual({
			mediaId: 16498,
			page: 2,
			perPage: 10,
		});
		expect(reviewsRequest.document).toContain("reviews(mediaId: $mediaId)");
		expect(reviews).toEqual({
			page: { reviews: [{ id: 1, summary: "Great" }] },
		});

		gql.setResponse({ Page: { recommendations: [{ id: 2 }] } });
		await service.getRecommendationsPage(16498, 1, 10, {
			select: { page: { recommendations: { id: true } } },
		});
		expect(gql.lastRequest().document).toContain(
			"recommendations(mediaId: $mediaId)",
		);
	});

	it("MediaService review and recommendation mutations support selections", async () => {
		const { gql, service } = makeMediaService();

		gql.setResponse({ SaveRecommendation: { id: 1, rating: -1 } });
		await service.saveRecommendation(
			16498,
			5114,
			RecommendationRating.RateDown,
			{ select: { recommendation: { id: true, rating: true } } },
		);
		const saveRecommendationRequest = gql.lastRequest();
		expect(saveRecommendationRequest.variables).toEqual({
			mediaId: 16498,
			mediaRecommendationId: 5114,
			rating: RecommendationRating.RateDown,
		});
		expect(saveRecommendationRequest.document).toContain(
			"SaveRecommendation(mediaId: $mediaId",
		);

		gql.setResponse({ SaveReview: { id: 7, summary: "Great" } });
		await service.saveReview(
			{ mediaId: 16498, summary: "Great", score: 90 },
			{ select: { review: { id: true, summary: true } } },
		);
		expect(gql.lastRequest().variables).toMatchObject({
			mediaId: 16498,
			summary: "Great",
			score: 90,
		});

		gql.setResponse({ RateReview: { id: 7, rating: 10 } });
		await service.rateReview(7, ReviewRating.UpVote, {
			select: { review: { id: true, rating: true } },
		});
		expect(gql.lastRequest().document).toContain(
			"RateReview(reviewId: $reviewId, rating: $rating)",
		);

		gql.setResponse({ DeleteReview: { deleted: true } });
		const deleted = await service.deleteReview(7, {
			select: { deleteReview: { deleted: true } },
		});
		expect(deleted).toEqual({ deleteReview: { deleted: true } });
	});

	it("UserService.getReviews maps page selections", async () => {
		const user = makeUserService();
		user.gql.setResponse({ Page: { reviews: [{ id: 3 }] } });

		await user.service.getReviews(1, 1, 5, {
			select: { page: { reviews: { id: true } } },
		});

		const req = user.gql.lastRequest();
		expect(req.variables).toEqual({ userId: 1, page: 1, perPage: 5 });
		expect(req.document).toContain("reviews(userId: $userId)");
	});
});

// ── Social and forum endpoints ────────────────────────────────────────────────

describe("social and forum endpoint selections", () => {
	it("SocialService.getFollowing maps page selections", async () => {
		const { gql, service } = makeSocialService();
		gql.setResponse({ Page: { following: [{ id: 1, name: "example" }] } });

		const result = await service.getFollowing(1, 1, 25, {
			select: { page: { following: { id: true, name: true } } },
		});

		const req = gql.lastRequest();
		expect(req.variables).toEqual({ userId: 1, page: 1, perPage: 25 });
		expect(req.document).toContain("following(userId: $userId)");
		expect(result).toEqual({ page: { following: [{ id: 1, name: "example" }] } });
	});

	it("SocialService thread, statistics, markdown, and follow selections", async () => {
		const { gql, service } = makeSocialService();

		gql.setResponse({ Thread: { id: 5, title: "News" } });
		const thread = await service.getThread(5, {
			select: { thread: { id: true, title: true } },
		});
		expect(thread).toEqual({ thread: { id: 5, title: "News" } });
		expect(gql.lastRequest().document).toContain("Thread(id: $id)");

		gql.setResponse({ SiteStatistics: { users: { nodes: [{ count: 1 }] } } });
		await service.getSiteStatistics({
			select: { siteStatistics: { users: { nodes: { count: true } } } },
		});
		expect(gql.lastRequest().document).toContain("SiteStatistics");

		gql.setResponse({ Markdown: { html: "<p>hi</p>" } });
		const markdown = await service.getMarkdown("# hi", {
			select: { markdown: { html: true } },
		});
		expect(markdown).toEqual({ markdown: { html: "<p>hi</p>" } });

		gql.setResponse({ ToggleFollow: { id: 2, isFollowing: true } });
		const follow = await service.toggleFollow(2, {
			select: { user: { id: true, isFollowing: true } },
		});
		expect(follow).toEqual({ user: { id: 2, isFollowing: true } });
		expect(gql.lastRequest().document).toContain(
			"ToggleFollow(userId: $userId)",
		);
	});

	it("union social reads use the generated SDK", async () => {
		const sdk = new FakeSdk()
			.respond(
				"GetNotifications",
				sdkResult("GetNotifications", { Page: null }),
			)
			.respond("GetActivities", sdkResult("GetActivities", { Page: null }))
			.respond("GetActivity", sdkResult("GetActivity", { Activity: null }))
			.respond("ToggleLike", sdkResult("ToggleLike", { ToggleLikeV2: null }));
		const service = new SocialService(sdk.client());

		await service.getNotifications(1, 10);
		await service.getActivities(5, 1, 10);
		await service.getActivity(3);
		await service.toggleLike(3, LikeableType.Thread);

		expect(sdk.lastCall("GetNotifications").variables).toEqual({
			page: 1,
			perPage: 10,
		});
		expect(sdk.lastCall("GetActivities").variables).toEqual({
			userId: 5,
			page: 1,
			perPage: 10,
		});
		expect(sdk.lastCall("GetActivity").variables).toEqual({ id: 3 });
		expect(sdk.lastCall("ToggleLike").variables).toEqual({
			id: 3,
			type: LikeableType.Thread,
		});
	});
});
