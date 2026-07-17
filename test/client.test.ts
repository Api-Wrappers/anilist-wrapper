import { beforeEach, describe, expect, it, mock } from "bun:test";

type CoreClientConfig = {
	baseUrl: string;
	defaultHeaders: Record<string, string>;
	retry: {
		maxAttempts: number;
		delayMs: number;
		retriableStatusCodes: Array<number>;
	};
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

	it("forwards request options and removes equivalent fragments", async () => {
		const signal = new AbortController().signal;
		const client = createGraphQLClient("token-123");

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

		expect(result).toBe(graphQLResponse);
		expect(graphQLCalls).toHaveLength(1);
		expect(graphQLCalls[0]).toMatchObject({
			path: "",
			options: {
				variables: { id: 16498 },
				headers: { "x-request": "test" },
				signal,
			},
		});
		expect(
			graphQLCalls[0]?.options.query.match(/fragment\s+TitleFields\s+on/g)
				?.length,
		).toBe(1);
	});

	it("rejects conflicting fragment definitions", async () => {
		const client = createGraphQLClient();

		await expect(
			client.request({
				document: `
					query Example { Media { ...TitleFields } }
					fragment TitleFields on Media { title { romaji } }
					fragment TitleFields on Media { title { english } }
				`,
			}),
		).rejects.toThrow("Conflicting GraphQL fragment definition: TitleFields");
		expect(graphQLCalls).toHaveLength(0);
	});
});
