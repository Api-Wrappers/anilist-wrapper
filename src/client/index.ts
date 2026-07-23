import {
	type BaseHttpClient,
	type ClientConfig,
	createClient as createApiCoreClient,
	createAuthPlugin,
	dedupeGraphQLFragmentDefinitions,
	type HeaderInput,
	type MaybePromise,
	mergeHeaders,
} from "@api-wrappers/api-core";
import {
	type GraphQLClient,
	type GraphQLClientRequestOptions,
	getSdk,
} from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_ATTEMPTS = 4;

export type AnilistToken =
	| string
	| (() => MaybePromise<string | null | undefined>);

export interface AnilistOptions {
	/** Static token or a token provider evaluated before every request. */
	token?: AnilistToken;
	/** Optional api-core overrides. AniList defaults are applied when omitted. */
	core?: Omit<ClientConfig, "baseUrl" | "defaultHeaders"> & {
		baseUrl?: string;
		defaultHeaders?: HeaderInput;
	};
	/** Existing api-core client to use instead of constructing one. */
	httpClient?: BaseHttpClient;
}

export interface AnilistRequestOptions {
	requestHeaders?: Record<string, string>;
	signal?: RequestInit["signal"];
	timeoutMs?: number;
	cacheKey?: string;
	tags?: string[];
	operationName?: string;
}

export type AnilistClientInput = string | AnilistOptions | undefined;

export interface AnilistClientBundle {
	httpClient: BaseHttpClient;
	graphQLClient: GraphQLClient;
	sdkClient: ReturnType<typeof getSdk>;
}

export const createHttpClient = (
	input?: AnilistClientInput,
): BaseHttpClient => {
	const options = normalizeOptions(input);
	if (options.httpClient) return options.httpClient;

	const core = options.core ?? {};
	const plugins = [...(core.plugins ?? [])];
	if (options.token) plugins.push(createAuthPlugin(options.token));

	return createApiCoreClient({
		...core,
		baseUrl: core.baseUrl ?? ANILIST_API_URL,
		defaultHeaders: mergeHeaders(
			{ "content-type": "application/json" },
			core.defaultHeaders,
		),
		plugins,
		retry: core.retry ?? {
			maxAttempts: MAX_ATTEMPTS,
			delayMs: 1000,
			retriableStatusCodes: [429],
		},
	});
};

export const createGraphQLClient = (
	input?: AnilistClientInput,
): GraphQLClient => {
	return createGraphQLClientFromHttpClient(createHttpClient(input));
};

export const createClientBundle = (
	input?: AnilistClientInput,
): AnilistClientBundle => {
	const httpClient = createHttpClient(input);
	const graphQLClient = createGraphQLClientFromHttpClient(httpClient);

	return {
		httpClient,
		graphQLClient,
		sdkClient: createSdkClient(graphQLClient),
	};
};

export const createClient = (input?: AnilistClientInput) => {
	return createSdkClient(createGraphQLClient(input));
};

export const createSdkClient = (client: GraphQLClient) => {
	return getSdk(client);
};

const createGraphQLClientFromHttpClient = (
	httpClient: Pick<BaseHttpClient, "graphql">,
): GraphQLClient => {
	return {
		request(options) {
			const { document, variables, requestHeaders, signal } = options;
			const requestOptions = options as GraphQLClientRequestOptions &
				AnilistRequestOptions;

			return httpClient.graphql("", {
				query: dedupeGraphQLFragmentDefinitions(document),
				variables,
				headers: requestHeaders,
				signal: signal ?? undefined,
				timeoutMs: requestOptions.timeoutMs,
				cacheKey: requestOptions.cacheKey,
				tags: requestOptions.tags,
				operationName: requestOptions.operationName,
			});
		},
	};
};

const normalizeOptions = (input?: AnilistClientInput): AnilistOptions => {
	return typeof input === "string" ? { token: input } : (input ?? {});
};
