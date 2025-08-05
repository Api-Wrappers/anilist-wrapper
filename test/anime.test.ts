import { describe, expect, it } from "bun:test";
import { Anilist } from "../src";

const testId = 1;
const testTitle = "Cowboy Bebop";

describe("Anilist Anime API", () => {
	const anilist = new Anilist();

	it("should return trending anime", async () => {
		const res = await anilist.anime.getTrendingAnime();

		expect(res).toMatchObject({
			Page: {
				media: expect.any(Array),
			},
		});
	});

	it("should return popular anime", async () => {
		const res = await anilist.anime.getPopularAnime();

		expect(res).toMatchObject({
			Page: {
				media: expect.any(Array),
			},
		});
	});

	it("should return anime info by id", async () => {
		const res = await anilist.anime.getAnimeById(testId);

		expect(res).toMatchObject({
			Media: {
				id: expect.any(Number),
			},
		});
	});

	it("should return anime info by search", async () => {
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
	});

	it("should return anime info by title", async () => {
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
	});

	it("should return anime recommendations by id", async () => {
		const res = (await anilist.anime.getRecommendations(testId)) as any;

		Bun.write("recommendations.json", JSON.stringify(res, null, 2));

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
	});

	it("should return anime characters by id", async () => {
		const res = (await anilist.anime.getCharacters(testId)) as any;

		expect(res.Media.characters.edges).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					node: expect.objectContaining({
						id: expect.any(Number),
						name: expect.any(Object),
					}),
				}),
			]),
		);
	});

	it("should return anime staff by id", async () => {
		const res = (await anilist.anime.getStaff(testId)) as any;

		expect(res.Media.staff.edges).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					node: expect.objectContaining({
						id: expect.any(Number),
						name: expect.any(Object),
					}),
				}),
			]),
		);
	});

	it("should return anime relations by id", async () => {
		const res = (await anilist.anime.getRelations(testId)) as any;

		// Ensure edges is an array
		expect(Array.isArray(res.Media.relations.edges)).toBe(true);

		// Expect at least one relation edge with the proper shape
		expect(res.Media.relations.edges).toEqual(
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
	});

	it("should return anime list by genre", async () => {
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
	});
});
