import {
	type BaseHttpClient,
	createClient as createApiCoreClient,
	dedupeGraphQLFragmentDefinitions,
} from "@api-wrappers/api-core";
import { type GraphQLClient, getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_ATTEMPTS = 4;

export interface AnilistClientBundle {
	httpClient: BaseHttpClient;
	graphQLClient: GraphQLClient;
	sdkClient: ReturnType<typeof getSdk>;
}

export const createHttpClient = (token?: string): BaseHttpClient => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};

	if (token) headers.Authorization = `Bearer ${token}`;

	return createApiCoreClient({
		baseUrl: ANILIST_API_URL,
		defaultHeaders: headers,
		retry: {
			maxAttempts: MAX_ATTEMPTS,
			delayMs: 1000,
			retriableStatusCodes: [429],
		},
	});
};

export const createGraphQLClient = (token?: string): GraphQLClient => {
	return createGraphQLClientFromHttpClient(createHttpClient(token));
};

export const createClientBundle = (token?: string): AnilistClientBundle => {
	const httpClient = createHttpClient(token);
	const graphQLClient = createGraphQLClientFromHttpClient(httpClient);

	return {
		httpClient,
		graphQLClient,
		sdkClient: createSdkClient(graphQLClient),
	};
};

export const createClient = (token?: string) => {
	return createSdkClient(createGraphQLClient(token));
};

export const createSdkClient = (client: GraphQLClient) => {
	return getSdk(client);
};

const createGraphQLClientFromHttpClient = (
	httpClient: Pick<BaseHttpClient, "graphql">,
): GraphQLClient => {
	return {
		request({ document, variables, requestHeaders, signal }) {
			return httpClient.graphql("", {
				query: dedupeGraphQLFragmentDefinitions(document),
				variables,
				headers: requestHeaders,
				signal: signal ?? undefined,
			});
		},
	};
};
