import type {
	GraphQLClient,
	GraphQLClientRequestOptions,
} from "../__generated__/anilist-sdk";

/**
 * A GraphQL document accepted by the low-level client: a raw document string
 * or any object with a `toString()` implementation, such as codegen
 * `TypedDocumentString` values.
 */
export type GraphQLDocument = string | { toString(): string };

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
	 * @param document - GraphQL query or mutation document, or a typed document.
	 * @param variables - Optional operation variables.
	 * @param options - Optional request headers and abort signal.
	 * @returns A promise resolving to the typed GraphQL response data.
	 */
	request<TData = unknown, TVariables extends object = Record<string, never>>(
		document: GraphQLDocument,
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
