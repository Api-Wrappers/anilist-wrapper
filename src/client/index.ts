import { createClient as createCoreClient } from "@api-wrappers/api-core";
import { type GraphQLClient, getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_ATTEMPTS = 4;

export const createClient = (token?: string) => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};

	if (token) headers.Authorization = `Bearer ${token}`;

	const httpClient = createCoreClient({
		baseUrl: ANILIST_API_URL,
		defaultHeaders: headers,
		retry: {
			maxAttempts: MAX_ATTEMPTS,
			delayMs: 1000,
			retriableStatusCodes: [429],
		},
	});

	const client: GraphQLClient = {
		request({ document, variables, requestHeaders, signal }) {
			return httpClient.graphql("", {
				query: document,
				variables,
				headers: requestHeaders,
				signal,
			});
		},
	};

	const sdk = getSdk(client);

	return sdk;
};
