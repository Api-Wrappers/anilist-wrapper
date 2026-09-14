import {
	type ApiPlugin,
	createClient as createCoreClient,
	type RetryConfig,
	type Transport,
} from "@api-wrappers/api-core";
import { type GraphQLClient, getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const DEFAULT_RETRY: RetryConfig = {
	maxAttempts: 4,
	delayMs: 1000,
	retriableStatusCodes: [429],
};

/**
 * Options accepted by {@link createGraphQLClient}, {@link createClient}, and
 * the `Anilist` constructor. A plain string is shorthand for `{ token }`.
 */
export type AnilistClientOptions = {
	/** OAuth token sent as a `Bearer` authorization header. */
	token?: string;
	/** GraphQL endpoint. Defaults to `https://graphql.anilist.co`. */
	url?: string;
	/** Extra headers merged into every request. */
	headers?: Record<string, string>;
	/** Default request timeout in milliseconds. Unset by default; 30000 is recommended. */
	timeoutMs?: number;
	/** Retry policy. Defaults to 4 attempts with backoff on HTTP 429. */
	retry?: RetryConfig;
	/** api-core plugins, for example `createRateLimitPlugin()`. */
	plugins?: ApiPlugin[];
	/** Custom transport, useful for tests or non-fetch runtimes. */
	transport?: Transport;
};

const normalizeOptions = (
	input?: string | AnilistClientOptions,
): AnilistClientOptions =>
	typeof input === "string" ? { token: input } : (input ?? {});

export const createGraphQLClient = (
	input?: string | AnilistClientOptions,
): GraphQLClient => {
	const options = normalizeOptions(input);
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		...options.headers,
	};

	if (options.token) headers.Authorization = `Bearer ${options.token}`;

	const httpClient = createCoreClient({
		baseUrl: options.url ?? ANILIST_API_URL,
		defaultHeaders: headers,
		retry: options.retry ?? DEFAULT_RETRY,
		...(options.plugins ? { plugins: options.plugins } : {}),
		...(options.transport ? { transport: options.transport } : {}),
		...(options.timeoutMs !== undefined
			? { timeoutMs: options.timeoutMs }
			: {}),
	});

	const client: GraphQLClient = {
		request({ document, variables, requestHeaders, signal }) {
			return httpClient.graphql("", {
				query: document.toString(),
				variables,
				headers: requestHeaders,
				signal: signal ?? undefined,
			});
		},
	};

	return client;
};

export const createClient = (input?: string | AnilistClientOptions) => {
	return createSdkClient(createGraphQLClient(input));
};

export const createSdkClient = (client: GraphQLClient) => {
	return getSdk(client);
};
