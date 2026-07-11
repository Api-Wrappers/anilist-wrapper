import type {
	CharacterPageSelect,
	CharacterSelect,
	DeletedSelect,
	FavouritesSelect,
	MediaListCollectionSelect,
	MediaListSelect,
	MediaPageSelect,
	MediaSelect,
	StaffPageSelect,
	StaffSelect,
	UserPageSelect,
	UserSelect,
} from "./types";

// ── Core recursive builder ────────────────────────────────────────────────────

// Converts a selection object into a GraphQL selection set string.
// Field names come directly from the selection object keys — no string
// concatenation of user-supplied values. TypeScript types constrain which
// keys are valid; runtime only rejects empty selections.
function buildSelectionSet(
	select: Record<string, unknown>,
	indent: string,
): string {
	const lines: string[] = [];

	for (const [key, value] of Object.entries(select)) {
		if (!/^[_A-Za-z][_0-9A-Za-z]*$/.test(key)) {
			throw new TypeError(`Invalid GraphQL field name "${key}" in selection.`);
		}
		if (value === true) {
			lines.push(`${indent}${key}`);
		} else if (
			value !== null &&
			typeof value === "object" &&
			!Array.isArray(value) &&
			Object.getPrototypeOf(value) === Object.prototype
		) {
			const inner = buildSelectionSet(
				value as Record<string, unknown>,
				`${indent}  `,
			);
			if (!inner) {
				throw new TypeError(
					`Selection for "${key}" must have at least one field selected.`,
				);
			}
			lines.push(`${indent}${key} {\n${inner}\n${indent}}`);
		} else {
			throw new TypeError(
				`Selection for "${key}" must be true or a nested selection object.`,
			);
		}
	}

	return lines.join("\n");
}

function requireNonEmpty(set: string, context: string): string {
	if (!set)
		throw new TypeError(`${context} must have at least one field selected.`);
	return set;
}

type RootDocumentOptions = {
	operationName: string;
	variableDefinitions: string;
	rootField: string;
	rootArgs?: string[];
	select: Record<string, unknown>;
	context: string;
};

type PageDocumentOptions = {
	operationName: string;
	variableDefinitions: string;
	fieldName: string;
	fieldArgs?: string[];
	select: Record<string, unknown>;
	context: string;
};

type MutationDocumentOptions = {
	operationName: string;
	variableDefinitions: string;
	rootField: string;
	rootArgs?: string[];
	select: Record<string, unknown>;
	context: string;
};

function formatArgs(args: string[] | undefined): string {
	return args?.length ? `(${args.join(", ")})` : "";
}

export function buildRootDocument(options: RootDocumentOptions): string {
	const body = requireNonEmpty(
		buildSelectionSet(options.select, "    "),
		options.context,
	);
	const rootArgs = formatArgs(options.rootArgs);
	return `query ${options.operationName}${options.variableDefinitions} {\n  ${options.rootField}${rootArgs} {\n${body}\n  }\n}`;
}

export function buildMutationDocument(
	options: MutationDocumentOptions,
): string {
	const body = requireNonEmpty(
		buildSelectionSet(options.select, "    "),
		options.context,
	);
	const rootArgs = formatArgs(options.rootArgs);
	return `mutation ${options.operationName}${options.variableDefinitions} {\n  ${options.rootField}${rootArgs} {\n${body}\n  }\n}`;
}

export function buildPageDocument(options: PageDocumentOptions): string {
	const sections: string[] = [];
	const pageInfo = options.select.pageInfo;
	const field = options.select[options.fieldName];

	if (pageInfo !== undefined) {
		const inner = requireNonEmpty(
			buildSelectionSet(pageInfo as Record<string, unknown>, "      "),
			"pageInfo selection",
		);
		sections.push(`    pageInfo {\n${inner}\n    }`);
	}

	if (field !== undefined) {
		const inner = requireNonEmpty(
			buildSelectionSet(field as Record<string, unknown>, "      "),
			`${options.fieldName} selection`,
		);
		sections.push(
			`    ${options.fieldName}${formatArgs(options.fieldArgs)} {\n${inner}\n    }`,
		);
	}

	if (!sections.length) {
		throw new TypeError(
			`${options.context} must have at least one of: pageInfo, ${options.fieldName}.`,
		);
	}

	const pageBody = sections.join("\n");
	return `query ${options.operationName}${options.variableDefinitions} {\n  Page(page: $page, perPage: $perPage) {\n${pageBody}\n  }\n}`;
}

