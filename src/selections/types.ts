import type {
	AiringSchedule,
	Character,
	Deleted,
	Favourites,
	Media,
	MediaList,
	MediaListCollection,
	MediaTag,
	Page,
	PageInfo,
	Staff,
	Studio,
	User,
	UserStatisticTypes,
} from "../__generated__/anilist-schema";

// ── Generic utilities ─────────────────────────────────────────────────────────

// Opaque scalars are generated as `unknown` (e.g. CountryCode, Json), so a
// plain `extends object` check would wrongly treat them as nested objects.
type IsOpaqueScalar<T> = unknown extends T ? true : false;

// Unwraps null/undefined and every array level to the innermost element type.
// Handles nested arrays such as `Array<Array<MediaList>>` without mapping
// over array members.
type UnwrapSelectionType<T> =
	NonNullable<T> extends ReadonlyArray<infer Item>
		? UnwrapSelectionType<Item>
		: NonNullable<T>;

// A field is scalar-selectable (`true`) when it is an opaque scalar or a
// scalar/array-of-scalars; object fields recurse.
type IsScalarField<T> =
	IsOpaqueScalar<T> extends true
		? true
		: UnwrapSelectionType<T> extends object
			? false
			: true;

// Recursively converts a schema type into a selection type.
// Scalars and opaque scalars map to `true`; arrays of scalars map to `true`;
// arrays of objects and objects recurse. Depth limit of 5 breaks circular
// schema references (e.g. Media → MediaConnection → MediaEdge → Media).
type ScalarSelect<T> = {
	[K in keyof T as IsScalarField<T[K]> extends true ? K : never]?: true;
};

type ToSelectField<T, D extends unknown[]> =
	IsScalarField<T> extends true ? true : ToSelect<UnwrapSelectionType<T>, D>;

export type ToSelect<T, D extends unknown[] = []> = D["length"] extends 5
	? ScalarSelect<T>
	: {
			[K in keyof T]?: ToSelectField<T[K], [unknown, ...D]>;
		};

// Maps a selection back to the result shape.
// `true` fields keep the source type (including its nullability).
// Object fields recurse; arrays of objects recurse per item, preserving every
// array/nullability layer.
type SelectedField<TSource, TSelect> =
	NonNullable<TSelect> extends true
		? TSource
		: NonNullable<TSource> extends ReadonlyArray<infer Item>
			?
					| Array<
							SelectedField<Item, NonNullable<TSelect>> | Extract<Item, null>
					  >
					| Extract<TSource, null>
			: NonNullable<TSource> extends object
				? NonNullable<TSelect> extends object
					?
							| SelectedFields<NonNullable<TSource>, NonNullable<TSelect>>
							| Extract<TSource, null>
					: never
				: never;

export type SelectedFields<TSource, TSelect> = {
	[K in keyof TSelect & keyof TSource]: SelectedField<TSource[K], TSelect[K]>;
};

// ── Public selection input types ──────────────────────────────────────────────

// Automatically covers every field the AniList schema exposes on Media and
// PageInfo. When codegen regenerates these schema types, the selection types
// update with them — no manual maintenance needed.
export type MediaSelect = ToSelect<Media>;
export type PageInfoSelect = ToSelect<PageInfo>;
export type CharacterSelect = ToSelect<Character>;
export type StaffSelect = ToSelect<Staff>;
export type StudioSelect = ToSelect<Studio>;
export type MediaTagSelect = ToSelect<MediaTag>;
export type AiringScheduleSelect = ToSelect<AiringSchedule>;
export type UserStatisticTypesSelect = ToSelect<UserStatisticTypes>;
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

export type StudioPageSelect = {
	pageInfo?: PageInfoSelect;
	studios?: StudioSelect;
};

export type UserPageSelect = {
	pageInfo?: PageInfoSelect;
	users?: UserSelect;
};
export type AiringSchedulePageSelect = {
	pageInfo?: PageInfoSelect;
	airingSchedules?: AiringScheduleSelect;
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

export type SelectedStudio<TSelect extends StudioSelect> = SelectedFields<
	Studio,
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

export type SelectedMediaPage<TSelect extends MediaPageSelect> = SelectedFields<
	Page,
	TSelect
>;

export type SelectedCharacterPage<TSelect extends CharacterPageSelect> =
	SelectedFields<Page, TSelect>;

export type SelectedStaffPage<TSelect extends StaffPageSelect> = SelectedFields<
	Page,
	TSelect
>;

export type SelectedStudioPage<TSelect extends StudioPageSelect> =
	SelectedFields<Page, TSelect>;

export type SelectedUserPage<TSelect extends UserPageSelect> = SelectedFields<
	Page,
	TSelect
>;

export type SelectedMediaTag<TSelect extends MediaTagSelect> = SelectedFields<
	MediaTag,
	TSelect
>;

export type SelectedAiringSchedule<TSelect extends AiringScheduleSelect> =
	SelectedFields<AiringSchedule, TSelect>;

export type SelectedAiringSchedulePage<
	TSelect extends AiringSchedulePageSelect,
> = SelectedFields<Page, TSelect>;

export type SelectedUserStatisticTypes<
	TSelect extends UserStatisticTypesSelect,
> = SelectedFields<UserStatisticTypes, TSelect>;
