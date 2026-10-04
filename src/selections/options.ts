export type RootSelectionOption<TKey extends string, TSelect> = {
	select: { [K in TKey]: TSelect };
};

const isSelectionObject = (value: unknown): value is Record<string, unknown> =>
	value !== null && typeof value === "object" && !Array.isArray(value);

/**
 * Returns the selection nested under the root key, for example the
 * `{ id: true }` in `{ select: { media: { id: true } } }`.
 * @throws TypeError when `select` is not exactly `{ [key]: { ... } }`.
 */
export function resolveSelection<TKey extends string, TSelect>(
	options: RootSelectionOption<TKey, TSelect>,
	key: TKey,
): TSelect {
	const select: unknown = options.select;

	if (!isSelectionObject(select)) {
		throw new TypeError("select must be an object.");
	}

	const keys = Object.keys(select);

	if (keys.length === 1 && keys[0] === key && isSelectionObject(select[key])) {
		return select[key] as TSelect;
	}

	throw new TypeError(
		`select must be { ${key}: { ... } }. Direct selections were removed in v4; wrap the fields in the "${key}" root.`,
	);
}

/**
 * Returns the page selection nested under `page`, for example the
 * `{ pageInfo: { ... }, media: { ... } }` in `{ select: { page: { ... } } }`.
 * @throws TypeError when `select` is not exactly `{ page: { ... } }`.
 */
export function resolvePageSelection<TSelect>(
	select: unknown,
	fieldName: string,
): TSelect {
	if (
		isSelectionObject(select) &&
		Object.keys(select).length === 1 &&
		isSelectionObject(select.page)
	) {
		return select.page as TSelect;
	}

	throw new TypeError(
		`Page select must be { page: { pageInfo?: { ... }, ${fieldName}?: { ... } } }. Legacy page bodies were removed in v4; wrap them in "page".`,
	);
}

export function hasSelection<TKey extends string, TSelect>(
	options: RootSelectionOption<TKey, TSelect> | undefined,
): options is RootSelectionOption<TKey, TSelect> {
	return options?.select !== undefined;
}
