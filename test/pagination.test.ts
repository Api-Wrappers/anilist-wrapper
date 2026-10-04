import { describe, expect, it } from "bun:test";
import { RateLimitError } from "@api-wrappers/api-core";
import { collectPages, paginate } from "../src/pagination";

type SdkPage = {
	Page: {
		pageInfo: { hasNextPage: boolean | null; currentPage: number | null };
		media: Array<{ id: number }> | null;
	} | null;
};

type SelectedPage = {
	page: {
		pageInfo: { hasNextPage: boolean | null; currentPage: number | null };
		media: Array<{ id: number }> | null;
	} | null;
};

describe("paginate", () => {
	it("yields every item across pages until hasNextPage is false", async () => {
		const pages: Record<number, SdkPage> = {
			1: {
				Page: {
					pageInfo: { hasNextPage: true, currentPage: 1 },
					media: [{ id: 1 }],
				},
			},
			2: {
				Page: {
					pageInfo: { hasNextPage: false, currentPage: 2 },
					media: [{ id: 2 }],
				},
			},
		};

		const seen: number[] = [];
		for await (const media of paginate(
			async (page) => pages[page] as SdkPage,
			(response) => ({
				pageInfo: response.Page?.pageInfo,
				items: response.Page?.media,
			}),
		)) {
			seen.push(media.id);
		}

		expect(seen).toEqual([1, 2]);
	});

	it("supports the selected lowercase page shape", async () => {
		const pages: Record<number, SelectedPage> = {
			1: {
				page: {
					pageInfo: { hasNextPage: true, currentPage: 1 },
					media: [{ id: 1 }],
				},
			},
			2: {
				page: {
					pageInfo: { hasNextPage: false, currentPage: 2 },
					media: [{ id: 2 }],
				},
			},
		};

		const collected = await collectPages(
			async (page) => pages[page] as SelectedPage,
			(response) => ({
				pageInfo: response.page?.pageInfo,
				items: response.page?.media,
			}),
		);

		expect(collected.map((media) => media.id)).toEqual([1, 2]);
	});

	it("honors startPage and maxPages", async () => {
		const requested: number[] = [];
		const collected = await collectPages(
			async (page) => {
				requested.push(page);
				return {
					Page: {
						pageInfo: { hasNextPage: true, currentPage: page },
						media: [{ id: page }],
					},
				} satisfies SdkPage;
			},
			(response) => ({
				pageInfo: response.Page?.pageInfo,
				items: response.Page?.media,
			}),
			{ startPage: 3, maxPages: 2 },
		);

		expect(requested).toEqual([3, 4]);
		expect(collected.map((media) => media.id)).toEqual([3, 4]);
	});

	it("stops when a page has no pageInfo", async () => {
		const collected = await collectPages(
			async () => ({ Page: { media: [{ id: 1 }] } }) as SdkPage,
			(response) => ({
				pageInfo: response.Page?.pageInfo,
				items: response.Page?.media,
			}),
		);

		expect(collected.map((media) => media.id)).toEqual([1]);
	});

	it("propagates rate-limit errors untouched", async () => {
		const rateLimitError = new RateLimitError(60_000);

		const generator = paginate(
			async () => {
				throw rateLimitError;
			},
			(response: SdkPage) => ({
				pageInfo: response.Page?.pageInfo,
				items: response.Page?.media,
			}),
		);

		try {
			await generator.next();
			throw new Error("expected paginate to throw");
		} catch (error) {
			expect(error).toBe(rateLimitError);
		}
	});
});
