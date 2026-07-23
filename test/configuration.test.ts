import { describe, expect, it } from "bun:test";
import type { RequestContext } from "@api-wrappers/api-core";
import { Anilist, createHttpClient } from "../src";

const QUERY = "query Viewer { Viewer { id } }";

describe("Anilist client configuration", () => {
	it("loads dynamic bearer tokens before each request", async () => {
		let token = "first";
		const requests: RequestContext[] = [];
		const client = createHttpClient({
			token: () => token,
			core: {
				transport: {
					async execute(ctx) {
						requests.push(ctx);
						return new Response(JSON.stringify({ data: { Viewer: null } }), {
							headers: { "content-type": "application/json" },
						});
					},
				},
			},
		});

		await client.graphql("", { query: QUERY });
		token = "second";
		await client.graphql("", { query: QUERY });

		expect(requests[0]?.headers.authorization).toBe("Bearer first");
		expect(requests[1]?.headers.authorization).toBe("Bearer second");
		await client.dispose();
	});

	it("keeps the legacy string-token constructor", async () => {
		const anilist = new Anilist("legacy-token");

		expect(anilist.http).toBeDefined();
		await anilist.dispose();
	});

	it("accepts an existing api-core client", async () => {
		const httpClient = createHttpClient();
		const anilist = new Anilist({ httpClient });

		expect(anilist.http).toBe(httpClient);
		await anilist.dispose();
	});
});
