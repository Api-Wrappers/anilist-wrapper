const generatedPath = "src/__generated__/anilist-sdk.ts";

const oldImports =
	"import type { GraphQLClient, RequestOptions } from 'graphql-request';\nimport gql from 'graphql-tag';\n";
const newImport = "import { gql } from '@api-wrappers/api-core';\n";

const oldHeadersType =
	"type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];";
const newClientTypes = `type GraphQLClientRequestHeaders = Record<string, string>;

export interface GraphQLClientRequestOptions<TVariables extends object = Record<string, unknown>> {
  document: string;
  variables?: TVariables;
  requestHeaders?: GraphQLClientRequestHeaders;
  signal?: RequestInit['signal'];
}

export interface GraphQLClient {
  request<TData = unknown, TVariables extends object = Record<string, unknown>>(
    options: GraphQLClientRequestOptions<TVariables>
  ): Promise<TData>;
}`;

let contents = await Bun.file(generatedPath).text();

if (contents.includes(oldImports)) {
	contents = contents.replace(oldImports, newImport);
}

if (contents.includes(oldHeadersType)) {
	contents = contents.replace(oldHeadersType, newClientTypes);
}

if (!contents.includes(newImport) || !contents.includes(newClientTypes)) {
	throw new Error("Failed to patch generated AniList SDK for api-core");
}

await Bun.write(
	generatedPath,
	contents.endsWith("\n") ? contents : `${contents}\n`,
);
