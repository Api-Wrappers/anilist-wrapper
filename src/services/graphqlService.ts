import type { GraphQLClient } from "../__generated__/anilist-sdk";
import type { AnilistRequestOptions } from "../client";

/**
 * Low-level GraphQL access for AniList features that do not yet have a
 * dedicated convenience method.
 */
export class GraphQLService {
	private client: GraphQLClient;

	constructor(client: GraphQLClient) {
		this.client = client;
	}

	/**
	 * Executes an arbitrary AniList GraphQL operation.
	 * @param document - GraphQL query or mutation document.
	 * @param variables - Optional operation variables.
	 * @param options - Optional api-core request controls.
	 * @returns A promise resolving to the typed GraphQL response data.
	 */
	request<TData = unknown, TVariables extends object = Record<string, never>>(
		document: string,
		variables?: TVariables,
		options?: AnilistRequestOptions,
	) {
		return this.client.request<TData, TVariables>({
			document,
			variables,
			...options,
		});
	}
}
