import type {
	MediaListCollectionSelect,
	MediaPageSelect,
	MediaSelect,
	SelectedMedia,
	SelectedMediaListCollection,
	SelectedMediaPage,
} from "../src/selections/types";

// Structural equality that distinguishes `never` from a concrete type.
type Equal<A, B> =
	(<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
		? true
		: false;
type Expect<T extends true> = T;

// ── Typed variable selects ────────────────────────────────────────────────────
// Selection objects stored in typed variables must still map to real fields
// (regression: every field resolved to `never` because optional `true` did not
// match `TSelect[K] extends true`).

const typedSelect = {
	id: true,
	title: { userPreferred: true },
} satisfies MediaSelect;

type TypedMedia = SelectedMedia<typeof typedSelect>;

declare const typedMedia: TypedMedia;

const typedId: number = typedMedia.id;
const typedTitle: string | null | undefined = typedMedia.title?.userPreferred;
// @ts-expect-error — episodes was not selected
const typedEpisodes = typedMedia.episodes;

type TypedIdIsNumber = Expect<Equal<TypedMedia["id"], number>>;
type TypedTitleIsSelected = Expect<
	Equal<NonNullable<TypedMedia["title"]>, { userPreferred: string | null }>
>;

// ── Opaque scalars ────────────────────────────────────────────────────────────
// `unknown` scalars (CountryCode, Json) must accept `true` and must not be
// treated as nested selection objects.

type CountryCodeSelect = NonNullable<MediaSelect["countryOfOrigin"]>;

type CountryCodeSelectIsTrue = Expect<Equal<CountryCodeSelect, true>>;

const countryCodeSelect: CountryCodeSelect = true;
// @ts-expect-error — opaque scalars cannot be nested selection objects
const nestedCountryCodeSelect: CountryCodeSelect = {};

const opaqueSelect = { countryOfOrigin: true } satisfies MediaSelect;
type OpaqueMedia = SelectedMedia<typeof opaqueSelect>;

declare const opaqueMedia: OpaqueMedia;

const countryCode: unknown = opaqueMedia.countryOfOrigin;

// ── Page wrappers ─────────────────────────────────────────────────────────────
// `SelectedMediaPage` must mirror the character/staff/user page mapped types
// and must not collapse to `unknown` for non-literal inputs.

type WholeMediaPage = SelectedMediaPage<MediaPageSelect>;

type WholeMediaPageIsNotUnknown = Expect<
	Equal<Equal<WholeMediaPage, unknown>, false>
>;

declare const wholeMediaPage: WholeMediaPage;

const wholePageInfo = wholeMediaPage.pageInfo;
const wholeMedia = wholeMediaPage.media;

const pageSelect = {
	pageInfo: { hasNextPage: true },
	media: { id: true },
} satisfies MediaPageSelect;

type ChosenMediaPage = SelectedMediaPage<typeof pageSelect>;

declare const chosenMediaPage: ChosenMediaPage;

const hasNextPage: boolean | null | undefined =
	chosenMediaPage.pageInfo?.hasNextPage;
const chosenMedia = chosenMediaPage.media;
const firstChosenMedia = chosenMedia?.[0];

if (firstChosenMedia) {
	const chosenId: number = firstChosenMedia.id;
	// @ts-expect-error — title was not selected
	const chosenTitle = firstChosenMedia.title;
}

// ── Nested arrays ─────────────────────────────────────────────────────────────
// Nested arrays (`MediaListCollection.customLists` is `Array<Array<MediaList>>`)
// must preserve every nesting layer instead of recursing into array methods.

const nestedArraySelect = {
	customLists: { id: true },
} satisfies MediaListCollectionSelect;

type NestedArrayList = SelectedMediaListCollection<typeof nestedArraySelect>;

declare const nestedArrayList: NestedArrayList;

const customLists = nestedArrayList.customLists;
const firstCustomListGroup = customLists?.[0];
const firstCustomList = firstCustomListGroup?.[0];

if (firstCustomList) {
	const customListId: number = firstCustomList.id;
	// @ts-expect-error — notes was not selected
	const customListNotes = firstCustomList.notes;
}
