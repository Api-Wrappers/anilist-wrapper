import { describe, expect, it } from "bun:test";
import {
	MediaFormat,
	MediaListStatus,
	MediaSeason,
	MediaStatus,
	MediaType,
	RecommendationRating,
	ReviewRating,
} from "../src";
import { AnimeService } from "../src/services/animeService";
import { GraphQLService } from "../src/services/graphqlService";
import { MangaService } from "../src/services/mangaService";
import { MediaListService } from "../src/services/mediaListService";
import { MediaService } from "../src/services/mediaService";
import { SocialService } from "../src/services/socialService";
import { StudioService } from "../src/services/studioService";
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

	it("maps MangaService browse filters to the generated SDK operation", async () => {
		const fake = new FakeSdk().respond(
			"GetMangaBrowse",
			sdkResult("GetMangaBrowse", { Page: null }),
		);
		const service = new MangaService(fake.client());

		await service.browseManga(
			{ genre: "Action", format: MediaFormat.Manga, status: MediaStatus.Releasing },
			2,
			15,
		);

		expect(fake.lastCall("GetMangaBrowse").variables).toEqual({
			genre: "Action",
			format: MediaFormat.Manga,
			status: MediaStatus.Releasing,
			startDate: undefined,
			page: 2,
			perPage: 15,
		});
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

	it("maps StudioService lookup and search defaults", async () => {
		const fake = new FakeSdk()
			.respond("GetStudioById", sdkResult("GetStudioById", { Studio: null }))
			.respond("SearchStudio", sdkResult("SearchStudio", { Page: null }));
		const service = new StudioService(fake.client());

		await service.getStudioById(21);
		await service.getStudioBySearch("Trigger");

		expect(fake.lastCall("GetStudioById").variables).toEqual({ id: 21 });
		expect(fake.lastCall("SearchStudio").variables).toEqual({
			query: "Trigger",
			page: 1,
			perPage: 10,
		});
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
		await service.getMediaList(1, "ANIME", MediaListStatus.Planning);
		await service.getMediaListByUsername("example", "MANGA");

		expect(fake.lastCall("GetMediaById").variables).toEqual({ id: 16498 });
		expect(fake.lastCall("GetMediaListByUser").variables).toEqual({
			userId: 1,
			mediaType: MediaType.Anime,
			status: MediaListStatus.Planning,
		});
		expect(fake.lastCall("GetMediaListByUserByUsername").variables).toEqual({
			userName: "example",
			mediaType: MediaType.Manga,
			status: undefined,
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
		await service.getMediaListByUsername(
			"example",
			"MANGA",
			MediaListStatus.Completed,
		);
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
			status: undefined,
		});
		expect(fake.lastCall("GetMediaListByUserByUsername").variables).toEqual({
			userName: "example",
			mediaType: MediaType.Manga,
			status: MediaListStatus.Completed,
		});
		expect(fake.lastCall("SaveMediaListEntry").variables).toEqual({
			advancedScores: undefined,
			completedAt: undefined,
			customLists: undefined,
			hiddenFromStatusLists: undefined,
			id: undefined,
			mediaId: 16498,
			notes: null,
			private: undefined,
			priority: undefined,
			progress: 3,
			progressVolumes: undefined,
			repeat: undefined,
			score: 8,
			scoreRaw: undefined,
			startedAt: undefined,
			status: MediaListStatus.Current,
		});
		expect(fake.lastCall("DeleteMediaListEntry").variables).toEqual({ id: 99 });
	});

	it("maps reference read endpoints to generated SDK operations", async () => {
		const fake = new FakeSdk()
			.respond("GetGenres", sdkResult("GetGenres", { GenreCollection: null }))
			.respond(
				"GetMediaTags",
				sdkResult("GetMediaTags", { MediaTagCollection: null }),
			)
			.respond(
				"GetAiringSchedule",
				sdkResult("GetAiringSchedule", { AiringSchedule: null }),
			)
			.respond(
				"GetAiringSchedulesByMedia",
				sdkResult("GetAiringSchedulesByMedia", { Page: null }),
			)
			.respond("GetStudioById", sdkResult("GetStudioById", { Studio: null }))
			.respond("SearchStudio", sdkResult("SearchStudio", { Page: null }))
			.respond("GetViewer", sdkResult("GetViewer", { Viewer: null }))
			.respond(
				"GetViewerStatistics",
				sdkResult("GetViewerStatistics", { Viewer: null }),
			);
		const media = new MediaService(fake.client());
		const studio = new StudioService(fake.client());
		const user = new UserService(fake.client());

		await media.getGenres();
		await media.getMediaTags(1);
		await media.getAiringSchedule(5);
		await media.getAiringSchedulesByMedia(3, 2, 50);
		await studio.getStudioById(7);
		await studio.getStudioBySearch("MAPPA", 2, 5);
		await user.getViewer();
		await user.getViewerStatistics();

		expect(fake.lastCall("GetGenres").variables).toBeUndefined();
		expect(fake.lastCall("GetMediaTags").variables).toEqual({ status: 1 });
		expect(fake.lastCall("GetAiringSchedule").variables).toEqual({ id: 5 });
		expect(fake.lastCall("GetAiringSchedulesByMedia").variables).toEqual({
			mediaId: 3,
			page: 2,
			perPage: 50,
		});
		expect(fake.lastCall("GetStudioById").variables).toEqual({ id: 7 });
		expect(fake.lastCall("SearchStudio").variables).toEqual({
			query: "MAPPA",
			page: 2,
			perPage: 5,
		});
		expect(fake.lastCall("GetViewer").variables).toBeUndefined();
		expect(fake.lastCall("GetViewerStatistics").variables).toBeUndefined();
	});

	it("maps list write endpoints to generated SDK operations", async () => {
		const fake = new FakeSdk()
			.respond(
				"UpdateMediaListEntries",
				sdkResult("UpdateMediaListEntries", { UpdateMediaListEntries: null }),
			)
			.respond(
				"DeleteCustomList",
				sdkResult("DeleteCustomList", { DeleteCustomList: null }),
			)
			.respond(
				"ToggleFavoriteStudio",
				sdkResult("ToggleFavoriteStudio", { ToggleFavourite: null }),
			);
		const mediaList = new MediaListService(fake.client());
		const studio = new StudioService(fake.client());

		await mediaList.updateEntries({ ids: [1, 2], progress: 4 });
		await mediaList.deleteCustomList("Favorites", "ANIME");
		await studio.toggleFavorite(9);

		expect(fake.lastCall("UpdateMediaListEntries").variables).toMatchObject({
			ids: [1, 2],
			progress: 4,
		});
		expect(fake.lastCall("DeleteCustomList").variables).toEqual({
			customList: "Favorites",
			type: MediaType.Anime,
		});
		expect(fake.lastCall("ToggleFavoriteStudio").variables).toEqual({
			studioId: 9,
		});
	});

	it("maps review and recommendation endpoints to generated SDK operations", async () => {
		const fake = new FakeSdk()
			.respond(
				"GetMediaReviews",
				sdkResult("GetMediaReviews", { Page: null }),
			)
			.respond("GetUserReviews", sdkResult("GetUserReviews", { Page: null }))
			.respond(
				"GetRecommendationsPage",
				sdkResult("GetRecommendationsPage", { Page: null }),
			)
			.respond(
				"SaveRecommendation",
				sdkResult("SaveRecommendation", { SaveRecommendation: null }),
			)
			.respond("RateReview", sdkResult("RateReview", { RateReview: null }))
			.respond("SaveReview", sdkResult("SaveReview", { SaveReview: null }))
			.respond(
				"DeleteReview",
				sdkResult("DeleteReview", { DeleteReview: null }),
			);
		const media = new MediaService(fake.client());
		const user = new UserService(fake.client());

		await media.getReviews(16498, 1, 10);
		await media.getRecommendationsPage(16498, 1, 10);
		await media.saveRecommendation(16498, 5114, RecommendationRating.RateUp);
		await media.rateReview(7, ReviewRating.UpVote);
		await media.saveReview({ mediaId: 16498, summary: "Great" });
		await media.deleteReview(7);
		await user.getReviews(1, 1, 10);

		expect(fake.lastCall("GetMediaReviews").variables).toEqual({
			mediaId: 16498,
			page: 1,
			perPage: 10,
		});
		expect(fake.lastCall("GetRecommendationsPage").variables).toEqual({
			mediaId: 16498,
			page: 1,
			perPage: 10,
		});
		expect(fake.lastCall("SaveRecommendation").variables).toEqual({
			mediaId: 16498,
			mediaRecommendationId: 5114,
			rating: RecommendationRating.RateUp,
		});
		expect(fake.lastCall("RateReview").variables).toEqual({
			reviewId: 7,
			rating: ReviewRating.UpVote,
		});
		expect(fake.lastCall("SaveReview").variables).toMatchObject({
			mediaId: 16498,
			summary: "Great",
		});
		expect(fake.lastCall("DeleteReview").variables).toEqual({ id: 7 });
		expect(fake.lastCall("GetUserReviews").variables).toEqual({
			userId: 1,
			page: 1,
			perPage: 10,
		});
	});

	it("maps social and forum write endpoints to generated SDK operations", async () => {
		const fake = new FakeSdk()
			.respond(
				"SaveTextActivity",
				sdkResult("SaveTextActivity", { SaveTextActivity: null }),
			)
			.respond(
				"SaveMessageActivity",
				sdkResult("SaveMessageActivity", { SaveMessageActivity: null }),
			)
			.respond(
				"SaveActivityReply",
				sdkResult("SaveActivityReply", { SaveActivityReply: null }),
			)
			.respond(
				"DeleteActivity",
				sdkResult("DeleteActivity", { DeleteActivity: null }),
			)
			.respond(
				"DeleteActivityReply",
				sdkResult("DeleteActivityReply", { DeleteActivityReply: null }),
			)
			.respond(
				"ToggleActivitySubscription",
				sdkResult("ToggleActivitySubscription", {
					ToggleActivitySubscription: null,
				}),
			)
			.respond(
				"ToggleActivityPin",
				sdkResult("ToggleActivityPin", { ToggleActivityPin: null }),
			)
			.respond("SaveThread", sdkResult("SaveThread", { SaveThread: null }))
			.respond(
				"SaveThreadComment",
				sdkResult("SaveThreadComment", { SaveThreadComment: null }),
			)
			.respond(
				"DeleteThread",
				sdkResult("DeleteThread", { DeleteThread: null }),
			)
			.respond(
				"DeleteThreadComment",
				sdkResult("DeleteThreadComment", { DeleteThreadComment: null }),
			)
			.respond(
				"ToggleThreadSubscription",
				sdkResult("ToggleThreadSubscription", {
					ToggleThreadSubscription: null,
				}),
			);
		const social = new SocialService(fake.client());

		await social.saveTextActivity({ text: "Hello" });
		await social.saveMessageActivity({ message: "Hi", recipientId: 2 });
		await social.saveActivityReply({ activityId: 3, text: "Reply" });
		await social.deleteActivity(3);
		await social.deleteActivityReply(4);
		await social.toggleActivitySubscription(3, true);
		await social.toggleActivityPin(3, true);
		await social.saveThread({ title: "News", body: "Body" });
		await social.saveThreadComment({ threadId: 5, comment: "Nice" });
		await social.deleteThread(5);
		await social.deleteThreadComment(6);
		await social.toggleThreadSubscription(5, true);

		expect(fake.lastCall("SaveTextActivity").variables).toMatchObject({
			text: "Hello",
		});
		expect(fake.lastCall("SaveMessageActivity").variables).toMatchObject({
			message: "Hi",
			recipientId: 2,
		});
		expect(fake.lastCall("SaveActivityReply").variables).toMatchObject({
			activityId: 3,
			text: "Reply",
		});
		expect(fake.lastCall("DeleteActivity").variables).toEqual({ id: 3 });
		expect(fake.lastCall("DeleteActivityReply").variables).toEqual({ id: 4 });
		expect(fake.lastCall("ToggleActivitySubscription").variables).toEqual({
			activityId: 3,
			subscribe: true,
		});
		expect(fake.lastCall("ToggleActivityPin").variables).toEqual({
			id: 3,
			pinned: true,
		});
		expect(fake.lastCall("SaveThread").variables).toMatchObject({
			title: "News",
			body: "Body",
		});
		expect(fake.lastCall("SaveThreadComment").variables).toMatchObject({
			threadId: 5,
			comment: "Nice",
		});
		expect(fake.lastCall("DeleteThread").variables).toEqual({ id: 5 });
		expect(fake.lastCall("DeleteThreadComment").variables).toEqual({ id: 6 });
		expect(fake.lastCall("ToggleThreadSubscription").variables).toEqual({
			threadId: 5,
			subscribe: true,
		});
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
