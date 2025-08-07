import { beforeEach, describe, expect, it } from "bun:test";
import { Anilist } from "../src";
import { delay, handleRateLimit, isRateLimitError } from "./utils";

const testId = 1;
const testTitle = "Cowboy Bebop";

describe("Anilist Anime API", () => {
	const anilist = new Anilist();

	// Add a delay between tests to respect rate limits
	beforeEach(async () => {
		await delay(1000); // 1 second delay between tests
	});

	it("should return trending anime", async () => {
		try {
			const res = await anilist.anime.getTrendingAnime();

			expect(res).toMatchObject({
				Page: {
					media: expect.any(Array),
				},
			});
		} catch (error) {
			// Handle rate limiting gracefully
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});

	it("should return popular anime", async () => {
		try {
			const res = await anilist.anime.getPopularAnime();

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

	it("should return anime info by id", async () => {
		try {
			const res = await anilist.anime.getAnimeById(testId);

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

	it("should return anime info by search", async () => {
		try {
			const res = await anilist.anime.getAnimeBySearch(testTitle);

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

	it("should return anime info by title", async () => {
		try {
			const res = await anilist.anime.getAnimeByTitle(testTitle);

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

	it("should return anime recommendations by id", async () => {
		try {
			const res = await anilist.anime.getRecommendations(testId);

			expect(res).toMatchObject({
				Media: {
					recommendations: {
						edges: expect.arrayContaining([
							expect.objectContaining({
								node: expect.objectContaining({
									media: expect.objectContaining({
										id: expect.any(Number),
										title: expect.objectContaining({
											romaji: expect.any(String),
										}),
									}),
								}),
							}),
						]),
					},
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

	it("should return anime characters by id", async () => {
		try {
			const res = await anilist.anime.getCharacters(testId);

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

	it("should return anime staff by id", async () => {
		try {
			const res = await anilist.anime.getStaff(testId);

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

	it("should return anime relations by id", async () => {
		try {
			const res = await anilist.anime.getRelations(testId);

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
							}),
							coverImage: expect.objectContaining({
								large: expect.any(String),
								medium: expect.any(String),
							}),
							// description, english, and native titles may be null/undefined
							// so we don't enforce them in the test
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

	it("should return anime list by genre", async () => {
		try {
			const res = await anilist.anime.getAnimeListByGenre("Action");

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
});
