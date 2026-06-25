import { describe, expect, it } from "bun:test";
import {
	MediaFormat,
	MediaListStatus,
	MediaSeason,
	MediaStatus,
	MediaType,
} from "../src";
import { AnimeService } from "../src/services/animeService";
import { GraphQLService } from "../src/services/graphqlService";
import { MangaService } from "../src/services/mangaService";
import { MediaListService } from "../src/services/mediaListService";
import { MediaService } from "../src/services/mediaService";
import { UserService } from "../src/services/userService";
import type { GraphQLClientRequestOptions } from "../src/__generated__/anilist-sdk";
import { FakeSdk, sdkResult } from "./fakeSdk";

describe("service contracts", () => {
	it("maps AnimeService.getAnimeById to the generated SDK operation", async () => {
		const response = sdkResult("GetAnimeById", {
			Media: {
				id: 16498,
			},
		});
		const fake = new FakeSdk().respond("GetAnimeById", response);
		const service = new AnimeService(fake.client());

		const result = await service.getAnimeById(16498);

		expect(result).toBe(response);
		expect(fake.lastCall("GetAnimeById").variables).toEqual({ id: 16498 });
	});

	it("maps AnimeService search and browse defaults", async () => {
		const fake = new FakeSdk()
			.respond("SearchAnime", sdkResult("SearchAnime", { Page: null }))
			.respond("GetAnimeBrowse", sdkResult("GetAnimeBrowse", { Page: null }))
			.respond(
				"GetSeasonalAnime",
				sdkResult("GetSeasonalAnime", { Page: null }),
			);
		const service = new AnimeService(fake.client());

		await service.getAnimeBySearch("Frieren");
		await service.browseAnime({
			genre: "Fantasy",
			format: MediaFormat.Tv,
			status: MediaStatus.Finished,
			seasonYear: 2023,
		});
		await service.getSeasonalAnime(MediaSeason.Fall, 2023);

		expect(fake.lastCall("SearchAnime").variables).toEqual({
			query: "Frieren",
			page: 1,
			perPage: 10,
		});
		expect(fake.lastCall("GetAnimeBrowse").variables).toEqual({
			genre: "Fantasy",
			format: MediaFormat.Tv,
			status: MediaStatus.Finished,
			seasonYear: 2023,
			page: 1,
			perPage: 10,
		});
		expect(fake.lastCall("GetSeasonalAnime").variables).toEqual({
			season: MediaSeason.Fall,
			seasonYear: 2023,
			page: undefined,
			perPage: undefined,
		});
	});

	it("keeps AnimeService favorite spellings backwards-compatible", async () => {
		const fake = new FakeSdk().respond(
			"ToggleFavoriteAnime",
			sdkResult("ToggleFavoriteAnime", { ToggleFavourite: null }),
		);
		const service = new AnimeService(fake.client());

		await service.toggleFavourite(16498);
		await service.toggleFavorite(16499);

		expect(fake.calls.map((call) => call.variables)).toEqual([
			{ animeId: 16498 },
			{ animeId: 16499 },
		]);
	});

	it("maps MangaService lookups, defaults, and favorite aliases", async () => {
		const fake = new FakeSdk()
			.respond("GetMangaById", sdkResult("GetMangaById", { Media: null }))
			.respond("SearchManga", sdkResult("SearchManga", { Page: null }))
			.respond(
				"GetMangaTrending",
				sdkResult("GetMangaTrending", { Page: null }),
			)
			.respond(
				"ToggleFavoriteManga",
				sdkResult("ToggleFavoriteManga", { ToggleFavourite: null }),
			);
		const service = new MangaService(fake.client());

		await service.getMangaById(30013);
		await service.getMangaBySearch("Berserk");
		await service.getMangaTrending();
		await service.toggleFavourite(30013);
		await service.toggleFavorite(30014);

		expect(fake.lastCall("GetMangaById").variables).toEqual({ id: 30013 });
		expect(fake.lastCall("SearchManga").variables).toEqual({
			query: "Berserk",
			page: 1,
			perPage: 10,
		});
		expect(fake.lastCall("GetMangaTrending").variables).toEqual({
			page: 1,
			perPage: 20,
		});
		expect(
			fake.calls
				.filter((call) => call.operation === "ToggleFavoriteManga")
				.map((call) => call.variables),
		).toEqual([{ mangaId: 30013 }, { mangaId: 30014 }]);
	});

	it("maps UserService IDs, usernames, pagination, and status defaults", async () => {
		const fake = new FakeSdk()
			.respond("GetUserInfo", sdkResult("GetUserInfo", { User: null }))
			.respond(
				"GetUserInfoByUsername",
				sdkResult("GetUserInfoByUsername", { User: null }),
			)
			.respond(
				"GetUserAnimeList",
				sdkResult("GetUserAnimeList", { MediaListCollection: null }),
			)
			.respond(
				"GetUserMangaListByUsername",
				sdkResult("GetUserMangaListByUsername", {
					MediaListCollection: null,
				}),
			)
			.respond("GetUserList", sdkResult("GetUserList", { Page: null }));
		const service = new UserService(fake.client());

		await service.getUserInfo(1);
		await service.getUserInfoByUsername("example");
		await service.getUserAnimeList(1);
		await service.getUserMangaListByUsername("example", MediaListStatus.Completed);
		await service.getUserList();

		expect(fake.lastCall("GetUserInfo").variables).toEqual({ id: 1 });
		expect(fake.lastCall("GetUserInfoByUsername").variables).toEqual({
			userName: "example",
		});
		expect(fake.lastCall("GetUserAnimeList").variables).toEqual({
			userId: 1,
			status: MediaListStatus.Current,
		});
		expect(fake.lastCall("GetUserMangaListByUsername").variables).toEqual({
			userName: "example",
			status: MediaListStatus.Completed,
		});
		expect(fake.lastCall("GetUserList").variables).toEqual({
			page: 1,
			perPage: 10,
		});
	});

	it("maps MediaService media IDs and normalizes media type strings", async () => {
		const fake = new FakeSdk()
			.respond("GetMediaById", sdkResult("GetMediaById", { Media: null }))
			.respond(
				"GetMediaListByUser",
				sdkResult("GetMediaListByUser", { MediaListCollection: null }),
			)
			.respond(
				"GetMediaListByUserByUsername",
				sdkResult("GetMediaListByUserByUsername", {
					MediaListCollection: null,
				}),
			);
		const service = new MediaService(fake.client());

		await service.getMediaById(16498);
		await service.getMediaList(1, "ANIME");
		await service.getMediaListByUsername("example", "MANGA");

		expect(fake.lastCall("GetMediaById").variables).toEqual({ id: 16498 });
		expect(fake.lastCall("GetMediaListByUser").variables).toEqual({
			userId: 1,
			mediaType: MediaType.Anime,
		});
		expect(fake.lastCall("GetMediaListByUserByUsername").variables).toEqual({
			userName: "example",
			mediaType: MediaType.Manga,
		});
	});

	it("maps MediaListService reads, writes, deletes, and media type strings", async () => {
		const fake = new FakeSdk()
			.respond("GetMediaList", sdkResult("GetMediaList", { MediaList: null }))
			.respond(
				"GetMediaListByUser",
				sdkResult("GetMediaListByUser", { MediaListCollection: null }),
			)
			.respond(
				"GetMediaListByUserByUsername",
				sdkResult("GetMediaListByUserByUsername", {
					MediaListCollection: null,
				}),
			)
			.respond(
				"SaveMediaListEntry",
				sdkResult("SaveMediaListEntry", { SaveMediaListEntry: null }),
			)
			.respond(
				"DeleteMediaListEntry",
				sdkResult("DeleteMediaListEntry", { DeleteMediaListEntry: null }),
			);
		const service = new MediaListService(fake.client());

		await service.getMediaList(10);
		await service.getMediaListByUser(1, "ANIME");
		await service.getMediaListByUsername("example", "MANGA");
		await service.saveEntry({
			mediaId: 16498,
			status: MediaListStatus.Current,
			score: 8,
			progress: 3,
			notes: null,
		});
		await service.deleteEntry(99);

		expect(fake.lastCall("GetMediaList").variables).toEqual({ id: 10 });
		expect(fake.lastCall("GetMediaListByUser").variables).toEqual({
			userId: 1,
			mediaType: MediaType.Anime,
		});
		expect(fake.lastCall("GetMediaListByUserByUsername").variables).toEqual({
			userName: "example",
			mediaType: MediaType.Manga,
		});
		expect(fake.lastCall("SaveMediaListEntry").variables).toEqual({
			completedAt: undefined,
			mediaId: 16498,
			notes: null,
			private: undefined,
			progress: 3,
			progressVolumes: undefined,
			repeat: undefined,
			score: 8,
			startedAt: undefined,
			status: MediaListStatus.Current,
		});
		expect(fake.lastCall("DeleteMediaListEntry").variables).toEqual({ id: 99 });
	});
});

describe("GraphQLService contracts", () => {
	it("forwards raw documents, variables, headers, and abort signals", async () => {
		const signal = new AbortController().signal;
		let capturedOptions:
			| GraphQLClientRequestOptions<{ id: number }>
			| undefined;
		const request = async <
			TData = unknown,
			TVariables extends object = Record<string, unknown>,
		>(
			options: GraphQLClientRequestOptions<TVariables>,
		): Promise<TData> => {
			capturedOptions = options as GraphQLClientRequestOptions<{ id: number }>;
			return { ok: true } as TData;
		};
		const service = new GraphQLService({ request });

		const result = await service.request<{ ok: boolean }, { id: number }>(
			"query Test($id: Int) { Media(id: $id) { id } }",
			{ id: 16498 },
			{
				requestHeaders: { "x-test": "1" },
				signal,
			},
		);

		expect(result).toEqual({ ok: true });
		expect(capturedOptions).toEqual({
			document: "query Test($id: Int) { Media(id: $id) { id } }",
			variables: { id: 16498 },
			requestHeaders: { "x-test": "1" },
			signal,
		});
	});
});
