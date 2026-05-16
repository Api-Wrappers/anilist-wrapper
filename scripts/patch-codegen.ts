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

contents = removeDuplicateExportedDeclarations(contents);

if (!contents.includes(newImport) || !contents.includes(newClientTypes)) {
	throw new Error("Failed to patch generated AniList SDK for api-core");
}

await Bun.write(
	generatedPath,
	contents.endsWith("\n") ? contents : `${contents}\n`,
);

function removeDuplicateExportedDeclarations(source: string) {
	const declarationPattern = /^export (?:type|enum|interface) ([A-Za-z_][A-Za-z0-9_]*)/gm;
	const seen = new Set<string>();
	const rangesToRemove: Array<[number, number]> = [];
	const matches = Array.from(source.matchAll(declarationPattern));

	for (let index = 0; index < matches.length; index++) {
		const match = matches[index];

		if (!match) continue;

		const name = match[1];

		if (!name || match.index === undefined) continue;

		if (!seen.has(name)) {
			seen.add(name);
			continue;
		}

		const nextMatch = matches[index + 1];
		rangesToRemove.push([
			findLeadingCommentStart(source, match.index),
			nextMatch?.index ?? source.length,
		]);
	}

	if (rangesToRemove.length === 0) return source;

	let result = "";
	let cursor = 0;

	for (const [start, end] of rangesToRemove) {
		result += source.slice(cursor, start);
		cursor = end;
	}

	return result + source.slice(cursor);
}

function findLeadingCommentStart(source: string, declarationStart: number) {
	let cursor = declarationStart;

	while (cursor > 0 && /\s/.test(source[cursor - 1] ?? "")) {
		cursor--;
	}

	const commentEnd = cursor;

	if (!source.slice(0, commentEnd).endsWith("*/")) {
		return declarationStart;
	}

	const commentStart = source.lastIndexOf("/**", commentEnd);

	if (commentStart === -1) {
		return declarationStart;
	}

	return commentStart;
}
