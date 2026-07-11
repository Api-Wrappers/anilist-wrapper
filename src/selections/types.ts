import type {
	Character,
	Deleted,
	Favourites,
	Media,
	MediaList,
	MediaListCollection,
	Page,
	PageInfo,
	Staff,
	User,
} from "../__generated__/anilist-schema";

// ── Generic utilities ─────────────────────────────────────────────────────────

// Recursively converts a schema type into a selection type.
// Scalars and unknown (e.g. CountryCode) map to `true`.
// Arrays of scalars map to `true`; arrays of objects recurse.
// Objects recurse. Depth limit of 5 breaks circular schema references
// (e.g. Media → MediaConnection → MediaEdge → Media).
type ScalarSelect<T> = {
	[K in keyof T as NonNullable<T[K]> extends Array<infer Item>
		? NonNullable<Item> extends object
			? never
			: K
		: NonNullable<T[K]> extends object
			? never
			: K]?: true;
};

export type ToSelect<T, D extends unknown[] = []> = D["length"] extends 5
	? ScalarSelect<T>
	: {
			[K in keyof T]?: NonNullable<T[K]> extends Array<infer Item>
				? NonNullable<Item> extends object
					? ToSelect<NonNullable<Item>, [unknown, ...D]>
					: true
				: NonNullable<T[K]> extends object
					? ToSelect<NonNullable<T[K]>, [unknown, ...D]>
					: true;
		};

// Maps a selection back to the result shape.
// `true` fields keep the source type (including its nullability).
// Object fields recurse; arrays of objects recurse per item.
export type SelectedFields<TSource, TSelect> = {
	[K in keyof TSelect & keyof TSource]: TSelect[K] extends true
		? TSource[K]
		: NonNullable<TSource[K]> extends Array<infer Item>
			? TSelect[K] extends object
				?
						| Array<
								| SelectedFields<NonNullable<Item>, TSelect[K]>
								| Extract<Item, null>
						  >
						| Extract<TSource[K], null>
				: never
			: TSelect[K] extends object
				?
						| SelectedFields<NonNullable<TSource[K]>, TSelect[K]>
						| Extract<TSource[K], null>
				: never;
};

// ── Public selection input types ──────────────────────────────────────────────

// Automatically covers every field the AniList schema exposes on Media and
// PageInfo. When codegen regenerates these schema types, the selection types
// update with them — no manual maintenance needed.
export type MediaSelect = ToSelect<Media>;
export type PageInfoSelect = ToSelect<PageInfo>;
export type CharacterSelect = ToSelect<Character>;
export type StaffSelect = ToSelect<Staff>;
export type UserSelect = ToSelect<User>;
export type MediaListSelect = ToSelect<MediaList>;
export type MediaListCollectionSelect = ToSelect<MediaListCollection>;
export type FavouritesSelect = ToSelect<Favourites>;
export type DeletedSelect = ToSelect<Deleted>;

// Wrapper for paginated search queries. `page` maps to the GraphQL `Page` root;
// `media` maps to the `media(...)` connection field within it.
export type MediaPageSelect = {
	pageInfo?: PageInfoSelect;
	media?: MediaSelect;
};

export type CharacterPageSelect = {
	pageInfo?: PageInfoSelect;
	characters?: CharacterSelect;
};

export type StaffPageSelect = {
	pageInfo?: PageInfoSelect;
	staff?: StaffSelect;
};

export type UserPageSelect = {
	pageInfo?: PageInfoSelect;
	users?: UserSelect;
};

// ── Public result mapped types ────────────────────────────────────────────────

export type SelectedMedia<TSelect extends MediaSelect> = SelectedFields<
	Media,
	TSelect
>;

export type SelectedCharacter<TSelect extends CharacterSelect> = SelectedFields<
	Character,
	TSelect
>;

export type SelectedStaff<TSelect extends StaffSelect> = SelectedFields<
	Staff,
	TSelect
>;

export type SelectedUser<TSelect extends UserSelect> = SelectedFields<
	User,
	TSelect
>;

export type SelectedMediaList<TSelect extends MediaListSelect> = SelectedFields<
	MediaList,
	TSelect
>;

export type SelectedMediaListCollection<
	TSelect extends MediaListCollectionSelect,
> = SelectedFields<MediaListCollection, TSelect>;

export type SelectedFavourites<TSelect extends FavouritesSelect> =
	SelectedFields<Favourites, TSelect>;

export type SelectedDeleted<TSelect extends DeletedSelect> = SelectedFields<
	Deleted,
	TSelect
>;

export type SelectedMediaPage<TSelect extends MediaPageSelect> =
	(TSelect["pageInfo"] extends PageInfoSelect
		? { pageInfo: SelectedFields<PageInfo, TSelect["pageInfo"]> | null }
		: unknown) &
		(TSelect["media"] extends MediaSelect
			? {
					media: Array<SelectedFields<Media, TSelect["media"]> | null> | null;
				}
			: unknown);

export type SelectedCharacterPage<TSelect extends CharacterPageSelect> =
	SelectedFields<Page, TSelect>;

export type SelectedStaffPage<TSelect extends StaffPageSelect> = SelectedFields<
	Page,
	TSelect
>;

export type SelectedUserPage<TSelect extends UserPageSelect> = SelectedFields<
	Page,
	TSelect
>;
