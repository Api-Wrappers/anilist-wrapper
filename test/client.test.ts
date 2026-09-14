import { beforeEach, describe, expect, it, mock } from "bun:test";
import type { ApiPlugin, Transport } from "@api-wrappers/api-core";
import * as apiCore from "@api-wrappers/api-core";

type CoreClientConfig = {
	baseUrl: string;
	defaultHeaders: Record<string, string>;
	retry: {
		maxAttempts: number;
		delayMs: number;
		retriableStatusCodes: Array<number>;
	};
	plugins?: ApiPlugin[];
	transport?: Transport;
	timeoutMs?: number;
};

type GraphQLCall = {
	path: string;
	options: {
		query: string;
		variables?: object;
		headers?: Record<string, string>;
		signal?: RequestInit["signal"];
	};
};

const coreClientConfigs: Array<CoreClientConfig> = [];
const graphQLCalls: Array<GraphQLCall> = [];
const graphQLResponse = { ok: true };

mock.module("@api-wrappers/api-core", () => ({
	...apiCore,
	createClient: (config: CoreClientConfig) => {
		coreClientConfigs.push(config);

		return {
			graphql: async (path: string, options: GraphQLCall["options"]) => {
				graphQLCalls.push({ path, options });
				return graphQLResponse;
			},
		};
	},
	gql: (strings: TemplateStringsArray, ...values: Array<unknown>) =>
		strings.reduce(
			(source, segment, index) => `${source}${segment}${values[index] ?? ""}`,
			"",
		),
}));

const { createGraphQLClient } = await import("../src/client");

describe("client transport", () => {
	beforeEach(() => {
		coreClientConfigs.length = 0;
		graphQLCalls.length = 0;
	});

	it("configures the AniList transport without auth headers by default", () => {
		createGraphQLClient();

		expect(coreClientConfigs).toEqual([
			{
				baseUrl: "https://graphql.anilist.co",
				defaultHeaders: {
					"Content-Type": "application/json",
				},
				retry: {
					maxAttempts: 4,
					delayMs: 1000,
					retriableStatusCodes: [429],
				},
			},
		]);
	});

	it("adds bearer auth when a token is provided", () => {
		createGraphQLClient("token-123");

		expect(coreClientConfigs[0]?.defaultHeaders).toEqual({
			"Content-Type": "application/json",
			Authorization: "Bearer token-123",
		});
	});

	it("forwards request options and the document unchanged", async () => {
		const signal = new AbortController().signal;
		const client = createGraphQLClient("token-123");
		const document = `
			query Example($id: Int) {
				Media(id: $id) {
					...TitleFields
					...TitleFields
					...IdFields
				}
			}

			fragment TitleFields on Media {
				title {
					romaji
				}
			}

			fragment TitleFields on Media {
				title {
					english
				}
			}

			fragment IdFields on Media {
				id
			}
		`;

		const result = await client.request({
			document,
			variables: { id: 16498 },
			requestHeaders: { "x-request": "test" },
			signal,
		});

		expect(result).toBe(graphQLResponse);
		expect(graphQLCalls).toHaveLength(1);
		expect(graphQLCalls[0]).toEqual({
			path: "",
			options: {
				query: document,
				variables: { id: 16498 },
				headers: { "x-request": "test" },
				signal,
			},
		});
	});

	it("accepts an options object for endpoint, headers, timeout, retry, plugins, and transport", () => {
		const plugin: ApiPlugin = { name: "test-plugin" };
		const transport: Transport = {
			execute: async () => new Response(),
		};

		createGraphQLClient({
			token: "token-456",
			url: "https://example.com/graphql",
			headers: { "x-app": "test" },
			timeoutMs: 30_000,
			retry: { maxAttempts: 2, delayMs: 200, retriableStatusCodes: [429, 500] },
			plugins: [plugin],
			transport,
		});

		expect(coreClientConfigs).toEqual([
			{
				baseUrl: "https://example.com/graphql",
				defaultHeaders: {
					"Content-Type": "application/json",
					Authorization: "Bearer token-456",
					"x-app": "test",
				},
				retry: {
					maxAttempts: 2,
					delayMs: 200,
					retriableStatusCodes: [429, 500],
				},
				plugins: [plugin],
				transport,
				timeoutMs: 30_000,
			},
		]);
	});

	it("keeps the default endpoint and retry policy when only options headers are provided", () => {
		createGraphQLClient({ headers: { "x-app": "test" } });

		expect(coreClientConfigs).toEqual([
			{
				baseUrl: "https://graphql.anilist.co",
				defaultHeaders: {
					"Content-Type": "application/json",
					"x-app": "test",
				},
				retry: {
					maxAttempts: 4,
					delayMs: 1000,
					retriableStatusCodes: [429],
				},
			},
		]);
	});

	it("accepts typed documents and forwards their string form", async () => {
		const typedDocument = {
			toString: () => "query Typed { Media(id: 1) { id } }",
		};
		const client = createGraphQLClient();

		await client.request({ document: typedDocument });

		expect(graphQLCalls).toHaveLength(1);
		expect(graphQLCalls[0]?.options.query).toBe(
			"query Typed { Media(id: 1) { id } }",
		);
	});
});
