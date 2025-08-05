import { describe, expect, it } from "bun:test";
import { Anilist } from "../src";

const testId = 30001;

describe("Anilist Manga API", () => {
	const anilist = new Anilist();

	it("should return trending manga", async () => {
		const res = await anilist.manga.getMangaTrending();
		// Page.media should be an array
		expect(res).toMatchObject({
			Page: {
				media: expect.any(Array),
			},
		});
	});

	it("should return popular manga", async () => {
		const res = await anilist.manga.getMangaPopular();
		// Page.media should be an array
		expect(res).toMatchObject({
			Page: {
				media: expect.any(Array),
			},
		});
	});

	it("should return manga recommendations from id", async () => {
		const res = (await anilist.manga.getMangaRecommendations(testId)) as any;
		// recommendations.edges is an array containing at least one node.media object
		expect(res.Media.recommendations.edges).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					node: expect.objectContaining({
						media: expect.any(Object),
					}),
				}),
			]),
		);
	});

	it("should return manga info by id", async () => {
		const res = await anilist.manga.getMangaById(testId);
		// Media.id should be a number
		expect(res).toMatchObject({
			Media: {
				id: expect.any(Number),
			},
		});
	});

	it("should return manga info by title", async () => {
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
	});

	it("should return manga characters by id", async () => {
		const res = (await anilist.manga.getMangaCharacters(testId)) as any;
		// characters.edges is an array containing at least one node with id and name object
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

	it("should return manga list by genre", async () => {
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
	});

	it("should return manga relations by id", async () => {
		const res = (await anilist.manga.getMangaRelations(testId)) as any;

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

	it("should return manga staff by id", async () => {
		const res = (await anilist.manga.getMangaStaff(testId)) as any;
		// staff.edges is an array containing at least one node with id and name object
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
});