// ── Top-level document builders ───────────────────────────────────────────────

export function buildAnimeByIdDocument(select: MediaSelect): string {
	return buildRootDocument({
		operationName: "SelectedAnimeById",
		variableDefinitions: "($id: Int)",
		rootField: "Media",
		rootArgs: ["id: $id", "type: ANIME"],
		select: select as Record<string, unknown>,
		context: "MediaSelect",
	});
}

export function buildMangaByIdDocument(select: MediaSelect): string {
	return buildRootDocument({
		operationName: "SelectedMangaById",
		variableDefinitions: "($id: Int)",
		rootField: "Media",
		rootArgs: ["id: $id", "type: MANGA"],
		select: select as Record<string, unknown>,
		context: "MediaSelect",
	});
}

export function buildMediaByIdDocument(select: MediaSelect): string {
	return buildRootDocument({
		operationName: "SelectedMediaById",
		variableDefinitions: "($id: Int)",
		rootField: "Media",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "MediaSelect",
	});
}

export function buildCharacterByIdDocument(select: CharacterSelect): string {
	return buildRootDocument({
		operationName: "SelectedCharacterById",
		variableDefinitions: "($id: Int)",
		rootField: "Character",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "CharacterSelect",
	});
}

export function buildStaffByIdDocument(select: StaffSelect): string {
	return buildRootDocument({
		operationName: "SelectedStaffById",
		variableDefinitions: "($id: Int)",
		rootField: "Staff",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "StaffSelect",
	});
}

export function buildUserByIdDocument(select: UserSelect): string {
	return buildRootDocument({
		operationName: "SelectedUserById",
		variableDefinitions: "($id: Int)",
		rootField: "User",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "UserSelect",
	});
}

export function buildUserByUsernameDocument(select: UserSelect): string {
	return buildRootDocument({
		operationName: "SelectedUserByUsername",
		variableDefinitions: "($userName: String)",
		rootField: "User",
		rootArgs: ["name: $userName"],
		select: select as Record<string, unknown>,
		context: "UserSelect",
	});
}

export function buildMediaListByIdDocument(select: MediaListSelect): string {
	return buildRootDocument({
		operationName: "SelectedMediaListById",
		variableDefinitions: "($id: Int)",
		rootField: "MediaList",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "MediaListSelect",
	});
}

export function buildMediaListCollectionByUserDocument(
	select: MediaListCollectionSelect,
	by: "id" | "username",
): string {
	return buildRootDocument({
		operationName:
			by === "id"
				? "SelectedMediaListCollectionByUser"
				: "SelectedMediaListCollectionByUsername",
		variableDefinitions:
			by === "id"
				? "($userId: Int, $mediaType: MediaType, $status: MediaListStatus)"
				: "($userName: String, $mediaType: MediaType, $status: MediaListStatus)",
		rootField: "MediaListCollection",
		rootArgs: [
			by === "id" ? "userId: $userId" : "userName: $userName",
			"type: $mediaType",
			"status: $status",
		],
		select: select as Record<string, unknown>,
		context: "MediaListCollectionSelect",
	});
}

export function buildToggleFavouriteDocument(
	select: FavouritesSelect,
	field: "animeId" | "mangaId" | "characterId" | "staffId",
): string {
	const operationNameByField = {
		animeId: "SelectedToggleFavoriteAnime",
		mangaId: "SelectedToggleFavoriteManga",
		characterId: "SelectedToggleFavoriteCharacter",
		staffId: "SelectedToggleFavoriteStaff",
	} satisfies Record<typeof field, string>;

	return buildMutationDocument({
		operationName: operationNameByField[field],
		variableDefinitions: "($id: Int)",
		rootField: "ToggleFavourite",
		rootArgs: [`${field}: $id`],
		select: select as Record<string, unknown>,
		context: "FavouritesSelect",
	});
}

