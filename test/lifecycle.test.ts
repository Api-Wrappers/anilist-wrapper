import { describe, expect, it } from "bun:test";
import { Anilist, createClientBundle, createHttpClient } from "../src";

describe("api-core lifecycle", () => {
	it("exposes the shared HTTP client on Anilist", async () => {
		const anilist = new Anilist();

		expect(anilist.http).toBeDefined();
		expect(typeof anilist.http.graphql).toBe("function");
		await anilist.dispose();
	});

	it("creates one HTTP client for a complete client bundle", async () => {
		const bundle = createClientBundle();

		expect(bundle.httpClient).toBeDefined();
		expect(bundle.graphQLClient).toBeDefined();
		expect(bundle.sdkClient).toBeDefined();
		await bundle.httpClient.dispose();
	});

	it("exports the lower-level HTTP client factory", async () => {
		const client = createHttpClient();

		expect(typeof client.request).toBe("function");
		await client.dispose();
	});
});
