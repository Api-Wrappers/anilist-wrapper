import { createClient as createCoreClient } from "@api-wrappers/api-core";
import { type GraphQLClient, getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_ATTEMPTS = 4;

export const createGraphQLClient = (token?: string): GraphQLClient => {
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
				query: dedupeFragmentDefinitions(document),
				variables,
				headers: requestHeaders,
				signal: signal ?? undefined,
			});
		},
	};

	return client;
};

export const createClient = (token?: string) => {
	return createSdkClient(createGraphQLClient(token));
};

export const createSdkClient = (client: GraphQLClient) => {
	return getSdk(client);
};

const dedupeFragmentDefinitions = (source: string) => {
	const seen = new Set<string>();
	const fragmentPattern =
		/\bfragment\s+([_A-Za-z][_0-9A-Za-z]*)\s+on\s+[_A-Za-z][_0-9A-Za-z]*/g;
	let result = "";
	let cursor = 0;
	let match = fragmentPattern.exec(source);

	while (match) {
		const name = match[1];
		const bodyStart = source.indexOf("{", fragmentPattern.lastIndex);

		if (!name || bodyStart === -1) {
			match = fragmentPattern.exec(source);
			continue;
		}

		const bodyEnd = findMatchingBrace(source, bodyStart);

		if (bodyEnd === -1) {
			match = fragmentPattern.exec(source);
			continue;
		}

		const definitionEnd = bodyEnd + 1;

		if (seen.has(name)) {
			result += source.slice(cursor, match.index);
		} else {
			seen.add(name);
			result += source.slice(cursor, definitionEnd);
		}

		cursor = definitionEnd;
		fragmentPattern.lastIndex = definitionEnd;
		match = fragmentPattern.exec(source);
	}

	return result + source.slice(cursor);
};

const findMatchingBrace = (source: string, start: number) => {
	let depth = 0;

	for (let index = start; index < source.length; index++) {
		const character = source[index];

		if (character === "{") depth++;
		if (character === "}") depth--;
		if (depth === 0) return index;
	}

	return -1;
};