export function buildSaveMediaListEntryDocument(
	select: MediaListSelect,
): string {
	return buildMutationDocument({
		operationName: "SelectedSaveMediaListEntry",
		variableDefinitions:
			"($mediaId: Int, $id: Int, $status: MediaListStatus, $score: Float, $scoreRaw: Int, $progress: Int, $progressVolumes: Int, $repeat: Int, $private: Boolean, $notes: String, $startedAt: FuzzyDateInput, $completedAt: FuzzyDateInput, $advancedScores: [Float], $customLists: [String], $hiddenFromStatusLists: Boolean, $priority: Int)",
		rootField: "SaveMediaListEntry",
		rootArgs: [
			"mediaId: $mediaId",
			"id: $id",
			"status: $status",
			"score: $score",
			"scoreRaw: $scoreRaw",
			"progress: $progress",
			"progressVolumes: $progressVolumes",
			"repeat: $repeat",
			"private: $private",
			"notes: $notes",
			"startedAt: $startedAt",
			"completedAt: $completedAt",
			"advancedScores: $advancedScores",
			"customLists: $customLists",
			"hiddenFromStatusLists: $hiddenFromStatusLists",
			"priority: $priority",
		],
		select: select as Record<string, unknown>,
		context: "MediaListSelect",
	});
}

export function buildDeleteMediaListEntryDocument(
	select: DeletedSelect,
): string {
	return buildMutationDocument({
		operationName: "SelectedDeleteMediaListEntry",
		variableDefinitions: "($id: Int)",
		rootField: "DeleteMediaListEntry",
		rootArgs: ["id: $id"],
		select: select as Record<string, unknown>,
		context: "DeletedSelect",
	});
}

export function buildAnimeSearchDocument(select: MediaPageSelect): string {
	return buildSearchDocument(select, "ANIME");
}

export function buildMangaSearchDocument(select: MediaPageSelect): string {
	return buildSearchDocument(select, "MANGA");
}

function buildSearchDocument(
	select: MediaPageSelect,
	type: "ANIME" | "MANGA",
): string {
	return buildPageDocument({
		operationName:
			type === "ANIME" ? "SelectedAnimeSearch" : "SelectedMangaSearch",
		variableDefinitions: "($query: String, $page: Int, $perPage: Int)",
		fieldName: "media",
		fieldArgs: ["search: $query", `type: ${type}`],
		select: select as Record<string, unknown>,
		context: "page select",
	});
}

export function buildMediaPageDocument(
	operationName: string,
	variableDefinitions: string,
	fieldArgs: string[],
	select: MediaPageSelect,
): string {
	return buildPageDocument({
		operationName,
		variableDefinitions,
		fieldName: "media",
		fieldArgs,
		select: select as Record<string, unknown>,
		context: "page select",
	});
}

export function buildCharacterPageDocument(
	operationName: string,
	variableDefinitions: string,
	fieldArgs: string[],
	select: CharacterPageSelect,
): string {
	return buildPageDocument({
		operationName,
		variableDefinitions,
		fieldName: "characters",
		fieldArgs,
		select: select as Record<string, unknown>,
		context: "page select",
	});
}

export function buildStaffPageDocument(
	operationName: string,
	variableDefinitions: string,
	fieldArgs: string[],
	select: StaffPageSelect,
): string {
	return buildPageDocument({
		operationName,
		variableDefinitions,
		fieldName: "staff",
		fieldArgs,
		select: select as Record<string, unknown>,
		context: "page select",
	});
}

export function buildUserPageDocument(
	operationName: string,
	variableDefinitions: string,
	fieldArgs: string[],
	select: UserPageSelect,
): string {
	return buildPageDocument({
		operationName,
		variableDefinitions,
		fieldName: "users",
		fieldArgs,
		select: select as Record<string, unknown>,
		context: "page select",
	});
}
