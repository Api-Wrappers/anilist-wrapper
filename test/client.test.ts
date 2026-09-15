import { beforeEach, describe, expect, it } from "bun:test";
import type { RequestContext } from "@api-wrappers/api-core";
import type { GraphQLClientRequestOptions } from "../src/__generated__/anilist-sdk";
import { createGraphQLClient, type AnilistRequestOptions } from "../src/client";

const requests: RequestContext[] = [];

const transport = {
	async execute(ctx: RequestContext) {
		requests.push(ctx);
		return new Response(JSON.stringify({ data: { ok: true } }), {
			headers: { "content-type": "application/json" },
		});
	},
};

describe("client transport", () => {
	beforeEach(() => {
		requests.length = 0;
	});

	it("configures the AniList endpoint and JSON headers by default", async () => {
		const client = createGraphQLClient({ core: { transport } });

		await client.request({ document: "query Viewer { Viewer { id } }" });

		expect(requests[0]?.url).toBe("https://graphql.anilist.co");
		expect(requests[0]?.headers["content-type"]).toBe("application/json");
	});

	it("adds bearer auth when a token is provided", async () => {
		const client = createGraphQLClient({
			token: "token-123",
			core: { transport },
		});

		await client.request({ document: "query Viewer { Viewer { id } }" });

		expect(requests[0]?.headers.authorization).toBe("Bearer token-123");
	});

	it("forwards request options and removes equivalent fragments", async () => {
		const signal = new AbortController().signal;
		const client = createGraphQLClient({ core: { transport } });

		const result = await client.request({
			document: `
				query Example($id: Int) {
					Media(id: $id) {
						...TitleFields
						...TitleFields
					}
				}

				fragment TitleFields on Media {
					title { romaji }
				}

				fragment TitleFields on Media { title { romaji } }
			`,
			variables: { id: 16498 },
			requestHeaders: { "x-request": "test" },
			signal,
		});
		const body = requests[0]?.body as { query: string; variables?: object };

		expect(result).toEqual({ ok: true });
		expect(body.variables).toEqual({ id: 16498 });
		expect(requests[0]?.headers["x-request"]).toBe("test");
		expect(requests[0]?.signal).toBe(signal);
		expect(body.query.match(/fragment\s+TitleFields\s+on/g)?.length).toBe(1);
	});

	it("forwards api-core request controls", async () => {
		const signal = new AbortController().signal;
		const client = createGraphQLClient({ core: { transport } });
		const request = client.request as <TData = unknown>(
			options: GraphQLClientRequestOptions & AnilistRequestOptions,
		) => Promise<TData>;

		await request({
			document: "query Viewer { Viewer { id } }",
			requestHeaders: { "x-request": "test" },
			signal,
			timeoutMs: 5_000,
			cacheKey: "viewer",
			tags: ["viewer"],
			operationName: "Viewer",
		});

		expect(requests[0]).toMatchObject({
			headers: { "x-request": "test" },
			signal,
			timeoutMs: 5_000,
			cacheKey: "viewer",
			tags: ["viewer"],
		});
		const body = requests[0]?.body as { operationName?: string };
		expect(body.operationName).toBe("Viewer");
	});

	it("rejects conflicting fragment definitions before transport", () => {
		const client = createGraphQLClient({ core: { transport } });

		expect(() =>
			client.request({
				document: `
					query Example { Media { ...TitleFields } }
					fragment TitleFields on Media { title { romaji } }
					fragment TitleFields on Media { title { english } }
				`,
			}),
		).toThrow("Conflicting GraphQL fragment definition: TitleFields");
		expect(requests).toHaveLength(0);
	});
});
