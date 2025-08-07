import { beforeEach, describe, expect, it } from "bun:test";
import { Anilist } from "../src";
import { delay, handleRateLimit, isRateLimitError } from "./utils";

const testId = 30001;

describe("Anilist Manga API", () => {
	const anilist = new Anilist();

	// Add a delay between tests to respect rate limits
	beforeEach(async () => {
		await delay(1000); // 1 second delay between tests
	});

	it("should return trending manga", async () => {
		try {
			const res = await anilist.manga.getMangaTrending(1, 10);
			// Page.media should be an array
			expect(res).toMatchObject({
				Page: {
					media: expect.any(Array),
				},
			});
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return popular manga", async () => {
		try {
			const res = await anilist.manga.getMangaPopular(1, 10);
			// Page.media should be an array
			expect(res).toMatchObject({
				Page: {
					media: expect.any(Array),
				},
			});
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga recommendations from id", async () => {
		try {
			const res = await anilist.manga.getMangaRecommendations(testId);
			// recommendations.edges is an array containing at least one node.media object
			expect(res.Media?.recommendations?.edges).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						node: expect.objectContaining({
							media: expect.any(Object),
						}),
					}),
				]),
			);
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga info by id", async () => {
		try {
			const res = await anilist.manga.getMangaById(testId);
			// Media.id should be a number
			expect(res).toMatchObject({
				Media: {
					id: expect.any(Number),
				},
			});
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga info by title", async () => {
		try {
			const res = await anilist.manga.getMangaByTitle("Berserk");
			// Page.media is an array containing at least one media with id and romaji title
			expect(res).toMatchObject({
				Page: {
					media: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							title: expect.objectContaining({
								romaji: expect.any(String),
							}),
						}),
					]),
				},
			});
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga characters by id", async () => {
		try {
			const res = await anilist.manga.getMangaCharacters(testId);
			// characters.edges is an array containing at least one node with id and name object
			expect(res.Media?.characters?.edges).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						node: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(Object),
						}),
					}),
				]),
			);
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga list by genre", async () => {
		try {
			const res = await anilist.manga.getMangaListByGenre("Action");
			// Page.media is an array containing at least one media whose genres include "Action"
			expect(res).toMatchObject({
				Page: {
					media: expect.arrayContaining([
						expect.objectContaining({
							id: expect.any(Number),
							genres: expect.arrayContaining(["Action"]),
						}),
					]),
				},
			});
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga relations by id", async () => {
		try {
			const res = await anilist.manga.getMangaRelations(testId);

			// Ensure edges is an array
			expect(Array.isArray(res.Media?.relations?.edges)).toBe(true);

			// Expect at least one relation edge with the proper shape
			expect(res.Media?.relations?.edges).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						relationType: expect.any(String),
						node: expect.objectContaining({
							id: expect.any(Number),
							title: expect.objectContaining({
								romaji: expect.any(String),
								english: expect.any(String),
								native: expect.any(String),
							}),
							coverImage: expect.objectContaining({
								large: expect.any(String),
								medium: expect.any(String),
							}),
							description: expect.any(String),
						}),
					}),
				]),
			);
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return manga staff by id", async () => {
		try {
			const res = await anilist.manga.getMangaStaff(testId);
			// staff.edges is an array containing at least one node with id and name object
			expect(res.Media?.staff?.edges).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						node: expect.objectContaining({
							id: expect.any(Number),
							name: expect.any(Object),
						}),
					}),
				]),
			);
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});
});
