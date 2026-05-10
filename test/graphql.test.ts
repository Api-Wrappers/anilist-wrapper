import { describe, expect, it } from "bun:test";
import { Anilist, gql } from "../src";
import { handleRateLimit, isRateLimitError } from "./utils";

describe("Anilist raw GraphQL API", () => {
	const anilist = new Anilist();

	it("should execute arbitrary AniList queries", async () => {
		try {
			const res = await anilist.graphql.request<{
				GenreCollection: Array<string | null> | null;
			}>(gql`
				query Genres {
					GenreCollection
				}
			`);

			expect(res.GenreCollection).toEqual(expect.arrayContaining(["Action"]));
		} catch (error) {
			if (isRateLimitError(error)) {
				handleRateLimit();
				return;
			}
			throw error;
		}
	});
});
