export type RootSelectionOption<TKey extends string, TSelect> = {
	select: { [K in TKey]: TSelect };
};

export type LegacySelectionOption<TSelect> = {
	select: TSelect;
};

export type SelectionOption<TKey extends string, TSelect> =
	| RootSelectionOption<TKey, TSelect>
	| LegacySelectionOption<TSelect>;

export function getSelection<TKey extends string, TSelect>(
	options: SelectionOption<TKey, TSelect>,
	key: TKey,
): TSelect {
	const select = options.select as Record<string, unknown>;
	const value = select[key];

	if (value !== undefined) return value as TSelect;

	return options.select as TSelect;
}

export function hasSelection<TKey extends string, TSelect>(
	options: SelectionOption<TKey, TSelect> | undefined,
): options is SelectionOption<TKey, TSelect> {
	return options?.select !== undefined;
}
