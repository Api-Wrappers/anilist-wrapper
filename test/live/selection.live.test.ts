import { describe, expect, it } from "bun:test";
import { Anilist } from "../../src";
import { handleRateLimit, isRateLimitError } from "../utils";

describe("AniList selected-field API", () => {
	const anilist = new Anilist();

	it("executes normalized detail and paginated selections against AniList", async () => {
		try {
			const detail = await anilist.anime.getAnimeById(1, {
				select: {
					media: {
						id: true,
						title: { romaji: true },
						characters: {
							edges: { role: true, node: { id: true, name: { full: true } } },
						},
					},
				},
			});

			expect(detail.media).toMatchObject({
				id: 1,
				title: { romaji: expect.any(String) },
			});

			const search = await anilist.anime.getAnimeBySearch("Cowboy Bebop", 1, 2, {
				select: {
					page: {
						pageInfo: { currentPage: true, hasNextPage: true },
						media: { id: true, title: { userPreferred: true } },
					},
				},
			});

			expect(search.page).toMatchObject({
				pageInfo: { currentPage: 1 },
				media: expect.any(Array),
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
