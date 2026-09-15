import { describe, expect, it } from "bun:test";
import {
	buildAnimeByIdDocument,
	buildAnimeSearchDocument,
	buildMediaListCollectionByUserDocument,
	buildMediaPageDocument,
	buildParsedMarkdownDocument,
	buildSaveReviewDocument,
	buildSiteStatisticsDocument,
	buildToggleFavouriteDocument,
	buildViewerStatisticsDocument,
} from "../src/selections/builder";

const compact = (document: string) => document.replace(/\s+/g, " ").trim();

describe("critical selected documents", () => {
	it("detail documents keep the root args and selection order", () => {
		expect(
			compact(
				buildAnimeByIdDocument({ id: true, title: { userPreferred: true } }),
			),
		).toBe(
			"query SelectedAnimeById($id: Int) { Media(id: $id, type: ANIME) { id title { userPreferred } } }",
		);
	});

	it("search documents keep page args and pageInfo", () => {
		expect(
			compact(
				buildAnimeSearchDocument({
					pageInfo: { hasNextPage: true },
					media: { id: true },
				}),
			),
		).toBe(
			"query SelectedAnimeSearch($query: String, $page: Int, $perPage: Int) { Page(page: $page, perPage: $perPage) { pageInfo { hasNextPage } media(search: $query, type: ANIME) { id } } }",
		);
	});

	it("browse documents keep every filter argument in order", () => {
		expect(
			compact(
				buildMediaPageDocument(
					"SelectedMangaBrowse",
					"($genre: String, $format: MediaFormat, $status: MediaStatus, $startDate: FuzzyDateInt, $page: Int, $perPage: Int)",
					[
						"genre: $genre",
						"format: $format",
						"status: $status",
						"startDate: $startDate",
						"type: MANGA",
						"sort: POPULARITY_DESC",
						"isAdult: false",
					],
					{ media: { id: true } },
				),
			),
		).toBe(
			'query SelectedMangaBrowse($genre: String, $format: MediaFormat, $status: MediaStatus, $startDate: FuzzyDateInt, $page: Int, $perPage: Int) { Page(page: $page, perPage: $perPage) { media(genre: $genre, format: $format, status: $status, startDate: $startDate, type: MANGA, sort: POPULARITY_DESC, isAdult: false) { id } } }',
		);
	});

	it("collection documents keep the id/type/status arguments", () => {
		expect(
			compact(
				buildMediaListCollectionByUserDocument(
					{ lists: { entries: { id: true } } },
					"id",
				),
			),
		).toBe(
			"query SelectedMediaListCollectionByUser($userId: Int, $mediaType: MediaType, $status: MediaListStatus) { MediaListCollection(userId: $userId, type: $mediaType, status: $status) { lists { entries { id } } } }",
		);
	});

	it("mutation documents keep the mutation root args", () => {
		expect(
			compact(
				buildToggleFavouriteDocument({ anime: { nodes: { id: true } } }, "animeId"),
			),
		).toBe(
			"mutation SelectedToggleFavoriteAnime($id: Int) { ToggleFavourite(animeId: $id) { anime { nodes { id } } } }",
		);

		expect(compact(buildSaveReviewDocument({ id: true }))).toBe(
			"mutation SelectedSaveReview($id: Int, $mediaId: Int, $body: String, $summary: String, $score: Int, $private: Boolean) { SaveReview(id: $id, mediaId: $mediaId, body: $body, summary: $summary, score: $score, private: $private) { id } }",
		);
	});

	it("utility documents keep fixed nested roots", () => {
		expect(compact(buildViewerStatisticsDocument({ anime: { count: true } }))).toBe(
			"query SelectedViewerStatistics { Viewer { statistics { anime { count } } } }",
		);

		expect(
			compact(buildSiteStatisticsDocument({ users: { nodes: { count: true } } })),
		).toBe(
			"query SelectedSiteStatistics { SiteStatistics { users { nodes { count } } } }",
		);

		expect(compact(buildParsedMarkdownDocument({ html: true }))).toBe(
			"query SelectedMarkdown($markdown: String!) { Markdown(markdown: $markdown) { html } }",
		);
	});
});
