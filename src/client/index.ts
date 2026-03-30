import { GraphQLClient } from "graphql-request";
import { getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";
const MAX_RETRIES = 3;

const fetchWithRetry = async (
	url: string | URL,
	options?: RequestInit,
): Promise<Response> => {
	for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
		const response = await fetch(url, options);

		if (response.status !== 429) return response;

		if (attempt === MAX_RETRIES) return response;

		const retryAfter = response.headers.get("Retry-After");
		const delay = retryAfter
			? Number.parseInt(retryAfter, 10) * 1000
			: Math.min(1000 * 2 ** attempt, 60_000);

		await new Promise((resolve) => setTimeout(resolve, delay));
	}

	// Unreachable but satisfies TypeScript
	return fetch(url, options);
};

export const createClient = (token?: string) => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};

	if (token) headers.Authorization = `Bearer ${token}`;

	const client = new GraphQLClient(ANILIST_API_URL, {
		fetch: fetchWithRetry as typeof fetch,
		headers,
	});

	const sdk = getSdk(client);

	return sdk;
};
