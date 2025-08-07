import { GraphQLClient } from "graphql-request";
import { getSdk } from "../__generated__/anilist-sdk";

const ANILIST_API_URL = "https://graphql.anilist.co";

export const createClient = (token?: string) => {
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
	};

	if (token) headers.Authorization = `Bearer ${token}`;

	const client = new GraphQLClient(ANILIST_API_URL, {
		fetch,
		headers,
	});

	const sdk = getSdk(client);

	return sdk;
};
