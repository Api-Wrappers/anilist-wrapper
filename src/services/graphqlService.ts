import type {
	GraphQLClient,
	GraphQLClientRequestOptions,
} from "../__generated__/anilist-sdk";

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
	 * @param options - Optional request headers and abort signal.
	 * @returns A promise resolving to the typed GraphQL response data.
	 */
	request<TData = unknown, TVariables extends object = Record<string, never>>(
		document: string,
		variables?: TVariables,
		options?: Pick<
			GraphQLClientRequestOptions<TVariables>,
			"requestHeaders" | "signal"
		>,
	) {
		return this.client.request<TData, TVariables>({
			document,
			variables,
			...options,
		});
	}
}
