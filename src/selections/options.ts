export type RootSelectionOption<TKey extends string, TSelect> = {
	select: { [K in TKey]: TSelect };
};

export type LegacySelectionOption<TSelect> = {
	select: TSelect;
};

export type SelectionOption<TKey extends string, TSelect> =
	| RootSelectionOption<TKey, TSelect>
	| LegacySelectionOption<TSelect>;

export type ResolvedSelection<TSelect> = {
	select: TSelect;
	wrapped: boolean;
};

const isSelectionObject = (value: unknown): value is Record<string, unknown> =>
	value !== null && typeof value === "object" && !Array.isArray(value);

export function resolveSelection<TKey extends string, TSelect>(
	options: SelectionOption<TKey, TSelect>,
	key: TKey,
): ResolvedSelection<TSelect> {
	const select: unknown = options.select;

	if (!isSelectionObject(select)) {
		throw new TypeError("select must be an object.");
	}

	const keys = Object.keys(select);

	if (keys.length > 0 && keys.every((entry) => entry === key)) {
		return { select: select[key] as TSelect, wrapped: true };
	}

	return { select: options.select as TSelect, wrapped: false };
}

export function resolvePageSelection<TSelect>(
	select: unknown,
	fieldName: string,
): TSelect {
	if (!isSelectionObject(select)) {
		throw new TypeError(pageSelectionError(fieldName));
	}

	const keys = Object.keys(select);

	if (
		keys.length === 1 &&
		keys[0] === "page" &&
		isSelectionObject(select.page)
	) {
		return select.page as TSelect;
	}

	if (
		keys.length > 0 &&
		keys.every((key) => key === "pageInfo" || key === fieldName)
	) {
		return select as TSelect;
	}

	throw new TypeError(pageSelectionError(fieldName));
}

function pageSelectionError(fieldName: string): string {
	return `Page select must be either { page: { ... } } or a legacy page body containing only "pageInfo" and "${fieldName}".`;
}

export function hasSelection<TKey extends string, TSelect>(
	options: SelectionOption<TKey, TSelect> | undefined,
): options is SelectionOption<TKey, TSelect> {
	return options?.select !== undefined;
}
